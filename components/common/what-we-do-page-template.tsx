import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CheckCircle2, HeartHandshake, Play } from "lucide-react";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ScrollRevealController } from "@/components/common/scroll-reveal-controller";
import { PageHero } from "@/components/common/static-design";
import { Button } from "@/components/ui/button";

type Stat = readonly [value: string, label: string];

type WhatWeDoPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type WhatWeDoPageTemplateProps = {
  variant?: "standard" | "alternate";
  title: string;
  crumb: string;
  heroKicker: string;
  heroHeading: string;
  heroDescription: string;
  heroImageAlt: string;
  primaryImage: string;
  secondaryImage: string;
  tertiaryImage: string;
  supportImage: string;
  imageBadgeLines: readonly [string, string];
  stats: readonly Stat[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  pillarsKicker: string;
  pillarsHeading: string;
  pillarsDescription: string;
  pillars: readonly WhatWeDoPillar[];
  deliveryKicker: string;
  deliveryHeading: string;
  deliverySteps: readonly string[];
  featureImage: string;
  featureImageAlt: string;
  featureIcon: LucideIcon;
  featureStatement: string;
  videoBackgroundImage: string;
  videoBackgroundAlt: string;
  videoKicker: string;
  videoHeading: string;
  videoDescription: string;
  videoTitle: string;
  videoEmbedUrl: string;
  finalKicker: string;
  finalHeading: string;
  finalDescription: string;
  checklist: readonly string[];
};

function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${
        dark ? "bg-white/10 text-white/78" : "bg-white text-[#697084] shadow-sm"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function WhatWeDoPageTemplate({
  variant = "standard",
  title,
  crumb,
  heroKicker,
  heroHeading,
  heroDescription,
  heroImageAlt,
  primaryImage,
  secondaryImage,
  tertiaryImage,
  supportImage,
  imageBadgeLines,
  stats,
  primaryCtaLabel,
  primaryCtaHref,
  pillarsKicker,
  pillarsHeading,
  pillarsDescription,
  pillars,
  deliveryKicker,
  deliveryHeading,
  deliverySteps,
  featureImage,
  featureImageAlt,
  featureIcon: FeatureIcon,
  featureStatement,
  videoBackgroundImage,
  videoBackgroundAlt,
  videoKicker,
  videoHeading,
  videoDescription,
  videoTitle,
  videoEmbedUrl,
  finalKicker,
  finalHeading,
  finalDescription,
  checklist,
}: WhatWeDoPageTemplateProps) {
  if (variant === "alternate") {
    return (
      <WhatWeDoAlternatePageTemplate
        title={title}
        crumb={crumb}
        heroKicker={heroKicker}
        heroHeading={heroHeading}
        heroDescription={heroDescription}
        heroImageAlt={heroImageAlt}
        primaryImage={primaryImage}
        secondaryImage={secondaryImage}
        tertiaryImage={tertiaryImage}
        supportImage={supportImage}
        imageBadgeLines={imageBadgeLines}
        stats={stats}
        primaryCtaLabel={primaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        pillarsKicker={pillarsKicker}
        pillarsHeading={pillarsHeading}
        pillarsDescription={pillarsDescription}
        pillars={pillars}
        deliveryKicker={deliveryKicker}
        deliveryHeading={deliveryHeading}
        deliverySteps={deliverySteps}
        featureImage={featureImage}
        featureImageAlt={featureImageAlt}
        featureIcon={FeatureIcon}
        featureStatement={featureStatement}
        videoBackgroundImage={videoBackgroundImage}
        videoBackgroundAlt={videoBackgroundAlt}
        videoKicker={videoKicker}
        videoHeading={videoHeading}
        videoDescription={videoDescription}
        videoTitle={videoTitle}
        videoEmbedUrl={videoEmbedUrl}
        finalKicker={finalKicker}
        finalHeading={finalHeading}
        finalDescription={finalDescription}
        checklist={checklist}
      />
    );
  }

  return (
    <>
      <ScrollRevealController />
      <PageHero title={title} crumb={crumb} />

      <section className="relative z-10 bg-white py-20 md:py-24" data-template-variant="standard" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative mx-auto h-[520px] w-full max-w-[500px]" data-reveal-child="left">
            <div className="absolute left-[10%] top-0 h-[460px] w-[360px] overflow-hidden rounded-[10px]">
              <OptimizedImage src={primaryImage} alt={heroImageAlt} fill quality={90} />
            </div>
            <div className="absolute left-0 top-6 rounded-[10px] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(15,23,42,.12)]">
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">{imageBadgeLines[0]}</p>
              <p className="text-[18px] font-semibold leading-tight text-[#2A1708]">{imageBadgeLines[1]}</p>
              <div className="mt-7 flex -space-x-2">
                {[secondaryImage, tertiaryImage, supportImage].map((image) => (
                  <span key={image} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-[175px] w-[245px] overflow-hidden rounded-[12px] border-[6px] border-white shadow-[0_14px_40px_rgba(15,23,42,.16)]">
              <OptimizedImage src={supportImage} alt="" fill quality={90} />
            </div>
          </div>
          <div className="max-w-[580px]" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>{heroKicker}</Kicker>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[46px]">
              {heroHeading}
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-[#697084]">{heroDescription}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-[10px] bg-[#f4f4f4] p-5">
                  <p className="text-[22px] font-semibold text-[#2A1708]">{value}</p>
                  <p className="mt-2 text-[11px] leading-5 text-[#697084]">{label}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
              <Link href={primaryCtaHref} className="primary-cta">
                {primaryCtaLabel}
                <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20 md:py-24" data-scroll-reveal="fade-right">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto mb-10 max-w-[620px] text-center" data-reveal-child="zoom">
            <Kicker>{pillarsKicker}</Kicker>
            <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[38px]">
              {pillarsHeading}
            </h2>
            <p className="mt-4 text-[13px] leading-6 text-[#697084]">{pillarsDescription}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex min-h-[250px] flex-col rounded-[12px] bg-white p-6 shadow-sm"
                  data-reveal-child="zoom"
                  style={{ "--reveal-index": index + 1 } as React.CSSProperties}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-[15px] font-semibold text-[#2A1708]">{pillar.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-[#697084]">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal-child="left">
            <Kicker>{deliveryKicker}</Kicker>
            <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[42px]">
              {deliveryHeading}
            </h2>
            <div className="mt-8 space-y-4">
              {deliverySteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[10px] bg-[#f4f4f4] p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-[13px] leading-6 text-[#697084]">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[18px] bg-[#381800] p-5 text-white" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="relative h-[390px] overflow-hidden rounded-[12px]">
              <OptimizedImage src={featureImage} alt={featureImageAlt} fill quality={90} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/82 via-[#120800]/8 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <FeatureIcon className="h-6 w-6" />
                </div>
                <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.04em]">{featureStatement}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#381800] py-20 text-white md:py-24" data-scroll-reveal="zoom-up">
        <div className="absolute inset-0">
          <OptimizedImage src={videoBackgroundImage} alt={videoBackgroundAlt} fill quality={90} />
          <div className="absolute inset-0 bg-[#120800]/74" />
        </div>
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-8 px-6 md:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal-child="left">
            <Kicker dark>{videoKicker}</Kicker>
            <h2 className="mt-4 max-w-[380px] text-[32px] font-semibold leading-[1.08] tracking-[-0.045em]">
              {videoHeading}
            </h2>
            <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-white/72">{videoDescription}</p>
          </div>
          <div className="overflow-hidden rounded-[18px] bg-black shadow-2xl" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="relative aspect-video">
              <iframe
                title={videoTitle}
                src={videoEmbedUrl}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20 md:py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto max-w-[930px] px-6 text-center">
          <Kicker>{finalKicker}</Kicker>
          <h2 className="mx-auto mt-4 max-w-[620px] text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[44px]">
            {finalHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#697084]">{finalDescription}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
              <Link href="/donate" className="primary-cta">
                Donate Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="h-11 rounded-[5px] bg-[#381800] px-4 text-[13px] font-semibold text-white hover:bg-[#2A1708]">
              <Link href="/volunteer" className="primary-cta">
                Volunteer <HeartHandshake className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {checklist.map((item) => (
              <p key={item} className="flex items-center justify-center gap-2 rounded-[10px] bg-[#f4f4f4] px-4 py-3 text-[12px] font-semibold text-[#2A1708]">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WhatWeDoAlternatePageTemplate({
  heroKicker,
  heroHeading,
  heroDescription,
  heroImageAlt,
  primaryImage,
  secondaryImage,
  tertiaryImage,
  supportImage,
  imageBadgeLines,
  stats,
  primaryCtaLabel,
  primaryCtaHref,
  pillarsKicker,
  pillarsHeading,
  pillarsDescription,
  pillars,
  deliveryKicker,
  deliveryHeading,
  deliverySteps,
  featureImage,
  featureImageAlt,
  featureIcon: FeatureIcon,
  featureStatement,
  videoBackgroundImage,
  videoBackgroundAlt,
  videoKicker,
  videoHeading,
  videoDescription,
  videoTitle,
  videoEmbedUrl,
  finalKicker,
  finalHeading,
  finalDescription,
  checklist,
}: Omit<WhatWeDoPageTemplateProps, "variant">) {
  return (
    <>
      <ScrollRevealController />

      <section className="relative min-h-[760px] overflow-hidden bg-[#381800] pb-20 pt-36 text-white md:pb-24 md:pt-44" data-template-variant="alternate" data-scroll-reveal="fade-right">
        <div className="absolute inset-0">
          <OptimizedImage src={primaryImage} alt={heroImageAlt} fill quality={90} />
          <div className="absolute inset-0 bg-[#120800]/78" />
        </div>
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal-child="left">
            <Kicker dark>{heroKicker}</Kicker>
            <h2 className="mt-5 max-w-[620px] text-[36px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[50px]">
              {heroHeading}
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/78">{heroDescription}</p>
            <div className="mt-8 grid max-w-[580px] gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-[10px] bg-white/10 p-5 backdrop-blur">
                  <p className="text-[24px] font-semibold">{value}</p>
                  <p className="mt-2 text-[11px] leading-5 text-white/66">{label}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
              <Link href={primaryCtaHref} className="primary-cta">
                {primaryCtaLabel}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative mx-auto h-[480px] w-full max-w-[470px]" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="absolute inset-x-8 top-0 h-[300px] overflow-hidden rounded-[18px] border-[6px] border-white/12">
              <OptimizedImage src={primaryImage} alt={heroImageAlt} fill quality={90} />
            </div>
            <div className="absolute bottom-0 left-0 h-[220px] w-[240px] overflow-hidden rounded-[14px] border-[6px] border-[#381800] shadow-2xl">
              <OptimizedImage src={secondaryImage} alt="" fill quality={90} />
            </div>
            <div className="absolute bottom-12 right-0 rounded-[14px] bg-white p-5 text-[#2A1708] shadow-2xl">
              <p className="text-[18px] font-semibold leading-tight">{imageBadgeLines[0]}</p>
              <p className="text-[18px] font-semibold leading-tight">{imageBadgeLines[1]}</p>
              <div className="mt-6 flex -space-x-2">
                {[secondaryImage, tertiaryImage, supportImage].map((image) => (
                  <span key={image} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                    <OptimizedImage src={image} alt="" fill quality={80} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal-child="left">
            <Kicker>{pillarsKicker}</Kicker>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[42px]">
              {pillarsHeading}
            </h2>
            <p className="mt-5 text-[13px] leading-6 text-[#697084]">{pillarsDescription}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="rounded-[14px] bg-[#f4f4f4] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-[15px] font-semibold text-[#2A1708]">{pillar.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-[#697084]">{pillar.description}</p>
                  <span className="mt-6 block text-[22px] font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f4f4] py-20 md:py-24" data-scroll-reveal="zoom-up">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="overflow-hidden rounded-[18px] bg-[#381800] p-5 text-white" data-reveal-child="left">
            <div className="relative h-[420px] overflow-hidden rounded-[12px]">
              <OptimizedImage src={featureImage} alt={featureImageAlt} fill quality={90} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/86 via-[#120800]/14 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <FeatureIcon className="h-6 w-6" />
                </div>
                <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.04em]">{featureStatement}</h3>
              </div>
            </div>
          </div>
          <div data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <Kicker>{deliveryKicker}</Kicker>
            <h2 className="mt-4 max-w-[520px] text-[30px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708] sm:text-[42px]">
              {deliveryHeading}
            </h2>
            <div className="mt-8 space-y-4">
              {deliverySteps.map((step, index) => (
                <div key={step} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#dedede] pb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-primary shadow-sm">
                    {index + 1}
                  </span>
                  <p className="text-[13px] leading-6 text-[#697084]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24" data-scroll-reveal="fade-left">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 md:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal-child="left">
            <Kicker>{videoKicker}</Kicker>
            <h2 className="mt-4 max-w-[420px] text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#2A1708]">
              {videoHeading}
            </h2>
            <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-[#697084]">{videoDescription}</p>
          </div>
          <div className="overflow-hidden rounded-[18px] bg-black shadow-2xl" data-reveal-child="right" style={{ "--reveal-index": 1 } as React.CSSProperties}>
            <div className="relative aspect-video">
              <OptimizedImage src={videoBackgroundImage} alt={videoBackgroundAlt} fill quality={90} />
              <iframe
                title={videoTitle}
                src={videoEmbedUrl}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#381800] py-20 text-white md:py-24" data-scroll-reveal="fade-right">
        <div className="absolute inset-0 opacity-18">
          <OptimizedImage src={supportImage} alt="" fill quality={90} />
        </div>
        <div className="absolute inset-0 bg-[#120800]/84" />
        <div className="relative mx-auto max-w-[930px] px-6 text-center">
          <Kicker dark>{finalKicker}</Kicker>
          <h2 className="mx-auto mt-4 max-w-[650px] text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[46px]">
            {finalHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-white/78">{finalDescription}</p>
          <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
            {checklist.map((item) => (
              <p key={item} className="flex items-center justify-center gap-2 rounded-[10px] bg-white/10 px-4 py-3 text-[12px] font-semibold text-white">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="h-11 rounded-[5px] bg-primary px-4 text-[13px] font-semibold text-white hover:bg-accent">
              <Link href="/donate" className="primary-cta">
                Donate Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="h-11 rounded-[5px] bg-white px-4 text-[13px] font-semibold text-[#2A1708] hover:bg-white/90">
              <Link href="/volunteer" className="text-[#2A1708]">
                Volunteer <HeartHandshake className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
