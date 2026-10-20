# Gate 03 — Registro de decisões

**Projeto:** modernização da CapiSolutions  
**Sprint:** 01 — Descoberta  
**Gate:** 03 — Conteúdo e modelos de página  
**Status:** em andamento  
**Última atualização:** 05/09/2026

## Decisão 01 — Prioridade comercial

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** Tecnologia & Produto deve receber mais atenção e prioridade.

### Aplicação

- aparecer primeiro na apresentação das frentes;
- orientar a mensagem e o CTA comercial primário;
- receber maior profundidade na Home;
- ter preferência na escolha do projeto ou case principal;
- liderar a sequência da página de Soluções;
- orientar a seleção inicial de páginas individuais de serviço.

### Limites

- Conteúdo & Conhecimento e Linguagem & Comunicação continuam como frentes reais;
- as frentes complementares não devem desaparecer da primeira experiência;
- prioridade não significa afirmar que todos os serviços de Tecnologia & Produto têm o mesmo peso;
- a ordem interna entre QA, UI/UX, automações e desenvolvimento web ainda precisa ser definida a partir da oferta e das evidências disponíveis.

## Decisões pendentes

1. Antes do lançamento: endereços, links, disponibilidade e expectativa de resposta dos canais.
2. Escopo detalhado, limites e evidências das quatro ofertas prioritárias.
3. Projetos, clientes, depoimentos, fotografias e credenciais autorizados.

## Decisão 02 — CTA e agente de atendimento

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** o CTA principal inicia uma conversa com um agente preparado para entender e direcionar o cliente.

### Aplicação

- o CTA deve convidar o visitante a explicar seu contexto;
- o agente identifica necessidade, frente e serviço provável;
- a conversa termina com orientação ou próximo passo concreto;
- orçamento ou agendamento podem ser oferecidos quando fizerem sentido, mas não são a primeira ação obrigatória;
- o agente deve poder encaminhar a conversa para atendimento humano.

### Guardrails

- identificar-se claramente como agente automatizado;
- não fingir ser Fernando ou outra pessoa;
- não prometer escopo, prazo, preço ou disponibilidade sem regra aprovada;
- não solicitar dados sensíveis;
- explicar o uso dos dados antes de coletar informações de contato;
- oferecer alternativa humana e fallback em caso de falha.

### Encaminhamento

O fluxo, o conhecimento e o tom pertencem ao Gate 03. Tecnologia, integrações, segurança, armazenamento, observabilidade e escolha de modelo pertencem ao Gate 05.

## Decisão 03 — Idiomas

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** lançar primeiro em português e adicionar posteriormente uma versão em inglês; nenhum outro idioma está previsto.

### Aplicação

- português é o idioma canônico do lançamento;
- inglês constitui uma segunda fase;
- arquitetura de conteúdo, CMS e URLs devem permitir localização futura;
- nenhuma área deve ser publicada em inglês de modo parcial ou inconsistente;
- textos em inglês exigem adaptação e revisão editorial;
- o agente de atendimento começa em português e recebe suporte em inglês na fase posterior.

### Encaminhamento técnico

No Gate 05 serão definidos estratégia de URLs, metadados localizados, `hreflang`, alternância de idioma, fallback e modelo editorial de tradução. A variante de inglês a adotar também será confirmada antes da tradução.

## Hipótese de nomenclatura — BreakingNews e Newsroom

**Status:** em validação  
**Origem:** proposta de Fernando Maciel

Fernando sugeriu “BreakingNews” ou “Newsroom” para substituir “Conteúdo & Conhecimento”. A análise recomenda separar a frente comercial da propriedade editorial:

- **Conteúdo & Conhecimento:** mantém a função de agrupar criação de conteúdo, escrita criativa e palestras;
- **Capi Newsroom:** candidato recomendado para nome do núcleo editorial atualmente chamado provisoriamente de “Capi em Pauta”;
- **Breaking News:** pode nomear um formato ou selo de cobertura urgente, mas não toda a frente nem todo o acervo.

