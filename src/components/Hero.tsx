'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROFILE_DATA } from '@/data/portfolioData';
import { Mail, MessageCircle, FileDown, ArrowUpRight, MapPin, Check, Printer } from 'lucide-react';
import { GithubIcon } from './Icons';

interface HeroProps {
  onOpenCv: () => void;
  onShowToast: (msg: string) => void;
}

export function Hero({ onOpenCv, onShowToast }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(PROFILE_DATA.email).catch(() => {});
    }
    setCopied(true);
    onShowToast(`Email ${PROFILE_DATA.email} berhasil disalin!`);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  return (
    <section aria-labelledby="hero-heading" className="space-y-6">
      {/* Top Profile Intro Block with Real Portrait Photo */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-2">
        {/* Real Portrait Avatar with Glowing Emerald Rim */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-500/50 shadow-xl shadow-emerald-950/70 group">
          <Image
            src={PROFILE_DATA.avatarUrl}
            alt={PROFILE_DATA.name}
            fill
            priority
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Status Badge & Location Meta */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium">{PROFILE_DATA.status}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{PROFILE_DATA.locationShort}</span>
              <span className="text-emerald-800">•</span>
              <span>{PROFILE_DATA.affiliationShort}</span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.12]">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-emerald-400 tracking-tight">
              {PROFILE_DATA.headline}
            </p>
          </div>
        </div>
      </div>

      {/* 2-Sentence Profile Summary Highlighting Tech & Visual Convergence */}
      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
        Mahasiswa Pendidikan Teknologi Informasi Universitas Lampung yang menjembatani rekayasa perangkat lunak—meliputi otomasi <span className="text-zinc-200 font-medium">Python</span>, aplikasi web interaktif, dan <span className="text-zinc-200 font-medium">pipeline pemrosesan media lokal</span>—dengan eksekusi produksi visual komersial berstandar industri. Melalui <span className="text-zinc-200 font-medium">FOTONIC (FremNett Project)</span>, saya merancang sistem alur kerja pascaproduksi yang presisi sekaligus menangani dokumentasi milestone akademik dan <span className="text-zinc-200 font-medium">color grading video N-Log</span>.
      </p>

      {/* Quick Action Buttons */}
      <div className="pt-1 grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-2.5 no-print [&>*]:justify-center">
        {/* GitHub */}
        <a
          id="action-github"
          href={PROFILE_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-100 text-zinc-950 hover:bg-emerald-400 hover:text-zinc-950 transition-all shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span className="truncate">GitHub<span className="hidden sm:inline">: {PROFILE_DATA.githubUsername}</span></span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
        </a>

        {/* Email */}
        <button
          id="action-email"
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-emerald-900/60 hover:border-emerald-500/40 transition-all cursor-pointer"
          title="Klik untuk menyalin alamat email"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Mail className="w-4 h-4 text-emerald-400" />
          )}
          <span>{copied ? 'Email Tersalin!' : 'Email'}</span>
          <span className="text-[11px] font-mono text-zinc-500 hidden md:inline">
            {PROFILE_DATA.email}
          </span>
        </button>

        {/* WhatsApp */}
        <a
          id="action-whatsapp"
          href={PROFILE_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-emerald-900/60 hover:border-emerald-500/40 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Download 1-Page PDF */}
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/35 hover:border-emerald-400/60 transition-all cursor-pointer"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          <span>Download PDF (1 Hal)</span>
        </button>

        {/* Preview / Detail CV Sheet */}
        <button
          id="action-cv"
          type="button"
          onClick={onOpenCv}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-emerald-900/50 hover:border-emerald-400/40 transition-all cursor-pointer"
        >
          <FileDown className="w-4 h-4 text-emerald-400" />
          <span>Pratinjau CV</span>
        </button>
      </div>
    </section>
  );
}
