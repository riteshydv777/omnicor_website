import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHAPTERS } from '../data/capabilitiesData';
import { SERVICES_DROPDOWN_ITEMS } from '../data/contentGuideData';
import {
  GridIndexIcon,
  ArrowUpRightIcon,
  ArrowRightIcon,
  CrosshairIcon,
} from './CustomIcons';

export default function NavbarHUD({
  activeChapter,
  scrollProgress,
  onNavigate,
  onOpenLegal,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredServiceIdx, setHoveredServiceIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLight = activeChapter?.theme === 'light';

  const handleNavClick = (targetId) => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <>
      {/* TOP FIXED LUXURY HUD HEADER (Matches PDF Page 03: VISION · SERVICES · ABOUT US · CONTACT) */}
      <header
        onMouseLeave={() => setServicesOpen(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-md border-b ${
          isLight
            ? 'bg-[#F3F3F0]/90 border-black/12 text-[#0A0A0A]'
            : 'bg-[#030303]/88 border-white/12 text-white'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* LEFT: OMNIQOR LOGO MARK + WORDMARK */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-3.5 text-left focus:outline-none cursor-pointer"
          >
            <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden">
              <img
                src={isLight ? '/assets/logo-mark-dark.png' : '/assets/logo-mark-light.png'}
                alt="Omniqor Mark"
                className="w-8 h-8 object-contain transition-transform duration-700 ease-out group-hover:rotate-90 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <img
                src={
                  isLight ? '/assets/logo-wordmark-dark.png' : '/assets/logo-wordmark-light.png'
                }
                alt="omniqor"
                className="h-4 md:h-[18px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
              <span
                className={`font-mono-tech text-[9px] tracking-[0.22em] uppercase mt-0.5 transition-colors duration-500 ${
                  isLight ? 'text-black/45' : 'text-white/45'
                }`}
              >
                CAPABILITIES 2026
              </span>
            </div>
          </button>

          {/* CENTER: PRIMARY NAVIGATION (VISION · SERVICES [DROPDOWN] · ABOUT US · CONTACT) */}
          <nav className="hidden lg:flex items-center">
            <div
              className={`flex items-center border ${
                isLight
                  ? 'border-black/15 bg-black/[0.02]'
                  : 'border-white/15 bg-white/[0.02]'
              }`}
            >
              {/* 1. VISION */}
              <button
                onMouseEnter={() => setServicesOpen(false)}
                onClick={() => handleNavClick('vision')}
                className={`px-5 py-2.5 text-[11px] font-mono-tech uppercase transition-all duration-300 border-r cursor-pointer ${
                  isLight
                    ? 'border-black/15 hover:bg-black hover:text-white'
                    : 'border-white/15 hover:bg-white hover:text-black'
                } ${
                  activeChapter?.id === 'vision'
                    ? isLight
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                    : ''
                }`}
              >
                VISION
              </button>

              {/* 2. SERVICES (DROPDOWN TRIGGER) */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className={`px-5 py-2.5 text-[11px] font-mono-tech uppercase transition-all duration-300 border-r flex items-center gap-2 cursor-pointer ${
                    isLight
                      ? 'border-black/15 hover:bg-black hover:text-white'
                      : 'border-white/15 hover:bg-white hover:text-black'
                  } ${
                    servicesOpen ||
                    activeChapter?.group?.startsWith('01') ||
                    activeChapter?.group?.startsWith('02') ||
                    activeChapter?.group?.startsWith('03')
                      ? isLight
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                      : ''
                  }`}
                >
                  <span>SERVICES</span>
                  <svg
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`w-2.5 h-2.5 transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>

              {/* 3. ABOUT US */}
              <button
                onMouseEnter={() => setServicesOpen(false)}
                onClick={() => handleNavClick('about-us')}
                className={`px-5 py-2.5 text-[11px] font-mono-tech uppercase transition-all duration-300 border-r cursor-pointer ${
                  isLight
                    ? 'border-black/15 hover:bg-black hover:text-white'
                    : 'border-white/15 hover:bg-white hover:text-black'
                } ${
                  activeChapter?.id === 'about-us'
                    ? isLight
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                    : ''
                }`}
              >
                ABOUT US
              </button>

              {/* 4. CONTACT */}
              <button
                onMouseEnter={() => setServicesOpen(false)}
                onClick={() => handleNavClick('contact')}
                className={`px-5 py-2.5 text-[11px] font-mono-tech uppercase transition-all duration-300 cursor-pointer ${
                  isLight
                    ? 'hover:bg-black hover:text-white'
                    : 'hover:bg-white hover:text-black'
                } ${
                  activeChapter?.id === 'contact'
                    ? isLight
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                    : ''
                }`}
              >
                CONTACT
              </button>
            </div>
          </nav>

          {/* RIGHT: INQUIRY CTA + CHAPTER DRAWER + MOBILE HAMBURGER */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 text-[11px] font-mono-tech uppercase transition-all duration-300 cursor-pointer ${
                isLight
                  ? 'bg-[#0A0A0A] text-white hover:bg-black/80'
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              <span>INQUIRE</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              title="All Chapters Index"
              className={`group hidden md:flex items-center gap-2 px-3.5 py-2.5 border text-[11px] font-mono-tech uppercase transition-all duration-300 cursor-pointer ${
                isLight
                  ? 'border-black/20 text-black hover:bg-black hover:text-white'
                  : 'border-white/20 text-white hover:bg-white hover:text-black'
              }`}
            >
              <GridIndexIcon className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-90" />
              <span>INDEX</span>
            </button>

            {/* Mobile Accessible Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className={`lg:hidden flex items-center gap-2 px-3.5 py-2.5 border text-[11px] font-mono-tech uppercase transition-all cursor-pointer ${
                isLight
                  ? 'border-black/20 text-black hover:bg-black hover:text-white'
                  : 'border-white/20 text-white hover:bg-white hover:text-black'
              }`}
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>

        {/* SERVICES MEGA-DROPDOWN PANEL (4 Discoverable Service Areas from PDF Page 03 & 06) */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="hidden lg:block w-full bg-[#070707] text-white border-t border-b border-white/20 shadow-2xl"
            >
              <div className="max-w-[1440px] mx-auto px-12 py-8 grid grid-cols-12 gap-8">
                {/* Left 7 Cols: 4 Service Areas List */}
                <div className="col-span-7 border-r border-white/15 pr-8">
                  <div className="font-mono-tech text-[10px] text-white/45 uppercase mb-4 tracking-[0.18em]">
                    03 / CAPABILITIES — FOUR DISCOVERABLE SERVICE AREAS
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-white/12 border-y border-white/12">
                    {SERVICES_DROPDOWN_ITEMS.map((srv, idx) => {
                      const active = hoveredServiceIdx === idx;
                      return (
                        <button
                          key={srv.num}
                          onMouseEnter={() => setHoveredServiceIdx(idx)}
                          onClick={() => handleNavClick(srv.targetId)}
                          className={`group py-4 px-4 text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                            active
                              ? 'bg-white text-black'
                              : 'bg-transparent text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`font-mono-tech text-xs ${
                                active ? 'text-black/65 font-semibold' : 'text-white/45'
                              }`}
                            >
                              {srv.num}
                            </span>
                            <div>
                              <div className="font-sans text-base font-medium tracking-[-0.01em]">
                                {srv.title}
                              </div>
                              <div
                                className={`font-mono-tech text-[9px] uppercase mt-0.5 ${
                                  active ? 'text-black/60' : 'text-white/40'
                                }`}
                              >
                                {srv.eyebrow}
                              </div>
                            </div>
                          </div>
                          <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right 5 Cols: Active Service Area Capabilities Preview */}
                <div className="col-span-5 flex flex-col justify-between pl-2">
                  {SERVICES_DROPDOWN_ITEMS[hoveredServiceIdx] && (
                    <>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono-tech text-[10px] text-white/50 uppercase">
                            {SERVICES_DROPDOWN_ITEMS[hoveredServiceIdx].eyebrow}
                          </span>
                          <CrosshairIcon className="w-3.5 h-3.5 text-white/50" />
                        </div>

                        <h4 className="font-display text-lg uppercase text-white mb-4">
                          {SERVICES_DROPDOWN_ITEMS[hoveredServiceIdx].title}
                        </h4>

                        <ul className="space-y-2.5 border-t border-white/15 pt-4">
                          {SERVICES_DROPDOWN_ITEMS[hoveredServiceIdx].bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-center gap-2.5 text-sm font-light text-white/80"
                            >
                              <span className="w-1.5 h-1.5 bg-white/60 inline-block" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 border-t border-white/15 flex items-center justify-between">
                        <button
                          onClick={() =>
                            handleNavClick(
                              SERVICES_DROPDOWN_ITEMS[hoveredServiceIdx].capabilitiesTargetId
                            )
                          }
                          className="font-mono-tech text-xs text-white uppercase hover:underline flex items-center gap-2 cursor-pointer"
                        >
                          <span>EXPLORE CAPABILITY MATRIX</span>
                          <ArrowUpRightIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ULTRA-THIN LIVE SCROLL PROGRESS BAR */}
        <div className={`w-full h-[1px] ${isLight ? 'bg-black/10' : 'bg-white/10'}`}>
          <motion.div
            className={`h-full ${isLight ? 'bg-black' : 'bg-white'}`}
            style={{ width: `${Math.max(4, scrollProgress * 100)}%` }}
          />
        </div>
      </header>

      {/* ACCESSIBLE MOBILE NAVIGATION DRAWER (PDF Page 03 Mobile Collapse Requirement) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-0 top-20 z-[65] bg-[#050505] text-white p-6 overflow-y-auto overscroll-contain lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 divide-y divide-white/15 border-y border-white/15">
                <button
                  onClick={() => handleNavClick('vision')}
                  className="py-4 text-left font-display text-base uppercase flex items-center justify-between"
                >
                  <span>VISION</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNavClick('about-us')}
                  className="py-4 text-left font-display text-base uppercase flex items-center justify-between"
                >
                  <span>ABOUT US</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="py-4 text-left font-display text-base uppercase flex items-center justify-between"
                >
                  <span>CONTACT</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>

              <div>
                <div className="font-mono-tech text-[10px] text-white/50 uppercase mb-3">
                  SERVICES (01 — 04)
                </div>
                <div className="space-y-2">
                  {SERVICES_DROPDOWN_ITEMS.map((srv) => (
                    <button
                      key={srv.num}
                      onClick={() => handleNavClick(srv.targetId)}
                      className="w-full p-3.5 border border-white/15 bg-white/[0.03] text-left flex items-center justify-between"
                    >
                      <div>
                        <span className="font-mono-tech text-[10px] text-white/50 mr-2">
                          {srv.num}
                        </span>
                        <span className="text-sm font-medium">{srv.title}</span>
                      </div>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919557964345"
                  className="py-3 bg-white text-black font-mono-tech text-xs text-center uppercase font-medium"
                >
                  CALL +91 95579 64345
                </a>
                <a
                  href="https://wa.me/919557964345"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 border border-white/30 text-white font-mono-tech text-xs text-center uppercase"
                >
                  WHATSAPP
                </a>
              </div>
              {onOpenLegal && (
                <div className="flex flex-wrap gap-3 font-mono-tech text-[10px] text-white/55 uppercase">
                  <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('terms'); }}>
                    Terms
                  </button>
                  <span>·</span>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('privacy'); }}>
                    Privacy
                  </button>
                  <span>·</span>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('cookie'); }}>
                    Cookies
                  </button>
                  <span>·</span>
                  <button onClick={() => { setMobileMenuOpen(false); onOpenLegal('disclaimer'); }}>
                    Disclaimer
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHAPTER INDEX MODAL DRAWER */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/92 backdrop-blur-xl text-white flex flex-col justify-between p-6 md:p-14 overflow-y-auto overscroll-contain"
          >
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between border-b border-white/15 pb-6">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo-mark-light.png"
                  alt="Omniqor"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-mono-tech text-xs text-white/60 uppercase">
                  OMNIQOR / FULL ARCHITECTURE SITEMAP
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="group flex items-center gap-2 px-4 py-2 border border-white/20 text-xs font-mono-tech uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <span>CLOSE</span>
                <CrosshairIcon className="w-3.5 h-3.5 rotate-45" />
              </button>
            </div>

            <div className="max-w-[1440px] w-full mx-auto my-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/15">
              {CHAPTERS.map((chap) => {
                const isCurrent = activeChapter?.id === chap.id;
                return (
                  <button
                    key={chap.id}
                    onClick={() => {
                      onNavigate(chap.id);
                      setDrawerOpen(false);
                    }}
                    className={`group p-5 text-left transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer ${
                      isCurrent
                        ? 'bg-white text-black'
                        : 'bg-[#070707] text-white hover:bg-[#141414]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`font-mono-tech text-xs ${
                          isCurrent ? 'text-black/60' : 'text-white/45'
                        }`}
                      >
                        {chap.number} — {chap.theme.toUpperCase()}
                      </span>
                      <ArrowUpRightIcon className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    </div>
                    <div>
                      <div className="font-display text-xs sm:text-sm tracking-wider uppercase">
                        {chap.label}
                      </div>
                      <div
                        className={`font-mono-tech text-[10px] mt-1 ${
                          isCurrent ? 'text-black/60' : 'text-white/40'
                        }`}
                      >
                        {chap.group}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="max-w-[1440px] w-full mx-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-[11px] font-mono-tech text-white/50">
              <span>COMPANY CAPABILITIES / MONOCHROME EDITION</span>
              {onOpenLegal && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenLegal('terms');
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    TERMS &amp; CONDITIONS
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenLegal('privacy');
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    PRIVACY POLICY
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenLegal('cookie');
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    COOKIE POLICY
                  </button>
                  <span>/</span>
                  <button
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenLegal('disclaimer');
                    }}
                    className="hover:text-white cursor-pointer"
                  >
                    DISCLAIMER
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