A separação foi aceita parcialmente: **Capi Newsroom está aprovado como nome do núcleo editorial**. O nome definitivo da frente comercial ainda não recebeu aprovação explícita e permanece como “Conteúdo & Conhecimento” durante o Gate 03.

## Decisão 04 — Capi Newsroom

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** o núcleo editorial se chamará **Capi Newsroom**.

### Aplicação

- “Conteúdo” permanece como rótulo da navegação principal;
- “Capi Newsroom” aparece como marca e assinatura dentro do núcleo editorial;
- artigos, análises, radar, carreira, guias e entrevistas integram esse universo;
- Entrevistas conserva sua entrada própria na navegação, conforme o Gate 02;
- o nome pode permanecer igual na futura versão inglesa.

### Pendente

Definir a assinatura verbal final da Capi Newsroom.

## Decisão 05 — Conteúdo & Conhecimento

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** manter **Conteúdo & Conhecimento** como nome da segunda frente comercial.

### Aplicação

- a frente reúne criação de conteúdo, escrita criativa e palestras sobre IA;
- Capi Newsroom permanece separada como núcleo editorial;
- conteúdos editoriais podem demonstrar autoridade e apontar para a frente comercial quando a relação for pertinente;
- a navegação principal continua usando “Conteúdo” para acessar a Capi Newsroom, enquanto a frente é acessada por Soluções.

## Decisão 06 — Dados, IA e Automação

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** Ciência de Dados, IA e Automação devem liderar Tecnologia & Produto, acompanhando a direção profissional de Fernando rumo à Engenharia de Dados e IA.

### Aplicação

- Dados, IA e Automação recebem prioridade na Home e na página de Soluções;
- projetos e conteúdos dessas áreas têm preferência nos destaques iniciais;
- Ciência de Dados, Engenharia de Dados, soluções com IA e automações entram na arquitetura-alvo;
- QA, UI/UX, desenvolvimento web e arquitetura permanecem como competências complementares;
- o agente de atendimento deve reconhecer demandas de dados, IA e automação antes das demais intenções técnicas.

### Regra de credibilidade

A direção futura pode orientar posicionamento e planejamento. A copy pública não deve antecipar título profissional, formação concluída, experiência, cases ou resultados ainda não alcançados. Toda afirmação precisa refletir o estágio real e ser atualizada quando a transição se concretizar.

### Impacto arquitetônico

A decisão gera a **Emenda 01 ao Gate 02**, adicionando Dados e IA dentro de Tecnologia & Produto sem alterar a navegação principal aprovada.

## Decisão 07 — Ordem das ofertas prioritárias

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** as quatro ofertas abaixo são contratáveis e devem aparecer nesta ordem:

1. Soluções com IA;
2. Automação de Processos;
3. Análise de Dados;
4. Engenharia de Dados.

### Aplicação

- esta ordem orienta Home, Soluções, agente e seleção de cases;
- Soluções com IA recebe o primeiro destaque comercial;
- Automação de Processos é a segunda porta de entrada;
- Análise de Dados e Engenharia de Dados são ofertas distintas;
- todas permanecem sujeitas a escopo, limites e evidências verificáveis na copy final.

## Decisão 08 — Encaminhamento multicanal

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** o agente poderá encaminhar o visitante por uma combinação de e-mail, WhatsApp e agenda.

### Aplicação

- e-mail para resumos, materiais, propostas ou continuidade assíncrona;
- WhatsApp para continuidade rápida e autorizada pelo visitante;
- agenda para demandas qualificadas que se beneficiem de uma reunião;
- o agente sugere um próximo passo, mas respeita a preferência do visitante;
- contato humano e formulário mínimo permanecem como fallback.

### Pendências operacionais

- e-mail e linha de WhatsApp específicos, que serão adquiridos posteriormente;
- ferramenta de agenda;
- disponibilidade e regras de agendamento;
- expectativa de resposta por canal;
- consentimento, retenção e registro do encaminhamento.

Essas pendências não bloqueiam o conteúdo estrutural do Gate 03, mas bloqueiam testes de ponta a ponta e publicação.

