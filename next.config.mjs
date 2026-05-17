/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/IBETO-home.asp", destination: "/", permanent: true },
      { source: "/IBETO-page.asp", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
