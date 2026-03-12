import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Add this line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
