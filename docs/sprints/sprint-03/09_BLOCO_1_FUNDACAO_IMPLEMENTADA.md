# Sprint 03 — Bloco 1: fundação implementada

**Data:** 17/09/2026  
**Estado:** fundação técnica concluída; layout reconstruído e aguardando validação visual  
**Branch:** `codex/sprint-03-implementacao`

## Decisão de execução

O layout pode avançar sem alimentar o Nexo e sem configurar APIs. A aplicação foi estruturada para que conteúdo editorial, CMS, analytics, formulários e inteligência do Nexo sejam integrados posteriormente, sem bloquear o desenvolvimento visual.

## Entregue

- Next.js com App Router, React, TypeScript, Tailwind CSS e ESLint;
- identidade visual-base aprovada: linguagem editorial, tecnológica e humana;
- Home responsiva com Hero, frentes de atuação, Newsroom, Sobre, Nexo e rodapé;
- rotas `/solucoes`, `/newsroom`, `/sobre`, `/contato` e `/privacidade`;
- menu responsivo, componentes compartilhados e navegação por teclado;
- metadados, sitemap, robots e página 404;
- estado editorial vazio para o Newsroom;
- demonstração local e determinística do Nexo, claramente identificada como protótipo;
- preservação do site anterior em `legacy/` e na tag Git `legacy-2026-09-10`.

## Nexo e integrações

Nesta etapa, o Nexo:

- não chama modelos de IA;
- não possui endpoint de servidor;
- não envia nem armazena texto;
- não usa cookies, banco de dados ou ferramenta externa;
- apenas demonstra, no navegador, a sequência visual de uma futura conversa.

Também permanecem fora deste bloco: Sanity, Vercel, analytics, envio de formulário, Instagram, LinkedIn e qualquer automação externa.

## Verificações executadas

- lint: aprovado;
- TypeScript: aprovado;
- build de produção: aprovado;
- smoke test HTTP de todas as rotas públicas: aprovado;
- rota inexistente: resposta 404 confirmada;
- segredo ou arquivo `.env` versionado: nenhum.

## Pendências para o aceite visual

- conferência manual em desktop e celular da reconstrução baseada no painel recuperado;
- aceite explícito do usuário para a fidelidade ao Gate 04;
- revisão final de contraste, foco, espaçamento e quebras responsivas;
- otimização dos arquivos de imagem legados antes da publicação;
- substituição de textos provisórios por conteúdo final aprovado.

## Próximo bloco recomendado

Continuar o refinamento visual e de conteúdo das páginas públicas, mantendo todos os pontos de integração atrás de interfaces locais. Depois do aceite do layout, conectar o CMS; o Nexo continua como um bloco independente e pode ser implementado por último.
