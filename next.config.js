/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'assets.example.com',
      'cdn-icons-png.flaticon.com'
    ],
  },
}

module.exports = nextConfig
