/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from './usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed standalone PWA, hide the install button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md hover:from-indigo-600 hover:to-purple-700 transition cursor-pointer active:scale-95"
        title="Télécharger l'application"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Télécharger l'App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-950/40 px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:bg-indigo-900/60 transition cursor-pointer"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Installer sur iPhone</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-400" />
                  Installer sur iPhone / iPad
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-300 space-y-2">
                Pour ajouter l'application sur votre écran d'accueil sans passer par l'App Store :
              </p>
              <div className="mt-3 bg-slate-800/80 rounded-xl p-3 text-xs text-slate-200 space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">1</span>
                  <span>Touchez le bouton <strong>Partager</strong> dans la barre Safari (icône carrée avec flèche montante).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">2</span>
                  <span>Faites défiler puis touchez <strong>« Sur l'écran d'accueil »</strong>.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-indigo-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold">3</span>
                  <span>Touchez <strong>Ajouter</strong> en haut à droite.</span>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition"
              >
                J'ai compris
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <button
      onClick={() => alert("Pour installer l'application sur votre écran : cliquez sur l'icône d'installation dans la barre d'adresse de votre navigateur ou sur les 3 points > 'Installer l'application'.")}
      className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/60 transition cursor-pointer"
      title="Guide d'installation"
    >
      <Download className="w-3.5 h-3.5 text-indigo-400" />
      <span>Installer</span>
    </button>
  );
};
