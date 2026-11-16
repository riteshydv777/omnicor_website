import React from 'react';

export default function KineticTicker({ items, theme = 'dark' }) {
  const isLight = theme === 'light';
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden border-y py-3 select-none ${
        isLight
          ? 'bg-[#EAEAE5] border-black/15 text-[#0A0A0A]'
          : 'bg-[#070707] border-white/15 text-white'
      }`}
    >
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.2em] opacity-75">
              {text}
            </span>
            <span className="ml-12 opacity-30 font-mono-tech text-xs">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
