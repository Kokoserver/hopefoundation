"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import type { GalleryImage } from "@/db/types";
import { OptimizedImage } from "@/components/common/optimized-image";

type InfiniteGalleryProps = {
  initialImages: GalleryImage[];
  initialHasMore: boolean;
  pageSize: number;
};

export function InfiniteGallery({
  initialImages,
  initialHasMore,
  pageSize,
}: InfiniteGalleryProps) {
  const [images, setImages] = useState(initialImages);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/gallery?offset=${images.length}&limit=${pageSize}`
      );
      const result = (await response.json()) as {
        images?: GalleryImage[];
        hasMore?: boolean;
      };

      if (!response.ok || !Array.isArray(result.images)) {
        throw new Error("Unable to load more gallery images.");
      }

      setImages((currentImages) => {
        const existingIds = new Set(currentImages.map((image) => image.id));
        const newImages = result.images!.filter(
          (image) => !existingIds.has(image.id)
        );
        return [...currentImages, ...newImages];
      });
      setHasMore(Boolean(result.hasMore));
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Unable to load more gallery images."
      );
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, images.length, isLoading, pageSize]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) void loadMore();
      },
      { rootMargin: "500px 0px" }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#d8cbb8] py-20 text-center text-muted-foreground">
        Gallery images will appear here.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.id}
            className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(105,77,32,0.08)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <OptimizedImage
                src={image.imageUrl}
                alt={image.caption || "Achebe Hope Foundation gallery"}
                fill
                quality={90}
                className="image-soft-zoom object-cover"
              />
            </div>
            <figcaption className="p-5">
              <p className="font-semibold text-[#17191f]">
                {image.caption || "Foundation activity"}
              </p>
              {image.category && (
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold">
                  {image.category}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {error && (
        <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div ref={sentinelRef} className="flex min-h-12 justify-center">
        {isLoading && (
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-sm">
            <LoaderCircle className="h-4 w-4 animate-spin text-gold" />
            Loading more images
          </div>
        )}
        {!isLoading && hasMore && (
          <button
            type="button"
            onClick={() => void loadMore()}
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-white hover:bg-gold/90"
          >
            Load more images
          </button>
        )}
      </div>
    </div>
  );
}
