"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createStory, deleteStory, updateStory } from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { withToast } from "@/lib/toast";

export async function createStoryAction(formData: FormData) {
  await requireAdmin();
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    author: formData.get("author") as string,
    category: formData.get("category") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
    published: formData.get("published") === "true",
    publishedAt: formData.get("published") === "true" ? new Date().toISOString() : null,
  };
  await createStory(data);
  revalidatePath("/dashboard/stories");
  redirect(withToast("/dashboard/stories", "Story created successfully."));
}

export async function updateStoryAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  const data = {
    title: formData.get("title") as string,
    slug: formData.get("slug") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    author: formData.get("author") as string,
    category: formData.get("category") as string,
    coverImageUrl: formData.get("coverImageUrl") as string,
    published: formData.get("published") === "true",
    publishedAt: formData.get("published") === "true" ? new Date().toISOString() : null,
  };
  await updateStory(id, data);
  revalidatePath("/dashboard/stories");
  redirect(withToast("/dashboard/stories", "Story updated successfully."));
}

export async function deleteStoryAction(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id") as string;
  await deleteStory(id);
  revalidatePath("/dashboard/stories");
  redirect(withToast("/dashboard/stories", "Story deleted."));
}
