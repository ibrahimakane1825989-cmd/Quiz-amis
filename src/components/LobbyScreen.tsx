/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Trophy,
  Play,
  Users,
  Shield,
  BookOpen,
  Award,
  Zap,
  LogOut,
  HelpCircle,
  Clock,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Lock,
  ArrowLeft,
} from 'lucide-react';
import { OFFICIAL_PLAYERS, PlayerScoreSummary } from '../utils/quizRules';
import { PRESET_TOPICS } from '../data/defaultQuestions';
import { PWAInstallButton } from './PWAInstallButton';
import { FullscreenButton } from './FullscreenButton';

interface LobbyScreenProps {
  currentUser: {
    id: string;
    name: string;
    avatar: string;
    isAdmin: boolean;
  };
  gameState: {
    title: string;
    subject: string;
    lesson: string;
    status: 'lobby' | 'playing' | 'round_recap' | 'game_over';
    activePlayers: Array<{ id: string; name: string; avatar: string }>;
    totalQuestions: number;
    scores: PlayerScoreSummary[];
    botReaction: string;
  };
  onJoinMatch: () => void;
  onOpenAdminPanel: () => void;
  onOpenProfile: () => void;
  onStartSoloChallenge: (topicId?: string) => void;
  onLogout: () => void;
}

