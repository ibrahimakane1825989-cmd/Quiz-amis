/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Trophy,
  Clock,
  HelpCircle,
  Award,
  Shield,
  Volume2,
  VolumeX,
  Lock,
  CheckCircle2,
  Hourglass,
  ArrowLeft,
} from 'lucide-react';
import { PlayerScoreSummary } from '../utils/quizRules';
import {
  playTickSound,
  playSubmissionSealedSound,
} from '../utils/soundEffects';
import { FullscreenButton } from './FullscreenButton';

interface SubmissionRecord {
  playerId: string;
  playerName: string;
  avatar: string;
  hasSubmitted?: boolean;
  answer?: string;
  isCorrect?: boolean;
  pointsAwarded?: number;
  rank?: number;
  timestamp?: number;
  aiFeedback?: string;
}

interface GameArenaProps {
  currentUser: {
    id: string;
    name: string;
    avatar: string;
    isAdmin: boolean;
  };
  gameState: {
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
    scores: Array<PlayerScoreSummary & { isScoreSecret?: boolean; hasAnsweredCurrentQuestion?: boolean }>;
    submissionsForCurrentQuestion: SubmissionRecord[];
    botReaction: string;
  };
  onSubmitAnswer: (answer: string) => Promise<{
    success: boolean;
    isSealed?: boolean;
    message?: string;
  }>;
  onOpenAdminPanel?: () => void;
  onOpenProfile?: () => void;
  onBackToLobby?: () => void;
}

