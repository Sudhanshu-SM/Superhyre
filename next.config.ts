import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This is the crucial line
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

export default nextConfig;
