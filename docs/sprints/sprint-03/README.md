# CapiSolutions — Sprint 03: Arquitetura técnica e preparação para implementação

**Gate:** 06  
**Estado:** aprovado em 10/09/2026  
**Data:** 10/09/2026  
**Regra:** nenhuma implementação de produção começa antes da aprovação deste Gate e da resolução dos bloqueadores P0.

## Ponto de partida

O Gate 05 foi informado como aprovado na abertura desta Sprint 03. Seu fechamento foi posteriormente recuperado da tarefa “Sprint 02 — Experiência Visual e Nexo” e consolidado em `08_GATE_05_HANDOFF_RECUPERADO.md`. O espelho inicial em disco continha somente o handoff geral e os registros da Sprint 01 até o Gate 03.

- a aprovação e as decisões textuais do Gate 05 foram recuperadas;
- o painel visual canônico do Gate 04 foi recuperado da tarefa da Sprint 02 em 17/09/2026 e preservado como `GATE_04_LAYOUT_APROVADO.png`;
- nenhuma cor, medida, asset ou comportamento visual ausente foi recriado por suposição;
- decisões antigas de arquitetura de informação continuam válidas quando não conflitam com o Gate 05.

## Resultado recomendado do Gate 06

Adotar uma arquitetura desacoplada e progressiva:

- **site:** Next.js com App Router e TypeScript;
- **estilos:** tokens do Gate 05 e Tailwind CSS compilado no build, sem CDN;
- **conteúdo:** Sanity como CMS estruturado, com rascunho e pré-visualização;
- **hospedagem:** Vercel, com ambientes de preview e produção;
- **Nexo:** endpoint exclusivamente no servidor usando a Responses API da OpenAI, base aprovada e sem ações externas autônomas no lançamento;
- **observabilidade:** logs técnicos sem texto livre, Web Analytics e Speed Insights, sujeitos à revisão de privacidade;
- **publicação:** português na raiz; inglês preparado na arquitetura, mas não publicado no lançamento.

## Documentos

1. `01_ARQUITETURA_TECNICA_V1.md` — arquitetura, decisões, fluxos e requisitos não funcionais.
2. `02_MODELO_DE_CONTEUDO_E_PUBLICACAO.md` — schema do CMS e fluxo editorial.
3. `03_NEXO_SEGURANCA_PRIVACIDADE_E_QUALIDADE.md` — desenho do assistente, proteção de dados e testes.
4. `04_BACKLOG_DE_IMPLEMENTACAO.md` — ordem executável, dependências e definição de pronto.
5. `05_GATE_06_REGISTRO_DE_DECISAO.md` — pacote de aprovação e bloqueadores.
6. `06_GATE_06_APROVACAO.md` — registro formal da aprovação.
7. `07_BLOCO_0_INVENTARIO_DO_SITE_LEGADO.md` — inventário do repositório, stack e assets encontrados.
8. `08_GATE_05_HANDOFF_RECUPERADO.md` — decisões vinculantes recuperadas da Sprint 02.
9. `09_BLOCO_1_FUNDACAO_IMPLEMENTADA.md` — registro da fundação navegável, verificações e integrações adiadas.
10. `10_CORRECAO_DE_FIDELIDADE_VISUAL.md` — registro da divergência identificada e da reconstrução baseada no mockup aprovado.
11. `11_BLOCO_2_ESTRUTURA_DE_PAGINAS.md` — mapa das páginas públicas implementadas e do conteúdo deliberadamente adiado.
12. `12_CHECKLIST_DE_PRONTIDAO_E_GO_LIVE.md` — lista priorizada de conteúdo, fotos, CMS, APIs, qualidade e publicação.

## Encerramento

O Gate 06 foi aprovado por Fernando Maciel em 10/09/2026. O inventário do Bloco 0 foi concluído e a fundação navegável foi implementada em 17/09/2026. O layout pode evoluir com conteúdo local; CMS, Nexo, analytics e demais APIs permanecem desacoplados e serão integrados em blocos posteriores.
