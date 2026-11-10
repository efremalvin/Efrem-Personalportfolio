'use client';

import React from 'react';
import { SKILLS_DATA, SkillCluster } from '@/data/portfolioData';
import { Code2, Film, Terminal } from 'lucide-react';

export function Skills() {
  const getClusterIcon = (iconName: SkillCluster['iconName']) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'film':
        return <Film className="w-4 h-4 text-teal-400" />;
      case 'cpu':
      default:
        return <Terminal className="w-4 h-4 text-emerald-300" />;
    }
  };

  return (
    <section id="skills" aria-labelledby="skills-heading" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-emerald-900/40 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
            <span>03</span>
            <span>/</span>
            <span>Capabilities &amp; Ecosystem</span>
          </div>
          <h2 id="skills-heading" className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            Skills &amp; Tooling
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-mono">
          Tiga pilar kompetensi teknis dan pascaproduksi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SKILLS_DATA.map((cluster, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#071f14]/65 border border-emerald-900/50 p-5 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                {getClusterIcon(cluster.iconName)}
                <span>{cluster.category}</span>
              </h3>
              <span className="text-[11px] font-mono text-emerald-400/80">{cluster.countLabel}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cluster.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="skill-pill px-3 py-1.5 rounded-full text-xs font-medium text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
