/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: '**.freeimages.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: '**.freepik.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
