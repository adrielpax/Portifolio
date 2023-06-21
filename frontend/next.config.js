/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/src/api/:path*',
      },
    ];
  },
  reactStrictMode: true,

  swcMinify: false,
  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig
