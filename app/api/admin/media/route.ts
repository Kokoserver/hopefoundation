import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/auth";
import {
  deleteBunnyMediaByUrl,
  getBunnyStorageConfig,
  isMediaUploadEnabled,
} from "@/lib/media";

const IMAGE_TYPES = new Set([
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
]);
const VIDEO_TYPES = new Set(["video/mp4", "video/webm", "video/quicktime"]);
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;

function safeFileName(fileName: string) {
  const extension = fileName.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "");
  const baseName = fileName
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

  return `${randomUUID()}-${baseName || "media"}${extension ? `.${extension}` : ""}`;
}

export async function POST(request: Request) {
  if (!isMediaUploadEnabled()) {
    return NextResponse.json({ error: "Media uploading is disabled." }, { status: 404 });
  }

  if (!(await getCurrentAdmin())) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Select a file to upload." }, { status: 400 });
  }

  const isImage = IMAGE_TYPES.has(file.type);
  const isVideo = VIDEO_TYPES.has(file.type);

  if (!isImage && !isVideo) {
    return NextResponse.json(
      { error: "Only JPG, PNG, WebP, AVIF, GIF, MP4, WebM, and MOV files are allowed." },
      { status: 400 }
    );
  }

  const maximumBytes = isImage ? MAX_IMAGE_BYTES : MAX_VIDEO_BYTES;
  if (file.size > maximumBytes) {
    return NextResponse.json(
      { error: `${isImage ? "Images" : "Videos"} must be smaller than ${maximumBytes / 1024 / 1024}MB.` },
      { status: 400 }
    );
  }

  const config = getBunnyStorageConfig();
  const folder = isImage ? "images" : "videos";
  const date = new Date().toISOString().slice(0, 10);
  const storagePath = `hopefoundation/media/${folder}/${date}/${safeFileName(file.name)}`;
  const uploadUrl = `https://${config.storageHostname}/${config.storageZone}/${storagePath}`;

  const response = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      AccessKey: config.storagePassword,
      "Content-Type": "application/octet-stream",
    },
    body: await file.arrayBuffer(),
  });

  if (!response.ok) {
    console.error("Bunny upload failed", response.status, await response.text());
    return NextResponse.json(
      { error: "The media service rejected the upload. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    url: `${config.cdnUrl}/${storagePath}`,
    type: isImage ? "image" : "video",
  });
}

export async function DELETE(request: Request) {
  if (!isMediaUploadEnabled()) {
    return NextResponse.json({ error: "Media uploading is disabled." }, { status: 404 });
  }

  if (!(await getCurrentAdmin())) {
    return NextResponse.json({ error: "Authentication required." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as { url?: string } | null;
  const url = body?.url?.trim();

  if (!url) {
    return NextResponse.json({ error: "Media URL is required." }, { status: 400 });
  }

  const result = await deleteBunnyMediaByUrl(url);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status === 400 ? 400 : 502 }
    );
  }

  return NextResponse.json({ deleted: true });
}
