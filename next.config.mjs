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
        hostname: "drive.google.com",
        pathname: "/uc",
      },
       {
        protocol: "https",
        hostname: "youtu.be",
        pathname: "/4p3PAdr-l9I?si=piWnQsneB1ViqHvJ",
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
