import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * UPGRADE 2A: Architectural Clip-Mask Headline Reveal
 * Each line of a headline rises smoothly from an invisible floor mask with subtle 3D tilt.
 */
export function MaskedHeadline({ lines = [], className = '', delay = 0 }) {
  return (
    <h2 className={className} style={{ perspective: '900px' }}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1 -mb-1">
          <motion.span
            initial={{ y: '108%', rotateX: -20, opacity: 0 }}
            whileInView={{ y: '0%', rotateX: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.82,
              delay: delay + idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block origin-bottom-left will-change-transform"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

/**
 * UPGRADE 2B: Left-to-Right Laser Hairline Divider
 * Draws a 1px architectural line across the screen when scrolled into view.
 */
export function LaserDivider({ isLight = false, className = '' }) {
  return (
    <div className={`relative w-full h-[1px] overflow-hidden ${className}`}>
      <div
        className={`w-full h-full ${
          isLight ? 'bg-black/10' : 'bg-white/10'
        }`}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className={`absolute inset-0 origin-left ${
          isLight ? 'bg-black/35' : 'bg-white/40'
        }`}
      />
    </div>
  );
}

/**
 * UPGRADE 3: Layered 3D Card Stack / Curtain Unfold Wrapper
 * Gives each chapter a subtle 3D scale & depth unfold as you scroll through the deck.
 */
export function ScrollChapterWrapper({ children, theme = 'dark' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.16, 0.84, 1],
    [0.968, 1, 1, 0.982]
  );
  const scale = useSpring(rawScale, { stiffness: 120, damping: 24 });

  return (
    <div
      ref={ref}
      className={theme === 'light' ? 'bg-[#080808]' : 'bg-[#000000]'}
    >
      <motion.div style={{ scale }} className="will-change-transform origin-top">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * UPGRADE 4: Left-Edge Architectural Blueprint Ruler (Live Scroll Telemetry Track)
 */
export function BlueprintScrollRuler({ scrollProgress = 0, activeChapter }) {
  const isLight = activeChapter?.theme === 'light';
  const depthMm = Math.round(scrollProgress * 1200);
  const ticks = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-2.5 top-28 bottom-20 z-40 hidden xl:flex flex-col justify-between items-start select-none transition-colors duration-500 ${
        isLight ? 'text-black/45' : 'text-white/45'
      }`}
    >
      {/* Top Origin Marker */}
      <div className="font-mono-tech text-[8px] tracking-[0.18em] uppercase -rotate-90 origin-bottom-left translate-x-2.5 mb-4">
        0000 MM
      </div>

      {/* Vertical Ruler Track */}
      <div className="relative flex-1 w-5 flex flex-col justify-between py-2">
        {/* Continuous vertical hairline */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-[1px] ${
            isLight ? 'bg-black/15' : 'bg-white/15'
          }`}
        />

        {/* Tick marks */}
        {ticks.map((t) => {
          const isMajor = t % 4 === 0;
          return (
            <div
              key={t}
              className={`h-[1px] transition-all duration-300 ${
                isMajor ? 'w-3' : 'w-1.5'
              } ${isLight ? 'bg-black/30' : 'bg-white/30'}`}
            />
          );
        })}

        {/* Live Moving Laser Needle Indicator */}
        <div
          className="absolute left-0 flex items-center gap-1.5 transition-all duration-75"
          style={{ top: `${Math.min(98, Math.max(2, scrollProgress * 100))}%` }}
        >
          <span
            className={`w-4 h-[1.5px] block ${
              isLight ? 'bg-black' : 'bg-white'
            }`}
          />
          <span
            className={`px-1.5 py-0.5 font-mono-tech text-[8px] font-semibold tracking-wider whitespace-nowrap ${
              isLight
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            {String(depthMm).padStart(4, '0')} MM · {activeChapter?.number || '01'}
          </span>
        </div>
      </div>

      {/* Bottom End Marker */}
      <div className="font-mono-tech text-[8px] tracking-[0.18em] uppercase -rotate-90 origin-top-left translate-x-2.5 mt-6">
        1200 MM
      </div>
    </div>
  );
}

/**
 * UPGRADE 5: Linear-Style Mouse-Tracking Radial Spotlight Wrapper for Grids
 */
export function SpotlightGrid({ children, isLight = false, className = '' }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: -500, y: -500, active: false });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords((c) => ({ ...c, active: false }))}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic Radial Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500"
        style={{
          opacity: coords.active ? 1 : 0,
          background: isLight
            ? `radial-gradient(520px circle at ${coords.x}px ${coords.y}px, rgba(0,0,0,0.06), transparent 65%)`
            : `radial-gradient(520px circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.09), transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
