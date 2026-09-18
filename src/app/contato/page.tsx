import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Contato", description: "Conte seu contexto à CapiSolutions." };

export default function ContactPage() {
  return (
    <PageShell kicker="Contato" title="Vamos começar pelo que você precisa resolver." description="Enquanto o Nexo não recebe sua inteligência definitiva, você continua com canais humanos, diretos e transparentes.">
      <section className="contact-layout">
        <div className="contact-options">
          <a href="mailto:contato@capisolutions.com"><span>01</span><p>E-mail</p><h2>contato@capisolutions.com</h2><small>Para contextos que pedem mais detalhes e documentos.</small><ArrowUpRight /></a>
          <a href="https://wa.me/5548999112785" target="_blank" rel="noreferrer"><span>02</span><p>WhatsApp</p><h2>Iniciar uma conversa</h2><small>Para uma primeira troca rápida e definição do próximo passo.</small><ArrowUpRight /></a>
        </div>
        <aside className="contact-nexo"><div><p className="eyebrow">Nexo</p><h2>A interface inteligente está em preparação.</h2><p>No lançamento inicial, o Nexo poderá ajudar a organizar sua demanda antes do contato. Até lá, nenhum dado é coletado nesta página.</p><span className="status-pill">Sem API · sem armazenamento</span></div><Image src="/images/nexo-approved.png" alt="Nexo, a capivara robô da CapiSolutions" width={520} height={520} /></aside>
      </section>
      <section className="contact-guidance"><p className="eyebrow eyebrow--dark">Se quiser adiantar o contexto</p><h2>Três informações já ajudam bastante.</h2><ol><li><span>01</span>O que você quer construir, melhorar ou destravar?</li><li><span>02</span>Como isso funciona hoje?</li><li><span>03</span>Que resultado faria diferença?</li></ol><Link className="text-link" href="/solucoes">Conhecer as soluções <ArrowUpRight /></Link></section>
    </PageShell>
  );
}
