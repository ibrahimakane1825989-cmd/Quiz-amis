/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { LobbyScreen } from './components/LobbyScreen';
import { GameArena } from './components/GameArena';
import { PodiumScreen } from './components/PodiumScreen';
import { AdminPanel } from './components/AdminPanel';
import { ProfileModal } from './components/ProfileModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import {
  OFFICIAL_PLAYERS,
  ADMIN_ACCESS_CODE,
  PlayerScoreSummary,
  calculateAnswerPoints,
  evaluateAnswerLocally,
  sortLeaderboard,
} from './utils/quizRules';
import {
  getQuestionsForSubject,
  getSoloQuestionsForSubject,
  QuizQuestion,
} from './data/defaultQuestions';

export interface UserSession {
  id: string;
  name: string;
  avatar: string;
  isAdmin: boolean;
  adminCode?: string;
  sessionId?: string;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('quizbot_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [currentView, setCurrentView] = useState<'lobby' | 'arena' | 'podium'>('lobby');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isSoloMode, setIsSoloMode] = useState(false);

  // Synchronized Game State (45s per question)
  const [gameState, setGameState] = useState<{
    roomId: string;
    title: string;
    subject: string;
    lesson: string;
    status: 'lobby' | 'playing' | 'round_recap' | 'game_over';
    currentQuestionIndex: number;
    totalQuestions: number;
    currentQuestion: {
      id: string;
      subject: string;
      lesson: string;
      question: string;
      hint?: string;
      answer?: string;
      explanation?: string;
    } | null;
    timeRemaining: number;
    questionDurationSeconds: number;
    activePlayers: Array<{ id: string; name: string; avatar: string }>;
    scores: Array<PlayerScoreSummary & { isScoreSecret?: boolean; hasAnsweredCurrentQuestion?: boolean }>;
    submissionsForCurrentQuestion: any[];
    botReaction: string;
    winner?: PlayerScoreSummary;
    allQuestionsReview?: Array<{
      index: number;
      question: string;
      answer: string;
      explanation?: string;
      subject: string;
      lesson: string;
    }>;
  }>({
    roomId: 'defi-officiel',
    title: 'Grand Défi 1ère L2',
    subject: 'SVT',
    lesson: "L'organisation de la cellule (niveau 1ère L2)",
    status: 'lobby',
    currentQuestionIndex: 0,
    totalQuestions: 20,
    currentQuestion: null,
    timeRemaining: 45,
    questionDurationSeconds: 45,
    activePlayers: [],
    scores: OFFICIAL_PLAYERS.map((p) => ({
      playerId: p.id,
      name: p.name,
      score: 0,
      correctAnswersCount: 0,
      fastestFirstCount: 0,
      avatar: p.avatar,
      isScoreSecret: true,
    })),
    submissionsForCurrentQuestion: [],
    botReaction: 'Bienvenue au Grand Défi 1ère L2 (45s par question) !',
    allQuestionsReview: [],
  });

  // Client-side Solo Game State (for offline mode or instant training)
  const soloQuestionsRef = useRef<QuizQuestion[]>([]);
  const soloScoresRef = useRef<Record<string, PlayerScoreSummary>>({});

  // Prevent copying and context menu globally as requested
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      e.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleCopy);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleCopy);
    };
  }, []);

  // Heartbeat for single exclusive user session
  useEffect(() => {
    if (!currentUser || !currentUser.sessionId) return;

    const interval = setInterval(() => {
      fetch('/api/game/session/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId: currentUser.id,
          sessionId: currentUser.sessionId,
        }),
      }).catch(() => {});
    }, 15000);

    const handleUnload = () => {
      navigator.sendBeacon?.(
        '/api/game/session/logout',
        JSON.stringify({ playerId: currentUser.id, sessionId: currentUser.sessionId })
      );
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [currentUser]);

  // Real-time synchronization: Server-Sent Events (SSE) + fast polling fallback
  useEffect(() => {
    if (!currentUser || isSoloMode) return;

    let isSubscribed = true;

    // Join room on mount
    fetch('/api/game/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        playerId: currentUser.id,
        name: currentUser.name,
        avatar: currentUser.avatar,
      }),
    }).catch(() => {});

    const updateState = (data: any) => {
      if (!isSubscribed) return;
      setGameState(data);

      // Auto-route view based on server status
      if (data.status === 'playing' || data.status === 'round_recap') {
        setCurrentView('arena');
      } else if (data.status === 'game_over') {
        setCurrentView('podium');
      }
    };

    // 1. Server-Sent Events (instant real-time stream)
    let eventSource: EventSource | null = null;
    try {
      eventSource = new EventSource('/api/game/stream');
      eventSource.addEventListener('room_update', (e) => {
        try {
          const data = JSON.parse(e.data);
          updateState(data);
        } catch {}
      });
      eventSource.onerror = () => {
        // SSE error handled by fallback polling
      };
    } catch {}

    // 2. Regular polling fallback (every 2 seconds)
    const fetchState = async () => {
      try {
        const res = await fetch('/api/game/state');
        if (!res.ok) return;
        const data = await res.json();
        updateState(data);
      } catch {}
    };

    fetchState();
    const interval = setInterval(fetchState, 2000);

    return () => {
      isSubscribed = false;
      clearInterval(interval);
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [currentUser, isSoloMode]);

  // Handle Login
  const handleLoginSuccess = (user: UserSession) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('quizbot_user', JSON.stringify(user));
    } catch {}
  };

  // Handle Logout (Releases session exclusivity)
  const handleLogout = async () => {
    if (currentUser?.sessionId) {
      try {
        await fetch('/api/game/session/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            playerId: currentUser.id,
            sessionId: currentUser.sessionId,
          }),
        });
      } catch {}
    }
    setCurrentUser(null);
    setIsSoloMode(false);
    setCurrentView('lobby');
    try {
      localStorage.removeItem('quizbot_user');
    } catch {}
  };

  // Update Avatar from Profile
  const handleUpdateAvatar = (newAvatar: string) => {
    if (!currentUser) return;
    const updated = { ...currentUser, avatar: newAvatar };
    setCurrentUser(updated);
    try {
      localStorage.setItem('quizbot_user', JSON.stringify(updated));
    } catch {}

    // Send update to server room
    fetch('/api/game/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        playerId: currentUser.id,
        name: currentUser.name,
        avatar: newAvatar,
      }),
    }).catch(() => {});

    // Update local state immediately
    setGameState((prev) => ({
      ...prev,
      scores: prev.scores.map((s) =>
        s.playerId === currentUser.id ? { ...s, avatar: newAvatar } : s
      ),
      activePlayers: prev.activePlayers.map((p) =>
        p.id === currentUser.id ? { ...p, avatar: newAvatar } : p
      ),
    }));

    if (isSoloMode && soloScoresRef.current[currentUser.id]) {
      soloScoresRef.current[currentUser.id].avatar = newAvatar;
    }
  };

  // Submit Answer: Strictly secret during gameplay!
  // "Chaque question trouver sera secret sans que tu sache que tu as trouvé. Jusqu'à fin du jeu là où les résultats seront donnés au classement avec nombre de point cumulé."
  const handleSubmitAnswer = async (answer: string) => {
    if (isSoloMode) {
      const currentQ = soloQuestionsRef.current[gameState.currentQuestionIndex];
      const localEval = evaluateAnswerLocally(
        answer,
        currentQ.answer,
        currentQ.acceptableKeywords
      );

      // Store secretly in soloScoresRef
      if (localEval.isCorrect) {
        const points = 5; // Solo top bonus
        if (!soloScoresRef.current[currentUser!.id]) {
          soloScoresRef.current[currentUser!.id] = {
            playerId: currentUser!.id,
            name: currentUser!.name,
            score: 0,
            correctAnswersCount: 0,
            fastestFirstCount: 0,
            avatar: currentUser!.avatar,
          };
        }
        soloScoresRef.current[currentUser!.id].score += points;
        soloScoresRef.current[currentUser!.id].correctAnswersCount += 1;
        soloScoresRef.current[currentUser!.id].fastestFirstCount += 1;
      }

      // Update submissions with secret flag
      setGameState((prev) => ({
        ...prev,
        submissionsForCurrentQuestion: [
          ...prev.submissionsForCurrentQuestion,
          {
            playerId: currentUser!.id,
            playerName: currentUser!.name,
            avatar: currentUser!.avatar,
            hasSubmitted: true,
            answer,
            timestamp: Date.now(),
          },
        ],
      }));

      return {
        success: true,
        isSealed: true,
        message: 'Réponse enregistrée sous scellé ! Les points restent secrets jusqu’au couronnement final.',
      };
    }

    // Multiplayer Server Submission (Secret)
    const res = await fetch('/api/game/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        playerId: currentUser!.id,
        answer,
      }),
    });

    const data = await res.json();
    return {
      success: data.success,
      isSealed: true,
      message: data.message || 'Réponse enregistrée sous scellé !',
    };
  };

  // Start tournament via Admin (Without leaking questions to admin)
  const handleAdminStartGame = async (config: {
    topicId: string;
    subject: string;
    lesson: string;
    questionCount: number;
    durationSeconds: number;
  }) => {
    await fetch('/api/game/admin/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminCode: currentUser?.adminCode || ADMIN_ACCESS_CODE,
        topicId: config.topicId,
        subject: config.subject,
        lesson: config.lesson,
        questionCount: config.questionCount,
        durationSeconds: config.durationSeconds || 45,
      }),
    });
    setIsSoloMode(false);
    setCurrentView('arena');
  };

  // Admin next question
  const handleAdminNextQuestion = async () => {
    await fetch('/api/game/admin/next', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminCode: currentUser?.adminCode || ADMIN_ACCESS_CODE,
      }),
    });
  };

  // Admin reset
  const handleAdminResetGame = async () => {
    await fetch('/api/game/admin/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        adminCode: currentUser?.adminCode || ADMIN_ACCESS_CODE,
      }),
    });
    setCurrentView('lobby');
  };

  // Start Solo Challenge (20 questions 1ère L2 against virtual competitors, 45s timer)
  // Utilise exclusivement la banque de questions solo distincte du tournoi collectif
  const handleStartSoloChallenge = (topicId = 'svt-cellule') => {
    const questions = getSoloQuestionsForSubject(topicId, 20);
    soloQuestionsRef.current = questions;

    const initialScores: Record<string, PlayerScoreSummary> = {};
    OFFICIAL_PLAYERS.forEach((p) => {
      initialScores[p.id] = {
        playerId: p.id,
        name: p.name,
        score: p.id === currentUser?.id ? 0 : Math.floor(Math.random() * 12),
        correctAnswersCount: 0,
        fastestFirstCount: 0,
        avatar: p.avatar,
      };
    });
    soloScoresRef.current = initialScores;

    setIsSoloMode(true);
    setGameState({
      roomId: 'solo-practice',
      title: `Défi Solo 1ère L2 : ${questions[0].subject}`,
      subject: questions[0].subject,
      lesson: questions[0].lesson,
      status: 'playing',
      currentQuestionIndex: 0,
      totalQuestions: questions.length,
      currentQuestion: questions[0],
      timeRemaining: 45, // 45 seconds per question
      questionDurationSeconds: 45,
      activePlayers: [{ id: currentUser!.id, name: currentUser!.name, avatar: currentUser!.avatar }],
      scores: OFFICIAL_PLAYERS.map((p) => ({
        playerId: p.id,
        name: p.name,
        score: 0,
        correctAnswersCount: 0,
        fastestFirstCount: 0,
        avatar: p.avatar,
        isScoreSecret: true,
      })),
      submissionsForCurrentQuestion: [],
      botReaction: 'Défi solo 1ère L2 lancé ! 45 secondes par question. Réponses secrètes jusqu’au classement final.',
      allQuestionsReview: questions.map((q, idx) => ({
        index: idx + 1,
        question: q.question,
        answer: q.answer,
        explanation: q.explanation,
        subject: q.subject,
        lesson: q.lesson,
      })),
    });

    setCurrentView('arena');
  };

  // Solo mode clock ticker (45s per question)
  useEffect(() => {
    if (!isSoloMode || currentView !== 'arena') return;

    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.status === 'playing') {
          if (prev.timeRemaining <= 1) {
            // End of question, transition to secret recap without revealing answer
            return {
              ...prev,
              status: 'round_recap',
              timeRemaining: 3,
              botReaction: `Temps écoulé pour la question ${prev.currentQuestionIndex + 1} ! Réponses scellées. Question suivante...`,
            };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        } else if (prev.status === 'round_recap') {
          if (prev.timeRemaining <= 1) {
            // Next question or end
            if (prev.currentQuestionIndex + 1 < soloQuestionsRef.current.length) {
              const nextIdx = prev.currentQuestionIndex + 1;
              const nextQ = soloQuestionsRef.current[nextIdx];
              return {
                ...prev,
                status: 'playing',
                currentQuestionIndex: nextIdx,
                currentQuestion: nextQ,
                timeRemaining: 45,
                questionDurationSeconds: 45,
                submissionsForCurrentQuestion: [],
                botReaction: `Question ${nextIdx + 1}/${soloQuestionsRef.current.length} : 45s pour répondre ! Le résultat restera secret.`,
              };
            } else {
              // Game over: Reveal cumulative scores!
              setCurrentView('podium');
              const finalSorted = sortLeaderboard(Object.values(soloScoresRef.current));
              return {
                ...prev,
                status: 'game_over',
                scores: finalSorted,
                winner: finalSorted[0],
              };
            }
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSoloMode, currentView]);

  if (!currentUser) {
    return (
      <>
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
        <OfflineIndicator />
      </>
    );
  }

  return (
    <>
      {currentView === 'lobby' && (
        <LobbyScreen
          currentUser={currentUser}
          gameState={gameState}
          onJoinMatch={() => setCurrentView('arena')}
          onOpenAdminPanel={() => setShowAdminPanel(true)}
          onStartSoloChallenge={handleStartSoloChallenge}
          onLogout={handleLogout}
          onOpenProfile={() => setShowProfileModal(true)}
        />
      )}

      {currentView === 'arena' && (
        <GameArena
          currentUser={currentUser}
          gameState={gameState}
          onSubmitAnswer={handleSubmitAnswer}
          onOpenAdminPanel={currentUser.isAdmin ? () => setShowAdminPanel(true) : undefined}
          onOpenProfile={() => setShowProfileModal(true)}
          onBackToLobby={() => {
            setIsSoloMode(false);
            setCurrentView('lobby');
          }}
        />
      )}

      {currentView === 'podium' && (
        <PodiumScreen
          currentUser={currentUser}
          scores={gameState.scores}
          subject={gameState.subject}
          lesson={gameState.lesson}
          totalQuestions={gameState.totalQuestions}
          allQuestionsReview={gameState.allQuestionsReview}
          onBackToLobby={() => {
            setIsSoloMode(false);
            setCurrentView('lobby');
          }}
          onRestart={async () => {
            setIsSoloMode(false);
            if (currentUser.isAdmin) {
              await fetch('/api/game/admin/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  adminCode: currentUser.adminCode || ADMIN_ACCESS_CODE,
                }),
              }).catch(() => {});
            } else {
              await fetch('/api/game/admin/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  adminCode: ADMIN_ACCESS_CODE,
                }),
              }).catch(() => {});
            }
            setGameState((prev) => ({ ...prev, status: 'lobby' }));
            setCurrentView('lobby');
          }}
          isAdmin={currentUser.isAdmin}
        />
      )}

      {/* User Profile Modal */}
      {showProfileModal && (
        <ProfileModal
          currentUser={currentUser}
          playerScore={gameState.scores.find((s) => s.playerId === currentUser.id)}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={() => setShowProfileModal(false)}
        />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && currentUser.isAdmin && (
        <AdminPanel
          adminCode={currentUser.adminCode || ADMIN_ACCESS_CODE}
          adminName={currentUser.name}
          currentRoomStatus={gameState.status}
          onStartGame={handleAdminStartGame}
          onNextQuestion={handleAdminNextQuestion}
          onResetGame={handleAdminResetGame}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      <OfflineIndicator />
    </>
  );
}
