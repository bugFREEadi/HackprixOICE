import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, GitPullRequest, Brain, CheckCircle2,
  Coins, Flag, Sparkles, IdCard,
} from 'lucide-react';
import { TID } from '@/constants/testIds';

const steps = [
  { n: '01', Icon: Rocket,         title: 'Create',              desc: 'Launch your innovation with a title, description, and category. Stored on-chain + IPFS.', color: '#22d3ee' },
  { n: '02', Icon: GitPullRequest, title: 'Contribute',          desc: 'Team members submit work — code, research, design, marketing, docs. Every type counts.', color: '#60a5fa' },
  { n: '03', Icon: Brain,          title: 'AI evaluates',        desc: 'Gemini scores each contribution on originality, effort, complexity, usefulness, impact.', color: '#a78bfa' },
  { n: '04', Icon: CheckCircle2,   title: 'Validate',            desc: 'Community reviews and validates contributions. No single point of authority.', color: '#f472b6' },
  { n: '05', Icon: Coins,          title: 'Fund',                desc: 'Sponsors deposit ETH into the innovation\u2019s escrow. Funds locked until milestones land.', color: '#facc15' },
  { n: '06', Icon: Flag,           title: 'Hit milestones',      desc: 'Milestones define real progress. Each one unlocks the next tranche of funding.', color: '#fb923c' },
  { n: '07', Icon: Sparkles,       title: 'Distribute rewards',  desc: 'AI-weighted scores determine each contributor\u2019s share. ETH flows automatically.', color: '#34d399' },
  { n: '08', Icon: IdCard,         title: 'Generate passport',   desc: 'A full lifecycle dashboard — contributions, funding, AI insights, readiness score, graph.', color: '#22d3ee' },
];

export default function HowItWorks() {
  return (
    <section id="how" data-testid={TID.howItWorks} className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10 bg-grid-fine mask-radial opacity-60" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-6">
            From idea to impact in 8 steps
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.05]"
          >
            A living system that <span className="text-gradient-accent">grows with your innovation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-zinc-400 text-lg"
          >
            Not a pitch deck. Not a spreadsheet. <span className="text-white">A verifiable innovation record.</span>
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-emerald-400"
          />

          <div className="space-y-12 sm:space-y-20">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.n}
                  data-testid={TID.step(i + 1)}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-center"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 h-3 w-3 rounded-full ring-4 ring-black"
                    style={{ background: s.color, boxShadow: `0 0 24px ${s.color}` }}
                  />

                  {/* Card */}
                  <div className={`pl-12 sm:pl-0 ${left ? 'sm:pr-16 sm:text-right' : 'sm:col-start-2 sm:pl-16'}`}>
                    <div className="inline-flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-zinc-500">{s.n}</span>
                      <span className="h-px w-8 bg-white/10" />
                    </div>
                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-zinc-400 leading-relaxed max-w-md sm:max-w-sm sm:ml-auto">{s.desc}</p>
                  </div>

                  {/* Icon panel */}
                  <div className={`hidden sm:block ${left ? 'sm:col-start-2 sm:pl-16' : 'sm:col-start-1 sm:row-start-1 sm:pr-16'}`}>
                    <div className={`flex ${left ? 'justify-start' : 'justify-end'}`}>
                      <div
                        className="relative h-20 w-20 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur grid place-items-center overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 opacity-25"
                          style={{ background: `radial-gradient(circle at 50% 50%, ${s.color}, transparent 65%)` }}
                        />
                        <s.Icon size={28} className="relative" style={{ color: s.color }} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
