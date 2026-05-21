/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    optimizePackageImports: []
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu.api.accredible.com',
        pathname: '/v1/frontend/credential_website_embed_image/**',
      },
    ],
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
