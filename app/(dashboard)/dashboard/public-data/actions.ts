"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {
  getSubmenuPages,
  updateHomepageContent,
  updateSubmenuPagesContent,
} from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { cacheTags } from "@/lib/cache-tags";
import {
  defaultHomepageContent,
  type HomepageContent,
} from "@/lib/homepage-content";
import { withToast } from "@/lib/toast";

const value = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim();

const count = (formData: FormData, key: string) =>
  Number.parseInt(value(formData, key), 10) || 0;

export async function updatePublicDataAction(formData: FormData) {
  await requireAdmin();

  const content: HomepageContent = {
    hero: {
      eyebrow: value(formData, "heroEyebrow"),
      title: value(formData, "heroTitle"),
      description: value(formData, "heroDescription"),
      primaryButton: {
        label: value(formData, "heroPrimaryLabel"),
        href: value(formData, "heroPrimaryHref"),
      },
      secondaryButton: {
        label: value(formData, "heroSecondaryLabel"),
        href: value(formData, "heroSecondaryHref"),
      },
      slides: Array.from(
        { length: count(formData, "heroSlideCount") },
        (_, index) => {
          const defaultSlide = defaultHomepageContent.hero.slides[index];
          return {
            src: value(formData, `heroSlideSrc_${index}`),
            alt: value(formData, `heroSlideAlt_${index}`),
            title: defaultSlide?.title ?? defaultHomepageContent.hero.title,
            description:
              defaultSlide?.description ??
              defaultHomepageContent.hero.description,
            primaryButton:
              defaultSlide?.primaryButton ??
              defaultHomepageContent.hero.primaryButton,
            secondaryButton:
              defaultSlide?.secondaryButton ??
              defaultHomepageContent.hero.secondaryButton,
          };
        }
      ).filter((slide) => slide.src),
    },
    impact: {
      label: value(formData, "impactLabel"),
      stats: Array.from(
        { length: count(formData, "impactStatCount") },
        (_, index) => ({
          value: value(formData, `impactValue_${index}`),
          label: value(formData, `impactLabel_${index}`),
        })
      ).filter((stat) => stat.value || stat.label),
    },
    quote: {
      text: value(formData, "quoteText"),
      attribution: value(formData, "quoteAttribution"),
    },
    aada: defaultHomepageContent.aada,
    opportunity: {
      title: value(formData, "opportunityTitle"),
      footer: value(formData, "opportunityFooter"),
      cards: Array.from(
        { length: count(formData, "opportunityCardCount") },
        (_, index) => ({
          title: value(formData, `opportunityTitle_${index}`),
          description: value(formData, `opportunityDescription_${index}`),
        })
      ).filter((card) => card.title || card.description),
    },
    video: {
      label: value(formData, "videoLabel"),
      poster: value(formData, "videoPoster"),
      url: value(formData, "videoUrl"),
    },
    message: {
      title: value(formData, "messageTitle"),
      image: value(formData, "messageImage"),
      paragraphs: Array.from(
        { length: count(formData, "messageParagraphCount") },
        (_, index) => value(formData, `messageParagraph_${index}`)
      ).filter(Boolean),
    },
    closing: {
      title: value(formData, "closingTitle"),
      description: value(formData, "closingDescription"),
      image: value(formData, "closingImage"),
      primaryButton: {
        label: value(formData, "closingPrimaryLabel"),
        href: value(formData, "closingPrimaryHref"),
      },
      secondaryButton: {
        label: value(formData, "closingSecondaryLabel"),
        href: value(formData, "closingSecondaryHref"),
      },
    },
    partnerLogos: Array.from(
      { length: count(formData, "partnerLogoCount") },
      (_, index) => ({
        name: value(formData, `partnerLogoName_${index}`),
        src: value(formData, `partnerLogoSrc_${index}`),
      })
    ).filter((logo) => logo.name || logo.src),
  };

  if (!content.hero.title || content.hero.slides.length === 0) {
    redirect(
      withToast(
        "/dashboard/public-data",
        "The hero title and at least one hero image are required.",
        "error"
      )
    );
  }

  await updateHomepageContent(content);
  revalidateTag(cacheTags.homepage, "max");
  revalidatePath("/");
  redirect(withToast("/dashboard/public-data", "Public homepage data updated."));
}

