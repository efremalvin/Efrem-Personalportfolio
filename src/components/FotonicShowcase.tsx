'use client';

import React from 'react';
import { VisualShowcaseItem, VISUAL_DATA } from '@/data/portfolioData';
import { AcademicArtwork, AstroArtwork, GradedArtwork } from './VisualArtworks';
import { Camera, Film, Palette } from 'lucide-react';

interface FotonicShowcaseProps {
  onSelectVisual: (item: VisualShowcaseItem) => void;
}

export function FotonicShowcase({ onSelectVisual }: FotonicShowcaseProps) {
  const getArtwork = (id: number) => {
    switch (id) {
      case 0:
        return <AcademicArtwork />;
      case 1:
        return <AstroArtwork />;
      case 2:
      default:
        return <GradedArtwork />;
    }
  };

  return (
    <section id="fotonic" aria-labelledby="fotonic-heading" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-emerald-900/40 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
            <span>02</span>
            <span>/</span>
            <span>Commercial Visual Production</span>
          </div>
          <h2 id="fotonic-heading" className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            FOTONIC Showcase <span className="text-emerald-500/70 font-normal text-base sm:text-lg">(FremNett Project)</span>
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400">
          Bandar Lampung • Universitas Lampung
        </span>
      </div>

      {/* Role Summary & Gear/Workflow Badges */}
      <div className="rounded-xl bg-surface/75 border border-emerald-900/50 p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              FOUNDER &amp; LEAD MEDIA
            </span>
            <span className="text-sm font-medium text-zinc-200">
              FOTONIC — FremNett Visual Production
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400/80">
            Color-Managed Commercial Workflow
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Memimpin operasional kreatif dan teknis di <strong className="text-zinc-200 font-medium">FOTONIC (FremNett Project)</strong> dengan spesialisasi dokumentasi komersial <strong className="text-zinc-200 font-medium">wisuda, seminar proposal (sempro), seminar hasil (semhas), dan ujian komprehensif</strong> mahasiswa Universitas Lampung. Mengintegrasikan ketajaman optik sistem mirrorless dengan alur seleksi kilat berbasis perangkat lunak mandiri.
        </p>

        {/* Gear & Workflow Badges */}
        <div className="pt-1 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mr-1">
            Gear &amp; Pipeline:
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-obsidian text-zinc-200 border border-emerald-900/60">
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            Nikon Z Mirrorless System
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-obsidian text-zinc-200 border border-emerald-900/60">
            <Film className="w-3.5 h-3.5 text-teal-400" />
            N-Log Video Grading
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-obsidian text-zinc-200 border border-emerald-900/60">
            <Palette className="w-3.5 h-3.5 text-emerald-300" />
            DaVinci Resolve Color Pipeline
          </span>
        </div>
      </div>

      {/* Mini Gallery Preview: 3 Visual Cards (4:5 aspect ratio) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {VISUAL_DATA.map((item) => (
          <div
            key={item.id}
            className="visual-card group rounded-xl overflow-hidden bg-zinc-950 flex flex-col cursor-pointer"
            onClick={() => onSelectVisual(item)}
            role="button"
            tabIndex={0}
            aria-label={`Pratinjau karya ${item.title}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-obsidian">
              {getArtwork(item.id)}

              {/* Top-left category badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-obsidian/85 backdrop-blur-md border border-emerald-900/60 text-[11px] font-medium text-emerald-300">
                {item.category}
              </div>

              {/* Top-right ratio pill */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-obsidian/80 backdrop-blur-md border border-emerald-900/60 text-[10px] font-mono text-emerald-400">
                {item.badgeRatio}
              </div>

              {/* Bottom Corner Aesthetic EXIF Metadata Label */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-surface/90 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-emerald-900/60">
                  <span>{item.lens}</span>
                  <span className="text-emerald-900">•</span>
                  <span>{item.shutter}</span>
                  <span className="text-emerald-900">•</span>
                  <span className="text-emerald-400">{item.iso}</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 space-y-1 bg-surface/60 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-100">{item.title}</h3>
                <span className="text-[11px] font-mono text-emerald-400/80">{item.formatTag}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.shortDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive N-Log Color Pipeline Inspector Bar */}
      <div className="rounded-xl bg-surface/50 border border-emerald-900/50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <p className="text-xs text-zinc-400">
            <span className="text-zinc-200 font-medium">Node Graph Standar FOTONIC:</span>
            <span className="font-mono text-[11px] text-zinc-400 ml-1">
              Input CST (Nikon N-Log) → Exposure &amp; WB Linear → Halation &amp; Skin Qualifier → Film Print Emulation (Rec.709)
            </span>
          </p>
        </div>
        <button
          type="button"
          onClick={() => onSelectVisual(VISUAL_DATA[2])}
          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 shrink-0 underline underline-offset-4 cursor-pointer"
        >
          Inspeksi Node &amp; EXIF →
        </button>
      </div>
    </section>
  );
}
