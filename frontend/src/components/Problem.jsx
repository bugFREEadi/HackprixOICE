import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiNotion } from 'react-icons/si';
import { Coins, Sparkles } from 'lucide-react';
import { TID } from '@/constants/testIds';

const silos = [
  { Icon: SiGithub, title: 'GitHub', body: 'tracks code — but not the researcher who shaped the idea.', tint: 'from-zinc-300 to-zinc-500' },
  { Icon: SiNotion, title: 'Notion', body: 'tracks docs — but not who validated the hypothesis.', tint: 'from-zinc-300 to-zinc-500' },
  { Icon: Coins, title: 'DAOs', body: 'track funding — but not where the money actually went.', tint: 'from-yellow-300 to-orange-500' },
  { Icon: Sparkles, title: 'AI tools', body: 'suggest ideas — but can\u2019t tell you who deserves credit.', tint: 'from-cyan-300 to-violet-500' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Problem() {
  return (
    <section id="problem" data-testid={TID.problemSection} className="relative py-24 lg:py-36">
      {/* Black hole glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[680px] overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-32 h-[520px] w-[520px] rounded-full blur-[150px] bg-orange-600/12" />
        <div className="absolute left-1/2 -translate-x-1/2 top-40 h-[360px] w-[360px] rounded-full blur-[120px] bg-rose-600/12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl"
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.32em] text-orange-400/80 font-medium mb-6">
            The innovation black hole
          </motion.p>
          <motion.h2
            variants={fadeUp}
            data-testid={TID.problemHeadline}
            className="font-display text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-[-0.025em] leading-[1.02]"
          >
            <span className="text-white">$2.7 trillion</span>
            <span className="text-zinc-500"> is spent on R&D globally every year.</span>
            <br />
            <span className="text-zinc-500">Most of it vanishes into a </span>
            <span className="relative inline-block">
              <span className="text-gradient-accent">black hole</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M2 5 Q 50 1, 100 4 T 198 3" stroke="url(#gx)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gx" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="text-zinc-500">.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Today's innovation ecosystem is broken into silos.
          </motion.p>
        </motion.div>

        {/* Silo grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {silos.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-7 transition hover:border-white/20"
            >
              <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                   style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }} />
              <div className="flex items-start gap-5 relative">
                <div className={`h-12 w-12 shrink-0 grid place-items-center rounded-xl border border-white/10 bg-gradient-to-br ${s.tint} text-black/80`}>
                  <s.Icon size={22} />
                </div>
                <div>
                  <div className="font-display text-2xl font-medium tracking-tight">{s.title}</div>
                  <p className="mt-1.5 text-zinc-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl"
        >
          <p className="text-zinc-300 text-xl lg:text-2xl leading-relaxed font-light">
            Contributors go unrecognized. Funding has no accountability. Brilliant projects die in silence —
            <span className="text-white"> not because they lacked talent, but because they lacked coordination.</span>
          </p>
          <p className="mt-8 font-display text-2xl lg:text-3xl tracking-tight text-gradient">
            What if one platform could see the entire story of an innovation — from the first spark to the final reward?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
