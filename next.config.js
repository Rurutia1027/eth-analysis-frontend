const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig =  
  withBundleAnalyzer({
    productionBrowserSourceMaps: true,
    staticPageGenerationTimeout: 60 * 4,
    output: "standalone",
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        "abs.twimg.com",
        "assets.coingecko.com",
        "coin-images.coingecko.com",
        "i.seadn.io",
        "lh3.googleusercontent.com",
        "openseauserdata.com",
        "pbs.twimg.com",
      ],
    },
    rewrites: async () => [
      {
        source: "/api/:path*",
        has: [{ type: "host", value: "localhost" }],
        destination:
          process.env["NEXT_PUBLIC_ENV"] === "stag"
            ? "https://ultrasound.money/api/:path*"
            : "https://ultrasound.money/api/:path*",
      },
    ],
  });

module.exports = nextConfig;