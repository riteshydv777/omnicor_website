import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CrosshairIcon, ArrowRightIcon } from './CustomIcons';
import { MaskedHeadline } from './ScrollChoreography';

const PIPELINE_STAGES = [
  {
    id: 'research',
    label: 'RESEARCH',
    layerTitle: 'SYSTEM ARCHITECTURE & THERMAL ENVELOPE',
    coords: { x: 480, y: 120 },
  },
  {
    id: 'design',
    label: 'DESIGN',
    layerTitle: 'CNC MILLED TOP SHELL & VENTILATION GEOMETRY',
    coords: { x: 390, y: 155 },
  },
  {
    id: 'manufacture',
    label: 'MANUFACTURE',
    layerTitle: 'MULTI-LAYER BLACK PCB & SILICON PROCESSOR CORE',
    coords: { x: 430, y: 270 },
  },
  {
    id: 'integrate',
    label: 'INTEGRATE',
    layerTitle: 'PRECISION UNIBODY CHASSIS & I/O INTERCONNECTS',
    coords: { x: 420, y: 395 },
  },
];

export default function HardwareHeroSection({ onNavigate }) {
  const [activeStage, setActiveStage] = useState('manufacture');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMouseOffset({ x, y });
  };

  const activeStageObj = PIPELINE_STAGES.find((s) => s.id === activeStage);

  return (
    <section
      id="hardware-hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouseOffset({ x: 0, y: 0 })}
      className="relative min-h-screen w-full bg-[#000000] text-white pt-24 pb-10 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-45" />

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
            01 / HARDWARE ENGINEERING &amp; MANUFACTURING
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (Cols 1-5): Exact PDF Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-10 z-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono-tech text-xs text-white/70 uppercase tracking-[0.16em] mb-8">
              PART 01 / THE PHYSICAL LAYER
            </div>

            <MaskedHeadline
              lines={['MAKE', 'IT REAL.']}
              className="font-display text-[40px] sm:text-[56px] md:text-[68px] xl:text-[78px] leading-[1.06] tracking-[0.02em] uppercase text-white font-normal"
            />

            <p className="mt-7 text-xl sm:text-2xl md:text-[26px] font-light leading-[1.35] text-white/95">
              From a bare board to a complete product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4 lg:pt-12"
          >
            <p className="text-base sm:text-lg md:text-[20px] font-light leading-[1.6] text-white/70 max-w-[440px]">
              Research, design and manufacturing that connect electronics, mechanical bodies and
              systems into functional technology.
            </p>

            {/* Exact PDF Crosshair on bottom-left + Interactive Layer Status */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-7 h-7 flex items-center justify-center border border-white/20 text-white/70">
                <CrosshairIcon className="w-4 h-4" />
              </div>
              <div className="font-mono-tech text-[10px] text-white/55 uppercase">
                LAYER TELEMETRY: <span className="text-white">{activeStageObj?.layerTitle}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Cols 6-12): High-Res Exploded CNC Aluminum + PCB Render with Interactive Hotspots */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <motion.div
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
            transition={{ type: 'spring', stiffness: 75, damping: 18 }}
            className="relative w-full max-w-[820px] group"
          >
            {/* Interactive SVG Callout Reticles Over Exploded Hardware */}
            <svg
              viewBox="0 0 800 533"
              fill="none"
              className="pointer-events-none absolute inset-0 w-full h-full z-20"
            >
              {/* Vertical alignment axis line */}
              <line
                x1="430"
                y1="50"
                x2="430"
                y2="480"
                stroke="white"
                strokeOpacity="0.16"
                strokeDasharray="3 5"
              />

              {PIPELINE_STAGES.map((stage) => {
                const isSelected = activeStage === stage.id;
                return (
                  <g key={stage.id} className="transition-all duration-500">
                    <circle
                      cx={stage.coords.x}
                      cy={stage.coords.y}
                      r={isSelected ? '14' : '6'}
                      stroke="white"
                      strokeOpacity={isSelected ? '0.85' : '0.3'}
                      strokeWidth="1.2"
                    />
                    <circle
                      cx={stage.coords.x}
                      cy={stage.coords.y}
                      r="2.5"
                      fill="white"
                      fillOpacity={isSelected ? '1' : '0.5'}
                    />
                    {isSelected && (
                      <path
                        d={`M${stage.coords.x + 16} ${stage.coords.y} H${stage.coords.x + 75}`}
                        stroke="white"
                        strokeOpacity="0.7"
                        strokeWidth="1"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Interactive Layer Selector Buttons Overlaid on Right Edge */}
            <div className="hidden sm:flex flex-col gap-2 absolute right-2 top-1/2 -translate-y-1/2 z-30">
              {[
                { id: 'design', code: 'L01', name: 'TOP CNC ENCLOSURE' },
                { id: 'manufacture', code: 'L02', name: 'POPULATED PCB CORE' },
                { id: 'integrate', code: 'L03', name: 'MILLED BASE CHASSIS' },
              ].map((layer) => {
                const active = activeStage === layer.id;
                return (
                  <button
                    key={layer.id}
                    onMouseEnter={() => setActiveStage(layer.id)}
                    onClick={() => setActiveStage(layer.id)}
                    className={`px-3 py-2 border text-left font-mono-tech text-[10px] uppercase backdrop-blur-md transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-white text-black border-white'
                        : 'bg-black/65 text-white/65 border-white/15 hover:border-white/50 hover:text-white'
                    }`}
                  >
                    <div className="opacity-60">{layer.code}</div>
                    <div className="font-medium">{layer.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Extracted High-Res Exploded Hardware Image */}
            <img
              src="/assets/hardware-exploded.png"
              alt="Omniqor Exploded CNC Enclosure and Custom PCB"
              className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar: Interactive RESEARCH -> DESIGN -> MANUFACTURE -> INTEGRATE */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono-tech uppercase">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isSelected = activeStage === stage.id;
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onMouseEnter={() => setActiveStage(stage.id)}
                    onClick={() => onNavigate('hardware-capabilities')}
                    className={`px-2 py-1 transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black font-medium'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {stage.label}
                  </button>
                  {idx < PIPELINE_STAGES.length - 1 && (
                    <ArrowRightIcon className="w-3.5 h-3.5 text-white/40" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <span className="text-white font-medium">03 / 12</span>
        </div>
      </div>
    </section>
  );
}
