'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { PROFILE_DATA } from '@/data/portfolioData';
import { X, Printer } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-surface border border-emerald-900/60 p-6 sm:p-8 shadow-2xl space-y-5 animate-pop-in">
        <div className="flex items-start justify-between gap-4 border-b border-emerald-900/50 pb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-emerald-500/50">
              <Image
                src={PROFILE_DATA.avatarUrl}
                alt={PROFILE_DATA.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                CURRICULUM VITAE — ATS &amp; PRINT READY
              </span>
              <h3 id="cv-modal-title" className="text-xl font-bold text-zinc-100 mt-0.5">
                {PROFILE_DATA.name}
              </h3>
              <p className="text-xs text-zinc-400">
                {PROFILE_DATA.headline} • {PROFILE_DATA.location}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 hover:bg-obsidian transition-colors cursor-pointer"
            aria-label="Tutup pratinjau CV"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
              Ringkasan Eksekutif
            </h4>
            <p className="leading-relaxed text-zinc-300">
              {PROFILE_DATA.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-3.5 rounded-xl bg-obsidian border border-emerald-900/50 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-300">Pendidikan &amp; Organisasi</div>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">S1 Pendidikan Teknologi Informasi</strong> — Universitas Lampung (2023 – Sekarang)
              </p>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">Biro KOMINFO</strong> — Mahasiswa FKIP Unila (2025)
              </p>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">Founder &amp; Lead Media</strong> — FOTONIC / FremNett (2024 – Sekarang)
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian border border-emerald-900/50 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-300">Proyek Unggulan</div>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">Fotonic Client Proofing Web</strong> (Python, Streamlit, GDrive API)
              </p>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">Fotonic Suite Master</strong> (PowerShell, FFmpeg NVENC, Python)
              </p>
              <p className="text-xs text-zinc-400">
                • <strong className="text-zinc-200">LuminaRAW Architecture</strong> (Python, Rust/PyO3, Libvips)
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-obsidian border border-emerald-900/50 space-y-1.5">
            <div className="text-xs font-semibold text-emerald-300">Spesialisasi Teknis &amp; Visual</div>
            <p className="text-xs text-zinc-400">
              • <strong className="text-zinc-200">Software &amp; Web</strong>: Python, HTML/CSS, JavaScript/React, Streamlit, Git/GitHub, Cloud APIs
            </p>
            <p className="text-xs text-zinc-400">
              • <strong className="text-zinc-200">Color Grading &amp; Post-Production</strong>: DaVinci Resolve (Color Space Transform / N-Log), Lightroom, Photoshop, Premiere Pro
            </p>
            <p className="text-xs text-zinc-400">
              • <strong className="text-zinc-200">Infrastruktur Media</strong>: FFmpeg hardware-accelerated pipeline, RAW/JPEG workflow automation
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-emerald-900/50">
          <span className="text-xs font-mono text-zinc-400">
            github.com/{PROFILE_DATA.githubUsername} • {PROFILE_DATA.locationShort}
          </span>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors cursor-pointer shadow-sm shadow-emerald-950"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF (1 Hal)</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-emerald-900/50 transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
