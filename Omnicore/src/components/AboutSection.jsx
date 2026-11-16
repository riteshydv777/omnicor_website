import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../data/contentGuideData';
import {
  HardwareCircuitSVG,
  SoftwareAISVG,
  SecurityShieldSVG,
  CrosshairIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from './CustomIcons';

export default function AboutSection({ onNavigate }) {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const getIcon = (num) => {
    if (num === '01') return <HardwareCircuitSVG className="w-9 h-9" />;
    if (num === '02') return <SoftwareAISVG className="w-9 h-9" />;
    return <SecurityShieldSVG className="w-9 h-9" />;
  };

  return (
    <section
      id="about-us"
      className="relative min-h-screen w-full bg-[#050505] text-white pt-24 pb-12 flex flex-col justify-between overflow-hidden border-b border-white/15"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />

      {/* Top Slide Header Bar */}
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
            02 / COMPANY — ABOUT OMNIQOR
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16 space-y-14">
        {/* 1. Company Overview + Vision & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Cols: Headline + Company Overview Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="font-mono-tech text-xs text-white/65 uppercase tracking-[0.16em]">
              ABOUT OMNIQOR // COMPANY OVERVIEW &amp; POSITIONING
            </div>

            <h2 className="font-display text-[30px] sm:text-[44px] md:text-[54px] xl:text-[62px] leading-[1.08] tracking-[0.02em] uppercase text-white font-normal">
              ENGINEERING
              <br />
              WHAT COMES NEXT.
            </h2>

            <div className="space-y-5 pt-2 max-w-[680px]">
              {ABOUT_CONTENT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg md:text-[19px] font-light leading-[1.65] text-white/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right 5 Cols: Our Vision & Our Mission Architectural Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-1 gap-px bg-white/20 border border-white/20"
          >
            {/* Our Vision */}
            <div className="group p-8 bg-[#0A0A0A] hover:bg-white hover:text-black transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] opacity-60">
                  01 // DIRECTION
                </span>
                <CrosshairIcon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-lg uppercase mb-3">
                {ABOUT_CONTENT.vision.title}
              </h3>
              <p className="text-sm sm:text-base font-light leading-[1.65] opacity-85">
                {ABOUT_CONTENT.vision.text}
              </p>
            </div>

            {/* Our Mission */}
            <div className="group p-8 bg-[#0A0A0A] hover:bg-white hover:text-black transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.18em] opacity-60">
                  02 // PURPOSE
                </span>
                <CrosshairIcon className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-lg uppercase mb-3">
                {ABOUT_CONTENT.mission.title}
              </h3>
              <p className="text-sm sm:text-base font-light leading-[1.65] opacity-85">
                {ABOUT_CONTENT.mission.text}
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. What We Do (3 Core Disciplines Matrix from PDF Page 04) */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-xl sm:text-2xl uppercase text-white">
              What We Do
            </h3>
            <span className="font-mono-tech text-[10px] text-white/50 uppercase">
              THREE INTEGRATED DISCIPLINES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
            {ABOUT_CONTENT.whatWeDo.map((item) => {
              const isHovered = hoveredPillar === item.num;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setHoveredPillar(item.num)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  onClick={() => onNavigate(item.targetId)}
                  data-interactive="true"
                  className={`group p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                    isHovered
                      ? 'bg-white text-black'
                      : 'bg-[#080808] text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono-tech text-xs font-semibold ${
                          isHovered ? 'text-black/60' : 'text-white/55'
                        }`}
                      >
                        {item.num}
                      </span>
                      <div className={isHovered ? 'text-black' : 'text-white/80'}>
                        {getIcon(item.num)}
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-3 tracking-[-0.01em]">
                      {item.title}
                    </h4>

                    <p
                      className={`text-sm sm:text-[15px] font-light leading-[1.65] ${
                        isHovered ? 'text-black/80' : 'text-white/70'
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div
                    className={`mt-8 pt-4 border-t flex items-center justify-between font-mono-tech text-[10px] uppercase ${
                      isHovered ? 'border-black/15 text-black' : 'border-white/12 text-white/55'
                    }`}
                  >
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Our Approach + Who We Serve Split (PDF Pages 04 & 05) */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Cols: Our Approach */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display text-lg sm:text-xl uppercase text-white">
              {ABOUT_CONTENT.approach.title}
            </h3>

            {/* Understand -> Design -> Build -> Integrate -> Support */}
            <div className="flex flex-wrap items-center gap-2 py-2">
              {ABOUT_CONTENT.approach.steps.map((st, idx) => (
                <React.Fragment key={st}>
                  <span className="px-3.5 py-2 border border-white/25 bg-white/[0.04] font-mono-tech text-xs text-white uppercase">
                    {st}
                  </span>
                  {idx < ABOUT_CONTENT.approach.steps.length - 1 && (
                    <ArrowRightIcon className="w-3.5 h-3.5 text-white/45" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-sm sm:text-base font-light leading-[1.65] text-white/75 max-w-[640px]">
              {ABOUT_CONTENT.approach.text}
            </p>
          </div>

          {/* Right 5 Cols: Who We Serve */}
          <div className="lg:col-span-5 p-7 border border-white/20 bg-[#0A0A0A]">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-base sm:text-lg uppercase text-white">
                Who We Serve
              </h3>
              <CrosshairIcon className="w-3.5 h-3.5 text-white/50" />
            </div>

            <ul className="space-y-3.5 divide-y divide-white/10">
              {ABOUT_CONTENT.whoWeServe.map((sector, idx) => (
                <li
                  key={sector}
                  className="pt-3.5 first:pt-0 flex items-center gap-3.5 text-sm sm:text-base font-light text-white/85"
                >
                  <span className="font-mono-tech text-[10px] text-white/45">
                    0{idx + 1}
                  </span>
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Slide Footer Bar (Closing Statement from PDF Page 05) */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono-tech text-white/75 uppercase">
          <span>{ABOUT_CONTENT.closingStatement}</span>
          <span className="text-white font-medium">ABOUT OMNIQOR</span>
        </div>
      </div>
    </section>
  );
}
