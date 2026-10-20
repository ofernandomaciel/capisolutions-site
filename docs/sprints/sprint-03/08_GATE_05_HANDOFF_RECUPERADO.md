# Gate 05 — Handoff recuperado da Sprint 02

**Origem:** tarefa “Sprint 02 — Experiência Visual e Nexo”  
**Recuperado em:** 10/09/2026  
**Estado na origem:** Gate 05 formalmente aprovado

## 1. Decisões vinculantes recuperadas

- Next.js com App Router como base da aplicação;
- Sanity como CMS e fonte editorial única do Capi Newsroom;
- Vercel como hospedagem inicial;
- Sanity Studio separado conceitualmente do site público;
- Home como núcleo institucional em one-page scrolling;
- conteúdos institucionais curtos em modal/drawer;
- Sobre com experiência de modal/drawer e rota acessível `/sobre`;
- soluções profundas, Newsroom, artigos e entrevistas com rotas próprias;
- navegação interna sem forçar nova aba;
- Home alimentada pelo Sanity, com curadoria manual e fallback automático;
- Nexo como camada própria da aplicação, separado do CMS;
- dados pessoais do Nexo fora do dataset editorial público;
- nenhuma capacidade, preço, prazo, envio ou disponibilidade inventados;
- português no lançamento e arquitetura preparada para inglês;
- nenhuma implementação antes do fechamento dos gates.

## 2. Gate 04 herdado

Princípio visual: **Editorial. Tecnológica. Humana.**

### Sequência da Home

Hero → Tecnologia & Produto → Conteúdo & Conhecimento + Linguagem & Comunicação → Capi Newsroom → Sobre → Nexo/Contato → Footer.

### Hierarquia comercial

Tecnologia & Produto lidera. A ordem das ofertas permanece:

1. Soluções com IA;
2. Automação de Processos;
3. Análise de Dados;
4. Engenharia de Dados.

### Direção visual

- preto: base institucional e tecnológica;
- off-white: conteúdo e leitura;
- coral: identidade, destaque e ação principal;
- ciano: tecnologia, informação e interação;
- regra: **coral chama; ciano informa**;
- Archivo Black como referência para títulos e números;
- Open Sans como referência para corpo e interface, com validação técnica antes da fixação;
- fotografia real, editorial e de alto contraste;
- microinterações discretas e respeito a `prefers-reduced-motion`;
- mobile recomposto, não apenas reduzido.

### Nexo visual e funcional

- capivara robô simpática, expressiva e reconhecível;
- cinco estados: Neutro → Ouvindo → Pensando → Organizando → Pronto;
- fluxo: Entrada → Entendimento → Perguntas complementares → Resumo revisável → Escolha do canal → Encaminhamento;
- Nexo é interface de orientação, não mascote decorativo.

## 3. Modelo Editorial Capi Newsroom v1

O modelo foi validado com três pilotos: notícia/análise, artigo aprofundado e entrevista.

### Tipos principais

- Artigo;
- Entrevista;
- Autor;
- Convidado;
- Categoria;
- Tag;
- Fonte/Referência;
- Configurações do Newsroom.

### Categorias aprovadas no Gate 05

- Inteligência Artificial;
- Dados;
- Tecnologia;
- Carreira;
- Negócios & Inovação.

“Entrevista” é tipo editorial, não categoria. Tags descrevem assuntos específicos.

### Campos e comportamentos acrescentados pelos pilotos

- formato editorial;
- data de última atualização;
- conteúdo estruturado, sem HTML arbitrário;
- citações em destaque reutilizáveis;
- formato e data da entrevista;
- tratamento editorial da entrevista;
- perguntas, respostas e follow-ups;
- workflow de revisão e aprovação do convidado;
- fontes estruturadas;
- destaque principal, secundários e entrevista em destaque;
- curadoria da Home sem deploy;
- status editoriais distintos para artigos e entrevistas.

### Regra de destaque

O desenho de trabalho considera um conteúdo principal e conteúdos recentes/secundários. A configuração exata deve permanecer administrável no CMS, com fallback automático quando nenhum destaque manual estiver definido.

## 4. Especificação Funcional do Nexo v1

O Nexo mantém estado estruturado separado do texto conversacional.

### Princípio adaptativo

Contexto → interpretação → lacunas → próxima melhor pergunta.

Não usa questionário rígido e não repete o que já foi informado. Inferências permanecem hipóteses até confirmação.

### Capacidades

- compreender, orientar, qualificar, organizar, encaminhar e informar;
- reconhecer nove intenções principais;
- associar competências dinamicamente;
- registrar sinais transversais relevantes;
- manter estados Exploratório, Parcial, Suficiente e Pronto para encaminhamento;
- admitir múltiplas demandas e mudanças de intenção;
- detectar contradições e pedir confirmação;
- oferecer contato humano a qualquer momento;
- consultar apenas conhecimento público autorizado.

### Encaminhamento

O briefing estruturado é o produto do Nexo, não a transcrição.

Estados de encaminhamento: Preparado → Acionado → Confirmado. O Nexo só afirma uma ação quando possui confirmação técnica.

No lançamento:

- WhatsApp com mensagem preparada;
- e-mail com fluxo controlado;
- link de agenda;
- canais ausentes não aparecem;
- sem CRM ou autonomia operacional excessiva.

## 5. Relação com o Gate 06

O Gate 06 transforma essas decisões funcionais em contratos técnicos, segurança, persistência, APIs, testes, observabilidade e backlog. Quando houver conflito com documentos antigos da Sprint 01, estas decisões posteriores do Gate 05 prevalecem.

