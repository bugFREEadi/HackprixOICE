import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';

/**
 * Footer CTA — full-bleed warm orange block.
 * Inspired by editorial / Groq-style end-of-page hero blocks.
 */
export default function FinalCTA() {
  return (
    <section id="docs" data-testid={TID.finalCta} className="relative py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] lg:rounded-[40px] overflow-hidden"
          style={{ background: '#ee692e' }}
        >
          {/* Decorative concentric rings (very subtle) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute -top-32 -right-32 opacity-[0.18]" width="500" height="500" viewBox="0 0 500 500" aria-hidden>
              {[100, 160, 220, 280, 340].map((r, i) => (
                <circle key={i} cx="250" cy="250" r={r} stroke="#ffffff" strokeWidth="1" fill="none" />
              ))}
            </svg>
            <svg className="absolute -bottom-40 -left-40 opacity-[0.12]" width="600" height="600" viewBox="0 0 600 600" aria-hidden>
              {[120, 200, 280, 360, 440].map((r, i) => (
                <circle key={i} cx="300" cy="300" r={r} stroke="#ffffff" strokeWidth="1" fill="none" strokeDasharray="3 6" />
              ))}
            </svg>
          </div>

          <div className="relative px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-36 text-center">
            {/* lightning ornament */}
            <motion.div
              initial={{ opacity: 0, y: -10, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'backOut' }}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink/15 backdrop-blur mb-9"
            >
              <Zap size={20} className="text-bone" strokeWidth={2.2} fill="currentColor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[11px] uppercase tracking-[0.36em] text-ink/65 font-medium mb-9"
            >
              The Coordination Layer · Innovation Has Been Waiting For
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-[110px] xl:text-[136px] font-medium tracking-[-0.04em] leading-[0.94] text-bone"
            >
              Innovation deserves
              <br />
              <span className="text-ink font-semibold">better infrastructure.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              className="mt-10 text-ink/80 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Stop losing contributors to obscurity.
              <br className="hidden sm:block" />
              Stop funding without accountability.
              <span className="text-ink font-medium"> Start building with a record.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <MagneticButton
                as={Link}
                to="/app"
                data-testid={TID.finalLaunchBtn}
                className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink text-[15px] font-semibold px-8 py-4 hover:bg-white transition-colors"
              >
                Launch OICE
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/simulation"
                data-testid={TID.finalSimBtn}
                className="inline-flex items-center gap-2 rounded-full bg-ink/10 border border-ink/30 text-ink text-[15px] font-medium px-8 py-4 backdrop-blur hover:bg-ink/20 transition-colors"
              >
                <Play size={13} fill="currentColor" />
                Run the Simulation
              </MagneticButton>
              <a
                href="#docs"
                data-testid={TID.finalDocsBtn}
                className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink text-sm font-medium link-underline"
              >
                Read the Docs →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
