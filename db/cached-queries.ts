import { unstable_cache } from "next/cache";
import {
  getHomepageContent,
  getProgramBySlug,
  getPrograms,
  getPublicGalleryImagesPage,
} from "@/db/queries";
import { cacheTags } from "@/lib/cache-tags";

export const getCachedHomepageContent = unstable_cache(
  getHomepageContent,
  ["homepage-content"],
  {
    tags: [cacheTags.homepage],
    revalidate: 3600,
  }
);

export const getCachedPrograms = unstable_cache(getPrograms, ["programs"], {
  tags: [cacheTags.programs],
  revalidate: 3600,
});

export const getCachedProgramBySlug = unstable_cache(
  getProgramBySlug,
  ["program-by-slug"],
  {
    tags: [cacheTags.programs],
    revalidate: 3600,
  }
);

export const getCachedPublicGalleryImagesPage = unstable_cache(
  getPublicGalleryImagesPage,
  ["public-gallery-images-page"],
  {
    tags: [cacheTags.gallery],
    revalidate: 3600,
  }
);
