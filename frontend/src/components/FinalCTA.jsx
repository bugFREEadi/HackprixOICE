import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BookOpen } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';

export default function FinalCTA() {
  return (
    <section id="docs" data-testid={TID.finalCta} className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-full">
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[200px] bg-violet-600/15" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[160px] bg-cyan-500/12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-7"
        >
          The coordination layer innovation has been waiting for
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold tracking-[-0.03em] leading-[0.98]"
        >
          Innovation deserves <br />
          <span className="text-gradient-accent">better infrastructure.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="mt-8 text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Stop losing contributors to obscurity. Stop funding without accountability. Stop
          building without a record.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <MagneticButton
            as={Link}
            to="/app"
            data-testid={TID.finalLaunchBtn}
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black text-[15px] font-medium px-7 py-4 hover:bg-zinc-100 transition-colors"
          >
            Launch OICE
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton
            as={Link}
            to="/simulation"
            data-testid={TID.finalSimBtn}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 text-white text-[15px] font-medium px-7 py-4 backdrop-blur hover:bg-white/10 transition-colors"
          >
            <Play size={14} />
            Run the Simulation
          </MagneticButton>
          <a
            href="#docs"
            data-testid={TID.finalDocsBtn}
            className="inline-flex items-center gap-1.5 text-zinc-400 text-sm hover:text-white transition-colors"
          >
            <BookOpen size={14} /> Read the Docs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
