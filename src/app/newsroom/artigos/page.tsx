import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Artigos — Capi Newsroom", description: "Artigos e análises da Capi Newsroom.", path: "/newsroom/artigos", robots: { index: false, follow: true } });

export default function ArticlesPage() {
  return <PageShell kicker="Newsroom · Artigos" title="Análises para compreender o que muda." description="Esta página receberá artigos, explicadores e curadorias depois do go-live."><section className="editorial-empty"><span>00</span><h2>A primeira edição está em preparação.</h2><p>A estrutura já contempla categoria, autor, data, fontes, leitura relacionada e metadados. O conteúdo será publicado apenas quando estiver revisado.</p><Link className="text-link" href="/newsroom">Voltar para a Newsroom <ArrowUpRight /></Link></section></PageShell>;
}
