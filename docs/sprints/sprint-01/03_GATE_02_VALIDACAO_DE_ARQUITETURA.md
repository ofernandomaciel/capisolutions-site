# Gate 02 — Validação de arquitetura

**Projeto:** CapiSolutions  
**Sprint:** 01 — Descoberta  
**Status:** aprovado  
**Data:** 04/09/2026

**Aprovação registrada:** Gate 02 aprovado por Fernando Maciel em 04/09/2026, sem ressalvas.

## Resultado executivo

O Sitemap v1 e a arquitetura da Home atendem ao posicionamento aprovado no Gate 01. A estrutura acomoda os quatro papéis do site — serviços, portfólio, autoridade e núcleo editorial — sem transformar a navegação em um catálogo de competências.

A recomendação é aprovar o Gate 02 com três regras:

1. manter as sete áreas principais;
2. tratar a árvore completa como arquitetura-alvo, com publicação progressiva das páginas individuais de serviço;
3. manter “Entrevistas” no primeiro nível e “Capi em Pauta” apenas como nome editorial em avaliação, nunca como rótulo necessário para entender a navegação.

## Escopo validado

- navegação principal;
- hierarquia de Soluções;
- páginas de índice e detalhe;
- relação entre Projetos, Soluções, Conteúdo e Entrevistas;
- sequência narrativa da Home;
- estados com pouco conteúdo no lançamento;
- comportamento esperado em desktop e mobile;
- limites entre arquitetura, conteúdo, visual e implementação.

## Validação pelas jornadas prioritárias

### Jornada 1 — Empresa procurando apoio técnico

**Entrada provável:** Home, página de serviço ou case vindo de busca/indicação.  
**Necessidade:** entender capacidade, experiência e forma de contato.  
**Caminho esperado:**

```text
Home → Tecnologia & Produto → serviço ou projeto relacionado → Contato
```

**Resultado:** atendido. A arquitetura permite acesso pela frente, pelo problema ou pela evidência. O CTA de contato permanece disponível sem obrigar o visitante a percorrer toda a árvore.

### Jornada 2 — Gestor interessado em IA, automação ou palestra

**Entrada provável:** conteúdo compartilhado, LinkedIn ou Home.  
**Necessidade:** reconhecer autoridade e descobrir uma oferta relacionada.  
**Caminho esperado:**

```text
Conteúdo → artigo → solução relacionada → Contato
```

ou

```text
Home → Conteúdo & Conhecimento → Palestras sobre IA → Contato
```

**Resultado:** atendido. O modelo exige ligações contextuais entre conteúdo e solução, evitando que o núcleo editorial fique isolado da atuação profissional.

### Jornada 3 — Pessoa em transição ou iniciante em tecnologia

**Entrada provável:** Instagram, busca ou compartilhamento.  
**Necessidade:** encontrar conteúdo acessível e continuar explorando por tema.  
**Caminho esperado:**

```text
Artigo → categoria ou conteúdo relacionado → índice de Conteúdo
```

**Resultado:** atendido. As categorias iniciais permitem orientação sem exigir uma taxonomia complexa no lançamento.

### Jornada 4 — Profissional convidado ou leitor de entrevistas

**Entrada provável:** link direto compartilhado.  
**Necessidade:** entender o projeto editorial, ler a entrevista e conhecer outras conversas.  
**Caminho esperado:**

```text
Entrevista → índice de Entrevistas → outra entrevista ou Sobre
```

**Resultado:** atendido. A presença de Entrevistas no primeiro nível comunica que o projeto é uma propriedade editorial da marca.

### Jornada 5 — Parceiro, organizador ou imprensa

**Entrada provável:** Home, Sobre ou busca pelo nome de Fernando.  
**Necessidade:** validar trajetória, temas e canal de contato.  
**Caminho esperado:**

```text
Sobre → projetos/conteúdos relacionados → Contato
```

**Resultado:** atendido, desde que o Gate 03 forneça biografia curta, credenciais verificáveis e temas de atuação.

## Teste de encontrabilidade

| Objetivo do visitante | Destino esperado | Acesso pela navegação | Acesso contextual |
|---|---|---:|---:|
| Conhecer todas as ofertas | Soluções | Sim | Home e rodapé |
| Encontrar QA, UI/UX ou automação | Tecnologia & Produto | Sim, em dois passos | Home, cases e conteúdos |
| Contratar palestra sobre IA | Conteúdo & Conhecimento | Sim, em dois passos | Artigos e Sobre |
| Ver trabalhos realizados | Projetos | Sim, em um passo | Home e páginas de solução |
| Ler análises ou guias | Conteúdo | Sim, em um passo | Home e conteúdos relacionados |
| Ler entrevistas | Entrevistas | Sim, em um passo | Home e conteúdos relacionados |
| Conhecer Fernando | Sobre | Sim, em um passo | Home, artigos e entrevistas |
| Iniciar uma conversa | Contato | CTA persistente | Serviços, cases, Sobre e CTA final |

Nenhuma necessidade prioritária exige mais de dois níveis de navegação a partir do cabeçalho.

## Validação da navegação principal

### Desktop

```text
[Logo]  Soluções  Projetos  Conteúdo  Entrevistas  Sobre  [Conversar]
```

- seis escolhas operacionais, contando o CTA;
- Contato é representado pelo CTA “Conversar”;
- o logotipo substitui “Início”;
- Soluções pode abrir um menu simples com as três frentes, sem expor todos os serviços no primeiro nível.

