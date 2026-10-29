/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowLeft,
  Play,
  RotateCcw,
  SkipForward,
  BookOpen,
  Clock,
  ListOrdered,
  Loader2,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sliders,
} from 'lucide-react';
import { PRESET_TOPICS } from '../data/defaultQuestions';

interface AdminPanelProps {
  adminCode: string;
  adminName: string;
  currentRoomStatus: string;
  onStartGame: (config: {
    topicId: string;
    subject: string;
    lesson: string;
    questionCount: number;
    durationSeconds: number;
  }) => Promise<void>;
  onNextQuestion: () => Promise<void>;
  onResetGame: () => Promise<void>;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  adminCode,
  adminName,
  currentRoomStatus,
  onStartGame,
  onNextQuestion,
  onResetGame,
  onClose,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('svt-cellule');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [durationSeconds, setDurationSeconds] = useState<number>(45);
  const [isStarting, setIsStarting] = useState(false);

  const selectedTopic = PRESET_TOPICS.find((t) => t.id === selectedTopicId) || PRESET_TOPICS[0];

  const handleLaunchTournament = async () => {
    setIsStarting(true);
    try {
      await onStartGame({
        topicId: selectedTopic.id,
        subject: selectedTopic.subject,
        lesson: selectedTopic.lesson,
        questionCount,
        durationSeconds,
      });
      onClose();
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-slate-200 cursor-pointer transition whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour</span>
            </button>
            <div className="w-9 h-9 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-lg shrink-0">
              👑
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-black text-white flex items-center gap-2 flex-wrap">
                <span className="truncate">Gestion du Défi 1ère L2</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 whitespace-nowrap">
                  Arbitre : {adminName}
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 truncate">
                Chrono, nombre de questions et matière officielle du jour
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-xl bg-slate-700/60 hover:bg-slate-600 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer transition whitespace-nowrap"
          >
            Fermer
          </button>
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Live Game Controls if already playing */}
          {currentRoomStatus === 'playing' && (
            <div className="p-4 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-bold text-indigo-200 whitespace-nowrap">
                  Un tournoi est actuellement en cours !
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onNextQuestion}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                  <span>Passer question</span>
                </button>
                <button
                  onClick={onResetGame}
                  className="px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Arrêter / Réinitialiser</span>
                </button>
              </div>
            </div>
          )}

          {/* Strict Secrecy Banner */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                <span>Confidentialité et Équité Garantie</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                  L'admin participe au jeu
                </span>
              </h4>
              <p className="text-slate-300 mt-1 leading-relaxed">
                Conformément aux règles du défi, le contenu exact des questions et les réponses sont
                conservés <strong>sous scellé secret par le QuizBot</strong>. Vous découvrirez les questions
                en direct sur l'arène en même temps que tous les autres participants.
              </p>
            </div>
          </div>

          {/* 1. Topic Selection (1ère L2 Curriculum) */}
          <div>
            <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>1. Choisir la matière et la leçon du jour (Programme 1ère L2)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRESET_TOPICS.map((topic) => {
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-indigo-950/90 border-indigo-400 text-white shadow-lg ring-1 ring-indigo-500/30'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-2xl">{topic.icon}</span>
                        {isSelected ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/50 flex items-center gap-1 whitespace-nowrap">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Sélectionné
                          </span>
                        ) : (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 whitespace-nowrap">
                            1ère L2
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-xs text-white leading-tight">{topic.subject}</p>
                      <p className="text-[11px] text-indigo-300 mt-0.5 font-medium leading-snug">
                        {topic.lesson}
                      </p>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 line-clamp-2">
                      {topic.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Chrono & Question Count Configuration */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>2. Paramètres du Chrono et Nombre de Questions</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Question Count */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <ListOrdered className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="whitespace-nowrap">Nombre de questions par défi :</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 15, 20].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setQuestionCount(count)}
                      className={`py-2 rounded-xl text-xs font-bold transition border cursor-pointer whitespace-nowrap ${
                        questionCount === count
                          ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {count} Qs
                    </button>
                  ))}
                </div>
              </div>

              {/* Chrono Timer */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="whitespace-nowrap">Temps du chrono par question :</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {[15, 20, 25, 30, 45].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => setDurationSeconds(sec)}
                      className={`py-2 rounded-xl text-xs font-bold transition border cursor-pointer whitespace-nowrap ${
                        durationSeconds === sec
                          ? 'bg-amber-600 border-amber-400 text-white shadow-md'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {sec}s
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary card */}
            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Défi prêt : <strong>{questionCount} questions</strong> sur{' '}
                  <strong className="text-white">{selectedTopic.subject}</strong> à raison de{' '}
                  <strong className="text-amber-400">{durationSeconds}s</strong> par question.
                </span>
              </div>
              <div className="text-[11px] text-slate-400 whitespace-nowrap">
                Barème : 1er = 5 pts • 2ème = 4 pts • Reste = 3 pts
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400 hidden sm:block whitespace-nowrap">
            Tous les élèves recevront les questions synchronisées en direct.
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer whitespace-nowrap"
            >
              Fermer
            </button>
            <button
              onClick={handleLaunchTournament}
              disabled={isStarting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95 transition whitespace-nowrap"
            >
              {isStarting ? (
                <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              ) : (
                <Play className="w-4 h-4 fill-white shrink-0" />
              )}
              <span>Lancer le Défi en Direct</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
