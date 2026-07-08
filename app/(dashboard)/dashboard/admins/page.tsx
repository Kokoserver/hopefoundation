import { asc } from "drizzle-orm";
import { DatabaseZap, Trash2 } from "lucide-react";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireAdmin } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmSubmitButton } from "@/components/dashboard/confirm-submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  createAdminAction,
  deleteAdminAction,
  seedDatabaseAction,
} from "./actions";

export default async function AdminsPage() {
  const currentAdmin = await requireAdmin();
  const admins = await db
    .select({
      id: adminUsers.id,
      name: adminUsers.name,
      email: adminUsers.email,
      isDefault: adminUsers.isDefault,
      createdAt: adminUsers.createdAt,
    })
    .from(adminUsers)
    .orderBy(asc(adminUsers.createdAt));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#17191f]">Administrators</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Add and remove accounts that can manage the platform.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-semibold text-[#17191f]">Add administrator</h2>
        <form action={createAdminAction} className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Temporary password</Label>
            <Input id="password" name="password" type="password" minLength={12} required />
          </div>
          <div className="md:col-span-3">
            <Button type="submit">Add administrator</Button>
          </div>
        </form>
      </div>

      {currentAdmin.isDefault && (
        <div className="rounded-xl border !border-amber-200 !bg-amber-50 p-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <DatabaseZap className="h-5 w-5 !text-amber-700" />
                <h2 className="text-lg font-semibold !text-[#17191f]">
                  Demo database
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 !text-gray-600">
                Restore any missing sample content for the demo website.
                Anything you have already added will remain unchanged. Some
                demo changes may reset automatically after the website has
                been inactive for a while.
              </p>
            </div>
            <form action={seedDatabaseAction}>
              <ConfirmSubmitButton
                title="Seed demo database?"
                message="Default records will be inserted only into empty tables. Existing platform data will not be overwritten."
                confirmLabel="Run seed"
                className="inline-flex items-center gap-2 rounded-full !bg-amber-700 px-5 py-2.5 text-sm font-semibold !text-white hover:!bg-amber-800"
              >
                <DatabaseZap className="h-4 w-4" />
                Seed database
              </ConfirmSubmitButton>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Type</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-4 py-3 font-medium text-[#17191f]">{admin.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{admin.email}</td>
                <td className="px-4 py-3">
                  {admin.isDefault ? <Badge variant="success">Default admin</Badge> : "Admin"}
                </td>
                <td className="px-4 py-3">
                  {admin.isDefault || admin.id === currentAdmin.id ? (
                    <span className="text-xs text-muted-foreground">
                      {admin.isDefault ? "Protected" : "Current account"}
                    </span>
                  ) : (
                    <form action={deleteAdminAction}>
                      <input type="hidden" name="id" value={admin.id} />
                      <ConfirmSubmitButton
                        title="Remove administrator?"
                        message={`Remove administrator "${admin.name}"? They will lose dashboard access immediately.`}
                        confirmLabel="Remove admin"
                        aria-label={`Remove ${admin.name}`}
                        className="rounded-md p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </ConfirmSubmitButton>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
