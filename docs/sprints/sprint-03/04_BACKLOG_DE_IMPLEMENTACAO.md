# Gate 06 — Backlog de implementação

**Estado:** aprovado; Bloco 0 concluído e fundação do Bloco 1 implementada em 17/09/2026

## 1. Ordem de execução

### Bloco 0 — Prontidão e acessos (P0)

- anexar o fechamento e os arquivos aprovados do Gate 05;
- confirmar o reuso do repositório localizado `ofernandomaciel/capisolutions-site`;
- confirmar controle do domínio/DNS e o acesso à Hostinger indicada pelo código legado;
- criar projetos de preview e produção;
- aprovar CMS e custo;
- obter logo, fontes, imagens e licenças;
- definir ao menos um canal humano real;
- nomear responsáveis por conteúdo, técnica e privacidade;
- inventariar URLs atuais.

**Saída:** checklist de acessos sem credenciais no repositório e mapa de migração inicial.

### Bloco 1 — Fundação

- inicializar Next.js + TypeScript e qualidade automatizada;
- configurar ambientes, variáveis e preview;
- implementar tokens e componentes-base do Gate 05;
- criar layout, cabeçalho, menu móvel e rodapé;
- configurar fontes, imagens, headers e página 404;
- adicionar testes e regressão visual.

**Saída:** shell navegável, responsivo e acessível.

**Situação em 17/09/2026:** shell, navegação, componentes-base, rotas institucionais, metadados, sitemap, robots e página 404 implementados. Lint, verificação de tipos e build de produção aprovados. A inspeção visual final em navegadores e dispositivos permanece como critério de aceite antes de encerrar o bloco.

### Bloco 2 — Institucional e serviços

- Home;
- hub de Soluções;
- três páginas de frente;
- Sobre;
- Contato e fallback humano;
- Privacidade;
- metadados e dados estruturados por template.

**Saída:** caminho institucional completo em preview, usando conteúdo aprovado.

**Situação em 17/09/2026:** estrutura institucional completa em preview, incluindo as três frentes de solução, Sobre, Contato, Privacidade e o esqueleto editorial da Newsroom. Conteúdo real de artigos e entrevistas permanece adiado para depois do go-live, conforme decisão do usuário.

### Bloco 3 — CMS e núcleo editorial

- criar schemas, validações e permissões;
- integrar consultas publicadas e preview autenticado;
- implementar Newsroom, categorias e artigo;
- implementar Entrevistas e estado inicial;
- configurar destaque manual da Home;
- configurar webhook e revalidação;
- cadastrar a primeira peça editorial real.

**Saída:** publicação manual ponta a ponta sem alteração de código.

### Bloco 4 — Nexo

- publicar base inicial aprovada;
- implementar interface acessível e contexto de origem;
- criar endpoint seguro e contrato estruturado;
- aplicar limites, moderação, timeout e fallback;
- montar resumo editável;
- ativar apenas links de canais confirmados;
- executar conjunto de avaliação e teste de custo.

**Saída:** fluxo completo em preview, sem ações externas autônomas.

### Bloco 5 — Migração, endurecimento e lançamento

- concluir inventário e redirects;
- validar SEO, sitemap e robots;
- revisar performance, acessibilidade, segurança e privacidade;
- testar navegadores e dispositivos prioritários;
- preparar backup/exportação de conteúdo e rollback;
- revisar analytics sem PII;
- fazer ensaio de publicação e rollback;
- apontar domínio somente após aceite final.

**Saída:** candidato de produção e checklist de lançamento assinado.

## 2. Caminho crítico

```text
Gate 05 anexado + acessos + canal humano
              |
              v
fundação visual e técnica
       |               |
       v               v
páginas públicas     CMS/schema
       |               |
       +-------+-------+
               v
        conteúdo real em preview
               |
               v
          Nexo + avaliações
               |
               v
      QA, migração e lançamento
```

## 3. Itens que podem avançar em paralelo

- inventário de URLs e preparação dos acessos;
- modelagem do CMS e construção dos componentes-base;
- revisão de privacidade e aquisição/configuração do canal humano;
- preparação do conteúdo inaugural e configuração do ambiente editorial.

## 4. Definition of Ready

Uma tarefa entra em implementação quando possui:

- fonte aprovada;
- referência do Gate 05 quando visual;
- texto e assets reais ou estado vazio aprovado;
- comportamento responsivo e acessível esperado;
- dependências e critérios de aceite;
- decisão explícita sobre analytics/dados quando aplicável.

## 5. Definition of Done

Uma tarefa só termina quando:

- código revisado e testes passam;
- preview foi conferido;
- acessibilidade e responsividade foram validadas;
- metadados e estados de erro estão cobertos;
- não há segredo ou PII em logs/cliente;
- documentação operacional foi atualizada;
- aceite do responsável foi registrado.

## 6. Critérios de lançamento

- todas as rotas publicadas têm conteúdo final e não possuem placeholders;
- nenhum link vazio, CTA sem destino ou canal fictício;
- uma publicação inaugural revisada ou estado editorial vazio aprovado;
- Nexo atende aos testes críticos ou é lançado desativado com fallback funcional;
- política de privacidade corresponde às ferramentas reais;
- redirects validados;
- SEO, acessibilidade, desempenho e segurança sem falha bloqueadora;
- backup/exportação do CMS e rollback de deploy testados;
- monitoramento e responsável pós-lançamento definidos.

## 7. Fora do escopo imediato

- Projetos, cases, prova social e integração com GitHub;
- páginas individuais de serviço sem conteúdo suficiente;
- inglês público;
- busca, feed e filtros avançados;
- publicação automática em Instagram ou LinkedIn;
- CRM, envio automático e agenda criada pelo Nexo;
- personalização baseada em perfil e armazenamento duradouro de conversas.
