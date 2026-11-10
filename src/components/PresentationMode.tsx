'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  VISUAL_DATA,
  SKILLS_DATA,
  TIMELINE_DATA,
  Project,
  VisualShowcaseItem,
} from '@/data/portfolioData';
import { exportPortfolioPptx } from '@/lib/exportPptx';
import { AcademicArtwork, AstroArtwork, GradedArtwork } from './VisualArtworks';
import { GithubIcon } from './Icons';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  Minimize2,
  FileText,
  MapPin,
  Mail,
  Camera,
  Film,
  
  Terminal,
  Code2,
  Cpu,
  ArrowRight,
  Loader2,
} from 'lucide-react';

interface PresentationModeProps {
  onSwitchToDocument: () => void;
  onSelectProject: (p: Project) => void;
  onSelectVisual: (v: VisualShowcaseItem) => void;
  onShowToast: (msg: string) => void;
}

export function PresentationMode({
  onSwitchToDocument,
  onSelectProject,
  onSelectVisual,
  onShowToast,
}: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleDownloadPptx = async () => {
    try {
      setIsExporting(true);
      await exportPortfolioPptx();
      onShowToast('File presentasi .pptx berhasil digenerate dan diunduh!');
    } catch (err) {
      console.error(err);
      onShowToast('Gagal mengunduh berkas PPT. Silakan coba lagi.');
    } finally {
      setIsExporting(false);
    }
  };

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
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between max-w-5xl mx-auto px-4 sm:px-6 py-6 select-none">
      {/* Top Slide Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-emerald-900/40">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            SLIDE {currentSlide + 1} / {totalSlides}
          </span>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            Gunakan panah keyboard (← / →) untuk navigasi
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Switch back to Document */}
          <button
            type="button"
            onClick={onSwitchToDocument}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-emerald-900/40 hover:border-emerald-500/40 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mode Dokumen</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-400 bg-zinc-900 border border-emerald-900/40 transition-colors cursor-pointer"
            title="Layar Penuh"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Download Real PPT (.pptx) */}
          <button
            type="button"
            onClick={handleDownloadPptx}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold transition-all shadow-md cursor-pointer disabled:opacity-60"
          >
            {isExporting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            <span>{isExporting ? 'Generating PPT...' : 'Download PPT (.pptx)'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Presentation Stage (16:9 Aspect Feel with Emerald Glow) */}
      <div className="my-6 relative min-h-[480px] sm:min-h-[520px] rounded-2xl bg-surface/80 border border-emerald-900/50 p-6 sm:p-10 flex flex-col justify-center overflow-hidden shadow-2xl animate-slide-in">
        <div className="ambient-glow pointer-events-none absolute inset-0 opacity-70" />

        {/* ====================================================
            SLIDE 0: COVER / TITLE & PORTRAIT SLIDE
            ==================================================== */}
        {currentSlide === 0 && (
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="relative w-44 h-56 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/80 group">
              <Image
                src={PROFILE_DATA.avatarUrl}
                alt={PROFILE_DATA.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-4 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Executive Slide Deck</span>
                <span className="text-emerald-700">•</span>
                <span>{PROFILE_DATA.affiliationShort}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-zinc-100 tracking-tight leading-tight">
                {PROFILE_DATA.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-emerald-400">
                {PROFILE_DATA.headline}
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Menjembatani rekayasa perangkat lunak Python, pipeline otomasi media lokal, dan produksi visual komersial (FOTONIC / FremNett Project).
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-900/60">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PROFILE_DATA.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-900/60">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PROFILE_DATA.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            SLIDE 1: ABOUT & STRATEGIC PILLARS
            ==================================================== */}
        {currentSlide === 1 && (
          <div className="relative z-10 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                01 / Vision &amp; Strategic Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Konvergensi Rekayasa Perangkat Lunak &amp; Visual Komersial
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-obsidian/80 border border-emerald-900/50">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {PROFILE_DATA.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Code2 className="w-4 h-4" />
                  <span>Software &amp; Web</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Web proofing mandiri, otomasi cloud Google Drive, dan antarmuka ramah mobile.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>Media Pipeline</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Akselerasi hardware FFmpeg NVENC dan pencocokan RAW/JPEG instan di workstation lokal.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Film className="w-4 h-4" />
                  <span>N-Log Color Grading</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Manajemen ruang warna DaVinci Wide Gamut CST dengan roll-off highlight sinematik.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            SLIDE 2: TECHNICAL & AUTOMATION PROJECTS
            ==================================================== */}
        {currentSlide === 2 && (
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  02 / Software Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                  Technical &amp; Automation Projects
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                Klik kartu untuk detail arsitektur
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className="project-card rounded-xl p-4 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {proj.badge}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-emerald-900/40 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {proj.stack.slice(0, 3).map((st, i) => (
                        <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-300">
                          {st}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-emerald-400 font-medium">
                      <span>Detail Spek</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            SLIDE 3: COMMERCIAL MEDIA (FOTONIC)
            ==================================================== */}
        {currentSlide === 3 && (
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  03 / Commercial Visual Production
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                  FOTONIC Showcase (FremNett Project)
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-300">
                <Camera className="w-3.5 h-3.5" />
                <span>Nikon Z Mirrorless</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {VISUAL_DATA.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectVisual(item)}
                  className="visual-card rounded-xl overflow-hidden bg-zinc-950 flex flex-col cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[4/5] w-full overflow-hidden bg-obsidian">
                    {getArtwork(item.id)}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur-sm border border-emerald-900/60 text-[10px] font-mono text-emerald-300">
                      {item.category}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                      <div className="text-[10px] font-mono text-zinc-300 bg-zinc-900/90 px-2 py-1 rounded border border-emerald-900/50 flex justify-between">
                        <span>{item.lens}</span>
                        <span className="text-emerald-400">{item.iso}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-surface/80">
                    <h3 className="text-xs font-semibold text-zinc-100">{item.title}</h3>
                    <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{item.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            SLIDE 4: SKILLS & TOOLING MATRIX
            ==================================================== */}
        {currentSlide === 4 && (
          <div className="relative z-10 space-y-6">
            <div className="space-y-1 border-b border-emerald-900/40 pb-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                04 / Capabilities &amp; Ecosystem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Skills &amp; Tooling Matrix
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SKILLS_DATA.map((cluster, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-obsidian/90 border border-emerald-900/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                      {idx === 0 ? <Code2 className="w-4 h-4" /> : idx === 1 ? <Film className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                      <span>{cluster.category}</span>
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500">{cluster.countLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cluster.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill px-2.5 py-1 rounded-full text-xs font-medium text-zinc-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ====================================================
            SLIDE 5: TIMELINE, EDUCATION & COLLABORATION
            ==================================================== */}
        {currentSlide === 5 && (
          <div className="relative z-10 space-y-6">
            <div className="space-y-1 border-b border-emerald-900/40 pb-2">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                05 / Timeline &amp; Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Academic Journey &amp; Collaboration
              </h2>
            </div>

            <div className="space-y-4 pl-4 border-l-2 border-emerald-500/40">
              {TIMELINE_DATA.map((entry, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-semibold text-zinc-100">{entry.title}</span>
                    <span className="text-emerald-400">{entry.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400">{entry.organization} — {entry.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-obsidian border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-zinc-300 font-medium">
                Siap berkolaborasi untuk proyek rekayasa otomasi web &amp; produksi visual komersial.
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-200 border border-emerald-900/50 flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Controls (Prev / Next & Slide Dots) */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-emerald-900/40">
        <button
          type="button"
          onClick={prevSlide}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-emerald-900/50 hover:border-emerald-500/50 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Slide Sebelumnya</span>
        </button>

        {/* Bullet indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide
                  ? 'w-8 bg-emerald-400 shadow-sm shadow-emerald-400'
                  : 'w-2.5 bg-zinc-800 hover:bg-zinc-700'
              }`}
              title={`Buka Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 transition-all cursor-pointer"
        >
          <span>Slide Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
