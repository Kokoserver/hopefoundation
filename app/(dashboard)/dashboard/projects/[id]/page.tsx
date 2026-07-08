import Link from "next/link";
import { notFound } from "next/navigation";
import { getGalleryImages, getProjectById } from "@/db/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { updateProjectAction } from "../actions";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { isMediaUploadEnabled } from "@/lib/media";

type Props = { params: Promise<{ id: string }> };

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();
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
        <h1 className="mb-6 text-xl font-bold text-[#17191f]">Edit Project</h1>

        <form action={updateProjectAction} className="space-y-6">
          <input type="hidden" name="id" value={project.id} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={project.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={project.slug} required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                defaultValue={project.status}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="planned">Planned</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue={project.location} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={project.description} rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImageUrl">Cover Image URL</Label>
            <MediaUploadField
              id="coverImageUrl"
              name="coverImageUrl"
              defaultValue={project.coverImageUrl}
              enabled={mediaUploadEnabled}
              galleryImages={galleryImages}
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Save Changes</Button>
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
