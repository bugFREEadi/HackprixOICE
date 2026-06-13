import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lock, IdCard, GitBranch } from 'lucide-react';
import { TID } from '@/constants/testIds';

const pillars = [
  {
    id: TID.pillarGemini,
    Icon: Brain,
    tag: 'Intelligence',
    title: 'Gemini AI',
    body: 'evaluates contributions, predicts timelines, and detects missing talent across your team.',
    accent: 'from-violet-500/80 to-fuchsia-500/40',
    ring: 'ring-violet-500/30',
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    id: TID.pillarEscrow,
    Icon: Lock,
    tag: 'Trust',
    title: 'Ethereum Escrow',
    body: 'locks, releases, and distributes funds based on verified milestones — not promises.',
    accent: 'from-cyan-400/80 to-blue-500/40',
    ring: 'ring-cyan-500/30',
    glow: 'rgba(34,211,238,0.35)',
  },
  {
    id: TID.pillarPassport,
    Icon: IdCard,
    tag: 'Story',
    title: 'Innovation Passports',
    body: 'a living dashboard that tells the complete story of any project — built in.',
    accent: 'from-amber-400/80 to-orange-500/40',
    ring: 'ring-amber-500/30',
    glow: 'rgba(245,158,11,0.35)',
  },
  {
    id: TID.pillarDna,
    Icon: GitBranch,
    tag: 'Visualization',
    title: 'DNA Graphs',
    body: 'visual lifecycle maps that evolve as your innovation grows. Zoomable. Interactive.',
    accent: 'from-emerald-400/80 to-teal-500/40',
    ring: 'ring-emerald-500/30',
    glow: 'rgba(16,185,129,0.35)',
  },
];

export default function Solution() {
  return (
    <section id="solution" data-testid={TID.solutionSection} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.32em] text-cyan-300/80 font-medium mb-6"
          >
            Meet OICE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.025em] leading-[1.02]"
          >
            One platform. <span className="text-zinc-500">Full lifecycle.</span>
            <br /><span className="text-gradient-accent">Zero trust assumptions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-7 text-zinc-400 text-lg leading-relaxed max-w-2xl"
          >
            OICE is the world's first decentralized innovation coordination protocol. Every contribution
            is scored. Every milestone is verified. Every reward is earned.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              data-testid={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl p-8 lg:p-10"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(600px circle at 50% 0%, ${p.glow}, transparent 50%)` }}
              />
              <div className="relative">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} ring-1 ${p.ring}`}>
                  <p.Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{p.tag}</span>
                  <span className="h-px w-8 bg-white/10" />
                </div>
                <h3 className="font-display mt-2 text-2xl lg:text-3xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-zinc-400 text-[15px] leading-relaxed max-w-md">{p.body}</p>
              </div>
              <div className="pointer-events-none absolute -bottom-32 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                   style={{ background: p.glow }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
