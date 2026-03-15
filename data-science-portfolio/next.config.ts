import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Your repository name is Personal_Portfolio
  basePath: '/Personal_Portfolio',
  assetPrefix: '/Personal_Portfolio/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
