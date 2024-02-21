// Step 1: Define your static routes
const routes = [
  "/",
  "/consult",
  "/coworking",
  "/real-estate",
  "/cargo",
  "/visarun",
  "/about",
  "/contacts",
  "/404",
  // Add more routes as needed
];

// Step 2: Generate the sitemap.xml
const { SitemapStream, streamToPromise } = require("sitemap");
const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

const sitemap = new SitemapStream({ hostname: "https://tested.relocationsrb.com" });
const writeStream = createWriteStream("./public/sitemap.xml.gz");
const pipeline = sitemap.pipe(createGzip());

routes.forEach((route) => {
  sitemap.write({ url: route });
});

sitemap.end();

pipeline.pipe(writeStream).on("error", (err) => {
  throw err;
});

// Step 3: Generate the sitemap.html
const fs = require("fs");

const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sitemap</title>
  </head>
  <body>
    <h1>Sitemap</h1>
    <ul>
      ${routes.map((route) => `<li><a href="${route}">${route}</a></li>`).join("")}
    </ul>
  </body>
  </html>
  `;

fs.writeFileSync("./public/sitemap.html", htmlTemplate);
