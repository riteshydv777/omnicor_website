import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UX_CAPABILITIES } from '../data/capabilitiesData';
import { CrosshairIcon, ArrowUpRightIcon } from './CustomIcons';

const STUDIO_TABS = ['OVERVIEW', 'PROJECTS', 'LIBRARY', 'SETTINGS'];
const STUDIO_STAGES = [
  { id: '01', label: 'RESEARCH', metric: 'USER JOURNEY MAPPING // 100%' },
  { id: '02', label: 'DESIGN', metric: 'INTERFACE ARCHITECTURE // ACTIVE' },
  { id: '03', label: 'PROTOTYPE', metric: 'INTERACTIVE FLOW VALIDATION // READY' },
];

export default function UiUxStudioSection({ onSelectCapability }) {
  const [activeTab, setActiveTab] = useState('OVERVIEW');
  const [activeStage, setActiveStage] = useState('02');
  const [hoveredUxCard, setHoveredUxCard] = useState(null);

  const handleCardHover = (code, idx) => {
    setHoveredUxCard(code);
    if (idx < 2) setActiveStage('01');
    else if (idx < 4) setActiveStage('02');
    else setActiveStage('03');
  };

  return (
    <section
      id="uiux-studio"
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
            02 / UI &amp; UX DESIGN
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-10 lg:py-14">
        {/* Top Split: Left UI/UX Headline + Right Interactive Experience Studio Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (Cols 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="font-mono-tech text-[11px] md:text-xs text-white/75 uppercase tracking-[0.16em] mb-5">
              DIGITAL EXPERIENCES, DESIGNED AROUND PEOPLE.
            </div>

            <h2 className="font-display text-[44px] sm:text-[62px] md:text-[74px] leading-[1.05] tracking-[0.02em] uppercase text-white font-normal">
              UI / UX
            </h2>

            <p className="mt-3 text-2xl sm:text-3xl md:text-[36px] font-normal text-white tracking-[-0.01em]">
              Human by design.
            </p>

            <p className="mt-6 text-base sm:text-lg md:text-[19px] font-light leading-[1.6] text-white/65 max-w-[460px]">
              From the first user journey to the final interaction, we shape interfaces that make
              complex technology feel clear.
            </p>
          </motion.div>

          {/* Right Column (Cols 6-12): Interactive WORKSPACE / EXPERIENCE STUDIO Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-white/20 bg-[#0B0B0B] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Window Top Chrome Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/65" />
                    <span className="w-2 h-2 rounded-full bg-white/45" />
                    <span className="w-2 h-2 rounded-full bg-white/25" />
                  </div>
                  <span className="font-mono-tech text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.16em]">
                    WORKSPACE / EXPERIENCE STUDIO
                  </span>
                </div>
                <span className="hidden sm:inline-block font-mono-tech text-[10px] text-white/45 uppercase">
                  {STUDIO_STAGES.find((s) => s.id === activeStage)?.metric}
                </span>
              </div>

              {/* Studio Body: Left Sidebar + Right Design Workspace */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
                {/* Left Sidebar Navigation */}
                <div className="sm:col-span-3 flex sm:flex-col gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0">
                  {STUDIO_TABS.map((tab) => {
                    const isTabActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-left font-mono-tech text-[11px] uppercase tracking-[0.14em] py-1 transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                          isTabActive
                            ? 'text-white font-semibold translate-x-1'
                            : 'text-white/50 hover:text-white/85'
                        }`}
                      >
                        {isTabActive && <span className="w-1 h-1 rounded-full bg-white" />}
                        <span>{tab}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Design Workspace Area */}
                <div className="sm:col-span-9">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.01em]">
                      Design workspace
                    </h3>
                    <span className="font-mono-tech text-[10px] text-white/45 uppercase">
                      VIEW: {activeTab}
                    </span>
                  </div>

                  {/* 3 Interactive Stage Cards: 01 RESEARCH / 02 DESIGN / 03 PROTOTYPE */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {STUDIO_STAGES.map((stage) => {
                      const isStageSelected = activeStage === stage.id;
                      return (
                        <button
                          key={stage.id}
                          onMouseEnter={() => setActiveStage(stage.id)}
                          onClick={() => setActiveStage(stage.id)}
                          className={`group p-3.5 sm:p-4 border text-left transition-all duration-300 cursor-pointer ${
                            isStageSelected
                              ? 'border-white bg-white/[0.08]'
                              : 'border-white/15 bg-black/40 hover:border-white/40'
                          }`}
                        >
                          <div className="font-mono-tech text-[10px] text-white/55 mb-2">
                            {stage.id}
                          </div>
                          <div className="font-mono-tech text-[11px] sm:text-xs font-medium text-white uppercase tracking-[0.1em] mb-3">
                            {stage.label}
                          </div>
                          <div className="w-full h-[1.5px] bg-white/20 overflow-hidden">
                            <div
                              className={`h-full bg-white transition-all duration-500 ${
                                isStageSelected ? 'w-full' : 'w-2/3 opacity-50'
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* EXPERIENCE FLOW Node Graph (Exact PDF Bifurcated Loop + Animated Pulse) */}
                  <div className="mt-7">
                    <div className="font-mono-tech text-[10px] sm:text-[11px] text-white/60 uppercase tracking-[0.15em] mb-3">
                      EXPERIENCE FLOW
                    </div>

                    <div className="w-full py-2">
                      <svg viewBox="0 0 460 56" fill="none" className="w-full h-14 overflow-visible">
                        {/* Left Straight Segment */}
                        <line
                          x1="12"
                          y1="28"
                          x2="155"
                          y2="28"
                          stroke="white"
                          strokeOpacity={activeStage === '01' ? '1' : '0.55'}
                          strokeWidth={activeStage === '01' ? '1.8' : '1.2'}
                          className="transition-all duration-300"
                        />

                        {/* Center Bifurcated Loop (Top & Bottom Branches) */}
                        <path
                          d="M155 28 C168 28, 172 10, 190 10 H270 C288 10, 292 28, 305 28"
                          stroke="white"
                          strokeOpacity={activeStage === '02' ? '1' : '0.6'}
                          strokeWidth={activeStage === '02' ? '1.8' : '1.2'}
                          className="transition-all duration-300"
                        />
                        <path
                          d="M155 28 C168 28, 172 46, 190 46 H270 C288 46, 292 28, 305 28"
                          stroke="white"
                          strokeOpacity={activeStage === '02' ? '1' : '0.6'}
                          strokeWidth={activeStage === '02' ? '1.8' : '1.2'}
                          className="transition-all duration-300"
                        />

                        {/* Right Straight Segment */}
                        <line
                          x1="305"
                          y1="28"
                          x2="448"
                          y2="28"
                          stroke="white"
                          strokeOpacity={activeStage === '03' ? '1' : '0.55'}
                          strokeWidth={activeStage === '03' ? '1.8' : '1.2'}
                          className="transition-all duration-300"
                        />

                        {/* Start & End White Nodes (Exact PDF Match) */}
                        <circle cx="12" cy="28" r="4.5" fill="white" />
                        <circle cx="448" cy="28" r="4.5" fill="white" />

                        {/* Interactive Stage Indicator Node on the Graph */}
                        <circle
                          cx={activeStage === '01' ? '85' : activeStage === '02' ? '230' : '380'}
                          cy={activeStage === '02' ? '10' : '28'}
                          r="3.5"
                          fill="white"
                          className="transition-all duration-500"
                        />
                        {activeStage === '02' && (
                          <circle cx="230" cy="46" r="3.5" fill="white" />
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 6-Card UX Process Grid (UX / 01 to UX / 06) */}
        <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {UX_CAPABILITIES.map((ux, idx) => {
            const isHovered = hoveredUxCard === ux.code;
            return (
              <motion.div
                key={ux.code}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleCardHover(ux.code, idx)}
                onMouseLeave={() => setHoveredUxCard(null)}
                onClick={() => onSelectCapability && onSelectCapability(ux)}
                data-interactive="true"
                className={`group p-6 -m-6 border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'border-white/30 bg-white/[0.06]'
                    : 'border-transparent hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-tech text-xs text-white/60 uppercase">
                    {ux.code}
                  </span>
                  <CrosshairIcon
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-white/25'
                    }`}
                  />
                </div>
                <h3 className="text-xl md:text-[22px] font-medium text-white mb-2.5 tracking-[-0.01em] flex items-center justify-between">
                  <span>{ux.title}</span>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/75" />
                </h3>
                <p className="text-sm md:text-[15px] font-light leading-[1.6] text-white/65">
                  {ux.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-white/70 uppercase">
          <span>RESEARCH / DESIGN / PROTOTYPE / REFINE</span>
          <span className="text-white font-medium">08 / 12</span>
        </div>
      </div>
    </section>
  );
}
