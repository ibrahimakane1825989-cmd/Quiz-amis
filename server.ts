/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import {
  PRESET_TOPICS,
  QuizQuestion,
  getQuestionsForSubject,
} from './src/data/defaultQuestions';
import {
  OFFICIAL_PLAYERS,
  ADMIN_ACCESS_CODE,
  calculateAnswerPoints,
  evaluateAnswerLocally,
  sortLeaderboard,
  PlayerScoreSummary,
} from './src/utils/quizRules';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// AI Studio dev server runs on port 3000
const PORT = process.env.NODE_ENV === 'production' ? (Number(process.env.PORT) || 3000) : 3000;

app.use(express.json());

// Initialize Gemini API client on the server side
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// ==========================================
// SESSION EXCLUSIVITY MANAGEMENT (One session per user)
// ==========================================
interface ActiveSession {
  playerId: string;
  playerName: string;
  sessionId: string;
  lastSeen: number;
}

const activeSessions = new Map<string, ActiveSession>();

// Cleanup stale sessions (inactive for more than 45 seconds)
setInterval(() => {
  const now = Date.now();
  for (const [playerId, session] of activeSessions.entries()) {
    if (now - session.lastSeen > 45000) {
      activeSessions.delete(playerId);
    }
  }
}, 5000);

// ==========================================
// REAL-TIME SERVER-SENT EVENTS (SSE) BROADCAST
// ==========================================
const sseClients = new Set<Response>();

