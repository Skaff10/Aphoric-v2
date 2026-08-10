"use client";

import { useEffect, useRef } from "react";

interface PixelImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  duration?: number; // animation length in ms
  startPixelSize?: number; // how blocky it starts (higher = chunkier)
  threshold?: number; // how much of the image must be visible to trigger
  className?: string;
}

export default function PixelImage({
  src,
  alt = "",
  width,
  height,
  duration = 1200,
  startPixelSize = 48,
  threshold = 0.3,
  className = "",
}: PixelImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    const drawPixelated = (pixelSize: number) => {
      ctx.imageSmoothingEnabled = false;

      if (pixelSize <= 1) {
        ctx.drawImage(img, 0, 0, width, height);
        return;
      }

      const scaledW = Math.max(1, Math.floor(width / pixelSize));
      const scaledH = Math.max(1, Math.floor(height / pixelSize));

      // draw a tiny version, then blow that same canvas up —
      // the lack of smoothing is what creates the blocky look
      ctx.drawImage(img, 0, 0, scaledW, scaledH);
      ctx.drawImage(canvas, 0, 0, scaledW, scaledH, 0, 0, width, height);
    };

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = easeOutExpo(t);
        const pixelSize = startPixelSize - (startPixelSize - 1) * eased;
        drawPixelated(pixelSize);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    img.onload = () => {
      drawPixelated(startPixelSize);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
              hasAnimated.current = true;
              animate();
              observer.disconnect();
            }
          });
        },
        { threshold },
      );
      observer.observe(canvas);
    };

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [src, width, height, duration, startPixelSize, threshold]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      role="img"
      className={className}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  );
}
