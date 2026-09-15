import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://adastrabcv.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
