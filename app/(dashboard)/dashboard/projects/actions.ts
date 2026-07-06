"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createProject, deleteProject, updateProject } from "@/db/queries";

export async function createProjectAction(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    status: formData.get("status") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
  };
  await createProject(data);
  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function updateProjectAction(formData: FormData) {
  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    status: formData.get("status") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
  };
  await updateProject(id, data);
  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function deleteProjectAction(formData: FormData) {
  const id = formData.get("id") as string;
  await deleteProject(id);
  revalidatePath("/dashboard/projects");
}
