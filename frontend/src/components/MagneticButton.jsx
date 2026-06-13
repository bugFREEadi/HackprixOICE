import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * MagneticButton — premium magnetic hover effect.
 * Tracks cursor distance and translates the inner content toward it.
 */
export default function MagneticButton({
  as: Tag = 'button',
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  to,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });
  const innerX = useTransform(sx, (v) => v * 0.5);
  const innerY = useTransform(sy, (v) => v * 0.5);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.span
      ref={ref}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex"
    >
      <Tag
        href={href}
        to={to}
        onClick={onClick}
        className={className}
        {...rest}
      >
        <motion.span style={{ x: innerX, y: innerY, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          {children}
        </motion.span>
      </Tag>
    </motion.span>
  );
}
