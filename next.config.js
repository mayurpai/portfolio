/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  output: "export",
  // Pages export as <route>/index.html + index.txt. Without it, the home route's client-side data
  // is fetched from "<basePath>.txt" (outside the site on GitHub Pages), so every trip back home
  // fell back to a full page reload.
  trailingSlash: true,
  images: { unoptimized: true }
};

module.exports = nextConfig;
