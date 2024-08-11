import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  transpilePackages: [
    "@nex-ui/react",
    "@nex-ui/system",
    "@nex-ui/styled",
    "@nex-ui/utils",
  ],
  webpack: (config) => {
    config.resolve.alias.react = path.resolve("./node_modules/react");
    config.resolve.conditionNames = ["source", "import"];
    return config;
  },
};

export default nextConfig;
