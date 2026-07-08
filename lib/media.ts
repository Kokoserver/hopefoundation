import "server-only";

export function isMediaUploadEnabled() {
  return process.env.MEDIA_UPLOAD_ENABLED === "true";
}

export function getBunnyStorageConfig() {
  const storageZone = process.env.BUNNY_STORAGE_ZONE;
  const storagePassword = process.env.BUNNY_STORAGE_PASSWORD;
  const storageHostname = process.env.BUNNY_STORAGE_HOSTNAME;
  const cdnUrl = process.env.BUNNY_CDN_URL;

  if (!storageZone || !storagePassword || !storageHostname || !cdnUrl) {
    throw new Error("Bunny media storage is not fully configured.");
  }

  return {
    storageZone,
    storagePassword,
    storageHostname: storageHostname.replace(/^https?:\/\//, "").replace(/\/$/, ""),
    cdnUrl: cdnUrl.replace(/\/$/, ""),
  };
}

export function getBunnyStoragePathFromUrl(url: string) {
  const config = getBunnyStorageConfig();

  try {
    const mediaUrl = new URL(url);
    const cdnUrl = new URL(config.cdnUrl);

    if (mediaUrl.origin !== cdnUrl.origin) {
      return null;
    }

    const storagePath = decodeURIComponent(mediaUrl.pathname.replace(/^\/+/, ""));

    if (!storagePath.startsWith("hopefoundation/") || storagePath.includes("..")) {
      return null;
    }

    return storagePath;
  } catch {
    return null;
  }
}

export async function deleteBunnyMediaByUrl(url: string) {
  const config = getBunnyStorageConfig();
  const storagePath = getBunnyStoragePathFromUrl(url);

  if (!storagePath) {
    return {
      ok: false,
      status: 400,
      error: "Only uploaded files in this project's Bunny folder can be deleted.",
    };
  }

  const deleteUrl = `https://${config.storageHostname}/${config.storageZone}/${storagePath}`;
  const response = await fetch(deleteUrl, {
    method: "DELETE",
    headers: {
      AccessKey: config.storagePassword,
    },
  });

  if (!response.ok && response.status !== 404) {
    console.error("Bunny delete failed", response.status, await response.text());
    return {
      ok: false,
      status: response.status,
      error: "The media service rejected the delete request. Please try again.",
    };
  }

  return { ok: true, status: response.status };
}
