import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Gauge, Layers, ArrowRight } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';

const flow = [
  'Innovation created', 'AI analyzes & plans', 'Contributors join',
  'Contributions submitted', 'AI evaluates', 'Sponsors fund',
  'Milestones approved', 'Rewards flow', 'Passport generated',
  'DNA graph expands',
];

export default function SimulationCTA() {
  return (
    <section data-testid={TID.simulationCta} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-fine mask-radial opacity-50" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[180px] bg-cyan-500/20" />
        <div className="absolute left-1/3 top-1/3 h-[420px] w-[420px] rounded-full blur-[160px] bg-violet-600/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] uppercase tracking-[0.32em] text-cyan-300/80 mb-6">
              Simulation engine · Judge-facing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.02]"
            >
              See the entire platform <br />
              <span className="text-gradient-accent">in 90 seconds.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl"
            >
              Don't take our word for it — watch it happen. OICE compresses the full innovation
              lifecycle into a guided, narrated demo. Play. Pause. Step through. Speed up. You
              control the story.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                as={Link}
                to="/simulation"
                data-testid={TID.runSimulationBtn}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black text-[15px] font-semibold px-6 py-3.5 hover:opacity-95 transition-opacity"
              >
                <span className="h-7 w-7 grid place-items-center rounded-full bg-black/20">
                  <Play size={12} className="ml-0.5" fill="currentColor" />
                </span>
                Run Simulation
              </MagneticButton>
              <div className="flex items-center gap-3 text-[12px] text-zinc-500">
                <span className="inline-flex items-center gap-1.5"><Gauge size={13} /> 1× · 2× · 5×</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5"><Layers size={13} /> 12 lifecycle events</span>
              </div>
            </div>
          </div>

          {/* Mock player */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-6 lg:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  oice.app/simulation
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">90s</div>
              </div>

              {/* Timeline */}
              <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '62%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: 'easeInOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-violet-500"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>00:00</span>
                <span className="text-cyan-300">step 06 · Milestones approved</span>
                <span>01:30</span>
              </div>

              {/* Flow chips */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-2">
                {flow.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-[12px] ${
                      i < 6
                        ? 'bg-cyan-500/[0.05] border-cyan-400/20 text-cyan-200'
                        : 'bg-white/[0.02] border-white/5 text-zinc-500'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="truncate">{f}</span>
                    {i === 5 && (
                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300 animate-ping" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="font-mono">narration: "Sponsor releases tranche 2..."</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 cursor-pointer">
                  Open <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
