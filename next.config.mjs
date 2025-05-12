/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // pon true si quieres un 301 permanente
      },
    ];
  },
};

export default nextConfig;
