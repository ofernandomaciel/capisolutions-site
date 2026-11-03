import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

type SitemapDocument = { slug: string; updatedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.MAINTENANCE_MODE === "true") return [];

  const routes = ["", "/solucoes", "/solucoes/tecnologia-produto", "/solucoes/conteudo-conhecimento", "/solucoes/linguagem-comunicacao", "/newsroom", "/newsroom/artigos", "/newsroom/entrevistas", "/sobre", "/contato"];
  const [articles, interviews] = await Promise.all([
    client.fetch<SitemapDocument[]>(`*[_type == "article" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()] {"slug": slug.current, "updatedAt": coalesce(updatedAt, publishedAt)}`),
    client.fetch<SitemapDocument[]>(`*[_type == "interview" && approvalStatus == "approved" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()] {"slug": slug.current, "updatedAt": publishedAt}`),
  ]);

  return [
    ...routes.map((route) => ({ url: `https://capisolutions.com${route}`, lastModified: new Date(), changeFrequency: route.startsWith("/newsroom") ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : .7 })),
    ...articles.map((item) => ({ url: `https://capisolutions.com/newsroom/artigos/${item.slug}`, lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(), changeFrequency: "monthly" as const, priority: .6 })),
    ...interviews.map((item) => ({ url: `https://capisolutions.com/newsroom/entrevistas/${item.slug}`, lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(), changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
