import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramById } from "@/db/queries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { updateProgramAction } from "../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditProgramPage({ params }: Props) {
  const { id } = await params;
  const program = await getProgramById(id);
  if (!program) notFound();

  return (
    <div>
      <Link
        href="/dashboard/programs"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#17191f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to programs
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="mb-6 text-xl font-bold text-[#17191f]">Edit Program</h1>

        <form action={updateProgramAction} className="space-y-6">
          <input type="hidden" name="id" value={program.id} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={program.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" defaultValue={program.slug} required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="tag">Tag / Status</Label>
              <select
                id="tag"
                name="tag"
                defaultValue={program.tag}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="planned">Planned</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="beneficiaries">Beneficiaries</Label>
              <Input id="beneficiaries" name="beneficiaries" defaultValue={program.beneficiaries} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" defaultValue={program.location} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Textarea id="description" name="description" defaultValue={program.description} rows={2} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullDescription">Full Description</Label>
            <Textarea id="fullDescription" name="fullDescription" defaultValue={program.fullDescription} rows={6} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">Goals (one per line)</Label>
            <Textarea id="goals" name="goals" defaultValue={program.goals.join("\n")} rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="outcomes">Outcomes (one per line)</Label>
            <Textarea id="outcomes" name="outcomes" defaultValue={program.outcomes.join("\n")} rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverImageUrl">Cover Image URL</Label>
            <Input id="coverImageUrl" name="coverImageUrl" defaultValue={program.coverImageUrl} />
          </div>

          <div className="flex gap-3">
            <Button type="submit">Save Changes</Button>
            <Link href="/dashboard/programs">
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
