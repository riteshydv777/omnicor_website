import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CrosshairIcon } from './CustomIcons';
import { MaskedHeadline } from './ScrollChoreography';

const DEFENSE_LAYERS = [
  { id: 'perimeter', code: 'SEC // 01', label: 'PERIMETER & NETWORK DEFENSE' },
  { id: 'data', code: 'SEC // 02', label: 'CRYPTOGRAPHIC DATA PROTECTION' },
  { id: 'hardware', code: 'SEC // 03', label: 'INTEGRATED HARDWARE INFRASTRUCTURE' },
];

export default function SecurityHeroSection() {
  const [activeLayer, setActiveLayer] = useState('perimeter');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMousePos({ x, y });
  };

  return (
    <section
      id="security-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative min-h-screen w-full bg-[#000000] text-white pt-20 md:pt-24 pb-10 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-45" />

      {/* Top PDF Slide Header Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 hidden md:block">
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
            03 / CYBERSECURITY &amp; INTEGRATED SYSTEMS
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (Cols 1-6): Exact PDF Copy */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono-tech text-xs text-white/70 uppercase tracking-[0.16em] mb-8">
              PART 03 / THE PROTECTION LAYER
            </div>

            <MaskedHeadline
              lines={['BUILT TO', 'PROTECT.']}
              className="font-display text-[38px] sm:text-[54px] md:text-[68px] xl:text-[76px] leading-[1.06] tracking-[0.02em] uppercase text-white font-normal"
            />

            <p className="mt-7 text-xl sm:text-2xl md:text-[26px] font-light leading-[1.35] text-white/95">
              Security across the connected world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 lg:pt-14"
          >
            <p className="text-base sm:text-lg md:text-[20px] font-light leading-[1.6] text-white/70 max-w-[490px]">
              Cybersecurity frameworks and integrated hardware-software infrastructure, designed
              around your systems and environment.
            </p>

            {/* Interactive Protection Layer Toggles */}
            <div className="mt-10 flex flex-wrap items-center gap-2.5">
              {DEFENSE_LAYERS.map((d) => {
                const isSelected = activeLayer === d.id;
                return (
                  <button
                    key={d.id}
                    onMouseEnter={() => setActiveLayer(d.id)}
                    onClick={() => setActiveLayer(d.id)}
                    className={`px-3.5 py-2 border font-mono-tech text-[10px] uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-white text-black border-white'
                        : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    <span className="opacity-60">{d.code}</span>
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Cols 7-12): High-Res Concentric Wireframe Security Shield */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <motion.div
            style={{
              transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 18 }}
            className="relative w-full max-w-[660px] group"
          >
            {/* Interactive SVG Telemetry Callout Overlay */}
            <svg
              viewBox="0 0 660 570"
              fill="none"
              className="pointer-events-none absolute inset-0 w-full h-full z-20"
            >
              {/* Subtle pulsing perimeter ring */}
              <circle
                cx="360"
                cy="275"
                r={activeLayer === 'perimeter' ? '235' : activeLayer === 'data' ? '160' : '95'}
                stroke="white"
                strokeOpacity="0.22"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="transition-all duration-700"
              />
            </svg>

            <img
              src="/assets/dark_security-shield.png"
              alt="Omniqor Concentric Wireframe Security Shield"
              className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
              draggable={false}
            />

            {/* Status badge */}
            <div className="hidden sm:flex items-center gap-2 absolute bottom-4 right-4 px-3 py-1.5 bg-black/80 border border-white/15 font-mono-tech text-[10px] text-white/70 uppercase">
              <CrosshairIcon className="w-3 h-3 text-white" />
              <span>ACTIVE RING: {DEFENSE_LAYERS.find((d) => d.id === activeLayer)?.label}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 hidden md:block">
        <div className="pt-5 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-white/70 uppercase">
          <span>PROTECTION, CONSIDERED AT EVERY LAYER</span>
          <span className="text-white font-medium">09 / 12</span>
        </div>
      </div>
    </section>
  );
}
