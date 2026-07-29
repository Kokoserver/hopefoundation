import Link from "next/link";
import { ArrowRight, Check, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeTestimonialSection } from "@/components/common/home-testimonial-section";
import { OptimizedImage } from "@/components/common/optimized-image";

type ButtonLink = {
  label: string;
  href: string;
};

export function RebrandHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
  home = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton?: ButtonLink;
  secondaryButton?: ButtonLink;
  home?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-footer text-white ${
        home ? "min-h-[650px] pt-5" : "pt-0"
      }`}
    >
      <div className="absolute inset-0">
        <OptimizedImage
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          showPlaceholder={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141c2b]/94 via-[#141c2b]/62 to-[#141c2b]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141c2b]/40 via-transparent to-[#141c2b]/35" />
      </div>
      <div className={`relative brand-shell ${home ? "pb-24 pt-32 sm:pt-40 lg:pt-48" : "pb-20 pt-36 sm:pt-40"}`}>
        <div className={home ? "max-w-[620px]" : "max-w-[720px]"}>
          <p className="brand-kicker text-white/90 before:bg-primary">{eyebrow}</p>
          <h1
            className={`mt-5 font-semibold tracking-[-0.04em] ${
              home
                ? "text-[42px] leading-[1.02] sm:text-[58px] lg:text-[64px]"
                : "text-[38px] leading-[1.06] sm:text-[56px]"
            }`}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-[560px] whitespace-pre-line text-[14px] leading-7 text-white/76">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryButton ? (
                <Button asChild className="h-10 rounded-[9px] bg-primary px-5 text-[12px] font-semibold text-white hover:bg-accent">
                  <Link href={primaryButton.href}>
                    {primaryButton.label}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              ) : null}
              {secondaryButton ? (
                <Button asChild variant="outline" className="h-10 rounded-[9px] border-white/35 bg-white/5 px-5 text-[12px] font-semibold text-white hover:bg-white/10 hover:text-white">
                  <Link href={secondaryButton.href}>{secondaryButton.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function RebrandIntro({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="brand-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid grid-cols-2 gap-3">
          <div className="relative mt-10 h-[260px] overflow-hidden rounded-[18px]">
            <OptimizedImage src={image} alt={imageAlt} fill quality={90} />
          </div>
          <div className="space-y-3">
            <div className="relative h-[160px] overflow-hidden rounded-[16px]">
              <OptimizedImage src="/images/generated/foundation-child-welfare-branded.png" alt="Children smiling" fill quality={90} />
            </div>
            <div className="relative h-[190px] overflow-hidden rounded-[16px]">
              <OptimizedImage src="/images/generated/foundation-outreach-branded.png" alt="Community outreach" fill quality={90} />
            </div>
          </div>
        </div>
        <div>
          <p className="brand-kicker">{eyebrow}</p>
          <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#1e2635] sm:text-[46px]">
            {title}
          </h2>
          <p className="mt-5 max-w-[560px] whitespace-pre-line text-[14px] leading-7 text-muted-foreground">
            {description}
          </p>
          <div className="mt-7 grid gap-3">
            {[
              "Mission-driven organisation",
              "Transparent, trusted, and impactful",
            ].map((item) => (
              <div key={item} className="brand-card flex items-start gap-3 p-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1e2635]">{item}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                    Practical programmes, accountable delivery, and people-first community work.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RebrandCards({
  eyebrow,
  title,
  description,
  cards,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  cards: { title: string; description: string; image?: string; href?: string }[];
}) {
  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20" data-scroll-reveal="soft-rise">
      <div className="brand-shell">
        <div className="mx-auto mb-10 max-w-[620px] text-center" data-reveal-child="zoom">
          <p className="brand-kicker justify-center">{eyebrow}</p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[44px]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-[13px] leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => {
            const body = (
              <Card className="group h-full overflow-hidden rounded-[16px] border border-border bg-white shadow-[0_12px_38px_rgba(30,38,53,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,38,53,0.12)]">
                <CardContent className="p-0">
                  {card.image ? (
                    <div className="relative h-[220px] overflow-hidden">
                      <OptimizedImage src={card.image} alt={card.title} fill quality={90} className="image-soft-zoom" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141c2b]/74 to-transparent" />
                      <h3 className="absolute bottom-5 left-5 right-5 text-[18px] font-semibold leading-tight text-white">
                        {card.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="p-6">
                      <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                        <Heart className="h-4 w-4" />
                      </span>
                      <h3 className="text-[17px] font-semibold text-[#1e2635]">{card.title}</h3>
                      <p className="mt-3 text-[13px] leading-6 text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  )}
                  {card.image ? (
                    <p className="p-5 text-[13px] leading-6 text-muted-foreground">{card.description}</p>
                  ) : null}
                </CardContent>
              </Card>
            );

            return card.href ? (
              <Link
                key={card.title}
                href={card.href}
                data-reveal-child="zoom"
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                {body}
              </Link>
            ) : (
              <div
                key={card.title}
                data-reveal-child="zoom"
                style={{ "--reveal-index": index } as React.CSSProperties}
              >
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RebrandStats({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="py-14">
      <div className="brand-shell">
        <div className="brand-dark-pattern grid gap-8 rounded-[18px] p-7 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <Users className="h-4 w-4" />
              </span>
              <p className="text-[34px] font-semibold tracking-[-0.04em]">{stat.value}</p>
              <p className="mt-1 text-[12px] leading-5 text-white/62">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RebrandCta() {
  return (
    <section className="brand-dark-pattern py-16 text-white sm:py-20">
      <div className="brand-shell grid items-center gap-8 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="brand-kicker text-white/80 before:bg-primary">Donate Now</p>
          <h2 className="mt-4 max-w-[560px] text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[46px]">
            Your kindness can change a life today
          </h2>
          <p className="mt-4 max-w-[560px] text-[14px] leading-7 text-white/68">
            Every contribution helps us deliver education support, relief, skills training, and care to families who need it most.
          </p>
        </div>
        <div className="rounded-[14px] bg-white p-5 text-[#1e2635] shadow-2xl">
          <p className="text-[13px] font-semibold">How much would you like to donate today?</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["$10.00", "$25.00", "$50.00", "$100.00", "$250.00", "Custom"].map((amount, index) => (
              <button
                key={amount}
                className={`rounded-[8px] border px-3 py-2 text-[12px] font-semibold ${
                  index === 0 ? "border-primary bg-primary text-white" : "border-border bg-[#f7f7f5]"
                }`}
                type="button"
              >
                {amount}
              </button>
            ))}
          </div>
          <Button asChild className="mt-4 h-10 w-full rounded-[8px] bg-primary text-[12px] font-semibold text-white hover:bg-accent">
            <Link href="/donate">Donate now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TestimonialBand() {
  return <HomeTestimonialSection />;
}
