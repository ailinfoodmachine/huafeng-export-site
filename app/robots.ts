import type { MetadataRoute } from "next";
import site from "../data/site.json";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.domain.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
