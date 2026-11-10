'use client';

import React from 'react';
import { Project, PROJECTS_DATA } from '@/data/portfolioData';
import { ArrowRight, ArrowUpRight, Image as ImageIcon, Terminal, Cpu } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'proofing':
        return <ImageIcon className="w-4 h-4 text-emerald-400" />;
      case 'pipeline':
        return <Terminal className="w-4 h-4 text-teal-400" />;
      case 'luminaraw':
      default:
        return <Cpu className="w-4 h-4 text-emerald-300" />;
    }
  };

  const getBadgeStyle = (statusType: Project['statusType']) => {
    switch (statusType) {
      case 'production':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'active':
        return 'bg-teal-500/10 text-teal-300 border-teal-500/30';
      case 'rnd':
        return 'bg-emerald-600/15 text-emerald-200 border-emerald-400/30';
    }
  };

  const getDotStyle = (statusType: Project['statusType']) => {
    switch (statusType) {
      case 'production':
        return 'bg-emerald-400';
      case 'active':
        return 'bg-teal-400';
      case 'rnd':
        return 'bg-emerald-300';
    }
  };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="space-y-6 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-emerald-900/40 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
            <span>01</span>
            <span>/</span>
            <span>Engineering &amp; Automation</span>
          </div>
          <h2 id="projects-heading" className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            Technical &amp; Automation Projects
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-mono">
          Pipeline rekayasa perangkat lunak untuk efisiensi produksi media
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className="project-card rounded-xl p-5 flex flex-col justify-between"
          >
            <div className="space-y-3.5">
              {/* Top bar: Icon + Status Indicator */}
              <div className="flex items-center justify-between gap-2">
                <div className="w-9 h-9 rounded-lg bg-[#04120b] border border-emerald-900/60 flex items-center justify-center">
                  {getIcon(project.id)}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getBadgeStyle(
                    project.statusType
                  )}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${getDotStyle(project.statusType)}`} />
                  {project.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-zinc-100 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Bottom: Tech Pills & Action Link */}
            <div className="pt-5 mt-5 border-t border-emerald-900/40 space-y-3.5">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded-md bg-[#04120b] border border-emerald-900/50 ${
                      idx === 0 ? 'text-emerald-300' : 'text-zinc-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs pt-0.5">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
                >
                  <span>Detail Arsitektur</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-emerald-400 font-mono inline-flex items-center gap-1 transition-colors"
                    aria-label={`Lihat repositori GitHub ${project.title}`}
                  >
                    <span>Repo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-zinc-500 font-mono">{project.footerMeta}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
