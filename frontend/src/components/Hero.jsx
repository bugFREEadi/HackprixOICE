import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';
import DNAGraph from '@/components/DNAGraph';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section data-testid={TID.hero} className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid mask-radial" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[10%] h-[420px] w-[420px] rounded-full blur-[140px] bg-cyan-500/15 pulse-glow" />
        <div className="absolute top-[20%] right-[5%] h-[480px] w-[480px] rounded-full blur-[160px] bg-violet-600/15 pulse-glow" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-[-10%] left-[40%] h-[420px] w-[420px] rounded-full blur-[140px] bg-blue-600/15 pulse-glow" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl mx-auto text-center">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-zinc-400 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            Now live on Base Sepolia · Gemini-powered
          </motion.div>

          <motion.h1
            variants={item}
            data-testid={TID.heroHeadline}
            className="font-display mt-7 text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] font-semibold tracking-[-0.03em] leading-[0.95]"
          >
            Innovation doesn't fail
            <br />
            because of bad ideas.
            <br />
            <span className="text-gradient-accent">It fails because nobody</span>
            <br />
            <span className="text-gradient-accent">tracks who built what.</span>
          </motion.h1>

          <motion.p
            variants={item}
            data-testid={TID.heroSubheadline}
            className="mt-8 text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            OICE is a decentralized, AI-powered coordination layer for innovation — where every
            contribution is scored, every dollar is accountable, and every project gets a
            living passport.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton
              as={Link}
              to="/app"
              data-testid={TID.heroLaunchBtn}
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black text-[15px] font-medium px-6 py-3.5 hover:bg-zinc-100 transition-colors"
            >
              Launch App
              <ArrowRight size={16} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton
              as={Link}
              to="/simulation"
              data-testid={TID.heroDemoBtn}
              className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 text-white text-[15px] font-medium px-6 py-3.5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <span className="h-6 w-6 grid place-items-center rounded-full bg-cyan-400/20 border border-cyan-400/40">
                <Play size={11} className="text-cyan-300 ml-px" fill="currentColor" />
              </span>
              Watch the 90-second Demo
            </MagneticButton>
          </motion.div>

          <motion.p variants={item} className="mt-6 text-xs text-zinc-500 tracking-wide">
            No signup. No wallet required to preview.
          </motion.p>
        </motion.div>

        {/* DNA Graph showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          data-testid={TID.heroDnaGraph}
          className="relative mt-16 lg:mt-24"
        >
          <div className="absolute -inset-x-8 -inset-y-4 rounded-[40px] bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/50">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                oice.app/passport/<span className="text-cyan-300">0x9a2f…dna</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">live</div>
            </div>

            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] bg-gradient-to-b from-zinc-950 to-black">
              <DNAGraph />
              {/* Floating label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Innovation DNA</span>
                <span className="text-[10px] font-mono text-cyan-300">#OICE-001</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] text-zinc-300">Readiness <span className="font-mono text-emerald-300">82</span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
