"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { updateHomepageContent } from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { cacheTags } from "@/lib/cache-tags";
import type { HomepageContent } from "@/lib/homepage-content";
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
        (_, index) => ({
          src: value(formData, `heroSlideSrc_${index}`),
          alt: value(formData, `heroSlideAlt_${index}`),
        })
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
