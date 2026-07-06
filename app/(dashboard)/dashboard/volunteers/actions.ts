"use server";

import { revalidatePath } from "next/cache";
import { deleteVolunteerSubmission, updateVolunteerSubmission } from "@/db/queries";

export async function deleteVolunteerAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteVolunteerSubmission(id);
  revalidatePath("/dashboard/volunteers");
}

export async function updateVolunteerAction(formData: FormData) {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  await updateVolunteerSubmission(id, { status });
  revalidatePath("/dashboard/volunteers");
}
