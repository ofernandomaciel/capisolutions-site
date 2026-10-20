# Primeiro lançamento — escopo e fechamento do Gate 03

## Decisão vigente

Modernizar o site e colocar serviços, notícias e atendimento em funcionamento. GitHub, cases e depoimentos entram em uma evolução posterior. Esta decisão substitui requisitos anteriores de case mínimo para lançamento e fechamento do Gate 03.

O Gate 03 permanece em revisão consolidada. Este documento não autoriza implementação nem declara a direção visual aprovada.

## Páginas do primeiro lançamento

| Área | Conteúdo e comportamento |
|---|---|
| Home | Hero, três frentes, quatro ofertas, Newsroom, Fernando e CTA; textos aprovados preservados |
| Soluções | Hub e três frentes; prioridade IA, automação, análise e engenharia de dados |
| Serviços individuais | Publicação progressiva; inicialmente podem ser blocos nas páginas de frente |
| Capi Newsroom | Índice, categorias e página de artigo; curadoria manual de destaques |
| Entrevistas | Apresentação do projeto; entrevistas individuais somente após aprovação do entrevistado |
| Sobre | Apresentação pessoal aprovada; sem exigir currículo extenso ou credenciais adicionais |
| Contato | Nexo e encaminhamento pelos canais disponíveis |
| Privacidade | Conteúdo ajustado às ferramentas efetivamente escolhidas no planejamento técnico |

Menu de lançamento: Soluções · Conteúdo · Entrevistas · Sobre · Conversar. O logotipo leva à Home; Início também aparece no menu móvel.

Projetos, links para cases, logotipos de clientes e depoimentos não são exibidos no primeiro lançamento. Sua inclusão futura preserva a arquitetura aprovada no Gate 02.

## Nexo — recorte funcional proposto para a primeira versão

1. Apresentar-se como assistente virtual, usando o nome de trabalho Nexo e a capivara robô.
2. Receber o contexto do visitante e a origem do CTA.
3. Reconhecer a oferta provável e fazer perguntas curtas de esclarecimento.
4. Responder sobre serviços com base no conteúdo aprovado.
5. Apresentar um resumo editável da necessidade.
6. Oferecer canais configurados para continuar, respeitando a escolha do visitante.

Recomendação de implementação inicial: links para WhatsApp, e-mail e agenda, com confirmação do visitante. Envio autônomo de mensagens, escrita em CRM e criação direta de eventos ficam como evolução, sujeitos ao planejamento técnico. A disponibilidade do agente depende de integração real e testes; uma interface demonstrativa não equivale a atendimento funcional.

Se o agente estiver indisponível, mostrar um canal humano ativo. Pelo menos um destino real de contato deve estar configurado antes da publicação; os demais podem ser ativados depois. E-mail e linha específica de WhatsApp continuam pendentes de aquisição.

## Newsroom — recorte funcional proposto

- Criar, revisar e publicar artigos pelo CMS.
- Título, resumo, corpo, autoria, datas, categoria, fontes e imagem opcional.
- Categorias: Análises, Radar, Carreira e Guias; Entrevistas com modelo próprio.
- Seleção manual dos destaques da Home.
- Compartilhamento por link e ligação com os perfis sociais confirmados.
- Publicação editorial manual, conforme o handoff.

Recomendação: estrear com uma peça editorial completa e revisada, ampliando o acervo depois. Sem entrevista pronta, mostrar apenas a apresentação do projeto. Evitar cards vazios, notícias fictícias e links para conteúdo ainda inexistente. Busca avançada, distribuição automática e filtros complexos podem esperar volume real.

## Texto complementar proposto para Entrevistas

> Boas perguntas abrem boas conversas.
>
> Aqui, vou conversar com profissionais de tecnologia sobre escolhas, aprendizados e o trabalho por trás das novidades. As entrevistas serão publicadas depois da revisão e aprovação de quem participou.

Estado sem entrevista publicada: “As primeiras conversas estão em preparação.” Sem datas ou convidados anunciados sem confirmação específica.

## O que já está aprovado

Posicionamento, prioridade e ordem das ofertas, três frentes, nome Capi Newsroom, português seguido de inglês, atendimento multicanal, nome de trabalho Nexo, conceito da capivara robô, H1 e descrição do hero, aberturas das frentes e ofertas, quatro cards, apresentação da Newsroom, biografia curta e CTA final.

## Revisão consolidada necessária

- Textos restantes da Home: descrições das três frentes, rótulos secundários e microtextos.
- Modelos internos descritos em `06_MODELOS_DE_PAGINA_V1.md`, com a exceção de cases adiados.
- Recorte funcional do Nexo e da Newsroom proposto acima.
- Texto de apresentação de Entrevistas e definição do primeiro conteúdo editorial.

Depois dessa revisão, registrar a aprovação consolidada do Gate 03 e avançar ao Gate 04: wireframe da Home, direção visual e estudos da capivara robô. Continuamos na Sprint 01 e neste chat.

## Dependências posteriores

Gate 04: arquivos de marca e foto autorizada, quando disponíveis; alternativas visuais serão definidas no desenho.

Gate 05: acesso ao site atual, hospedagem e código; CMS; integração real do agente; custos; canais ativos; privacidade; testes e publicação. A estimativa anterior de 5–7 semanas é apenas uma referência histórica e deve ser recalculada conforme este escopo, as integrações e os acessos disponíveis.
