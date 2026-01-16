import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themesflat.co",
      },
    ],
  },
};

export default nextConfig;
