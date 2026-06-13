import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { TID } from '@/constants/testIds';

export default function SimulationPlaceholder() {
  return (
    <main
      data-testid={TID.simulationPlaceholder}
      className="relative min-h-screen bg-[#050505] text-white grid place-items-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[180px] bg-violet-500/20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-zinc-400 mb-6">
          <Play size={11} className="text-cyan-300" fill="currentColor" /> Simulation engine
        </div>
        <h1 className="font-display text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-tight">
          The <span className="text-gradient-accent">90-second story</span> is loading.
        </h1>
        <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
          The interactive simulator will play through innovation creation, AI evaluation,
          escrow funding, milestone approval and automated reward distribution — narrated
          and step-controlled.
        </p>
        <Link
          to="/"
          data-testid={TID.backHome}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={14} /> Back to landing
        </Link>
      </motion.div>
    </main>
  );
}
