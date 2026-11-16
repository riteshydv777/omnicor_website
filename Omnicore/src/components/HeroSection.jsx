import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CrosshairIcon } from './CustomIcons';

export default function HeroSection({ onNavigate }) {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMousePos({ x, y });
  };

  const pillars = [
    { id: '01', label: '01 HARDWARE', target: 'hardware-hero', desc: 'THE PHYSICAL LAYER' },
    { id: '02', label: '02 SOFTWARE + UI/UX', target: 'software-hero', desc: 'THE INTELLIGENCE LAYER' },
    { id: '03', label: '03 SECURITY', target: 'security-hero', desc: 'THE PROTECTION LAYER' },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative min-h-screen w-full bg-[#000000] text-white pt-24 pb-10 flex flex-col justify-between overflow-hidden select-none border-b border-white/10"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />

      {/* Top PDF Slide Header Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between pb-5 border-b border-white/20">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-mark-light.png"
              alt="Omniqor Mark"
              className="w-5 h-5 object-contain"
            />
            <span className="font-display text-sm md:text-base tracking-[0.18em] uppercase text-white">
              OMNIQOR
            </span>
          </div>
          <span className="font-mono-tech text-[10px] md:text-xs text-white/75 uppercase">
            TECHNOLOGY COMPANY / CAPABILITIES 2026
          </span>
        </div>
      </div>

      {/* Main Content Area: Left Typography + Right Robotic Hand & Chrome Sphere */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[38px] sm:text-[56px] md:text-[72px] xl:text-[84px] leading-[1.06] tracking-[0.02em] uppercase text-white font-normal">
              <span className="block hover:translate-x-2 transition-transform duration-500">
                ENGINEER
              </span>
              <span className="block hover:translate-x-2 transition-transform duration-500">
                WHAT’S
              </span>
              <span className="block hover:translate-x-2 transition-transform duration-500">
                NEXT.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10"
          >
            <p className="text-xl sm:text-2xl md:text-[28px] font-light leading-[1.35] text-white/95 tracking-[-0.01em]">
              Hardware. Intelligence. Security.
              <br />
              <span className="text-white">Designed as one.</span>
            </p>

            {/* Exact PDF Hairline Divider */}
            <div className="w-full max-w-[440px] h-[1px] bg-white/20 my-7" />

            <p className="text-base sm:text-lg md:text-[20px] font-light leading-[1.55] text-white/65 max-w-[460px]">
              Complete technology solutions, from the first circuit to the final experience.
            </p>
          </motion.div>

          {/* Bottom-left Discipline Index (Exact PDF Layout + Interactive Hover) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 md:mt-20 space-y-3.5"
          >
            <div className="flex flex-wrap items-center gap-y-2 text-[11px] sm:text-xs font-mono-tech uppercase">
              {pillars.map((p, idx) => (
                <React.Fragment key={p.id}>
                  <button
                    onMouseEnter={() => setHoveredPillar(p.id)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    onClick={() => onNavigate(p.target)}
                    className="group relative py-1.5 px-2 -mx-2 flex items-center gap-1.5 text-white/85 hover:text-black hover:bg-white transition-all duration-300 cursor-pointer"
                  >
                    <span>{p.label}</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  {idx < pillars.length - 1 && (
                    <span className="mx-3 text-white/35">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-[11px] sm:text-xs text-white/60 uppercase tracking-[0.16em]">
                A CONNECTED VISION FOR WHAT COMES NEXT.
              </span>
              {hoveredPillar && (
                <span className="font-mono-tech text-[10px] px-2 py-0.5 border border-white/30 text-white uppercase animate-pulse">
                  ACTIVE: {pillars.find((p) => p.id === hoveredPillar)?.desc}
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Cols 8-12): High-Res Robotic Hand & Chrome Sphere with Interactive Telemetry */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[420px] sm:min-h-[540px]">
          <motion.div
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            className="relative w-full max-w-[680px] lg:w-[130%] lg:-mr-16 pointer-events-auto group"
          >
            {/* Interactive SVG Orbital Reticle around Chrome Sphere */}
            <svg
              viewBox="0 0 600 500"
              fill="none"
              className="pointer-events-none absolute inset-0 w-full h-full z-20"
            >
              {/* Sphere target rings */}
              <circle
                cx="305"
                cy="155"
                r={hoveredPillar ? '118' : '108'}
                stroke="white"
                strokeOpacity={hoveredPillar ? '0.45' : '0.16'}
                strokeWidth="1"
                strokeDasharray="4 6"
                className="transition-all duration-700"
              />
              <circle
                cx="305"
                cy="155"
                r="134"
                stroke="white"
                strokeOpacity={hoveredPillar ? '0.25' : '0.08'}
                strokeWidth="0.75"
                className="transition-all duration-700"
              />
              {/* Precision Crosshairs */}
              <path
                d="M555 415V431M547 423H563"
                stroke="white"
                strokeOpacity="0.45"
                strokeWidth="1.2"
              />
              <path
                d="M170 95V107M164 101H176"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
            </svg>

            {/* Extracted High-Res Robotic Hand Image */}
            <img
              src="/assets/hero-hand.png"
              alt="Omniqor Robotic Hand Holding Chrome Sphere"
              className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
              draggable={false}
            />

            {/* Subtle bottom-right crosshair indicator */}
            <div className="hidden sm:flex items-center gap-2 absolute top-6 right-6 px-3 py-1.5 bg-black/70 backdrop-blur-md border border-white/15 font-mono-tech text-[10px] text-white/70 uppercase">
              <CrosshairIcon className="w-3 h-3 text-white" />
              <span>MONOCHROME SYSTEM // v2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-white/70 uppercase">
          <span>COMPANY CAPABILITIES / MONOCHROME EDITION</span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('vision')}
              className="group hidden sm:flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <span>SCROLL TO EXPLORE</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
            <span className="text-white font-medium">01 / 12</span>
          </div>
        </div>
      </div>
    </section>
  );
}
