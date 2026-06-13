import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { TID } from '@/constants/testIds';

export default function AppPlaceholder() {
  return (
    <main data-testid={TID.appPlaceholder} className="relative min-h-screen bg-ink text-white grid place-items-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-premium mask-grid-v opacity-70" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[180px] bg-orange/[0.12]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-bone/70 mb-7">
          <Sparkles size={12} className="text-orange" /> App coming up
        </div>
        <h1 className="font-display text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-tight">
          The <span className="text-accent-warm font-semibold">OICE app</span> is being assembled.
        </h1>
        <p className="mt-6 text-bone/60 text-lg leading-relaxed">
          This is where you will create innovations, submit contributions, evaluate work and
          watch your DNA graph come alive.
        </p>
        <Link
          to="/"
          data-testid={TID.backHome}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium hover:bg-white/[0.08] transition-colors"
        >
          <ArrowLeft size={14} /> Back to landing
        </Link>
      </motion.div>
    </main>
  );
}
