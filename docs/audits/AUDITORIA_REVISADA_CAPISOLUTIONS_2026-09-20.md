# Auditoria revisada — CapiSolutions / capisolutions-site

Data: 2026-09-20
Auditoria revisada após correção dos caminhos informados.

## Caminhos auditados

1. Projeto Codex / documentação:

`C:/Users/ferna/.codex/.chatgpt-projects/g-p-6a9b4dee2b6881919c7fd3c469523b36`

2. Implementação:

`C:/Users/ferna/.codex/.chatgpt-projects/g-p-6a9b4dee2b6881919c7fd3c469523b36/implementation`

3. GitHub:

`https://github.com/ofernandomaciel/capisolutions-site`

## Adendo de governança da Sprint 04

Após a revisão deste relatório, a documentação das Sprints 01 e 03, o handoff recuperado da Sprint 02, a referência visual aprovada e esta auditoria foram consolidados em `implementation/docs`.

A fonte canônica passa a ser o repositório `capisolutions-site`. Pastas externas do ChatGPT/Codex, diretórios históricos e caches de agentes não devem ser auditados isoladamente nem tratados como fontes permanentes.

Os artefatos originais completos da Sprint 02 ainda não estavam disponíveis como pasta versionada. Essa lacuna está explicitada em `docs/sprints/sprint-02/README.md`; as decisões recuperadas continuam preservadas no handoff do Gate 05 e na imagem aprovada do Gate 04.

## Correção em relação à auditoria anterior

A auditoria anterior usou a pasta local errada para a documentação completa. Ela tratou `E:/02.Projects_GPT/04.CapiSolutions` como a fonte local principal, mas essa pasta continha apenas parte dos documentos, até a Sprint 01/Gate 03.

A pasta correta contém também `sprint_03_docs`, incluindo:

- recuperação do Gate 05;
- aprovação do Gate 06;
- arquitetura técnica aprovada;
- modelo de conteúdo/CMS;
- arquitetura do Nexo;
- backlog de implementação;
- registros dos Blocos 1 e 2;
- checklist de prontidão/go-live;
- referência visual `GATE_04_LAYOUT_APROVADO.png`.

Portanto, a afirmação anterior de que “não havia evidência dos Gates 04-06” fica superseded: há evidência local dos Gates 05/06 e do Gate 04 recuperado na pasta correta.

## Veredito curto

O projeto está tecnicamente saudável como preview/fundação institucional em Next.js. A branch `codex/sprint-03-implementacao` compila, passa lint, typecheck, build, audit de dependências e smoke test de rotas locais.

Mas ainda não está pronto para go-live público sem revisão final. Os bloqueios principais são:

1. A implementação moderna não está na branch default `main`.
2. Não há CI configurada no GitHub; o CD moderno ainda não está configurado ou verificado.
3. Não há branch protection.
4. O site vivo ainda serve o legado HTML/PHP, não a versão Next.js.
5. O código ainda mostra cards fictícios de Newsroom na Home, apesar de a documentação aprovada exigir estado vazio honesto.
6. CMS/Sanity, Nexo funcional, analytics, headers de segurança avançados e testes automatizados ainda não foram implementados — isso está alinhado ao planejamento, mas precisa permanecer fora da promessa pública até ser feito.
7. A revisão visual final pelo usuário ainda consta como pendente nos próprios documentos da Sprint 03.

## Estado Git e repositório

### Caminho raiz do projeto Codex

Comando em `C:/Users/ferna/.codex/.chatgpt-projects/g-p-6a9b4dee2b6881919c7fd3c469523b36` resolveu para um repositório Git ancestral em `C:/Users/ferna`, sem commits. Esse diretório raiz do projeto Codex não deve ser tratado como repositório de aplicação.

### Caminho implementation

`implementation` é um worktree Git real:

