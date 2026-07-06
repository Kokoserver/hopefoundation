"use client";

import * as React from "react";
import { Play, X } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";

export function VideoSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative">
      <div className="group relative h-[360px] w-full overflow-hidden sm:h-[520px] lg:h-[640px]">
        <OptimizedImage
          src="/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg"
          alt="Children celebrating — watch our story"
          fill
          quality={90}
          className="image-soft-zoom object-cover object-center"
        />

        <button
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/40 sm:gap-[28px]"
          aria-label="Open video"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex h-16 w-20 items-center justify-center rounded-[18px] bg-[#ff0046] shadow-lg transition hover:scale-105 sm:h-[72px] sm:w-[92px]">
            <Play className="ml-1 h-8 w-8 fill-white text-white sm:h-9 sm:w-9" />
          </div>
          <span className="text-[18px] font-semibold leading-none text-white">
            Watch Video
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Hope Foundation video"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
              aria-label="Close video"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <video
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              poster="/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg"
            >
              <source src="/videos/hope-story.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
