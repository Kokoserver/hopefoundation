"use server";

import { revalidatePath } from "next/cache";
import { deleteContactMessage, updateContactMessage } from "@/db/queries";

export async function deleteContactMessageAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteContactMessage(id);
  revalidatePath("/dashboard/contact");
}

export async function updateContactMessageAction(formData: FormData) {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  await updateContactMessage(id, { status });
  revalidatePath("/dashboard/contact");
}
