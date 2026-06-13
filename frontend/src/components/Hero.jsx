import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';
import DNAGraph from '@/components/DNAGraph';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  return (
    <section data-testid={TID.hero} className="relative pt-36 lg:pt-48 pb-20 lg:pb-28 overflow-hidden">
      {/* Premium grid background — Linear / Stripe style */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-premium mask-grid-v opacity-90" />
        {/* warm radial glow */}
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 h-[700px] mask-grid-radial">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[760px] rounded-full blur-[180px] bg-orange/[0.12] breathe" />
          <div className="absolute left-[30%] top-[30%] h-[360px] w-[360px] rounded-full blur-[140px] bg-pink/[0.07] breathe" style={{ animationDelay: '-3s' }} />
          <div className="absolute right-[28%] bottom-[20%] h-[300px] w-[300px] rounded-full blur-[120px] bg-green/[0.06] breathe" style={{ animationDelay: '-1.5s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-5xl mx-auto text-center">
          <motion.div variants={item} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-bone/80 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-orange opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange" />
            </span>
            Innovation Coordination Protocol
          </motion.div>

          <motion.h1
            variants={item}
            data-testid={TID.heroHeadline}
            className="font-display mt-8 text-[44px] sm:text-6xl lg:text-7xl xl:text-[92px] font-medium tracking-[-0.035em] leading-[0.96] text-white"
          >
            Innovation isn't broken.
            <br />
            <span className="text-accent-warm font-semibold">Coordination is.</span>
          </motion.h1>

          <motion.p
            variants={item}
            data-testid={TID.heroSubheadline}
            className="mt-9 text-bone/70 text-base sm:text-lg lg:text-xl leading-[1.6] max-w-2xl mx-auto"
          >
            OICE <span className="text-white font-medium">scores every contribution with AI</span>, holds
            funding in <span className="text-white font-medium">Ethereum escrow</span>, and pays builders
            only when milestones land. The complete innovation lifecycle —
            verifiable, automated, finally fair.
          </motion.p>

          <motion.div variants={item} className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <MagneticButton as={Link} to="/app" data-testid={TID.heroLaunchBtn}
              className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink text-[15px] font-medium px-6 py-3.5 hover:bg-white transition-colors">
              Launch App
              <ArrowRight size={16} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton as={Link} to="/simulation" data-testid={TID.heroDemoBtn}
              className="group inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/15 text-white text-[15px] font-medium px-6 py-3.5 backdrop-blur hover:bg-white/[0.08] hover:border-white/25 transition-colors">
              <span className="h-6 w-6 grid place-items-center rounded-full bg-orange/15 border border-orange/40">
                <Play size={11} className="text-orange ml-px" fill="currentColor" />
              </span>
              Watch 90-second demo
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center justify-center gap-4 text-xs text-bone/45">
            <span>No signup required</span>
            <span className="h-1 w-1 rounded-full bg-bone/30" />
            <span>Live on Base Sepolia</span>
            <span className="h-1 w-1 rounded-full bg-bone/30" />
            <span>Gemini-powered</span>
          </motion.div>
        </motion.div>

        {/* DNA Graph showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          data-testid={TID.heroDnaGraph}
          className="relative mt-20 lg:mt-28"
        >
          <div className="absolute -inset-x-10 -inset-y-6 rounded-[40px] bg-gradient-to-b from-orange/[0.07] via-transparent to-pink/[0.05] blur-2xl" />
          <div className="relative rounded-2xl border border-white/[0.08] bg-ink/70 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] bg-ink/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-orange/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-pink/70" />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-bone/40">
                <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                oice.app / passport / <span className="text-bone">0x9a2f…dna</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/40">live</div>
            </div>

            <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] bg-gradient-to-b from-ink to-black">
              <DNAGraph />
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/[0.08] bg-ink/70 backdrop-blur px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-bone/50">Innovation DNA</span>
                <span className="text-[10px] font-mono text-orange">#OICE-001</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/[0.08] bg-ink/70 backdrop-blur px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                <span className="text-[11px] text-bone/80">Readiness <span className="font-mono text-green">82</span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
