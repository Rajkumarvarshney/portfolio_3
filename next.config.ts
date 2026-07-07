import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Generates static files in the `out/` directory
  trailingSlash: true,   // Required for static hosting (Render, Netlify, etc.)
};

export default nextConfig;