## Decisão 09 — Contatos reservados para pré-lançamento

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Decisão:** manter e-mail e WhatsApp em aberto até a aquisição de canais específicos para esse propósito.

### Aplicação

- usar placeholders identificados na documentação e nos protótipos;
- não publicar ou testar com contatos pessoais provisórios;
- tratar a configuração dos canais como dependência obrigatória de pré-lançamento;
- permitir substituição por configuração, sem alterar a arquitetura ou a copy principal.

## Decisão 10 — H1 da Home

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar como mensagem principal da Home:

> IA, automação e dados para transformar complexidade em soluções que funcionam.

### Aplicação

- usar como único H1 da página inicial;
- preservar a ordem IA, automação e dados;
- sustentar a promessa com ofertas, projetos e linguagem responsável;
- não substituir a frase por uma promessa genérica de inovação no Gate 04.

## Decisão 11 — Descrição do hero e tom pessoal

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar no hero:

> Eu uso IA, automação e dados para tirar ideias do papel, destravar processos e resolver problemas de verdade — com clareza, responsabilidade e sem complicação desnecessária.

### Aplicação

- priorizar primeira pessoa quando a autoria e a proximidade forem relevantes;
- manter linguagem direta, confiante e contemporânea;
- evitar tom institucional rígido ou excessivamente corporativo;
- preservar precisão, responsabilidade e limites técnicos;
- usar esse trecho como referência tonal para a revisão das demais páginas.

## Decisão 12 — Abertura das três frentes

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar:

> Três frentes. Um jeito só de trabalhar: entender antes de construir.
>
> Nem todo problema cabe numa caixinha. Às vezes ele está no código, nos dados, no processo ou na mensagem. É por isso que meu trabalho cruza tecnologia, conteúdo e comunicação.

### Aplicação

- apresentar a amplitude como integração, não dispersão;
- reforçar “entender antes de construir” como princípio de trabalho;
- sustentar a transição entre Tecnologia & Produto, Conteúdo & Conhecimento e Linguagem & Comunicação.

## Decisão 13 — Abertura das ofertas prioritárias

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar:

> Tecnologia boa resolve problema. O resto é só barulho.
>
> Antes de falar em ferramenta, eu quero entender o que está travando. A partir daí, desenho a solução certa — com IA quando faz sentido, automação quando resolve, análise quando falta clareza e engenharia quando os dados precisam de base.

### Aplicação

- reforçar diagnóstico antes da escolha de tecnologia;
- apresentar as quatro ofertas na ordem aprovada;
- manter postura confiante sem prometer que IA é a resposta para tudo;
- usar “Tecnologia boa resolve problema” como título da seção.

## Decisão 14 — Cards das ofertas prioritárias

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** aprovar a copy dos quatro cards e seus CTAs contextuais.

### Ordem e CTA

1. Soluções com IA — “Quero explorar uma ideia”;
2. Automação de Processos — “Quero destravar um processo”;
3. Análise de Dados — “Quero entender meus dados”;
4. Engenharia de Dados — “Quero organizar meus dados”.

### Aplicação

- cada CTA abre o agente com a intenção e a página de origem preservadas;
- a redação diferencia as quatro ofertas sem criar promessas absolutas;
- os textos devem permanecer curtos e escaneáveis no wireframe.

## Decisão 15 — Abertura de Projetos

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar:

> Resultado não nasce do nada.
>
> Em cada projeto, eu quero mostrar o ponto de partida, as escolhas que fiz e o que mudou no caminho. Sem case enfeitado, número solto ou crédito pelo trabalho dos outros.

### Aplicação

- todo case deve contextualizar problema, restrições, decisões, contribuição e resultado;
- métricas precisam de fonte ou forma de verificação;
- trabalho colaborativo deve receber créditos claros;
- se não houver material suficiente, publicar menos cases em vez de preencher espaço.

## Decisão 16 — Apresentação da Capi Newsroom

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar:

> O futuro da tecnologia não chega com manual de instruções.
>
> Na Capi Newsroom, eu acompanho o que muda em IA, dados e carreira, separo sinal de ruído e converso com quem está construindo esse futuro.

### Aplicação

