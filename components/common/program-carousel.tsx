"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Landmark } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";

export type ProgramCarouselItem = {
  category: string;
  title: string;
  image: string;
};

type ProgramCarouselProps = {
  programs: ProgramCarouselItem[];
};

export function ProgramCarousel({ programs }: ProgramCarouselProps) {
  const [activePage, setActivePage] = useState(0);
  const carouselPrograms = [...programs, ...programs];
  const pages = Math.max(1, Math.ceil(programs.length / 2));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePage((currentPage) => (currentPage + 1) % pages);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [pages]);

  return (
    <div className="group overflow-hidden">
      <div
        className="flex w-max gap-5 motion-safe:animate-[marquee-scroll_30s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        aria-label="Latest programs carousel"
      >
        {carouselPrograms.map((program, index) => (
          <Link
            key={`${program.title}-${index}`}
            href={`/programs/${(index % programs.length) + 1}`}
            className="w-[calc(100vw-48px)] shrink-0 overflow-hidden rounded-[10px] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:w-[455px]"
            data-reveal-child="zoom"
            style={{ "--reveal-index": index % programs.length } as React.CSSProperties}
          >
            <div className="relative h-[235px]">
              <OptimizedImage src={program.image} alt={program.title} fill quality={90} />
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-[11px] text-[#697084]">
                <Landmark className="h-4 w-4 text-[#2A1708]" />
                {program.category}
              </p>
              <h3 className="mt-5 min-h-12 text-[13px] font-semibold leading-snug text-[#2A1708]">
                {program.title}
              </h3>
              <span className="mt-5 inline-flex w-full items-center gap-1 border-t border-[#e8e8e8] pt-5 text-[12px] font-semibold text-[#2A1708]">
                Read More <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2" aria-label="Program carousel slides">
        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show program group ${index + 1}`}
            aria-current={index === activePage ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === activePage ? "w-7 bg-primary" : "w-2.5 bg-[#d9dadd] hover:bg-primary/35"
            }`}
            onClick={() => setActivePage(index)}
          />
        ))}
      </div>
    </div>
  );
}
