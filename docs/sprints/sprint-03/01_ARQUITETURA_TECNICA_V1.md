# Gate 06 — Arquitetura técnica v1

**Projeto:** CapiSolutions  
**Sprint:** 03  
**Estado:** aprovado no Gate 06 em 10/09/2026  
**Data:** 10/09/2026

## 1. Decisão executiva

A primeira versão será um site editorial e institucional com renderização prioritariamente no servidor/estática, conteúdo estruturado fora do código e uma única função dinâmica relevante: o Nexo. A solução deve permanecer simples para operação individual, mas não pode impedir a evolução da Newsroom, das Entrevistas e da versão em inglês.

### Stack proposta

| Camada | Escolha | Motivo principal |
|---|---|---|
| Aplicação web | Next.js App Router + TypeScript | SEO, rotas, metadados, geração estática e endpoints de servidor no mesmo projeto |
| UI | React Server Components por padrão; componentes cliente só quando houver interação | reduzir JavaScript enviado e preservar desempenho |
| Estilos | tokens do Gate 05 + Tailwind CSS compilado | consistência visual sem Tailwind por CDN |
| CMS | Sanity | conteúdo estruturado, referências, rascunhos e pré-visualização editorial |
| Hospedagem | Vercel | previews por mudança, integração direta com Next.js e observabilidade básica |
| IA do Nexo | OpenAI Responses API pelo servidor | manter credenciais fora do navegador e permitir respostas controladas por base aprovada |
| Analytics | Vercel Web Analytics + Speed Insights | começar com telemetria enxuta, sem gravar texto livre do visitante |
| Código | Git com revisão obrigatória antes da produção | rastreabilidade e reversão |

As versões exatas serão fixadas no arquivo de dependências no início da implementação, depois de validar compatibilidade entre framework, CMS e hospedagem. Não usar versões flutuantes em produção.

## 2. Arquitetura lógica

```text
Visitante
   |
   v
Next.js / Vercel
   |-- páginas institucionais e editoriais
   |       |
   |       +--> Sanity Content Lake (somente conteúdo publicado)
   |
   |-- modo de preview autenticado
   |       |
   |       +--> rascunhos do Sanity
   |
   +-- /api/nexo (servidor)
           |-- validação, limite de tamanho e rate limit
           |-- contexto aprovado recuperado do CMS
           |-- OpenAI Responses API
           |-- resposta estruturada e filtros de saída
           +-- links de e-mail, WhatsApp ou agenda após confirmação
```

## 3. Fronteiras e responsabilidades

### Aplicação pública

- Renderiza apenas conteúdo publicado.
- Gera metadados, canonical, Open Graph, sitemap XML e robots.
- Mantém navegação funcional sem JavaScript para o conteúdo principal.
- Não contém segredos, tokens privados nem credenciais do CMS com permissão de escrita.
- Usa imagens responsivas e fontes auto-hospedadas ou carregadas conforme decisão de privacidade.

### CMS

- É a fonte de verdade para artigos, entrevistas, categorias, autores, fontes e destaques da Home.
- Pode também administrar textos institucionais, desde que a estrutura aprovada não vire um page builder irrestrito.
- Controla estados de rascunho e publicado.
- Dispara revalidação do site somente por webhook autenticado.

### Nexo

- Não escreve no CMS.
- Não envia e-mail, WhatsApp, proposta ou convite de agenda no primeiro lançamento.
- Não consulta a web para responder sobre a CapiSolutions.
- Responde somente a partir de conteúdo aprovado e regras versionadas.
- Conserva a conversa no navegador durante a sessão; persistência posterior exige nova decisão de privacidade.

## 4. Estratégia de renderização e cache

- Home, Soluções, frentes, Sobre, Contato e Privacidade: geração estática com revalidação controlada.
- Índices e detalhes editoriais: geração estática/revalidação após publicação.
- Preview: dinâmico, autenticado e fora de indexação.
- Endpoint do Nexo: dinâmico, sem cache compartilhado de prompts ou respostas.
- Falha do CMS: servir a última versão publicada quando tecnicamente possível; nunca expor rascunhos.

## 5. Rotas do lançamento

| Estado | Rotas |
|---|---|
| Publicar | `/`, `/solucoes`, `/newsroom`, `/newsroom/artigos/{slug}`, `/newsroom/entrevistas/{slug}`, `/sobre`, `/contato`, `/privacidade` |
| Publicar quando houver conteúdo aprovado | páginas individuais de solução e entrevistas individuais |
| Adiar | `/projetos`, `/busca`, `/feed` e inglês público |

As rotas adiadas não devem aparecer no menu, sitemap XML ou links internos. A página de Entrevistas pode usar o estado vazio aprovado.

Na navegação iniciada pela Home, `/sobre` pode ser apresentada em modal/drawer por rota interceptada, mantendo acesso direto, histórico do navegador, compartilhamento e fallback como página completa. Conteúdos profundos navegam normalmente e nunca forçam nova aba.

## 6. Localização

