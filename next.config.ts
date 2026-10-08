import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a plain HTML/CSS/JS copy into `out/` that can be
// opened from any static host (used for shareable previews).
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isExport ? { output: "export", assetPrefix: "./", images: { unoptimized: true } } : {}),
};

export default nextConfig;
