import { Camera } from "lucide-react";
import { getCachedPublicGalleryImagesPage } from "@/db/cached-queries";
import { InfiniteGallery } from "@/components/gallery/infinite-gallery";

const GALLERY_PAGE_SIZE = 9;

export default async function GalleryPage() {
  const initialPage = await getCachedPublicGalleryImagesPage({
    limit: GALLERY_PAGE_SIZE,
    offset: 0,
  });

  return (
    <div className="bg-background">
      <section className="bg-footer px-6 pb-16 pt-28 text-center text-white sm:pb-20 sm:pt-36">
        <Camera className="mx-auto mb-5 h-9 w-9 text-gold" />
        <h1 className="text-[38px] font-bold sm:text-[56px]">Our Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
          Moments from our programmes, outreach activities, and community partnerships.
        </p>
      </section>

      <section className="mx-auto max-w-[1180px] px-6 py-16 sm:px-10 sm:py-20">
        <InfiniteGallery
          initialImages={initialPage.images}
          initialHasMore={initialPage.hasMore}
          pageSize={GALLERY_PAGE_SIZE}
        />
      </section>
    </div>
  );
}
