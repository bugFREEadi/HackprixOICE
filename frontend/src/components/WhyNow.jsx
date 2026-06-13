import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, Globe } from 'lucide-react';
import { TID } from '@/constants/testIds';

const forces = [
  {
    Icon: Cpu,
    label: 'AI',
    title: 'AI is finally structured enough to evaluate work',
    body: 'Not just generate it. Multi-dimensional scoring with reasoning has gone from research demo to production reality.',
    color: '#a78bfa',
  },
  {
    Icon: Network,
    label: 'Blockchain',
    title: 'Blockchain is finally cheap enough for micro-transactions',
    body: 'L2s like Base make distributing rewards to ten contributors as natural as a Stripe payout — without draining wallets.',
    color: '#22d3ee',
  },
  {
    Icon: Globe,
    label: 'Innovation',
    title: 'Innovation is finally distributed enough',
    body: 'No single company, DAO, or country owns the best ideas anymore. Coordination — not capital — is the new bottleneck.',
    color: '#34d399',
  },
];

export default function WhyNow() {
  return (
    <section id="why" data-testid={TID.whyNowSection} className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-6">
            Why now
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.05]"
          >
            Three forces <span className="text-gradient-accent">converging</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="mt-6 text-zinc-400 text-lg max-w-xl"
          >
            OICE sits at the intersection of all three.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {forces.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-7 backdrop-blur"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-25"
                   style={{ background: f.color }} />
              <div className="relative">
                <div className="h-12 w-12 grid place-items-center rounded-xl border border-white/10"
                     style={{ background: `${f.color}1f`, color: f.color }}>
                  <f.Icon size={22} strokeWidth={1.8} />
                </div>
                <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{f.label}</div>
                <h3 className="font-display mt-2 text-xl lg:text-2xl tracking-tight">{f.title}</h3>
                <p className="mt-3 text-zinc-400 text-[14px] leading-relaxed">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
