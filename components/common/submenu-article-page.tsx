import Link from "next/link";
import {
  ArrowRight,
  Download,
  FileText,
  PlayCircle,
} from "lucide-react";
import type { PublicPageData } from "@/components/common/public-page";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/common/optimized-image";

type RelatedLink = {
  title: string;
  href: string;
  eyebrow: string;
};

const submenuTileImages = [
  "/images/new/de27638f019a31c8b293f7ccc96dce4e.jpg.jpeg",
  "/images/new/c07c29641a2d90d19da14525b548a863.jpg.jpeg",
  "/images/new/18d3102e58527d82295a9d108a101405.jpg.jpeg",
  "/images/new/chief.a.u.achebe_20260722_p_3946737021547120023_1_3946737021547120023.webp",
  "/images/new/cd7684054ec5036b88f97615ab12d5a2.jpg.jpeg",
  "/images/new/8c7e6f87be07cbf3341a2cdd6184c25d.jpg.jpeg",
  "/images/new/19092f3ac4376805a624bbdad23eb895.jpg.jpeg",
  "/images/new/baf129cb71ea45fab3ff3b664f9f42d5.jpg.jpeg",
];

const submenuCategoryThemes: Record<
  string,
  {
    tileOffset: number;
    variant: "split" | "editorial" | "cards" | "timeline" | "compact";
  }
> = {
  "Who We Are": {
    tileOffset: 0,
    variant: "editorial",
  },
  "What We Do": {
    tileOffset: 2,
    variant: "split",
  },
  AADA: {
    tileOffset: 4,
    variant: "cards",
  },
  "Our Work & Impact": {
    tileOffset: 1,
    variant: "timeline",
  },
  "Get Involved": {
    tileOffset: 3,
    variant: "cards",
  },
  "Media Centre": {
    tileOffset: 5,
    variant: "compact",
  },
  Legal: {
    tileOffset: 6,
    variant: "editorial",
  },
};

const defaultSubmenuCategoryTheme = submenuCategoryThemes["Who We Are"];
const submenuBrand = {
  accent: "bg-[#c77a05]",
  accentText: "text-[#c77a05]",
  dark: "text-[#3a1600]",
  darkBg: "bg-[#3a1600]",
  soft: "bg-[#fff8ec]",
  border: "border-[#ead7b8]",
  muted: "text-[#6d5542]",
  body: "text-[#4a3425]",
  relatedHover: "group-hover:bg-[#3a1600]/80",
};

