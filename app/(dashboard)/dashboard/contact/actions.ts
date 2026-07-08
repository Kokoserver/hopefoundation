"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteContactMessage, updateContactMessage } from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { withToast } from "@/lib/toast";

export async function deleteContactMessageAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await deleteContactMessage(id);
  revalidatePath("/dashboard/contact");
  redirect(withToast("/dashboard/contact", "Message deleted."));
}

export async function updateContactMessageAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  await updateContactMessage(id, { status });
  revalidatePath("/dashboard/contact");
  redirect(withToast(`/dashboard/contact/${id}`, "Message status updated."));
}
