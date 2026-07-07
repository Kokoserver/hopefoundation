import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  TreePine,
  Target,
  Eye,
  Quote,
  GraduationCap,
  HandHeart,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { publicPages } from "@/lib/public-pages";

const pillarIcons: Record<string, React.ReactNode> = {
  Compassion: <Heart className="mb-5 h-6 w-6 text-primary" />,
  Community: <Users className="mb-5 h-6 w-6 text-primary" />,
  Legacy: <TreePine className="mb-5 h-6 w-6 text-primary" />,
};

const stats = [
  { value: "500+", label: "Families Reached" },
  { value: "7+", label: "Active Programmes" },
  { value: "50+", label: "Community Partners" },
  { value: "200+", label: "Volunteers Engaged" },
];

const values = [
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Education",
    description:
      "Every child deserves access to quality learning. We provide scholarships, school supplies, and mentorship to help young minds thrive.",
  },
  {
    icon: <HandHeart className="h-8 w-8 text-primary" />,
    title: "Empowerment",
    description:
      "We equip women and youth with vocational skills, financial literacy, and enterprise support to build self-reliant futures.",
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "Family Stability",
    description:
      "Strengthening families through welfare support, healthcare access, and community networks that ensure no one is left behind.",
  },
];

export default function AboutPage() {
  const page = publicPages.about;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-55"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[38px] font-bold leading-[1.08] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-white/88 sm:text-[17px]">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
              >
                <Link href={page.ctaHref || "/projects"}>
                  {page.ctaLabel || "Explore Our Work"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[22px] border border-[#eadfcd] bg-white p-8 shadow-[0_10px_30px_rgba(105,77,32,0.06)]">
              <Target className="mb-4 h-8 w-8 text-gold" />
              <h3 className="mb-3 text-[22px] font-bold text-[#17191f]">
                Our Mission
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#4f4a43]">
                To empower underserved families and communities in Nigeria
                through practical support, quality education, healthcare access,
                and sustainable economic opportunities — restoring dignity and
                building hope for generations to come.
              </p>
            </div>
            <div className="rounded-[22px] border border-[#eadfcd] bg-white p-8 shadow-[0_10px_30px_rgba(105,77,32,0.06)]">
              <Eye className="mb-4 h-8 w-8 text-gold" />
              <h3 className="mb-3 text-[22px] font-bold text-[#17191f]">
                Our Vision
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#4f4a43]">
                A Nigeria where every family lives with dignity, every child has
                access to quality education, and no community is left behind —
                creating a future built on compassion, opportunity, and lasting
                change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              What We Stand For
            </span>
            <h2 className="mt-5 text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              Our core focus areas
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[14px] leading-[1.65] text-[#4f4a43]">
              Every programme we run is built around these three pillars that
              guide our work and define our impact.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.title}
                className="rounded-[20px] border-0 bg-[#f7ebe8] shadow-none transition-shadow hover:shadow-[0_10px_30px_rgba(105,77,32,0.12)]"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-5 inline-flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="mb-3 text-[20px] font-bold text-[#17191f]">
                    {value.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[#342b25]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-12">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              Our Story
            </span>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              {page.overviewTitle}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 h-full w-px bg-[#eadfcd] hidden md:block" />
            <div className="space-y-8">
              {page.sections.map((section, i) => (
                <div key={section.title} className="relative md:pl-16">
                  <div className="absolute left-[11px] top-1.5 hidden h-6 w-6 rounded-full border-2 border-primary bg-white md:block" />
                  <div className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)] sm:p-8">
                    <span className="mb-3 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 mt-2 text-[20px] font-bold text-[#17191f]">
                      {section.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-[#4f4a43]">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
              Our reach so far
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-[1.65] text-white/72">
              Numbers only matter when they represent lives changed and families
              strengthened.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[20px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-[36px] font-bold text-primary sm:text-[44px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-white/72">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Pillars */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              {page.cardsTitle}
            </h2>
            <p className="max-w-md text-[13px] leading-[1.6] text-muted-foreground">
              {page.cardsDescription}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.cards.map((card) => (
              <Card
                key={card.title}
                className="hover-lift rounded-[20px] border-0 bg-[#f7ebe8] shadow-none"
              >
                <CardContent className="p-6">
                  {pillarIcons[card.title]}
                  <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#342b25]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary/40" />
          <blockquote className="text-[22px] leading-[1.5] font-medium italic text-[#17191f] sm:text-[28px]">
            &ldquo;We do not measure our success by what we give, but by how
            much lives change. Every family strengthened, every child educated,
            every community lifted — that is the hope we are building
            together.&rdquo;
          </blockquote>
          <p className="mt-6 text-[14px] font-semibold text-primary">
            Chief Obiora Achebe
          </p>
          <p className="text-[12px] text-[#4f4a43]">
            Founder, Achebe Hope Foundation
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
            Be part of the story
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.65] text-white/72">
            Whether you want to volunteer, donate, or partner with us — your
            support helps us reach more families and create lasting change.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href="/volunteer">
                Volunteer With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/donate">
                Support Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
