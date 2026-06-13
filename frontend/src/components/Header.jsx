import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';

const links = [
  { id: TID.navAbout, label: 'About', href: '#problem' },
  { id: TID.navHow, label: 'How it works', href: '#how' },
  { id: TID.navFeatures, label: 'Features', href: '#features' },
  { id: TID.navTech, label: 'Tech', href: '#tech' },
  { id: TID.navDocs, label: 'Docs', href: '#docs' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      data-testid={TID.headerNav}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/75 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" data-testid={TID.logoLink} className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-md bg-orange blur-md opacity-50 group-hover:opacity-80 transition" />
              <div className="relative h-full w-full rounded-md bg-orange grid place-items-center">
                <span className="font-display font-bold text-ink text-[14px]">O</span>
              </div>
            </div>
            <span className="font-display text-[17px] font-semibold tracking-tight">OICE</span>
            <span className="hidden sm:inline-block ml-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium border border-white/10 rounded-full px-2 py-0.5">beta</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a key={l.id} href={l.href} data-testid={l.id}
                 className="relative px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors group">
                {l.label}
                <span className="absolute inset-x-3 -bottom-px h-px bg-orange/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton as={Link} to="/app" data-testid={TID.launchAppBtnHeader}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-bone text-ink text-sm font-medium px-4 py-2 hover:bg-white transition-colors">
              Launch App <ArrowUpRight size={14} strokeWidth={2.5} />
            </MagneticButton>
            <button onClick={() => setOpen((s) => !s)} data-testid={TID.mobileMenuToggle} aria-label="Toggle menu"
              className="lg:hidden h-9 w-9 grid place-items-center rounded-md border border-white/10 text-white hover:bg-white/5">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/[0.06] bg-ink/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.id} href={l.href} onClick={() => setOpen(false)}
                 className="py-3 text-[15px] text-zinc-300 hover:text-white border-b border-white/5">
                {l.label}
              </a>
            ))}
            <Link to="/app" onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-bone text-ink text-sm font-medium px-4 py-2.5">
              Launch App <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
