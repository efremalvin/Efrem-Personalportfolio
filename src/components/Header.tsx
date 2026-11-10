'use client';

import React from 'react';
import { FileText, Presentation } from 'lucide-react';

interface HeaderProps {
  activeView: 'document' | 'presentation';
  onToggleView: (view: 'document' | 'presentation') => void;
}

export function Header({
  activeView,
  onToggleView,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-obsidian/85 border-b border-emerald-900/50 no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <a href="#top" onClick={() => onToggleView('document')} className="flex items-center gap-2.5 group focus:outline-none">
          <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-400 transition-colors shadow-sm shadow-emerald-950">
            EA
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-emerald-400 transition-colors hidden sm:inline">
            efremalvin<span className="text-emerald-400 font-mono">.dev</span>
          </span>
        </a>

        {/* Dual-View Switcher Pills */}
        <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-emerald-900/60 shadow-inner">
          <button
            type="button"
            onClick={() => onToggleView('document')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'document'
                ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Dokumen</span>
          </button>
          <button
            type="button"
            onClick={() => onToggleView('presentation')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeView === 'presentation'
                ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slide PPT</span>
          </button>
        </div>

      </div>
    </header>
  );
}
