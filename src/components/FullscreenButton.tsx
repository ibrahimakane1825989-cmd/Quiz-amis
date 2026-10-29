/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

export const FullscreenButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          await (document.documentElement as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleFullscreen}
      className={`px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${className}`}
      title={isFullscreen ? 'Quitter le plein écran' : 'Passer en plein écran'}
    >
      {isFullscreen ? (
        <>
          <Minimize className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="hidden sm:inline whitespace-nowrap">Fenêtré</span>
        </>
      ) : (
        <>
          <Maximize className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          <span className="hidden sm:inline whitespace-nowrap">Plein Écran</span>
        </>
      )}
    </button>
  );
};
