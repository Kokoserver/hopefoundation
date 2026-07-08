"use client";

import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/common/optimized-image";

const slides = [
  {
    src: "/images/hero/hero-main.png",
    alt: "Adult teaching child — Achebe Hope Foundation",
  },
  {
    src: "/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg",
    alt: "Children celebrating together",
  },
  {
    src: "/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg",
    alt: "Community gathering",
  },
  {
    src: "/images/a3ecc4c3dc7dd5d41521f02dad48e05a77067ce5.jpg",
    alt: "Children in the community supported by Achebe Hope Foundation",
  },
];

const SLIDE_INTERVAL_MS = 8000;

export function HeroSlideshow() {
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
  }, []);

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
