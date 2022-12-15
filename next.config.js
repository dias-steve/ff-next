/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['frequencefemme-back.ovh', 'www.frequencefemme-back.ovh'],
    formats: ['image/avif', 'image/webp'],
  },
}
const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({});
module.exports = nextConfig
