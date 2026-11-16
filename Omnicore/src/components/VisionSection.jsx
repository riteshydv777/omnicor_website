import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VISION_PILLARS } from '../data/capabilitiesData';
import {
  HardwareCircuitSVG,
  SoftwareAISVG,
  SecurityShieldSVG,
  ArrowRightIcon,
  CrosshairIcon,
} from './CustomIcons';
import { MaskedHeadline, LaserDivider, SpotlightGrid } from './ScrollChoreography';

export default function VisionSection({ onNavigate }) {
  const [activeCard, setActiveCard] = useState(null);

  const getPillarSVG = (num) => {
    if (num === '01') return <HardwareCircuitSVG className="w-11 h-11" />;
    if (num === '02') return <SoftwareAISVG className="w-11 h-11" />;
    return <SecurityShieldSVG className="w-11 h-11" />;
  };

  return (
    <section
      id="vision"
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
            COMPANY / THE CONNECTED VISION
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16">
        {/* Eyebrow + Massive Display Headline + Lead Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1120px]"
        >
          <div className="font-mono-tech text-xs md:text-sm uppercase text-black/70 mb-5 tracking-[0.16em]">
            THREE DISCIPLINES. ONE AMBITION.
          </div>

          <MaskedHeadline
            lines={['BEYOND THE', 'BOUNDARIES.']}
            className="font-display text-[34px] sm:text-[52px] md:text-[68px] xl:text-[80px] leading-[1.06] tracking-[0.02em] uppercase text-[#0A0A0A] font-normal"
          />

          <p className="mt-8 text-lg sm:text-xl md:text-[25px] font-light leading-[1.45] text-[#27272A] max-w-[920px] tracking-[-0.01em]">
            We bring hardware engineering, digital experiences and security together—so every part of
            your technology can work as a connected whole.
          </p>
        </motion.div>

        {/* Full-width Architectural Laser Hairline */}
        <LaserDivider isLight={true} className="mt-12 mb-0" />

        {/* 3-Column Interactive Disciplines Grid with Mouse Spotlight */}
        <SpotlightGrid isLight={true} className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-black/15 border-b border-x border-black/15 bg-[#F3F3F0]/80">
          {VISION_PILLARS.map((pillar, idx) => {
            const isHovered = activeCard === pillar.num;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveCard(pillar.num)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => onNavigate(pillar.targetId)}
                className={`group relative p-8 md:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? 'bg-[#080808] text-white shadow-2xl -translate-y-1'
                    : 'bg-transparent text-[#0A0A0A] hover:bg-black/[0.02]'
                }`}
              >
                {/* Top Corner Crosshair */}
                <div
                  className={`absolute top-4 right-4 transition-colors duration-300 ${
                    isHovered ? 'text-white/70' : 'text-black/30'
                  }`}
                >
                  <CrosshairIcon className="w-3.5 h-3.5" />
                </div>

                <div>
                  {/* Number + Custom Architectural SVG Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className={`text-4xl md:text-5xl font-light tracking-tight transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-[#0A0A0A]'
                      }`}
                    >
                      {pillar.num}
                    </span>
                    <div
                      className={`mt-1 mr-4 transition-colors duration-500 ${
                        isHovered ? 'text-white' : 'text-black/75'
                      }`}
                    >
                      {getPillarSVG(pillar.num)}
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3
                    className={`text-xl md:text-2xl font-semibold tracking-[0.03em] uppercase mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Pillar Tagline */}
                  <p
                    className={`text-base md:text-lg font-normal mb-5 transition-colors duration-300 ${
                      isHovered ? 'text-white/90' : 'text-[#18181B]'
                    }`}
                  >
                    {pillar.tagline}
                  </p>

                  {/* Exact PDF Dot-Separated Capabilities List with interactive highlight */}
                  <p
                    className={`text-sm md:text-[15px] font-light leading-[1.7] transition-colors duration-300 ${
                      isHovered ? 'text-white/70' : 'text-[#52525B]'
                    }`}
                  >
                    {pillar.items.map((item, i) => (
                      <React.Fragment key={item}>
                        <span
                          className={`transition-colors duration-200 ${
                            isHovered ? 'hover:text-white' : 'hover:text-black'
                          }`}
                        >
                          {item}
                        </span>
                        {i < pillar.items.length - 1 && (
                          <span className="mx-1.5 opacity-60">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                {/* Bottom Explore Link */}
                <div
                  className={`mt-10 pt-5 border-t flex items-center justify-between font-mono-tech text-xs uppercase transition-colors duration-300 ${
                    isHovered
                      ? 'border-white/20 text-white'
                      : 'border-black/12 text-black/70'
                  }`}
                >
                  <span>{pillar.exploreRange}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      OPEN CHAPTER
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </SpotlightGrid>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-black/15 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-black/65 uppercase">
          <span>ENGINEERING / EXPERIENCES / PROTECTION</span>
          <span className="text-[#0A0A0A] font-medium">02 / 12</span>
        </div>
      </div>
    </section>
  );
}
