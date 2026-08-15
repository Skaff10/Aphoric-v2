"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Swap these for your own asset paths / imports
const IMAGES: string[] = ["/logo/aph-logo-bl.svg", "/logo/aph-logo-w.svg"];

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
    <section className="flex flex-col md:flex-row items-center justify-center gap-7 sm:gap-6 md:gap-[clamp(62px,5.42vw,104px)] mb-5 md:mb-[clamp(72px,6.25vw,120px)] px-4">
      <span className="font-extrabold leading-none tracking-tight text-secondary text-7xl sm:text-6xl md:text-7xl lg:text-[clamp(100px,8.54vw,260px)]">
        get in
      </span>

      <div className="relative h-40 w-40 sm:h-24 sm:w-24 md:h-40 md:w-40 lg:h-[clamp(144px,12.5vw,240px)] lg:w-[clamp(144px,12.5vw,240px)] overflow-hidden rounded-lg sm:rounded-xl">
        {IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>

      <span className="font-extrabold leading-none tracking-tight text-secondary text-7xl sm:text-6xl md:text-7xl lg:text-[clamp(100px,8.54vw,260px)]">
        touch
      </span>
    </section>
  );
}
