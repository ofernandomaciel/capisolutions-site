# Sitemap v1

**Projeto:** CapiSolutions  
**Sprint:** 01 — Descoberta  
**Status:** aprovado no Gate 02; atualizado pela Emenda 01  
**Data:** 04/09/2026

## Objetivo

Organizar serviços, projetos, autoridade e produção editorial em uma estrutura compreensível, escalável e simples de navegar. O sitemap separa a arquitetura permanente do site da quantidade de conteúdo que estará pronta no lançamento.

## Árvore proposta

```text
CapiSolutions
│
├── Início                                      /
│
├── Soluções                                    /solucoes
│   ├── Tecnologia & Produto                    /solucoes/tecnologia-produto
│   │   ├── Dados, IA & Automação               /solucoes/tecnologia-produto/dados-ia-automacao
│   │   │   ├── Soluções com IA                 /solucoes/tecnologia-produto/solucoes-ia
│   │   │   ├── Automação de Processos          /solucoes/tecnologia-produto/automacao-de-processos
│   │   │   ├── Análise de Dados                /solucoes/tecnologia-produto/analise-de-dados
│   │   │   └── Engenharia de Dados             /solucoes/tecnologia-produto/engenharia-de-dados
│   │   ├── Quality Assurance                   /solucoes/tecnologia-produto/quality-assurance
│   │   ├── UI/UX                               /solucoes/tecnologia-produto/ui-ux
│   │   ├── Desenvolvimento Web                 /solucoes/tecnologia-produto/desenvolvimento-web
│   │   └── Engenharia e Arquitetura*           /solucoes/tecnologia-produto/engenharia-arquitetura
│   │
│   ├── Conteúdo & Conhecimento                 /solucoes/conteudo-conhecimento
│   │   ├── Criação de Conteúdo                 /solucoes/conteudo-conhecimento/criacao-conteudo
│   │   ├── Escrita Criativa                    /solucoes/conteudo-conhecimento/escrita-criativa
│   │   └── Palestras sobre IA                  /solucoes/conteudo-conhecimento/palestras-ia
│   │
│   └── Linguagem & Comunicação                 /solucoes/linguagem-comunicacao
│       ├── Tradução                            /solucoes/linguagem-comunicacao/traducao
│       └── Interpretação                       /solucoes/linguagem-comunicacao/interpretacao
│
├── Projetos                                    /projetos
│   └── Projeto ou case                         /projetos/{slug}
│
├── Conteúdo                                    /conteudo
│   ├── Análises                                /conteudo/analises
│   ├── Radar                                   /conteudo/radar
│   ├── Carreira                                /conteudo/carreira
│   ├── Guias                                   /conteudo/guias
│   └── Artigo                                  /conteudo/{slug}
│
├── Entrevistas                                 /entrevistas
│   └── Entrevista                              /entrevistas/{slug}
│
├── Sobre                                       /sobre
│
├── Contato                                     /contato
│
└── Utilitários
    ├── Política de privacidade                 /privacidade
    ├── Página não encontrada                   /404
    ├── Busca editorial**                       /busca
    ├── RSS ou feed**                           /feed
    └── Sitemap XML                             /sitemap.xml
```

\* Páginas individuais continuam sujeitas à regra de conteúdo e evidência mínimos, mesmo quando a oferta já está comercialmente disponível.  
\** Busca e feed são desejáveis, mas podem entrar depois do lançamento se o acervo inicial não justificar sua implementação.

## Navegação global

### Cabeçalho

Ordem recomendada:

1. Soluções
2. Projetos
3. Conteúdo
4. Entrevistas
5. Sobre
6. **Conversar** — CTA destacado para Contato

O logotipo leva à Home. “Início” não precisa ocupar um item no cabeçalho em telas grandes, mas deve aparecer no menu móvel por clareza.

### Rodapé

O rodapé deve funcionar como mapa compacto:

- Soluções e três frentes;
- Projetos;
- Conteúdo e suas categorias;
- Entrevistas;
- Sobre;
- Contato;
- Instagram e LinkedIn;
- e-mail profissional;
- Política de privacidade;
- direitos autorais.

## Papel de cada página

