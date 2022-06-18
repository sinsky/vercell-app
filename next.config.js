/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/me",
        destination: "https://sinsky.dev",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
