import { Trash2 } from "lucide-react";
import { getGalleryImages } from "@/db/queries";
import { isMediaUploadEnabled } from "@/lib/media";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { GalleryImageUrlActions } from "@/components/dashboard/gallery-image-url-actions";
import { ConfirmSubmitButton } from "@/components/dashboard/confirm-submit-button";
import { OptimizedImage } from "@/components/common/optimized-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createGalleryImageAction,
  deleteGalleryImageAction,
  updateGalleryVisibilityAction,
} from "./actions";

export default async function DashboardGalleryPage() {
  const images = await getGalleryImages();
  const mediaUploadEnabled = isMediaUploadEnabled();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#17191f]">Gallery</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Add images that appear on the public gallery page.
        </p>
      </div>

      <form
        action={createGalleryImageAction}
        className="space-y-5 rounded-xl border border-gray-200 bg-white p-6"
      >
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Gallery image</Label>
          <MediaUploadField
            id="imageUrl"
            name="imageUrl"
            enabled={mediaUploadEnabled}
            galleryImages={images}
            placeholder="Upload an image or enter its URL"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="caption">Caption</Label>
            <Input id="caption" name="caption" placeholder="Describe the moment" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" placeholder="Education, Outreach..." />
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-[#17191f]">
          <input
            type="checkbox"
            name="showInGallery"
            value="true"
            defaultChecked
            className="h-4 w-4 rounded border-gray-300"
          />
          Show this image on the public gallery page
        </label>
        <Button type="submit">Add to gallery</Button>
      </form>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => (
          <article
            key={image.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <div className="relative aspect-video">
              <OptimizedImage
                src={image.imageUrl}
                alt={image.caption || "Gallery image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <p className="font-medium text-[#17191f]">
                  {image.caption || "Untitled image"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {image.category || "Uncategorized"}
                </p>
                <p className="mt-2 text-xs font-medium text-muted-foreground">
                  {image.showInGallery
                    ? "Visible on public gallery"
                    : "Hidden from public gallery"}
                </p>
                <GalleryImageUrlActions imageUrl={image.imageUrl} />
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <form action={updateGalleryVisibilityAction}>
                  <input type="hidden" name="id" value={image.id} />
                  <input
                    type="hidden"
                    name="showInGallery"
                    value={image.showInGallery ? "false" : "true"}
                  />
                  <ConfirmSubmitButton
                    title={image.showInGallery ? "Hide gallery image?" : "Show gallery image?"}
                    message={
                      image.showInGallery
                        ? `Hide "${image.caption || "this image"}" from the public gallery? It can still be used elsewhere by URL.`
                        : `Show "${image.caption || "this image"}" on the public gallery page?`
                    }
                    confirmLabel={image.showInGallery ? "Hide image" : "Show image"}
                    className="rounded-md px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 hover:text-[#17191f]"
                  >
                    {image.showInGallery ? "Hide" : "Show"}
                  </ConfirmSubmitButton>
                </form>
                <form action={deleteGalleryImageAction}>
                  <input type="hidden" name="id" value={image.id} />
                  <ConfirmSubmitButton
                    title="Delete gallery image?"
                    message={`Delete "${image.caption || "this gallery image"}"? If it was uploaded to Bunny storage, the file will also be removed and any page using this URL may stop showing it.`}
                    confirmLabel="Delete image"
                    aria-label="Remove gallery image"
                    className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </ConfirmSubmitButton>
                </form>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
