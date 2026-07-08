"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import {
  createGalleryImage,
  deleteGalleryImage,
  getGalleryImages,
  updateGalleryImageVisibility,
} from "@/db/queries";
import { requireAdmin } from "@/lib/auth";
import { cacheTags } from "@/lib/cache-tags";
import { deleteBunnyMediaByUrl } from "@/lib/media";
import { withToast } from "@/lib/toast";

export async function createGalleryImageAction(formData: FormData) {
  await requireAdmin();

  const imageUrl = String(formData.get("imageUrl") ?? "").trim();
  const caption = String(formData.get("caption") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const showInGallery = formData.get("showInGallery") === "true";

  if (!imageUrl) {
    redirect(
      withToast("/dashboard/gallery", "Upload or enter an image URL.", "error")
    );
  }

  await createGalleryImage({ imageUrl, caption, category, showInGallery });
  revalidateTag(cacheTags.gallery, "max");
  revalidatePath("/dashboard/gallery");
  revalidatePath("/gallery");
  redirect(withToast("/dashboard/gallery", "Gallery image added."));
}

export async function updateGalleryVisibilityAction(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const showInGallery = formData.get("showInGallery") === "true";

  await updateGalleryImageVisibility(id, showInGallery);
  revalidateTag(cacheTags.gallery, "max");
  revalidatePath("/dashboard/gallery");
  revalidatePath("/gallery");
  redirect(withToast("/dashboard/gallery", "Gallery visibility updated."));
}

export async function deleteGalleryImageAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const image = (await getGalleryImages()).find((item) => item.id === id);

  if (image?.imageUrl) {
    const deleteResult = await deleteBunnyMediaByUrl(image.imageUrl);

    if (!deleteResult.ok && deleteResult.status !== 400) {
      redirect(
        withToast(
          "/dashboard/gallery",
          deleteResult.error || "Could not delete the uploaded file.",
          "error"
        )
      );
    }
  }

  await deleteGalleryImage(id);
  revalidateTag(cacheTags.gallery, "max");
  revalidatePath("/dashboard/gallery");
  revalidatePath("/gallery");
  redirect(withToast("/dashboard/gallery", "Gallery image removed."));
}
