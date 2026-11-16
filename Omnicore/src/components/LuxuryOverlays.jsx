import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAPTERS } from '../data/capabilitiesData';
import { CrosshairIcon } from './CustomIcons';

export function LuxuryPreloader() {
  const [phase, setPhase] = useState('assembling'); // 'assembling' | 'opening' | 'done'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== 'assembling') return;

    const startTime = performance.now();
    const duration = 1650; // ~1.65s assembly + ~0.75s vault split = ~2.4s total
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        rafId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setPhase('opening');
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'opening') return;
    const timer = setTimeout(() => {
      setPhase('done');
    }, 820);
    return () => clearTimeout(timer);
  }, [phase]);

  const activeLayerText =
    progress < 34
      ? '01 // LOCKING PHYSICAL LAYER'
      : progress < 68
      ? '02 // SYNCHRONIZING INTELLIGENCE CORE'
      : progress < 95
      ? '03 // ENGAGING PROTECTION ARCHITECTURE'
      : 'DESIGNED AS ONE // SYSTEM READY';

  // 4 quadrant clip-paths to slice the hexagonal Q mark into 4 converging pieces
  const segments = [
    {
      id: 'top',
      clip: 'polygon(0% 0%, 100% 0%, 100% 44%, 0% 44%)',
      init: { x: -26, y: -38, opacity: 0 },
    },
    {
      id: 'left',
      clip: 'polygon(0% 43%, 48% 43%, 48% 100%, 0% 100%)',
      init: { x: -42, y: 20, opacity: 0 },
    },
    {
      id: 'right',
      clip: 'polygon(47% 43%, 100% 43%, 100% 76%, 47% 76%)',
      init: { x: 42, y: -16, opacity: 0 },
    },
    {
      id: 'bottom-q',
      clip: 'polygon(47% 75%, 100% 75%, 100% 100%, 47% 100%)',
      init: { x: 26, y: 38, opacity: 0 },
    },
  ];

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <div
          onClick={() => setPhase('done')}
          className="fixed inset-0 z-[100] pointer-events-auto select-none overflow-hidden cursor-pointer"
        >
          {/* TOP VAULT DOOR */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: phase === 'opening' ? '-100%' : '0%' }}
            transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#030303] border-b border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-45" />
          </motion.div>

          {/* BOTTOM VAULT DOOR */}
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: phase === 'opening' ? '100%' : '0%' }}
            transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#030303] border-t border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-dark opacity-45" />
          </motion.div>

          {/* CENTER HORIZONTAL LASER SEAM FLASH WHEN OPENING */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              phase === 'opening'
                ? { scaleX: 1, opacity: [0, 1, 0] }
                : { scaleX: progress / 100, opacity: 0.25 }
            }
            transition={{ duration: phase === 'opening' ? 0.55 : 0.1 }}
            className="absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 bg-white z-20 origin-center"
          />

          {/* FOREGROUND TELEMETRY HUD & 4-PART LOGO ASSEMBLY */}
          <motion.div
            animate={
              phase === 'opening'
                ? { scale: 1.14, opacity: 0, filter: 'blur(6px)' }
                : { scale: 1, opacity: 1, filter: 'blur(0px)' }
            }
            transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 w-full h-full flex flex-col justify-between p-6 md:p-12 text-white"
          >
            {/* Top Telemetry Header */}
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2.5">
                <CrosshairIcon className="w-3.5 h-3.5 text-white/70" />
                <span className="font-mono-tech text-[10px] sm:text-xs text-white/70 uppercase">
                  OMNIQOR // CAPABILITIES 2026
                </span>
              </div>
              <span className="font-mono-tech text-[10px] sm:text-xs text-white/55 uppercase">
                MONOCHROME EDITION
              </span>
            </div>

            {/* Center Stage: 4-Segment Interlocking Hexagonal 'Q' Assembly + Wordmark Reveal */}
            <div className="my-auto flex flex-col items-center justify-center relative">
              {/* Expanding Concentric Precision Rings */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                {/* Outer rotating architectural CAD ring */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    stroke="white"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeWidth="1.4"
                    strokeDasharray="578"
                    strokeDashoffset={578 - (578 * progress) / 100}
                    transform="rotate(-90 100 100)"
                    className="transition-all duration-75"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="74"
                    stroke="white"
                    strokeOpacity="0.18"
                    strokeWidth="0.9"
                    strokeDasharray="3 6"
                  />
                  {/* 4 Corner Axis Ticks */}
                  <path
                    d="M100 2V12M100 188V198M2 100H12M188 100H198"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                  />
                </svg>

                {/* Shockwave pulse when 4 segments lock */}
                {progress > 42 && (
                  <motion.div
                    initial={{ scale: 0.65, opacity: 0.75 }}
                    animate={{ scale: 1.45, opacity: 0 }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="absolute w-28 h-28 rounded-full border border-white/60 pointer-events-none"
                  />
                )}

                {/* 4 Converging Segments of the Hexagonal 'Q' Mark */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  {segments.map((seg, idx) => (
                    <motion.img
                      key={seg.id}
                      src="/assets/logo-mark-light.png"
                      alt=""
                      initial={seg.init}
                      animate={{ x: 0, y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.55,
                        delay: idx * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ clipPath: seg.clip }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  ))}

                  {/* Crisp Metallic Shimmer Sweep across locked logo */}
                  <motion.div
                    initial={{ x: '-140%' }}
                    animate={{ x: '160%' }}
                    transition={{ duration: 0.85, delay: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none mix-blend-overlay"
                  />
                </div>
              </div>

              {/* Horizontal Clip-Mask Reveal for 'omniqor' Wordmark */}
              <div className="overflow-hidden mt-6">
                <motion.img
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  src="/assets/logo-wordmark-light.png"
                  alt="omniqor"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
              </div>

              {/* 3 Pillar Indicators Lighting Up in Sequence */}
              <div className="mt-6 flex items-center gap-3 sm:gap-5 font-mono-tech text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">
                <span
                  className={`transition-colors duration-300 ${
                    progress >= 20 ? 'text-white' : 'text-white/25'
                  }`}
                >
                  01 HARDWARE
                </span>
                <span className="text-white/25">/</span>
                <span
                  className={`transition-colors duration-300 ${
                    progress >= 55 ? 'text-white' : 'text-white/25'
                  }`}
                >
                  02 INTELLIGENCE
                </span>
                <span className="text-white/25">/</span>
                <span
                  className={`transition-colors duration-300 ${
                    progress >= 85 ? 'text-white' : 'text-white/25'
                  }`}
                >
                  03 SECURITY
                </span>
              </div>

              <div className="mt-3 font-mono-tech text-[10px] text-white/50 uppercase tracking-[0.18em]">
                {activeLayerText}
              </div>
            </div>

            {/* Bottom Telemetry Footer */}
            <div className="max-w-[1440px] w-full mx-auto flex items-end justify-between border-t border-white/15 pt-4">
              <div className="space-y-1">
                <div className="font-mono-tech text-[10px] text-white/45 uppercase">
                  DEHRADUN // INDIA
                </div>
                <div className="font-mono-tech text-[10px] text-white/75 uppercase">
                  HARDWARE. INTELLIGENCE. SECURITY. DESIGNED AS ONE.
                </div>
              </div>

              <div className="font-display text-2xl sm:text-4xl text-white tabular-nums">
                {String(progress).padStart(3, '0')}%
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function CustomReticleCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true);
    } else {
      return;
    }

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const isInteractive =
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('[data-interactive="true"]'));
      setHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden hidden lg:block mix-blend-difference"
      aria-hidden="true"
    >
      <div
        className="fixed top-0 left-0 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 border border-white transition-all duration-300 flex items-center justify-center ${
            hovered ? 'w-11 h-11 bg-white/10 rotate-45' : 'w-6 h-6 opacity-65'
          }`}
        >
          <span className="w-1 h-1 bg-white block" />
        </div>
      </div>
    </div>
  );
}

export function FloatingChapterHUD({ activeChapter, onNavigate }) {
  const currentIdx = CHAPTERS.findIndex((c) => c.id === activeChapter?.id);
  const prevChap = currentIdx > 0 ? CHAPTERS[currentIdx - 1] : null;
  const nextChap = currentIdx < CHAPTERS.length - 1 ? CHAPTERS[currentIdx + 1] : null;

  return (
    <div className="fixed bottom-5 right-6 z-40 hidden md:flex items-center bg-[#080808]/90 backdrop-blur-md border border-white/20 text-white shadow-2xl">
      <button
        disabled={!prevChap}
        onClick={() => prevChap && onNavigate(prevChap.id)}
        title="Previous Slide"
        className="px-3 py-2.5 border-r border-white/15 font-mono-tech text-xs hover:bg-white hover:text-black disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-white transition-colors cursor-pointer"
      >
        ↑
      </button>

      <div className="px-4 py-2 flex items-center gap-2.5 font-mono-tech text-[10px] uppercase">
        <CrosshairIcon className="w-3 h-3 text-white/60" />
        <span className="text-white/55">CHAPTER</span>
        <span className="text-white font-semibold">
          {activeChapter?.number || '01'} / {CHAPTERS.length}
        </span>
      </div>

      <button
        disabled={!nextChap}
        onClick={() => nextChap && onNavigate(nextChap.id)}
        title="Next Slide"
        className="px-3 py-2.5 border-l border-white/15 font-mono-tech text-xs hover:bg-white hover:text-black disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-white transition-colors cursor-pointer"
      >
        ↓
      </button>
    </div>
  );
}
