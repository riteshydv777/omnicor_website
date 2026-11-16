import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { CHAPTERS } from './data/capabilitiesData';
import NavbarHUD from './components/NavbarHUD';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import HardwareHeroSection from './components/HardwareHeroSection';
import HardwareCapabilitiesSection from './components/HardwareCapabilitiesSection';
import HardwareProcessSection from './components/HardwareProcessSection';
import SoftwareHeroSection from './components/SoftwareHeroSection';
import SoftwareCapabilitiesSection from './components/SoftwareCapabilitiesSection';
import UiUxStudioSection from './components/UiUxStudioSection';
import SecurityHeroSection from './components/SecurityHeroSection';
import SecurityCapabilitiesSection from './components/SecurityCapabilitiesSection';
import ConnectedApproachSection from './components/ConnectedApproachSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import {
  LuxuryPreloader,
  CustomReticleCursor,
  FloatingChapterHUD,
} from './components/LuxuryOverlays';
import CapabilityDetailModal from './components/CapabilityDetailModal';
import KineticTicker from './components/KineticTicker';
import EnterpriseFooter from './components/EnterpriseFooter';
import LegalPagesView, { CookieConsentBanner } from './components/LegalPagesView';
import { ScrollChapterWrapper, BlueprintScrollRuler } from './components/ScrollChoreography';

export default function App() {
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCapability, setSelectedCapability] = useState(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      // Detect which section is active in viewport center
      const viewportMid = scrollTop + window.innerHeight * 0.45;
      for (const chap of CHAPTERS) {
        const el = document.getElementById(chap.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (viewportMid >= top && viewportMid < bottom) {
            setActiveChapter(chap);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCapability(null);
        setActiveLegalDoc(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (targetId) => {
    setActiveLegalDoc(null);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white relative">
      {/* 1. Cinematic Preloader + Custom Precision Reticle Cursor + Floating Slide Stepper + Left Blueprint Ruler */}
      <LuxuryPreloader />
      <CustomReticleCursor />
      <BlueprintScrollRuler scrollProgress={scrollProgress} activeChapter={activeChapter} />
      <FloatingChapterHUD activeChapter={activeChapter} onNavigate={handleNavigate} />

      {/* 2. Cookie Consent Bar */}
      <CookieConsentBanner onOpenCookiePolicy={() => setActiveLegalDoc('cookie')} />

      {/* 3. Clickable Capability Deep-Dive Blueprint Drawer */}
      <CapabilityDetailModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
        onConfigure={() => handleNavigate('contact')}
      />

      {/* 4. Full-Screen Legal Pages Reader (Terms, Privacy, Cookie Policy, Disclaimer) */}
      <LegalPagesView
        activeDocKey={activeLegalDoc}
        onSelectDoc={(key) => setActiveLegalDoc(key)}
        onClose={() => setActiveLegalDoc(null)}
      />

      {/* 5. Adaptive Sticky HUD Header with SERVICES Dropdown & Mobile Menu */}
      <NavbarHUD
        activeChapter={activeChapter}
        scrollProgress={scrollProgress}
        onNavigate={handleNavigate}
        onOpenLegal={(key) => setActiveLegalDoc(key)}
      />

      <main>
        {/* PHASE 1: Brand Overview — Pages 01 & 02 */}
        <ScrollChapterWrapper theme="dark">
          <HeroSection onNavigate={handleNavigate} />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="light">
          <VisionSection onNavigate={handleNavigate} />
        </ScrollChapterWrapper>

        {/* Architectural Kinetic Ticker: Part 01 */}
        <KineticTicker
          theme="dark"
          items={[
            '01 / RESEARCH / DESIGN / MANUFACTURE / INTEGRATE',
            'PRODUCT RESEARCH AND DESIGN',
            'BARE PCB MANUFACTURING',
            'PCB ASSEMBLY AND COMPONENT LOADING',
            '3D-PRINTED ENCLOSURES',
            'SYSTEMS INTEGRATION',
            'MANUFACTURING AND DISTRIBUTION',
          ]}
        />

        {/* PHASE 2: Part 01 Hardware Chapter — Pages 03, 04 & 05 */}
        <ScrollChapterWrapper theme="dark">
          <HardwareHeroSection onNavigate={handleNavigate} />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="light">
          <HardwareCapabilitiesSection onSelectCapability={setSelectedCapability} />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="dark">
          <HardwareProcessSection />
        </ScrollChapterWrapper>

        {/* Architectural Kinetic Ticker: Part 02 */}
        <KineticTicker
          theme="dark"
          items={[
            '02 / SOFTWARE / INTELLIGENCE / DATA',
            'FULL-STACK WEB APPLICATIONS',
            'MOBILE APPLICATION DEVELOPMENT',
            'CUSTOM SOFTWARE PLATFORMS',
            'AI AND MACHINE LEARNING',
            'ENTERPRISE DATA AND ANALYTICS',
            '03 / UI/UX & DIGITAL EXPERIENCES',
          ]}
        />

        {/* PHASE 3: Part 02 Software, AI & UI/UX Chapter — Pages 06, 07 & 08 */}
        <ScrollChapterWrapper theme="dark">
          <SoftwareHeroSection />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="light">
          <SoftwareCapabilitiesSection onSelectCapability={setSelectedCapability} />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="dark">
          <UiUxStudioSection onSelectCapability={setSelectedCapability} />
        </ScrollChapterWrapper>

        {/* Architectural Kinetic Ticker: Part 03 */}
        <KineticTicker
          theme="dark"
          items={[
            '04 / PROTECTION / CONSULTING / MANAGEMENT',
            'CYBERSECURITY FRAMEWORKS',
            'SECURITY CONSULTING',
            'DIGITAL DATA PROTECTION',
            'NETWORK VULNERABILITY MITIGATION',
            'INTEGRATED SECURITY INFRASTRUCTURE',
            'SECURITY SYSTEMS MANAGEMENT',
          ]}
        />

        {/* PHASE 4: Part 03 Security & Connected Approach — Pages 09, 10 & 11 */}
        <ScrollChapterWrapper theme="dark">
          <SecurityHeroSection />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="light">
          <SecurityCapabilitiesSection onSelectCapability={setSelectedCapability} />
        </ScrollChapterWrapper>

        <ScrollChapterWrapper theme="light">
          <ConnectedApproachSection />
        </ScrollChapterWrapper>

        {/* Dedicated About OMNIQOR Section (Content Guide Pages 04 & 05) */}
        <ScrollChapterWrapper theme="dark">
          <AboutSection onNavigate={handleNavigate} />
        </ScrollChapterWrapper>

        {/* Upgraded Contact OMNIQOR Section (Content Guide Page 08 + Capabilities Page 12) */}
        <ScrollChapterWrapper theme="dark">
          <ContactSection onNavigate={handleNavigate} />
        </ScrollChapterWrapper>
      </main>

      {/* 6. Global 4-Column Enterprise Footer + Legal Links (Content Guide Page 09) */}
      <EnterpriseFooter
        onNavigate={handleNavigate}
        onSelectCapability={setSelectedCapability}
        onOpenLegal={(key) => setActiveLegalDoc(key)}
      />
    </div>
  );
}
