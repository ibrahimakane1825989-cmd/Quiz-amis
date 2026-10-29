/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Shield,
  Zap,
  KeyRound,
  User,
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Clock,
  Award,
  BookOpen,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import {
  OFFICIAL_PLAYERS,
  ADMIN_ACCESS_CODE,
  RegisteredPlayer,
  validatePlayerLogin,
  validateAdminLogin,
} from '../utils/quizRules';
import { PWAInstallButton } from './PWAInstallButton';
import { FullscreenButton } from './FullscreenButton';

export const STUDENT_AVATARS = [
  '🦁', '🦅', '⚡', '🌟', '🚀', '🎯', '🌺', '🔥', '💎', '👑',
  '🐺', '🦊', '🐯', '🐼', '🤖', '🎓', '🏆', '⚽', '🎨', '🧠',
  '🐉', '🦄', '🐆', '🪐'
];

export const ADMIN_AVATARS = [
  '👑', '🎩', '🛡️', '⚖️', '🦉', '⚡', '🤖', '🏆'
];

interface LoginScreenProps {
  onLoginSuccess: (user: {
    id: string;
    name: string;
    avatar: string;
    isAdmin: boolean;
    adminCode?: string;
    sessionId?: string;
  }) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');
  const [username, setUsername] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [adminName, setAdminName] = useState('Admin Arbitre');
  const [adminCode, setAdminCode] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSessionLocked, setIsSessionLocked] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(false);

  // Helper to get or generate client session ID
  const getSessionId = () => {
    let sid = sessionStorage.getItem('quizbot_client_session_id');
    if (!sid) {
      sid = 'sess_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
      sessionStorage.setItem('quizbot_client_session_id', sid);
    }
    return sid;
  };

  const handleStudentSubmit = async (e: React.FormEvent, forceUnlock = false) => {
    if (e && e.preventDefault) e.preventDefault();
    setError('');
    setIsSessionLocked(false);

    const res = validatePlayerLogin(username, accessCode);
    if (!res.success || !res.player) {
      setError(res.error || 'Identifiants invalides.');
      return;
    }

    setIsCheckingSession(true);
    const sessionId = getSessionId();

    try {
      // Check exclusive session with server
      const checkRes = await fetch('/api/game/session/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerId: res.player.id,
          playerName: res.player.name,
          sessionId,
          force: forceUnlock,
        }),
      });

      if (checkRes.status === 409) {
        const data = await checkRes.json();
        setIsSessionLocked(true);
        setError(data.error || 'Ce compte est actuellement connecté sur un autre appareil.');
        setIsCheckingSession(false);
        return;
      }

      const playerAvatar = res.player.avatar;

      // Login success
      onLoginSuccess({
        id: res.player.id,
        name: res.player.name,
        avatar: playerAvatar,
        isAdmin: false,
        sessionId,
      });
    } catch {
      // Fallback offline access
      onLoginSuccess({
        id: res.player.id,
        name: res.player.name,
        avatar: res.player.avatar,
        isAdmin: false,
        sessionId,
      });
    } finally {
      setIsCheckingSession(false);
    }
  };

  const handleAdminSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = validateAdminLogin(adminCode, adminName);
    if (!res.success) {
      setError(res.error || 'Code administrateur invalide.');
      return;
    }

    const sessionId = getSessionId();

    onLoginSuccess({
      id: 'admin-' + (adminName.toLowerCase().includes('2') ? '2' : '1'),
      name: res.name || adminName || 'Admin Arbitre',
      avatar: '👑',
      isAdmin: true,
      adminCode,
      sessionId,
    });
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background ambient flares */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar - Full Width Container */}
      <header className="w-full mx-auto flex items-center justify-between z-10 py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 text-xl border border-indigo-400/30 shrink-0">
            🤖
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
              <span className="whitespace-nowrap">QuizBot Défi 1ère L2</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/30 whitespace-nowrap">
                Serveur Synchronisé
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
              Compétition amicale en temps réel • 45s contre la montre • Programme officiel sénégalais
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FullscreenButton />
          <PWAInstallButton />
        </div>
      </header>

      {/* Fullscreen Main Layout */}
      <main className="w-full mx-auto my-auto z-10 py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Left Section (7 columns on desktop): Showcase of Rules, Personas & Curriculum */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Tournoi Défi Amis Élèves 1ère L2</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Arène de Quiz IA en Direct & Entraînement Solo
            </h2>
            
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Défiez vos camarades de classe sur les leçons clés du programme. L'arbitre IA valide vos réponses mot à mot, chronomètre chaque question à 45 secondes et préserve le secret absolu des scores jusqu'au couronnement final.
            </p>

            {/* Official Tournament Rules Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">45 Secondes Chrono</p>
                  <p className="text-slate-400 mt-0.5">Temps contre la montre pour saisir votre mot-clé ou phrase.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Barème Officiel 1ère L2</p>
                  <p className="text-slate-400 mt-0.5">1er = 5 points • 2ème = 4 points • Suivants = 3 points.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Scores Scellés en Direct</p>
                  <p className="text-slate-400 mt-0.5">Réponses gardées secrètes pendant la partie pour un suspense total.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-bold text-white">Questions Solo Distinctes</p>
                  <p className="text-slate-400 mt-0.5">L'entraînement solo a ses propres questions exclusives sans spoil.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Roster Selector: Official Students List (Names & Avatars only - Access codes remain strictly secret!) */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-5 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 whitespace-nowrap">
                <Users className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Les 10 élèves enregistrés au Défi (cliquez sur votre nom)</span>
              </span>
              <span className="text-[11px] text-slate-400 whitespace-nowrap">
                Codes d'accès secrets
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {OFFICIAL_PLAYERS.map((p) => {
                const isSelected = username === p.name;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setActiveTab('student');
                      setUsername(p.name);
                      setError('');
                    }}
                    className={`p-2.5 rounded-2xl border text-left transition flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="text-xl shrink-0">{p.avatar}</span>
                    <span className="text-xs font-bold truncate leading-tight whitespace-nowrap">
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section (5 columns on desktop): Login Form Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/95 border border-slate-800 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/50">
            
            {/* Greeting Box */}
            <div className="flex items-center gap-3.5 mb-6 p-3.5 bg-slate-800/70 rounded-2xl border border-slate-700/60">
              <span className="text-3xl shrink-0">🤖</span>
              <div className="text-xs">
                <p className="font-bold text-indigo-300">Portail d'Accès Sécurisé</p>
                <p className="text-slate-300 leading-tight mt-0.5">
                  Accès exclusif par joueur • 1 seule connexion simultanée par code secret.
                </p>
              </div>
            </div>

            {/* Tab Selector */}
            <div className="flex p-1 bg-slate-950 rounded-2xl mb-6 border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('student');
                  setError('');
                  setIsSessionLocked(false);
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'student'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <User className="w-3.5 h-3.5 shrink-0" />
                <span>Accès Élève</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('admin');
                  setError('');
                  setIsSessionLocked(false);
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'admin'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>Accès Admin Arbitre</span>
              </button>
            </div>

            {/* Error Alert & Session Locking */}
            {error && (
              <div className="mb-5 p-3.5 rounded-2xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                  <span className="leading-snug">{error}</span>
                </div>
                {isSessionLocked && (
                  <div className="pt-2 border-t border-red-800/40 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] text-red-300">
                      🔒 L'accès simultané avec les mêmes identifiants est bloqué.
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleStudentSubmit(e, true)}
                      className="px-3 py-1 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] flex items-center gap-1 cursor-pointer transition whitespace-nowrap"
                    >
                      <Unlock className="w-3 h-3" />
                      <span>Forcer la reconnexion ici</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'student' ? (
              <form onSubmit={(e) => handleStudentSubmit(e, false)} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="whitespace-nowrap">Nom d'Utilisateur Élève</span>
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ex: Ibrahima Kane, Abdou Faye..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="whitespace-nowrap">Code d'Accès Secret (5 car.)</span>
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Confidentiel</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="Ex: Ik2008..."
                      maxLength={10}
                      className="w-full px-4 pr-11 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm font-mono tracking-wider focus:outline-none focus:border-indigo-500 transition"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 transition cursor-pointer"
                      title={showPassword ? 'Masquer' : 'Afficher'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-indigo-950/30 border border-indigo-600/30 rounded-2xl text-[11px] text-indigo-200 leading-relaxed">
                  🔒 Règle de sécurité : Une fois connecté, aucun autre appareil ne pourra utiliser vos identifiants simultanément. Vous pourrez choisir votre avatar depuis votre profil.
                </div>

                <button
                  type="submit"
                  disabled={isCheckingSession}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:brightness-110 active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>{isCheckingSession ? 'Vérification...' : 'Entrer dans le Salon des Défis'}</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('student');
                    setError('');
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>← Retour à l'Accès Élève</span>
                </button>
                <form onSubmit={handleAdminSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="whitespace-nowrap">Nom d'affichage Admin</span>
                    </label>
                    <input
                      type="text"
                      value={adminName}
                      onChange={(e) => setAdminName(e.target.value)}
                      placeholder="Nom de l'administrateur"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <KeyRound className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="whitespace-nowrap">Code Secret Admin (Confidentiel)</span>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={showAdminPassword ? 'text' : 'password'}
                        value={adminCode}
                        onChange={(e) => setAdminCode(e.target.value)}
                        placeholder="Saisissez le code maître secret"
                        className="w-full px-4 pr-11 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm font-mono focus:outline-none focus:border-amber-500 transition"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowAdminPassword(!showAdminPassword)}
                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 transition cursor-pointer"
                        title={showAdminPassword ? 'Masquer' : 'Afficher'}
                      >
                        {showAdminPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-950/30 border border-amber-600/30 rounded-2xl text-[11px] text-amber-200 leading-relaxed">
                    🔒 Accès réservé aux 2 administrateurs. L'admin configure le chrono et les matières, sans voir les questions ni réponses à l'avance, et participe également au jeu.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-lg shadow-amber-600/30 hover:brightness-110 active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Shield className="w-4 h-4 shrink-0" />
                    <span>Accéder au Panneau d'Administration</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full mx-auto text-center z-10 py-2.5 text-xs text-slate-400">
        <p className="whitespace-nowrap truncate">
          Tournoi Défi Amis Élèves 1ère L2 • Barème : 1er = 5 pts • 2ème = 4 pts • Suivants = 3 pts • 45s contre la montre
        </p>
      </footer>
    </div>
  );
};
