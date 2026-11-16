import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CrosshairIcon, ArrowRightIcon } from './CustomIcons';

export default function CapabilityDetailModal({ capability, onClose, onConfigure }) {
  return (
    <AnimatePresence>
      {capability && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[75] bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Slide-over Technical Blueprint Drawer */}
          <motion.aside
            data-lenis-prevent="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-[540px] bg-[#070707] text-white border-l border-white/20 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl"
          >
            {/* Top Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo-mark-light.png"
                    alt="Omniqor"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-mono-tech text-xs text-white/65 uppercase">
                    CAPABILITY BLUEPRINT // {capability.code}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 border border-white/20 font-mono-tech text-[10px] uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  CLOSE [ESC]
                </button>
              </div>

              {/* Discipline Tag + Spec */}
              <div className="mt-7 flex items-center justify-between">
                <span className="px-2.5 py-1 bg-white text-black font-mono-tech text-[10px] font-semibold uppercase">
                  {capability.discipline || 'OMNIQOR CAPABILITY'}
                </span>
                <span className="font-mono-tech text-[10px] text-white/50 uppercase">
                  {capability.spec}
                </span>
              </div>

              {/* Capability Title & Exact PDF Description */}
              <h3 className="mt-5 font-display text-2xl sm:text-3xl leading-[1.18] uppercase text-white">
                {capability.title}
              </h3>

              <p className="mt-4 text-base sm:text-lg font-light leading-[1.6] text-white/75">
                {capability.description}
              </p>

              {/* Animated Architectural Schematic Banner */}
              <div className="mt-7 p-5 border border-white/15 bg-black relative overflow-hidden">
                <div className="flex items-center justify-between font-mono-tech text-[9px] text-white/45 uppercase mb-3">
                  <span>SYSTEM TELEMETRY // ACTIVE</span>
                  <span>NODE: {capability.code}</span>
                </div>
                <svg viewBox="0 0 400 68" fill="none" className="w-full h-16">
                  <line x1="10" y1="34" x2="390" y2="34" stroke="white" strokeOpacity="0.2" strokeDasharray="3 4" />
                  <rect x="20" y="16" width="80" height="36" stroke="white" strokeOpacity="0.6" strokeWidth="1.2" />
                  <rect x="160" y="10" width="80" height="48" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="1.4" />
                  <rect x="300" y="16" width="80" height="36" stroke="white" strokeOpacity="0.6" strokeWidth="1.2" />
                  <path d="M100 34H160M240 34H300" stroke="white" strokeWidth="1.3" />
                  <circle cx="60" cy="34" r="3" fill="white" />
                  <circle cx="200" cy="34" r="4" fill="white" />
                  <circle cx="340" cy="34" r="3" fill="white" />
                </svg>
              </div>

              {/* Key Engineering Deliverables */}
              {capability.deliverables && (
                <div className="mt-8">
                  <div className="font-mono-tech text-xs text-white/60 uppercase mb-4 flex items-center gap-2">
                    <CrosshairIcon className="w-3.5 h-3.5 text-white" />
                    <span>KEY ENGINEERING DELIVERABLES</span>
                  </div>
                  <div className="space-y-3 border-t border-white/15 pt-4">
                    {capability.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm font-light text-white/80"
                      >
                        <span className="font-mono-tech text-[10px] text-white/45 pt-0.5">
                          0{i + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected Architecture Role */}
              {capability.layerConnection && (
                <div className="mt-7 p-4 border-l-2 border-white bg-white/[0.04]">
                  <div className="font-mono-tech text-[10px] text-white/50 uppercase mb-1">
                    CONNECTED SYSTEM ROLE
                  </div>
                  <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed">
                    {capability.layerConnection}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Action Buttons */}
            <div className="mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  if (onConfigure) onConfigure();
                }}
                className="w-full py-3.5 px-5 bg-white text-black font-mono-tech text-xs font-medium uppercase flex items-center justify-center gap-2 hover:bg-white/90 transition-all cursor-pointer"
              >
                <span>INITIATE PROJECT WITH THIS CAPABILITY</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
