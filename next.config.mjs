/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ecosim",
        destination: "https://eco-agent-sim.preview.emergentagent.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