function broadcastRoomUpdate() {
  const payload = JSON.stringify(getSanitizedGameState());
  const message = `event: room_update\ndata: ${payload}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch {
      sseClients.delete(client);
    }
  }
}

// ==========================================
// GAME STATE MANAGEMENT (Synchronized Room)
// ==========================================

export interface PlayerSubmission {
  playerId: string;
  playerName: string;
  avatar: string;
  answer: string;
  isCorrect: boolean;
  pointsAwarded: number;
  rank: number;
  timestamp: number;
  aiFeedback?: string;
}

export interface GameRoom {
  id: string;
  title: string;
  subject: string;
  lesson: string;
  status: 'lobby' | 'playing' | 'round_recap' | 'game_over';
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  questionStartedAt: number;
  questionDurationSeconds: number; // 45 seconds default
  activePlayers: Record<string, { id: string; name: string; avatar: string; lastSeen: number }>;
  scores: Record<string, PlayerScoreSummary>;
  submissionsForCurrentQuestion: PlayerSubmission[];
  allSubmissions: PlayerSubmission[];
  botReaction: string;
  winner?: PlayerScoreSummary;
}

// Initial questions: SVT 1ère L2 (L'organisation de la cellule)
const initialQuestions = getQuestionsForSubject('svt-cellule', 20);

// Initialize scores for all official players
const initialScores: Record<string, PlayerScoreSummary> = {};
OFFICIAL_PLAYERS.forEach((p) => {
  initialScores[p.id] = {
    playerId: p.id,
    name: p.name,
    score: 0,
    correctAnswersCount: 0,
    fastestFirstCount: 0,
    avatar: p.avatar,
  };
});

let room: GameRoom = {
  id: 'defi-officiel',
  title: 'Grand Défi 1ère L2',
  subject: 'SVT',
  lesson: "L'organisation de la cellule (niveau 1ère L2)",
  status: 'lobby',
  questions: initialQuestions,
  currentQuestionIndex: 0,
  questionStartedAt: Date.now(),
  questionDurationSeconds: 45, // Required: 45s countdown
  activePlayers: {},
  scores: initialScores,
  submissionsForCurrentQuestion: [],
  allSubmissions: [],
  botReaction: 'Bienvenue au Grand Défi 1ère L2 ! Connectez-vous et préparez vos neurones (45s par question) !',
};

// Automatic game clock / ticker (1000ms)
setInterval(() => {
  const now = Date.now();
  let stateChanged = false;

  if (room.status === 'playing') {
    const elapsed = (now - room.questionStartedAt) / 1000;
    const remaining = room.questionDurationSeconds - elapsed;

    // Check if time expired
    if (remaining <= 0) {
      // Transition to round interlude (3s) without leaking answer!
      room.status = 'round_recap';
      room.questionStartedAt = now;
      room.botReaction = `Temps écoulé pour la question ${room.currentQuestionIndex + 1} ! Réponses enregistrées sous scellé. Question suivante...`;
      stateChanged = true;
    }
  } else if (room.status === 'round_recap') {
    const elapsed = (now - room.questionStartedAt) / 1000;
    // Show quick interlude for 3 seconds then go to next question
    if (elapsed >= 3) {
      if (room.currentQuestionIndex + 1 < room.questions.length) {
        room.currentQuestionIndex += 1;
        room.status = 'playing';
        room.questionStartedAt = now;
        room.submissionsForCurrentQuestion = [];
        room.botReaction = `Question ${room.currentQuestionIndex + 1}/${room.questions.length} : 45 secondes pour répondre ! Le résultat restera secret.`;
        stateChanged = true;
      } else {
        // Tournament completed! Crown the winner and reveal all cumulative scores
        room.status = 'game_over';
        const sorted = sortLeaderboard(Object.values(room.scores));
        room.winner = sorted[0];
        room.botReaction = `🏆 Tournoi terminé ! Gloire au champion ${sorted[0]?.name} avec ${sorted[0]?.score} points cumulés !`;
        stateChanged = true;
      }
    }
  }

  // Broadcast to all clients every second
  broadcastRoomUpdate();
}, 1000);

// Helper to sanitize state based on secrecy rules:
// "Chaque question trouver sera secret sans que tu sache que tu as trouvé. Jusqu'à fin du jeu là où les résultats seront donnés au classement avec nombre de point cumulé."
function getSanitizedGameState() {
  const now = Date.now();
  const elapsed = (now - room.questionStartedAt) / 1000;
  const timeRemaining =
    room.status === 'playing'
      ? Math.max(0, Math.ceil(room.questionDurationSeconds - elapsed))
      : room.status === 'round_recap'
      ? Math.max(0, Math.ceil(3 - elapsed))
      : 0;

  const currentQ = room.questions[room.currentQuestionIndex];

  // In active game, strictly keep answer and hints secret from clients
  const safeQuestion = currentQ
    ? {
        id: currentQ.id,
        subject: currentQ.subject,
        lesson: currentQ.lesson,
        question: currentQ.question,
        hint: currentQ.hint,
        // Only reveal answers on game_over!
        answer: room.status === 'game_over' ? currentQ.answer : undefined,
        explanation: room.status === 'game_over' ? currentQ.explanation : undefined,
      }
    : null;

  // Mask submissions for current question to avoid revealing correctness during play
  const safeSubmissions = room.submissionsForCurrentQuestion.map((sub) => {
    if (room.status === 'game_over') {
      return sub; // Full reveal at end of match
    }
    // During game: secret! Only show that player submitted
    return {
      playerId: sub.playerId,
      playerName: sub.playerName,
      avatar: sub.avatar,
      hasSubmitted: true,
      timestamp: sub.timestamp,
    };
  });

  // Mask scores during gameplay so players cannot deduce who scored
  const sortedLeaderboard = sortLeaderboard(Object.values(room.scores));
  const safeScores = sortedLeaderboard.map((player) => {
    if (room.status === 'game_over') {
      return player; // Full reveal at the end!
    }
    // During match: keep cumulative score hidden or masked
    return {
      playerId: player.playerId,
      name: player.name,
      avatar: player.avatar,
      score: 0, // Hidden during match
      isScoreSecret: true,
      correctAnswersCount: 0,
      fastestFirstCount: 0,
      hasAnsweredCurrentQuestion: room.submissionsForCurrentQuestion.some(
        (s) => s.playerId === player.playerId
      ),
    };
  });

  // On game_over, provide full review of all questions with answers and stats
  const allQuestionsReview =
    room.status === 'game_over'
      ? room.questions.map((q, qIndex) => {
          const subs = room.allSubmissions.filter((s) => s.answer && s.timestamp);
          return {
            index: qIndex + 1,
            question: q.question,
            answer: q.answer,
            explanation: q.explanation,
            subject: q.subject,
            lesson: q.lesson,
          };
        })
      : [];

  return {
    roomId: room.id,
    title: room.title,
    subject: room.subject,
    lesson: room.lesson,
    status: room.status,
    currentQuestionIndex: room.currentQuestionIndex,
    totalQuestions: room.questions.length,
    currentQuestion: safeQuestion,
    timeRemaining,
    questionDurationSeconds: room.questionDurationSeconds,
    activePlayers: Object.values(room.activePlayers),
    scores: safeScores,
    submissionsForCurrentQuestion: safeSubmissions,
    botReaction: room.botReaction,
    winner: room.status === 'game_over' ? room.winner : undefined,
    allQuestionsReview,
  };
}

// ==========================================
// REST API & SSE ROUTES
// ==========================================

// Server-Sent Events Endpoint for zero-latency live sync
app.get('/api/game/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  // Send initial state immediately
  res.write(`event: room_update\ndata: ${JSON.stringify(getSanitizedGameState())}\n\n`);

  sseClients.add(res);

  req.on('close', () => {
    sseClients.delete(res);
  });
});

// Exclusive Session Login
app.post('/api/game/session/login', (req, res) => {
  const { playerId, playerName, sessionId, force } = req.body;

  if (!playerId || !sessionId) {
    return res.status(400).json({ success: false, error: 'Identifiant et session requis.' });
  }

  const existing = activeSessions.get(playerId);
  const now = Date.now();

  // If session is already active on another client/tab and not expired
  if (existing && existing.sessionId !== sessionId && now - existing.lastSeen < 45000 && !force) {
    return res.status(409).json({
      success: false,
      isLocked: true,
      error: `Ce compte est déjà connecté sur un autre appareil ou onglet. Impossible de se connecter en double.`,
      activeSessionId: existing.sessionId,
    });
  }

  // Register or claim active session
  activeSessions.set(playerId, {
    playerId,
    playerName: playerName || playerId,
    sessionId,
    lastSeen: now,
  });

  res.json({ success: true, message: 'Session exclusive enregistrée.' });
});

// Heartbeat to keep session alive
app.post('/api/game/session/heartbeat', (req, res) => {
  const { playerId, sessionId } = req.body;
  if (!playerId || !sessionId) {
    return res.status(400).json({ success: false });
  }

  const existing = activeSessions.get(playerId);
  if (existing && existing.sessionId === sessionId) {
    existing.lastSeen = Date.now();
    return res.json({ success: true });
  }

  if (!existing) {
    activeSessions.set(playerId, {
      playerId,
      playerName: playerId,
      sessionId,
      lastSeen: Date.now(),
    });
    return res.json({ success: true });
  }

  res.status(409).json({ success: false, isLocked: true, error: 'Session reprise par un autre appareil.' });
});

// Explicit Logout to release session lock
app.post('/api/game/session/logout', (req, res) => {
  const { playerId, sessionId } = req.body;
  if (playerId) {
    const existing = activeSessions.get(playerId);
    if (!sessionId || (existing && existing.sessionId === sessionId)) {
      activeSessions.delete(playerId);
    }
  }
  res.json({ success: true, message: 'Session libérée avec succès.' });
});

// Get current game room state (Polling fallback)
app.get('/api/game/state', (req, res) => {
  res.json(getSanitizedGameState());
});

// Join the lobby / update heartbeat
app.post('/api/game/join', (req, res) => {
  const { playerId, name, avatar } = req.body;
  if (!playerId || !name) {
    return res.status(400).json({ error: 'Player ID and name required' });
  }

  room.activePlayers[playerId] = {
    id: playerId,
    name,
    avatar: avatar || '👤',
    lastSeen: Date.now(),
  };

  if (!room.scores[playerId]) {
    room.scores[playerId] = {
      playerId,
      name,
      score: 0,
      correctAnswersCount: 0,
      fastestFirstCount: 0,
      avatar: avatar || '👤',
    };
  } else if (avatar) {
    room.scores[playerId].avatar = avatar;
    room.scores[playerId].name = name;
  }

  broadcastRoomUpdate();
  res.json({ success: true, activeCount: Object.keys(room.activePlayers).length });
});

// Submit player answer
// Strictly SECRET: does not return whether answer was right or wrong!
// "Chaque question trouver sera secret sans que tu sache que tu as trouvé. Jusqu'à fin du jeu là où les résultats seront donnés au classement avec nombre de point cumulé."
app.post('/api/game/submit', async (req, res) => {
  const { playerId, answer } = req.body;

  if (room.status !== 'playing') {
    return res.status(400).json({ error: "La question n'est plus active." });
  }

  const currentQ = room.questions[room.currentQuestionIndex];
  if (!currentQ) {
    return res.status(400).json({ error: 'Aucune question en cours.' });
  }

  // Check if player already submitted for this question
  const alreadySubmitted = room.submissionsForCurrentQuestion.find(
    (s) => s.playerId === playerId
  );
  if (alreadySubmitted) {
    return res.status(400).json({ error: 'Vous avez déjà répondu à cette question.' });
  }

  const player = room.activePlayers[playerId] || OFFICIAL_PLAYERS.find((p) => p.id === playerId) || {
    id: playerId,
    name: 'Joueur',
    avatar: '👤',
  };

  // Evaluate answer secretly on the server
  let isCorrect = false;
  let aiFeedback = '';

  const localEval = evaluateAnswerLocally(
    answer,
    currentQ.answer,
    currentQ.acceptableKeywords
  );

  if (localEval.isCorrect) {
    isCorrect = true;
    aiFeedback = 'Exactement ! Réponse validée.';
  } else if (ai && answer.trim().length >= 2) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `Tu es l'arbitre IA d'un quiz scolaire officiel pour la classe de 1ère L2.
Question: "${currentQ.question}"
Réponse attendue: "${currentQ.answer}"
Mots-clés acceptés: ${JSON.stringify(currentQ.acceptableKeywords)}
Réponse fournie par l'élève: "${answer}"

Est-ce que la réponse de l'élève est exacte ou sémantiquement équivalente (prends en compte les petites fautes de frappe, l'absence d'articles, les tournures de phrases, les synonymes valides) ?
Réponds EXCLUSIVEMENT au format JSON:
{"isCorrect": boolean, "feedback": "courte phrase explicative"}`,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.1,
        },
      });

      const parsed = JSON.parse(response.text || '{}');
      if (typeof parsed.isCorrect === 'boolean') {
        isCorrect = parsed.isCorrect;
        aiFeedback = parsed.feedback || (isCorrect ? 'Validé par l’IA !' : 'Réponse inexacte.');
      }
    } catch {
      isCorrect = localEval.isCorrect;
      aiFeedback = isCorrect ? 'Validé !' : 'Réponse incorrecte.';
    }
  } else {
    isCorrect = false;
    aiFeedback = 'Réponse incorrecte.';
  }

  // Calculate points according to rule:
  // 1st = 5 pts, 2nd = 4 pts, rest = 3 pts
  let pointsAwarded = 0;
  let correctRank = 0;

  if (isCorrect) {
    const priorCorrect = room.submissionsForCurrentQuestion.filter((s) => s.isCorrect).length;
    correctRank = priorCorrect + 1;
    pointsAwarded = calculateAnswerPoints(correctRank);

    if (!room.scores[playerId]) {
      room.scores[playerId] = {
        playerId,
        name: player.name,
        score: 0,
        correctAnswersCount: 0,
        fastestFirstCount: 0,
        avatar: player.avatar,
      };
    }
    room.scores[playerId].score += pointsAwarded;
    room.scores[playerId].correctAnswersCount += 1;
    if (correctRank === 1) {
      room.scores[playerId].fastestFirstCount += 1;
    }
  }

  const submission: PlayerSubmission = {
    playerId,
    playerName: player.name,
    avatar: player.avatar,
    answer,
    isCorrect,
    pointsAwarded,
    rank: correctRank,
    timestamp: Date.now(),
    aiFeedback,
  };

  room.submissionsForCurrentQuestion.push(submission);
  room.allSubmissions.push(submission);

  // Discreet commentary: do NOT reveal who found the answer or points!
  room.botReaction = `Réponse de ${player.name} enregistrée ! Le verdict reste secret jusqu'au couronnement final.`;

  // If all connected active players have answered, proceed to short interlude
  const activeCount = Object.keys(room.activePlayers).length;
  if (activeCount > 0 && room.submissionsForCurrentQuestion.length >= activeCount) {
    room.status = 'round_recap';
    room.questionStartedAt = Date.now();
    room.botReaction = `Tous les participants ont répondu ! Réponses scellées. Question suivante...`;
  }

  broadcastRoomUpdate();

  // Crucial: return secret confirmation without revealing correctness!
  res.json({
    success: true,
    isSealed: true,
    message: 'Réponse enregistrée sous scellé ! Le résultat sera révélé au classement final.',
  });
});

