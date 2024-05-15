/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shakuf.co.il",
  // "https://shakuf.co.il/wp-content/uploads/"
      },
      {
        protocol: "https",
        hostname: "the7eye.org.il"
      },
      {
        protocol: "https",
        hostname: "cdn.the7eye.org.il"
      }
    ]
  }
};

export default nextConfig;