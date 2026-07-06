import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { createStoryAction } from "../actions";

export default function NewStoryPage() {
  return (
    <div>
      <Link
        href="/dashboard/stories"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#17191f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to stories
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="mb-6 text-xl font-bold text-[#17191f]">New Story</h1>

        <form action={createStoryAction} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Story title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" placeholder="story-url-slug" required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input id="author" name="author" placeholder="Author name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                defaultValue="Community wins"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="Beneficiary journeys">Beneficiary journeys</option>
                <option value="Volunteer reflections">Volunteer reflections</option>
                <option value="Partner perspectives">Partner perspectives</option>
                <option value="Community wins">Community wins</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" name="excerpt" placeholder="Short summary for card preview" rows={3} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" placeholder="Full story content..." rows={12} required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="coverImageUrl">Cover Image URL</Label>
              <Input id="coverImageUrl" name="coverImageUrl" placeholder="/images/..." />
            </div>
            <div className="flex items-end gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  value="true"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="published">Publish immediately</Label>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="submit">Create Story</Button>
            <Link href="/dashboard/stories">
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
