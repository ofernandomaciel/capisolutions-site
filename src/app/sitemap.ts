import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solucoes", "/solucoes/tecnologia-produto", "/solucoes/conteudo-conhecimento", "/solucoes/linguagem-comunicacao", "/newsroom", "/newsroom/artigos", "/newsroom/entrevistas", "/sobre", "/contato", "/privacidade"];
  return routes.map((route) => ({ url: `https://capisolutions.com${route}`, lastModified: new Date(), changeFrequency: route.startsWith("/newsroom") ? "weekly" : "monthly", priority: route === "" ? 1 : .7 }));
}
