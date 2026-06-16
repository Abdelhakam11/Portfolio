import type { NextConfig } from "next";

const BASE = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE,
  assetPrefix: BASE,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;