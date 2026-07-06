"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createProgram, deleteProgram, updateProgram } from "@/db/queries";

export async function createProgramAction(formData: FormData) {
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
  revalidatePath("/dashboard/programs");
  redirect("/dashboard/programs");
}

export async function updateProgramAction(formData: FormData) {
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
  revalidatePath("/dashboard/programs");
  redirect("/dashboard/programs");
}

export async function deleteProgramAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteProgram(id);
  revalidatePath("/dashboard/programs");
}
