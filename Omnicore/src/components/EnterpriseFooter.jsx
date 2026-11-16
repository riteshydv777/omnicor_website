import React from 'react';
import {
  HARDWARE_CAPABILITIES,
  SOFTWARE_CAPABILITIES,
  UX_CAPABILITIES,
  SECURITY_CAPABILITIES,
} from '../data/capabilitiesData';
import { ArrowUpRightIcon, CrosshairIcon } from './CustomIcons';

export default function EnterpriseFooter({
  onNavigate,
  onSelectCapability,
  onOpenLegal,
}) {
  return (
    <footer className="relative w-full bg-[#030303] text-white border-t border-white/20 pt-16 pb-12 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Row: OMNIQOR Brand Statement (Exact PDF Page 09) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/15">
          <div className="flex items-center gap-5">
            <img
              src="/assets/logo-mark-light.png"
              alt="Omniqor Mark"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo-wordmark-light.png"
                  alt="omniqor"
                  className="h-5 w-auto object-contain"
                />
                <span className="font-mono-tech text-[10px] text-white/40 uppercase">
                  // CAPABILITIES 2026
                </span>
              </div>
              <p className="text-sm sm:text-base font-light text-white/80 mt-1.5">
                Hardware. Intelligence. Security. Designed as one.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919557964345"
              className="px-4 py-2.5 bg-white text-black font-mono-tech text-[10px] font-semibold uppercase hover:bg-white/90 transition-all"
            >
              +91 95579 64345
            </a>
            <a
              href="https://wa.me/919557964345"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 border border-white/25 font-mono-tech text-[10px] uppercase hover:bg-white hover:text-black transition-all"
            >
              WHATSAPP
            </a>
            <button
              onClick={() => onNavigate('hero')}
              className="px-4 py-2.5 border border-white/20 font-mono-tech text-[10px] uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              TOP ↑
            </button>
          </div>
        </div>

        {/* Primary 4-Column Global Footer Structure (Exact PDF Page 09: COMPANY / SERVICES / RESOURCES / GET IN TOUCH) */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/15">
          {/* Column 1: COMPANY */}
          <div>
            <div className="font-mono-tech text-xs font-semibold text-white uppercase tracking-[0.16em] mb-5">
              COMPANY
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vision')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Our Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('connected-approach')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Our Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <div className="font-mono-tech text-xs font-semibold text-white uppercase tracking-[0.16em] mb-5">
              SERVICES
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('hardware-hero')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Hardware
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('software-hero')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Software &amp; AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('uiux-studio')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security-hero')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Cybersecurity
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div>
            <div className="font-mono-tech text-xs font-semibold text-white uppercase tracking-[0.16em] mb-5">
              RESOURCES
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Capabilities 2026
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Project Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm font-light text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Business Partnerships
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH */}
          <div>
            <div className="font-mono-tech text-xs font-semibold text-white uppercase tracking-[0.16em] mb-5">
              GET IN TOUCH
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919557964345"
                  className="text-sm font-light text-white/85 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span>+91 95579 64345</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@omniqorpltd.com"
                  className="text-sm font-light text-white/75 hover:text-white flex items-center gap-2 transition-colors break-all"
                >
                  <span>admin@omniqorpltd.com</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919557964345"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-light text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li className="text-sm font-light text-white/55">
                Dehradun, India
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Capabilities Blueprint Matrix (Quick Deep-Dive Index) */}
        <div className="py-8 border-b border-white/10">
          <div className="font-mono-tech text-[10px] text-white/40 uppercase mb-4">
            CAPABILITY BLUEPRINTS (01/01 — 03/06) // CLICK TO INSPECT SPECIFICATIONS
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ...HARDWARE_CAPABILITIES,
              ...SOFTWARE_CAPABILITIES,
              ...UX_CAPABILITIES,
              ...SECURITY_CAPABILITIES,
            ].map((cap) => (
              <button
                key={cap.code}
                onClick={() => onSelectCapability && onSelectCapability(cap)}
                className="px-2.5 py-1 border border-white/12 bg-white/[0.02] hover:bg-white hover:text-black font-mono-tech text-[9px] text-white/60 transition-all cursor-pointer"
              >
                {cap.code} · {cap.title}
              </button>
            ))}
          </div>
        </div>

        {/* LEGAL LINKS + COPYRIGHT + ENGINEER WHAT'S NEXT (Exact PDF Page 09) */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono-tech text-[10px] text-white/45 uppercase">
              LEGAL LINKS
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-light text-white/80">
              <button
                onClick={() => onOpenLegal && onOpenLegal('terms')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => onOpenLegal && onOpenLegal('privacy')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => onOpenLegal && onOpenLegal('cookie')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Cookie Policy
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => onOpenLegal && onOpenLegal('disclaimer')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Disclaimer
              </button>
            </div>
          </div>

          <div className="md:text-right space-y-1.5">
            <div className="font-display text-sm sm:text-base uppercase tracking-[0.14em] text-white">
              ENGINEER WHAT’S NEXT.
            </div>
            <div className="font-mono-tech text-[10px] text-white/50 uppercase">
              © 2026 OMNIQOR. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
