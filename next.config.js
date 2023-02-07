// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//   },
// });
/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // buildExcludes: [/middleware-manifest.json$/],
  // disable: process.env.NODE_ENV === "development",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  // swcMinify: true,
  // i18n: {
  //   locales: ["fr"],
  //   defaultLocale: "fr",
  // },
});
module.exports = nextConfig;