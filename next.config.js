/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.rawg.io"],
  },
  serverRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_APIKEY,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_APIKEY,
  },
};

module.exports = nextConfig;
