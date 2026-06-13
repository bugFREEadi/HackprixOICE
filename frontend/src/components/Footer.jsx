import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, BookOpen } from 'lucide-react';
import { TID } from '@/constants/testIds';

const cols = [
  { title: 'Product',    links: ['Innovations', 'Contributions', 'Escrow', 'Passport', 'Simulation'] },
  { title: 'Developers', links: ['Documentation', 'Smart Contracts', 'API Reference', 'Changelog'] },
  { title: 'Company',    links: ['About', 'Blog', 'Hackathon', 'Brand'] },
  { title: 'Legal',      links: ['Privacy', 'Terms', 'Cookies', 'License'] },
];

export default function Footer() {
  return (
    <footer data-testid={TID.footer} className="relative pt-20 pb-10 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-md bg-orange grid place-items-center">
                <span className="font-display font-bold text-ink text-[15px]">O</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-white">OICE</span>
            </div>
            <p className="mt-6 text-bone/55 text-base leading-relaxed max-w-md">
              Where every contribution counts. Literally.
              <br />
              Decentralized, AI-powered innovation coordination — from first spark to final reward.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {[
                { Icon: Github,  label: 'GitHub', hoverColor: 'hover:text-green' },
                { Icon: Twitter, label: 'X / Twitter', hoverColor: 'hover:text-pink' },
                { Icon: BookOpen, label: 'Docs', hoverColor: 'hover:text-orange' },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                   className={`h-9 w-9 grid place-items-center rounded-lg border border-white/[0.08] text-bone/55 ${s.hoverColor} hover:bg-white/[0.04] transition-colors`}>
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-[10px] uppercase tracking-[0.22em] text-bone/45 font-semibold mb-4">{c.title}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-bone/55 hover:text-white transition-colors link-underline">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 select-none flex justify-center"
          aria-hidden
        >
          <div
            className="font-display font-medium tracking-[-0.05em] text-[28vw] sm:text-[24vw] lg:text-[18vw] leading-none text-transparent bg-clip-text text-center"
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(133,190,157,0.18), rgba(222,210,196,0.08) 35%, rgba(238,105,46,0.05) 70%, transparent)' }}
          >
            OICE
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-bone/40">© 2025 OICE Labs. All rights reserved.</p>
          <p className="text-xs text-bone/40 font-mono">
            Built on Base Sepolia · Powered by Gemini · v0.4.1
          </p>
        </div>
      </div>
    </footer>
  );
}
