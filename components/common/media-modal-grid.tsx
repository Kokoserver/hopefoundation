"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Maximize, Play, Search, Share2, X } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";

export type MediaGridItem = {
  title: string;
  image: string;
  videoUrl?: string;
};

type MediaModalGridProps = {
  items: MediaGridItem[];
  mode: "gallery" | "video";
};

export function MediaModalGrid({ items, mode }: MediaModalGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];
  const closeModal = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex - 1 + items.length) % items.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) =>
          currentIndex === null ? currentIndex : (currentIndex + 1) % items.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, items.length]);

  const previous = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex - 1 + items.length) % items.length
    );
  };

  const next = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % items.length
    );
  };

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className="group relative h-[250px] cursor-pointer overflow-hidden rounded-[10px] bg-[#381800] text-left shadow-sm"
            onClick={() => setActiveIndex(index)}
            data-reveal-child="zoom"
            style={{ "--reveal-index": index } as React.CSSProperties}
          >
            <OptimizedImage src={item.image} alt={item.title} fill quality={90} className="image-soft-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/68 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
            {mode === "video" ? (
              <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_14px_40px_rgba(213,63,52,0.35)]">
                <Play className="h-5 w-5 fill-current" />
              </span>
            ) : (
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#2A1708] opacity-0 transition group-hover:opacity-100">
                <Search className="h-4 w-4" />
              </span>
            )}
            <span className="absolute bottom-4 left-4 right-4 text-center text-[12px] font-semibold text-white">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {activeItem
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={mode === "video" ? "Video player" : "Image lightbox"}
              className="fixed inset-0 z-[9999] bg-black/78 text-white"
              onClick={closeModal}
            >
              <div className="absolute left-4 top-4 text-[13px] text-white/78">
                {activeIndex! + 1} / {items.length}
              </div>
              <div
                className="absolute right-4 top-4 flex items-center gap-4 text-white/82"
                onClick={(event) => event.stopPropagation()}
              >
                <button type="button" aria-label="Fullscreen" className="transition hover:text-white">
                  <Maximize className="h-4 w-4" />
                </button>
                <button type="button" aria-label="Zoom" className="transition hover:text-white">
                  <Search className="h-4 w-4" />
                </button>
                <button type="button" aria-label="Share" className="transition hover:text-white">
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2A1708] shadow-lg transition hover:bg-primary hover:text-white"
                  onClick={closeModal}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <button
                type="button"
                aria-label="Previous item"
                className="absolute left-8 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/82 transition hover:bg-white/10 hover:text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  previous();
                }}
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Next item"
                className="absolute right-8 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white/82 transition hover:bg-white/10 hover:text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              <div
                className={
                  mode === "video"
                    ? "flex h-full items-center justify-center px-6 py-16 sm:px-12"
                    : "flex h-full items-center justify-center px-16 py-14"
                }
              >
                {mode === "video" ? (
                  <div
                    className="aspect-video w-full max-w-[920px] overflow-hidden rounded-[10px] bg-black shadow-2xl"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {activeItem.videoUrl ? (
                      <iframe
                        title={activeItem.title}
                        src={activeItem.videoUrl}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="relative h-full w-full">
                        <OptimizedImage src={activeItem.image} alt={activeItem.title} fill quality={90} />
                        <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                          <Play className="h-6 w-6 fill-current" />
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="relative h-[72vh] w-full max-w-[980px] overflow-hidden rounded-[8px]"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <OptimizedImage src={activeItem.image} alt={activeItem.title} fill quality={90} />
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-black/55 px-6 py-4 text-center text-[12px] font-semibold">
                {activeItem.title}
              </div>
            </div>,
          document.body
        )
        : null}
    </>
  );
}
