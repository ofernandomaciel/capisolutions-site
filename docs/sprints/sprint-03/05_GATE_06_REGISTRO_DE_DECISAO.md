# Gate 06 — Registro de decisão

**Projeto:** CapiSolutions  
**Sprint:** 03  
**Estado:** aprovado  
**Data:** 10/09/2026

**Aprovador:** Fernando Maciel  
**Aprovação registrada:** 10/09/2026, sem ressalvas.

## 1. Decisões propostas

| ID | Decisão | Estado |
|---|---|---|
| D06-01 | Next.js App Router + TypeScript como aplicação web | aprovado |
| D06-02 | tokens do Gate 05 e Tailwind CSS compilado, sem CDN | aprovado |
| D06-03 | Sanity como CMS estruturado | aprovado |
| D06-04 | Vercel para preview e produção | aprovado |
| D06-05 | português na raiz e `/en/` reservado para fase posterior | aprovado |
| D06-06 | Responses API da OpenAI somente pelo servidor para o Nexo | aprovado |
| D06-07 | Nexo sem CRM, envio ou criação autônoma de agenda no lançamento | reafirmação do escopo aprovado |
| D06-08 | conversa não persistida pela CapiSolutions e `store: false` no lançamento | aprovado |
| D06-09 | Web Analytics e Speed Insights sem texto livre/PII, após revisão de privacidade | aprovado |
| D06-10 | publicação progressiva; rotas vazias ficam ocultas e fora do sitemap | reafirmação da arquitetura aprovada |

## 2. Bloqueadores P0 para começar a implementação útil

| Bloqueador | Evidência de resolução |
|---|---|
| imagens canônicas do Gate 04 ainda não anexadas | arquivos de referência anexados e versionados |
| repositório localizado e reutilização aprovada | resolvido; preservar legado e usar branch própria |
| domínio identificado e Hostinger indicada; acessos e DNS não confirmados | responsáveis e acessos testados |
| CMS e custos ainda sem aceite | projeto criado e orçamento aprovado |
| e-mail e WhatsApp candidatos encontrados, mas não validados | ao menos um destino testado e aprovado |
| assets legados encontrados; pacote visual final ainda ausente | arquivos finais e direitos de uso registrados |
| política e operação de dados pendentes | texto e responsáveis aprovados |

Credenciais nunca devem ser colocadas nestes documentos; registrar apenas que o acesso foi testado e quem é o responsável.

## 3. Riscos principais e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| implementar sem as imagens canônicas do Gate 04 | retrabalho e divergência | bloquear validação visual final até anexar a referência |
| CMS excessivamente flexível | inconsistência e quebra visual | schemas estruturados e blocos permitidos |
| Nexo inventar informação comercial | dano de confiança | base aprovada, saída estruturada, evals e fallback |
| coleta indevida de dados | risco LGPD e reputacional | minimização, logs sem conteúdo e consentimento antes do encaminhamento |
| custo/abuso do Nexo | indisponibilidade ou gasto inesperado | rate limit, limites de turnos, alertas e kill switch |
| migração perder tráfego | queda de SEO | inventário, redirects, canonical e monitoramento |
| lançamento depender de conteúdo inexistente | páginas vazias | publicação progressiva e estados vazios aprovados |
| dependência de um fornecedor | custo de troca | adapters, exportação de conteúdo e contratos separados |

## 4. Critérios de aprovação do Gate 06

- [ ] stack e fronteiras de responsabilidade aprovadas;
- [ ] CMS e modelo de conteúdo aprovados;
- [ ] arquitetura, limites e privacidade do Nexo aprovados;
- [ ] estratégia de URLs, SEO e localização aprovada;
- [ ] metas de acessibilidade, desempenho e segurança aprovadas;
- [ ] backlog e sequência de implementação aprovados;
- [ ] cada bloqueador P0 possui responsável e próximo passo;
- [ ] itens fora do lançamento permanecem fora do backlog imediato.

## 5. Decisão registrada

As dez decisões D06-01 a D06-10 estão aprovadas. O Bloco 0 do backlog está autorizado. O Gate 05 foi recuperado; a validação visual final requer as imagens canônicas do Gate 04, e a ativação dos serviços externos requer os acessos mínimos.

### Forma de registro

> Gate 06 aprovado. Autorizado o Bloco 0 de prontidão e, após resolução dos bloqueadores P0, o início da implementação na ordem definida no backlog.

Ressalvas devem citar o ID da decisão ou o bloqueador correspondente para manter rastreabilidade.
