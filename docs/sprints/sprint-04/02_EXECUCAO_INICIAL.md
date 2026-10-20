# Sprint 04 — Execução inicial

**Data:** 20/09/2026  
**Estado:** pronta para revisão

## Concluído no worktree

- documentação das Sprints 01 e 03 copiada integralmente para `docs/sprints`;
- lacuna dos artefatos originais da Sprint 02 registrada sem inferências;
- Gate 07 e plano da Sprint 04 adicionados;
- relatório revisado preservado e complementado em `docs/audits`;
- `README.md` da aplicação aponta para a fonte canônica;
- publicações, datas, convidado e frequência fictícios removidos da Home;
- estado editorial vazio aprovado aplicado à Home.
- “Início” incluído no menu móvel, conforme a arquitetura aprovada;
- índices vazios de Artigos e Entrevistas removidos do sitemap e marcados como `noindex`;
- ícones sociais sem destino real marcados como decorativos para tecnologias assistivas.
- workflow de CI adicionado para instalações reproduzíveis e execução de `pnpm check`;
- smoke test automatizado adicionado para rotas públicas, 404, conteúdo fictício, sitemap e `noindex`.

## Validação executada

- cópias documentais comparadas com as fontes: correspondência integral;
- ESLint: aprovado;
- TypeScript: aprovado;
- build de produção: aprovado;
- 16 páginas estáticas geradas;
- smoke test automatizado das rotas e regras editoriais: aprovado;
- inspeção visual desktop: aprovada tecnicamente;
- inspeção visual em viewport móvel de 390 × 844: aprovada tecnicamente;
- menu móvel aberto e conferido com o item “Início”.
- busca no código não encontrou os títulos, datas ou frequência simulados removidos.

## Decisões de reconciliação

- `/newsroom` permanece pública porque apresenta a propriedade editorial de forma válida;
- `/newsroom/artigos` e `/newsroom/entrevistas` permanecem acessíveis como estados de preparação, mas não são indexados nem listados no sitemap enquanto não houver conteúdo real;
- o cabeçalho desktop preserva o layout visual aprovado no Gate 04, que usa “Conteúdo” como entrada da Newsroom;
- Entrevistas mantém rota e identidade próprias dentro da Newsroom; sua volta ao primeiro nível do cabeçalho exige alteração explícita do layout aprovado;
- o menu móvel inclui “Início”, conforme o Gate 02.

## Pendente antes de PR ou publicação

- aceite visual do responsável em desktop e mobile;
- revisão do conjunto de alterações antes do merge;
- demais itens do checklist de go-live.
