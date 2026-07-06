import Link from "next/link";
import { notFound } from "next/navigation";
import { getVolunteerSubmissionById } from "@/db/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { updateVolunteerAction } from "../actions";

type Props = { params: Promise<{ id: string }> };

export default async function VolunteerDetailPage({ params }: Props) {
  const { id } = await params;
  const v = await getVolunteerSubmissionById(id);
  if (!v) notFound();

  return (
    <div>
      <Link
        href="/dashboard/volunteers"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#17191f]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to volunteers
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#17191f]">{v.fullName}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{v.email}</p>
          </div>
          <Badge
            variant={
              v.status === "pending"
                ? "warning"
                : v.status === "reviewed"
                  ? "info"
                  : "success"
            }
          >
            {v.status}
          </Badge>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Phone
            </p>
            <p className="mt-1 text-sm text-[#17191f]">{v.phone || "—"}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Area of Interest
            </p>
            <p className="mt-1 text-sm text-[#17191f]">{v.areaOfInterest || "—"}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Message
          </p>
          <div className="mt-2 rounded-lg bg-gray-50 p-4">
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
              {v.message}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <h3 className="mb-3 text-sm font-semibold text-[#17191f]">Update Status</h3>
          <form action={updateVolunteerAction} className="flex items-center gap-3">
            <input type="hidden" name="id" value={v.id} />
            <select
              name="status"
              defaultValue={v.status}
              className="flex h-10 w-44 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="contacted">Contacted</option>
            </select>
            <Button type="submit" size="sm">
              Update
            </Button>
          </form>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Submitted: {new Date(v.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
