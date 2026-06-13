import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket, GitPullRequest, Brain, CheckCircle2,
  Coins, Flag, Sparkles, IdCard,
} from 'lucide-react';
import { TID } from '@/constants/testIds';

const steps = [
  { n: '01', Icon: Rocket,         title: 'Create',             desc: 'Launch your innovation with a title, description, and category. Stored on-chain + IPFS.', accent: '#ee692e' },
  { n: '02', Icon: GitPullRequest, title: 'Contribute',         desc: 'Team members submit work — code, research, design, marketing, docs.',                    accent: '#ded2c4' },
  { n: '03', Icon: Brain,          title: 'AI evaluates',       desc: 'Gemini scores each contribution on originality, effort, complexity, usefulness, impact.', accent: '#eb8299' },
  { n: '04', Icon: CheckCircle2,   title: 'Validate',           desc: 'Community reviews and validates contributions. No single point of authority.',           accent: '#85be9d' },
  { n: '05', Icon: Coins,          title: 'Fund',               desc: 'Sponsors deposit ETH into escrow. Funds locked until milestones land.',                   accent: '#ee692e' },
  { n: '06', Icon: Flag,           title: 'Hit milestones',     desc: 'Each milestone unlocks the next tranche of funding.',                                     accent: '#ded2c4' },
  { n: '07', Icon: Sparkles,       title: 'Distribute rewards', desc: 'AI-weighted scores determine each contributor share. ETH flows automatically.',          accent: '#eb8299' },
  { n: '08', Icon: IdCard,         title: 'Generate passport',  desc: 'A full lifecycle dashboard — contributions, funding, AI insights, readiness, graph.',     accent: '#85be9d' },
];

export default function HowItWorks() {
  return (
    <section id="how" data-testid={TID.howItWorks} className="relative py-28 lg:py-40 border-t border-white/[0.06]">
      <div className="absolute inset-0 -z-10 bg-grid-fine mask-grid-radial opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-[11px] uppercase tracking-[0.32em] text-orange font-medium mb-7">
            From idea to impact · 03
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white"
          >
            A living system that <span className="text-accent-warm font-semibold">grows with your innovation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-7 text-bone/65 text-lg max-w-xl"
          >
            Not a pitch deck. Not a spreadsheet.
            <br /><span className="text-white font-medium">A verifiable innovation record.</span>
          </motion.p>
        </div>

        {/* Assembly timeline */}
        <div className="relative mt-24">
          {/* center vertical guide */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange via-pink to-green"
          />

          <div className="space-y-14 sm:space-y-24">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              const fromX = left ? -120 : 120;
              return (
                <motion.div
                  key={s.n}
                  data-testid={TID.step(i + 1)}
                  className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12 items-center"
                >
                  {/* center dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.6, delay: 0.15, ease: 'backOut' }}
                    className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-3 h-3 w-3 rounded-full ring-4 ring-[#0a0a0a]"
                    style={{ background: s.accent, boxShadow: `0 0 18px ${s.accent}` }}
                  />

                  {/* Text panel — slides in from left or right */}
                  <motion.div
                    initial={{ x: fromX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-12 sm:pl-0 ${left ? 'sm:pr-16 sm:text-right' : 'sm:col-start-2 sm:pl-16'}`}
                  >
                    <div className={`inline-flex items-center gap-3 ${left ? 'sm:flex-row-reverse' : ''}`}>
                      <span className="font-mono text-[11px] tracking-[0.18em] text-bone/40">{s.n}</span>
                      <span className="h-px w-10" style={{ background: `${s.accent}80` }} />
                    </div>
                    <h3 className="mt-3 font-display text-2xl sm:text-[32px] font-medium tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className={`mt-2.5 text-bone/55 leading-relaxed max-w-md text-[15px] ${left ? 'sm:ml-auto' : ''}`}>
                      {s.desc}
                    </p>
                  </motion.div>

                  {/* Icon panel — slides in from opposite side */}
                  <motion.div
                    initial={{ x: -fromX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className={`hidden sm:block ${left ? 'sm:col-start-2 sm:pl-16' : 'sm:col-start-1 sm:row-start-1 sm:pr-16'}`}
                  >
                    <div className={`flex ${left ? 'justify-start' : 'justify-end'}`}>
                      <div className="relative h-24 w-24 rounded-2xl border border-white/[0.08] bg-ink/70 backdrop-blur grid place-items-center overflow-hidden">
                        <div className="absolute inset-0 opacity-25"
                             style={{ background: `radial-gradient(circle at 50% 50%, ${s.accent}, transparent 65%)` }} />
                        <s.Icon size={32} strokeWidth={1.6} style={{ color: s.accent }} className="relative" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
