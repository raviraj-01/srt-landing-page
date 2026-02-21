"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface EngineScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function EngineScrollCanvas({ scrollYProgress }: EngineScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const TotalFrames = 184;

  // Exact 1:1 mapping from scrollYProgress (0 to 1) to frame index (1 to 240)
  // Linear progression without easing, as requested.
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TotalFrames]);

  useEffect(() => {
    // 1. Preload all images
    let loadedCount = 0;
    const loadImages = () => {
      for (let i = 1; i <= TotalFrames; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/images/engine-frames/ezgif-frame-${paddedIndex}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          // Only wait for the first ~5 frames to render the canvas initially so it doesn't look broken
          if (loadedCount >= Math.min(TotalFrames, 5) && !imagesLoaded) {
            setImagesLoaded(true);
          }
        };
        imagesRef.current[i] = img;
      }
    };

    loadImages();
  }, [TotalFrames, imagesLoaded]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-DPI displays for sharp rendering
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);
      renderFrame(frameIndex.get());
    };

    const renderFrame = (index: number) => {
      // Ensure index is within bounds and rounded to nearest integer
      const safeIndex = Math.min(Math.max(1, Math.round(index)), TotalFrames);
      const img = imagesRef.current[safeIndex];

      if (img && canvas) {
        // Clear previous frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect ratio to "contain" the engine in the center
        // The engine frames should maintain their aspect ratio and fit within the screen.
        const parentRect = canvas.parentElement?.getBoundingClientRect();
        if(!parentRect) return;

        const cw = parentRect.width;
        const ch = parentRect.height;
        const iw = img.width;
        const ih = img.height;

        const hRatio = cw / iw;
        const vRatio = ch / ih;
        
        // Use Math.min to contain the entire image
        const ratio = Math.min(hRatio, vRatio);
        
        const centerShiftX = (cw - iw * ratio) / 2;
        const centerShiftY = (ch - ih * ratio) / 2;

        ctx.drawImage(
          img,
          0,
          0,
          iw,
          ih,
          centerShiftX,
          centerShiftY,
          iw * ratio,
          ih * ratio
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Subscribe to scrollYProgress changes to re-render the canvas
    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(latest));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [imagesLoaded, frameIndex]);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-hellcat-black">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-hellcat-black text-[#e5e5e5] font-sans tracking-widest text-sm uppercase">
          Loading Technical Data...
        </div>
      )}
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* Dim overlay to match the high-contrast matte aesthetic */}
      <div className="absolute inset-0 bg-hellcat-black mix-blend-color saturate-0 opacity-20 pointer-events-none" />
    </div>
  );
}
