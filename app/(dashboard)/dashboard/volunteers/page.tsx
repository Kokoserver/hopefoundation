import Link from "next/link";
import { getVolunteerSubmissions } from "@/db/queries";
import { Badge } from "@/components/ui/badge";
import { Trash2, Eye } from "lucide-react";
import { deleteVolunteerAction } from "./actions";

export default async function VolunteersPage() {
  const volunteers = await getVolunteerSubmissions();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#17191f]">Volunteer Submissions</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Review and manage volunteer applications.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Area of Interest</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {volunteers.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#17191f]">{v.fullName}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.email}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.areaOfInterest}</td>
                <td className="px-4 py-3">
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
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(v.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/volunteers/${v.id}`}
                      className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-[#17191f]"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <form action={deleteVolunteerAction}>
                      <input type="hidden" name="id" value={v.id} />
                      <button
                        type="submit"
                        className="rounded-md p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {volunteers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-sm text-muted-foreground">
                  No volunteer submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
