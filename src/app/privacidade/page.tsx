import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Privacidade", description: "Princípios de privacidade da CapiSolutions.", robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <PageShell kicker="Privacidade" title="Clareza também sobre os seus dados." description="Esta versão descreve o formulário de contato e o estado atual das demais integrações.">
      <article className="privacy-layout">
        <aside><strong>Estado atual</strong><span>Formulário por e-mail</span><span>Sem analytics</span><span>Sem cookies de marketing</span><span>Nexo sem chat</span></aside>
        <div className="prose">
          <h2>Dados enviados pelo formulário</h2><p>Ao enviar uma mensagem, a CapiSolutions recebe nome, e-mail, assunto e o texto informado. Esses dados são usados exclusivamente para compreender e responder ao contato.</p>
          <h2>Como o envio funciona</h2><p>O formulário encaminha a mensagem para a caixa de e-mail da CapiSolutions por um serviço configurado no servidor. As credenciais de envio não ficam expostas no navegador. O Nexo é um personagem visual e não lê, analisa ou armazena o conteúdo.</p>
          <h2>Retenção e direitos</h2><p>As mensagens permanecem na caixa de e-mail pelo período necessário ao atendimento e às obrigações aplicáveis. Você pode solicitar informações, correção ou exclusão pelo endereço abaixo. A política final será revisada conforme o provedor e a operação efetivamente configurados.</p>
          <h2>Conteúdo editorial</h2><p>Informações públicas de artigos e entrevistas ficarão separadas de dados pessoais recebidos em conversas ou contatos. O CMS editorial não será usado como banco público de leads.</p>
          <h2>Contato</h2><p>Dúvidas relacionadas à privacidade poderão ser encaminhadas para <a href="mailto:contato@capisolutions.com">contato@capisolutions.com</a>.</p>
          <p className="privacy-note">Documento operacional provisório. A versão final deve identificar o provedor de e-mail, a política de retenção e o responsável pelo tratamento antes do go-live.</p>
        </div>
      </article>
    </PageShell>
  );
}