| Página | Pergunta que responde | Ação principal |
|---|---|---|
| Início | “O que é a CapiSolutions e por que devo continuar?” | Explorar soluções ou iniciar contato |
| Soluções | “Em quais tipos de problema a CapiSolutions atua?” | Escolher uma frente |
| Frente de solução | “Como essa frente reúne competências relacionadas?” | Explorar um serviço ou conversar |
| Serviço | “Este serviço resolve meu problema e há confiança para avançar?” | Solicitar conversa ou orçamento |
| Projetos | “Há evidências de capacidade e resultados?” | Abrir um case |
| Case | “Qual era o contexto, o trabalho realizado e o resultado?” | Conhecer solução relacionada ou conversar |
| Conteúdo | “Que conhecimento e perspectiva a marca produz?” | Ler, filtrar ou acompanhar canais |
| Artigo | “Qual é a análise completa sobre este tema?” | Ler conteúdo relacionado ou compartilhar |
| Entrevistas | “Quem está construindo tecnologia e quais histórias importam?” | Abrir uma entrevista |
| Entrevista | “O que podemos aprender com esta pessoa e sua trajetória?” | Ler, compartilhar ou seguir o acervo |
| Sobre | “Quem é Fernando e por que existe a CapiSolutions?” | Ver projetos, soluções ou contato |
| Contato | “Como começo uma conversa e o que preciso informar?” | Enviar contato pelo canal escolhido |

## Modelo de publicação por profundidade

A arquitetura admite páginas individuais para todos os serviços, mas o lançamento não deve publicar páginas vazias ou repetitivas.

**Prioridade aprovada após o Gate 02:** Dados, IA e Automação lideram Tecnologia & Produto. O agrupador pode ser apresentado como destaque dentro da frente sem criar um nível adicional obrigatório na navegação global.

### Mínimo para lançamento

- Home;
- hub de Soluções;
- três páginas de frente;
- Projetos e ao menos um case consistente, se autorizado;
- Conteúdo e publicações iniciais;
- Entrevistas e publicações iniciais, conforme aprovação dos convidados;
- Sobre;
- Contato;
- Política de privacidade.

### Páginas individuais de serviço

Publicar apenas quando cada página tiver:

- problema e público claramente definidos;
- escopo da oferta;
- modo de trabalho;
- evidência, exemplo ou experiência relevante;
- limites do serviço;
- CTA específico.

Até que esse conteúdo exista, a frente correspondente pode apresentar o serviço em bloco e direcionar para Contato. A rota individual permanece planejada, mas não precisa estar pública.

## Relações de conteúdo

- Cada **projeto** pode apontar para uma ou mais soluções relacionadas.
- Cada **serviço** pode apontar para projetos e conteúdos que demonstrem experiência.
- Cada **artigo** pode receber categoria, tema e conteúdos relacionados.
- Cada **entrevista** pertence ao núcleo editorial, mas possui template e índice próprios.
- Conteúdo e Entrevistas devem compartilhar busca, taxonomia temática e recomendações quando o CMS permitir, sem perder suas identidades na navegação.

## Regras editoriais e de SEO para a arquitetura

1. Uma intenção principal por página.
2. URLs curtas, legíveis e estáveis.
3. Breadcrumbs a partir do segundo nível.
4. Título, descrição, imagem social, canonical e dados estruturados previstos em todos os templates publicáveis.
5. Artigos e entrevistas devem exibir autoria, data de publicação, data de atualização e fontes quando aplicável.
6. Entrevistas só são publicadas após validação do entrevistado.
7. Filtros devem usar páginas indexáveis apenas quando houver volume e valor editorial; combinações efêmeras não devem gerar páginas de baixa qualidade.
8. A arquitetura deve funcionar sem depender de Instagram ou LinkedIn para completar o conteúdo.

## Localização futura

O lançamento aprovado será em português. O inglês será adicionado em uma segunda fase e será o único outro idioma previsto. A árvore deve permanecer equivalente entre idiomas, admitindo exceções editoriais explicitamente documentadas.

A estratégia definitiva de URLs será decidida no Gate 05. A recomendação inicial é manter o português na raiz e usar `/en/` para inglês, com metadados localizados, alternância clara e `hreflang`. Nenhuma página em inglês deve ser indexada antes de possuir conteúdo completo e revisado.

## Itens fora do Gate 02

- texto final das páginas;
- componentes visuais e layout de alta fidelidade;
- tecnologia do CMS;
- mecanismos finais de busca e recomendação;
- automações de distribuição social;
- implementação, migração e redirects.

## Critérios de aprovação do Gate 02 — sitemap

- [ ] As sete áreas principais estão corretas e completas.
- [ ] As três frentes organizam todos os serviços sem sobreposição confusa.
- [ ] Entrevistas deve permanecer como item de primeiro nível.
- [ ] A profundidade proposta para páginas de serviço é adequada.
- [ ] Projetos, artigos e entrevistas têm páginas de índice e detalhe.
- [ ] A navegação cabe em desktop e continua clara no menu móvel.
- [ ] Nenhum conteúdo importante depende exclusivamente das redes sociais.
- [ ] Itens adiados estão explicitamente separados do escopo arquitetônico aprovado.

## Recomendação para aprovação

Aprovar a árvore como arquitetura-alvo e usar publicação progressiva: as rotas existem no modelo, mas só entram no site público quando houver conteúdo suficiente e evidência real. Isso preserva a capacidade de crescimento sem inflar o lançamento com páginas rasas.
