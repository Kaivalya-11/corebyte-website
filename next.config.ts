import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for catching potential issues early
  reactStrictMode: true,

  // Image optimization: add external domains here as needed in Sprint 3
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
