import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { createProjectAction } from "../actions";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { isMediaUploadEnabled } from "@/lib/media";
import { getGalleryImages } from "@/db/queries";

export default async function NewProjectPage() {
  const mediaUploadEnabled = isMediaUploadEnabled();
  const galleryImages = await getGalleryImages();
  return (
    <div>
      <Link
        href="/dashboard/projects"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#17191f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="mb-6 text-xl font-bold text-[#17191f]">New Project</h1>

        <form action={createProjectAction} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Project title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" placeholder="project-url-slug" required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                defaultValue="planned"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="planned">Planned</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="e.g. Enugu South" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" placeholder="Project description..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImageUrl">Cover Image URL</Label>
            <MediaUploadField
              id="coverImageUrl"
              name="coverImageUrl"
              enabled={mediaUploadEnabled}
              galleryImages={galleryImages}
              placeholder="/images/... or upload an image"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Create Project</Button>
            <Link href="/dashboard/projects">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
