import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Privacidade", description: "Princípios de privacidade da CapiSolutions.", robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <PageShell kicker="Privacidade" title="Clareza também sobre os seus dados." description="Esta versão descreve o estado real do site antes das integrações. A política será atualizada e revisada antes do go-live.">
      <article className="privacy-layout">
        <aside><strong>Estado atual</strong><span>Sem formulário</span><span>Sem analytics</span><span>Sem cookies de marketing</span><span>Sem conversa armazenada</span></aside>
        <div className="prose">
          <h2>O que acontece agora</h2><p>Esta fundação não envia nem armazena mensagens do Nexo. Os links de e-mail e WhatsApp apenas abrem o canal escolhido pelo visitante; a ação final permanece sob seu controle.</p>
          <h2>Princípios para o lançamento</h2><p>A CapiSolutions coletará somente os dados necessários para finalidades explicadas. Acesso, retenção, fornecedores e formas de exercer direitos serão apresentados antes de qualquer ferramenta ser ativada.</p>
          <h2>Conteúdo editorial</h2><p>Informações públicas de artigos e entrevistas ficarão separadas de dados pessoais recebidos em conversas ou contatos. O CMS editorial não será usado como banco público de leads.</p>
          <h2>Contato</h2><p>Dúvidas relacionadas à privacidade poderão ser encaminhadas para <a href="mailto:contato@capisolutions.com">contato@capisolutions.com</a>.</p>
          <p className="privacy-note">Documento provisório de implementação. A versão jurídica final dependerá das ferramentas efetivamente contratadas e configuradas.</p>
        </div>
      </article>
    </PageShell>
  );
}
