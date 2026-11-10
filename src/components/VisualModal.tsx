'use client';

import React, { useEffect } from 'react';
import { VisualShowcaseItem } from '@/data/portfolioData';
import { X } from 'lucide-react';

interface VisualModalProps {
  item: VisualShowcaseItem | null;
  onClose: () => void;
}

export function VisualModal({ item, onClose }: VisualModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visual-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-[#111723] border border-zinc-800 p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400">
              {item.subtitle}
            </span>
            <h3 id="visual-modal-title" className="text-lg font-semibold text-zinc-100 mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition-colors cursor-pointer"
            aria-label="Tutup pratinjau visual"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {item.notes}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
          <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-2.5">
            <div className="text-[10px] font-mono text-zinc-500">FOCAL &amp; APERTURE</div>
            <div className="text-xs font-mono text-zinc-100 mt-0.5">{item.lens}</div>
          </div>
          <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-2.5">
            <div className="text-[10px] font-mono text-zinc-500">SHUTTER SPEED</div>
            <div className="text-xs font-mono text-zinc-100 mt-0.5">{item.shutter}</div>
          </div>
          <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-2.5">
            <div className="text-[10px] font-mono text-zinc-500">SENSITIVITY</div>
            <div className="text-xs font-mono text-sky-400 mt-0.5">{item.iso}</div>
          </div>
          <div className="rounded-lg bg-zinc-950 border border-zinc-800/80 p-2.5">
            <div className="text-[10px] font-mono text-zinc-500">COLOR PROFILE</div>
            <div className="text-xs font-mono text-zinc-100 mt-0.5">{item.profile}</div>
          </div>
        </div>

        <div className="flex items-center justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors cursor-pointer"
          >
            Tutup Inspeksi
          </button>
        </div>
      </div>
    </div>
  );
}
