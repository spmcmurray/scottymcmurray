/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Export each route as a folder with index.html so GitHub Pages serves
  // both /support and /support/. Without this, only support.html exists and
  // /support/ 404s.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
