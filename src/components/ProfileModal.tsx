/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, User, Check, X, Trophy, Zap, Shield, Smile } from 'lucide-react';
import { STUDENT_AVATARS, ADMIN_AVATARS } from './LoginScreen';
import { PlayerScoreSummary } from '../utils/quizRules';

interface ProfileModalProps {
  currentUser: {
    id: string;
    name: string;
    avatar: string;
    isAdmin: boolean;
  };
  playerScore?: PlayerScoreSummary;
  onUpdateAvatar: (newAvatar: string) => void;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  currentUser,
  playerScore,
  onUpdateAvatar,
  onClose,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentUser.avatar);
  const [isSaved, setIsSaved] = useState(false);

  const avatarList = currentUser.isAdmin
    ? [...ADMIN_AVATARS, ...STUDENT_AVATARS]
    : STUDENT_AVATARS;

  const handleSave = () => {
    onUpdateAvatar(selectedAvatar);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={onClose}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour</span>
            </button>
            <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">Mon Profil & Avatar</h3>
              <p className="text-[11px] text-slate-400 truncate">Personnalisez votre icône pour le classement</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* User Card & Stats Preview */}
        <div className="my-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-3xl shadow-lg border border-indigo-400/40 animate-glow">
              {selectedAvatar}
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-[10px] text-white font-bold">
              ✓
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white truncate">{currentUser.name}</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-600/30 font-bold shrink-0">
                {currentUser.isAdmin ? 'Admin' : 'Élève'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Identifiant officiel connecté
            </p>

            {playerScore && (
              <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-300">
                <span className="flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  <strong>{playerScore.score} pts</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-indigo-400" />
                  <span>{playerScore.fastestFirstCount}x 1er</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Avatar Selector Grid */}
        <div className="overflow-y-auto space-y-2 pr-1 flex-1">
          <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Smile className="w-3.5 h-3.5 text-indigo-400" />
              Choisir un nouvel avatar :
            </span>
            <span className="text-[11px] text-indigo-400 font-normal">
              {selectedAvatar} sélectionné
            </span>
          </label>

          <div className="grid grid-cols-6 gap-2 pt-1">
            {avatarList.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedAvatar(emoji)}
                className={`h-11 rounded-2xl flex items-center justify-center text-xl transition cursor-pointer ${
                  selectedAvatar === emoji
                    ? 'bg-indigo-600 scale-110 shadow-lg shadow-indigo-600/50 ring-2 ring-indigo-300'
                    : 'bg-slate-950 border border-slate-800 hover:bg-slate-800 hover:scale-105'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 text-center pt-2">
            Votre avatar se mettra immédiatement à jour sur le classement en direct et dans l'arène.
          </p>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-1.5 cursor-pointer active:scale-95 transition"
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Enregistré !</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>Enregistrer l'Avatar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
