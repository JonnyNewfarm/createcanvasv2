import type { NextConfig } from "next";
const withVideos = require("next-videos");

const nextConfig: NextConfig = {
  images: {
    domains: ["utfs.io"],
  },
};

module.exports = withVideos(nextConfig);
