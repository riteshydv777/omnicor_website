import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEGAL_DOCUMENTS } from '../data/contentGuideData';
import { CrosshairIcon, ArrowUpRightIcon, ArrowRightIcon } from './CustomIcons';

const DOC_TABS = [
  { key: 'terms', label: 'Terms & Conditions' },
  { key: 'privacy', label: 'Privacy Policy' },
  { key: 'cookie', label: 'Cookie Policy' },
  { key: 'disclaimer', label: 'Disclaimer' },
];

export default function LegalPagesView({ activeDocKey, onSelectDoc, onClose }) {
  const scrollContainerRef = useRef(null);
  const [cookiePrefs, setCookiePrefs] = useState({
    necessary: true,
    analytics: true,
    preferences: true,
  });
  const [savedToast, setSavedToast] = useState(false);

  const doc = activeDocKey ? LEGAL_DOCUMENTS[activeDocKey] : null;

  // Scroll back to top of legal container when switching tabs
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeDocKey]);

  const scrollToClause = (idx) => {
    const el = document.getElementById(`legal-clause-${idx}`);
    if (el && scrollContainerRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[85] bg-[#F3F3F0] text-[#0A0A0A] overflow-y-auto overscroll-contain"
        >
          {/* Sticky Top Bar */}
          <div className="sticky top-0 z-30 bg-[#F3F3F0]/95 backdrop-blur-md border-b border-black/15">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/logo-mark-dark.png"
                  alt="Omniqor Mark"
                  className="w-7 h-7 object-contain"
                />
                <div>
                  <span className="font-display text-sm uppercase tracking-[0.16em] text-[#0A0A0A]">
                    OMNIQOR
                  </span>
                  <span className="hidden sm:inline-block font-mono-tech text-[10px] text-black/55 uppercase ml-3">
                    // LEGAL &amp; COMPLIANCE DOCUMENTATION
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2.5 bg-[#0A0A0A] text-white font-mono-tech text-xs uppercase hover:bg-black/85 transition-all cursor-pointer"
              >
                ← RETURN TO WEBSITE
              </button>
            </div>

            {/* 4-Document Switcher Tabs */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 border-t border-black/10 flex overflow-x-auto">
              {DOC_TABS.map((tab, idx) => {
                const isSelected = activeDocKey === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => onSelectDoc(tab.key)}
                    className={`px-5 py-3.5 font-mono-tech text-xs uppercase whitespace-nowrap border-r border-black/10 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0A0A0A] text-white font-semibold'
                        : 'text-black/65 hover:bg-black/[0.05] hover:text-black'
                    }`}
                  >
                    <span className="opacity-50 mr-2">0{idx + 1}</span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Document Body */}
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-16">
            {/* Document Header */}
            <div className="pb-10 border-b border-black/15">
              <div className="font-mono-tech text-xs text-black/60 uppercase mb-3">
                {doc.code}
              </div>
              <h1 className="font-display text-3xl sm:text-5xl uppercase text-[#0A0A0A]">
                {doc.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg font-light text-[#3F3F46] max-w-2xl">
                {doc.subtitle}
              </p>
              <div className="mt-4 font-mono-tech text-xs text-black/55 uppercase">
                {doc.lastUpdated}
              </div>
            </div>

            {/* Content Split: Left Sticky Quick Index + Right Clauses */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left 4 Cols: Sticky Clause Navigation + Quick Contact */}
              <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
                <div className="p-6 border border-black/15 bg-[#EAEAE5]">
                  <div className="font-mono-tech text-xs font-semibold uppercase text-[#0A0A0A] mb-4 flex items-center justify-between">
                    <span>DOCUMENT SECTIONS</span>
                    <CrosshairIcon className="w-3.5 h-3.5 text-black/45" />
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm font-light text-black/75">
                    {doc.sections.map((s, idx) => (
                      <li key={s.heading}>
                        <button
                          onClick={() => scrollToClause(idx)}
                          className="w-full text-left py-1 hover:text-black hover:font-medium hover:translate-x-1 transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span className="truncate">{s.heading}</span>
                          <span className="font-mono-tech text-[10px] opacity-40">→</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border border-black/15 bg-[#0A0A0A] text-white space-y-3">
                  <div className="font-mono-tech text-[10px] text-white/55 uppercase">
                    LEGAL &amp; PRIVACY DESK
                  </div>
                  <div className="font-display text-sm uppercase">OMNIQOR</div>
                  <p className="text-xs font-light text-white/70 leading-relaxed">
                    For questions regarding these {doc.title}, contact our team directly:
                  </p>
                  <div className="space-y-2 pt-1">
                    <a
                      href="tel:+919557964345"
                      className="flex items-center gap-2 font-mono-tech text-xs text-white underline"
                    >
                      <span>+91 95579 64345</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:admin@omniqorpltd.com"
                      className="flex items-center gap-2 font-mono-tech text-xs text-white/85 hover:text-white underline break-all"
                    >
                      <span>admin@omniqorpltd.com</span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5 shrink-0" />
                    </a>
                    <div className="font-mono-tech text-[10px] text-white/55 uppercase pt-1">
                      OFFICE: DEHRADUN, INDIA
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 8 Cols: Clauses */}
              <div className="lg:col-span-8 space-y-8">
                {doc.sections.map((sec, idx) => (
                  <div
                    id={`legal-clause-${idx}`}
                    key={sec.heading}
                    className="scroll-mt-40 pb-7 border-b border-black/12 last:border-b-0"
                  >
                    <h2 className="text-lg sm:text-xl font-semibold text-[#0A0A0A] mb-2.5">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base font-light leading-[1.75] text-[#27272A]">
                      {sec.body}
                    </p>
                  </div>
                ))}

                {/* Interactive Cookie Preferences Panel when viewing Cookie Policy */}
                {activeDocKey === 'cookie' && (
                  <div className="mt-8 p-7 border border-black/20 bg-white space-y-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base uppercase text-[#0A0A0A]">
                        COOKIE PREFERENCE CONTROLS
                      </h3>
                      <span className="font-mono-tech text-[10px] text-black/50 uppercase">
                        CONSENT MANAGEMENT
                      </span>
                    </div>

                    <div className="divide-y divide-black/10">
                      <div className="py-3.5 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold">Strictly Necessary Cookies</div>
                          <div className="text-xs text-black/60 font-light">
                            Required for core security, navigation and inquiry form operation.
                          </div>
                        </div>
                        <span className="px-2.5 py-1 bg-black text-white font-mono-tech text-[10px] uppercase">
                          ALWAYS ACTIVE
                        </span>
                      </div>

                      <div className="py-3.5 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold">Analytics &amp; Performance</div>
                          <div className="text-xs text-black/60 font-light">
                            Helps us measure section engagement and improve user experience.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setCookiePrefs((p) => ({ ...p, analytics: !p.analytics }))
                          }
                          className={`px-3 py-1.5 font-mono-tech text-[10px] border uppercase cursor-pointer ${
                            cookiePrefs.analytics
                              ? 'bg-black text-white border-black'
                              : 'border-black/25 text-black/60'
                          }`}
                        >
                          {cookiePrefs.analytics ? 'ENABLED' : 'DISABLED'}
                        </button>
                      </div>

                      <div className="py-3.5 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold">Interface Preferences</div>
                          <div className="text-xs text-black/60 font-light">
                            Remembers your selected consent and display settings.
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setCookiePrefs((p) => ({ ...p, preferences: !p.preferences }))
                          }
                          className={`px-3 py-1.5 font-mono-tech text-[10px] border uppercase cursor-pointer ${
                            cookiePrefs.preferences
                              ? 'bg-black text-white border-black'
                              : 'border-black/25 text-black/60'
                          }`}
                        >
                          {cookiePrefs.preferences ? 'ENABLED' : 'DISABLED'}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          localStorage.setItem('omniqor_cookie_consent', 'saved');
                          setSavedToast(true);
                          setTimeout(() => setSavedToast(false), 2500);
                        }}
                        className="px-5 py-2.5 bg-[#0A0A0A] text-white font-mono-tech text-xs uppercase cursor-pointer"
                      >
                        SAVE COOKIE PREFERENCES
                      </button>
                      {savedToast && (
                        <span className="font-mono-tech text-xs text-black font-medium uppercase">
                          PREFERENCES SAVED ✓
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Bottom Navigation Bar Inside Legal Document */}
                <div className="pt-8 mt-10 border-t border-black/15 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={onClose}
                    className="px-5 py-3 border border-black/25 font-mono-tech text-xs uppercase hover:bg-black hover:text-white transition-all cursor-pointer"
                  >
                    ← RETURN TO WEBSITE
                  </button>

                  <div className="flex items-center gap-2">
                    {DOC_TABS.filter((t) => t.key !== activeDocKey).map((t) => (
                      <button
                        key={t.key}
                        onClick={() => onSelectDoc(t.key)}
                        className="px-3.5 py-2.5 bg-black/[0.06] hover:bg-black hover:text-white font-mono-tech text-[10px] uppercase transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{t.label}</span>
                        <ArrowRightIcon className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CookieConsentBanner({ onOpenCookiePolicy }) {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return Boolean(localStorage.getItem('omniqor_cookie_consent'));
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const accept = (mode) => {
    try {
      localStorage.setItem('omniqor_cookie_consent', mode);
    } catch {
      // ignore storage errors
    }
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-5 left-6 z-40 max-w-md bg-[#080808]/95 backdrop-blur-md border border-white/20 p-5 text-white shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono-tech text-[10px] text-white/60 uppercase">
          PRIVACY &amp; COOKIE CONSENT
        </span>
        <CrosshairIcon className="w-3 h-3 text-white/50" />
      </div>
      <p className="text-xs font-light text-white/75 leading-relaxed mb-4">
        OMNIQOR uses cookies and similar technologies to ensure core functionality and enhance user
        experience. Manage your preferences anytime.
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => accept('all')}
          className="px-3.5 py-2 bg-white text-black font-mono-tech text-[10px] font-semibold uppercase hover:bg-white/90 transition-all cursor-pointer"
        >
          ACCEPT ALL
        </button>
        <button
          onClick={() => accept('necessary')}
          className="px-3 py-2 border border-white/25 text-white/80 font-mono-tech text-[10px] uppercase hover:border-white hover:text-white transition-all cursor-pointer"
        >
          NECESSARY ONLY
        </button>
        <button
          onClick={onOpenCookiePolicy}
          className="px-2.5 py-2 font-mono-tech text-[10px] text-white/55 hover:text-white underline uppercase cursor-pointer"
        >
          COOKIE POLICY
        </button>
      </div>
    </div>
  );
}
