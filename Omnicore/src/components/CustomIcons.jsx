import React from 'react';

export const CrosshairIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
     className={`transition-transform duration-500 ease-out group-hover:rotate-90 ${className}`}
  >
    <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={`transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
  >
    <path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className={`transition-transform duration-300 ease-out group-hover:translate-x-1 ${className}`}
  >
    <path d="M2.5 8H13.5M9 3.5L13.5 8L9 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
  </svg>
);

export const HardwareCircuitSVG = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <rect x="15" y="15" width="18" height="18" stroke="currentColor" strokeWidth="1.5" className="transition-all duration-500 group-hover:scale-105 origin-center" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    {/* PCB Pins & Traces */}
    <path d="M20 6V15M28 6V15M20 33V42M28 33V42" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 20H15M6 28H15M33 20H42M33 28H42" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="10.5" cy="10.5" r="1.5" fill="currentColor" fillOpacity="0.5" />
    <circle cx="37.5" cy="10.5" r="1.5" fill="currentColor" fillOpacity="0.5" />
    <circle cx="10.5" cy="37.5" r="1.5" fill="currentColor" fillOpacity="0.5" />
    <circle cx="37.5" cy="37.5" r="1.5" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

export const SoftwareAISVG = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" strokeWidth="1.2" className="transition-transform duration-700 group-hover:rotate-45 origin-center" />
    <ellipse cx="24" cy="24" rx="7" ry="18" stroke="currentColor" strokeWidth="1.2" className="transition-transform duration-700 group-hover:-rotate-45 origin-center" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <circle cx="24" cy="6" r="1.8" fill="currentColor" />
    <circle cx="24" cy="42" r="1.8" fill="currentColor" />
    <circle cx="6" cy="24" r="1.8" fill="currentColor" />
    <circle cx="42" cy="24" r="1.8" fill="currentColor" />
  </svg>
);

export const SecurityShieldSVG = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M24 5L39 11V22.5C39 32.5 32.4 40.3 24 43C15.6 40.3 9 32.5 9 22.5V11L24 5Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeOpacity="0.4"
    />
    <path
      d="M24 10L34 14V22C34 29.2 29.6 34.8 24 37C18.4 34.8 14 29.2 14 22V14L24 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
      className="transition-transform duration-500 group-hover:scale-105 origin-center"
    />
    <path d="M24 16V31M18 22L24 26L30 22" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.7" />
    <circle cx="24" cy="22" r="2.2" fill="currentColor" />
  </svg>
);

export const GridIndexIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className}>
    <rect x="2" y="2" width="4.5" height="4.5" stroke="currentColor" strokeWidth="1.2" />
    <rect x="9.5" y="2" width="4.5" height="4.5" stroke="currentColor" strokeWidth="1.2" />
    <rect x="2" y="9.5" width="4.5" height="4.5" stroke="currentColor" strokeWidth="1.2" />
    <rect x="9.5" y="9.5" width="4.5" height="4.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
