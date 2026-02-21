"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import HellcatScrollCanvas from "@/components/HellcatScrollCanvas";
import HellcatExperience from "@/components/HellcatExperience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress within the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-hellcat-black min-h-screen selection:bg-hellcat-red selection:text-white">
      <Navbar scrollYProgress={scrollYProgress} />

      {/* SCROLL SEQUENCE (Locked for 600vh) */}
      <section ref={containerRef} className="h-[600vh] relative bg-hellcat-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HellcatScrollCanvas scrollYProgress={scrollYProgress} totalFrames={240} imageFolderPath="/images/hellcat-sequence/" />
          </div>
          <div className="absolute inset-0 z-10">
            <HellcatExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* REST OF SITE */}
      <div className="relative z-20 bg-hellcat-black">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
