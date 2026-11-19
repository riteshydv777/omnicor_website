import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SECURITY_CAPABILITIES } from '../data/capabilitiesData';
import { CrosshairIcon, ArrowUpRightIcon } from './CustomIcons';
import { MaskedHeadline, SpotlightGrid } from './ScrollChoreography';

const SecurityVectorIcon = ({ index, isHovered }) => {
  const strokeClass = `transition-all duration-500 ${
    isHovered ? 'stroke-white' : 'stroke-[#0A0A0A]'
  }`;

  switch (index) {
    case 0: // 03/01 Cybersecurity frameworks
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <path d="M18 4L30 9V18C30 25.5 24.8 31 18 33C11.2 31 6 25.5 6 18V9L18 4Z" strokeWidth="1.3" className={strokeClass} />
          <path d="M18 9L25 12V18C25 22.8 22 26.2 18 27.8C14 26.2 11 22.8 11 18V12L18 9Z" strokeWidth="1.2" className={strokeClass} strokeOpacity="0.6" />
        </svg>
      );
    case 1: // 03/02 Security consulting
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <circle cx="18" cy="18" r="13" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="18" r="7" strokeWidth="1.2" strokeDasharray="3 3" className={strokeClass} />
          <path d="M18 18L27 9" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="18" r="2" fill="currentColor" />
        </svg>
      );
    case 2: // 03/03 Digital data protection
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="7" y="15" width="22" height="16" strokeWidth="1.3" className={strokeClass} />
          <path d="M12 15V11C12 7.7 14.7 5 18 5C21.3 5 24 7.7 24 11V15" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="22" r="2" fill="currentColor" />
          <path d="M18 24V27" strokeWidth="1.3" className={strokeClass} />
        </svg>
      );
    case 3: // 03/04 Network vulnerability mitigation
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <polygon points="18,4 31,11.5 31,24.5 18,32 5,24.5 5,11.5" strokeWidth="1.3" className={strokeClass} />
          <circle cx="18" cy="18" r="4.5" strokeWidth="1.3" className={strokeClass} />
          <path d="M18 4V13.5M18 22.5V32M5 11.5L14 16M22 20L31 24.5M31 11.5L22 16M14 20L5 24.5" strokeWidth="1" className={strokeClass} strokeOpacity="0.55" />
        </svg>
      );
    case 4: // 03/05 Integrated security infrastructure
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="6" y="6" width="24" height="24" strokeWidth="1.3" className={strokeClass} />
          <path d="M18 11L24 14V19.5C24 23 21.4 25.6 18 26.8C14.6 25.6 12 23 12 19.5V14L18 11Z" strokeWidth="1.3" className={strokeClass} />
          <path d="M12 3V6M24 3V6M12 30V33M24 30V33M3 12H6M3 24H6M30 12H33M30 24H33" strokeWidth="1.2" className={strokeClass} />
        </svg>
      );
    default: // 03/06 Security systems management
      return (
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
          <rect x="4" y="6" width="28" height="24" strokeWidth="1.3" className={strokeClass} />
          <path d="M8 21H13L15.5 14L19.5 24L22 18H28" strokeWidth="1.3" className={strokeClass} />
        </svg>
      );
  }
};

export default function SecurityCapabilitiesSection({ onSelectCapability }) {
  const [hoveredCode, setHoveredCode] = useState(null);

  return (
    <section
      id="security-capabilities"
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
            03 / SECURITY CAPABILITIES
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
            CONSIDERED PROTECTION ACROSS THE STACK.
          </div>

          <MaskedHeadline
            lines={['CONNECTED.', 'PROTECTED.']}
            className="font-display text-[34px] sm:text-[50px] md:text-[66px] xl:text-[76px] leading-[1.06] tracking-[0.02em] uppercase text-[#0A0A0A] font-normal"
          />
        </motion.div>

        {/* 6-Card Swiss Architectural Grid (03/01 to 03/06) */}
        <SpotlightGrid isLight={true} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/15">
          {SECURITY_CAPABILITIES.map((cap, idx) => {
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
                className={`group relative p-8 md:p-9 border-r border-b border-black/15 flex flex-col justify-between min-h-[260px] transition-all duration-500 cursor-pointer ${
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
                    <SecurityVectorIcon index={idx} isHovered={isHovered} />
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
                    className={`text-xl md:text-[22px] font-medium tracking-[-0.01em] mb-3 leading-[1.3] transition-colors duration-300 ${
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
          <span>CYBERSECURITY &amp; INTEGRATED SECURITY SYSTEMS</span>
          <span className="text-[#0A0A0A] font-medium">10 / 12</span>
        </div>
      </div>
    </section>
  );
}