- worktree: `C:/Users/ferna/.codex/.chatgpt-projects/g-p-6a9b4dee2b6881919c7fd3c469523b36/implementation`
- git dir: `E:/00.Projetos/site-capisolutions/.git/worktrees/implementation`
- branch: `codex/sprint-03-implementacao`
- tracking: `origin/codex/sprint-03-implementacao`
- HEAD: `9829a5c63ae5eb5a91e48f39c3e54d975144eb7c`
- commit: `feat: align approved visual system and complete public pages`
- data: `2026-09-17T21:00:15-03:00`
- working tree: limpo antes e depois dos checks
- remote: `https://github.com/ofernandomaciel/capisolutions-site.git`

### GitHub

- repositório: `ofernandomaciel/capisolutions-site`
- visibilidade: público
- default branch: `main`
- branches:
  - `main`: `76335837b47e2da8cd57c3f112d95c31156e7719`
  - `codex/sprint-03-implementacao`: `9829a5c63ae5eb5a91e48f39c3e54d975144eb7c`
- workflows: nenhum
- runs: nenhum
- PRs: nenhum
- issues: nenhum
- branch protection em `main`: ausente

## Stack implementada

Evidência: `implementation/package.json`

- Next.js `16.3.5`
- React `19.2.8`
- React DOM `19.2.8`
- TypeScript
- Tailwind CSS 4 via PostCSS
- ESLint 9
- fontes locais via `@fontsource/archivo-black` e `@fontsource/open-sans`
- pnpm `11.18.0`

Scripts:

- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm check` = lint + typecheck + build

## Estrutura implementada

Arquivos rastreados na branch de implementação:

- 47 arquivos rastreados
- CSS: 1 arquivo / 394 linhas
- TSX: 18 arquivos / 493 linhas
- TypeScript: 4 arquivos / 74 linhas
- HTML legado: 1 arquivo / 374 linhas
- PHP legado: 1 arquivo / 40 linhas
- Markdown: 2 arquivos / 100 linhas
- Imagens: 13 arquivos / cerca de 44 MB

Rotas geradas no build:

- `/`
- `/_not-found`
- `/contato`
- `/newsroom`
- `/newsroom/artigos`
- `/newsroom/entrevistas`
- `/privacidade`
- `/robots.txt`
- `/sitemap.xml`
- `/sobre`
- `/solucoes`
- `/solucoes/tecnologia-produto`
- `/solucoes/conteudo-conhecimento`
- `/solucoes/linguagem-comunicacao`

## Checks executados

Ambiente:

- Node: `v24.15.0`
- pnpm: `11.18.0`

Comandos executados em `implementation`:

1. `pnpm install --frozen-lockfile`
   - resultado: passou
   - saída: `Already up to date`

2. `pnpm check`
   - resultado: passou
   - executou:
     - `pnpm lint`
     - `pnpm typecheck`
     - `pnpm build`

3. `pnpm build`
   - resultado: passou
   - Next.js 16.3.5 compilou com Turbopack
   - 16 páginas estáticas geradas

4. `pnpm audit --prod`
   - resultado: passou
   - saída: `No known vulnerabilities found`

5. Smoke test HTTP local com `pnpm start --hostname 127.0.0.1 --port 3017`
   - `/`: 200
   - `/solucoes`: 200
   - `/solucoes/tecnologia-produto`: 200
   - `/solucoes/conteudo-conhecimento`: 200
   - `/solucoes/linguagem-comunicacao`: 200
   - `/newsroom`: 200
   - `/newsroom/artigos`: 200
   - `/newsroom/entrevistas`: 200
   - `/sobre`: 200
   - `/contato`: 200
   - `/privacidade`: 200
   - `/robots.txt`: 200
   - `/sitemap.xml`: 200
   - `/rota-inexistente`: 404

6. Preview visual via navegador local
   - página abriu em `http://127.0.0.1:3018/`
   - título: `CapiSolutions — Tecnologia, conteúdo e comunicação`
   - Hero renderizado com identidade visual moderna, retrato, CTAs e navegação.

Artefatos ignorados confirmados:

