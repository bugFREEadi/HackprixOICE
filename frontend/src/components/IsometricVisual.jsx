import React from 'react';
import { motion } from 'framer-motion';

/**
 * Isometric wireframe visuals — pure SVG, no raster.
 * Inspired by hand-drawn architectural / deep-tech illustrations:
 * stacked diamonds, projection lines, connected geometric structures.
 *
 * Variants:
 *   - "stack"     : single column of stacked diamonds with projection guides
 *   - "cluster"   : 4 panels (01..04) variations of diamonds
 *   - "converge"  : 3 connected diamond structures showing convergence
 *   - "exploded"  : single exploded-view diamond with concentric rings
 */

const STROKE = 'rgba(245,243,239,0.6)';
const STROKE_DIM = 'rgba(222,210,196,0.25)';
const ORANGE = '#ee692e';
const PINK = '#eb8299';
const GREEN = '#85be9d';

/* ---- single diamond shape helper ---- */
function Diamond({ cx = 0, cy = 0, s = 60, stroke = STROKE, dot = true, fillStroke = null, delay = 0, dotColor = '#ffffff' }) {
  // isometric diamond: top, right, bottom, left
  const top = [cx, cy - s];
  const right = [cx + s * 0.9, cy];
  const bottom = [cx, cy + s];
  const left = [cx - s * 0.9, cy];
  const mid = [cx, cy];

  return (
    <g>
      <motion.path
        d={`M${top[0]} ${top[1]} L${right[0]} ${right[1]} L${bottom[0]} ${bottom[1]} L${left[0]} ${left[1]} Z`}
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: 'easeOut' }}
      />
      {/* Inner cross — gives the cube-like depth */}
      <motion.path
        d={`M${top[0]} ${top[1]} L${mid[0]} ${mid[1]} L${bottom[0]} ${bottom[1]} M${left[0]} ${left[1]} L${mid[0]} ${mid[1]} L${right[0]} ${right[1]}`}
        stroke={fillStroke || stroke}
        strokeOpacity="0.45"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
      />
      {dot && (
        <motion.circle
          cx={cx}
          cy={cy}
          r="2.4"
          fill={dotColor}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 1, ease: 'easeOut' }}
        />
      )}
    </g>
  );
}

/* ---- projection (dashed) guide line ---- */
function GuideLine({ x1, y1, x2, y2, delay = 0 }) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={STROKE_DIM}
      strokeWidth="0.8"
      strokeDasharray="2 4"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}
    />
  );
}

/* ============ STACK : two stacked diamonds (Solution / Meet OICE hero visual) ============ */
export function IsoStack({ className = '' }) {
  return (
    <svg viewBox="0 0 280 520" className={className} aria-hidden>
      {/* projection vertical lines */}
      <GuideLine x1="140" y1="40"  x2="140" y2="500" delay={0.05} />
      <GuideLine x1="60"  y1="160" x2="60"  y2="380" delay={0.15} />
      <GuideLine x1="220" y1="160" x2="220" y2="380" delay={0.15} />

      {/* upper small diamond */}
      <Diamond cx={140} cy={160} s={56} delay={0.1} />
      {/* lower large diamond */}
      <Diamond cx={140} cy={380} s={96} delay={0.4} fillStroke={STROKE} />

      {/* small markers at extremes */}
      <motion.circle cx="140" cy="40"  r="2" fill="#fff"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 }} />
      <motion.circle cx="140" cy="500" r="2" fill="#fff"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} />
    </svg>
  );
}

