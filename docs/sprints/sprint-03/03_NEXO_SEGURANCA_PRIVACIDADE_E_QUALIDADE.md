# Gate 06 — Nexo: arquitetura, segurança, privacidade e qualidade

**Estado:** aprovado no Gate 06 em 10/09/2026

## 1. Escopo do lançamento

O Nexo é uma interface conversacional de orientação e qualificação. Ele:

- identifica a necessidade provável;
- responde perguntas sobre ofertas publicadas;
- faz até três perguntas relevantes, uma por vez;
- cria um resumo editável;
- oferece somente canais reais e ativos;
- pede confirmação antes de abrir um canal externo.

Ele não envia mensagens, grava em CRM, cria reuniões, aceita arquivos, fornece orçamento, promete prazo ou executa ações em nome da CapiSolutions.

## 2. Fluxo técnico

```text
mensagem do visitante
  -> validação de tamanho e formato
  -> proteção contra abuso/rate limit
  -> moderação quando aplicável
  -> classificação de intenção
  -> recuperação de trechos aprovados do CMS
  -> chamada server-side à Responses API
  -> validação da resposta estruturada
  -> resposta + fontes internas + próximo passo
  -> resumo editável
  -> confirmação do visitante
  -> abertura de link de canal escolhido
```

## 3. Contrato de resposta

O servidor deve receber saída estruturada com:

- `message`: resposta ao visitante;
- `intent`: uma intenção permitida;
- `confidence`: faixa baixa, média ou alta;
- `followUpQuestion`: zero ou uma pergunta;
- `suggestedRoute`: rota interna opcional;
- `handoffRecommended`: sim/não;
- `summaryFields`: somente informações fornecidas pelo visitante;
- `safetyState`: normal, recusar ou encaminhar.

O cliente nunca interpreta texto livre como comando. Links externos são montados pelo servidor a partir de uma lista permitida, não produzidos pelo modelo.

## 4. Conhecimento

- Fonte primária: registros `nexoKnowledge` publicados e páginas aprovadas do CMS.
- Cada entrada possui versão, responsável, origem e data de revisão.
- A resposta deve admitir quando a base não sustenta uma afirmação.
- Não usar cases, clientes, preços, prazos, idiomas de serviço ou disponibilidade sem registro aprovado.
- No lançamento, preferir recuperação determinística por intenção e tags. Busca vetorial só entra se testes mostrarem ganho real.
- O modelo e o prompt não são fonte de verdade.

## 5. Privacidade por padrão

- Mostrar aviso curto antes da primeira mensagem e link para Privacidade.
- Pedir que o visitante não envie credenciais, dados sensíveis ou segredos comerciais.
- Não exigir nome ou contato para orientar.
- Coletar contato apenas no encaminhamento e mediante confirmação.
- Não persistir conversa completa na infraestrutura da CapiSolutions no lançamento.
- Usar `store: false` na Responses API.
- Não colocar prompt, resposta, resumo, e-mail ou telefone em logs de aplicação/analytics.
- Definir e documentar os tratamentos realizados por provedores antes do lançamento.

O uso de `store: false` reduz estado de aplicação armazenado pela API, mas não substitui a análise contratual e de retenção do provedor. A documentação oficial informa controles e períodos distintos por endpoint; a política pública deve refletir a configuração efetivamente contratada.

## 6. Controles de abuso e segurança

- limite de caracteres por mensagem e de turnos por sessão;
- rate limit por origem com proteção contra bloqueio indevido;
- timeout e cancelamento da chamada;
- limite mensal de custo com alertas;
- moderação de entrada e tratamento seguro de saída;
- proteção contra prompt injection: conteúdo do visitante nunca altera políticas, canais ou fontes permitidas;
- resposta neutra e encaminhamento humano em casos fora de escopo;
- nenhuma ferramenta externa habilitada para o modelo no lançamento;
- chave da API somente no servidor e rotacionável;
- mensagens de erro sem detalhes internos.

## 7. Fallback operacional

| Falha | Comportamento público |
|---|---|
| IA indisponível | explicar indisponibilidade e oferecer canal humano ativo |
| base sem resposta | admitir limite e oferecer página/canal pertinente |
| baixa confiança | fazer uma pergunta curta ou encaminhar |
| abuso | encerrar de forma segura sem revelar regras internas |
| canal externo ausente | não exibir o canal; manter outra alternativa real |

Pelo menos um canal humano real é condição de lançamento.

## 8. Avaliação antes da publicação

Criar conjunto versionado de testes cobrindo:

- cada uma das três frentes;
- as quatro ofertas prioritárias na ordem aprovada;
- pedido direto para falar com Fernando;
- pergunta sem resposta na base;
- tentativa de obter preço, prazo ou garantia;
- dados sensíveis e credenciais;
- prompt injection e pedido para ignorar regras;
- conteúdo abusivo;
- falha de provedor;
- resumo fiel, editável e sem inferências inventadas;
- escolha entre e-mail, WhatsApp e agenda conforme canais ativos;
- acessibilidade por teclado e leitor de tela.

### Métricas de aceite

- zero invenção em fatos comerciais no conjunto crítico;
- zero ação externa sem confirmação;
- 100% dos casos sem resposta admitem incerteza ou encaminham;
- resumo não adiciona dado pessoal não fornecido;
- nenhum dado pessoal aparece em logs de teste/produção;
- comportamento de fallback passa em teste ponta a ponta.

Taxas de classificação e satisfação serão observadas depois do lançamento, sem relaxar os critérios críticos acima.

## 9. Pendências obrigatórias

- conta/projeto de API e orçamento mensal;
- modelo exato após teste de qualidade, latência e custo;
- texto final do aviso de privacidade;
- canal humano, endereço/link e expectativa de resposta;
- responsável por revisar base e falhas;
- decisão formal sobre analytics e retenção;
- teste com conteúdo real aprovado.

## 10. Evoluções fora do lançamento

- persistência de histórico entre sessões;
- anexos;
- CRM;
- envio automático de e-mail ou WhatsApp;
- criação de eventos;
- base vetorial, se necessária;
- versão em inglês;
- painel operacional avançado.

Cada evolução exige revisão de ameaça, privacidade, consentimento, custo e capacidade de fallback.
