/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  scope: "/",
  sw: "service-worker.js",
  disable: process.env.NODE_ENV === "development"
});

const nextConfig: NextConfig = withPWA({
  reactStrictMode: true,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/manifest+json"
          }
        ]
      }
    ];
  }
});

export default nextConfig;
