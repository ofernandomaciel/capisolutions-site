# Sprint 04 — Checklist do formulário e próximos passos

**Atualizada em:** 19/10/2026  
**Branch:** `codex/sprint-04-nexo-formulario`

## Implementado nesta etapa

- [x] remover a demonstração de chat do Nexo;
- [x] remover promessas de compreensão, resumo e encaminhamento automático;
- [x] manter o Nexo como personagem principal da identidade;
- [x] alterar CTAs para contato humano por formulário;
- [x] criar formulário acessível com nome, e-mail, assunto e mensagem;
- [x] exigir consentimento vinculado à Política de Privacidade;
- [x] criar endpoint de envio somente no servidor;
- [x] adicionar validação de campos, limite de tamanho, honeypot e limite básico de tentativas;
- [x] impedir exposição de credenciais e detalhes de erro;
- [x] preparar configuração SMTP por variáveis de ambiente;
- [x] atualizar a Política de Privacidade e o rodapé;
- [x] adicionar headers básicos de segurança;
- [x] ampliar o smoke test para o formulário, textos proibidos e headers.
- [x] atualizar Next.js para `16.3.8` e alinhar `eslint-config-next`;
- [x] fixar versões corrigidas de `sharp` e `source-map-js`;
- [x] confirmar com `pnpm audit --prod` que não há vulnerabilidades conhecidas nas dependências de produção em 19/10/2026.
- [x] criar imagem Docker de produção com execução como usuário sem privilégios;
- [x] criar ambiente local com site e Mailpit, sem entrega externa de e-mail;
- [x] validar o envio completo do endpoint até a caixa SMTP local;
- [x] adicionar teste repetível `pnpm test:email:docker`.

## Necessário para ativar o envio real

- [x] confirmar a caixa de destino `contato@capisolutions.com`;
- [x] escolher e confirmar o provedor SMTP de produção: Hostinger;
- [x] confirmar remetente e destino: `contato@capisolutions.com`;
- [x] verificar MX, SPF, DKIM e DMARC ativos no domínio;
- [x] configurar localmente a senha da caixa para autenticação SMTP, sem registrá-la no repositório;
- [x] validar em 19/10/2026 o envio real do endpoint local pelo SMTP da Hostinger (`201 Mensagem enviada`);
- [x] confirmar a entrega da mensagem de teste na caixa `contato@capisolutions.com`;
- [x] configurar as variáveis SMTP somente no ambiente de preview da Vercel, com `SMTP_PASS` armazenada como segredo;
- [x] definir `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL` no exemplo de configuração;
- [x] testar entrega no próprio domínio;
- [ ] testar entrega em Gmail e Outlook;
- [ ] testar resposta ao remetente pelo cabeçalho `Reply-To`;
- [x] definir prazo padrão de retenção em 12 meses para contatos sem relação comercial;
- [x] identificar Fernando Maciel como responsável pelo tratamento dos dados na Política de Privacidade;
- [ ] confirmar a rotina operacional de exclusão das mensagens após o prazo.

## QA antes do preview público

- [x] revisar visualmente o formulário em Chrome desktop, tablet e mobile por emulação;
- [x] testar teclado, foco, estrutura semântica e mensagens de erro;
- [ ] testar com leitor de tela real (NVDA, VoiceOver ou TalkBack);
- [x] testar estados enviando, sucesso, validação e indisponibilidade;
- [x] testar limites de mensagem, payload e formato de conteúdo;
- [x] testar abuso e ativação do limite em memória;
- [ ] confirmar em aparelhos reais iPhone/Safari e Android/Chrome;
- [ ] confirmar em Edge, Firefox e Safari desktop;
- [ ] considerar rate limiting persistente ou proteção adicional se houver volume de spam;
- [x] confirmar que o site atual não possui analytics e que o endpoint não registra o conteúdo do formulário;
- [x] executar lint, typecheck, build e smoke test após a configuração final.

## Identidade e conteúdo

- [ ] aprovar as novas frases do Nexo na Home e na página Contato;
- [ ] aprovar o equilíbrio visual entre Nexo e Fernando;
- [ ] confirmar imagens finais, direitos de uso e textos alternativos;
- [ ] revisar textos finais das páginas públicas;
- [ ] confirmar ou remover os símbolos sociais ainda sem links reais.

## Entrega e go-live

- [x] publicar a branch `codex/sprint-04-nexo-formulario` no GitHub;
- [x] confirmar todos os checks automáticos da branch em verde;
- [x] abrir o PR #1 para `main`, sem realizar merge;
- [x] criar preview privado na Vercel, protegido por autenticação e sem substituir o legado;
- [x] executar teste real de envio no preview e receber a resposta `Mensagem enviada`;
- [ ] confirmar a chegada da mensagem enviada pelo preview na caixa de destino;
- [x] revisar SEO, Open Graph, canonical, dados estruturados, robots e sitemap;
- [x] otimizar as seis imagens PNG principais para WebP, reduzindo o conjunto de 23,4 MB para 680 KB;
- [ ] revisar CSP, HTTPS, cache e demais headers no ambiente de hospedagem;
- [x] implementar a Política de Privacidade final para a operação atual;
- [ ] obter aprovação formal do responsável para a Política de Privacidade;
- [ ] documentar rollback para o site legado;
- [ ] obter autorização explícita antes do merge e do go-live;
- [ ] executar smoke test e teste de e-mail após a publicação.

## Critério de conclusão

O formulário só pode ser anunciado como operacional depois que o envio SMTP real, a entrega, a resposta, a privacidade e os testes de abuso estiverem validados no ambiente de preview. O Nexo não depende dessa ativação: ele permanece como personagem visual, sem chat.
