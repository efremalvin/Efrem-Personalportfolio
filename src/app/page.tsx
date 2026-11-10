'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { FotonicShowcase } from '@/components/FotonicShowcase';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { PrintCv } from '@/components/PrintCv';
import { PresentationMode } from '@/components/PresentationMode';
import { ProjectModal } from '@/components/ProjectModal';
import { VisualModal } from '@/components/VisualModal';
import { CvModal } from '@/components/CvModal';
import { Project, VisualShowcaseItem } from '@/data/portfolioData';

export default function Home() {
  const [activeView, setActiveView] = useState<'document' | 'presentation'>('document');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeVisual, setActiveVisual] = useState<VisualShowcaseItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <>
      <PrintCv />
      <div id="app-root">
      {/* Subtle top ambient emerald light */}
      <div
        className="ambient-glow pointer-events-none fixed inset-x-0 top-0 h-[460px] z-0"
        aria-hidden="true"
      />

      {/* Top Header Navigation with Dual-View Switcher */}
      <Header
        activeView={activeView}
        onToggleView={(view) => setActiveView(view)}
      />

      {/* VIEW 1: DOKUMEN WEB MODERN */}
      <div className={activeView === 'document' ? 'block' : 'hidden print-only-show'}>
        <main id="top" className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-10 pb-20 space-y-20">
          <Hero
            onOpenCv={() => setIsCvOpen(true)}
            onShowToast={showToast}
          />

          <Projects onSelectProject={(project) => setActiveProject(project)} />

          <FotonicShowcase onSelectVisual={(item) => setActiveVisual(item)} />

          <Skills />

          <Timeline />
        </main>

        <Footer />
      </div>

      {/* VIEW 2: PRESENTASI PPT INTERAKTIF */}
      {activeView === 'presentation' && (
        <div className="relative z-10 no-print">
          <PresentationMode
            onSwitchToDocument={() => setActiveView('document')}
            onSelectProject={(project) => setActiveProject(project)}
            onSelectVisual={(item) => setActiveVisual(item)}
            onShowToast={showToast}
          />
        </div>
      )}

      {/* Modals Accessible Across Both Modes */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <VisualModal
        item={activeVisual}
        onClose={() => setActiveVisual(null)}
      />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          className="fixed bottom-5 right-5 z-50 rounded-xl bg-surface border border-emerald-500/50 px-4 py-2.5 shadow-2xl flex items-center gap-2.5 text-xs text-zinc-100 no-print animate-pop-in"
          role="status"
          aria-live="polite"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-sm shadow-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
      </div>
    </>
  );
}