- Português permanece na raiz.
- O modelo de conteúdo inclui idioma e relação de tradução desde o início.
- Inglês usará `/en/` somente quando a página e seus metadados estiverem completos e revisados.
- `hreflang` só será emitido quando as duas versões reais existirem.
- Não redirecionar automaticamente por idioma do navegador.

## 7. SEO técnico

Cada página indexável exige:

- título e descrição próprios;
- canonical absoluto;
- imagem social e texto alternativo quando aplicável;
- apenas um H1;
- hierarquia de títulos coerente;
- breadcrumbs nos níveis internos;
- dados estruturados adequados ao tipo de página;
- data de publicação e atualização em conteúdo editorial;
- links de fontes no artigo quando aplicável;
- status 404 real para rota inexistente.

Redirects do site atual devem ser definidos após inventário de URLs e configurados como permanentes quando o destino for equivalente.

## 8. Segurança mínima

- Segredos somente no ambiente do servidor e separados por preview/produção.
- Política de segurança de conteúdo, HSTS, proteção contra framing, política de referrer e permissões mínimas.
- Webhook do CMS autenticado e com validação de assinatura.
- Sanitização/renderização segura de conteúdo rico; nenhum HTML arbitrário vindo do CMS.
- Dependências travadas e atualização assistida por alertas.
- Rate limit e limite de payload no Nexo.
- Logs sem prompts, respostas, e-mail, telefone ou resumo do visitante por padrão.
- Ambientes de preview protegidos contra indexação.

## 9. Desempenho e acessibilidade

Metas para templates principais em mobile, medidas antes do lançamento:

- Core Web Vitals em faixa “boa” no teste de campo quando houver volume; Lighthouse como verificação de laboratório, não como substituto.
- orçamento inicial de JavaScript de cliente: até 150 kB comprimidos por rota institucional, excluindo carregamento sob demanda do Nexo;
- imagens sem deslocamento de layout e com tamanhos declarados;
- navegação completa por teclado;
- foco visível e ordem lógica;
- contraste conforme WCAG 2.2 AA;
- respeito a `prefers-reduced-motion`;
- Nexo com rótulos acessíveis, anúncio de status e fallback fora do chat.

## 10. Ambientes e entrega

| Ambiente | Origem | Uso |
|---|---|---|
| Local | máquina de desenvolvimento | implementação e testes rápidos |
| Preview | cada mudança candidata | revisão visual, conteúdo e aceite |
| Produção | branch protegida | domínio público |

Fluxo: mudança pequena → testes automáticos → preview → revisão → aprovação → produção. O deploy deve ser reversível para a última versão estável.

## 11. Testes obrigatórios

- unitários para regras de transformação, metadados e Nexo;
- integração para consultas do CMS, preview e revalidação;
- ponta a ponta para navegação, publicação editorial, 404 e caminhos do Nexo;
- acessibilidade automatizada e revisão manual por teclado/leitor de tela nos fluxos críticos;
- regressão visual nos componentes e páginas aprovados no Gate 05;
- segurança: headers, segredo ausente do cliente, rate limit e abuso básico;
- SEO: canonical, sitemap, robots, dados estruturados e redirects;
- matriz responsiva em larguras móveis e desktop definidas pelo Gate 05.

## 12. Alternativas avaliadas

### Conteúdo em arquivos Markdown/MDX

Mais barato e simples tecnicamente, mas aumenta a dependência do repositório para cada publicação e enfraquece o fluxo editorial. Não recomendado para a Newsroom como operação contínua.

### WordPress monolítico

Possui ótima experiência editorial e ecossistema amplo, porém amplia superfície de manutenção e conflita com o objetivo de uma aplicação enxuta com Nexo integrado ao mesmo front-end. Pode ser reconsiderado se a hospedagem atual ou a autonomia editorial exigirem WordPress.

### Banco próprio e painel sob medida

Oferece controle máximo, mas cria trabalho de autenticação, editor, mídia, preview e segurança sem benefício proporcional no lançamento. Não recomendado.

## 13. Decisões ainda reversíveis

- provedor final de CMS e hospedagem, até criação dos projetos e aceite de custos;
- provedor/modelo exato do Nexo, após prova de qualidade e custo;
- analytics final, após revisão de privacidade;
- ferramenta de agenda e canal humano;
- retenção futura de conversas.

Trocar essas peças depois é possível porque conteúdo, interface e endpoint do Nexo ficam separados por contratos explícitos.

## 14. Referências técnicas consultadas

- [Next.js — Metadata and Open Graph images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Sanity — Visual Editing](https://www.sanity.io/docs/visual-editing)
- [Vercel — Web Analytics](https://vercel.com/docs/analytics)
- [Vercel — Speed Insights](https://vercel.com/docs/speed-insights)
- [OpenAI Docs — Data controls in the OpenAI platform](https://developers.openai.com/api/docs/guides/your-data)
- [OpenAI Docs — Moderations API](https://developers.openai.com/api/reference/resources/moderations)
- [ANPD — Segurança da informação para agentes de tratamento de pequeno porte](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte)
