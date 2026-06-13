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
    <section data-testid={TID.simulationCta} className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-fine mask-grid-radial opacity-40" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[200px] bg-orange/[0.1]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full blur-[160px] bg-pink/[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] uppercase tracking-[0.32em] text-bone font-medium mb-7">
              Simulation Engine · 07 · Judge-facing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.02] text-white"
            >
              See the entire platform
              <br /><span className="text-accent-warm font-semibold">in 90 seconds.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="mt-7 text-bone/65 text-lg leading-[1.65] max-w-xl"
            >
              OICE compresses the full innovation lifecycle into a guided, narrated demo.
              <span className="text-white font-medium"> Play. Pause. Step through. Speed up.</span> You control the story.
            </motion.p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton
                as={Link} to="/simulation" data-testid={TID.runSimulationBtn}
                className="group inline-flex items-center gap-2.5 rounded-full bg-orange text-ink text-[15px] font-semibold px-6 py-3.5 hover:bg-orange-soft transition-colors"
              >
                <span className="h-7 w-7 grid place-items-center rounded-full bg-ink/20">
                  <Play size={12} className="ml-0.5" fill="currentColor" />
                </span>
                Run Simulation
              </MagneticButton>
              <div className="flex items-center gap-3 text-[12px] text-bone/45">
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
              transition={{ duration: 0.9 }}
              className="relative rounded-3xl border border-white/[0.08] bg-ink/75 backdrop-blur-xl p-6 lg:p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-[11px] font-mono text-bone/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                  oice.app/simulation
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-bone/40">90s</div>
              </div>

              <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '62%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: 'easeInOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange via-pink to-green"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-bone/40">
                <span>00:00</span>
                <span className="text-orange">step 06 · Milestones approved</span>
                <span>01:30</span>
              </div>

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
                        ? 'bg-orange/[0.06] border-orange/25 text-orange-soft'
                        : 'bg-white/[0.02] border-white/[0.05] text-bone/40'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="truncate">{f}</span>
                    {i === 5 && (<span className="ml-auto h-1.5 w-1.5 rounded-full bg-orange animate-ping" />)}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-bone/40">
                <span className="font-mono">narration · Sponsor releases tranche 2…</span>
                <span className="inline-flex items-center gap-1 text-orange hover:text-orange-soft cursor-pointer">
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
