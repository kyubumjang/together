/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
