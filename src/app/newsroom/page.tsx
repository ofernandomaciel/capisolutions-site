import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Capi Newsroom", description: "Análises e conversas sobre inteligência artificial, dados, tecnologia e carreira." };
const categories = ["Inteligência Artificial", "Dados", "Tecnologia", "Carreira", "Negócios & Inovação"];

export default function NewsroomPage() {
  return (
    <PageShell kicker="Capi Newsroom" title="Histórias, ideias e conversas oportunas." description="Um espaço editorial para acompanhar tecnologia, IA e dados — e, sobretudo, as pessoas que estão construindo esse futuro.">
      <nav className="editorial-nav" aria-label="Seções da Newsroom"><span>Explorar</span>{categories.map((category) => <a href="#em-preparacao" key={category}>{category}</a>)}</nav>
      <section className="editorial-lead" id="em-preparacao">
        <div><p className="eyebrow">Edição de lançamento</p><h2>Conteúdo com contexto, fontes e tempo para pensar.</h2><p>A estrutura editorial está pronta. Os artigos reais entram depois do go-live, já conectados ao fluxo de publicação e revisão.</p></div>
        <aside><span>00</span><p>Publicações fictícias não serão usadas para preencher espaço.</p></aside>
      </section>
      <section className="editorial-paths">
        <article><span>01</span><p>Análises e artigos</p><h2>Separar sinal de ruído.</h2><p>Textos autorais, explicadores e leituras críticas sobre o que realmente muda.</p><Link href="/newsroom/artigos">Ver estrutura <ArrowUpRight /></Link></article>
        <article><span>02</span><p>Entrevistas</p><h2>Boas perguntas abrem boas conversas.</h2><p>Encontros com pessoas que constroem tecnologia, conhecimento e novas trajetórias.</p><Link href="/newsroom/entrevistas">Ver estrutura <ArrowUpRight /></Link></article>
        <article><span>03</span><p>Radar</p><h2>Uma curadoria para acompanhar o movimento.</h2><p>Notícias selecionadas e contextualizadas, sem transformar velocidade em ruído.</p><span className="status-pill">Em preparação</span></article>
      </section>
    </PageShell>
  );
}
