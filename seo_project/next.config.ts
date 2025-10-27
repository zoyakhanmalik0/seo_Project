/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ignore ESLint errors during build
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;