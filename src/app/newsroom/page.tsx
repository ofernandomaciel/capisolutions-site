import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Capi Newsroom", description: "Análises e conversas sobre inteligência artificial, dados, tecnologia e carreira." };
const categories = ["Inteligência Artificial", "Dados", "Tecnologia", "Carreira", "Negócios & Inovação"];

export default function NewsroomPage() {
  return (
    <PageShell kicker="Capi Newsroom" title="O futuro da tecnologia não chega com manual de instruções." description="Análises responsáveis, fontes claras e conversas com quem está construindo esse futuro.">
      <div className="route-list">
        <article className="route-card"><p className="eyebrow eyebrow--dark">Primeira pauta</p><h2>Nem todo processo precisa de IA</h2><p>Conteúdo inaugural em preparação. Nenhum artigo fictício será publicado apenas para preencher a interface.</p></article>
        <article className="route-card" id="entrevistas"><p className="eyebrow eyebrow--dark">Entrevistas</p><h2>Boas perguntas abrem boas conversas.</h2><p>As primeiras conversas estão em preparação e só serão publicadas depois da revisão e aprovação de quem participou.</p></article>
      </div>
      <section className="page-content"><div className="prose"><h2>Categorias editoriais</h2><p>{categories.join(" · ")}</p></div></section>
    </PageShell>
  );
}
