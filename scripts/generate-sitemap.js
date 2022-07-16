const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://mayurpai.github.io/portfolio/",
  pagesDirectory: path.resolve(__dirname, "../out"),
  targetDirectory: path.resolve(__dirname, "../out"),
  ignoredExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});
