"use client";

import * as React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/common/optimized-image";

const testimonials = [
  {
    name: "Life Changing Turnaround",
    paragraphs: [
      "When Grace lost her husband, raising three children alone became almost impossible.",
      "Through community support, vocational training, and mentorship, she rebuilt her confidence, started a small business, and today supports not only her own family but mentors other women in her community.",
      "Hope spreads when opportunity is shared.",
    ],
    image: "/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg",
  },
  {
    name: "Dreams Come True",
    paragraphs: [
      "The support I received through this foundation changed my life.",
      "I now have the skills to support my family and contribute to my community.",
      "Every story begins with a chance.",
    ],
    image: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg",
  },
  {
    name: "Real Change",
    paragraphs: [
      "Watching the impact of these programs in my community has been inspiring.",
      "The foundation truly cares about sustainable change and long-term dignity.",
      "Real change grows through people.",
    ],
    image: "/images/94e1204421b9dc987ed980d38d79ae0374fc1c72.jpg",
  },
];

export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());

    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="bg-white py-12 text-foreground sm:py-[54px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10 lg:px-[88px]">
        <h2 className="mb-8 text-center text-[28px] font-bold leading-tight text-[#17191f] sm:mb-[34px] sm:text-[32px] sm:leading-none">
          Real people. Real change.
        </h2>

        <Carousel setApi={setApi} className="relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-0 bg-transparent shadow-none">
                  <CardContent className="grid items-center gap-8 p-0 md:grid-cols-[256px_1fr] lg:gap-[34px] lg:px-[142px]">
                    <div className="relative mx-auto h-[260px] w-full max-w-[256px] overflow-hidden rounded-[12px] sm:h-[290px]">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        loading="eager"
                        quality={90}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="max-w-[560px] text-center text-[#17191f] md:text-left">
                      <h3 className="mb-[18px] text-[18px] font-bold leading-none">
                        {testimonial.name}
                      </h3>
                      <div className="space-y-[14px] text-[12px] font-normal leading-[1.45]">
                        {testimonial.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="mt-[28px] flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-[26px] md:items-start">
                        <Button className="h-[36px] rounded-full bg-gold px-[18px] text-[11px] font-bold text-white hover:bg-gold/90">
                          Watch Full Story
                          <ArrowUpRight className="ml-1.5 h-3 w-3" />
                        </Button>
                        <button className="text-[11px] font-bold text-gold transition hover:text-gold/80">
                          Read More Stories
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <button
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-[#17191f] transition hover:text-[#17191f]/70 disabled:opacity-25 sm:block"
            aria-label="Previous testimonial"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-[34px] w-[34px] stroke-[1.8]" />
          </button>
          <button
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[#17191f] transition hover:text-[#17191f]/70 disabled:opacity-25 sm:block"
            aria-label="Next testimonial"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-[34px] w-[34px] stroke-[1.8]" />
          </button>
        </Carousel>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? "w-6 bg-gold" : "w-2.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
