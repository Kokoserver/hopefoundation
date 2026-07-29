"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { Quote, Star } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";

const testimonials = [
  {
    quote:
      "I’ve been supporting this organization for a year, and I’m truly impressed by their transparency and dedication. The impact report updates and direct programs give me confidence my contribution is making a real difference.",
    name: "Jenny Wilson",
    role: "Corporate Partner",
    image: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  },
  {
    quote:
      "Volunteering with the team showed me how organized and compassionate their work is. Every outreach is planned with care, and families receive practical help with dignity.",
    name: "Marvin McKinney",
    role: "Monthly Donor",
    image: "/images/new/chief.a.u.achebe_20220403_p_2808307974990542593_8_2808307969093477935.webp.jpeg",
  },
  {
    quote:
      "The foundation’s education support helped children in our community stay in school. The communication was clear, and the results were visible very quickly.",
    name: "Kathryn Murphy",
    role: "Community Partner",
    image: "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  },
];

export function TestimonialCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-[464px]">
      <div key={testimonial.name} className="flex min-h-[320px] flex-col motion-safe:animate-fade-up">
        <div
          className="relative"
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setCursorPosition(null)}
        >
          <span
            className={`pointer-events-none absolute z-10 h-2.5 w-2.5 rounded-full bg-primary transition-opacity duration-150 ${
              cursorPosition ? "opacity-100" : "opacity-0"
            }`}
            style={
              {
                left: cursorPosition?.x ?? 0,
                top: cursorPosition?.y ?? 0,
                transform: "translate(-50%, -50%)",
              } as CSSProperties
            }
            aria-hidden="true"
          />
          <div className="mb-14 flex items-start justify-between gap-6">
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <Quote className="h-12 w-12 fill-[#e5e7eb] text-[#e5e7eb]" />
          </div>
          <p className="text-[22px] font-semibold leading-[1.55] tracking-[-0.035em] text-[#2A1708]">“{testimonial.quote}”</p>
        </div>
        <div className="mt-14 border-t border-[#e5e7eb] pt-8">
          <div className="flex items-center gap-4">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <OptimizedImage src={testimonial.image} alt={testimonial.name} fill quality={80} />
            </span>
            <span>
              <strong className="block text-[20px] font-semibold leading-tight text-[#2A1708]">{testimonial.name}</strong>
              <span className="mt-1 block text-[16px] leading-tight text-[#697084]">{testimonial.role}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="sr-only" aria-label="Testimonial slides">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-7 bg-primary" : "w-2.5 bg-[#d9dadd] hover:bg-primary/35"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