- `node_modules` ignorado por `.gitignore`
- `.next` ignorado por `.gitignore`
- `tsconfig.tsbuildinfo` ignorado por `.gitignore`

Working tree permaneceu limpo após os checks.

## Site vivo

URLs conferidas:

- `https://www.capisolutions.com`
- `https://capisolutions.com`

Resultado:

- status 200
- servidor: `hcdn`
- título: `CapiSolutions | Tecnologia com Propósito`
- contém Tailwind CDN
- contém texto legado `Web & Mobile`
- não contém `__next`
- não contém `Ideias reais`
- não contém `Nexo`

Conclusão: o site público ainda é o legado, não a implementação Next.js.

## Aderência à documentação correta

### O que agora está alinhado

A pasta correta resolve a maior contradição da auditoria anterior:

- `sprint_03_docs/README.md` registra Gate 06 aprovado em 10/09/2026.
- `05_GATE_06_REGISTRO_DE_DECISAO.md` aprova Next.js, Tailwind compilado, Sanity, Vercel, OpenAI Responses API no servidor e publicação progressiva.
- `04_BACKLOG_DE_IMPLEMENTACAO.md` registra Bloco 1 e Bloco 2 implementados em 17/09/2026.
- `09_BLOCO_1_FUNDACAO_IMPLEMENTADA.md` registra fundação técnica concluída, build aprovado e integrações adiadas.
- `11_BLOCO_2_ESTRUTURA_DE_PAGINAS.md` registra rotas públicas preparadas e conteúdo editorial real adiado.

Logo, a branch `codex/sprint-03-implementacao` tem trilha documental coerente. A consolidação realizada na Sprint 04 coloca essa trilha sob o mesmo controle de versão do código e elimina a dependência da pasta externa como fonte permanente.

### O que continua desalinhado

1. Home ainda contém cards fictícios da Newsroom:

Arquivo: `src/app/page.tsx`

- `O que realmente muda com a IA generativa` — `12 jan 2026`
- `Thanássius Veloso: tecnologia, conteúdo e o futuro` — `08 jan 2026`
- `Transição de carreira: por onde começar?` — `05 jan 2026`
- Radar com promessa: “As principais notícias da semana, duas vezes por semana.”

Isso conflita com:

- `02_MODELO_DE_CONTEUDO_E_PUBLICACAO.md`, linha de princípio: “nunca gerar card fictício”;
- `11_BLOCO_2_ESTRUTURA_DE_PAGINAS.md`, que diz que a Newsroom apresenta estados vazios honestos e não publica conteúdo fictício;
- `12_CHECKLIST_DE_PRONTIDAO_E_GO_LIVE.md`, que exige remover texto provisório/promessa não confirmada.

Observação: a página `/newsroom` está correta ao dizer que publicações fictícias não serão usadas. O problema está na Home.

**Estado após a primeira correção da Sprint 04:** resolvido no worktree. A Home agora apresenta o estado aprovado “As primeiras publicações estão em preparação”, sem títulos, datas, convidados ou frequência editorial simulados. A alteração ainda depende de revisão visual e commit.

2. Revisão visual ainda pendente:

- `09_BLOCO_1_FUNDACAO_IMPLEMENTADA.md`: layout aguardando validação visual.
- `10_CORRECAO_DE_FIDELIDADE_VISUAL.md`: reconstrução disponível para revisão; não aprovada.
- `11_BLOCO_2_ESTRUTURA_DE_PAGINAS.md`: implementado em preview; aguardando revisão visual do usuário.

3. Go-live ainda depende do checklist P0:

`12_CHECKLIST_DE_PRONTIDAO_E_GO_LIVE.md` lista como P0:

- fotos reais e enquadramentos;
- confirmação/substituição de logotipo final;
- favicon/ícones/imagem social;
- revisão de textos e canais;
- testes reais em dispositivos e navegadores;
- GitHub/Vercel/domínio;
- política de privacidade final;
- SEO final.

## Matriz de capacidades

