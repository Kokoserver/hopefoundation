"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { hashPassword, requireAdmin } from "@/lib/auth";
import { withToast } from "@/lib/toast";
import { seedDatabase } from "@/db/seed";

export async function createAdminAction(formData: FormData) {
  await requireAdmin();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!name || !email || password.length < 12) {
    redirect(
      withToast(
        "/dashboard/admins",
        "Name, email, and a password of at least 12 characters are required.",
        "error"
      )
    );
  }

  try {
    await db.insert(adminUsers).values({
      name,
      email,
      passwordHash: await hashPassword(password),
    });
  } catch {
    redirect(
      withToast("/dashboard/admins", "An administrator with that email already exists.", "error")
    );
  }

  revalidatePath("/dashboard/admins");
  redirect(withToast("/dashboard/admins", "Administrator added successfully."));
}

export async function deleteAdminAction(formData: FormData) {
  const currentAdmin = await requireAdmin();
  const adminId = String(formData.get("id") ?? "");

  if (!adminId || adminId === currentAdmin.id) {
    redirect(
      withToast("/dashboard/admins", "You cannot remove your own active account.", "error")
    );
  }

  const removedAdmins = await db
    .delete(adminUsers)
    .where(and(eq(adminUsers.id, adminId), eq(adminUsers.isDefault, false)))
    .returning({ id: adminUsers.id });

  if (removedAdmins.length === 0) {
    redirect(
      withToast("/dashboard/admins", "The protected default administrator cannot be removed.", "error")
    );
  }

  revalidatePath("/dashboard/admins");
  redirect(withToast("/dashboard/admins", "Administrator removed."));
}

export async function seedDatabaseAction() {
  const currentAdmin = await requireAdmin();

  if (!currentAdmin.isDefault) {
    redirect(
      withToast(
        "/dashboard/admins",
        "Only the protected default administrator can seed the database.",
        "error"
      )
    );
  }

  try {
    await seedDatabase();
  } catch {
    redirect(
      withToast(
        "/dashboard/admins",
        "Database seeding failed. Check the server logs.",
        "error"
      )
    );
  }

  revalidatePath("/", "layout");
  redirect(
    withToast(
      "/dashboard/admins",
      "Database seed completed. Existing records were preserved."
    )
  );
}
