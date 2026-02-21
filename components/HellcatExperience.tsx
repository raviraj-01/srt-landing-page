"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface HellcatExperienceProps {
  scrollYProgress: MotionValue<number>;
}

export default function HellcatExperience({ scrollYProgress }: HellcatExperienceProps) {
  // Ultra-subtle, slow motion mapping
  
  // Phase 1: Hero
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.33], [0, -20]);

  // Phase 2: Craftsmanship
  const designOpacity = useTransform(scrollYProgress, [0.33, 0.4, 0.55, 0.66], [0, 1, 1, 0]);
  const designY = useTransform(scrollYProgress, [0.33, 0.4, 0.55, 0.66], [20, 0, 0, -20]);

  // Phase 3: Engineering Detail
  const engineOpacity = useTransform(scrollYProgress, [0.66, 0.72, 0.9, 1], [0, 1, 1, 0]);
  const engineY = useTransform(scrollYProgress, [0.66, 0.72, 0.9, 1], [20, 0, 0, -20]);

  return (
    <div className="absolute inset-x-0 w-full top-0 bottom-0 pointer-events-none flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
      
      {/* Hero Section */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-x-0 top-[45%] flex flex-col items-center text-center w-full"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#e5e5e5] uppercase font-medium leading-none">
          Challenger <br />
          <span className="text-white/60">SRT Hellcat</span>
        </h1>
        <div className="w-[1px] h-16 bg-white/20 mt-12 mb-8" />
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/50 font-light">
          Supercharged American Muscle
        </p>
      </motion.div>

      {/* Craftsmanship Section */}
      <motion.div
        style={{ opacity: designOpacity, y: designY }}
        className="absolute inset-x-0 top-[45%] flex flex-col items-center text-center w-full"
      >
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-[#e5e5e5] uppercase mb-8">
          Philosophy / Craftsmanship
        </h2>
        <div className="w-12 h-[1px] bg-[#d4af37]/50 mb-8" />
        <p className="font-sans text-sm md:text-base font-light tracking-[0.2em] uppercase text-white/50 max-w-2xl leading-loose">
          A widebody stance born from absolute necessity. Every line, every vent meticulously sculpted to cut through the air and command the road. Precision engineering meets timeless aggression.
        </p>
      </motion.div>

      {/* Engineering Section */}
      <motion.div
        style={{ opacity: engineOpacity, y: engineY }}
        className="absolute inset-x-6 md:inset-x-12 top-[40%] text-center md:text-left flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto"
      >
        <div className="max-w-md mb-12 md:mb-0">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide text-[#e5e5e5] uppercase mb-8">
            Engineering Detail
          </h2>
          <div className="w-12 h-[1px] bg-[#d4af37]/50 mb-8 mx-auto md:mx-0" />
          <p className="font-sans text-sm md:text-base font-light tracking-[0.2em] uppercase text-white/50 leading-loose">
            At its heart lies a masterpiece of mechanical art. A powerplant designed to deliver unyielding performance with absolute composure.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Engine Architecture</p>
          <p className="font-serif text-3xl md:text-4xl text-[#e5e5e5] tracking-wide uppercase mb-6">
            6.2L HEMI V8
          </p>
          
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Peak Output</p>
          <p className="font-mono text-3xl md:text-4xl text-[#d4af37] tracking-wider mb-2">
            717 <span className="text-lg text-white/50 font-sans tracking-[0.2em]">HP</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