| Capacidade | Estado | Evidência |
|---|---|---|
| Fundação Next.js | Implementada e verificada | build e smoke test passaram |
| Home | Implementada, revisão pendente | `src/app/page.tsx`; preview local abriu |
| Soluções | Implementada | `/solucoes` e três slugs passaram no smoke test |
| Sobre | Implementada | `/sobre` passou no smoke test |
| Contato | Implementado como links humanos | `/contato`, mailto e WhatsApp; sem formulário/backend |
| Privacidade | Provisória | `/privacidade`, `robots: index false` |
| Newsroom | Parcial | rotas e estados vazios; CMS ausente; Home tem cards fictícios |
| Entrevistas | Parcial | rota e estado vazio; sem conteúdo real |
| CMS/Sanity | Planejado, ausente no código | documentos aprovam Sanity; nenhuma dependência/schema implementado |
| Nexo funcional | Planejado, ausente | demo/CTA visual; sem endpoint, sem API, sem armazenamento |
| Analytics | Planejado, ausente | docs aprovam Vercel Analytics após revisão; código não integra |
| CI no GitHub | Preparada no worktree | workflow executa instalação congelada e `pnpm check`; ficará ativa após push |
| CD moderno | Não configurado ou não verificado | site vivo continua legado; ausência de workflow, isoladamente, não prova ausência de toda integração de deploy |
| Testes automatizados | Smoke test inicial implementado | rotas, 404, conteúdo fictício, sitemap e `noindex`; cobertura de acessibilidade ainda pendente |
| Deploy moderno | Ausente | site vivo continua legado |
| Segurança backend | Baixo escopo atual | sem backend ativo no Next; legado PHP preservado em `legacy/` |

## Achados por prioridade

### P0 — Consolidar a fonte de verdade

A documentação aprovada e a auditoria estavam fora do worktree da aplicação. A Sprint 04 consolidou esses artefatos em `docs/`, dentro do repositório `capisolutions-site`.

Critério de aceite:

- código, Gates, referência visual e auditorias encontrados a partir do mesmo repositório;
- decisões mais recentes prevalecem explicitamente sobre registros antigos conflitantes;
- lacunas históricas, como os artefatos originais da Sprint 02, permanecem identificadas em vez de serem preenchidas por inferência.

**Estado após revisão:** atendido no worktree; pendente de revisão e commit.

### P0 — Corrigir Home/Newsroom antes de preview público ou go-live

A Home contradiz a regra de não usar publicações fictícias. Deve trocar os cards simulados por estado editorial honesto ou por conteúdo real aprovado.

Critério de aceite:

- nenhum artigo, entrevista, convidado, data ou frequência editorial aparece sem existir ou estar aprovado.

**Estado após revisão:** atendido no worktree; lint, verificação de tipos e build aprovados.

### P0 — Revisão visual e de conteúdo ainda precisa aceite explícito

A própria documentação da Sprint 03 registra que a reconstrução visual está disponível para revisão, mas ainda não aprovada.

Critério de aceite:

- Fernando aprova visual desktop/mobile do preview;
- textos provisórios/promessas não confirmadas removidos;
- fotos/imagens/logotipo confirmados ou marcados como provisórios de forma aceitável.

### P0 — Entrega GitHub/produção ainda não está pronta

A branch moderna está fora de `main`, sem PR, sem CI e sem proteção.

Critério de aceite:

- workflow GitHub Actions criado para `pnpm install --frozen-lockfile`, lint, typecheck e build;
- PR de `codex/sprint-03-implementacao` para `main`;
- branch protection em `main` exigindo CI verde;
- merge só após revisão.

**Estado após revisão:** workflow de CI preparado no worktree e validado localmente. PR, proteção da `main` e merge permanecem pendentes e só devem avançar depois do commit e do aceite visual.

### P0 — Site vivo ainda é legado

`capisolutions.com` ainda serve HTML legado com Tailwind CDN, não Next.js.

Critério de aceite:

