import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

const galleryImages = [
  {
    src: "/images/new/cd7684054ec5036b88f97615ab12d5a2.jpg.jpeg",
    alt: "Children learning in the classroom",
  },
  {
    src: "/images/generated/foundation-education-branded.png",
    alt: "Women empowerment programme",
  },
  {
    src: "/images/new/18d3102e58527d82295a9d108a101405.jpg.jpeg",
    alt: "Community development programme",
  },
  {
    src: "/images/new/8c7e6f87be07cbf3341a2cdd6184c25d.jpg.jpeg",
    alt: "Women's vocational skills training",
  },
  {
    src: "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
    alt: "Children in the community supported by Achebe Hope Foundation",
  },
  {
    src: "/images/generated/foundation-outreach-branded.png",
    alt: "Community gathering",
  },
];

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
      "Supporting orphanages and vulnerable children with care, education, welfare programmes, and safe environments.",
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
          <h2 className="text-[38px] font-bold leading-none tracking-normal text-[#17191f] sm:text-[64px]">
            What We Do<span className="text-primary">.</span>
          </h2>
          <Button
            asChild
            className="hidden h-[52px] rounded-full bg-gold px-[30px] text-[16px] font-bold !text-white hover:bg-gold/90 sm:inline-flex"
          >
            <Link href="/projects">Our Work</Link>
          </Button>
        </div>

        <div className="marquee relative mb-10 overflow-hidden sm:mb-[54px]">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex gap-3 pr-3 md:gap-1 md:pr-1"
              >
                {galleryImages.map((image) => (
                  <Link
                    key={image.src}
                    href="/gallery"
                    className="group relative h-[210px] w-[280px] shrink-0 overflow-hidden rounded-[16px] sm:w-[340px] md:h-[300px] md:w-[430px]"
                    aria-label="View gallery"
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      quality={90}
                      sizes="(min-width: 768px) 430px, 340px"
                      className="image-soft-zoom object-cover object-center"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white to-transparent sm:w-24" />
        </div>

        <div className="grid gap-x-[34px] gap-y-[34px] md:grid-cols-2">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="hover-lift min-h-[162px] rounded-[20px] border-0 bg-gold shadow-none"
            >
              <Link href="/programs" className="block h-full">
                <CardContent className="p-6 sm:p-[30px]">
                  <h3 className="mb-4 text-[21px] font-bold leading-none text-white sm:mb-[20px] sm:text-[24px]">
                    {program.title}
                  </h3>
                  <p className="text-[15px] leading-[1.45] text-white sm:text-[18px]">
                    {program.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
