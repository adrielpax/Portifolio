/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
  }
}

module.exports = nextConfig
