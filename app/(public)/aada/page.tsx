import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero, SectionKicker } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";

const aadaUrl = "https://achebecampus.com/";

const courses = [
  "Digital Literacy",
  "Web Design & Development",
  "Data Analysis",
  "Product Design",
  "Digital Marketing",
  "No-Code Tools",
  "Content Creation",
  "Entrepreneurship",
];

const pillars = [
  {
    title: "Practical Digital Courses",
    description: "Hands-on training focused on job-ready digital skills, portfolio building, and real-world project delivery.",
    icon: GraduationCap,
  },
  {
    title: "Mentorship & Mentors",
    description: "Learners receive guidance from experienced professionals who support confidence, discipline, and career direction.",
    icon: Users,
  },
  {
    title: "Scholarships",
    description: "Scholarship pathways help underserved learners join cohorts without financial barriers limiting their access.",
    icon: CheckCircle2,
  },
  {
    title: "Career Opportunities",
    description: "AADA connects learners to internships, freelance pathways, employment readiness, and professional networks.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Entrepreneurship Support",
    description: "Participants learn how to turn practical skills into income through service packaging and client acquisition.",
    icon: Lightbulb,
  },
  {
    title: "Learning Communities",
    description: "Peer-led learning circles help students stay accountable, collaborate, share resources, and keep growing.",
    icon: Network,
  },
];

export default function AadaPage() {
  return (
    <>
      <ScrollRevealController />
      <PageHero title="Achebe Africa Digital Academy" crumb="AADA" />

      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Flagship Initiative</SectionKicker>
            <h2 className="mt-5 text-[44px] font-black leading-[1.04] tracking-[-0.045em] text-[#2A1708]">
              Solving unemployment through digital education
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-[#697084]">
              Achebe Africa Digital Academy (AADA) equips young Africans with practical digital skills, mentorship,
              entrepreneurship support, and pathways to meaningful work.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#697084]">
              It is Achebe Hope Foundation&apos;s biggest long-term empowerment initiative, combining humanitarian
              support with education that helps learners build sustainable careers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="primary-cta h-12 rounded-[6px] bg-primary px-6 text-[14px] font-black text-white hover:bg-accent">
                <Link href={aadaUrl} target="_blank" rel="noopener noreferrer">
                  Visit AADA Campus <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-[6px] border border-[#d9d9d9] bg-white px-6 text-[14px] font-black text-[#2A1708] hover:bg-[#f4f4f4]"
              >
                <Link href="/partners">Partner With AADA</Link>
              </Button>
            </div>
          </div>

          <div className="relative" data-scroll-reveal="fade-left">
            <div className="relative h-[500px] overflow-hidden rounded-[18px]">
              <OptimizedImage
                src="/images/generated/foundation-digital-academy-branded.png"
                alt="AADA digital academy learners"
                fill
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/86 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[14px] bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[22px] font-black tracking-[-0.04em] text-[#2A1708]">AADA</p>
                    <p className="text-[12px] font-semibold text-[#697084]">
                      Digital skills, mentorship, scholarships, and career access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-8 hidden rounded-[14px] bg-white p-5 shadow-xl sm:block">
              <p className="text-[28px] font-black text-[#2A1708]">8+</p>
              <p className="text-[12px] font-semibold text-[#697084]">Course Tracks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" data-scroll-reveal="soft-rise">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionKicker>Digital Courses</SectionKicker>
              <h2 className="mt-5 max-w-[600px] text-[40px] font-black leading-[1.06] tracking-[-0.045em] text-[#2A1708]">
                Practical skills for modern work
              </h2>
            </div>
            <p className="max-w-[430px] text-[14px] leading-7 text-[#697084]">
              Course tracks are designed around practical outcomes, portfolio projects, and learner readiness for work,
              freelancing, or entrepreneurship.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, index) => (
              <div
                key={course}
                className="flex items-center gap-3 rounded-[12px] bg-[#f4f4f4] px-5 py-5 text-[13px] font-black text-[#2A1708]"
                data-reveal-child="zoom"
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {course}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto max-w-[650px] text-center" data-scroll-reveal="fade-up">
            <SectionKicker>Inside AADA</SectionKicker>
            <h2 className="mt-5 text-[40px] font-black leading-[1.06] tracking-[-0.045em] text-[#2A1708]">
              Training, mentorship, scholarships, and career support in one academy
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-scroll-reveal="fade-left">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-[16px] bg-white p-8"
                  data-reveal-child={index % 2 === 0 ? "left" : "right"}
                  style={{ "--reveal-index": index } as React.CSSProperties}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-[20px] font-black tracking-[-0.035em] text-[#2A1708]">{pillar.title}</h3>
                  <p className="mt-4 text-[14px] leading-7 text-[#697084]">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="brand-dark-pattern py-20 text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[1fr_0.8fr]">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Join Or Support AADA</SectionKicker>
            <h2 className="mt-5 text-[42px] font-black leading-[1.06] tracking-[-0.045em]">
              Reserve your slot or help expand access to an AADA cohort.
            </h2>
            <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-white/72">
              Learners, mentors, schools, donors, and corporate partners can help AADA expand access to practical
              digital education across Africa.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end" data-scroll-reveal="fade-left">
            <Button asChild className="primary-cta h-12 rounded-[6px] bg-primary px-7 text-[14px] font-black text-white hover:bg-accent">
              <Link href={aadaUrl} target="_blank" rel="noopener noreferrer">
                Visit AADA Campus <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-12 rounded-[6px] border border-white/20 bg-white/8 px-7 text-[14px] font-black text-white hover:bg-white/12"
            >
              <Link href="/partners">
                Partner With AADA <Handshake className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
