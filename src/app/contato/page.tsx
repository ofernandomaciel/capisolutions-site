import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Contato", description: "Envie uma mensagem para a CapiSolutions e conte sobre o seu projeto." };

export default function ContactPage() {
  return (
    <PageShell kicker="Contato" title="Vamos começar pelo que você precisa resolver." description="Preencha o formulário e sua mensagem será encaminhada diretamente para o e-mail da CapiSolutions.">
      <section className="contact-layout">
        <ContactForm />
        <aside className="contact-nexo"><div><p className="eyebrow">Nexo</p><h2>Oi! Que bom ter você por aqui.</h2><p>O Nexo é o personagem principal da CapiSolutions. Ele acompanha esta experiência, mas não lê nem processa o conteúdo do formulário.</p><span className="status-pill">Personagem da marca</span></div><Image src="/images/nexo-approved.png" alt="Nexo, a capivara robô da CapiSolutions" width={520} height={520} /></aside>
      </section>
      <section className="contact-guidance"><p className="eyebrow eyebrow--dark">Para uma resposta mais objetiva</p><h2>Três informações já ajudam bastante.</h2><ol><li><span>01</span>O que você quer construir, melhorar ou destravar?</li><li><span>02</span>Como isso funciona hoje?</li><li><span>03</span>Que resultado faria diferença?</li></ol></section>
    </PageShell>
  );
}
