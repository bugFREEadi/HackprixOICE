import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, IdCard, GitBranch } from 'lucide-react';
import { TID } from '@/constants/testIds';
import { IsoConverge } from '@/components/IsometricVisual';

const pillars = [
  {
    id: TID.pillarGemini, Icon: Brain, num: '01', tag: 'Intelligence', title: 'Gemini AI',
    body: 'Evaluates contributions across 5 dimensions, predicts timelines, and detects missing talent.',
    accent: '#eb8299',
  },
  {
    id: TID.pillarEscrow, Icon: Lock, num: '02', tag: 'Trust', title: 'Ethereum Escrow',
    body: 'Locks, releases, and distributes funds based on verified milestones — not promises.',
    accent: '#ee692e',
  },
  {
    id: TID.pillarPassport, Icon: IdCard, num: '03', tag: 'Story', title: 'Innovation Passports',
    body: 'A living dashboard that tells the complete story of any project. Built in.',
    accent: '#ded2c4',
  },
  {
    id: TID.pillarDna, Icon: GitBranch, num: '04', tag: 'Visualization', title: 'DNA Graphs',
    body: 'Visual lifecycle maps that evolve as your innovation grows. Zoomable. Interactive.',
    accent: '#85be9d',
  },
];

export default function Solution() {
  return (
    <section id="solution" data-testid={TID.solutionSection} className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.32em] text-orange font-medium mb-7"
            >
              Meet OICE · 02
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-[64px] font-medium tracking-[-0.03em] leading-[1.02] text-white"
            >
              One platform.
              <br />
              <span className="text-bone/55">Full lifecycle.</span>
              <br />
              <span className="text-accent-warm font-semibold">Zero trust assumptions.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-8 text-bone/65 text-lg leading-[1.65] max-w-xl"
            >
              OICE is the world's first decentralized innovation coordination protocol.
              <br className="hidden sm:block" />
              Every contribution is <span className="text-white font-medium">scored</span>.
              Every milestone is <span className="text-white font-medium">verified</span>.
              Every reward is <span className="text-white font-medium">earned</span>.
            </motion.p>
          </div>

          {/* Right — isometric wireframe visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-orange/[0.04] blur-3xl" />
            <div className="relative aspect-square w-full">
              <IsoConverge className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Four pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              data-testid={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="group relative bg-ink/80 p-7 lg:p-8 transition-colors duration-500 hover:bg-ink/40 min-h-[260px] flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 grid place-items-center rounded-xl border border-white/[0.08] bg-white/[0.02]"
                     style={{ color: p.accent }}>
                  <p.Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-mono text-bone/30 tracking-[0.22em]">{p.num}</span>
              </div>
              <div className="mt-auto pt-10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-bone/45 mb-2">{p.tag}</div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-white">{p.title}</h3>
                <p className="mt-3 text-bone/55 text-[14px] leading-relaxed">{p.body}</p>
              </div>
              <div className="pointer-events-none absolute -bottom-20 -right-12 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                   style={{ background: p.accent }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
