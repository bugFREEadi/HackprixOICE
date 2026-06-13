import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiGithub, SiNotion } from 'react-icons/si';
import { Coins, Sparkles } from 'lucide-react';
import { TID } from '@/constants/testIds';

const silos = [
  { Icon: SiGithub,  title: 'GitHub',   tracks: 'tracks code',    miss: 'but not the researcher who shaped the idea.' },
  { Icon: SiNotion,  title: 'Notion',   tracks: 'tracks docs',    miss: 'but not who validated the hypothesis.' },
  { Icon: Coins,     title: 'DAOs',     tracks: 'track funding',  miss: 'but not where the money actually went.' },
  { Icon: Sparkles,  title: 'AI tools', tracks: 'suggest ideas',  miss: 'but cannot tell you who deserves credit.' },
];

/* Scroll-driven word reveal — dark gray to white */
function RevealWord({ children, progress, range, color = '#ffffff', dimColor = '#3a3835', bold = false }) {
  const c = useTransform(progress, range, [dimColor, color]);
  return (
    <motion.span style={{ color: c, fontWeight: bold ? 600 : 'inherit' }}>{children}</motion.span>
  );
}

const headlineWords = [
  { t: '$2.7 trillion', b: true },
  { t: 'is spent on global R&D every year.', b: false },
  { t: 'Most of it vanishes', b: false, br: true },
  { t: 'into a', b: false },
  { t: 'black hole.', b: true, accent: true },
];

export default function Problem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 50%'],
  });

  return (
    <section ref={ref} id="problem" data-testid={TID.problemSection} className="relative py-32 lg:py-44">
      {/* warm subtle glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-40 h-[520px] w-[520px] rounded-full blur-[160px] bg-orange/[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.32em] text-orange font-medium mb-8"
        >
          The Innovation Black Hole · 01
        </motion.p>

        {/* Scroll-revealed headline */}
        <h2
          data-testid={TID.problemHeadline}
          className="font-display max-w-5xl text-4xl sm:text-5xl lg:text-[64px] xl:text-[76px] font-medium tracking-[-0.03em] leading-[1.02]"
        >
          {headlineWords.map((w, i) => {
            const t = 0.05 + i * 0.13;
            const range = [t, Math.min(1, t + 0.22)];
            return (
              <React.Fragment key={i}>
                {w.br && <br />}
                <RevealWord
                  progress={scrollYProgress}
                  range={range}
                  color={w.accent ? '#ee692e' : '#ffffff'}
                  dimColor={w.accent ? '#3a2a20' : '#312f2d'}
                  bold={w.b}
                >
                  {w.t}
                </RevealWord>
                {i < headlineWords.length - 1 && ' '}
              </React.Fragment>
            );
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 text-bone/60 text-lg max-w-2xl leading-relaxed"
        >
          Today's innovation ecosystem is broken into <span className="text-white font-medium">silos</span>.
          Each tool tracks one slice — and misses the rest.
        </motion.p>

        {/* Silo grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.08] rounded-2xl overflow-hidden">
          {silos.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              className="group relative bg-ink/80 p-8 lg:p-10 transition-colors duration-500 hover:bg-ink/40"
            >
              <div className="flex items-start gap-5">
                <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-bone group-hover:text-orange transition-colors">
                  <s.Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-2xl lg:text-3xl font-medium tracking-tight text-white">
                    {s.title}
                  </div>
                  <p className="mt-2.5 text-bone/55 leading-relaxed text-[15px]">
                    <span className="text-white">{s.tracks}</span> — {s.miss}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-bone/30 tracking-[0.2em]">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl"
        >
          <p className="text-bone/75 text-xl lg:text-2xl leading-[1.5] font-light">
            Contributors go <span className="text-white font-medium">unrecognized</span>. Funding has{' '}
            <span className="text-white font-medium">no accountability</span>. Brilliant projects die in silence —
            <span className="text-white"> not because they lacked talent, but because they lacked coordination.</span>
          </p>
          <p className="mt-10 font-display text-2xl lg:text-[34px] tracking-tight text-bone leading-tight">
            What if one platform could see the <span className="text-accent-warm font-medium">entire story of an innovation</span> — from the first spark to the final reward?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
