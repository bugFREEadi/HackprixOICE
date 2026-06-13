import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, BookOpen } from 'lucide-react';
import { TID } from '@/constants/testIds';

const cols = [
  { title: 'Product', links: ['Innovations', 'Contributions', 'Escrow', 'Passport', 'Simulation'] },
  { title: 'Developers', links: ['Documentation', 'Smart Contracts', 'API Reference', 'Changelog'] },
  { title: 'Company', links: ['About', 'Blog', 'Hackathon', 'Brand'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies', 'License'] },
];

export default function Footer() {
  return (
    <footer data-testid={TID.footer} className="relative pt-20 pb-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 grid place-items-center">
                <span className="font-display font-black text-black text-[15px]">O</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">OICE</span>
            </div>
            <p className="mt-5 text-zinc-400 text-base leading-relaxed max-w-md">
              Where every contribution counts. Literally.
              Decentralized, AI-powered innovation coordination — from first spark to final reward.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {[
                { Icon: Github, label: 'GitHub' },
                { Icon: Twitter, label: 'X / Twitter' },
                { Icon: BookOpen, label: 'Docs' },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                   className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-semibold mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 select-none"
          aria-hidden
        >
          <div className="font-display font-bold tracking-[-0.05em] text-[28vw] sm:text-[24vw] lg:text-[18vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent">
            OICE
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-zinc-500">© 2025 OICE Labs. All rights reserved.</p>
          <p className="text-xs text-zinc-500 font-mono">
            Built on Base Sepolia · Powered by Gemini · v0.4.1
          </p>
        </div>
      </div>
    </footer>
  );
}
