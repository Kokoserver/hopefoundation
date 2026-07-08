"use client";

import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/common/optimized-image";

const SLIDE_INTERVAL_MS = 8000;

export function HeroSlideshow({ slides }: { slides: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(
      () => setCurrent((index) => (index + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <OptimizedImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "eager"}
            quality={75}
            sizes="(min-width: 1920px) 1920px, (min-width: 1280px) 1280px, (min-width: 768px) 768px, 100vw"
            className="image-soft-zoom rounded-none"
            showPlaceholder={false}
          />
        </div>
      ))}
      <div className="absolute right-[70px] top-[230px] hidden h-[128px] w-px overflow-hidden rounded-full bg-white/80 lg:block">
        <div
          className="h-[32px] w-full bg-primary transition-transform duration-700 ease-out"
          style={{ transform: `translateY(${current * 32}px)` }}
        />
      </div>
    </>
  );
}
