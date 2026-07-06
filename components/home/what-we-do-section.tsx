import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

const programs = [
  {
    title: "Education",
    description:
      "Creating learning opportunities through school support, educational resources, scholarships, and community learning initiatives.",
  },
  {
    title: "Women Empowerment",
    description:
      "Providing skills development, entrepreneurial support, mentorship, and economic opportunities for women.",
  },
  {
    title: "Children & Orphanages",
    description:
      "Supporting orphanages and vulnerable children with care, education, welfare programs, and safe environments.",
  },
  {
    title: "Community Development",
    description:
      "Partnering with local leaders to improve health, infrastructure, leadership, and sustainable community initiatives.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="bg-white py-12 sm:py-[72px]">
      <div className="mx-auto max-w-[1390px] px-6 sm:px-10 lg:px-[72px]">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-[42px]">
          <h2 className="text-[34px] font-bold leading-none tracking-normal text-[#17191f] sm:text-[54px]">
            What We Do
          </h2>
          <Button className="hidden h-[52px] rounded-full bg-gold px-[30px] text-[16px] font-bold text-white hover:bg-gold/90 sm:inline-flex">
            Our Work
          </Button>
        </div>

        <div className="mb-10 grid gap-3 sm:mb-[54px] md:grid-cols-3 md:gap-1">
          <div className="group relative h-[210px] overflow-hidden rounded-[16px] md:h-[300px]">
            <OptimizedImage
              src="/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg"
              alt="Children learning in the classroom"
              fill
              quality={90}
              className="image-soft-zoom object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white/85 to-transparent" />
          </div>
          <div className="group relative h-[210px] overflow-hidden rounded-[16px] md:h-[300px]">
            <OptimizedImage
              src="/images/ebde0f20909875bfb504427887ada502c3c38648.jpg"
              alt="Women empowerment program"
              fill
              quality={90}
              className="image-soft-zoom object-cover object-center"
            />
          </div>
          <div className="group relative h-[210px] overflow-hidden rounded-[16px] md:h-[300px]">
            <OptimizedImage
              src="/images/a71acae314d01270a85bf4733d98aa5afb33aff4.jpg"
              alt="Community development program"
              fill
              quality={90}
              className="image-soft-zoom object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white/85 to-transparent" />
          </div>
        </div>

        <div className="grid gap-x-[34px] gap-y-[34px] md:grid-cols-2">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover-lift min-h-[162px] rounded-[20px] border-0 bg-gold shadow-none"
            >
              <CardContent className="p-6 sm:p-[30px]">
                <h3 className="mb-4 text-[21px] font-bold leading-none text-white sm:mb-[20px] sm:text-[24px]">
                  {program.title}
                </h3>
                <p className="text-[15px] leading-[1.45] text-white sm:text-[18px]">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
