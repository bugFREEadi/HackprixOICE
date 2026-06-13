import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TID } from '@/constants/testIds';

const stats = [
  { key: 'ai-dimensions',   label: 'AI evaluation dimensions',    value: 5,  suffix: '' },
  { key: 'contract-fns',    label: 'Smart contract functions',    value: 5,  suffix: ' core' },
  { key: 'lifecycle-steps', label: 'Lifecycle steps tracked',     value: 12, suffix: '' },
  { key: 'sim-runtime',     label: 'Simulation runtime',          value: 90, suffix: 's' },
  { key: 'contrib-types',   label: 'Contribution types supported',value: 6,  suffix: '' },
  { key: 'readiness',       label: 'Readiness score inputs',      value: 5,  suffix: '' },
];

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTs = performance.now();
    const tick = (ts) => {
      const p = Math.min(1, (ts - startTs) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(start + (to - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section data-testid={TID.statsSection} className="relative py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-6">Built for impact</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em]">
            Numbers that make the system <span className="text-gradient-accent">legible.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              data-testid={TID.stat(s.key)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-zinc-950/80 p-6 lg:p-8 flex flex-col justify-between gap-4 min-h-[160px] hover:bg-zinc-900/80 transition-colors"
            >
              <div className="font-display text-4xl lg:text-5xl font-medium tracking-tight">
                <span className="text-gradient-accent">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500 leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
