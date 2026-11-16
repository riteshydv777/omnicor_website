import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HARDWARE_CAPABILITIES, HARDWARE_MARKETS } from '../data/capabilitiesData';
import { CrosshairIcon, ArrowUpRightIcon } from './CustomIcons';
import { MaskedHeadline, SpotlightGrid } from './ScrollChoreography';

const CapabilityVectorIcon = ({ index, isHovered }) => {
  const strokeClass = `transition-all duration-500 ${
    isHovered ? 'stroke-white' : 'stroke-[#0A0A0A]'
  }`;

  switch (index) {
    case 0: // 01/01 Research & product design
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="4" y="4" width="28" height="28" strokeWidth="1.2" className={strokeClass} strokeOpacity="0.35" />
          <circle cx="18" cy="18" r="8" strokeWidth="1.3" className={strokeClass} />
          <path d="M18 4V32M4 18H32" strokeWidth="1" className={strokeClass} strokeOpacity="0.45" />
        </svg>
      );
    case 1: // 01/02 Bare PCB manufacture
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="5" y="5" width="26" height="26" strokeWidth="1.3" className={strokeClass} />
          <path d="M5 13H14L18 17V25M31 15H23L19 19M12 5V10M24 31V24" strokeWidth="1.2" className={strokeClass} />
          <circle cx="18" cy="25" r="2" fill="currentColor" />
          <circle cx="19" cy="19" r="2" fill="currentColor" />
        </svg>
      );
    case 2: // 01/03 PCB assembly
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="10" y="10" width="16" height="16" strokeWidth="1.4" className={strokeClass} />
          <rect x="14" y="14" width="8" height="8" fill="currentColor" fillOpacity="0.2" strokeWidth="1" className={strokeClass} />
          <path d="M13 5V10M18 5V10M23 5V10M13 26V31M18 26V31M23 26V31M5 13H10M5 18H10M5 23H10M26 13H31M26 18H31M26 23H31" strokeWidth="1.2" className={strokeClass} />
        </svg>
      );
    case 3: // 01/04 3D-printed enclosures
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M18 4L31 11.5V24.5L18 32L5 24.5V11.5L18 4Z" strokeWidth="1.3" className={strokeClass} />
          <path d="M5 11.5L18 19L31 11.5M18 19V32" strokeWidth="1.2" className={strokeClass} strokeOpacity="0.65" />
        </svg>
      );
    case 4: // 01/05 Systems integration
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="13" cy="18" r="8" strokeWidth="1.3" className={strokeClass} />
          <circle cx="23" cy="18" r="8" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="18" r="2.2" fill="currentColor" />
        </svg>
      );
    default: // 01/06 Manufacture & distribution
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="5" y="5" width="11" height="11" strokeWidth="1.3" className={strokeClass} />
          <rect x="20" y="5" width="11" height="11" strokeWidth="1.3" className={strokeClass} />
          <rect x="5" y="20" width="11" height="11" strokeWidth="1.3" className={strokeClass} />
          <rect x="20" y="20" width="11" height="11" strokeWidth="1.3" className={strokeClass} />
        </svg>
      );
  }
};

export default function HardwareCapabilitiesSection({ onSelectCapability }) {
  const [hoveredCode, setHoveredCode] = useState(null);

  return (
    <section
      id="hardware-capabilities"
      className="relative min-h-screen w-full bg-[#F3F3F0] text-[#0A0A0A] pt-24 pb-10 flex flex-col justify-between overflow-hidden border-b border-black/12"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-70" />

      {/* Top PDF Slide Header Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between pb-5 border-b border-black/15">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-mark-dark.png"
              alt="Omniqor Mark"
              className="w-5 h-5 object-contain"
            />
            <span className="font-display text-sm md:text-base tracking-[0.18em] uppercase text-[#0A0A0A]">
              OMNIQOR
            </span>
          </div>
          <span className="font-mono-tech text-[10px] md:text-xs text-black/65 uppercase">
            01 / HARDWARE CAPABILITIES
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-14">
        {/* Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono-tech text-xs md:text-sm uppercase text-black/70 mb-4 tracking-[0.16em]">
            FROM COMPONENTS TO COMPLETE SYSTEMS
          </div>

          <MaskedHeadline
            lines={['DETAIL BY DETAIL.']}
            className="font-display text-[32px] sm:text-[48px] md:text-[62px] xl:text-[72px] leading-[1.08] tracking-[0.02em] uppercase text-[#0A0A0A] font-normal"
          />
        </motion.div>

        {/* 6-Card Swiss Architectural Grid (01/01 to 01/06) */}
        <SpotlightGrid isLight={true} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/15">
          {HARDWARE_CAPABILITIES.map((cap, idx) => {
            const isHovered = hoveredCode === cap.code;
            return (
              <motion.div
                key={cap.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredCode(cap.code)}
                onMouseLeave={() => setHoveredCode(null)}
                onClick={() => onSelectCapability && onSelectCapability(cap)}
                data-interactive="true"
                className={`group relative p-8 md:p-9 border-r border-b border-black/15 flex flex-col justify-between min-h-[250px] transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? 'bg-[#080808] text-white shadow-2xl -translate-y-0.5'
                    : 'bg-[#F3F3F0]/85 text-[#0A0A0A]'
                }`}
              >
                {/* Top Row: Code + SVG Schematic + Crosshair */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`font-mono-tech text-xs uppercase transition-colors duration-300 ${
                      isHovered ? 'text-white/70' : 'text-black/60'
                    }`}
                  >
                    {cap.code}
                  </span>
                  <div className="flex items-center gap-3">
                    <CapabilityVectorIcon index={idx} isHovered={isHovered} />
                    <CrosshairIcon
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${
                        isHovered ? 'text-white/70' : 'text-black/30'
                      }`}
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className={`text-xl md:text-[22px] font-medium tracking-[-0.01em] mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className={`text-sm md:text-[15px] font-light leading-[1.6] transition-colors duration-300 ${
                      isHovered ? 'text-white/75' : 'text-[#52525B]'
                    }`}
                  >
                    {cap.description}
                  </p>
                </div>

                {/* Subtle Bottom Technical Spec Bar */}
                <div
                  className={`mt-6 pt-3 border-t flex items-center justify-between font-mono-tech text-[10px] uppercase transition-colors duration-300 ${
                    isHovered ? 'border-white/15 text-white/60' : 'border-black/10 text-black/45'
                  }`}
                >
                  <span>{cap.spec}</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </SpotlightGrid>

        {/* Bottom 3-Column Market Strip: CONSUMER / COMMERCIAL / STRATEGIC */}
        <div className="mt-10 pt-8 border-t border-black/15 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HARDWARE_MARKETS.map((m) => (
            <div
              key={m.label}
              className="group p-4 -m-4 transition-colors duration-300 hover:bg-black/[0.04] flex items-start justify-between"
            >
              <div>
                <div className="font-mono-tech text-xs font-semibold uppercase tracking-[0.14em] text-[#0A0A0A] mb-1.5">
                  {m.label}
                </div>
                <div className="text-sm md:text-base font-light text-[#52525B]">
                  {m.desc}
                </div>
              </div>
              <CrosshairIcon className="w-3.5 h-3.5 text-black/25 group-hover:text-black transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-black/15 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-black/65 uppercase">
          <span>HARDWARE ENGINEERING &amp; MANUFACTURING</span>
          <span className="text-[#0A0A0A] font-medium">04 / 12</span>
        </div>
      </div>
    </section>
  );
}
