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
  quality?: number; // passed to Next.js image optimizer, default 75
}

// Builds a URL that goes through Next.js's built-in image optimizer
// (the same one <Image> uses under the hood), so we still get
// AVIF/WebP negotiation + correct sizing even though we're loading
// this manually into a canvas instead of using <Image>.
function getOptimizedSrc(src: string, width: number, quality: number) {
  // Next's optimizer only applies to same-origin/whitelisted sources.
  // Round width up to the nearest Next.js default device size bucket
  // so we hit the cache instead of generating a one-off variant.
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  const targetWidth =
    deviceSizes.find((w) => w >= width) ?? deviceSizes[deviceSizes.length - 1];

  return `/_next/image?url=${encodeURIComponent(src)}&w=${targetWidth}&q=${quality}`;
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
  quality = 75,
}: PixelImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const hasStarted = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Render at device pixel ratio so the final settled image is
    // crisp on retina, without over-fetching an oversized source.
    const dpr =
      typeof window !== "undefined"
        ? Math.min(window.devicePixelRatio || 1, 2)
        : 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Immediate lightweight placeholder so there's no blank flash
    // while we wait to even start loading (real perceived-speed win).
    ctx.fillStyle = "#e5e5e5";
    ctx.fillRect(0, 0, width, height);

    let observer: IntersectionObserver | null = null;
    let img: HTMLImageElement | null = null;

    const drawPixelated = (image: HTMLImageElement, pixelSize: number) => {
      ctx.imageSmoothingEnabled = false;

      if (pixelSize <= 1) {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0, width, height);
        return;
      }

      const scaledW = Math.max(1, Math.floor(width / pixelSize));
      const scaledH = Math.max(1, Math.floor(height / pixelSize));

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, scaledW, scaledH);
      ctx.drawImage(
        canvas,
        0,
        0,
        scaledW * dpr,
        scaledH * dpr,
        0,
        0,
        width,
        height,
      );
    };

    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (image: HTMLImageElement) => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = easeOutExpo(t);
        const pixelSize = startPixelSize - (startPixelSize - 1) * eased;
        drawPixelated(image, pixelSize);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const startLoadAndAnimate = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      img = new window.Image();
      img.crossOrigin = "anonymous";
      img.decoding = "async";

      img.fetchPriority = "low";

      img.onload = () => {
        if (img) animate(img);
      };
      img.onerror = () => {
        // Fail quietly to the placeholder rather than throwing -
        // a broken canvas is worse than a grey box.
        console.warn(`PixelImage: failed to load ${src}`);
      };

      img.src = getOptimizedSrc(src, width * dpr, quality);
    };

    // Single observer now gates BOTH the network fetch and the
    // animation. Nothing loads until the canvas is actually near
    // the viewport - this is the real lazy-loading fix.
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startLoadAndAnimate();
            observer?.disconnect();
          }
        });
      },
      { threshold, rootMargin: "200px" }, // start slightly before it's on screen
    );
    observer.observe(canvas);

    return () => {
      observer?.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (img) {
        img.onload = null;
        img.onerror = null;
      }
    };
  }, [src, width, height, duration, startPixelSize, threshold, quality]);

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
