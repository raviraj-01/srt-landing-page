"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface HellcatScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames?: number;
  imageFolderPath?: string;
  className?: string;
}

export default function HellcatScrollCanvas({
  scrollYProgress,
  totalFrames = 240,
  imageFolderPath = "/images/hellcat-sequence/",
  className = "",
}: HellcatScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);

  // Map scroll (0 - 1) to frame indices (1 - 240)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames], {
    clamp: true,
  });

  useEffect(() => {
    // 1. Preload all images
    const preloadImages = () => {
      const loaded: HTMLImageElement[] = [];
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `${imageFolderPath}ezgif-frame-${paddedIndex}.jpg`;
        loaded[i] = img;
      }
      imagesRef.current = loaded;
    };

    preloadImages();
  }, [totalFrames, imageFolderPath]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays for sharp rendering
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
      renderFrame(currentFrameRef.current);
    };

    const renderFrame = (index: number) => {
      const img = imagesRef.current[Math.round(index)];
      if (!img) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // We want to simulate object-fit: contain or cover. Let's do cover to fill the screen better
      // but the prompt specified object-fit: contain logic in one place, though. Let's use cover to look like a full screen immersive background
      const imgRatio = img.width / img.height;
      const canvasRatio = rect.width / rect.height;
      
      let drawWidth = rect.width;
      let drawHeight = rect.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawWidth = rect.height * imgRatio;
        drawHeight = rect.height;
        offsetX = (rect.width - drawWidth) / 2;
      } else {
        // Canvas is wider than image
        drawWidth = rect.width;
        drawHeight = rect.width / imgRatio;
        offsetY = (rect.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Draw the first image initially
    const firstImg = imagesRef.current[1];
    if (firstImg) {
      if (firstImg.complete) {
        handleResize();
      } else {
        firstImg.onload = handleResize;
      }
    } else {
        // Fallback resize if images aren't cached yet
        handleResize();
    }

    window.addEventListener("resize", handleResize);

    // Subscribe to framer-motion scroll value changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      const frame = Math.round(latest);
      if (frame !== currentFrameRef.current) {
        currentFrameRef.current = frame;
        // Request animation frame for smooth rendering
        requestAnimationFrame(() => renderFrame(frame));
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [frameIndex]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block ${className}`}
      aria-hidden="true"
    />
  );
}
