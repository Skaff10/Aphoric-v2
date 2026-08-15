"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuExpand, LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

interface ProjectGallery2Props {
  title: string;
  images: string[];
  videos?: string[];
  cover: string;
}

export default function ProjectGallery2({
  title,
  images,
  videos = [],
  cover,
}: ProjectGallery2Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages = images;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14">
      {/* Video Showcase Section (Compact Sizing for Oven & Out) */}
      {videos.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-text/15 pb-3">
            <h3 className="font-display text-2xl sm:text-3xl text-secondary lowercase">
              live showcase & media
            </h3>
            <span className="text-text text-sm lowercase font-sans">
              {videos.length} {videos.length === 1 ? "video" : "videos"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
            {videos.map((vid, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden flex items-center justify-center max-h-200"
              >
                <video
                  src={vid}
                  controls
                  playsInline
                  loop
                  muted
                  autoPlay
                  className="w-full h-full min-h-125 object-contain rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Gallery Section (Compact Multi-Column Grid for Oven & Out) */}
      {galleryImages.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-text/15 pb-3">
            <h3 className="font-display text-2xl sm:text-3xl text-secondary lowercase">
              project gallery
            </h3>
          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((imgSrc, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden  cursor-pointer transition-all duration-300 hover:border-text/40 shadow-lg"
                >
                  <div className="relative w-full h-full overflow-hidden  flex items-center justify-center p-2 min-h-70">
                    <Image
                      src={imgSrc}
                      alt={`${title} showcase ${idx + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto  object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-secondary text-primary px-3.5 py-1.5 rounded-full font-sans text-xs font-semibold flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <LuExpand className="w-3.5 h-3.5" />
                      <span>Expand View</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="w-full max-w-7xl flex items-center justify-between z-10 pt-2">
            
            <button
              onClick={() => setLightboxIndex(null)}
              className="min-h-11 min-w-11 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close fullscreen view"
            >
              <LuX className="w-6 h-6" />
            </button>
          </div>

          {/* Main Image View */}
          <div className="relative w-full max-w-7xl flex-1 flex items-center justify-center my-4 overflow-auto">
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`${title} full view`}
              width={0}
              height={0}
              sizes="100vw"
              className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Navigation Controls */}
          <div className="w-full max-w-7xl flex items-center justify-between z-10 pb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex === 0
                    ? galleryImages.length - 1
                    : lightboxIndex - 1
                );
              }}
              className="min-h-11 px-4 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary flex items-center gap-2 transition-colors cursor-pointer font-sans text-sm"
            >
              <LuChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <span className="text-text/70 text-xs font-sans">
              Use arrow keys to navigate • Esc to close
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex === galleryImages.length - 1
                    ? 0
                    : lightboxIndex + 1
                );
              }}
              className="min-h-11 px-4 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary flex items-center gap-2 transition-colors cursor-pointer font-sans text-sm"
            >
              <span className="hidden sm:inline">Next</span>
              <LuChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
