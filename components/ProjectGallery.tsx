"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuExpand, LuX, LuChevronLeft, LuChevronRight, LuPlay } from "react-icons/lu";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  videos?: string[];
  cover: string;
}

export default function ProjectGallery({
  title,
  images,
  videos = [],
  cover,
}: ProjectGalleryProps) {
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
    <div className="w-full flex flex-col gap-12 sm:gap-16">
      {/* Video Showcase Section */}
      {videos.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-text/15 pb-4">
            <h3 className="font-display text-2xl sm:text-3xl text-secondary lowercase">
              live showcase & media
            </h3>
            <span className="text-text text-sm lowercase font-sans">
              {videos.length} {videos.length === 1 ? "video" : "videos"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((vid, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden border border-text/15 bg-primary/40 aspect-video flex items-center justify-center shadow-2xl"
              >
                <video
                  src={vid}
                  controls
                  playsInline
                  loop
                  muted
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Gallery Section */}
      {galleryImages.length > 0 && (
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-text/15 pb-4">
            <h3 className="font-display text-2xl sm:text-3xl text-secondary lowercase">
              project gallery
            </h3>
            <span className="text-text text-sm lowercase font-sans">
              {galleryImages.length} {galleryImages.length === 1 ? "asset" : "assets"}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {galleryImages.map((imgSrc, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden border border-text/15 bg-primary/30 cursor-pointer transition-all duration-300 hover:border-text/40 shadow-lg w-full"
                >
                  <div className="relative w-full overflow-hidden bg-[#101010]">
                    <Image
                      src={imgSrc}
                      alt={`${title} showcase ${idx + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-secondary text-primary px-4 py-2 rounded-full font-sans text-sm font-semibold flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <LuExpand className="w-4 h-4" />
                      <span>Expand View</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="w-full max-w-7xl flex items-center justify-between z-10 pt-2">
            <span className="text-text font-sans text-sm sm:text-base">
              {title} — {lightboxIndex + 1} of {galleryImages.length}
            </span>
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