export function SubmenuArticlePage({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  if (page.layout === "downloads") {
    return <DownloadsTemplate page={page} relatedLinks={relatedLinks} />;
  }

  if (page.layout === "videos") {
    return <VideosTemplate page={page} relatedLinks={relatedLinks} />;
  }

  return <ClassicSubmenuTemplate page={page} relatedLinks={relatedLinks} />;
}

function ClassicSubmenuTemplate({
  page,
  relatedLinks,
}: {
  page: PublicPageData;
  relatedLinks: RelatedLink[];
}) {
  const overviewParagraphs = [
    page.description,
    page.overviewTitle,
    ...page.sections.map((section) => section.body),
  ].filter(Boolean);
  const principles = page.cards.length > 0 ? page.cards : page.sections;
  const theme = submenuCategoryThemes[page.eyebrow] ?? defaultSubmenuCategoryTheme;
  const featuredVideo = page.videos?.[0];

  return (
    <article className="bg-white">
      <section className={`relative h-[180px] overflow-hidden ${submenuBrand.darkBg} text-white sm:h-[240px] lg:h-[300px]`}>
        <OptimizedImage
          src={page.image}
          alt={page.imageAlt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          showPlaceholder={false}
        />
      </section>
      <div className={`h-1.5 ${submenuBrand.accent}`} />

      <SubmenuBodyVariant
        page={page}
        paragraphs={overviewParagraphs}
        principles={principles}
        theme={theme}
      />

      {featuredVideo ? (
        <SubmenuVideoSection video={featuredVideo} />
      ) : null}

      <RelatedLinksStrip links={relatedLinks} />

      {page.ctaLabel && page.ctaHref ? (
        <section className="mx-auto max-w-[880px] px-6 pb-12 text-center sm:px-10">
          <Button
            asChild
            className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
          >
            <Link href={page.ctaHref}>
              {page.ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      ) : null}
    </article>
  );
}

type SubmenuPrinciple = PublicPageData["cards"][number] | PublicPageData["sections"][number];

function SubmenuBodyVariant({
  page,
  paragraphs,
  principles,
  theme,
}: {
  page: PublicPageData;
  paragraphs: string[];
  principles: SubmenuPrinciple[];
  theme: typeof defaultSubmenuCategoryTheme;
}) {
  if (theme.variant === "editorial") {
    return (
      <>
        <section className="mx-auto grid max-w-[980px] gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[260px_1fr]">
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-[0.24em] ${submenuBrand.accentText}`}>
              {page.eyebrow}
            </p>
            <h2 className={`mt-3 text-[30px] font-bold leading-tight ${submenuBrand.dark}`}>
              {page.title}
            </h2>
          </div>
          <div className={`space-y-5 border-l-4 pl-6 text-[14px] leading-[1.9] ${submenuBrand.body} border-[#c77a05]`}>
            {paragraphs.slice(0, 4).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <SubmenuPrinciplesGrid principles={principles} theme={theme} title={page.cardsTitle} description={page.cardsDescription} />
      </>
    );
  }

  if (theme.variant === "cards") {
    return (
      <>
        <section className="mx-auto max-w-[980px] px-6 py-10 text-center sm:px-10">
          <p className={`text-[11px] font-bold uppercase tracking-[0.24em] ${submenuBrand.accentText}`}>
            {page.eyebrow}
          </p>
          <h2 className={`mx-auto mt-3 max-w-2xl text-[28px] font-bold leading-tight ${submenuBrand.dark}`}>
            {page.overviewTitle}
          </h2>
          <p className={`mx-auto mt-5 max-w-3xl text-[14px] leading-[1.85] ${submenuBrand.body}`}>
            {page.description}
          </p>
        </section>
        <section className={`mx-auto max-w-[980px] px-6 pb-10 sm:px-10`}>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[22px] border bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)] ${submenuBrand.border}`}
              >
                <span className={`text-[34px] font-bold ${submenuBrand.accentText}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={`mt-4 text-[17px] font-bold uppercase leading-tight ${submenuBrand.dark}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 text-[13px] leading-[1.75] ${submenuBrand.muted}`}>
                  {getPrincipleText(item)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (theme.variant === "timeline") {
    return (
      <>
        <section className={`mx-auto max-w-[920px] px-6 py-10 sm:px-10`}>
          <p className={`text-center text-[11px] font-bold uppercase tracking-[0.24em] ${submenuBrand.accentText}`}>
            {page.eyebrow}
          </p>
          <h2 className={`mt-3 text-center text-[26px] font-bold leading-tight ${submenuBrand.dark}`}>
            {page.overviewTitle}
          </h2>
          <div className={`mx-auto mt-6 max-w-3xl space-y-5 text-center text-[14px] leading-[1.85] ${submenuBrand.body}`}>
            {paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section className={`mx-auto max-w-[880px] px-6 pb-10 sm:px-10`}>
          <div className="space-y-5">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-l-2 border-[#c77a05] pl-5 sm:grid-cols-[90px_1fr]"
              >
                <span className={`text-[28px] font-bold leading-none ${submenuBrand.accentText}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={`text-[18px] font-bold uppercase ${submenuBrand.dark}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-[13px] leading-[1.8] ${submenuBrand.muted}`}>
                    {getPrincipleText(item)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  }

  if (theme.variant === "compact") {
    return (
      <>
        <section className={`mx-auto max-w-[880px] px-6 py-8 sm:px-10`}>
          <div className={`border-b pb-7 ${submenuBrand.border}`}>
            <p className={`text-[11px] font-bold uppercase tracking-[0.24em] ${submenuBrand.accentText}`}>
              {page.eyebrow}
            </p>
            <h2 className={`mt-3 text-[26px] font-bold leading-tight ${submenuBrand.dark}`}>
              {page.title}
            </h2>
            <p className={`mt-4 text-[14px] leading-[1.85] ${submenuBrand.body}`}>
              {page.description}
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title}>
                <h3 className={`text-[14px] font-bold uppercase ${submenuBrand.dark}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-[13px] leading-[1.7] ${submenuBrand.muted}`}>
                  {getPrincipleText(item)}
                </p>
              </article>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-[880px] px-6 py-8 sm:px-10 sm:py-10">
        <p className={`text-center text-[11px] font-bold uppercase tracking-[0.24em] ${submenuBrand.accentText}`}>
          {page.eyebrow}
        </p>
        <h2 className={`mt-3 text-center text-[22px] font-medium uppercase tracking-[-0.01em] ${submenuBrand.accentText}`}>
          What is {page.title}?
        </h2>
        <div className={`mt-6 space-y-5 text-[14px] leading-[1.9] ${submenuBrand.body}`}>
          {paragraphs.slice(0, 4).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <SubmenuPrinciplesGrid principles={principles} theme={theme} title={page.cardsTitle} description={page.cardsDescription} />
    </>
  );
}

function SubmenuPrinciplesGrid({
  principles,
  theme,
  title,
  description,
}: {
  principles: SubmenuPrinciple[];
  theme: typeof defaultSubmenuCategoryTheme;
  title: string;
  description: string;
}) {
  return (
    <section className={`mx-auto max-w-[880px] border-t px-6 py-8 sm:px-10 sm:py-10 ${submenuBrand.border} ${submenuBrand.soft}`}>
      <h2 className={`text-center text-[22px] font-medium uppercase tracking-[-0.01em] ${submenuBrand.accentText}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mx-auto mt-4 max-w-2xl text-center text-[13px] leading-[1.75] ${submenuBrand.muted}`}>
          {description}
        </p>
      ) : null}

      <div className="mt-8 grid gap-x-12 gap-y-9 md:grid-cols-2">
        {principles.map((item, index) => (
          <article
            key={item.title}
            className="grid grid-cols-[118px_1fr] gap-5 sm:grid-cols-[136px_1fr]"
          >
            <div className="relative h-[96px] overflow-hidden bg-[#f4ead8] sm:h-[116px]">
              <OptimizedImage
                src={
                  submenuTileImages[
                    (index + theme.tileOffset) % submenuTileImages.length
                  ]
                }
                alt=""
                fill
                sizes="136px"
                className="object-cover object-center"
                showPlaceholder={false}
              />
            </div>
            <div>
              <h3 className={`text-[13px] font-bold uppercase leading-snug ${submenuBrand.dark}`}>
                {item.title}
              </h3>
              <p className={`mt-4 text-[13px] leading-[1.85] ${submenuBrand.muted}`}>
                {getPrincipleText(item)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function getPrincipleText(item: SubmenuPrinciple) {
  return "description" in item ? item.description : item.body;
}

function SubmenuVideoSection({
  video,
}: {
  video: NonNullable<PublicPageData["videos"]>[number];
}) {
  const embedUrl = video.href ? getVideoEmbedUrl(video.href) : null;
  const directVideoUrl = video.href && isDirectVideoUrl(video.href) ? video.href : null;

  return (
    <section className="mx-auto max-w-[880px] px-6 py-8 sm:px-10 sm:py-10">
      <div className={`grid overflow-hidden rounded-[22px] border bg-white shadow-[0_10px_30px_rgba(105,77,32,0.06)] lg:grid-cols-[1.35fr_0.65fr] ${submenuBrand.border}`}>
        <div className={`relative aspect-video ${submenuBrand.darkBg}`}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : directVideoUrl ? (
            <video
              src={directVideoUrl}
              poster={video.thumbnail}
              className="absolute inset-0 h-full w-full object-cover"
              controls
            />
          ) : video.href ? (
            <Link
              href={video.href}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <OptimizedImage
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="600px"
                className="object-cover object-center"
                showPlaceholder={false}
              />
              <span className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />
              <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-full ${submenuBrand.accent} text-white`}
              >
                <PlayCircle className="h-7 w-7" />
              </span>
            </Link>
          ) : null}
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${submenuBrand.accentText}`}>
            Featured Video
          </p>
          <h2 className={`mt-3 text-[24px] font-bold leading-tight ${submenuBrand.dark}`}>
            {video.title}
          </h2>
          <p className={`mt-3 text-[14px] leading-[1.75] ${submenuBrand.muted}`}>
            {video.description}
          </p>
          {video.href ? (
            <Button
              asChild
              className={`mt-5 h-10 rounded-full px-5 text-[12px] font-bold text-white ${submenuBrand.accent} hover:bg-[#b66d00]`}
            >
              <Link href={video.href}>
                Watch Video
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function getVideoEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname.includes("vimeo.com")) {
      const videoId = parsedUrl.pathname.split("/").filter(Boolean).at(-1);
      return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function isDirectVideoUrl(url: string) {
  try {
    const parsedUrl = new URL(url, "https://achebehopefoundation.org");
    return /\.(mp4|webm|ogg)$/i.test(parsedUrl.pathname);
  } catch {
    return false;
  }
}

function RelatedLinksStrip({ links }: { links: RelatedLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="mx-auto max-w-[900px] px-6 pb-10 sm:px-10">
      <div className="bg-[#f4ead8]">
        <h2 className={`py-3 text-center text-[12px] font-medium uppercase tracking-[0.28em] ${submenuBrand.muted}`}>
          Related Links
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {links.slice(0, 4).map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex h-[78px] items-center justify-center overflow-hidden border-t border-white text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white sm:border-l sm:first:border-l-0"
            >
              <OptimizedImage
                src={submenuTileImages[(index + 2) % submenuTileImages.length]}
                alt=""
                fill
                sizes="225px"
                className="object-cover object-center transition duration-300 group-hover:scale-105"
                showPlaceholder={false}
              />
              <span
                className={`absolute inset-0 bg-black/55 transition ${submenuBrand.relatedHover}`}
              />
              <span className="relative px-3">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
