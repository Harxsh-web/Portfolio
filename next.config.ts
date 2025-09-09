/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during production build
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;
