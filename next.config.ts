import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: se exporta a /out y Cloudflare lo sirve como archivos.
  output: "export",
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
