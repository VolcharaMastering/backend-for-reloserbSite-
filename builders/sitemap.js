import GenerateSitemap from "react-router-sitemap-maker";
import App from "../src/App.jsx";

const sitemapData = await GenerateSitemap(App(), {
  baseUrl: "https://8sp4ddn8-5173.euw.devtunnels.ms/",
  hashrouting: true
});

sitemapData.toFile("./dist/sitemap.xml");
