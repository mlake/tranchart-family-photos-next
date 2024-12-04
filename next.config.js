module.exports = {
  output: "export",
  distDir: 'docs',
  images: {
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
