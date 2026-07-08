"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteVolunteerSubmission, updateVolunteerSubmission } from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { withToast } from "@/lib/toast";

export async function deleteVolunteerAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await deleteVolunteerSubmission(id);
  revalidatePath("/dashboard/volunteers");
  redirect(withToast("/dashboard/volunteers", "Volunteer submission deleted."));
}

export async function updateVolunteerAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  await updateVolunteerSubmission(id, { status });
  revalidatePath("/dashboard/volunteers");
  redirect(withToast(`/dashboard/volunteers/${id}`, "Volunteer status updated."));
}
