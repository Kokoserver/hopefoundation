import Link from "next/link";
import { getProjects } from "@/db/queries";
import { Badge } from "@/components/ui/badge";
import { ConfirmSubmitButton } from "@/components/dashboard/confirm-submit-button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { deleteProjectAction } from "./actions";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#17191f]">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage projects displayed on the public site.
          </p>
        </div>
        <Link
          href="/dashboard/projects/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#b8860b] px-4 py-2 text-sm font-medium text-white hover:bg-[#a3750a]"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-muted-foreground">Title</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Location</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#17191f]">{p.title}</td>
                <td className="px-4 py-3">
                  <Badge
                    variant={
                      p.status === "completed"
                        ? "success"
                        : p.status === "ongoing"
                          ? "info"
                          : "warning"
                    }
                  >
                    {p.status}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.location}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/projects/${p.id}`}
                      className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-[#17191f]"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <form action={deleteProjectAction}>
                      <input type="hidden" name="id" value={p.id} />
                      <ConfirmSubmitButton
                        title="Delete project?"
                        message={`Delete project "${p.title}"? This removes it from the public projects page.`}
                        confirmLabel="Delete project"
                        className="rounded-md p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No projects yet.{" "}
                  <Link href="/dashboard/projects/new" className="text-[#b8860b] hover:underline">
                    Create one
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
