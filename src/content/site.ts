export const offers = [
  { slug: "solucoes-com-ia", title: "Soluções com IA", description: "Aplicações de inteligência artificial desenhadas a partir do trabalho real — com contexto, limites e utilidade clara.", cta: "Explorar possibilidades" },
  { slug: "automacao-de-processos", title: "Automação de Processos", description: "Menos tarefas repetitivas, menos perda de contexto e mais tempo para o trabalho que exige decisão humana.", cta: "Entender a automação" },
  { slug: "analise-de-dados", title: "Análise de Dados", description: "Dados organizados para revelar padrões, responder perguntas e apoiar decisões com mais segurança.", cta: "Transformar dados em clareza" },
  { slug: "engenharia-de-dados", title: "Engenharia de Dados", description: "Estruturas, integrações e fluxos que tornam a informação confiável, disponível e pronta para uso.", cta: "Estruturar os dados" },
] as const;

export const solutionFronts = [
  { slug: "tecnologia-produto", label: "Frente principal", title: "Tecnologia & Produto", description: "IA, automação, dados, QA, UI/UX e desenvolvimento conectados ao problema.", items: ["Soluções com IA", "Automação", "Análise e Engenharia de Dados", "QA, UI/UX e Web"] },
  { slug: "conteudo-conhecimento", label: "Conteúdo & Conhecimento", title: "Ideias boas merecem encontrar seu público.", description: "Eu transformo temas complexos em conteúdo que dá vontade de ler, ouvir e compartilhar — da escrita às palestras sobre IA.", items: ["Criação de conteúdo", "Escrita criativa", "Palestras sobre IA"] },
  { slug: "linguagem-comunicacao", label: "Linguagem & Comunicação", title: "A mensagem precisa fazer sentido do outro lado.", description: "Tradução e interpretação com atenção ao contexto, ao público e à intenção de quem fala.", items: ["Tradução", "Interpretação", "Comunicação contextual"] },
] as const;

export const solutionPages = {
  "tecnologia-produto": {
    index: "01",
    kicker: "Tecnologia & Produto",
    title: "Da ideia à implementação. Soluções que geram valor real.",
    introduction: "Projetos tecnológicos começam pela compreensão do problema, das pessoas envolvidas e do resultado esperado. A ferramenta entra depois.",
    capabilities: [
      ["Soluções com IA", "Agentes, assistentes e recursos inteligentes desenhados com contexto, limites e utilidade verificável."],
      ["Automação de Processos", "Fluxos repetitivos transformados em processos mais rápidos, rastreáveis e confiáveis."],
      ["Análise de Dados", "Informações organizadas para responder perguntas e apoiar decisões com maior segurança."],
      ["Engenharia de Dados", "Integrações, pipelines e bases preparadas para sustentar produtos e análises."],
    ],
    process: ["Entender o contexto", "Delimitar o problema", "Desenhar a solução", "Construir e testar", "Documentar e evoluir"],
  },
  "conteudo-conhecimento": {
    index: "02",
    kicker: "Conteúdo & Conhecimento",
    title: "Ideias complexas transformadas em conteúdo que aproxima.",
    introduction: "Conteúdo não serve apenas para preencher canais. Ele ajuda pessoas a compreender assuntos, tomar decisões e participar de conversas relevantes.",
    capabilities: [
      ["Conteúdo editorial", "Artigos, análises e roteiros com apuração, estrutura e linguagem adequadas ao público."],
      ["Entrevistas", "Conversas preparadas para revelar experiência, contexto e perspectivas que merecem circular."],
      ["Palestras sobre IA", "Encontros que traduzem mudanças tecnológicas sem hype e conectam conceitos à realidade."],
      ["Curadoria", "Seleção e organização de referências para separar sinal de ruído."],
    ],
    process: ["Definir o público", "Investigar o tema", "Encontrar o recorte", "Produzir e revisar", "Publicar e aprender"],
  },
  "linguagem-comunicacao": {
    index: "03",
    kicker: "Linguagem & Comunicação",
    title: "A mensagem precisa fazer sentido do outro lado.",
    introduction: "A comunicação funciona quando preserva intenção, contexto e nuance — entre idiomas, áreas de conhecimento e pessoas.",
    capabilities: [
      ["Tradução", "Textos adaptados com precisão, naturalidade e atenção ao contexto de uso."],
      ["Interpretação", "Comunicação oral entre idiomas com clareza e respeito ao sentido original."],
      ["Comunicação técnica", "Conceitos complexos apresentados de maneira compreensível, sem perder rigor."],
      ["Revisão e adaptação", "Mensagens refinadas para públicos, formatos e canais diferentes."],
    ],
    process: ["Compreender a intenção", "Mapear o contexto", "Adaptar a linguagem", "Revisar nuances", "Validar com o público"],
  },
} as const;

export type SolutionSlug = keyof typeof solutionPages;
