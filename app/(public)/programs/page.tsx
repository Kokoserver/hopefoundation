import Link from "next/link";
import { ArrowUpRight, Landmark } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";

const programs = [
  {
    category: "Education",
    title: "Annual Fundraising Gala for Education & Healthcare Support",
    image: "/images/generated/foundation-education-branded.png",
  },
  {
    category: "Healthcare",
    title: "Rural Outreach Medical Camp & Free Health Screening Initiative",
    image: "/images/generated/foundation-healthcare-branded.png",
  },
  {
    category: "Disaster Relief",
    title: "Hope for All Mega Fundraising Drive for Underprivileged Families",
    image: "/images/generated/foundation-child-welfare-branded.png",
  },
  {
    category: "Hunger Relief",
    title: "Monthly Food Distribution & Nutrition Support Program",
    image: "/images/generated/foundation-food-relief-branded.png",
  },
  {
    category: "Healthcare",
    title: "Free Community Health Check-Up & Medical Awareness Outreach",
    image: "/images/generated/foundation-healthcare-branded.png",
  },
  {
    category: "Disaster Relief",
    title: "Emergency Shelter Support & Disaster Relief Assistance Program",
    image: "/images/generated/foundation-outreach-branded.png",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our Programs" crumb="Programs" />
      <section className="bg-[#f4f4f4] py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[930px] gap-8 px-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              href={`/programs/${index + 1}`}
              className="flex min-h-[350px] flex-col overflow-hidden rounded-[10px] bg-white p-3 shadow-sm"
              data-reveal-child="zoom"
              style={{ "--reveal-index": index } as React.CSSProperties}
            >
              <div className="relative h-[185px] overflow-hidden rounded-[8px]">
                <OptimizedImage src={program.image} alt={program.title} fill quality={90} className="image-soft-zoom" />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-3 pt-5">
                <p className="flex items-center gap-2 text-[12px] text-[#697084]">
                  <Landmark className="h-4 w-4" />
                  {program.category}
                </p>
                <h2 className="mt-5 text-[17px] font-semibold leading-snug tracking-[-0.035em] text-[#2A1708]">
                  {program.title}
                </h2>
                <span className="mt-auto inline-flex items-center gap-1 border-t border-[#e9e9e9] pt-5 text-[12px] font-semibold text-[#2A1708]">
                  Read More <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
