const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a static site in out/ so GitHub Pages can host it without a Node server.
  output: "export",
  images: {
    // The default loader needs a Next server. Cloudinary already resizes the photos.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/doxqsq6gh/**",
      },
    ],
  },
};

// Project Pages sites are served from /<repo>. Custom domains and local dev stay at /.
if (basePath) {
  nextConfig.basePath = basePath;
}

module.exports = nextConfig;
