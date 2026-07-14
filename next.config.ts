import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Required for GitHub Pages — use your repo name here
  // If deploying to iamajayprajapati.github.io (user site), leave basePath as ""
  // If deploying to iamajayprajapati.github.io/my-site, set basePath: "/my-site"
  basePath: "",

  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // Trailing slashes ensure correct routing on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
