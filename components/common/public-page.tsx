import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

export type PublicPageCard = {
  title: string;
  description: string;
};

export type PublicPageSection = {
  title: string;
  body: string;
};

export type PublicPageData = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  overviewKicker: string;
  overviewTitle: string;
  cardsTitle: string;
  cardsDescription: string;
  sections: PublicPageSection[];
  cards: PublicPageCard[];
  ctaLabel?: string;
  ctaHref?: string;
};

type PublicPageProps = {
  page: PublicPageData;
};

export function PublicPage({ page }: PublicPageProps) {
  return (
    <div className="bg-background">
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
            {page.ctaLabel && page.ctaHref ? (
              <Button
                asChild
                className="mt-8 h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
              >
                <Link href={page.ctaHref}>
                  {page.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-6 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div>
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              {page.overviewKicker}
            </span>
            <h2 className="mt-5 max-w-md text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              {page.overviewTitle}
            </h2>
          </div>

          <div className="grid gap-4">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)]"
              >
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

      <section className="bg-white py-12 sm:py-16">
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
                  <CheckCircle2 className="mb-5 h-6 w-6 text-gold" />
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
    </div>
  );
}
