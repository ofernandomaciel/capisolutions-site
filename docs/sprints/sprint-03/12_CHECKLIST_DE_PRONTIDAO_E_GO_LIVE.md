# CapiSolutions — Checklist de prontidão e go-live

**Data:** 17/09/2026  
**Objetivo:** publicar um site institucional bonito, navegável, seguro e preparado para Newsroom, entrevistas e Nexo.

## Estado atual

- layout e páginas públicas implementados;
- Archivo Black e Open Sans incorporadas;
- rotas responsivas e build de produção aprovados;
- CMS, analytics e APIs ainda desligados;
- conteúdo editorial real ainda não publicado;
- commit local `9829a5c` criado na branch `codex/sprint-03-implementacao`;
- envio ao GitHub pendente de nova autenticação da conta `ofernandomaciel`.

## P0 — Necessário para um go-live institucional

### Identidade e imagens

- [ ] produzir fotografias reais de Fernando para Hero, Sobre, autoria e contato;
- [ ] aprovar os enquadramentos desktop e mobile;
- [ ] confirmar ou substituir o logotipo final e suas versões clara/escura;
- [ ] gerar favicon, ícone de aplicação e imagem social padrão;
- [ ] otimizar imagens em WebP/AVIF e manter originais fora do carregamento público;
- [ ] confirmar direitos de uso e textos alternativos.

### Conteúdo institucional

- [ ] revisar textos da Home;
- [ ] revisar as três frentes e suas capacidades reais;
- [ ] fechar biografia e trajetória da página Sobre;
- [ ] confirmar e-mail, WhatsApp e links sociais;
- [ ] remover qualquer texto provisório ou promessa não confirmada;
- [ ] revisar português, consistência de voz e chamadas para ação.

### Experiência e navegação

- [ ] revisar desktop, tablet e celulares reais;
- [ ] testar menu, âncoras, links internos, e-mail e WhatsApp;
- [ ] validar foco por teclado, contraste, textos alternativos e redução de movimento;
- [ ] testar Chrome, Edge, Safari e Firefox;
- [ ] revisar página 404 e estados vazios da Newsroom;
- [ ] confirmar que não existe rolagem horizontal ou conteúdo cortado.

### Infraestrutura

- [ ] renovar a autenticação do GitHub e enviar a branch remota;
- [ ] revisar o código em preview e integrar a branch aprovada à principal;
- [ ] criar ou conectar o projeto Vercel ao repositório;
- [ ] configurar ambientes de preview e produção;
- [ ] confirmar domínio, acesso ao DNS e estratégia para a hospedagem atual;
- [ ] configurar `capisolutions.com` e redirecionamento de `www`;
- [ ] manter rollback para o site legado e mapa de redirects;
- [ ] validar HTTPS, cache e headers de segurança.

### SEO e confiança

- [ ] revisar títulos e descrições de todas as páginas;
- [ ] criar imagens Open Graph;
- [ ] validar canonical, sitemap e robots em produção;
- [ ] adicionar dados estruturados adequados;
- [ ] fechar Política de Privacidade conforme as ferramentas realmente ativadas;
- [ ] incluir consentimento somente se cookies não essenciais forem usados.

## P1 — CMS e núcleo editorial

### Sanity

- [ ] criar organização, projeto, dataset e ambientes;
- [ ] definir usuários, papéis e permissões;
- [ ] implementar schemas de configurações, páginas, autores, categorias, artigos, entrevistas e fontes;
- [ ] criar campos de SEO, imagem, texto alternativo, status e datas;
- [ ] implementar rascunho e preview autenticado;
- [ ] conectar consultas publicadas ao site;
- [ ] configurar webhook e revalidação;
- [ ] criar destaque manual da Home com fallback;
- [ ] configurar CORS somente para domínios necessários;
- [ ] preparar exportação, backup e documentação editorial.

### Conteúdo editorial

