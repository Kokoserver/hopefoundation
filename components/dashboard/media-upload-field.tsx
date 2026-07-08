"use client";

import { useRef, useState } from "react";
import {
  Copy,
  ImagePlus,
  Images,
  LoaderCircle,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { ConfirmButton } from "@/components/dashboard/confirm-submit-button";

type MediaUploadFieldProps = {
  id: string;
  name: string;
  defaultValue?: string;
  accept?: "image" | "video" | "both";
  enabled: boolean;
  placeholder?: string;
  galleryImages?: {
    id: string;
    imageUrl: string;
    caption: string;
    category: string;
  }[];
};

function notify(message: string, type: "success" | "error") {
  window.dispatchEvent(
    new CustomEvent("app-toast", { detail: { message, type } })
  );
}

export function MediaUploadField({
  id,
  name,
  defaultValue = "",
  accept = "image",
  enabled,
  placeholder = "https://...",
  galleryImages = [],
}: MediaUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [search, setSearch] = useState("");

  const acceptedTypes =
    accept === "image"
      ? "image/jpeg,image/png,image/webp,image/avif,image/gif"
      : accept === "video"
        ? "video/mp4,video/webm,video/quicktime"
        : "image/*,video/mp4,video/webm,video/quicktime";

  async function uploadFile(file: File) {
    setIsUploading(true);
    const formData = new FormData();
    formData.set("file", file);

    try {
      const response = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !result.url) {
        throw new Error(result.error || "Upload failed.");
      }

      setValue(result.url);
      notify("Media uploaded successfully.", "success");
    } catch (error) {
      notify(error instanceof Error ? error.message : "Upload failed.", "error");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function copyUrl() {
    if (!value) {
      notify("Upload a file or enter a URL first.", "error");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      notify("Media URL copied to clipboard.", "success");
    } catch {
      notify("The URL could not be copied. Please copy it manually.", "error");
    }
  }

  async function deleteCurrentMedia() {
    if (!value) {
      notify("Upload a file or enter a URL first.", "error");
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch("/api/admin/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: value }),
      });
      const result = (await response.json()) as {
        deleted?: boolean;
        error?: string;
      };

      if (!response.ok || !result.deleted) {
        throw new Error(result.error || "Delete failed.");
      }

      setValue("");
      notify("Media deleted from storage. Save the form to keep this field empty.", "success");
    } catch (error) {
      notify(error instanceof Error ? error.message : "Delete failed.", "error");
    } finally {
      setIsDeleting(false);
    }
  }

  const filteredGalleryImages = galleryImages.filter((image) => {
    const searchText = `${image.caption} ${image.category} ${image.imageUrl}`.toLowerCase();
    return searchText.includes(search.toLowerCase());
  });

  function selectGalleryImage(url: string) {
    setValue(url);
    setIsGalleryOpen(false);
    notify("Gallery image selected.", "success");
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Input
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="button"
          disabled={!value}
          onClick={() => void copyUrl()}
          aria-label="Copy media URL"
          title="Copy media URL"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border !border-gray-300 !bg-white px-3 text-sm font-medium !text-[#211b15] transition hover:!bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Copy className="h-4 w-4" />
          <span className="hidden sm:inline">Copy</span>
        </button>
        {galleryImages.length > 0 && accept !== "video" && (
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            aria-label="Choose image from gallery"
            title="Choose image from gallery"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border !border-gray-300 !bg-white px-3 text-sm font-medium !text-[#211b15] transition hover:!bg-gray-50"
          >
            <Images className="h-4 w-4" />
            <span className="hidden sm:inline">Gallery</span>
          </button>
        )}
        {enabled && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptedTypes}
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) void uploadFile(file);
              }}
            />
            <button
              type="button"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex shrink-0 items-center gap-2 rounded-md !bg-[#211b15] px-4 text-sm font-medium !text-white transition hover:!bg-[#382e24] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUploading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : accept === "image" ? (
                <ImagePlus className="h-4 w-4" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              {isUploading ? "Uploading" : "Upload"}
            </button>
          </>
        )}
      </div>
      {enabled && value && (
        <div className="flex flex-wrap items-center gap-2">
          <ConfirmButton
            title="Delete uploaded file?"
            message="This removes the file from Bunny storage. If this URL is used elsewhere, that image or video will stop loading."
            confirmLabel="Delete file"
            disabled={isDeleting || isUploading}
            onConfirm={deleteCurrentMedia}
            className="inline-flex items-center gap-2 rounded-md border !border-red-200 !bg-red-50 px-3 py-2 text-xs font-semibold !text-red-700 transition hover:!bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeleting ? (
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Trash2 className="h-3.5 w-3.5" />
            )}
            {isDeleting ? "Deleting" : "Delete uploaded file before replacing"}
          </ConfirmButton>
          <p className="text-xs !text-gray-500">
            This only deletes files uploaded to the configured Bunny CDN under
            the hopefoundation folder.
          </p>
        </div>
      )}
      {!enabled && (
        <p className="text-xs text-muted-foreground">
          Direct media uploading is currently disabled. Enter a media URL.
        </p>
      )}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Select gallery image"
        >
          <div className="max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl !bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 p-4">
              <div>
                <h3 className="text-lg font-semibold !text-[#17191f]">
                  Select image from gallery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Choose an existing public gallery image.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-md p-2 !text-gray-500 hover:!bg-gray-100 hover:!text-[#17191f]"
                aria-label="Close gallery picker"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 overflow-y-auto p-4">
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by caption, category, or URL"
                aria-label="Search gallery images"
              />
              {filteredGalleryImages.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredGalleryImages.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => selectGalleryImage(image.imageUrl)}
                      className="overflow-hidden rounded-xl border !border-gray-200 !bg-white text-left transition hover:!border-[#c89200] hover:shadow-md"
                    >
                      <span className="block aspect-video overflow-hidden !bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.imageUrl}
                          alt={image.caption || "Gallery image"}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="block p-3">
                        <span className="block truncate text-sm font-medium !text-[#17191f]">
                          {image.caption || "Untitled image"}
                        </span>
                        <span className="mt-1 block truncate text-xs !text-gray-500">
                          {image.category || "Uncategorized"}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="rounded-lg !bg-gray-50 p-4 text-sm !text-gray-600">
                  No gallery images match your search.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