// =========================================================================
// Admin: Start challenge without leaking questions or answers to the admin!
// =========================================================================
app.post('/api/game/admin/start', async (req, res) => {
  const { adminCode, topicId, subject, lesson, questionCount = 20, durationSeconds = 45 } = req.body;

  if (adminCode !== ADMIN_ACCESS_CODE) {
    return res.status(403).json({ error: 'Code administrateur requis.' });
  }

  const count = Math.min(20, Math.max(5, Number(questionCount) || 20));
  const duration = Math.min(60, Math.max(15, Number(durationSeconds) || 45));

  // Determine questions purely on the server side
  let selectedQuestions: QuizQuestion[] = [];
  if (topicId) {
    selectedQuestions = getQuestionsForSubject(topicId, count);
  } else if (subject) {
    selectedQuestions = getQuestionsForSubject(subject, count);
  } else {
    selectedQuestions = getQuestionsForSubject('svt-cellule', count);
  }

  const chosenTopic = PRESET_TOPICS.find((t) => t.id === topicId || t.subject === subject) || PRESET_TOPICS[0];
  const finalSubject = subject || chosenTopic.subject;
  const finalLesson = lesson || chosenTopic.lesson;

  // Shuffle questions randomly for this match
  const shuffled = [...selectedQuestions].sort(() => Math.random() - 0.5).slice(0, count);

  // Reset scores for fresh match
  const freshScores: Record<string, PlayerScoreSummary> = {};
  OFFICIAL_PLAYERS.forEach((p) => {
    freshScores[p.id] = {
      playerId: p.id,
      name: p.name,
      score: 0,
      correctAnswersCount: 0,
      fastestFirstCount: 0,
      avatar: p.avatar,
    };
  });
  Object.values(room.activePlayers).forEach((p) => {
    freshScores[p.id] = {
      playerId: p.id,
      name: p.name,
      score: 0,
      correctAnswersCount: 0,
      fastestFirstCount: 0,
      avatar: p.avatar,
    };
  });

  room = {
    ...room,
    title: `Défi 1ère L2 : ${finalSubject}`,
    subject: finalSubject,
    lesson: finalLesson,
    status: 'playing',
    questions: shuffled,
    currentQuestionIndex: 0,
    questionStartedAt: Date.now(),
    questionDurationSeconds: duration,
    scores: freshScores,
    submissionsForCurrentQuestion: [],
    allSubmissions: [],
    botReaction: `🔥 Grand Défi lancé en direct ! ${count} questions (45s par question). Question 1/${count} : À vos réponses !`,
    winner: undefined,
  };

  broadcastRoomUpdate();

  // Crucial: DO NOT RETURN QUESTIONS OR ANSWERS TO THE ADMIN!
  res.json({
    success: true,
    roomStatus: room.status,
    subject: room.subject,
    lesson: room.lesson,
    questionCount: room.questions.length,
    durationSeconds: room.questionDurationSeconds,
    message: 'Défi lancé avec succès ! Les questions sont sous scellé par le QuizBot.',
  });
});

