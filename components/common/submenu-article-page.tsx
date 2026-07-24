import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Download,
  FileText,
  PlayCircle,
} from "lucide-react";
import type { PublicPageData } from "@/components/common/public-page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";

type RelatedLink = {
  title: string;
  href: string;
  eyebrow: string;
};

export function SubmenuArticlePage({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  if (page.layout === "text") {
    return <TextOnlyTemplate page={page} relatedLinks={relatedLinks} />;
  }

  if (page.layout === "split") {
    return <SplitTemplate page={page} relatedLinks={relatedLinks} />;
  }

  if (page.layout === "cards") {
    return <CardsTemplate page={page} relatedLinks={relatedLinks} />;
  }

  if (page.layout === "downloads") {
    return <DownloadsTemplate page={page} relatedLinks={relatedLinks} />;
  }

  if (page.layout === "videos") {
    return <VideosTemplate page={page} relatedLinks={relatedLinks} />;
  }

  const [leadSection, ...sections] = page.sections;
  const publishedDate = "July 24, 2026";

  return (
    <article className="bg-[#f7f3ec]">
      <section className="border-b border-[#eadfcd] bg-white pt-28 sm:pt-32">
        <div className="mx-auto max-w-[980px] px-6 pb-8 sm:px-10">
          <Link
            href="/"
            className="inline-flex rounded-sm bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
          >
            Back Home
          </Link>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-[34px] font-bold leading-tight text-[#17191f] sm:text-[46px]">
            {page.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground">
            <span>Achebe Hope Foundation</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              Updated {publishedDate}
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,760px)_300px] lg:px-12">
        <div>
          <div className="relative mb-8 h-[260px] overflow-hidden rounded-[6px] bg-footer sm:h-[360px]">
            <OptimizedImage
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              quality={90}
              className="object-cover object-center"
              showPlaceholder={false}
            />
          </div>

          <div className="bg-white px-6 py-8 shadow-[0_4px_20px_rgba(105,77,32,0.08)] sm:px-9 sm:py-10">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:text-[56px] first-letter:font-bold first-letter:leading-[0.9] first-letter:text-primary text-[15px] leading-[1.85] text-[#3f3933]">
              {page.description}
            </p>

            <div className="my-8 border-y border-[#eadfcd] py-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
                In This Page
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {[leadSection, ...sections].filter(Boolean).map((section) => (
                  <span
                    key={section.title}
                    className="text-[13px] font-semibold text-[#17191f]"
                  >
                    {section.title}
                  </span>
                ))}
              </div>
            </div>

            {leadSection ? (
              <section className="mb-8">
                <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#17191f]">
                  {leadSection.title}
                </h2>
                <p className="text-[15px] leading-[1.85] text-[#3f3933]">
                  {leadSection.body}
                </p>
              </section>
            ) : null}

            {sections.map((section) => (
              <section key={section.title} className="mb-8">
                <h2 className="mb-3 text-[24px] font-bold leading-tight text-[#17191f]">
                  {section.title}
                </h2>
                <p className="text-[15px] leading-[1.85] text-[#3f3933]">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="mt-10">
              <h2 className="mb-4 text-[24px] font-bold leading-tight text-[#17191f]">
                {page.cardsTitle}
              </h2>
              <p className="mb-5 text-[14px] leading-[1.7] text-muted-foreground">
                {page.cardsDescription}
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {page.cards.map((card) => (
                  <Card
                    key={card.title}
                    className="rounded-[8px] border border-[#eadfcd] bg-[#fffaf2] shadow-none"
                  >
                    <CardContent className="p-5">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                      <h3 className="mb-2 text-[15px] font-bold text-[#17191f]">
                        {card.title}
                      </h3>
                      <p className="text-[12px] leading-[1.65] text-[#4f4a43]">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {page.ctaLabel && page.ctaHref ? (
              <div className="mt-10 border-t border-[#eadfcd] pt-8">
                <Button
                  asChild
                  className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
                >
                  <Link href={page.ctaHref}>
                    {page.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-footer p-5 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Section
            </p>
            <h2 className="mt-2 text-[22px] font-bold leading-tight">
              {page.eyebrow}
            </h2>
            <p className="mt-3 text-[13px] leading-[1.65] text-white/72">
              {page.overviewTitle}
            </p>
          </div>

          {relatedLinks.length > 0 ? (
            <div className="bg-white p-5 shadow-[0_4px_20px_rgba(105,77,32,0.08)]">
              <h2 className="mb-4 text-[18px] font-bold text-[#17191f]">
                Related Links
              </h2>
              <div className="grid gap-2">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-3 border-b border-[#eadfcd] py-3 text-[13px] font-semibold text-[#241E18] transition last:border-b-0 hover:text-primary"
                  >
                    {link.title}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </article>
  );
}

function RelatedLinksBlock({ links }: { links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="bg-white p-5 shadow-[0_4px_20px_rgba(105,77,32,0.08)]">
      <h2 className="mb-4 text-[18px] font-bold text-[#17191f]">
        Related Links
      </h2>
      <div className="grid gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between gap-3 border-b border-[#eadfcd] py-3 text-[13px] font-semibold text-[#241E18] transition last:border-b-0 hover:text-primary"
          >
            {link.title}
            <ArrowRight className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function SplitTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  return (
    <div className="bg-background">
      <section className="grid min-h-[520px] bg-[#f7e6e2] pt-24 lg:grid-cols-2 lg:pt-0">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-[72px]">
          <div className="max-w-xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-primary">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 text-[36px] font-bold leading-tight text-[#17191f] sm:text-[52px]">
              {page.title}
            </h1>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#4f4a43]">
              {page.description}
            </p>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[520px]">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center"
            showPlaceholder={false}
          />
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-[15px] leading-[1.9] text-[#3f3933]">
              {page.overviewTitle}
            </p>
            <div className="mt-5 space-y-4">
              {page.sections.map((section) => (
                <p
                  key={section.title}
                  className="text-[15px] leading-[1.9] text-[#3f3933]"
                >
                  <span className="font-bold text-[#17191f]">
                    {section.title}:
                  </span>{" "}
                  {section.body}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1080px] gap-5 px-6 sm:grid-cols-3 sm:px-10">
          {page.cards.map((card) => (
            <Card
              key={card.title}
              className="rounded-[8px] border border-[#d8dce7] bg-white shadow-[0_10px_30px_rgba(23,25,31,0.06)]"
            >
              <CardContent className="p-6">
                <CheckCircle2 className="mb-4 h-5 w-5 text-primary" />
                <h3 className="mb-3 text-[16px] font-bold text-[#17191f]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#4f4a43]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-[1080px] gap-6 px-6 sm:px-10 lg:grid-cols-[1fr_300px]">
          <div className="rounded-[10px] bg-footer p-8 text-white">
            <h2 className="text-[26px] font-bold leading-tight">
              {page.cardsTitle}
            </h2>
            <p className="mt-3 text-[14px] leading-[1.7] text-white/72">
              {page.cardsDescription}
            </p>
            {page.ctaLabel && page.ctaHref ? (
              <Button
                asChild
                className="mt-6 h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
              >
                <Link href={page.ctaHref}>{page.ctaLabel}</Link>
              </Button>
            ) : null}
          </div>
          <RelatedLinksBlock links={relatedLinks} />
        </div>
      </section>
    </div>
  );
}

function CardsTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  return (
    <div className="bg-[#fffaf2]">
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-45"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-footer" />
        </div>
        <div className="relative mx-auto max-w-[980px] px-6 py-20 text-center sm:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 text-[38px] font-bold leading-tight sm:text-[56px]">
            {page.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-white/82">
            {page.description}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
          <div className="grid gap-5 lg:grid-cols-3">
            {page.sections.map((section, index) => (
              <div
                key={section.title}
                className={`rounded-[18px] p-7 shadow-[0_12px_34px_rgba(105,77,32,0.08)] ${
                  index === 0 ? "bg-[#f8e4e1]" : "bg-white"
                }`}
              >
                <span className="text-[34px] font-bold text-primary/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-[20px] font-bold text-[#17191f]">
                  {section.title}
                </h2>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#4f4a43]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] bg-white p-7 shadow-[0_12px_34px_rgba(105,77,32,0.08)]">
            <h2 className="text-[28px] font-bold text-[#17191f]">
              {page.cardsTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-[1.7] text-muted-foreground">
              {page.cardsDescription}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {page.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[14px] border border-[#eadfcd] bg-[#fffaf2] p-5"
                >
                  <h3 className="text-[15px] font-bold text-[#17191f]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.65] text-[#4f4a43]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            {page.ctaLabel && page.ctaHref ? (
              <div className="rounded-[20px] bg-footer p-7 text-white">
                <h2 className="text-[24px] font-bold">Take action</h2>
                <p className="mt-2 text-[14px] leading-[1.7] text-white/70">
                  Use this page to move from interest to practical support.
                </p>
                <Button
                  asChild
                  className="mt-5 h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
                >
                  <Link href={page.ctaHref}>{page.ctaLabel}</Link>
                </Button>
              </div>
            ) : <div />}
            <RelatedLinksBlock links={relatedLinks} />
          </div>
        </div>
      </section>
    </div>
  );
}

function TextOnlyTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  return (
    <div className="bg-[#f7f3ec] pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,740px)_300px]">
        <main className="bg-white px-6 py-9 shadow-[0_8px_28px_rgba(105,77,32,0.08)] sm:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 text-[34px] font-bold leading-tight text-[#17191f] sm:text-[48px]">
            {page.title}
          </h1>
          <p className="mt-5 border-b border-[#eadfcd] pb-7 text-[15px] leading-[1.85] text-[#3f3933]">
            {page.description}
          </p>

          {page.sections.map((section) => (
            <section key={section.title} className="border-b border-[#eadfcd] py-7">
              <h2 className="mb-3 text-[22px] font-bold text-[#17191f]">
                {section.title}
              </h2>
              <p className="text-[15px] leading-[1.85] text-[#3f3933]">
                {section.body}
              </p>
            </section>
          ))}

          <section className="pt-7">
            <h2 className="mb-4 text-[22px] font-bold text-[#17191f]">
              {page.cardsTitle}
            </h2>
            <div className="space-y-4">
              {page.cards.map((card) => (
                <div key={card.title}>
                  <h3 className="text-[15px] font-bold text-[#17191f]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.75] text-[#4f4a43]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-footer p-5 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              Policy Area
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/72">
              {page.overviewTitle}
            </p>
          </div>
          <RelatedLinksBlock links={relatedLinks} />
        </aside>
      </div>
    </div>
  );
}

function DownloadsTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  const downloads = page.downloads ?? [];

  return (
    <div className="bg-[#f7f3ec] pt-28 sm:pt-32">
      <section className="mx-auto max-w-[1120px] px-6 py-10 sm:px-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-primary">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 text-[38px] font-bold leading-tight text-[#17191f] sm:text-[56px]">
          {page.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#4f4a43]">
          {page.description}
        </p>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-8 px-6 pb-16 sm:px-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          {downloads.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 rounded-[12px] border border-[#eadfcd] bg-white p-5 shadow-[0_8px_26px_rgba(105,77,32,0.06)] sm:grid-cols-[48px_1fr_auto] sm:items-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                    {item.category}
                  </span>
                  <span className="rounded-full bg-[#f7f3ec] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                    {item.fileType}
                  </span>
                </div>
                <h2 className="text-[18px] font-bold text-[#17191f]">
                  {item.title}
                </h2>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#4f4a43]">
                  {item.description}
                </p>
              </div>
              {item.href ? (
                <Button
                  asChild
                  className="h-10 rounded-full bg-gold px-5 text-[12px] font-bold text-white hover:bg-gold/90"
                >
                  <Link href={item.href}>
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <span className="rounded-full border border-[#eadfcd] px-4 py-2 text-center text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Not yet published
                </span>
              )}
            </div>
          ))}
        </div>
        <RelatedLinksBlock links={relatedLinks} />
      </section>
    </div>
  );
}

function VideosTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  const videos = page.videos ?? [];

  return (
    <div className="bg-background pt-28 sm:pt-32">
      <section className="mx-auto max-w-[1120px] px-6 py-10 text-center sm:px-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-primary">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 text-[38px] font-bold leading-tight text-[#17191f] sm:text-[56px]">
          {page.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-[#4f4a43]">
          {page.description}
        </p>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-8 px-6 pb-16 sm:px-10 lg:grid-cols-[1fr_300px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.title}
              className="overflow-hidden rounded-[14px] bg-white shadow-[0_10px_30px_rgba(105,77,32,0.08)]"
            >
              <div className="group relative h-[220px] bg-footer">
                <OptimizedImage
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  quality={90}
                  className="object-cover object-center opacity-80 transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                    <PlayCircle className="h-7 w-7" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
                    {video.category}
                  </span>
                  <span className="rounded-full bg-[#f7f3ec] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                    {video.duration}
                  </span>
                </div>
                <h2 className="text-[18px] font-bold text-[#17191f]">
                  {video.title}
                </h2>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#4f4a43]">
                  {video.description}
                </p>
                {video.href ? (
                  <Button
                    asChild
                    className="mt-5 h-10 rounded-full bg-gold px-5 text-[12px] font-bold text-white hover:bg-gold/90"
                  >
                    <Link href={video.href}>Watch Video</Link>
                  </Button>
                ) : (
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                    Video not yet published
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <RelatedLinksBlock links={relatedLinks} />
      </section>
    </div>
  );
}
