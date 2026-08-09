"use client";

import { useEffect, useRef, useState, ElementType, CSSProperties } from "react";

interface ScrollWordRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  dimColor?: string;
  brightColor?: string;
  dimOpacity?: number;
  start?: number;
  end?: number;
  overlap?: number;
}

export default function ScrollWordReveal({
  text,
  as: Tag = "p",
  className = "",
  dimColor = "#4b4b52",
  brightColor = "#f5f5f7",
  dimOpacity = 0.35,
  start = 0.85,
  end = 0.35,
  overlap = 1.6,
}: ScrollWordRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    let ticking = false;

    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const startPx = vh * start;
      const endPx = vh * end;
      const raw = (startPx - rect.top) / (startPx - endPx);
      setProgress(Math.min(1, Math.max(0, raw)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(measure);
        ticking = true;
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [start, end]);

  const words = text.split(" ");
  const n = words.length;

  const hexToRgb = (h: string): [number, number, number] => {
    const v = h.replace("#", "");
    return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16)) as [
      number,
      number,
      number,
    ];
  };

  const lerpColor = (t: number) => {
    const [r1, g1, b1] = hexToRgb(dimColor);
    const [r2, g2, b2] = hexToRgb(brightColor);
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const threshold = i / n;
        const band = overlap / n;
        const wp = Math.min(1, Math.max(0, (progress - threshold) / band));
        const opacity = dimOpacity + wp * (1 - dimOpacity);
        const style: CSSProperties = {
          color: lerpColor(wp),
          opacity,
          transition: "opacity 60ms linear, color 60ms linear",
        };
        return (
          <span key={i} style={style}>
            {word}
            {i < n - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