/* ============ CLUSTER : 4-panel isometric grid for Why Now ============ */
export function IsoCluster({ className = '' }) {
  return (
    <svg viewBox="0 0 760 420" className={className} aria-hidden>
      {/* dividers (very faint) */}
      {[190, 380, 570].map((x, i) => (
        <motion.line key={i} x1={x} y1="20" x2={x} y2="400"
          stroke={STROKE_DIM} strokeWidth="0.6"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} />
      ))}

      {/* labels 01..04 */}
      {['01','02','03','04'].map((n, i) => (
        <motion.text key={n} x={20 + i * 190} y="40"
          fontFamily="Space Grotesk" fontSize="13" fill="rgba(245,243,239,0.45)" fontWeight="500"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }}>
          {n}
        </motion.text>
      ))}

      {/* Panel 01 — single diamond with projection */}
      <g transform="translate(95,0)">
        <GuideLine x1="0" y1="120" x2="0" y2="340" delay={0.2} />
        <Diamond cx={0} cy={210} s={50} delay={0.25} />
      </g>

      {/* Panel 02 — stacked diamonds with corner dots */}
      <g transform="translate(285,0)">
        <GuideLine x1="-46" y1="180" x2="-46" y2="280" delay={0.3} />
        <GuideLine x1="46" y1="180" x2="46" y2="280" delay={0.3} />
        <Diamond cx={0} cy={210} s={42} delay={0.4} />
        {/* tiny corner dots */}
        {[[-46,180],[46,180],[-46,280],[46,280]].map(([x,y],i) => (
          <motion.circle key={i} cx={x} cy={y} r="2" fill="#fff"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i*0.06 }} />
        ))}
      </g>

      {/* Panel 03 — diamond with concentric inner ring (exploded view) */}
      <g transform="translate(475,0)">
        <Diamond cx={0} cy={180} s={54} delay={0.5} />
        <motion.ellipse cx="0" cy="180" rx="22" ry="14" stroke={STROKE} strokeWidth="0.9" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} />
        {/* echo silhouettes below */}
        {[0,1,2].map((i) => (
          <motion.path key={i} d={`M0 ${230 + i*22} L46 ${254 + i*22} L0 ${278 + i*22} L-46 ${254 + i*22} Z`}
            stroke={STROKE} strokeOpacity={0.45 - i*0.12} strokeWidth="0.9" fill="none"
            initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1 + i*0.1 }} />
        ))}
      </g>

      {/* Panel 04 — two diamonds with orange orbit (echoes convergence) */}
      <g transform="translate(665,0)">
        <motion.path d="M-30 130 Q 0 60, 30 130"
          stroke={STROKE} strokeWidth="0.8" strokeDasharray="2 4" fill="none"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }} />
        <Diamond cx={-30} cy={210} s={44} delay={0.8} />
        <Diamond cx={30}  cy={210} s={44} delay={0.95} stroke={ORANGE} fillStroke={ORANGE} dotColor={ORANGE} />
        <motion.ellipse cx="30" cy="210" rx="56" ry="36" stroke={ORANGE} strokeOpacity="0.45" strokeWidth="0.8" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.3 }} />
      </g>
    </svg>
  );
}

/* ============ CONVERGE : 3 diamonds connecting to a center node (Meet OICE side visual) ============ */
export function IsoConverge({ className = '' }) {
  return (
    <svg viewBox="0 0 460 460" className={className} aria-hidden>
      {/* center node */}
      <Diamond cx={230} cy={230} s={68} delay={0.1} fillStroke={STROKE} />
      {/* orbital ring */}
      <motion.ellipse cx="230" cy="230" rx="160" ry="100" stroke={STROKE_DIM} strokeWidth="0.8" fill="none"
        initial={{ pathLength: 0, rotate: -8 }} whileInView={{ pathLength: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1.6, delay: 0.4 }}
        style={{ transformOrigin: '230px 230px' }} />

      {/* three satellite diamonds */}
      <Diamond cx={70}  cy={230} s={34} delay={0.7} stroke={ORANGE} fillStroke={ORANGE} dotColor={ORANGE} />
      <Diamond cx={390} cy={130} s={34} delay={0.85} stroke={GREEN}  fillStroke={GREEN}  dotColor={GREEN} />
      <Diamond cx={390} cy={330} s={34} delay={1.0} stroke={PINK}   fillStroke={PINK}   dotColor={PINK} />

      {/* connecting dashed lines */}
      <GuideLine x1="100" y1="230" x2="170" y2="230" delay={1.1} />
      <GuideLine x1="360" y1="135" x2="270" y2="190" delay={1.2} />
      <GuideLine x1="360" y1="325" x2="270" y2="270" delay={1.3} />

      {/* top/bottom projection */}
      <GuideLine x1="230" y1="20"  x2="230" y2="160" delay={0.2} />
      <GuideLine x1="230" y1="300" x2="230" y2="440" delay={0.3} />
      <motion.circle cx="230" cy="20"  r="2" fill="#fff" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
      <motion.circle cx="230" cy="440" r="2" fill="#fff" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
    </svg>
  );
}

/* ============ EXPLODED : single diamond with cascading echo silhouettes ============ */
export function IsoExploded({ className = '' }) {
  return (
    <svg viewBox="0 0 320 460" className={className} aria-hidden>
      {[0,1,2,3,4].map((i) => (
        <motion.path key={i}
          d={`M160 ${110 + i*40} L240 ${150 + i*40} L160 ${190 + i*40} L80 ${150 + i*40} Z`}
          stroke={STROKE}
          strokeOpacity={0.7 - i * 0.13}
          strokeWidth="1"
          fill="none"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
        />
      ))}
      {/* eye on the top diamond */}
      <motion.ellipse cx="160" cy="150" rx="20" ry="12" stroke={ORANGE} strokeWidth="1" fill="none"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} />
      <motion.circle cx="160" cy="150" r="3" fill={ORANGE}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
    </svg>
  );
}
