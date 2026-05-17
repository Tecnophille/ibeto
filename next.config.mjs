/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/IBETO-home.asp", destination: "/", permanent: true },
      { source: "/IBETO-page.asp", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
