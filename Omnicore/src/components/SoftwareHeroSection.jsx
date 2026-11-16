import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MaskedHeadline } from './ScrollChoreography';

export default function SoftwareHeroSection() {
  const canvasRef = useRef(null);
  const [hoveredMode, setHoveredMode] = useState('INTELLIGENCE');
  const speedRef = useRef(0.0045);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angleY = 0.4;
    const tiltX = -0.38;
    const tiltZ = -0.32;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const size = 560;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const project = (x, y, z, cx, cy) => {
      // Rotate around Y
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      let x1 = x * cosY - z * sinY;
      let z1 = z * cosY + x * sinY;
      let y1 = y;

      // Tilt around X
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      let y2 = y1 * cosX - z1 * sinX;
      let z2 = z1 * cosX + y1 * sinX;
      let x2 = x1;

      // Tilt around Z
      const cosZ = Math.cos(tiltZ);
      const sinZ = Math.sin(tiltZ);
      let x3 = x2 * cosZ - y2 * sinZ;
      let y3 = y2 * cosZ + x2 * sinZ;

      return { x: cx + x3, y: cy + y3, z: z2 };
    };

    const render = () => {
      const w = 560;
      const h = 560;
      const cx = w / 2;
      const cy = h / 2 - 10;
      const R = 178;

      ctx.clearRect(0, 0, w, h);

      // 1. Subtle Bottom Floor Shadow (Matches PDF Page 06)
      const shadowGrad = ctx.createRadialGradient(cx, cy + 215, 10, cx, cy + 215, 155);
      shadowGrad.addColorStop(0, 'rgba(255,255,255,0.08)');
      shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 215, 155, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Back half of outer orbital ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.42);
      ctx.beginPath();
      ctx.ellipse(0, 0, 255, 68, 0, Math.PI, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // 3. Shaded 3D Metallic Sphere Base (Matches PDF specular highlight on top-left)
      const sphereGrad = ctx.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.05,
        cx,
        cy,
        R
      );
      sphereGrad.addColorStop(0, 'rgba(235, 235, 235, 0.92)');
      sphereGrad.addColorStop(0.32, 'rgba(135, 135, 135, 0.72)');
      sphereGrad.addColorStop(0.7, 'rgba(42, 42, 42, 0.85)');
      sphereGrad.addColorStop(1, 'rgba(10, 10, 10, 0.96)');

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.stroke();

      // 4. Dense Wireframe Latitude Parallels (24 rings like PDF)
      const latCount = 22;
      for (let i = 1; i < latCount; i++) {
        const phi = (Math.PI * i) / latCount - Math.PI / 2;
        const rRing = R * Math.cos(phi);
        const yRing = R * Math.sin(phi);

        ctx.beginPath();
        const steps = 60;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const px = rRing * Math.cos(theta);
          const pz = rRing * Math.sin(theta);
          const pt = project(px, yRing, pz, cx, cy);
          if (s === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // 5. Dense Wireframe Longitude Meridians (24 meridians like PDF)
      const lonCount = 24;
      for (let j = 0; j < lonCount; j++) {
        const theta = (j / lonCount) * Math.PI;
        ctx.beginPath();
        const steps = 60;
        for (let s = 0; s <= steps; s++) {
          const phi = (s / steps) * Math.PI * 2;
          const px = R * Math.sin(phi) * Math.cos(theta);
          const py = R * Math.cos(phi);
          const pz = R * Math.sin(phi) * Math.sin(theta);
          const pt = project(px, py, pz, cx, cy);
          if (s === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.34)';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // 6. Front half of outer orbital ring + 2 Orbital Telemetry Nodes (Exact PDF Match)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.42);
      ctx.beginPath();
      ctx.ellipse(0, 0, 255, 68, 0, 0, Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Two orbital satellite nodes
      const node1Angle = 0.25 + Math.sin(angleY * 0.8) * 0.15;
      const node2Angle = Math.PI + 0.25 + Math.sin(angleY * 0.8) * 0.15;
      [node1Angle, node2Angle].forEach((na) => {
        const nx = 255 * Math.cos(na);
        const ny = 68 * Math.sin(na);
        ctx.beginPath();
        ctx.arc(nx, ny, 3.8, 0, Math.PI * 2);
        ctx.fillStyle = '#A1A1AA';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      ctx.restore();

      angleY += speedRef.current;
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="software-hero"
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
            02 / SOFTWARE, AI &amp; DIGITAL EXPERIENCES
          </span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-12 my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column (Cols 1-5): Exact PDF Copy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono-tech text-xs text-white/70 uppercase tracking-[0.16em] mb-8">
              PART 02 / THE INTELLIGENCE LAYER
            </div>

            <MaskedHeadline
              lines={['THINK', 'BEYOND.']}
              className="font-display text-[40px] sm:text-[56px] md:text-[68px] xl:text-[78px] leading-[1.06] tracking-[0.02em] uppercase text-white font-normal"
            />

            <p className="mt-7 text-xl sm:text-2xl md:text-[26px] font-light leading-[1.35] text-white/95">
              Intelligent platforms. Human experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 lg:pt-14"
          >
            <p className="text-base sm:text-lg md:text-[20px] font-light leading-[1.6] text-white/70 max-w-[440px]">
              Full-stack software, AI and data solutions—shaped by thoughtful UI/UX design and built
              around real needs.
            </p>

            {/* Interactive Layer Mode Switches */}
            <div className="mt-10 flex flex-wrap items-center gap-2">
              {['INTERFACE', 'INTELLIGENCE', 'INFRASTRUCTURE'].map((mode) => (
                <button
                  key={mode}
                  onMouseEnter={() => {
                    setHoveredMode(mode);
                    speedRef.current = mode === 'INTELLIGENCE' ? 0.012 : 0.006;
                  }}
                  onMouseLeave={() => {
                    speedRef.current = 0.0045;
                  }}
                  onClick={() => setHoveredMode(mode)}
                  className={`px-3 py-1.5 font-mono-tech text-[10px] border transition-all duration-300 cursor-pointer ${
                    hoveredMode === mode
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (Cols 6-12): Interactive 3D Wireframe AI Globe + Framing Corner Brackets */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
          <div
            onMouseEnter={() => {
              speedRef.current = 0.014;
            }}
            onMouseLeave={() => {
              speedRef.current = 0.0045;
            }}
            className="relative w-full max-w-[580px] aspect-square flex items-center justify-center group cursor-grab active:cursor-grabbing"
          >
            {/* Exact PDF Top-Right Corner Architectural L-Bracket */}
            <div className="pointer-events-none absolute top-4 right-4 w-24 h-20 border-t border-r border-white/25 transition-all duration-500 group-hover:w-28 group-hover:h-24 group-hover:border-white/50" />

            {/* Exact PDF Bottom-Left Corner Architectural L-Bracket */}
            <div className="pointer-events-none absolute bottom-10 left-4 w-24 h-24 border-b border-l border-white/25 transition-all duration-500 group-hover:w-28 group-hover:h-28 group-hover:border-white/50" />

            {/* Live 3D Wireframe Sphere Canvas */}
            <canvas
              ref={canvasRef}
              className="w-full h-full max-w-[540px] max-h-[540px] object-contain"
            />
          </div>

          {/* Exact PDF Visual Caption */}
          <div className="mt-2 font-mono-tech text-[11px] sm:text-xs text-white/80 uppercase tracking-[0.16em] text-center">
            CONCEPT VISUAL / ARTIFICIAL INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Bottom PDF Slide Footer Bar */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 md:px-12">
        <div className="pt-5 border-t border-white/20 flex items-center justify-between text-[10px] sm:text-xs font-mono-tech text-white/70 uppercase">
          <span>FROM INTERFACE TO INFRASTRUCTURE</span>
          <span className="text-white font-medium">06 / 12</span>
        </div>
      </div>
    </section>
  );
}
