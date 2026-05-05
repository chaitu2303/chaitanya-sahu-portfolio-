import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This helps Netlify handle the static files correctly
  trailingSlash: true,
};

export default nextConfig;
