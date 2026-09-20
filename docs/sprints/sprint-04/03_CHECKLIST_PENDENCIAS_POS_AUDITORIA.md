# Sprint 04 — Checklist consolidada pós-auditoria

**Atualizada em:** 20/09/2026  
**Branch:** `codex/sprint-03-implementacao`  
**Commit auditado e publicado:** `1c90651`  
**Objetivo:** separar o que já foi resolvido, o que bloqueia o go-live institucional e o que pertence às fases posteriores.

## Legenda

- `[x]` concluído e verificado;
- `[ ]` pendente;
- itens de **decisão** dependem de aprovação do responsável;
- itens de **execução** podem ser realizados depois que suas dependências forem fechadas.

## Gate 07 — Governança e diagnóstico

- [x] consolidar no repositório a documentação disponível das Sprints 01–04;
- [x] preservar o relatório revisado em `docs/audits`;
- [x] registrar a precedência das decisões aprovadas;
- [x] explicitar a ausência dos artefatos originais completos da Sprint 02;
- [x] distinguir falhas atuais de capacidades planejadas para fases posteriores;
- [x] versionar e publicar as correções da auditoria no GitHub.

**Estado:** concluído.

## Gate 08 — Integridade de conteúdo e aceite da experiência

### Concluído tecnicamente

- [x] remover publicações, datas, convidado e cadência editorial fictícios;
- [x] aplicar estado vazio honesto na Home e na Newsroom;
- [x] retirar do sitemap os índices editoriais ainda vazios;
- [x] aplicar `noindex` aos índices vazios de Artigos e Entrevistas;
- [x] incluir “Início” no menu móvel;
- [x] validar o layout tecnicamente em desktop e no viewport móvel de 390 × 844;
- [x] validar rotas públicas, página 404 e regras editoriais com smoke test.

### Decisões pendentes do responsável — bloqueiam o aceite do Gate 08

- [ ] aprovar visualmente a Home e as páginas públicas em desktop e mobile;
- [ ] revisar e aprovar os textos finais da Home, Soluções, Sobre, Contato, Newsroom e Privacidade;
- [ ] confirmar as três frentes de atuação e as capacidades que podem ser prometidas publicamente;
- [ ] confirmar e-mail, WhatsApp, links sociais e expectativa de resposta;
- [ ] confirmar ou substituir o logotipo final e suas versões clara/escura;
- [ ] fornecer/aprovar fotografias reais, enquadramentos, direitos de uso e textos alternativos;
- [ ] decidir se o Nexo será apresentado no primeiro lançamento como demonstração, desativado ou removido da navegação até a fase funcional;
- [ ] confirmar que todo elemento provisório remanescente está aceitável para o preview público.

**Critério de aceite:** nenhuma afirmação, imagem, canal ou capacidade pública permanece sem confirmação, e o responsável aprova explicitamente a experiência desktop/mobile.

## Gate 09 — Prontidão do candidato de produção

### Automação e revisão técnica

- [x] executar lint, verificação de tipos, build e smoke test localmente;
- [x] confirmar ausência de vulnerabilidades conhecidas nas dependências de produção na data da auditoria;
- [x] adicionar workflow de CI ao repositório;
- [x] publicar a branch remota com o commit `1c90651`;
- [x] confirmar que o CI remoto terminou com sucesso ([execução 35514895130](https://github.com/ofernandomaciel/capisolutions-site/actions/runs/35514895130));
- [ ] executar auditoria automatizada de acessibilidade;
- [ ] revisar por teclado e, nos fluxos críticos, com leitor de tela;
- [ ] testar em Chrome, Edge, Firefox e Safari, incluindo ao menos um celular real;
- [ ] verificar links externos, `mailto:` e WhatsApp com os destinos aprovados;
- [ ] medir Core Web Vitals, peso de JavaScript e comportamento em conexão lenta;
- [ ] validar que não há rolagem horizontal, cortes ou regressões nos breakpoints principais.

### Identidade, SEO, privacidade e segurança

- [ ] gerar/aprovar favicon, ícone de aplicação e imagem Open Graph padrão;
- [ ] otimizar as imagens finais em formatos e dimensões apropriados;
- [ ] revisar títulos, descrições, canonical, sitemap e robots no ambiente de preview;
- [ ] adicionar e validar os dados estruturados aplicáveis;
- [ ] fechar a Política de Privacidade de acordo com as ferramentas realmente ativadas;
- [ ] confirmar que nenhum consentimento de cookies é necessário ou implementá-lo se houver cookies não essenciais;
- [ ] revisar headers de segurança, CSP, cache, HTTPS e exposição de segredos no ambiente de hospedagem.

### Entrega e go-live

- [ ] abrir PR da branch `codex/sprint-03-implementacao` para `main` após o Gate 08;
- [ ] revisar o conjunto completo de alterações no PR;
- [ ] conectar o repositório à Vercel e gerar um preview sem substituir o site legado;
- [ ] aprovar o preview final;
- [ ] confirmar propriedade e acesso ao DNS de `capisolutions.com`;
- [ ] definir o comportamento de `www`, canonical e redirects necessários;
- [ ] documentar e testar o rollback para o site legado;
- [ ] integrar a branch à `main` somente após os aceites;
- [ ] publicar a versão moderna somente com autorização final explícita;
- [ ] executar smoke test pós-publicação e verificar domínio, HTTPS, redirects e páginas essenciais.

**Critério de aceite:** candidato de produção aprovado, verificável e reversível, com CI verde, preview validado e plano de publicação/rollback confirmado.

## Fases posteriores — não bloqueiam o go-live institucional

- [ ] implementar Sanity, schemas, preview editorial, publicação e backup;
- [ ] preparar e publicar o primeiro artigo real;
- [ ] estruturar a primeira entrevista, incluindo autorização e revisão do convidado;
- [ ] definir o fluxo de distribuição para Instagram e LinkedIn;
- [ ] escolher analytics compatível com a política de privacidade;
- [ ] implementar monitoramento de disponibilidade e erros sem registrar conteúdo sensível;
- [ ] implementar o Nexo funcional somente após base aprovada, privacidade, segurança e avaliações;
- [ ] avaliar versão em inglês, busca, filtros, feed e newsletter quando houver capacidade editorial.

## Próxima sequência operacional

1. Obter as decisões e o aceite visual listados no Gate 08.
2. Finalizar QA, identidade, SEO, privacidade e segurança do Gate 09.
3. Abrir o PR e gerar um preview de homologação.
4. Aprovar preview, domínio e rollback.
5. Autorizar merge e go-live em uma decisão separada.
