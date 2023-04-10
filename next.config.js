/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs2.imgbox.com',
      }
    ]
  }
}

module.exports = nextConfig
