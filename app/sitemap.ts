import type { MetadataRoute } from "next";
import products from "../data/products.json";
import { languages } from "../components/i18n";
import site from "../data/site.json";

const baseUrl = site.domain.replace(/\/$/, "");
const langs = languages.map((language) => language.code);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/products", "/catalog", "/about", "/contact", "/thank-you"];
  const urls = langs.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8
    }))
  );

  const productUrls = langs.flatMap((lang) =>
    products.map((product) => ({
      url: `${baseUrl}/${lang}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    }))
  );

  return [...urls, ...productUrls];
}
