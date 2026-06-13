import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { TID } from '@/constants/testIds';
import MagneticButton from '@/components/MagneticButton';

/**
 * Footer CTA — full-bleed warm orange block.
 * Compact, premium-SaaS height (not banner-tall).
 */
export default function FinalCTA() {
  return (
    <section id="docs" data-testid={TID.finalCta} className="relative py-8 lg:py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] lg:rounded-[32px] overflow-hidden"
          style={{ background: '#ee692e' }}
        >
          {/* Decorative concentric rings */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute -top-24 -right-24 opacity-[0.16]" width="380" height="380" viewBox="0 0 380 380" aria-hidden>
              {[80, 130, 180, 230].map((r, i) => (
                <circle key={i} cx="190" cy="190" r={r} stroke="#ffffff" strokeWidth="1" fill="none" />
              ))}
            </svg>
            <svg className="absolute -bottom-28 -left-28 opacity-[0.12]" width="440" height="440" viewBox="0 0 440 440" aria-hidden>
              {[90, 150, 210, 270, 330].map((r, i) => (
                <circle key={i} cx="220" cy="220" r={r} stroke="#ffffff" strokeWidth="1" fill="none" strokeDasharray="3 6" />
              ))}
            </svg>
          </div>

          <div className="relative px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -8, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'backOut' }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/15 backdrop-blur mb-6"
            >
              <Zap size={16} className="text-bone" strokeWidth={2.2} fill="currentColor" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.36em] text-ink/65 font-medium mb-6"
            >
              The Coordination Layer · Innovation Has Been Waiting For
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-[88px] font-medium tracking-[-0.035em] leading-[0.96] text-bone"
            >
              Innovation deserves
              <br />
              <span className="text-ink font-semibold">better infrastructure.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              className="mt-7 text-ink/80 text-base lg:text-lg max-w-xl mx-auto leading-relaxed"
            >
              Stop losing contributors to obscurity. Stop funding without accountability.
              <span className="text-ink font-medium"> Start building with a record.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <MagneticButton
                as={Link} to="/app" data-testid={TID.finalLaunchBtn}
                className="group inline-flex items-center gap-2 rounded-full bg-bone text-ink text-[14px] font-semibold px-6 py-3.5 hover:bg-white transition-colors"
              >
                Launch OICE
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton
                as={Link} to="/simulation" data-testid={TID.finalSimBtn}
                className="inline-flex items-center gap-2 rounded-full bg-ink/10 border border-ink/30 text-ink text-[14px] font-medium px-6 py-3.5 backdrop-blur hover:bg-ink/20 transition-colors"
              >
                <Play size={13} fill="currentColor" />
                Run the Simulation
              </MagneticButton>
              <a href="#docs" data-testid={TID.finalDocsBtn}
                 className="inline-flex items-center gap-1.5 text-ink/70 hover:text-ink text-sm font-medium link-underline ml-1">
                Read the Docs →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
