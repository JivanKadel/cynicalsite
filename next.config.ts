import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cynicaltechnology.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/blogs",
  //       destination: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/blogs`,
  //     },
  //     {
  //       source: "/blogs/:path*",
  //       destination: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/blogs/:path*`,
  //     },
  //   ];
  // },
};

export default nextConfig;
