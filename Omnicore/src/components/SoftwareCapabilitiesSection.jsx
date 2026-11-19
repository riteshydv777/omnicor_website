import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOFTWARE_CAPABILITIES } from '../data/capabilitiesData';
import { CrosshairIcon, ArrowUpRightIcon } from './CustomIcons';
import { MaskedHeadline, SpotlightGrid } from './ScrollChoreography';

const SoftwareVectorIcon = ({ index, isHovered }) => {
  const strokeClass = `transition-all duration-500 ${
    isHovered ? 'stroke-white' : 'stroke-[#0A0A0A]'
  }`;

  switch (index) {
    case 0: // 02/01 Full-stack web applications
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="4" y="6" width="28" height="24" strokeWidth="1.3" className={strokeClass} />
          <path d="M4 12H32" strokeWidth="1.2" className={strokeClass} />
          <circle cx="8" cy="9" r="1" fill="currentColor" />
          <circle cx="11.5" cy="9" r="1" fill="currentColor" />
          <path d="M13 18L9 21L13 24M23 18L27 21L23 24M19.5 16.5L16.5 25.5" strokeWidth="1.2" className={strokeClass} />
        </svg>
      );
    case 1: // 02/02 Mobile applications
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="10" y="4" width="16" height="28" rx="2" strokeWidth="1.3" className={strokeClass} />
          <path d="M15 7.5H21M14 28.5H22" strokeWidth="1.2" className={strokeClass} />
          <rect x="13.5" y="12" width="9" height="9" strokeWidth="1.1" className={strokeClass} strokeOpacity="0.65" />
        </svg>
      );
    case 2: // 02/03 Custom software platforms
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M18 5L31 11.5L18 18L5 11.5L18 5Z" strokeWidth="1.3" className={strokeClass} />
          <path d="M5 18L18 24.5L31 18" strokeWidth="1.3" className={strokeClass} />
          <path d="M5 24.5L18 31L31 24.5" strokeWidth="1.3" className={strokeClass} />
        </svg>
      );
    case 3: // 02/04 AI & machine learning
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="8" cy="11" r="2.5" strokeWidth="1.3" className={strokeClass} />
          <circle cx="8" cy="25" r="2.5" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="8" r="2.5" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="18" r="3" strokeWidth="1.4" className={strokeClass} />
          <circle cx="18" cy="28" r="2.5" strokeWidth="1.3" className={strokeClass} />
          <circle cx="28" cy="18" r="2.5" strokeWidth="1.3" className={strokeClass} />
          <path d="M10.5 11L15.5 8.5M10.5 11.5L15.2 17M10.5 24.5L15.2 19M10.5 25L15.5 27.5M20.5 8.5L26 16M21 18H25.5M20.5 27.5L26 20" strokeWidth="1" className={strokeClass} strokeOpacity="0.6" />
        </svg>
      );
    case 4: // 02/05 Enterprise data & analytics
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <ellipse cx="18" cy="9" rx="11" ry="4" strokeWidth="1.3" className={strokeClass} />
          <path d="M7 9V27C7 29.2 11.9 31 18 31C24.1 31 29 29.2 29 27V9" strokeWidth="1.3" className={strokeClass} />
          <path d="M7 18C7 20.2 11.9 22 18 22C24.1 22 29 20.2 29 18" strokeWidth="1.2" className={strokeClass} />
        </svg>
      );
    default: // 02/06 Deployment & maintenance
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="18" cy="18" r="12" strokeWidth="1.3" strokeDasharray="4 3" className={strokeClass} />
          <circle cx="18" cy="18" r="5" strokeWidth="1.3" className={strokeClass} />
          <path d="M18 3V7M18 29V33M3 18H7M29 18H33" strokeWidth="1.3" className={strokeClass} />
        </svg>
      );
  }
};

export default function SoftwareCapabilitiesSection({ onSelectCapability }) {
  const [hoveredCode, setHoveredCode] = useState(null);

  return (
    <section
      id="software-capabilities"
      className="relative min-h-screen w-full bg-[#F3F3F0] text-[#0A0A0A] pt-20 md:pt-24 pb-10 flex flex-col justify-between overflow-hidden border-b border-black/12"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-70" />

      {/* Top PDF Slide Header Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 hidden md:block">
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
            02 / SOFTWARE, AI &amp; DATA CAPABILITIES
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16">
        {/* Eyebrow + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono-tech text-xs md:text-sm uppercase text-black/75 mb-5 tracking-[0.16em]">
            EXPERIENCE AT THE SURFACE. INTELLIGENCE UNDERNEATH.
          </div>

          <MaskedHeadline
            lines={['EVERY LAYER', 'CONNECTED.']}
            className="font-display text-[34px] sm:text-[50px] md:text-[66px] xl:text-[76px] leading-[1.06] tracking-[0.02em] uppercase text-[#0A0A0A] font-normal"
          />
        </motion.div>

        {/* 6-Card Swiss Architectural Grid (02/01 to 02/06) */}
        <SpotlightGrid isLight={true} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/15">
          {SOFTWARE_CAPABILITIES.map((cap, idx) => {
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
                className={`group relative p-8 md:p-9 border-r border-b border-black/15 flex flex-col justify-between min-h-[255px] transition-all duration-500 cursor-pointer ${
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
                    <SoftwareVectorIcon index={idx} isHovered={isHovered} />
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

                {/* Technical Spec Footer */}
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
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12 hidden md:block">
        <div className="pt-5 border-t border-black/15 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-black/65 uppercase">
          <span>FULL-STACK SOFTWARE / AI / ENTERPRISE DATA</span>
          <span className="text-[#0A0A0A] font-medium">07 / 12</span>
        </div>
      </div>
    </section>
  );
}
