module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
