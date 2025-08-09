/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mugxw0xytrcwypxj.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mega.nz",
        pathname: "/file/**",
      },
    ],
  },
};

export default nextConfig;
