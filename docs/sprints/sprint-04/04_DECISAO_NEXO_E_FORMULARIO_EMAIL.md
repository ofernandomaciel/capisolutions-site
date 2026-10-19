# Sprint 04 — Decisão: Nexo personagem e formulário por e-mail

**Data:** 19/10/2026  
**Estado:** aprovado para implementação  
**Aprovador:** Fernando Maciel

## Decisão

O chat do Nexo deixa de fazer parte do escopo do site. O Nexo permanece como personagem principal da identidade visual da CapiSolutions, sem se apresentar como assistente virtual e sem compreender, processar ou armazenar mensagens.

O contato passa a ser feito por um formulário que encaminha a mensagem diretamente para o e-mail da CapiSolutions.

## Consequências sobre decisões anteriores

Esta decisão substitui, para o lançamento atual, o escopo de Nexo conversacional descrito nos Gates 05 e 06 e nos documentos anteriores. Permanecem válidos o conceito visual, a personalidade, as imagens e o papel do Nexo como elemento de proximidade da marca.

Ficam fora do escopo:

- chat e histórico de conversa;
- integração com modelos de IA;
- qualificação automática de demandas;
- resumo conversacional;
- encaminhamento autônomo para canais;
- CRM, agenda e automações do Nexo.

## Escopo aprovado do formulário

- nome;
- e-mail;
- assunto;
- mensagem;
- consentimento para uso dos dados na resposta ao contato;
- envio no servidor por SMTP;
- credenciais somente em variáveis de ambiente;
- validação no cliente e no servidor;
- campo invisível antispam;
- limite básico de tentativas;
- mensagens acessíveis de sucesso e erro.

## Critérios de aceite

- nenhuma página apresenta o Nexo como chat ou assistente funcional;
- nenhum texto afirma que o Nexo entende ou processa a demanda;
- o formulário funciona com o provedor SMTP configurado;
- falhas de configuração ou envio não expõem detalhes internos;
- a Política de Privacidade descreve os dados e a finalidade do formulário;
- o Nexo permanece visualmente destacado como personagem da marca.