export const LobbyScreen: React.FC<LobbyScreenProps> = ({
  currentUser,
  gameState,
  onJoinMatch,
  onOpenAdminPanel,
  onOpenProfile,
  onStartSoloChallenge,
  onLogout,
}) => {
  const isMatchLive = gameState.status === 'playing' || gameState.status === 'round_recap';
  const [selectedSoloTopic, setSelectedSoloTopic] = useState('svt-cellule');

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header - Fullscreen Width */}
      <header className="w-full mx-auto flex items-center justify-between z-10 py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xl shadow-lg border border-indigo-400/30 shrink-0">
            🤖
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-2">
              <span className="whitespace-nowrap">Salon des Défis 1ère L2</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/30 whitespace-nowrap">
                En direct
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 font-bold border border-indigo-500/30 whitespace-nowrap hidden md:inline">
                8 Matières
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
              Quiz IA multijoueur synchronisé pour amis élèves • Arbitrage direct & solo distinct
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <FullscreenButton />
          <PWAInstallButton />

          {/* Clickable Profile & Avatar Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 transition cursor-pointer text-left group"
            title="Modifier mon avatar depuis mon profil"
          >
            <div className="relative shrink-0">
              <span className="text-base group-hover:scale-110 transition inline-block">{currentUser.avatar}</span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-indigo-600 rounded-full flex items-center justify-center text-[6px] text-white">✏️</span>
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-white leading-none group-hover:text-indigo-300 transition whitespace-nowrap">{currentUser.name}</p>
              <p className="text-[10px] text-indigo-400 leading-tight whitespace-nowrap">
                {currentUser.isAdmin ? 'Admin Arbitre' : 'Élève'} • Mon Profil
              </p>
            </div>
          </button>

          {/* Explicit Back / Logout Button */}
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-red-500/40 text-slate-300 hover:text-red-400 text-xs font-bold transition cursor-pointer whitespace-nowrap"
            title="Se déconnecter (libère la session et retourne à l'accueil)"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour / Déconnexion</span>
          </button>
        </div>
      </header>

      {/* Main Content - Fullscreen Layout (12 Columns) */}
      <main className="w-full mx-auto my-3 z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* Left Section (8 Columns on desktop): Main Stage & Subject Selection */}
        <div className="xl:col-span-8 space-y-5">
          
          {/* Active Tournament Status Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Défi Officiel Collectif du Salon</span>
              </span>
              <span
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap ${
                  isMatchLive
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40 animate-pulse'
                    : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isMatchLive ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span>{isMatchLive ? 'Tournoi EN DIRECT !' : 'En Attente de Lancement'}</span>
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
              {gameState.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-300 mt-1">
              <span className="px-2 py-0.5 rounded-md bg-indigo-950 text-indigo-200 font-bold border border-indigo-700/50 whitespace-nowrap">
                {gameState.subject}
              </span>
              <span className="text-slate-400 whitespace-nowrap">Leçon :</span>
              <strong className="text-white whitespace-nowrap">{gameState.lesson}</strong>
              <span className="text-amber-400 font-bold whitespace-nowrap">• 45s par question</span>
            </div>

            {/* Arbitre bot commentary bubble */}
            <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30 flex items-start gap-3">
              <span className="text-2xl shrink-0">🤖</span>
              <div className="text-xs">
                <p className="font-bold text-indigo-300 whitespace-nowrap">QuizBot Arbitre :</p>
                <p className="text-slate-200 mt-0.5 leading-relaxed">{gameState.botReaction}</p>
              </div>
            </div>

            {/* Tournament CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {isMatchLive ? (
                <button
                  onClick={onJoinMatch}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-600/30 flex items-center gap-2 cursor-pointer active:scale-95 transition whitespace-nowrap"
                >
                  <Play className="w-4 h-4 fill-white shrink-0" />
                  <span>Rejoindre le Tournoi en Direct</span>
                </button>
              ) : currentUser.isAdmin ? (
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenAdminPanel}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black text-sm shadow-xl shadow-amber-600/30 flex items-center gap-2 cursor-pointer active:scale-95 transition whitespace-nowrap"
                  >
                    <Shield className="w-4 h-4 shrink-0" />
                    <span>Lancer le Tournoi 1ère L2</span>
                  </button>
                  <button
                    onClick={() => onStartSoloChallenge(selectedSoloTopic)}
                    className="px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 cursor-pointer border border-slate-700 transition whitespace-nowrap"
                  >
                    <Play className="w-3.5 h-3.5 shrink-0" />
                    <span>S'entraîner en Solo (Questions exclusives)</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onStartSoloChallenge(selectedSoloTopic)}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 cursor-pointer active:scale-95 transition whitespace-nowrap"
                  >
                    <Play className="w-4 h-4 fill-white shrink-0" />
                    <span>Lancer un Défi Solo (Questions exclusives 1ère L2)</span>
                  </button>
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    Ou attendez que l'arbitre lance la session en ligne.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Expansive Subject Curriculum Grid (8 Subjects 1ère L2) */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-lg space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 whitespace-nowrap">
                  <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>Programme Officiel 1ère L2 • Choisissez votre matière d'entraînement</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Les questions d'entraînement solo sont 100% distinctes des questions du tournoi collectif.
                </p>
              </div>
              <span className="text-xs font-bold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-500/30 whitespace-nowrap">
                8 Matières Complètes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {PRESET_TOPICS.map((topic) => {
                const isSelected = selectedSoloTopic === topic.id;
                return (
                  <div
                    key={topic.id}
                    onClick={() => setSelectedSoloTopic(topic.id)}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-950/90 to-purple-950/70 border-indigo-400 text-white shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-400'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900/60'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-2xl shrink-0 border border-slate-700/50">
                        {topic.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-black text-white truncate whitespace-nowrap">{topic.subject}</p>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-bold whitespace-nowrap">
                            20 Qs Solo
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate mt-0.5 whitespace-nowrap">{topic.lesson}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartSoloChallenge(topic.id);
                      }}
                      className="px-3 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-bold shrink-0 transition flex items-center gap-1 cursor-pointer whitespace-nowrap"
                      title="Lancer le mode entraînement solo"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>S'entraîner</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Rules Box */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">Règles & Barème Officiel du Tournoi</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 text-xs">
                <div className="text-amber-400 font-black text-sm flex items-center gap-1.5 mb-1 whitespace-nowrap">
                  <span>⚡ 1er : +5 points</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Accordé au premier élève validant la réponse exacte ou le mot-clé attendu.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-500/30 text-xs">
                <div className="text-slate-200 font-black text-sm flex items-center gap-1.5 mb-1 whitespace-nowrap">
                  <span>🥈 2ème : +4 points</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Accordé au deuxième élève le plus rapide ayant répondu correctement.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-indigo-500/30 text-xs">
                <div className="text-indigo-300 font-black text-sm flex items-center gap-1.5 mb-1 whitespace-nowrap">
                  <span>🥉 Suivants : +3 points</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Tous les autres élèves ayant trouvé la bonne réponse reçoivent 3 points.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (4 Columns on desktop): Classroom & Roster Standings */}
        <aside className="xl:col-span-4 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="whitespace-nowrap">Classe 1ère L2 ({OFFICIAL_PLAYERS.length} Élèves)</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Statut de connexion en direct</p>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                {gameState.activePlayers.length} en ligne
              </span>
            </div>

            <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1">
              {OFFICIAL_PLAYERS.map((p) => {
                const isOnline = gameState.activePlayers.some((ap) => ap.id === p.id);
                const scoreItem = gameState.scores.find((s) => s.playerId === p.id);
                const isMe = p.id === currentUser.id;
                const avatarToUse = isMe ? currentUser.avatar : (scoreItem?.avatar || p.avatar);

                return (
                  <div
                    key={p.id}
                    className={`p-3 rounded-2xl border transition flex items-center justify-between ${
                      isMe
                        ? 'bg-indigo-950/80 border-indigo-400 ring-1 ring-indigo-400/50'
                        : isOnline
                        ? 'bg-slate-950/80 border-emerald-500/40 text-white'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative shrink-0">
                        <span className="text-2xl">{avatarToUse}</span>
                        {isOnline && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs font-bold truncate ${isMe ? 'text-indigo-200' : 'text-slate-200'} whitespace-nowrap`}>
                          {p.name} {isMe && '(Moi)'}
                        </p>
                        <p className="text-[10px] text-slate-500 whitespace-nowrap">
                          {isOnline ? '🟢 Connecté à la session' : '⚪ Hors ligne'}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-black text-amber-400 font-mono whitespace-nowrap">
                        {scoreItem?.score || 0} pts
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full mx-auto text-center py-2.5 text-xs text-slate-500">
        <p className="whitespace-nowrap truncate">
          QuizBot Défi 1ère L2 • Application installable PWA • Navigation hors ligne • Conçu pour élèves sénégalais
        </p>
      </footer>
    </div>
  );
};
