/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui-react"]);

module.exports = withTM({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 120,
    domains: ['media.graphcms.com']
  }
});