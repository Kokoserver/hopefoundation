"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";
import Link from "next/link";
import type { HomepageContent } from "@/lib/homepage-content";
import { Pause, Play } from "lucide-react";

const SLIDE_INTERVAL_MS = 8000;

export function HeroSection({ content }: { content: HomepageContent["hero"] }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = content.slides.length > 0 ? content.slides : [];
  const currentSlide = slides[current] ?? slides[0];
  const title = currentSlide?.title ?? content.title;
  const description = currentSlide?.description ?? content.description;
  const primaryButton = currentSlide?.primaryButton ?? content.primaryButton;
  const secondaryButton =
    currentSlide?.secondaryButton ?? content.secondaryButton;

  useEffect(() => {
    if (
      slides.length <= 1 ||
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = setInterval(
      () => setCurrent((index) => (index + 1) % slides.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  return (
    <section className="relative mb-8 bg-background px-2 pt-2 sm:mb-10">
      <div className="group relative min-h-[560px] w-full overflow-hidden rounded-b-[34px] sm:min-h-[680px] sm:rounded-b-[56px] lg:min-h-[760px]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-transparent" />
        {slides.length > 1 ? (
          <div className="absolute right-5 top-24 z-10 flex items-center gap-2 sm:right-8 lg:right-[70px] lg:top-[230px] lg:flex-col">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/55 bg-black/25 text-white backdrop-blur-sm transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isPaused ? "Play hero slideshow" : "Pause hero slideshow"}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>
            <div className="hidden h-[128px] w-px overflow-hidden rounded-full bg-white/80 lg:block">
              <div
                className="w-full bg-primary transition-transform duration-700 ease-out"
                style={{
                  height: `${128 / slides.length}px`,
                  transform: `translateY(${current * (128 / slides.length)}px)`,
                }}
              />
            </div>
            <div className="flex gap-1.5 lg:flex-col">
              {slides.map((slide, index) => (
                <button
                  key={`hero-control-${slide.src}`}
                  type="button"
                  aria-label={`Show hero slide ${index + 1}`}
                  aria-current={index === current}
                  className={`h-2.5 w-2.5 rounded-full border border-white/70 transition focus:outline-none focus:ring-2 focus:ring-white ${
                    index === current ? "bg-white" : "bg-white/25"
                  }`}
                  onClick={() => {
                    setCurrent(index);
                    setIsPaused(true);
                  }}
                />
              ))}
            </div>
          </div>
        ) : null}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto grid w-full max-w-[1280px] gap-6 px-5 pb-12 text-white sm:gap-8 sm:px-8 sm:pb-[88px] lg:grid-cols-[1.08fr_0.92fr] lg:px-[72px]">
            <div key={title} className="max-w-xl animate-fade-up">
              <p className="mb-[18px] text-[11px] font-medium text-white">
                {content.eyebrow}
              </p>
              <h1 className="text-[34px] font-bold leading-[1.12] tracking-normal sm:text-[52px] lg:text-[56px]">
                {title}
              </h1>
            </div>
            <div
              key={`${title}-copy`}
              className="animate-fade-up animate-delay-200 max-w-[510px] space-y-[22px] self-end lg:justify-self-end"
            >
              <p className="whitespace-pre-line text-[14px] leading-[1.45] text-white">
                {description}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="h-[42px] rounded-full bg-gold px-[20px] text-[12px] font-bold text-white hover:bg-gold/90 sm:px-[24px]">
                  <Link href={primaryButton.href}>{primaryButton.label}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-[42px] rounded-full border-white bg-black/10 px-[20px] text-[12px] font-bold text-white hover:bg-white/10 hover:text-white sm:px-[24px]"
                ><Link href={secondaryButton.href}>{secondaryButton.label}</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
