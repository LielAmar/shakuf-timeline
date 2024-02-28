/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shakuf.co.il",
  // "https://shakuf.co.il/wp-content/uploads/"
      }
    ]
  }
};

export default nextConfig;