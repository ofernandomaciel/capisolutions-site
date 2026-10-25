import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Política de Privacidade",
  description: "Saiba como a CapiSolutions trata os dados enviados pelo formulário de contato.",
  path: "/privacidade",
  robots: { index: false, follow: true },
});

export default function PrivacyPage() {
  return (
    <PageShell kicker="Privacidade" title="Clareza também sobre os seus dados." description="Esta política explica quais dados recebemos, por que os utilizamos e como você pode exercer seus direitos.">
      <article className="privacy-layout">
        <aside><strong>Resumo</strong><span>Formulário por e-mail</span><span>Retenção padrão de 12 meses</span><span>Sem analytics ou cookies de marketing</span><span>Nexo sem chat</span></aside>
        <div className="prose">
          <p className="privacy-updated">Última atualização: 19 de outubro de 2026.</p>
          <h2>Quem controla os dados</h2><p>Fernando Maciel, responsável pela CapiSolutions, define como os dados pessoais recebidos por este site são utilizados. Solicitações relacionadas à privacidade podem ser enviadas para <a href="mailto:contato@capisolutions.com">contato@capisolutions.com</a>.</p>
          <h2>Dados recebidos</h2><p>Ao enviar o formulário, recebemos o nome, o endereço de e-mail, o assunto e a mensagem informados. A infraestrutura de hospedagem também pode processar dados técnicos necessários à segurança e ao funcionamento do serviço, como endereço IP, data, horário e informações básicas da requisição.</p>
          <h2>Finalidade e autorização</h2><p>Os dados do formulário são usados para compreender a solicitação, responder ao contato e, quando solicitado, avaliar possíveis próximos passos comerciais. O envio ocorre somente após a concordância indicada no próprio formulário. Não utilizamos essas informações para listas de marketing, publicidade comportamental ou decisões automatizadas.</p>
          <h2>Como o envio funciona</h2><p>O site é hospedado na Vercel e encaminha a mensagem para a caixa profissional da CapiSolutions, fornecida pela Hostinger. Esses provedores processam somente os dados necessários para hospedar o site, proteger a aplicação e entregar a mensagem. Suas infraestruturas podem envolver processamento em outros países, sujeito às medidas contratuais e de segurança aplicáveis.</p>
          <h2>Prazo de retenção</h2><p>Contatos que não evoluírem para uma relação comercial serão excluídos em até 12 meses após a última interação. Quando a conversa resultar em proposta, contrato ou obrigação legal, as informações necessárias poderão ser mantidas pelo prazo aplicável à relação e às respectivas obrigações. Cópias residuais em backups seguem os ciclos técnicos dos provedores.</p>
          <h2>Compartilhamento</h2><p>Não vendemos dados pessoais. O acesso fica limitado à CapiSolutions e aos provedores necessários ao funcionamento do site e do e-mail. Informações poderão ser apresentadas a autoridades somente quando houver obrigação legal ou solicitação válida.</p>
          <h2>Seus direitos</h2><p>Você pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento, revogação da autorização e exclusão quando aplicável. O pedido é gratuito e será respondido pelo canal de contato, após as verificações necessárias para proteger o próprio titular.</p>
          <h2>Segurança e conteúdo da mensagem</h2><p>Adotamos controles técnicos compatíveis com o escopo do formulário, incluindo transmissão protegida, validação, limite de tamanho, barreiras contra automação e credenciais mantidas no servidor. Evite enviar senhas, documentos, dados financeiros, informações de saúde ou outros dados sensíveis pelo formulário.</p>
          <h2>Cookies, analytics e Nexo</h2><p>Esta versão do site não utiliza analytics nem cookies de marketing. O Nexo é um personagem visual da CapiSolutions: ele não lê, analisa ou armazena mensagens.</p>
          <h2>Atualizações e contato</h2><p>Esta política poderá ser atualizada quando o site ganhar novas integrações ou quando a operação mudar. A data da versão será indicada no início da página. Dúvidas ou solicitações podem ser enviadas para <a href="mailto:contato@capisolutions.com">contato@capisolutions.com</a>.</p>
        </div>
      </article>
    </PageShell>
  );
}
