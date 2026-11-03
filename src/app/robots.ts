import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  if (process.env.MAINTENANCE_MODE === "true") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://capisolutions.com/sitemap.xml" };
}
