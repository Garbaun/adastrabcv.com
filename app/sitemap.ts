import type { MetadataRoute } from "next";
import { serviceData } from "@/lib/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adastrabcv.com";
  const now = new Date();

  const staticRoutes: string[] = [
    "/",
    "/web",
    "/produksiyon",
    "/tasarim",
    "/dijital-pazarlama",
    "/projeler",
    "/kisaca-biz",
    "/blog",
    "/iletisim",
    "/sss",
  ];

  const serviceRoutes = Object.keys(serviceData).map((key) => `/${key}`);

  const all = [...staticRoutes, ...serviceRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : path.includes("/") && path.split("/").length === 3 ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
