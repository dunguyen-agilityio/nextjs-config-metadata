import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        hostname: "static.wixstatic.com",
        port: "",
        protocol: "https",
      },
      { hostname: "lh3.googleusercontent.com", port: "", protocol: "https" },
    ],
  },
};

export default nextConfig;
