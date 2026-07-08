import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  StretchHorizontal,
  Heart,
  BookOpen,
  Briefcase,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { publicPages } from "@/lib/public-pages";
import { getCachedPrograms } from "@/db/cached-queries";

const sectionIcons: Record<string, React.ReactNode> = {
  "Education access": <GraduationCap className="h-6 w-6 text-primary" />,
  "Women empowerment": <StretchHorizontal className="h-6 w-6 text-primary" />,
  "Child welfare": <Heart className="mb-5 h-6 w-6 text-primary" />,
};

const cardIcons: Record<string, React.ReactNode> = {
  "Education Initiative": <BookOpen className="mb-5 h-6 w-6 text-primary" />,
  "Women Rise Initiative": <Briefcase className="mb-5 h-6 w-6 text-primary" />,
  "Children & Orphanages": <Home className="mb-5 h-6 w-6 text-primary" />,
};

const stats = [
  { value: "300+", label: "Children Supported" },
  { value: "150+", label: "Women Empowered" },
  { value: "12", label: "Partner Orphanages" },
  { value: "8", label: "Schools Engaged" },
];

export default async function ProgramsPage() {
  const page = publicPages.programs;
  const programs = await getCachedPrograms();

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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-footer border-t border-white/10 py-14">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[34px] font-bold text-primary sm:text-[40px]">
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

      {/* Programme Pillars */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              {page.overviewKicker}
            </span>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              {page.overviewTitle}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)] sm:p-8"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  {sectionIcons[section.title]}
                </div>
                <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                  {section.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#4f4a43]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programmes */}
      <section className="bg-[#f8e4e1] py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              Current & Upcoming
            </span>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              Featured programmes
            </h2>
          </div>

          <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((programme) => (
              <Link key={programme.slug} href={`/programs/${programme.slug}`}>
              <Card
                className="group hover-lift overflow-hidden rounded-[12px] border border-[#efdcc4] bg-[#fffaf2] shadow-[0_4px_16px_rgba(105,77,32,0.08)]"
              >
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative h-[184px]">
                    <OptimizedImage
                      src={programme.coverImageUrl}
                      alt={programme.title}
                      fill
                      quality={90}
                      className="image-soft-zoom object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-[18px] pb-[16px] pt-[14px]">
                    <span
                      className={`mb-2 inline-flex self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        programme.tag === "ongoing"
                          ? "bg-green-100 text-green-700"
                          : programme.tag === "upcoming"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {programme.tag}
                    </span>
                    <h3 className="mb-[6px] text-[16px] font-bold leading-none text-[#17191f]">
                      {programme.title}
                    </h3>
                    <p className="line-clamp-2 whitespace-pre-line text-[12px] leading-[1.5] text-[#17191f]/70">
                      {programme.description}
                    </p>
                    <div className="mt-auto flex gap-4 pt-3 text-[11px] text-muted-foreground">
                      <span>{programme.beneficiaries}</span>
                      <span>{programme.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Tracks */}
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
                  {cardIcons[card.title]}
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

      {/* CTA */}
      <section className="bg-footer py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[800px] px-6 text-center sm:px-10 lg:px-12">
          <h2 className="text-[30px] font-bold leading-tight sm:text-[40px]">
            Be part of something meaningful
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.65] text-white/72">
            Whether you volunteer your time, donate, or spread the word — your
            involvement helps us reach more children, women, and families.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href={page.ctaHref || "/volunteer"}>
                {page.ctaLabel || "Get Involved"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full border border-white/30 bg-transparent px-7 text-[12px] font-bold text-white hover:bg-white/10"
            >
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
