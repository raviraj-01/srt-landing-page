"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface EngineExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function EngineExperience({ scrollYProgress }: EngineExperienceProps) {
  // Phase 1: Philosophy (0% - 25%)
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 1, 0]);

  // Phase 2: Configuration (25% - 50%)
  const phase2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);

  // Phase 3: Materials (50% - 75%)
  const phase3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);

  // Phase 4: Induction (75% - 100%)
  const phase4Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95, 1], [0, 1, 1, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none text-[#e5e5e5] flex flex-col justify-center overflow-hidden">
      
      {/* Dynamic Overlay Gradient for cinematic depth matching scroll */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-hellcat-black to-transparent opacity-80 z-0"/>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-hellcat-black to-transparent opacity-80 z-0"/>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-12 md:px-24">
        
        {/* Phase 1 (Centered Top) */}
        <motion.div
          style={{ opacity: phase1Opacity }}
          className="absolute inset-x-0 top-[15%] flex flex-col items-center text-center px-6"
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-widest uppercase mb-6 font-semibold">
            Power, engineered with restraint.
          </h2>
          <div className="w-[1px] h-12 bg-white/20 mb-6" />
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-white/50 max-w-lg font-light">
            A meticulous balance of thermal dynamics, structural integrity, and untamed force.
          </p>
        </motion.div>

        {/* Phase 2 (Left Aligned) */}
        <motion.div
          style={{ opacity: phase2Opacity }}
          className="absolute left-12 md:left-24 top-[40%] text-left"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#d4af37]" /> Configuration
          </p>
          <p className="font-mono text-xl md:text-2xl tracking-widest text-[#e5e5e5] uppercase">
            6.2L Supercharged <br/> HEMI V8
          </p>
        </motion.div>

        {/* Phase 3 (Right Aligned) */}
        <motion.div
          style={{ opacity: phase3Opacity }}
          className="absolute right-12 md:right-24 top-[55%] text-right flex flex-col items-end"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-4">
            Materials <span className="w-8 h-[1px] bg-[#d4af37]" />
          </p>
          <p className="font-mono text-xl md:text-2xl tracking-widest text-[#e5e5e5] uppercase text-right">
            Deep-Skirt Cast Iron Block <br/> 
            <span className="text-white/60 text-lg md:text-xl">Aluminum Alloy Heads</span>
          </p>
        </motion.div>

        {/* Phase 4 (Left Aligned Bottom) */}
        <motion.div
          style={{ opacity: phase4Opacity }}
          className="absolute left-12 md:left-24 bottom-[20%] text-left"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-3 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#d4af37]" /> Induction
          </p>
          <p className="font-mono text-xl md:text-2xl tracking-widest text-[#e5e5e5] uppercase">
            Twin-Screw Supercharger <br/>
            <span className="text-[#d4af37] text-lg md:text-xl">11.6 PSI Boost</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