### Mobile

```text
Início
Soluções
  Tecnologia & Produto
  Conteúdo & Conhecimento
  Linguagem & Comunicação
Projetos
Conteúdo
Entrevistas
Sobre
Contato
```

- todos os destinos permanecem acessíveis sem hover;
- os serviços individuais aparecem dentro das páginas de frente, não precisam ocupar o primeiro menu móvel;
- o CTA principal pode aparecer no menu e no cabeçalho, desde que não haja duplicação confusa.

## Validação do modelo de conteúdo

### Tipos permanentes

| Tipo | Campos estruturais mínimos | Relações principais |
|---|---|---|
| Frente de solução | nome, promessa, problemas, serviços, processo, evidências, CTA | serviços, projetos, conteúdos |
| Serviço | nome, público, problema, escopo, processo, entregáveis, limites, evidências, CTA | frente, projetos, conteúdos |
| Projeto/case | título, contexto, desafio, atuação, resultado, artefatos autorizados | soluções e conteúdos |
| Artigo | título, resumo, corpo, autor, datas, categoria, fontes, imagem social | temas, soluções, outros conteúdos |
| Entrevista | convidado, apresentação, conversa editada, destaques, datas, aprovação | temas, outros conteúdos |
| Pessoa/perfil | nome, biografia, fotografia, credenciais, links | artigos, entrevistas e projetos |

### Taxonomias iniciais

- **Categorias editoriais:** Análises, Radar, Carreira e Guias.
- **Tipo editorial separado:** Entrevista.
- **Temas:** conjunto controlado a ser definido com o acervo real no Gate 03; não criar dezenas de tags antecipadamente.
- **Soluções relacionadas:** relação editorial entre serviço, projeto e conteúdo.

O modelo é suficiente para selecionar um CMS no Gate 05 sem amarrar a arquitetura a uma tecnologia específica.

## Conteúdo mínimo recomendado para lançamento

| Área | Mínimo publicável | Alternativa segura |
|---|---|---|
| Soluções | três páginas de frente completas | serviços descritos dentro das frentes |
| Serviços individuais | somente ofertas com conteúdo e evidência | rota planejada, mas não publicada |
| Projetos | um case consistente | projetos próprios ou experiência em foco, sem clientes inventados |
| Conteúdo | três a cinco peças úteis | índice editorial enxuto e curado |
| Entrevistas | uma entrevista aprovada | página de apresentação do projeto, sem prometer data não confirmada |
| Sobre | biografia, trajetória e fotografia autorizada | versão curta com credenciais essenciais |
| Prova social | ao menos um material autorizado | incorporar evidências aos projetos; omitir seção vazia |
| Contato | canal claro e aviso de privacidade | e-mail e formulário mínimo |

## Riscos arquitetônicos e tratamento

### Amplitude parecer dispersão

**Tratamento:** três frentes, mensagens orientadas a problemas e prioridade visual/comercial definida no Gate 03.

### Muitas páginas rasas

**Tratamento:** arquitetura-alvo completa, publicação progressiva e exigência de conteúdo mínimo para cada serviço.

### Área editorial competir com serviços

**Tratamento:** relacionar conteúdo a soluções sem transformar toda publicação em peça comercial; manter CTAs contextuais e discretos.

### Entrevistas fragmentarem o núcleo editorial

**Tratamento:** índice e template próprios, mas taxonomia, busca e recomendações compartilhadas com Conteúdo.

### Home longa em dispositivos móveis

**Tratamento:** síntese por frente, curadoria de poucos destaques, conteúdo progressivo e ausência de carrosséis obrigatórios.

### Falta de cases ou depoimentos autorizados

**Tratamento:** não fabricar prova social; usar projetos próprios e experiência verificável ou omitir o bloco até existir material suficiente.

## Decisão proposta para o Gate 02

### Aprovar

1. Navegação principal: Soluções, Projetos, Conteúdo, Entrevistas, Sobre e CTA de Contato.
2. Três frentes como segundo nível de Soluções.
3. Páginas individuais de serviço como arquitetura-alvo, publicadas progressivamente.
4. Índices e páginas de detalhe para Projetos, Conteúdo e Entrevistas.
5. Entrevistas como área de primeiro nível e tipo editorial próprio.
6. Sequência da Home:
   - Hero;
   - três frentes;
   - problemas e serviços;
   - projetos e resultados;
   - núcleo editorial;
   - Fernando;
   - prova social;
   - CTA final.
7. Estados alternativos para lançamento com pouco conteúdo.
8. Arquitetura preparada para acessibilidade, SEO e responsividade.

### Levar ao Gate 03

- tagline e mensagens finais;
- prioridade comercial entre as frentes;
- conteúdo e escopo de cada oferta;
- seleção de cases, artigos, entrevistas e provas sociais;
- CTA final e modelo de contato;
- idiomas;
- validação dos nomes “Conteúdo & Conhecimento” e “Capi em Pauta”.

### Levar aos Gates 04 e 05

- wireframes e direção visual;
- comportamento visual da navegação;
- componentes e interações;
- CMS, stack, busca, analytics e fluxo técnico;
- migração, redirects e plano de publicação.

## Critério de conclusão

O Gate 02 pode ser encerrado quando a seção “Aprovar” acima for aceita sem ressalvas, ou quando eventuais ressalvas forem incorporadas aos três documentos de arquitetura. Até lá, nenhum wireframe ou código deve ser tratado como aprovado.
