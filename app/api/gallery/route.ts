import { NextResponse } from "next/server";
import { getCachedPublicGalleryImagesPage } from "@/db/cached-queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "9");
  const offset = Number(searchParams.get("offset") ?? "0");

  const page = await getCachedPublicGalleryImagesPage({
    limit: Number.isFinite(limit) ? limit : 9,
    offset: Number.isFinite(offset) ? offset : 0,
  });

  return NextResponse.json(page);
}
