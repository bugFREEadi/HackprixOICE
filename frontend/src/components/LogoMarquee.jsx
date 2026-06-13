import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiTailwindcss, SiSolidity, SiPrisma, SiPostgresql,
  SiIpfs, SiEthereum, SiGoogle, SiVercel
} from 'react-icons/si';
import { TID } from '@/constants/testIds';

const logos = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiTailwindcss, label: 'Tailwind' },
  { Icon: SiGoogle, label: 'Gemini' },
  { Icon: SiSolidity, label: 'Solidity' },
  { Icon: SiEthereum, label: 'Base Sepolia' },
  { Icon: SiPrisma, label: 'Prisma' },
  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiIpfs, label: 'IPFS' },
  { Icon: SiVercel, label: 'Vercel' },
];

export default function LogoMarquee() {
  return (
    <section data-testid={TID.techMarquee} id="tech" className="relative py-14 border-y border-white/5 bg-black/40">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-[11px] uppercase tracking-[0.32em] text-zinc-500 mb-8"
      >
        Built on the rails the next billion users will run on
      </motion.p>
      <div className="fade-x-mask">
        <Marquee gradient={false} speed={32} pauseOnHover>
          {[...logos, ...logos].map((l, i) => {
            const { Icon, label } = l;
            return (
              <div key={i} className="flex items-center gap-3 mx-10 text-zinc-500 hover:text-white transition-colors group">
                <Icon className="h-6 w-6 group-hover:text-cyan-300 transition-colors" />
                <span className="font-display text-base tracking-tight">{label}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
