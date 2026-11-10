'use client';

import React from 'react';
import { TIMELINE_DATA } from '@/data/portfolioData';

export function Timeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/60 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">
            <span>04</span>
            <span>/</span>
            <span>Academic &amp; Organization</span>
          </div>
          <h2 id="experience-heading" className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            Experience &amp; Education
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-mono">
          Rekam jejak organisasi, kepemimpinan media, &amp; studi
        </p>
      </div>

      {/* Minimalist Timeline with Hairline Border */}
      <div className="relative pl-6 border-l border-zinc-800/70 space-y-8 ml-2">
        {TIMELINE_DATA.map((item, idx) => (
          <div key={idx} className="relative group">
            <span
              className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#0b0f17] transition-colors ${
                idx === 0
                  ? 'bg-sky-400'
                  : 'bg-zinc-700 group-hover:bg-sky-400'
              }`}
            />
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-semibold text-zinc-100">
                {item.title}
              </h3>
              <span
                className={`text-xs font-mono shrink-0 ${
                  idx === 0 ? 'text-sky-400' : 'text-zinc-400'
                }`}
              >
                {item.period}
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400 mt-0.5">
              {item.roleType} • {item.organization}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