// Admin: Skip to next question immediately
app.post('/api/game/admin/next', (req, res) => {
  const { adminCode } = req.body;
  if (adminCode !== ADMIN_ACCESS_CODE) {
    return res.status(403).json({ error: 'Code administrateur requis.' });
  }

  if (room.currentQuestionIndex + 1 < room.questions.length) {
    room.currentQuestionIndex += 1;
    room.status = 'playing';
    room.questionStartedAt = Date.now();
    room.submissionsForCurrentQuestion = [];
    room.botReaction = `Question suivante activée par l'administrateur ! Q${room.currentQuestionIndex + 1}/${room.questions.length}`;
  } else {
    room.status = 'game_over';
    const sorted = sortLeaderboard(Object.values(room.scores));
    room.winner = sorted[0];
    room.botReaction = `🏆 Tournoi clôturé par l'arbitre ! Victoire de ${sorted[0]?.name} !`;
  }

  broadcastRoomUpdate();
  res.json({ success: true, currentIndex: room.currentQuestionIndex, status: room.status });
});

// Admin: Reset game room to lobby
app.post('/api/game/admin/reset', (req, res) => {
  const { adminCode } = req.body;
  if (adminCode !== ADMIN_ACCESS_CODE) {
    return res.status(403).json({ error: 'Code administrateur requis.' });
  }

  room.status = 'lobby';
  room.currentQuestionIndex = 0;
  room.submissionsForCurrentQuestion = [];
  room.botReaction = 'Salon de défi réinitialisé. En attente du prochain lancement !';
  broadcastRoomUpdate();
  res.json({ success: true });
});

// Preset topics list (metadata only: subject, lesson, icon, description - NO QUESTIONS OR ANSWERS EXPOSED TO ADMIN)
app.get('/api/game/presets', (req, res) => {
  const safePresets = PRESET_TOPICS.map((t) => ({
    id: t.id,
    subject: t.subject,
    lesson: t.lesson,
    icon: t.icon,
    color: t.color,
    description: t.description,
    questionCount: t.questions.length,
  }));
  res.json({ presets: safePresets });
});

// ==========================================
// STATIC ASSETS & VITE INTEGRATION
// ==========================================

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`QuizBot Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
