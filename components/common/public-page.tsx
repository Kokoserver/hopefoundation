import {
  RebrandCards,
  RebrandCta,
  RebrandHero,
  RebrandIntro,
  RebrandStats,
} from "@/components/common/rebrand-sections";

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
  layout?:
    | "article"
    | "split"
    | "cards"
    | "text"
    | "downloads"
    | "videos"
    | "manifesto"
    | "approach"
    | "stories"
    | "news";
  theme?: "default" | "aada" | "support" | "media" | "legal" | "impact";
  overviewKicker: string;
  overviewTitle: string;
  cardsTitle: string;
  cardsDescription: string;
  sections: PublicPageSection[];
  cards: PublicPageCard[];
  ctaLabel?: string;
  ctaHref?: string;
  downloads?: {
    title: string;
    description: string;
    category: string;
    fileType: string;
    href?: string;
  }[];
  videos?: {
    title: string;
    description: string;
    category: string;
    duration: string;
    thumbnail: string;
    href?: string;
  }[];
};

type PublicPageProps = {
  page: PublicPageData;
};

export function PublicPage({ page }: PublicPageProps) {
  return (
    <div className="bg-background">
      <RebrandHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        primaryButton={
          page.ctaLabel && page.ctaHref
            ? { label: page.ctaLabel, href: page.ctaHref }
            : undefined
        }
      />

      <RebrandIntro
        eyebrow={page.overviewKicker}
        title={page.overviewTitle}
        description={page.sections.map((section) => `${section.title}: ${section.body}`).join("\n\n")}
        image={page.image}
        imageAlt={page.imageAlt}
      />

      <RebrandCards
        eyebrow={page.eyebrow}
        title={page.cardsTitle}
        description={page.cardsDescription}
        cards={page.cards}
      />

      {page.theme === "impact" || page.theme === "support" ? (
        <RebrandStats
          stats={[
            { value: "18K+", label: "Lives supported through outreach programmes" },
            { value: "₦3.8M+", label: "Funds raised for field interventions" },
            { value: "1200+", label: "Children and families reached" },
            { value: "35+", label: "Communities served with practical support" },
          ]}
        />
      ) : null}

      {page.ctaHref ? <RebrandCta /> : null}
    </div>
  );
}
