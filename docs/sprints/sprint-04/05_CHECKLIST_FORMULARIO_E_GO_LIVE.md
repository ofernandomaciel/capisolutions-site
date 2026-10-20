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
- [ ] obter ou redefinir a senha da caixa para autenticação SMTP, sem registrá-la no repositório;
- [ ] configurar as variáveis SMTP no ambiente de preview/produção; host, porta, segurança e usuário já estão definidos, faltando cadastrar `SMTP_PASS` como segredo;
- [x] definir `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL` no exemplo de configuração;
- [ ] testar entrega em Gmail, Outlook e no próprio domínio;
- [ ] testar resposta ao remetente pelo cabeçalho `Reply-To`;
- [ ] decidir prazo de retenção e rotina de exclusão das mensagens;
- [ ] identificar o responsável pelo tratamento dos dados na Política de Privacidade.

## QA antes do preview público

- [ ] revisar visualmente o formulário em desktop e mobile;
- [ ] testar teclado, foco, leitor de tela e mensagens de erro;
- [ ] testar estados enviando, sucesso, validação, indisponibilidade e erro do provedor;
- [ ] testar mensagens longas, caracteres especiais e quebras de linha;
- [ ] testar abuso e confirmar se o limite em memória é suficiente para o ambiente de produção;
- [ ] considerar rate limiting persistente ou proteção adicional se houver volume de spam;
- [ ] confirmar que nenhum dado do formulário chega ao analytics ou aos logs;
- [ ] executar lint, typecheck, build e smoke test após a configuração final.

## Identidade e conteúdo

- [ ] aprovar as novas frases do Nexo na Home e na página Contato;
- [ ] aprovar o equilíbrio visual entre Nexo e Fernando;
- [ ] confirmar imagens finais, direitos de uso e textos alternativos;
- [ ] revisar textos finais das páginas públicas;
- [ ] confirmar ou remover os símbolos sociais ainda sem links reais.

## Entrega e go-live

- [ ] publicar a branch e confirmar CI verde;
- [ ] abrir PR para `main` após o aceite visual;
- [ ] criar preview na Vercel sem substituir o legado;
- [ ] executar teste real de envio no preview;
- [ ] revisar SEO, Open Graph, dados estruturados e imagens finais;
- [ ] revisar CSP, HTTPS, cache e demais headers no ambiente de hospedagem;
- [ ] aprovar Política de Privacidade final;
- [ ] documentar rollback para o site legado;
- [ ] obter autorização explícita antes do merge e do go-live;
- [ ] executar smoke test e teste de e-mail após a publicação.

## Critério de conclusão

O formulário só pode ser anunciado como operacional depois que o envio SMTP real, a entrega, a resposta, a privacidade e os testes de abuso estiverem validados no ambiente de preview. O Nexo não depende dessa ativação: ele permanece como personagem visual, sem chat.
