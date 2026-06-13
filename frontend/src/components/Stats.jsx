import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TID } from '@/constants/testIds';

const stats = [
  { key: 'ai-dimensions',   label: 'AI evaluation dimensions',    value: 5,  suffix: '',     color: '#ee692e' },
  { key: 'contract-fns',    label: 'Smart contract functions',    value: 5,  suffix: ' core',color: '#ded2c4' },
  { key: 'lifecycle-steps', label: 'Lifecycle steps tracked',     value: 12, suffix: '',     color: '#eb8299' },
  { key: 'sim-runtime',     label: 'Simulation runtime',          value: 90, suffix: 's',    color: '#85be9d' },
  { key: 'contrib-types',   label: 'Contribution types supported',value: 6,  suffix: '',     color: '#ee692e' },
  { key: 'readiness',       label: 'Readiness score inputs',      value: 5,  suffix: '',     color: '#eb8299' },
];

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = 0;
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
    <section data-testid={TID.statsSection} className="relative py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-orange font-medium mb-7">Built for impact · 06</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.025em] text-white leading-tight">
            Numbers that make the system <span className="text-accent-warm font-semibold">legible.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.08] rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              data-testid={TID.stat(s.key)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-ink/80 p-6 lg:p-8 flex flex-col justify-between gap-4 min-h-[170px] hover:bg-ink/40 transition-colors duration-500"
            >
              <div className="font-display text-4xl lg:text-5xl font-medium tracking-tight" style={{ color: s.color }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-bone/45 leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
