"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import {
  createAdminSession,
  deleteCurrentSession,
  getCurrentAdmin,
  verifyPassword,
} from "@/lib/auth";
import { withToast } from "@/lib/toast";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const [admin] = await db
    .select()
    .from(adminUsers)
    .where(eq(adminUsers.email, email))
    .limit(1);

  if (!admin || !(await verifyPassword(password, admin.passwordHash))) {
    redirect(withToast("/admin/login?error=invalid", "Invalid email or password.", "error"));
  }

  await createAdminSession(admin.id);
  redirect(withToast("/dashboard", `Welcome back, ${admin.name}.`));
}

export async function logoutAction() {
  await deleteCurrentSession();
  redirect(withToast("/admin/login", "You have been signed out."));
}

export async function redirectAuthenticatedAdmin() {
  if (await getCurrentAdmin()) redirect("/dashboard");
}
