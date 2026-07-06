import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Education Initiative",
    description: "Creating opportunities for lifelong learning. Cre...",
    image: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg",
  },
  {
    title: "Women Rise Initiative",
    description: "Economic empowerment for mothers and wom...",
    image: "/images/918104b48623a6d997a17a9a8a03567739e23fbf.jpg",
  },
  {
    title: "Community Outreach",
    description: "Health awareness and community wellbeing. He...",
    image: "/images/a71acae314d01270a85bf4733d98aa5afb33aff4.jpg",
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-[#f8e4e1] py-13.5 min-h-100 lg:min-h-125">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-6.5 flex items-center justify-between gap-4">
          <h2 className="text-[32px] font-bold leading-none text-[#17191f]">
            Programs
          </h2>
          <Button className="hidden h-[34px] rounded-full bg-gold px-[18px] text-[11px] font-bold text-white hover:bg-gold/90 sm:inline-flex">
            Our Programs
          </Button>
        </div>

        <div className="grid gap-[20px] md:grid-cols-3">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover-lift overflow-hidden rounded-[12px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)]"
            >
              <CardContent className="flex h-full flex-col p-0">
                <div className="relative h-[184px]">
                  <OptimizedImage
                    src={program.image}
                    alt={program.title}
                    fill
                    quality={90}
                    className="image-soft-zoom object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between gap-3 px-[18px] py-[16px]">
                  <div className="min-w-0">
                    <h3 className="mb-[6px] text-[16px] font-bold leading-none text-[#17191f]">
                      {program.title}
                    </h3>
                    <p className="truncate text-[11px] leading-none text-[#17191f]/70">
                      {program.description}
                    </p>
                  </div>
                  <button
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-white"
                    aria-label={`View ${program.title}`}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
