# Matriz de encaminhamento do agente

**Projeto:** CapiSolutions  
**Sprint:** 01 — Descoberta  
**Status:** proposta operacional para o Gate 03  
**Data:** 04/09/2026

## Princípio

O agente recomenda o próximo canal com base no contexto e permite que o visitante escolha. Nenhum contato, mensagem ou agendamento é realizado sem confirmação explícita.

## Matriz

| Situação | Canal recomendado | Informação mínima | Resultado esperado |
|---|---|---|---|
| Dúvida simples ou exploração | Permanecer no agente | intenção | orientação ou conteúdo relevante |
| Material, briefing ou registro detalhado | E-mail | nome, e-mail, resumo e consentimento | continuidade assíncrona documentada |
| Continuidade rápida | WhatsApp | nome, número ou abertura do link, resumo e consentimento | conversa humana contextualizada |
| Demanda comercial qualificada | Agenda | nome, e-mail, objetivo e contexto mínimo | reunião com pauta definida |
| Pedido de proposta | E-mail; agenda se necessário | escopo inicial, prazo e contato | avaliação antes de compromisso comercial |
| Imprensa, convite ou parceria | E-mail | organização, objetivo, data e contato | encaminhamento ao responsável |
| Agente não compreendeu | Contato humano ou formulário | transcrição/resumo autorizado | recuperação sem repetir toda a conversa |
| Agente indisponível | Formulário, e-mail ou WhatsApp | escolha do visitante | canal alternativo funcional |

## Regras por canal

### E-mail

- melhor para contexto detalhado, anexos futuros e registro;
- assunto e resumo podem ser preparados pelo agente;
- envio só ocorre após revisão e confirmação;
- expectativa de resposta deve ser exibida.

### WhatsApp

- melhor para continuidade curta e rápida;
- não deve ser apresentado como canal de urgência sem compromisso operacional;
- o visitante escolhe abrir o WhatsApp ou autorizar encaminhamento;
- mensagem inicial pode levar um resumo aprovado;
- dados sensíveis e credenciais não devem ser solicitados.

### Agenda

- melhor quando existe objetivo claro para uma conversa síncrona;
- horários só podem ser apresentados a partir de disponibilidade real;
- reunião deve ter duração, fuso e política de alteração visíveis;
- o convite recebe resumo e objetivo;
- o agendamento precisa de confirmação final.

## Lógica proposta

```text
Demanda compreendida?
├── Não → esclarecer uma vez → contato humano/formulário
└── Sim
    ├── precisa apenas de orientação → resposta no agente
    ├── precisa de registro/material → e-mail
    ├── precisa de continuidade rápida → WhatsApp
    └── precisa de conversa síncrona e está qualificada → agenda
```

## Qualificação mínima para agenda

- objetivo da reunião;
- frente ou problema provável;
- estágio atual;
- resultado esperado;
- prazo, se relevante;
- pessoa e forma de contato;
- concordância com o resumo.

Não é necessário exigir orçamento antes da reunião, salvo decisão comercial posterior.

## Confirmação

Antes de qualquer encaminhamento, o agente mostra:

1. resumo do entendimento;
2. canal recomendado;
3. dados que serão compartilhados;
4. destinatário ou sistema, quando definido;
5. ação que ocorrerá após a confirmação.

## Pendências

- e-mail público e endereço de destino interno — a adquirir;
- número ou link do WhatsApp — linha específica a adquirir;
- ferramenta e link da agenda;
- duração e disponibilidade de reuniões;
- tempo de resposta esperado por canal;
- responsável humano;
- retenção e exclusão de conversas;
- integrações que serão avaliadas no Gate 05.

E-mail e WhatsApp não bloqueiam a aprovação estrutural do Gate 03. São dependências obrigatórias para integração, testes de ponta a ponta e lançamento.

## Critérios de aprovação

- [ ] cada canal possui função clara;
- [ ] o visitante conserva escolha e controle;
- [ ] agenda exige contexto mínimo;
- [ ] nenhuma ação externa ocorre sem confirmação;
- [ ] existe fallback humano;
- [ ] o resumo evita repetição;
- [ ] privacidade e expectativa de resposta são transparentes.
