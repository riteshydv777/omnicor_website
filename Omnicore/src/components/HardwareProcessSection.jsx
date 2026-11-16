import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { HARDWARE_PROCESS_STEPS } from '../data/capabilitiesData';
import { ArrowRightIcon } from './CustomIcons';
import { MaskedHeadline } from './ScrollChoreography';

export default function HardwareProcessSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState('01');
  const [userHovering, setUserHovering] = useState(false);
  const [explodeFactor, setExplodeFactor] = useState(0.5);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Smooth bell curve or ramp for hardware layer explosion as you scroll through the section
    const clamped = Math.max(0, Math.min(1, v));
    setExplodeFactor(clamped);

    if (!userHovering) {
      if (clamped < 0.28) setActiveStep('01');
      else if (clamped < 0.52) setActiveStep('02');
      else if (clamped < 0.76) setActiveStep('03');
      else setActiveStep('04');
    }
  });

  const isLayerActive = (layerKey) => {
    const current = HARDWARE_PROCESS_STEPS.find((s) => s.num === activeStep);
    if (!current) return true;
    return current.layer === 'all' || current.layer === layerKey;
  };

  // Scroll-driven vertical offsets for Top & Bottom isometric layers
  const topOffset = -Math.round(explodeFactor * 36) - (activeStep === '01' ? 10 : 0);
  const midOffset = activeStep === '02' ? -6 : 0;
  const botOffset = Math.round(explodeFactor * 32) + (activeStep === '03' ? 10 : 0);

  return (
    <section
      id="hardware-process"
      ref={sectionRef}
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
            01 / FROM CONCEPT TO PRODUCT
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16">
        {/* Headline: FROM CIRCUIT TO SYSTEM. with Masked 3D Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <MaskedHeadline
            lines={['FROM CIRCUIT', 'TO SYSTEM.']}
            className="font-display text-[34px] sm:text-[50px] md:text-[64px] xl:text-[74px] leading-[1.08] tracking-[0.02em] uppercase text-white font-normal"
          />

          <div className="font-mono-tech text-[10px] text-white/55 uppercase px-3 py-1.5 border border-white/15 bg-white/[0.03] self-start md:self-auto">
            SCROLL SEPARATION // {Math.round(explodeFactor * 100)}% DECONSTRUCTED
          </div>
        </div>

        {/* Two-Column Split: Left Scroll-Driven Isometric 3-Layer Stack + Right 4-Step Timeline */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Cols 1-6): Scroll-Linked 3-Layer Isometric Architecture Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[540px] aspect-[5/4] flex items-center justify-center">
              <svg
                viewBox="0 0 560 480"
                fill="none"
                className="w-full h-full overflow-visible select-none"
              >
                <defs>
                  <linearGradient id="isoTopGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6B6B6B" />
                    <stop offset="50%" stopColor="#2E2E2E" />
                    <stop offset="100%" stopColor="#141414" />
                  </linearGradient>
                  <linearGradient id="isoMidGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3F3F3F" />
                    <stop offset="100%" stopColor="#121212" />
                  </linearGradient>
                  <linearGradient id="isoBotGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4A4A4A" />
                    <stop offset="100%" stopColor="#0E0E0E" />
                  </linearGradient>
                </defs>

                {/* Vertical Isometric Alignment Laser Axis */}
                <line
                  x1="280"
                  y1="15"
                  x2="280"
                  y2="455"
                  stroke="white"
                  strokeOpacity="0.28"
                  strokeDasharray="3 5"
                />

                {/* LAYER 3 (BOTTOM): STRUCTURAL CHASSIS & ENCLOSURE BASE */}
                <g
                  onClick={() => setActiveStep('03')}
                  className="cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    transform: `translateY(${botOffset}px)`,
                    opacity: isLayerActive('bottom') ? 1 : 0.35,
                  }}
                >
                  <polygon
                    points="280,245 480,335 280,425 80,335"
                    fill="url(#isoBotGrad)"
                    stroke="white"
                    strokeOpacity={isLayerActive('bottom') ? '0.85' : '0.25'}
                    strokeWidth="1.2"
                  />
                  <polygon
                    points="80,335 280,425 280,443 80,353"
                    fill="#3A3A3A"
                  />
                  <polygon
                    points="480,335 280,425 280,443 480,353"
                    fill="#1A1A1A"
                  />
                  <polygon
                    points="280,258 450,335 280,412 110,335"
                    fill="#0D0D0D"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                </g>

                {/* LAYER 2 (MIDDLE): POPULATED PCB + SILICON IC + SMT ARRAYS */}
                <g
                  onClick={() => setActiveStep('02')}
                  className="cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    transform: `translateY(${midOffset}px)`,
                    opacity: isLayerActive('middle') ? 1 : 0.35,
                  }}
                >
                  <polygon
                    points="280,150 465,235 280,320 95,235"
                    fill="url(#isoMidGrad)"
                    stroke="white"
                    strokeOpacity={isLayerActive('middle') ? '0.95' : '0.3'}
                    strokeWidth="1.3"
                  />
                  <polygon
                    points="95,235 280,320 280,330 95,245"
                    fill="#2A2A2A"
                  />
                  <polygon
                    points="465,235 280,320 280,330 465,245"
                    fill="#141414"
                  />
                  <polygon
                    points="280,175 355,210 280,245 205,210"
                    fill="#232323"
                    stroke="white"
                    strokeOpacity="0.75"
                    strokeWidth="1.2"
                  />
                  {[0, 1, 2, 3, 4].map((i) => {
                    const dx = i * 18;
                    const dy = i * 8.5;
                    return (
                      <g key={`smt-row1-${i}`}>
                        <polygon
                          points={`${150 + dx},${235 + dy} ${164 + dx},${228 + dy} ${172 + dx},${232 + dy} ${158 + dx},${239 + dy}`}
                          fill="#D4D4D8"
                        />
                        <polygon
                          points={`${132 + dx},${245 + dy} ${146 + dx},${238 + dy} ${154 + dx},${242 + dy} ${140 + dx},${249 + dy}`}
                          fill="#A1A1AA"
                        />
                      </g>
                    );
                  })}
                  {[0, 1, 2].map((i) => {
                    const dx = i * 24;
                    const dy = -i * 11;
                    return (
                      <polygon
                        key={`ic-right-${i}`}
                        points={`${315 + dx},${268 + dy} ${340 + dx},${256 + dy} ${354 + dx},${263 + dy} ${329 + dx},${275 + dy}`}
                        fill="#3F3F46"
                        stroke="white"
                        strokeOpacity="0.45"
                        strokeWidth="0.9"
                      />
                    );
                  })}
                </g>

                {/* LAYER 1 (TOP): BRUSHED ALUMINUM TOP COVER & THERMAL FINS */}
                <g
                  onClick={() => setActiveStep('01')}
                  className="cursor-pointer transition-all duration-300 ease-out"
                  style={{
                    transform: `translateY(${topOffset}px)`,
                    opacity: isLayerActive('top') ? 1 : 0.35,
                  }}
                >
                  <polygon
                    points="280,55 480,145 280,235 80,145"
                    fill="url(#isoTopGrad)"
                    stroke="white"
                    strokeOpacity={isLayerActive('top') ? '0.95' : '0.3'}
                    strokeWidth="1.3"
                  />
                  <polygon
                    points="80,145 280,235 280,247 80,157"
                    fill="#52525B"
                  />
                  <polygon
                    points="480,145 280,235 280,247 480,157"
                    fill="#27272A"
                  />
                  {[-3, -2, -1, 0, 1, 2, 3].map((offset) => (
                    <line
                      key={`groove-${offset}`}
                      x1={175 + offset * 16}
                      y1={150 + offset * 7.5}
                      x2={295 + offset * 16}
                      y2={95 + offset * 7.5}
                      stroke="white"
                      strokeOpacity="0.18"
                      strokeWidth="1.2"
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* Exact PDF Visual Caption */}
            <div className="mt-4 font-mono-tech text-[11px] sm:text-xs text-white/75 uppercase tracking-[0.16em] text-center">
              CONCEPT VISUAL / ELECTRONICS + ENCLOSURE + INTEGRATION
            </div>
          </div>

          {/* Right Column (Cols 7-12): 4-Step Vertical Timeline (01 to 04) */}
          <div
            onMouseEnter={() => setUserHovering(true)}
            onMouseLeave={() => setUserHovering(false)}
            className="lg:col-span-6 flex flex-col border-t border-white/20"
          >
            {HARDWARE_PROCESS_STEPS.map((step) => {
              const isSelected = activeStep === step.num;
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(step.num)}
                  onClick={() => setActiveStep(step.num)}
                  className={`group py-7 px-6 -mx-6 border-b border-white/20 transition-all duration-300 cursor-pointer flex items-start gap-6 sm:gap-10 ${
                    isSelected ? 'bg-white/[0.07]' : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <span
                    className={`font-mono-tech text-xs pt-1.5 transition-colors duration-300 ${
                      isSelected ? 'text-white font-semibold' : 'text-white/50'
                    }`}
                  >
                    {step.num}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.01em] mb-2">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`hidden sm:inline-block font-mono-tech text-[9px] px-2 py-0.5 border transition-all duration-300 ${
                            isSelected
                              ? 'border-white text-black bg-white'
                              : 'border-white/15 text-white/40 opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          {step.layerName}
                        </span>
                        <ArrowRightIcon
                          className={`w-4 h-4 transition-opacity duration-300 ${
                            isSelected ? 'opacity-100 text-white' : 'opacity-25'
                          }`}
                        />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base md:text-[17px] font-light leading-[1.6] text-white/65 max-w-[520px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-white/70 uppercase">
          <span>BUILT AS A WHOLE, FROM THE INSIDE OUT.</span>
          <span className="text-white font-medium">05 / 12</span>
        </div>
      </div>
    </section>
  );
}
