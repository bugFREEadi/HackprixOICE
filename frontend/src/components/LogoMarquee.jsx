import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiTailwindcss, SiSolidity, SiPrisma, SiMongodb,
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
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiIpfs, label: 'IPFS' },
  { Icon: SiVercel, label: 'Vercel' },
];

export default function LogoMarquee() {
  return (
    <section data-testid={TID.techMarquee} id="tech" className="relative py-16 border-y border-white/[0.05] bg-ink/40">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-[11px] uppercase tracking-[0.32em] text-pink/70 mb-9"
      >
        Built on rails the next billion users will run on
      </motion.p>
      <div className="fade-x-mask">
        <Marquee gradient={false} speed={28} pauseOnHover>
          {[...logos, ...logos].map((l, i) => {
            const { Icon, label } = l;
            return (
              <div key={i} className="flex items-center gap-3 mx-12 text-bone/35 hover:text-white transition-colors duration-500 group">
                <Icon className="h-6 w-6 group-hover:text-green transition-colors" />
                <span className="font-display text-base tracking-tight">{label}</span>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