- deploy Vercel configurado manualmente;
- domínio apontado para a versão moderna;
- smoke test pós-deploy em todas as rotas;
- rollback definido para o legado.

### P1 — CMS e conteúdo editorial

Sanity está aprovado na arquitetura, mas não implementado. Isso é aceitável para go-live institucional se a Newsroom ficar vazia de forma honesta.

Critério de aceite para go-live institucional:

- Newsroom em estado vazio honesto;
- sem cards fictícios na Home;
- CMS pode ficar para depois.

Critério de aceite para Newsroom real:

- schemas Sanity;
- preview autenticado;
- publicação manual;
- primeira peça real revisada;
- destaque manual da Home.

### P1 — Nexo

O Nexo funcional está planejado, mas não implementado. O site pode lançar com contato humano e Nexo desativado/demonstrativo, desde que a promessa pública seja clara.

Critério de aceite:

- se for demo, dizer que está em preparação;
- se for funcional, implementar endpoint seguro, rate limit, `store: false`, base aprovada, saída estruturada, fallback e evals.

### P1 — Privacidade e dados

A página de privacidade é provisória e condiz com o estado atual sem formulário/analytics/API. Ela precisará ser atualizada antes de ativar CMS, analytics, Nexo ou qualquer coleta.

Critério de aceite:

- política final reflete ferramentas reais ativadas;
- nenhum prompt, lead ou PII em logs/analytics;
- canais humanos e expectativa de resposta aprovados.

### P1 — Qualidade automatizada

O projeto tem qualidade básica via lint/typecheck/build, mas não tem testes.

Recomendado antes de produção:

- smoke tests automáticos de rotas;
- checagem de links internos;
- auditoria de acessibilidade automatizada;
- validação de sitemap/robots/canonical;
- orçamento de bundle ou Lighthouse em preview.

**Estado após revisão:** smoke test automatizado implementado e incorporado ao `pnpm check`; acessibilidade automatizada e orçamento de desempenho permanecem pendentes.

## Pontos positivos

1. A arquitetura agora está documentada corretamente na pasta Codex.
2. Gate 06 tem registro formal de aprovação.
3. A escolha técnica é adequada ao escopo: Next.js estático/SSR, Sanity futuro, Vercel futuro, Nexo desacoplado.
4. A implementação moderna passa nos checks configurados.
5. Todas as rotas públicas esperadas respondem corretamente no servidor local.
6. O projeto preserva o legado em `legacy/`.
7. O Nexo não coleta nem armazena dados no estado atual.
8. A página de privacidade declara corretamente que é provisória e dependente das ferramentas reais.
9. A separação entre go-live institucional, CMS e Nexo está bem definida nos documentos.

## Roadmap recomendado

### Próxima ação imediata

Revisar e versionar a consolidação documental da Sprint 04. Em seguida, corrigir a Home para remover os cards fictícios da Newsroom e a promessa de Radar semanal, substituindo-os por um estado vazio aprovado.

### Depois

1. Revisar visualmente o preview com Fernando.
2. Fechar textos, fotos, logo, favicon e imagem social.
3. Criar GitHub Actions para lint/typecheck/build.
4. Abrir PR da branch codex para main.
5. Configurar Vercel manualmente pelo dashboard.
6. Publicar preview e fazer smoke test público.
7. Finalizar privacidade e SEO.
8. Fazer go-live institucional com Newsroom vazia e contato humano.
9. Implementar Sanity e primeira publicação real.
10. Implementar Nexo funcional só depois de base, privacidade e testes.

## Mudanças feitas durante a auditoria

Nenhum arquivo rastreado da implementação foi alterado.

Este relatório foi criado como novo artefato em:

`C:/Users/ferna/.codex/.chatgpt-projects/g-p-6a9b4dee2b6881919c7fd3c469523b36/AUDITORIA_REVISADA_CAPISOLUTIONS_2026-09-20.md`

Processos locais `next start` iniciados para smoke/preview foram encerrados após a verificação.
