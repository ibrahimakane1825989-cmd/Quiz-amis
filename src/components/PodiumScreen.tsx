/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Crown,
  Medal,
  RotateCcw,
  Award,
  Zap,
  CheckCircle2,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from 'lucide-react';
import { PlayerScoreSummary } from '../utils/quizRules';
import { playVictorySound } from '../utils/soundEffects';
import { FullscreenButton } from './FullscreenButton';

interface QuestionReview {
  index: number;
  question: string;
  answer: string;
  explanation?: string;
  subject: string;
  lesson: string;
}

interface PodiumScreenProps {
  currentUser: {
    id: string;
    name: string;
    avatar: string;
    isAdmin: boolean;
  };
  scores: PlayerScoreSummary[];
  subject: string;
  lesson: string;
  totalQuestions: number;
  allQuestionsReview?: QuestionReview[];
  onRestart: () => void;
  onBackToLobby?: () => void;
  isAdmin: boolean;
}

export const PodiumScreen: React.FC<PodiumScreenProps> = ({
  currentUser,
  scores,
  subject,
  lesson,
  totalQuestions,
  allQuestionsReview = [],
  onRestart,
  onBackToLobby,
  isAdmin,
}) => {
  const [showReview, setShowReview] = useState(true);

  const champion = scores[0];
  const second = scores[1];
  const third = scores[2];

  useEffect(() => {
    // Sound fanfare
    playVictorySound();

    // Multi-stage confetti celebration
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6366f1', '#eab308', '#ec4899', '#3b82f6'],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6366f1', '#eab308', '#ec4899', '#3b82f6'],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between select-none relative overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header - Fullscreen Width */}
      <header className="w-full mx-auto flex flex-col items-center z-10 pt-2 relative">
        {onBackToLobby && (
          <div className="absolute left-0 top-0">
            <button
              onClick={onBackToLobby}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition cursor-pointer border border-slate-700 whitespace-nowrap shadow-sm"
              title="Retourner au Salon des Défis"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour au Salon</span>
            </button>
          </div>
        )}
        <div className="absolute right-0 top-0">
          <FullscreenButton />
        </div>
        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-500/30 whitespace-nowrap">
          🏆 Fin du Tournoi 1ère L2 • Révélation des Scores & Verdict Final
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-white mt-2 tracking-tight whitespace-nowrap">
          Couronnement & Classement Final
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mt-1">
          <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-bold whitespace-nowrap">{subject}</span>
          <span className="whitespace-nowrap">{lesson}</span>
          <span className="text-amber-400 font-semibold whitespace-nowrap">• {totalQuestions} questions résolues (45s chrono)</span>
        </div>
      </header>

      {/* Fullscreen Main Stage */}
      <main className="w-full mx-auto my-4 z-10 space-y-6">
        
        {/* Top 3 Podium Stage */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 items-end max-w-4xl mx-auto pt-4">
          
          {/* 2nd Place */}
          {second && (
            <div className="flex flex-col items-center">
              <div className="relative mb-2 shrink-0">
                <span className="text-4xl sm:text-6xl">{second.avatar}</span>
                <span className="absolute -top-3 -right-2 w-7 h-7 rounded-full bg-slate-300 text-slate-950 font-black text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">
                  2
                </span>
              </div>
              <p className="font-bold text-xs sm:text-base text-slate-200 text-center truncate max-w-[120px] sm:max-w-none whitespace-nowrap">
                {second.name}
              </p>
              <p className="font-mono font-black text-sm sm:text-lg text-slate-300 whitespace-nowrap">
                {second.score} pts
              </p>
              <div className="w-full h-28 sm:h-36 bg-gradient-to-t from-slate-800 to-slate-700/80 rounded-t-3xl border-t-2 border-slate-400 flex items-center justify-center shadow-lg mt-2">
                <Medal className="w-9 h-9 text-slate-300" />
              </div>
            </div>
          )}

          {/* 1st Place Champion */}
          {champion && (
            <div className="flex flex-col items-center -mt-8">
              <div className="relative mb-3 shrink-0">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-400 animate-bounce">
                  <Crown className="w-9 h-9 fill-amber-400 stroke-amber-600" />
                </div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-1 shadow-2xl shadow-amber-500/40 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl">{champion.avatar}</span>
                </div>
                <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center border-2 border-slate-900 shadow-md">
                  1
                </span>
              </div>
              <p className="font-black text-sm sm:text-lg text-amber-300 text-center truncate max-w-[140px] sm:max-w-none whitespace-nowrap">
                {champion.name}
              </p>
              <p className="font-mono font-black text-lg sm:text-2xl text-amber-400 whitespace-nowrap">
                {champion.score} pts cumulés
              </p>
              <div className="w-full h-36 sm:h-48 bg-gradient-to-t from-amber-600/40 via-amber-500/60 to-yellow-500/80 rounded-t-3xl border-t-4 border-yellow-300 flex flex-col items-center justify-center shadow-2xl mt-2 animate-glow">
                <Trophy className="w-12 h-12 text-yellow-200 fill-yellow-200/50" />
                <span className="text-[11px] font-black uppercase text-amber-950 bg-yellow-300 px-3 py-0.5 rounded-full mt-1 whitespace-nowrap shadow-md">
                  Grand Champion 1ère L2
                </span>
              </div>
            </div>
          )}

          {/* 3rd Place */}
          {third && (
            <div className="flex flex-col items-center">
              <div className="relative mb-2 shrink-0">
                <span className="text-4xl sm:text-6xl">{third.avatar}</span>
                <span className="absolute -top-3 -right-2 w-7 h-7 rounded-full bg-amber-700 text-white font-black text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">
                  3
                </span>
              </div>
              <p className="font-bold text-xs sm:text-base text-slate-200 text-center truncate max-w-[120px] sm:max-w-none whitespace-nowrap">
                {third.name}
              </p>
              <p className="font-mono font-black text-sm sm:text-lg text-amber-600 whitespace-nowrap">
                {third.score} pts
              </p>
              <div className="w-full h-20 sm:h-28 bg-gradient-to-t from-amber-950 to-amber-900/80 rounded-t-3xl border-t-2 border-amber-600 flex items-center justify-center shadow-lg mt-2">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
            </div>
          )}
        </div>

        {/* Widescreen 2-Column Section: Leaderboard + Detailed Correction */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 (7 cols): Complete Leaderboard (1st to Last) */}
          <div className="xl:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Classement Général & Points Cumulés (Du 1er au dernier)</span>
              </span>
              <span className="text-xs text-amber-400 font-semibold whitespace-nowrap">
                {scores.length} participants
              </span>
            </h3>

            <div className="space-y-2.5">
              {scores.map((player, idx) => {
                const isMe = player.playerId === currentUser.id;
                return (
                  <div
                    key={player.playerId}
                    className={`p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      isMe
                        ? 'bg-indigo-950/80 border-indigo-400 shadow-lg ring-1 ring-indigo-400/50'
                        : idx === 0
                        ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                        : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 ${
                          idx === 0
                            ? 'bg-amber-400 text-slate-950 font-black'
                            : idx === 1
                            ? 'bg-slate-300 text-slate-950 font-black'
                            : idx === 2
                            ? 'bg-amber-700 text-white font-black'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-2xl shrink-0">{player.avatar}</span>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold truncate ${isMe ? 'text-indigo-200' : 'text-slate-100'} whitespace-nowrap`}>
                          {player.name} {isMe && <span className="text-indigo-400 font-semibold">(Moi)</span>}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-0.5">
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{player.correctAnswersCount} réponses exactes</span>
                          </span>
                          <span className="flex items-center gap-1 whitespace-nowrap">
                            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{player.fastestFirstCount}x plus rapide (+5 pts)</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-lg sm:text-xl font-black text-amber-400 whitespace-nowrap">
                        {player.score}
                      </span>
                      <span className="text-xs text-slate-400 ml-1 whitespace-nowrap">points</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2 (5 cols): Detailed Questions & Answers Correction */}
          <div className="xl:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                <h3 className="text-sm font-bold text-white whitespace-nowrap">
                  Correction Officielle des Questions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowReview(!showReview)}
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition whitespace-nowrap"
              >
                {showReview ? <span>Réduire</span> : <span>Développer</span>}
                {showReview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showReview && (
              <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
                {allQuestionsReview.length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-4 text-center">
                    Toutes les questions résolues pendant la session sont archivées avec leurs explications pédagogiques.
                  </p>
                ) : (
                  allQuestionsReview.map((q) => (
                    <div key={q.index} className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                      <div className="flex items-start gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700/40 shrink-0 mt-0.5 whitespace-nowrap">
                          Q#{q.index}
                        </span>
                        <span className="text-xs font-semibold text-slate-200 leading-snug">{q.question}</span>
                      </div>
                      <div className="text-xs text-emerald-400 font-bold">
                        Réponse attendue : « {q.answer} »
                      </div>
                      {q.explanation && (
                        <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Action Footer */}
      <footer className="w-full mx-auto flex flex-wrap items-center justify-center gap-3 pt-4 pb-2 z-10">
        {onBackToLobby && (
          <button
            onClick={onBackToLobby}
            className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center gap-2 cursor-pointer transition whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Retour au Salon</span>
          </button>
        )}
        <button
          onClick={onRestart}
          className="px-7 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 cursor-pointer active:scale-95 transition whitespace-nowrap"
        >
          <RotateCcw className="w-4 h-4 shrink-0" />
          <span>Nouveau Tournoi / Défi Solo</span>
        </button>
      </footer>
    </div>
  );
};
