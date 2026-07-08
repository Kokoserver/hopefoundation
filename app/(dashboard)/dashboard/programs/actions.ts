"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createProgram, deleteProgram, updateProgram } from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { cacheTags } from "@/lib/cache-tags";
import { withToast } from "@/lib/toast";

export async function createProgramAction(formData: FormData) {
  await requireAdmin();
  const getArr = (key: string) =>
    (formData.get(key) as string).split("\n").filter(Boolean);

  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    tag: formData.get("tag") as string,
    description: formData.get("description") as string,
    fullDescription: formData.get("fullDescription") as string,
    beneficiaries: formData.get("beneficiaries") as string,
    location: formData.get("location") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
    goals: getArr("goals"),
    outcomes: getArr("outcomes"),
  };
  await createProgram(data);
  revalidateTag(cacheTags.programs, "max");
  revalidatePath("/dashboard/programs");
  revalidatePath("/");
  revalidatePath("/programs");
  redirect(withToast("/dashboard/programs", "Program created successfully."));
}

export async function updateProgramAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const getArr = (key: string) =>
    (formData.get(key) as string).split("\n").filter(Boolean);

  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    tag: formData.get("tag") as string,
    description: formData.get("description") as string,
    fullDescription: formData.get("fullDescription") as string,
    beneficiaries: formData.get("beneficiaries") as string,
    location: formData.get("location") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
    goals: getArr("goals"),
    outcomes: getArr("outcomes"),
  };
  await updateProgram(id, data);
  revalidateTag(cacheTags.programs, "max");
  revalidatePath("/dashboard/programs");
  revalidatePath("/");
  revalidatePath("/programs");
  revalidatePath(`/programs/${data.slug}`);
  redirect(withToast("/dashboard/programs", "Program updated successfully."));
}

export async function deleteProgramAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await deleteProgram(id);
  revalidateTag(cacheTags.programs, "max");
  revalidatePath("/dashboard/programs");
  revalidatePath("/");
  revalidatePath("/programs");
  redirect(withToast("/dashboard/programs", "Program deleted."));
}
