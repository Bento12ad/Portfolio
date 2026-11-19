import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const isVercelOrCloudflare = Boolean(process.env.VERCEL || process.env.CF_PAGES);

// GitHub Pages requires /Portfolio repository subpath unless a custom domain or Vercel/Cloudflare is used
const basePath = isProduction && !isVercelOrCloudflare ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
