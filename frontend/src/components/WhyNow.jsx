import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Globe } from 'lucide-react';
import { TID } from '@/constants/testIds';
import { IsoCluster } from '@/components/IsometricVisual';

const forces = [
  {
    Icon: Cpu, label: 'AI', num: '01',
    title: 'AI is finally structured enough to evaluate work',
    body: 'Not just generate it. Multi-dimensional scoring with reasoning has moved from research demo to production reality.',
    color: '#eb8299',
  },
  {
    Icon: Network, label: 'Blockchain', num: '02',
    title: 'Blockchain is finally cheap enough for micro-transactions',
    body: 'L2s like Base make distributing rewards to ten contributors as natural as a Stripe payout — without draining wallets.',
    color: '#ee692e',
  },
  {
    Icon: Globe, label: 'Innovation', num: '03',
    title: 'Innovation is finally distributed enough',
    body: 'No single company, DAO, or country owns the best ideas. Coordination — not capital — is the new bottleneck.',
    color: '#85be9d',
  },
];

export default function WhyNow() {
  return (
    <section id="why" data-testid={TID.whyNowSection} className="relative py-28 lg:py-40 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] uppercase tracking-[0.32em] text-orange font-medium mb-7">
            Why now · 05
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-white"
          >
            Three forces
            <br /><span className="text-accent-warm font-semibold">converging.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-7 text-bone/65 text-lg max-w-xl"
          >
            OICE sits at the intersection of all three.
          </motion.p>
        </div>

        {/* Isometric cluster visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-16 w-full"
        >
          <div className="relative rounded-3xl border border-white/[0.08] bg-ink/60 overflow-hidden">
            <div className="absolute inset-0 bg-grid-fine opacity-30" />
            <IsoCluster className="w-full h-[280px] md:h-[360px] relative" />
          </div>
        </motion.div>

        {/* Force cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden">
          {forces.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="group relative bg-ink/80 p-7 lg:p-8 transition-colors duration-500 hover:bg-ink/40"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 grid place-items-center rounded-xl border border-white/[0.08]"
                     style={{ background: `${f.color}14`, color: f.color }}>
                  <f.Icon size={22} strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-mono text-bone/30 tracking-[0.22em]">{f.num}</span>
              </div>
              <div className="mt-7 text-[10px] uppercase tracking-[0.22em] text-bone/45">{f.label}</div>
              <h3 className="font-display mt-2 text-xl lg:text-[22px] tracking-tight text-white leading-snug">{f.title}</h3>
              <p className="mt-3 text-bone/55 text-[14px] leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
