/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'dexbytes-website-storage.s3.us-east-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
