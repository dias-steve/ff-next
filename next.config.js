/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['frequencefemme-back.ovh', 'www.frequencefemme-back.ovh'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
