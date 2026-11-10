'use client';

import React from 'react';
import { FileText, Presentation, Download, Printer } from 'lucide-react';

interface HeaderProps {
  activeView: 'document' | 'presentation';
  onToggleView: (view: 'document' | 'presentation') => void;
  onOpenCv: () => void;
  onDownloadPpt: () => void;
}

export function Header({
  activeView,
  onToggleView,
  onOpenCv,
  onDownloadPpt,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-obsidian/85 border-b border-emerald-900/50 no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-2.5 group focus:outline-none">
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

        {/* Contextual Action Buttons */}
        <div className="flex items-center gap-2">
          {activeView === 'document' ? (
            <>
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-emerald-900/60 hover:border-emerald-500/40 transition-all cursor-pointer"
                title="Cetak atau Simpan PDF 1 Halaman"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download PDF (1 Hal)</span>
              </button>
              <button
                type="button"
                onClick={onOpenCv}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 hover:border-emerald-400/60 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ringkasan CV</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={onDownloadPpt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all cursor-pointer shadow-sm shadow-emerald-900"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PPT (.pptx)</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
