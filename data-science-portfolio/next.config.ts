import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Your repository name is Personal_Portfolio
  basePath: '/SharmaPranav',
  assetPrefix: '/SharmaPranav/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
