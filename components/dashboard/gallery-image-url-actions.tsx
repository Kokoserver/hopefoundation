"use client";

import { Copy } from "lucide-react";

type GalleryImageUrlActionsProps = {
  imageUrl: string;
};

function notify(message: string, type: "success" | "error") {
  window.dispatchEvent(
    new CustomEvent("app-toast", { detail: { message, type } })
  );
}

export function GalleryImageUrlActions({
  imageUrl,
}: GalleryImageUrlActionsProps) {
  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(imageUrl);
      notify("Gallery image URL copied.", "success");
    } catch {
      notify("The URL could not be copied. Please copy it manually.", "error");
    }
  }

  return (
    <div className="mt-3 flex items-center gap-2">
      <input
        type="text"
        value={imageUrl}
        readOnly
        aria-label="Gallery image URL"
        className="min-w-0 flex-1 rounded-md border !border-gray-200 !bg-gray-50 px-2 py-1.5 text-xs !text-gray-600"
      />
      <button
        type="button"
        onClick={() => void copyUrl()}
        className="inline-flex shrink-0 items-center gap-1 rounded-md border !border-gray-300 !bg-white px-2.5 py-1.5 text-xs font-medium !text-[#211b15] hover:!bg-gray-50"
      >
        <Copy className="h-3.5 w-3.5" />
        Copy
      </button>
    </div>
  );
}
