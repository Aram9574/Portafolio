/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    optimizePackageImports: []
  },
  async redirects() {
    return [
      {
        source: '/trabajemos-juntos',
        destination: '/posiciones',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
