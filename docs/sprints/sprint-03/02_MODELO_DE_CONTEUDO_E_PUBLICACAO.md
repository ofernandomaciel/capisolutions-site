# Gate 06 — Modelo de conteúdo e publicação

**Estado:** aprovado no Gate 06 em 10/09/2026

## 1. Princípio

O CMS armazena conteúdo estruturado, não páginas livres. A composição visual continua sob controle do código e do sistema aprovado no Gate 05. Isso evita inconsistência, facilita SEO, permite relacionamentos e prepara o inglês sem duplicação desorganizada.

## 2. Tipos de documento

| Tipo | Uso | Campos essenciais |
|---|---|---|
| `siteSettings` | dados globais | nome, domínio, redes, canais ativos, SEO padrão, imagem social padrão |
| `homePage` | curadoria da Home | textos aprovados, ordem fixa de blocos, artigos em destaque, CTA |
| `solutionFront` | três frentes | título, resumo, corpo, ofertas, processo, limites, CTA, SEO |
| `offer` | ofertas/serviços | nome, slug reservado, resumo, escopo, limites, CTA, publicável individualmente |
| `article` | Newsroom | título, slug, formato editorial, linha fina, resumo, corpo, autor, publicação/atualização, categoria, tags, fontes, imagem, SEO |
| `interview` | entrevista | título, convidado, introdução, Q&A/follow-ups, tratamento editorial, revisão/aprovação, créditos, datas, tags, SEO |
| `person` | autor ou convidado | nome, bio aprovada, função, foto/crédito, links autorizados |
| `category` | taxonomia editorial | nome, slug, descrição e ordem |
| `tag` | relações temáticas | nome e slug; não gera página pública no lançamento |
| `legalPage` | privacidade | título, corpo aprovado, versão e data de vigência |
| `nexoKnowledge` | base aprovada | intenção, pergunta, resposta, fonte interna, versão, status, validade |

## 3. Objetos reutilizáveis

- `seo`: título, descrição, canonical opcional, imagem social, `noIndex` controlado;
- `portableText`: blocos permitidos, links, citações, imagens e legendas;
- `source`: título, URL, veículo/autor e data de acesso/publicação quando aplicável;
- `pullQuote`: texto, atribuição e variante visual permitida;
- `imageWithAlt`: asset, texto alternativo, legenda e crédito;
- `cta`: rótulo, destino interno ou canal aprovado;
- `translationLink`: idioma e documento correspondente;
- `approval`: estado, responsável e data; usado especialmente em entrevistas.

## 4. Validações do CMS

- slug único por tipo e idioma;
- título, resumo, autor e data obrigatórios para publicação editorial;
- categoria restrita inicialmente a Inteligência Artificial, Dados, Tecnologia, Carreira e Negócios & Inovação;
- imagem exige texto alternativo ou marcação explícita de decorativa;
- fonte exige URL válida;
- entrevista não publica sem `approval.status = approved`;
- serviço individual não publica sem escopo, limites, processo e CTA;
- documento em inglês não publica sem relação com o original e revisão marcada;
- `noIndex` visível e deliberado, nunca inferido silenciosamente.

## 5. Relações

```text
article ---- category
   |\
   | +----- tags
   +------- related offers

interview -- guest/person
   |\
   | +----- tags
   +------- related articles

solutionFront -- offers
homePage ------ featured articles/interviews
nexoKnowledge - source page + version
```

## 6. Fluxo editorial

1. Criar rascunho.
2. Preencher campos e fontes.
3. Revisar conteúdo, links, direitos de imagem e SEO.
4. Ver no preview autenticado.
5. Obter aprovação necessária — obrigatória para falas de entrevistado.
6. Publicar manualmente.
7. Revalidar somente as páginas afetadas.
8. Conferir produção e compartilhamento social.
9. Atualizar ou retirar conteúdo quando necessário, preservando redirect se a URL mudar.

### Papéis mínimos

- **Autor/editor:** cria e revisa conteúdo.
- **Aprovador:** autoriza publicação e mudanças sensíveis.
- **Desenvolvedor:** mantém schema e aplicação; não precisa participar de cada publicação.

Uma única pessoa pode acumular papéis, mas o checklist continua obrigatório.

## 7. Curadoria da Home

- Destaques são referências manuais a documentos publicados, com fallback automático para recentes quando não houver seleção.
- O CMS impede selecionar rascunhos para a Home pública.
- Na ausência de publicação, usar os estados vazios aprovados; nunca gerar card fictício.
- Entrevistas permanecem separadas da taxonomia de categorias, mas podem compartilhar temas.

## 8. Mídia

- guardar original e produzir variantes otimizadas no pipeline;
- exigir crédito e autorização quando aplicáveis;
- não usar nome do arquivo como texto alternativo;
- definir ponto focal para cortes responsivos;
- impedir SVG não confiável enviado por usuários;
- documentar origem e licença de cada asset editorial.

## 9. Migração inicial

1. Inventariar URLs e conteúdo do site atual.
2. Classificar: migrar, reescrever, arquivar ou redirecionar.
3. Criar documentos no CMS somente com conteúdo aprovado.
4. Preservar URLs equivalentes sempre que fizer sentido.
5. Montar mapa de redirects e validar ausência de ciclos.
6. Conferir metadados e links após publicação.

## 10. Critérios de aceite

- editor publica artigo sem alterar código;
- preview diferencia rascunho de conteúdo público;
- artigo e entrevista usam modelos distintos;
- destaque da Home é manual;
- falas de entrevista não publicam sem aprovação registrada;
- conteúdo em inglês permanece invisível até estar completo;
- atualização de conteúdo não exige deploy integral;
- schema não permite HTML arbitrário nem página vazia.
