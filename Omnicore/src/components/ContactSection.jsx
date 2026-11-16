import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_CONTENT } from '../data/contentGuideData';
import { ArrowUpRightIcon, ArrowRightIcon, CrosshairIcon } from './CustomIcons';

const SERVICE_OPTIONS = [
  '01 — Hardware Engineering & Manufacturing',
  '02 — Software Development & AI',
  '03 — UI/UX & Digital Experiences',
  '04 — Cybersecurity & Integrated Systems',
  'Complete End-to-End Connected Solution',
];

export default function ContactSection({ onNavigate }) {
  const formInputRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: SERVICE_OPTIONS[0],
        message: '',
      });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#000000] text-white pt-24 pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle architectural background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-45" />

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
            04 / GET IN TOUCH — THE NEXT CHAPTER / STARTS WITH YOUR IDEA
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Cols 1-6): Headline + Intro + Get in Touch Table + Quick Actions + 3-Tier Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="font-mono-tech text-xs text-white/75 uppercase tracking-[0.16em] mb-5">
                YOUR AMBITION. OUR CONNECTED CAPABILITIES.
              </div>

              <h2 className="font-display text-[34px] sm:text-[48px] md:text-[60px] xl:text-[68px] leading-[1.08] tracking-[0.02em] uppercase text-white font-normal">
                LET’S BUILD
                <br />
                WHAT’S NEXT.
              </h2>

              <p className="mt-5 text-lg sm:text-xl font-normal text-white/95">
                Start with an idea. Let’s shape what it can become.
              </p>

              <p className="mt-4 text-sm sm:text-base font-light leading-[1.65] text-white/70">
                {CONTACT_CONTENT.intro}
              </p>
            </div>

            {/* Quick Actions Bar (PDF Page 08 Developer Requirement: Call Us | WhatsApp | Email Us | Send Inquiry) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <a
                href="tel:+919557964345"
                className="group py-3 px-3 bg-white text-black font-mono-tech text-[10px] font-semibold uppercase flex items-center justify-between hover:bg-white/90 transition-all"
              >
                <span>CALL US</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919557964345"
                target="_blank"
                rel="noreferrer"
                className="group py-3 px-3 border border-white/30 bg-white/[0.04] text-white font-mono-tech text-[10px] uppercase flex items-center justify-between hover:bg-white hover:text-black transition-all"
              >
                <span>WHATSAPP</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:admin@omniqorpltd.com"
                className="group py-3 px-3 border border-white/20 text-white/80 font-mono-tech text-[10px] uppercase flex items-center justify-between hover:bg-white hover:text-black transition-all"
              >
                <span>EMAIL US</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => formInputRef.current?.focus()}
                className="group py-3 px-3 border border-white/20 text-white/80 font-mono-tech text-[10px] uppercase flex items-center justify-between hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                <span>SEND INQUIRY</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Get in Touch Table (Exact PDF Page 08 Structure) */}
            <div className="border-t border-white/20 pt-6">
              <div className="font-mono-tech text-xs text-white uppercase mb-4 tracking-[0.14em]">
                GET IN TOUCH
              </div>

              <div className="border border-white/15 divide-y divide-white/15 bg-[#080808]">
                {CONTACT_CONTENT.details.map((row) => (
                  <a
                    key={row.label}
                    href={row.href}
                    className="group p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="font-mono-tech text-[11px] text-white/50 uppercase w-32">
                      {row.label}
                    </span>
                    <span className="flex-1 font-sans text-sm sm:text-base font-medium text-white group-hover:underline">
                      {row.value}
                    </span>
                    <span className="font-mono-tech text-[9px] text-white/40 group-hover:text-white uppercase flex items-center gap-1">
                      <span>{row.actionLabel}</span>
                      <ArrowUpRightIcon className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Inquiries Note + Compact 3-Tier Stack Preview */}
            <div className="p-5 border border-white/15 bg-[#070707] flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/assets/dark_contact-stack.png"
                alt="Omniqor 3-Tier Connected Stack"
                className="w-28 h-28 object-contain shrink-0"
              />
              <div>
                <div className="font-mono-tech text-xs text-white uppercase mb-1.5">
                  BUSINESS INQUIRIES
                </div>
                <p className="text-xs sm:text-sm font-light leading-[1.6] text-white/70">
                  {CONTACT_CONTENT.businessInquiriesText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Cols 7-12): 6-Field Business Inquiry Form (PDF Page 08) */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="border border-white/20 bg-[#080808] p-7 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-white/15 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo-mark-light.png"
                    alt="Omniqor"
                    className="w-6 h-6 object-contain"
                  />
                  <div>
                    <div className="font-display text-sm uppercase text-white">
                      PROJECT &amp; BUSINESS INQUIRY
                    </div>
                    <div className="font-mono-tech text-[10px] text-white/50 uppercase">
                      DIRECT ENGINEERING &amp; ADVISORY DESK
                    </div>
                  </div>
                </div>
                <CrosshairIcon className="w-4 h-4 text-white/50" />
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto border border-white flex items-center justify-center">
                    <CrosshairIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-white">
                    INQUIRY TRANSMITTED.
                  </h3>
                  <p className="text-sm font-light text-white/70 max-w-md mx-auto">
                    Thank you for reaching out to OMNIQOR. Our team will review your project
                    details and respond shortly. For urgent discussions, call or WhatsApp{' '}
                    <span className="text-white font-medium">+91 95579 64345</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1 & 2: Full Name + Company / Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                        01 / FULL NAME *
                      </label>
                      <input
                        ref={formInputRef}
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                        02 / COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Organization or venture name"
                        className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 3 & 4: Email Address + Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                        03 / EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                        04 / PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 5: Service Interested In */}
                  <div>
                    <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                      05 / SERVICE INTERESTED IN *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-black text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field 6: Project Details / Message */}
                  <div>
                    <label className="block font-mono-tech text-[10px] text-white/60 uppercase mb-2">
                      06 / PROJECT DETAILS / MESSAGE *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your idea, hardware/software specifications, security requirements, or partnership inquiry..."
                      className="w-full px-4 py-3 bg-black border border-white/20 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button: SEND INQUIRY (Exact PDF Page 08 Form Button Label) */}
                  <button
                    type="submit"
                    className="group w-full py-4 bg-white text-black font-mono-tech text-xs font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-3 hover:bg-white/90 transition-all cursor-pointer"
                  >
                    <span>SEND INQUIRY</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Slide Footer Bar (Closing Statement from PDF Page 08 & Page 12) */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono-tech text-white/75 uppercase">
          <span>{CONTACT_CONTENT.closingStatement}</span>
          <span className="text-white font-medium">12 / 12 — CONTACT OMNIQOR</span>
        </div>
      </div>
    </section>
  );
}
