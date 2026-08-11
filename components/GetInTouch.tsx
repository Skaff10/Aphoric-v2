"use client";
import { useEffect, useState } from "react";

// Swap these for your own asset paths / imports
const IMAGES: string[] = [
  "/logo/aph-logo-bl.svg",
  "/logo/aph-logo-w.svg",
];

const INTERVAL_MS = 1000;

export default function GetInTouch() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex items-center justify-center gap-4  py-10 sm:gap-6 md:gap-26 mb-30">
      <span className=" font-extrabold leading-none tracking-tight text-secondary text-6xl sm:text-7xl md:text-8xl lg:text-[260px]">
        get in
      </span>

      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-60 lg:w-60">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>

      <span className="font-extrabold leading-none tracking-tight text-secondary text-6xl sm:text-7xl md:text-8xl lg:text-[260px]">
        touch
      </span>
    </section>
  );
}
