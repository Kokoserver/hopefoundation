import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDirectory,
  },
  outputFileTracingIncludes: {
    "/*": ["./data/hopefoundation.db"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "achebeecdn.b-cdn.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 50, 75, 90],
  },
};

export default nextConfig;
