import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pizzeria-app-prod.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