export async function updateSubmenuPagesAction(formData: FormData) {
  await requireAdmin();

  const currentPages = await getSubmenuPages();
  const submenuCount = count(formData, "submenuPageCount");
  const nextPages = { ...currentPages };

  for (let pageIndex = 0; pageIndex < submenuCount; pageIndex += 1) {
    const slug = value(formData, `submenuSlug_${pageIndex}`);
    const currentPage = currentPages[slug];

    if (!slug || !currentPage) continue;

    const sectionCount = count(formData, `submenuSectionCount_${pageIndex}`);
    const cardCount = count(formData, `submenuCardCount_${pageIndex}`);
    const videoTitle = value(formData, `submenuVideoTitle_${pageIndex}`);
    const videoDescription = value(
      formData,
      `submenuVideoDescription_${pageIndex}`
    );
    const videoHref = value(formData, `submenuVideoHref_${pageIndex}`);
    const videoThumbnail = value(formData, `submenuVideoThumbnail_${pageIndex}`);

    nextPages[slug] = {
      ...currentPage,
      eyebrow: value(formData, `submenuEyebrow_${pageIndex}`),
      title: value(formData, `submenuTitle_${pageIndex}`),
      description: value(formData, `submenuDescription_${pageIndex}`),
      image: value(formData, `submenuImage_${pageIndex}`),
      imageAlt: value(formData, `submenuImageAlt_${pageIndex}`),
      overviewKicker: value(formData, `submenuOverviewKicker_${pageIndex}`),
      overviewTitle: value(formData, `submenuOverviewTitle_${pageIndex}`),
      cardsTitle: value(formData, `submenuCardsTitle_${pageIndex}`),
      cardsDescription: value(formData, `submenuCardsDescription_${pageIndex}`),
      ctaLabel: value(formData, `submenuCtaLabel_${pageIndex}`),
      ctaHref: value(formData, `submenuCtaHref_${pageIndex}`),
      sections: Array.from({ length: sectionCount }, (_, sectionIndex) => ({
        title: value(
          formData,
          `submenuSectionTitle_${pageIndex}_${sectionIndex}`
        ),
        body: value(
          formData,
          `submenuSectionBody_${pageIndex}_${sectionIndex}`
        ),
      })).filter((section) => section.title || section.body),
      cards: Array.from({ length: cardCount }, (_, cardIndex) => ({
        title: value(formData, `submenuCardTitle_${pageIndex}_${cardIndex}`),
        description: value(
          formData,
          `submenuCardDescription_${pageIndex}_${cardIndex}`
        ),
      })).filter((card) => card.title || card.description),
      videos: videoHref
        ? [
            {
              title: videoTitle || `${currentPage.title} Video`,
              description:
                videoDescription ||
                `Watch this video from Achebe Hope Foundation's ${currentPage.title} work.`,
              category: currentPage.eyebrow,
              duration: "Video",
              thumbnail: videoThumbnail || currentPage.image,
              href: videoHref,
            },
          ]
        : [],
    };
  }

  const invalidPage = Object.entries(nextPages).find(([, page]) => {
    return !page.title || !page.description || !page.image;
  });

  if (invalidPage) {
    redirect(
      withToast(
        "/dashboard/public-data",
        `Please complete title, description, and image for ${invalidPage[0]}.`,
        "error"
      )
    );
  }

  await updateSubmenuPagesContent(nextPages);
  revalidateTag(cacheTags.submenuPages, "max");

  for (const slug of Object.keys(nextPages)) {
    revalidatePath(`/${slug}`);
  }

  redirect(withToast("/dashboard/public-data", "Submenu pages updated."));
}
