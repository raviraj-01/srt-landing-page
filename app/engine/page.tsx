"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import EngineScrollCanvas from "@/components/EngineScrollCanvas";
import EngineExperience from "@/components/EngineExperience";

export default function EnginePage() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-hellcat-black min-h-screen selection:bg-[#d4af37] selection:text-black font-sans">
      
      {/* Minimal Navbar for the Engine App */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent mix-blend-difference pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-4 group">
          <div className="w-8 h-[1px] bg-white/50 group-hover:bg-[#d4af37] group-hover:w-12 transition-all duration-500" />
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">
            Return to Overview
          </span>
        </Link>
        <div className="font-serif text-sm tracking-widest text-[#e5e5e5] uppercase font-medium">
          Dodge SRT
        </div>
      </nav>

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative bg-hellcat-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-hellcat-black">
          
          <div className="absolute inset-0 z-0">
            {/* The Canvas responsible for the frame-by-frame exploded engine */}
            <EngineScrollCanvas scrollYProgress={scrollYProgress} />
          </div>
          
          <div className="absolute inset-0 z-10">
            {/* The Text Overlay overlaying the engine */}
            <EngineExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="relative z-20 bg-hellcat-black text-[#e5e5e5] pt-32 pb-48 px-8 md:px-24 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="flex-1">
            <h2 className="font-serif text-3xl md:text-5xl tracking-widest uppercase mb-12">
              The Architecture of Velocity
            </h2>
            <div className="w-16 h-[2px] bg-[#d4af37] mb-12" />
            <p className="font-sans text-base md:text-lg tracking-[0.1em] text-white/70 leading-relaxed mb-8">
              Every millimeter of the SRT Hellcat&apos;s 6.2L Supercharged HEMI V8 is purpose-built to harness combustion and translate it into unrelenting longitudinal force. It is not merely an engine; it is a meticulously calibrated instrument of momentum.
            </p>
            <p className="font-sans text-base md:text-lg tracking-[0.1em] text-white/70 leading-relaxed">
              From the deep-skirt cast-iron cylinder block engineered to withstand colossal internal pressures, to the premium-grade aluminum-alloy cylinder heads that dissipate thermal load, the architecture serves a singular directive: dominating the asphalt while maintaining absolute mechanical composure.
            </p>
          </div>

          <div className="flex-1 border-l border-white/10 pl-8 md:pl-16 flex flex-col justify-center">
            
            <div className="mb-12">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Supercharger System</h3>
              <p className="font-serif text-2xl tracking-wide uppercase text-[#e5e5e5] mb-2">2.4L Twin-Screw</p>
              <p className="font-mono text-sm tracking-wider text-white/50">Delivering 11.6 PSI of instantaneous boost pressure.</p>
            </div>

            <div className="mb-12">
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Crankshaft Dynamics</h3>
              <p className="font-serif text-2xl tracking-wide uppercase text-[#e5e5e5] mb-2">Forged Steel Drive</p>
              <p className="font-mono text-sm tracking-wider text-white/50">Induction-hardened bearing surfaces rated for 13,000 RPM operation.</p>
            </div>

            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Thermal Management</h3>
              <p className="font-serif text-2xl tracking-wide uppercase text-[#e5e5e5] mb-2">High-Capacity Cooling</p>
              <p className="font-mono text-sm tracking-wider text-white/50">Twin intercoolers integrated directly into the supercharger housing.</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
