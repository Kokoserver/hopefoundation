import { Label } from "@/components/ui/label";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { isMediaUploadEnabled } from "@/lib/media";
import { getGalleryImages } from "@/db/queries";

export default async function MediaPage() {
  const mediaUploadEnabled = isMediaUploadEnabled();
  const galleryImages = await getGalleryImages();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#17191f]">Media uploads</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Upload images and videos to Bunny Storage and copy the generated CDN URL.
        </p>
      </div>

      <div className="max-w-3xl rounded-xl border border-gray-200 bg-white p-6">
        <div className="space-y-2">
          <Label htmlFor="mediaUrl">Image or video</Label>
          <MediaUploadField
            id="mediaUrl"
            name="mediaUrl"
            accept="both"
            enabled={mediaUploadEnabled}
            galleryImages={galleryImages}
            placeholder="Upload media or paste an existing URL"
          />
        </div>

        <div className="mt-5 rounded-lg bg-gray-50 p-4 text-sm text-muted-foreground">
          Images may be up to 10MB. Videos may be up to 100MB. Uploaded files are
          stored under the hopefoundation folder in dated media directories and
          served through the configured CDN.
        </div>
      </div>
    </div>
  );
}
