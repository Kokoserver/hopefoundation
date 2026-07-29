import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Handshake, HeartHandshake, Network, Users } from "lucide-react";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero, SectionKicker } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";

const aadaUrl = "/aada";

const featuredPartners = [
  {
    name: "Achebe Africa Digital Academy (AADA)",
    category: "Flagship Education Partner",
    description:
      "AADA is the Foundation's biggest partnership pathway for digital skills, mentorship, scholarships, and career access.",
    image: "/images/generated/foundation-digital-academy-branded.png",
    href: aadaUrl,
    cta: "Visit AADA Campus",
    primary: true,
  },
  {
    name: "Corporate Impact Partners",
    category: "CSR & Sponsorship",
    description: "Companies can sponsor cohorts, fund projects, provide equipment, or create career opportunities.",
    image: "/images/generated/foundation-partners-branded.png",
    href: "/contact",
    cta: "Become a Partner",
    primary: false,
  },
  {
    name: "Community Delivery Partners",
    category: "Local Implementation",
    description: "Community institutions help coordinate field delivery, identify verified needs, and sustain local trust.",
    image: "/images/generated/foundation-volunteers-branded.png",
    href: "/contact",
    cta: "Partner With Us",
    primary: false,
  },
];

const partnerTypes = [
  {
    title: "Education & Skills Partners",
    description: "Support learning cohorts, scholarships, instructors, devices, and career pathways for young people.",
    icon: GraduationCap,
  },
  {
    title: "Corporate Partners",
    description: "Align CSR support with measurable outreach, AADA cohorts, project sponsorship, and employee volunteering.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Community Partners",
    description: "Help identify real needs, coordinate field activity, and sustain trusted local delivery.",
    icon: Users,
  },
];

const collaborationAreas = [
  "Sponsor an AADA learning cohort",
  "Provide mentors, instructors, or career pathways",
  "Donate laptops, devices, software, or internet access",
  "Support healthcare, nutrition, education, or relief projects",
  "Create internships, apprenticeships, or job pipelines",
  "Fund transparent community impact programmes",
];

function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default function PartnersPage() {
  const primaryPartner = featuredPartners.find((partner) => partner.primary) ?? featuredPartners[0];

  return (
    <>
      <ScrollRevealController />
      <PageHero title="Our Partners" crumb="Partners" />

      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Flagship Partner Initiative</SectionKicker>
            <h2 className="mt-5 text-[44px] font-black leading-[1.04] tracking-[-0.045em] text-[#2A1708]">
              AADA is our biggest partnership pathway
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-[#697084]">
              Achebe Africa Digital Academy (AADA) is the Foundation&apos;s flagship digital education initiative.
              It creates high-impact opportunities for partners to support practical skills training, mentorship,
              scholarships, devices, and career pathways for young Africans.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="primary-cta h-12 rounded-[6px] bg-primary px-6 text-[14px] font-black text-white hover:bg-accent">
                <Link href={primaryPartner.href} {...linkProps(primaryPartner.href)}>
                  {primaryPartner.cta} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-[6px] border border-[#d9d9d9] bg-white px-6 text-[14px] font-black text-[#2A1708] hover:bg-[#f4f4f4]"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative" data-scroll-reveal="fade-left">
            <div className="relative h-[480px] overflow-hidden rounded-[18px]">
              <OptimizedImage
                src="/images/generated/foundation-partners-branded.png"
                alt="AADA learners and community partners"
                fill
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/82 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[14px] bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Network className="h-5 w-5" />
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
              <p className="text-[28px] font-black text-[#2A1708]">#1</p>
              <p className="text-[12px] font-semibold text-[#697084]">Flagship Initiative</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" data-scroll-reveal="soft-rise">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto max-w-[640px] text-center">
            <SectionKicker>Featured Partners</SectionKicker>
            <h2 className="mt-5 text-[40px] font-black leading-[1.06] tracking-[-0.045em] text-[#2A1708]">
              A flexible partner network led by AADA
            </h2>
            <p className="mt-5 text-[14px] leading-7 text-[#697084]">
              Meet the partners helping us expand practical education, community support, and long-term opportunity across Africa.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredPartners.map((partner, index) => (
              <article
                key={partner.name}
                className={`overflow-hidden rounded-[16px] bg-[#f4f4f4] ${partner.primary ? "lg:col-span-2" : ""}`}
                data-reveal-child={partner.primary ? "left" : "zoom"}
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                <div className="relative h-[260px]">
                  <OptimizedImage src={partner.image} alt={partner.name} fill quality={90} className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/78 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[11px] font-black text-primary">
                    {partner.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-[24px] font-black leading-tight tracking-[-0.04em] text-[#2A1708]">
                    {partner.name}
                  </h3>
                  <p className="mt-4 text-[14px] leading-7 text-[#697084]">{partner.description}</p>
                  <Link
                    href={partner.href}
                    {...linkProps(partner.href)}
                    className="mt-6 inline-flex items-center text-[13px] font-black text-primary"
                  >
                    {partner.cta} <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24" data-scroll-reveal="soft-rise">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="mx-auto max-w-[620px] text-center">
            <SectionKicker>How Partners Help</SectionKicker>
            <h2 className="mt-5 text-[40px] font-black leading-[1.06] tracking-[-0.045em] text-[#2A1708]">
              Partnerships that multiply practical impact
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {partnerTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[16px] bg-[#f4f4f4] p-8"
                  data-reveal-child="zoom"
                  style={{ "--reveal-index": index } as React.CSSProperties}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-[20px] font-black tracking-[-0.035em] text-[#2A1708]">{item.title}</h3>
                  <p className="mt-4 text-[14px] leading-7 text-[#697084]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Partner Options</SectionKicker>
            <h2 className="mt-5 text-[38px] font-black leading-[1.08] tracking-[-0.045em] text-[#2A1708]">
              Where your partnership can make a difference
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-scroll-reveal="fade-left">
            {collaborationAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-start gap-4 rounded-[12px] bg-white p-5"
                data-reveal-child={index % 2 === 0 ? "left" : "right"}
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Handshake className="h-4 w-4" />
                </span>
                <p className="text-[14px] font-semibold leading-6 text-[#2A1708]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-dark-pattern py-20 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div data-scroll-reveal="fade-right">
            <SectionKicker>Start a Partnership</SectionKicker>
            <h2 className="mt-5 max-w-[680px] text-[38px] font-black leading-[1.08] tracking-[-0.045em]">
              Build with us through AADA or a community impact programme.
            </h2>
          </div>
          <Button asChild className="primary-cta h-12 rounded-[6px] bg-primary px-7 text-[14px] font-black text-white hover:bg-accent">
            <Link href="/contact">
              Contact Us <HeartHandshake className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