export const GameArena: React.FC<GameArenaProps> = ({
  currentUser,
  gameState,
  onSubmitAnswer,
  onOpenAdminPanel,
  onOpenProfile,
  onBackToLobby,
}) => {
  const [inputAnswer, setInputAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedAnswerText, setSubmittedAnswerText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showMobileLeaderboard, setShowMobileLeaderboard] = useState(false);

  const prevQuestionIndexRef = useRef(gameState.currentQuestionIndex);
  const prevTimeRef = useRef(gameState.timeRemaining);

  // Reset form when question changes
  useEffect(() => {
    if (gameState.currentQuestionIndex !== prevQuestionIndexRef.current) {
      prevQuestionIndexRef.current = gameState.currentQuestionIndex;
      setInputAnswer('');
      setHasSubmitted(false);
      setSubmittedAnswerText('');
      setShowHint(false);
    }
  }, [gameState.currentQuestionIndex]);

  // Audio countdown ticks on last 4 seconds
  useEffect(() => {
    if (soundEnabled && gameState.status === 'playing') {
      if (
        gameState.timeRemaining <= 4 &&
        gameState.timeRemaining > 0 &&
        gameState.timeRemaining !== prevTimeRef.current
      ) {
        playTickSound();
      }
    }
    prevTimeRef.current = gameState.timeRemaining;
  }, [gameState.timeRemaining, gameState.status, soundEnabled]);

  // Check if current user already submitted on the server
  useEffect(() => {
    const existing = gameState.submissionsForCurrentQuestion.find(
      (s) => s.playerId === currentUser.id
    );
    if (existing && !hasSubmitted) {
      setHasSubmitted(true);
      if (existing.answer) {
        setSubmittedAnswerText(existing.answer);
      }
    }
  }, [gameState.submissionsForCurrentQuestion, currentUser.id, hasSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputAnswer.trim() || hasSubmitted || isSubmitting) return;

    const answerToSend = inputAnswer.trim();
    setIsSubmitting(true);
    try {
      await onSubmitAnswer(answerToSend);
      setHasSubmitted(true);
      setSubmittedAnswerText(answerToSend);

      if (soundEnabled) {
        playSubmissionSealedSound();
      }
    } catch (err) {
      console.error('Answer submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQ = gameState.currentQuestion;
  const duration = gameState.questionDurationSeconds || 45;
  const timeProgress =
    gameState.status === 'playing'
      ? Math.max(0, Math.min(100, (gameState.timeRemaining / duration) * 100))
      : 100;

  return (
    <div
      className="min-h-screen w-full bg-slate-950 flex flex-col justify-between select-none relative overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      {/* Top Bar */}
      <header className="bg-slate-900/90 border-b border-slate-800 backdrop-blur-md px-3 sm:px-6 lg:px-8 py-2.5 sticky top-0 z-30">
        <div className="w-full mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {onBackToLobby && (
              <button
                onClick={onBackToLobby}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition cursor-pointer border border-slate-700 shrink-0 whitespace-nowrap shadow-sm"
                title="Quitter la partie et retourner au Salon des Défis"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Retour</span>
              </button>
            )}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-base shadow-md border border-indigo-400/30 shrink-0">
              🤖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-tight whitespace-nowrap">QuizBot</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 font-bold border border-indigo-700/50 whitespace-nowrap">
                  {gameState.subject}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 font-bold border border-amber-500/40 whitespace-nowrap flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" />
                  Mode Secret
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-xs whitespace-nowrap">
                {gameState.lesson}
              </p>
            </div>
          </div>

          {/* User Score Badge & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <FullscreenButton />

            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 shadow-inner text-left cursor-pointer transition group"
              title="Mon Profil & Modifier mon avatar"
            >
              <span className="text-base group-hover:scale-110 transition shrink-0">{currentUser.avatar}</span>
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-slate-400 leading-none whitespace-nowrap">{currentUser.name}</div>
                <div className="text-xs font-bold text-amber-400 flex items-center gap-1 whitespace-nowrap">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Score secret</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
              title={soundEnabled ? 'Couper le son' : 'Activer le son'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => setShowMobileLeaderboard(true)}
              className="sm:hidden px-2.5 py-1.5 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-200 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Participants</span>
            </button>

            {currentUser.isAdmin && onOpenAdminPanel && (
              <button
                onClick={onOpenAdminPanel}
                className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 flex items-center gap-1 cursor-pointer transition whitespace-nowrap"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Admin</span>
              </button>
            )}
          </div>
        </div>

        {/* Question Progress Bar */}
        <div className="w-full mt-2 flex items-center gap-2">
          <div className="text-[11px] font-bold text-slate-400 shrink-0 whitespace-nowrap">
            Question {gameState.currentQuestionIndex + 1} / {gameState.totalQuestions}
          </div>
          <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
              style={{
                width: `${((gameState.currentQuestionIndex + 1) / gameState.totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Layout: Question Area + Leaderboard Sidebar - Fullscreen Width */}
      <main className="w-full px-3 sm:px-6 lg:px-8 py-3 grid grid-cols-1 xl:grid-cols-12 gap-5 flex-1 items-start">
        {/* Left Section (8 cols on desktop): Question & Answer Interaction */}
        <div className="xl:col-span-8 space-y-4">
          
          {/* Bot Live Reaction Commentary */}
          <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/70 border border-indigo-500/30 shadow-lg flex items-center gap-3">
            <div className="relative shrink-0">
              <span className="text-2xl">🤖</span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
            </div>
            <div className="flex-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-indigo-300 whitespace-nowrap">QuizBot Arbitre</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700/50 whitespace-nowrap">
                  En Direct
                </span>
              </div>
              <p className="text-slate-200 font-medium mt-0.5 text-xs leading-normal">{gameState.botReaction}</p>
            </div>
          </div>

          {/* Main Question Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden backdrop-blur-xl">
            {/* Countdown Clock Header (45 seconds) */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-600/30 whitespace-nowrap">
                  Question #{gameState.currentQuestionIndex + 1}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline truncate max-w-xs whitespace-nowrap">
                  {currentQ?.lesson || gameState.lesson}
                </span>
              </div>

              {/* Timer Pill: 45s countdown */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-bold text-xs shadow-md transition-all whitespace-nowrap ${
                  gameState.status === 'round_recap'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                    : gameState.timeRemaining <= 5
                    ? 'bg-red-950/90 text-red-300 border border-red-500/50 animate-pulse'
                    : 'bg-slate-800 text-amber-300 border border-amber-500/30'
                }`}
              >
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {gameState.status === 'round_recap'
                    ? `Prochaine : ${gameState.timeRemaining}s`
                    : `${gameState.timeRemaining}s / ${duration}s`}
                </span>
              </div>
            </div>

            {/* Time progress line */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full mb-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  gameState.timeRemaining <= 5
                    ? 'bg-red-500'
                    : 'bg-gradient-to-r from-amber-500 to-indigo-500'
                }`}
                style={{ width: `${timeProgress}%` }}
              />
            </div>

            {/* Question Text - Scaled for high readability */}
            <div className="min-h-[75px] flex items-center justify-center text-center my-2 px-2">
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed tracking-tight max-w-4xl mx-auto">
                {currentQ?.question || 'Préparation de la question...'}
              </p>
            </div>

            {/* Hint Box (if toggled) */}
            {currentQ?.hint && (
              <div className="mt-3 text-center">
                {showHint ? (
                  <div className="inline-block p-2.5 px-4 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-xs text-indigo-300 animate-fadeIn">
                    💡 <strong>Indice :</strong> {currentQ.hint}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowHint(true)}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-300 transition cursor-pointer whitespace-nowrap"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Afficher un indice</span>
                  </button>
                )}
              </div>
            )}

            {/* Round Interlude (Between questions - strictly WITHOUT leaking the answer) */}
            {gameState.status === 'round_recap' && (
              <div className="mt-6 p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 text-center shadow-inner">
                <div className="flex items-center justify-center gap-2 mb-1 text-sm font-bold text-amber-300">
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Chrono terminé pour cette question !</span>
                </div>
                <p className="text-xs text-slate-300">
                  Toutes les réponses sont scellées. Les points restent secrets. Préparation de la question suivante...
                </p>
              </div>
            )}

            {/* Answer Input Form */}
            <div className="mt-6">
              {hasSubmitted ? (
                /* Secret Feedback: user is told their answer is safely registered under seal */
                <div className="p-4 rounded-2xl border bg-indigo-950/80 border-indigo-500/50 text-indigo-100 text-center transition-all shadow-lg">
                  <div className="flex items-center justify-center gap-2 text-base font-black mb-1 whitespace-nowrap">
                    <Lock className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>RÉPONSE ENREGISTRÉE SOUS SCIELLÉ</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Votre réponse a été transmise au QuizBot. Le verdict (exactitude et points attribués) reste{' '}
                    <strong className="text-amber-300">strictement secret</strong> jusqu'au classement final !
                  </p>
                  {submittedAnswerText && (
                    <p className="text-[11px] text-slate-400 mt-2 font-mono">
                      Votre saisie : « {submittedAnswerText} »
                    </p>
                  )}
                </div>
              ) : gameState.status === 'round_recap' ? (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400">
                  Temps écoulé pour cette question. La suivante démarre dans un instant...
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputAnswer}
                      onChange={(e) => setInputAnswer(e.target.value)}
                      placeholder="Saisissez un mot-clé ou votre réponse ici..."
                      autoFocus
                      disabled={isSubmitting}
                      className="w-full pl-4 pr-28 py-3.5 rounded-2xl bg-slate-950 border-2 border-slate-700 text-white text-sm sm:text-base font-medium placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !inputAnswer.trim()}
                      className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-40 text-white text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 transition whitespace-nowrap"
                    >
                      <Send className="w-3.5 h-3.5 shrink-0" />
                      <span>Valider</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                    <span className="whitespace-nowrap flex items-center gap-1">
                      <Lock className="w-3 h-3 text-amber-400" />
                      Votre réponse reste secrète jusqu'à la fin du jeu.
                    </span>
                    <span className="whitespace-nowrap hidden sm:inline">Entrée pour envoyer</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Submissions feed for this question (Strictly shows participation, zero leaks of points or answers) */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-bold text-slate-300 mb-2.5 flex items-center justify-between">
              <span className="whitespace-nowrap">
                Participants ayant répondu ({gameState.submissionsForCurrentQuestion.length})
              </span>
              <span className="text-[10px] text-amber-400 font-normal whitespace-nowrap flex items-center gap-1">
                <Lock className="w-3 h-3" /> Résultats sous scellé
              </span>
            </h4>
            {gameState.submissionsForCurrentQuestion.length === 0 ? (
              <p className="text-xs text-slate-500 italic text-center py-2">
                Aucune réponse reçue pour le moment sur cette question. Soyez le plus rapide !
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {gameState.submissionsForCurrentQuestion.map((sub, i) => (
                  <div
                    key={sub.playerId + i}
                    className="px-3 py-1.5 rounded-xl border text-xs flex items-center gap-2 whitespace-nowrap bg-indigo-950/60 border-indigo-500/30 text-indigo-200 shadow-sm"
                  >
                    <span>{sub.avatar}</span>
                    <span className="font-semibold">{sub.playerName}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 flex items-center gap-1 whitespace-nowrap">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Réponse validée 🔒
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Live Synchronized Participants Roster (Secret scores until finish) */}
        <aside className="hidden xl:block xl:col-span-4 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl sticky top-20 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <h3 className="text-sm font-black text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">Participants en Direct</span>
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/50 flex items-center gap-1 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live
              </span>
            </div>

            {/* Secret Info Badge */}
            <div className="mb-3 p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200/90 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Les scores cumulés sont scellés et seront révélés au classement final.</span>
            </div>

            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {gameState.scores.map((player, index) => {
                const isMe = player.playerId === currentUser.id;
                const hasAnswered = gameState.submissionsForCurrentQuestion.some(
                  (s) => s.playerId === player.playerId
                );

                return (
                  <div
                    key={player.playerId}
                    className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                      isMe
                        ? 'bg-indigo-950/80 border-indigo-400 shadow-md shadow-indigo-950'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg shrink-0">{player.avatar}</span>
                      <div className="min-w-0">
                        <p className={`text-xs font-bold truncate ${isMe ? 'text-indigo-200' : 'text-slate-200'}`}>
                          {player.name} {isMe && '(Moi)'}
                        </p>
                        <p className="text-[10px] text-slate-400 flex items-center gap-1 whitespace-nowrap">
                          {hasAnswered ? (
                            <span className="text-emerald-400 font-medium flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> A répondu
                            </span>
                          ) : (
                            <span className="text-slate-500 flex items-center gap-1">
                              <Hourglass className="w-3 h-3" /> En réflexion...
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-bold text-amber-400/80 flex items-center gap-1 whitespace-nowrap">
                        <Lock className="w-3 h-3" /> Secret
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rules Reminder Card */}
            <div className="mt-4 p-3 bg-slate-950/80 rounded-2xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p className="font-bold text-slate-300 flex items-center gap-1 whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> Barème secret du Bot :
              </p>
              <div className="flex justify-between text-[10px] whitespace-nowrap text-slate-300">
                <span>🥇 1er : <strong>+5 pts</strong></span>
                <span>🥈 2ème : <strong>+4 pts</strong></span>
                <span>🥉 Reste : <strong>+3 pts</strong></span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Mobile Leaderboard Drawer Modal */}
      {showMobileLeaderboard && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">Participants en direct</span>
              </h3>
              <button
                onClick={() => setShowMobileLeaderboard(false)}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 cursor-pointer whitespace-nowrap"
              >
                Fermer
              </button>
            </div>
            <div className="overflow-y-auto space-y-2 flex-1">
              {gameState.scores.map((player, index) => {
                const isMe = player.playerId === currentUser.id;
                const hasAnswered = gameState.submissionsForCurrentQuestion.some(
                  (s) => s.playerId === player.playerId
                );
                return (
                  <div
                    key={player.playerId}
                    className={`p-2.5 rounded-xl border flex items-center justify-between ${
                      isMe ? 'bg-indigo-950 border-indigo-500' : 'bg-slate-950/60 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-base shrink-0">{player.avatar}</span>
                      <span className="text-xs font-bold text-white truncate">{player.name}</span>
                    </div>
                    <span className="text-xs font-mono text-amber-400 flex items-center gap-1 whitespace-nowrap">
                      {hasAnswered ? '✅ Répondu' : '🔒 Secret'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