- [ ] definir calendário de estreia;
- [ ] preparar o primeiro artigo real;
- [ ] selecionar e convidar o primeiro entrevistado;
- [ ] aprovar pauta, autorização, revisão e publicação da entrevista;
- [ ] cadastrar autores, categorias e fontes;
- [ ] revisar cards e página completa de artigo/entrevista;
- [ ] definir processo de distribuição no Instagram e LinkedIn.

O site institucional pode entrar no ar com a Newsroom em estado vazio. O CMS precisa estar ativo antes da primeira publicação editorial, não necessariamente antes do primeiro go-live.

## P1 — Nexo e APIs

### Decisão de lançamento

- [ ] decidir entre lançar o Nexo desativado, demonstrativo ou funcional;
- [ ] manter e-mail e WhatsApp como fallback humano permanente;
- [ ] não apresentar capacidades ainda indisponíveis.

### Para o Nexo funcional

- [ ] configurar chave da OpenAI somente no servidor;
- [ ] implementar endpoint seguro e contrato estruturado;
- [ ] publicar base de conhecimento institucional aprovada;
- [ ] manter o estado da demanda separado do texto conversacional;
- [ ] decidir armazenamento, retenção e exclusão de dados pessoais;
- [ ] implementar consentimento no momento apropriado;
- [ ] adicionar validação, limite de payload, rate limiting e timeout;
- [ ] aplicar moderação e proteção contra manipulação de instruções;
- [ ] garantir que preço, prazo, disponibilidade e capacidade não sejam inventados;
- [ ] criar resumo revisável antes do encaminhamento;
- [ ] integrar somente canais reais e confirmar tecnicamente qualquer ação;
- [ ] criar kill switch e fallback em caso de falha;
- [ ] executar testes de qualidade, segurança e custo.

### APIs e integrações opcionais

- [ ] envio transacional de e-mail, se aprovado;
- [ ] WhatsApp com mensagem preparada ou integração oficial, conforme escopo;
- [ ] agenda com link simples ou consulta real de disponibilidade;
- [ ] armazenamento de leads separado do CMS editorial;
- [ ] monitoramento de erros sem registrar conteúdo sensível.

O go-live institucional não precisa esperar o Nexo funcional. A recomendação é lançar com contato humano e ativar o Nexo somente depois dos testes.

## P1 — Métricas, desempenho e segurança

- [ ] escolher analytics compatível com a política de privacidade;
- [ ] não enviar mensagens, leads ou PII para analytics;
- [ ] configurar monitoramento de disponibilidade e erros;
- [ ] testar Core Web Vitals e otimização de imagens/fontes;
- [ ] verificar dependências e vulnerabilidades;
- [ ] revisar CSP, headers, rate limits e segredos;
- [ ] executar auditoria de acessibilidade;
- [ ] validar orçamento de JavaScript e comportamento em conexão lenta.

## P2 — Depois do go-live

- [ ] iniciar cadência de artigos, entrevistas e Radar;
- [ ] medir navegação, cliques e conversões sem invadir privacidade;
- [ ] avaliar perguntas recebidas para melhorar conteúdo e Nexo;
- [ ] criar versão em inglês quando houver capacidade editorial;
- [ ] considerar busca, filtros, feed e newsletter somente com conteúdo suficiente;
- [ ] planejar automações de Instagram e LinkedIn depois de validar o fluxo manual;
- [ ] revisar mensalmente links, dependências, conteúdo e indicadores.

## Sequência recomendada

1. Fotos e identidade final.
2. Revisão dos textos e canais.
3. QA responsivo, acessibilidade e navegadores.
4. GitHub, Vercel, domínio, segurança e preview final.
5. Política de Privacidade e SEO final.
6. Go-live institucional com Newsroom vazia e contato humano.
7. Sanity e primeira publicação editorial.
8. Projeto de entrevistas e distribuição social.
9. Nexo funcional, somente após base aprovada, privacidade e testes.