- apresentar a Capi Newsroom como espaço de curadoria, análise e conversa;
- acomodar análises, Radar, carreira, guias e entrevistas;
- não prometer cobertura jornalística contínua ou imediata;
- manter a voz autoral de Fernando.

## Decisão 17 — Apresentação de Fernando

**Status:** aprovada  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026  
**Decisão:** usar como texto-base:

> Eu sou Fernando Maciel. Gosto de entender como as coisas funcionam — e, principalmente, como elas podem funcionar melhor.
>
> Minha trajetória cruza tecnologia, produto, conteúdo e comunicação. Hoje, concentro meu trabalho em IA, automação e dados, enquanto avanço na minha transição para Engenharia de Dados e IA.

### Aplicação

- apresentar Fernando em primeira pessoa;
- mostrar a trajetória multidisciplinar como força integrada;
- descrever a transição profissional sem antecipar título;
- acrescentar credenciais apenas depois de verificadas.

## Decisão 18 — CTA final e nome do agente

**Status:** estrutura aprovada; nome do agente pendente  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026

**Texto aprovado:**

> Você não precisa chegar com a solução pronta.
>
> Me conta o que você quer construir, melhorar ou destravar. [NOME DO AGENTE] ajuda a organizar o contexto e encontrar o próximo passo — sem formulário interminável.

**CTA aprovado:** Conte seu contexto

### Pendente

“Agente da CapiSolutions” foi considerado genérico. O assistente receberá nome próprio, acompanhado de identificação transparente como assistente virtual da CapiSolutions.

## Direção 19 — Nexo e capivara robô

**Status:** mascote aprovado conceitualmente; nome em revisão por conflito  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026

### Direção criativa

- “Nexo” foi selecionado como nome preferido na etapa criativa;
- o agente pode ser personificado como uma capivara robô;
- o mascote deve ser simpático, tecnológico e brasileiro;
- ele funciona como avatar e personagem do atendimento, não como estética dominante do site.

### Verificação posterior

Uma pesquisa preliminar encontrou serviços de IA e assistentes já chamados Nexo, incluindo uma oferta brasileira de agentes para atendimento e qualificação via WhatsApp. Por atuar no mesmo território, o conflito é relevante.

**Encaminhamento:** não liberar “Nexo” para publicação, domínio, perfil ou registro antes de uma nova rodada de nomes e de busca formal de marca. O conceito de conexão pode ser preservado sem manter necessariamente o nome.

## Decisão 20 — Nexo como nome de trabalho

**Status:** aprovado para uso durante a descoberta  
**Decisor:** Fernando Maciel  
**Data:** 05/09/2026

Manter **Nexo** como nome de trabalho do assistente, representado pela capivara robô. Usar o nome nos textos e estudos da experiência enquanto a escolha definitiva amadurece. O naming permanece em aberto para lançamento; essa pendência não bloqueia o avanço da descoberta.

## Decisão 21 — Lançamento antes dos cases

**Status:** aprovado por Fernando Maciel.

Priorizar a modernização do site, suas funções e a Capi Newsroom. A organização do GitHub precederá a inclusão posterior de cases. Projetos e prova social ficam ocultos no lançamento, com a arquitetura e a copy preservadas para expansão. Cases deixam de ser requisito para conclusão do Gate 03. Entrevistas entram conforme aprovação editorial. O Gate 03 e a direção visual ainda precisam de aprovação consolidada antes da implementação.

## Decisão 22 — Funções do primeiro lançamento

**Status:** aprovado por Fernando Maciel.

Aprovado o recorte de `21_ESCOPO_LANCAMENTO_E_FECHAMENTO_GATE_03.md`: site institucional e serviços, Capi Newsroom com publicação manual, apresentação de Entrevistas e Nexo para qualificação, respostas sobre ofertas, resumo e encaminhamento por links dos canais disponíveis. Envio automático de mensagens, escrita em CRM e criação direta de reuniões ficam para evolução posterior. Cases e GitHub não bloqueiam o lançamento. Esta aprovação cobre o recorte funcional; a revisão consolidada de textos ainda precede o Gate 04.
