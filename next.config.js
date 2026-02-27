/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // faster production builds
  compiler: {
    // Enables styled-components support if you use them
    styledComponents: true,
  },
  experimental: {
    appDir: true, // make sure App Router is enabled
  },
  images: {
    domains: ["images.unsplash.com", "your-cdn.com"], // add any external domains you use
  },
};

module.exports = nextConfig;