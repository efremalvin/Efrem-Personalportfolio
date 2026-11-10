'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { FotonicShowcase } from '@/components/FotonicShowcase';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { Footer } from '@/components/Footer';
import { ProjectModal } from '@/components/ProjectModal';
import { VisualModal } from '@/components/VisualModal';
import { CvModal } from '@/components/CvModal';
import { Project, VisualShowcaseItem } from '@/data/portfolioData';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeVisual, setActiveVisual] = useState<VisualShowcaseItem | null>(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  return (
    <>
      {/* Subtle top ambient light */}
      <div
        className="ambient-glow pointer-events-none fixed inset-x-0 top-0 h-[420px] z-0"
        aria-hidden="true"
      />

      {/* Top Header Navigation */}
      <Header onOpenCv={() => setIsCvOpen(true)} />

      {/* Main Container */}
      <main id="top" className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-12 pb-20 space-y-20">
        <Hero
          onOpenCv={() => setIsCvOpen(true)}
          onShowToast={showToast}
        />

        <Projects onSelectProject={(project) => setActiveProject(project)} />

        <FotonicShowcase onSelectVisual={(item) => setActiveVisual(item)} />

        <Skills />

        <Timeline />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
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
          className="fixed bottom-5 right-5 z-50 rounded-lg bg-zinc-900 border border-sky-500/40 px-4 py-2.5 shadow-xl flex items-center gap-2 text-xs text-zinc-100 no-print animate-in fade-in slide-in-from-bottom-2 duration-150"
          role="status"
          aria-live="polite"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
