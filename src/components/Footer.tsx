'use client';

import React from 'react';
import { PROFILE_DATA } from '@/data/portfolioData';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-emerald-900/50 bg-[#030e08]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="font-medium text-zinc-300">
            © {currentYear} {PROFILE_DATA.name}.
          </span>
          <span className="hidden sm:inline text-emerald-900">•</span>
          <span className="text-zinc-400 italic">
            &ldquo;Crafted with clean code &amp; visual precision.&rdquo;
          </span>
        </div>

        <div className="flex items-center gap-5 no-print">
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
          >
            <span>Email</span>
          </a>
          <a
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
