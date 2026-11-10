'use client';

import React from 'react';
import { FileText } from 'lucide-react';

interface HeaderProps {
  onOpenCv: () => void;
}

export function Header({ onOpenCv }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b0f17]/80 border-b border-zinc-800/60 no-print">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group focus:outline-none">
          <span className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs font-medium text-sky-400 group-hover:border-sky-400/50 transition-colors">
            EA
          </span>
          <span className="text-sm font-medium tracking-tight text-zinc-200 group-hover:text-sky-400 transition-colors">
            efremalvin<span className="text-sky-400 font-mono">.dev</span>
          </span>
        </a>

        <nav aria-label="Navigasi Utama" className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#projects" className="nav-link hover:text-zinc-100">Projects</a>
          <a href="#fotonic" className="nav-link hover:text-zinc-100">FOTONIC Visual</a>
          <a href="#skills" className="nav-link hover:text-zinc-100">Skills &amp; Stack</a>
          <a href="#experience" className="nav-link hover:text-zinc-100">Timeline</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            id="nav-cv-btn"
            type="button"
            onClick={onOpenCv}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800/80 hover:border-sky-400/40 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Ringkasan CV</span>
          </button>
        </div>
      </div>
    </header>
  );
}
