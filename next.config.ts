import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio",
  images: {
    formats: ["image/webp", "image/avif"],
    unoptimized: false,
  },
};

export default nextConfig;
