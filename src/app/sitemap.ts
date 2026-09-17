import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/solucoes", "/newsroom", "/sobre", "/contato", "/privacidade"]; return routes.map((route) => ({ url: `https://capisolutions.com${route}`, lastModified: new Date(), changeFrequency: route === "/newsroom" ? "weekly" : "monthly", priority: route === "" ? 1 : .7 })); }
