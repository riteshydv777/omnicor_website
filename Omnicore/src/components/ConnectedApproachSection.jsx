import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TARGET_SECTORS, END_TO_END_STAGES } from '../data/capabilitiesData';
import { CrosshairIcon, ArrowRightIcon } from './CustomIcons';
import { MaskedHeadline } from './ScrollChoreography';

export default function ConnectedApproachSection() {
  const [hoveredSector, setHoveredSector] = useState(null);
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  return (
    <section
      id="connected-approach"
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
            ONE CONNECTED APPROACH / BUILT AROUND YOU
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Cols 1-7): Headline + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="font-mono-tech text-xs md:text-sm uppercase text-black/70 mb-5 tracking-[0.16em]">
              CAPABILITIES THAT CONNECT.
            </div>

            <MaskedHeadline
              lines={['PHYSICAL.', 'DIGITAL.', 'PROTECTED.']}
              className="font-display text-[34px] sm:text-[52px] md:text-[66px] xl:text-[76px] leading-[1.06] tracking-[0.02em] uppercase text-[#0A0A0A] font-normal"
            />

            <p className="mt-8 text-lg sm:text-xl md:text-[25px] font-light leading-[1.45] text-[#27272A] max-w-[580px] tracking-[-0.01em]">
              One technology vision, shaped around the people and environments it serves.
            </p>
          </motion.div>

          {/* Right Column (Cols 8-12): 3 Target Sectors Accordion/List */}
          <div className="lg:col-span-5 border-t border-black/20">
            {TARGET_SECTORS.map((sector, idx) => {
              const isHovered = hoveredSector === sector.num;
              return (
                <motion.div
                  key={sector.num}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredSector(sector.num)}
                  onMouseLeave={() => setHoveredSector(null)}
                  className={`group p-6 sm:p-7 border-b border-black/20 transition-all duration-500 cursor-pointer flex items-start gap-6 ${
                    isHovered
                      ? 'bg-[#080808] text-white shadow-xl -mx-2 px-8'
                      : 'bg-transparent text-[#0A0A0A]'
                  }`}
                >
                  <span
                    className={`font-mono-tech text-xs pt-1.5 transition-colors duration-300 ${
                      isHovered ? 'text-white/70' : 'text-black/55'
                    }`}
                  >
                    {sector.num}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`text-xl md:text-[22px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-[#0A0A0A]'
                        }`}
                      >
                        {sector.title}
                      </h3>
                      <CrosshairIcon
                        className={`w-3.5 h-3.5 transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-black/30'
                        }`}
                      />
                    </div>

                    <p
                      className={`text-sm md:text-[15px] font-light leading-[1.6] transition-colors duration-300 ${
                        isHovered ? 'text-white/75' : 'text-[#52525B]'
                      }`}
                    >
                      {sector.description}
                    </p>

                    {/* Subtle Technical Sector Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {sector.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-mono-tech text-[9px] px-2 py-0.5 border transition-colors duration-300 ${
                            isHovered
                              ? 'border-white/20 text-white/75'
                              : 'border-black/12 text-black/50'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom 5-Stage End-to-End Methodology Strip (01 UNDERSTAND -> 05 SUPPORT) */}
        <div className="mt-16 pt-8 border-t border-black/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/15 border border-black/15">
            {END_TO_END_STAGES.map((stage, idx) => {
              const isSelected = activeStageIdx === idx;
              return (
                <button
                  key={stage.code}
                  onMouseEnter={() => setActiveStageIdx(idx)}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`group p-6 text-left transition-all duration-300 flex flex-col justify-between min-h-[125px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#080808] text-white'
                      : 'bg-[#F3F3F0] text-[#0A0A0A] hover:bg-[#EAEAE5]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-mono-tech text-xs font-semibold uppercase tracking-[0.12em] ${
                        isSelected ? 'text-white' : 'text-[#0A0A0A]'
                      }`}
                    >
                      {stage.code}
                    </span>
                    <ArrowRightIcon
                      className={`w-3.5 h-3.5 transition-opacity ${
                        isSelected ? 'opacity-100 text-white' : 'opacity-30'
                      }`}
                    />
                  </div>

                  <div>
                    <div
                      className={`text-sm md:text-[15px] font-light ${
                        isSelected ? 'text-white/90' : 'text-[#52525B]'
                      }`}
                    >
                      {stage.desc}
                    </div>
                    <div
                      className={`text-[11px] font-light mt-2 leading-snug transition-all duration-300 ${
                        isSelected ? 'text-white/60' : 'text-black/45'
                      }`}
                    >
                      {stage.detail}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-black/15 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-black/65 uppercase">
          <span>FROM A SINGLE CAPABILITY TO AN END-TO-END SOLUTION</span>
          <span className="text-[#0A0A0A] font-medium">11 / 12</span>
        </div>
      </div>
    </section>
  );
}
