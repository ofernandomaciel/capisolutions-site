# Nomenclatura da frente e do núcleo editorial

**Projeto:** CapiSolutions  
**Sprint:** 01 — Descoberta  
**Status:** aprovado  
**Data:** 04/09/2026

## Questão

Avaliar “BreakingNews” e “Newsroom” como possíveis nomes para a frente atualmente chamada “Conteúdo & Conhecimento”.

## Critérios

- representar criação de conteúdo, escrita criativa e palestras;
- permitir conexão com artigos, análises, radar e entrevistas;
- funcionar em um site inicialmente em português;
- chamar atenção sem prejudicar a compreensão;
- continuar adequado quando a versão em inglês for criada;
- evitar prometer velocidade ou cobertura jornalística que a operação não sustentará.

## Comparação

| Nome | Força | Limitação | Melhor papel |
|---|---|---|---|
| Conteúdo & Conhecimento | Claro, amplo e coerente com as ofertas | Menos distintivo e menos chamativo | Frente de serviços |
| BreakingNews | Urgência, energia e reconhecimento imediato | Restringe a percepção a notícia urgente; grafia recomendada seria “Breaking News” | Formato ou selo de atualização urgente |
| Newsroom | Editorial, contemporâneo e mais abrangente | Sugere redação jornalística; em inglês dentro do lançamento em português | Marca do núcleo editorial |
| Capi Newsroom | Distintivo, associável à marca e adequado a artigos e entrevistas | Ainda exige explicação inicial em português | Marca recomendada para o núcleo editorial |

## Recomendação

Separar arquitetura comercial de arquitetura editorial:

```text
Frente de serviços
Conteúdo & Conhecimento
  ├── Criação de conteúdo
  ├── Escrita criativa
  └── Palestras sobre IA

Núcleo editorial
Capi Newsroom
  ├── Análises
  ├── Radar
  ├── Carreira
  ├── Guias
  └── Entrevistas
```

Na navegação, o rótulo deve continuar sendo **Conteúdo**, por encontrabilidade. Dentro da página, **Capi Newsroom** funciona como assinatura editorial:

> Capi Newsroom  
> Tecnologia, inteligência artificial, dados e as pessoas que estão construindo esse futuro.

## Por que não usar BreakingNews como nome principal

“Breaking News” cria expectativa de cobertura contínua, imediata e jornalística. O projeto editorial também inclui análises duráveis, guias, carreira e entrevistas; esses formatos perderiam coerência sob uma promessa centrada em urgência.

O termo pode ser reservado futuramente para um selo visual ou formato de atualização extraordinária. Mesmo nesse caso, sua frequência, critérios e processo de apuração precisam ser definidos antes do uso.

## Implicações para a versão inglesa

“Capi Newsroom” pode permanecer igual em português e inglês, fortalecendo continuidade de marca. Os rótulos de navegação e categorias serão localizados:

- Conteúdo → Insights ou Content, conforme estratégia editorial futura;
- Análises → Analysis;
- Radar → Radar ou Briefing;
- Carreira → Careers;
- Guias → Guides;
- Entrevistas → Interviews.

As traduções finais serão definidas na fase inglesa; os termos acima não estão aprovados.

## Decisão registrada

Fernando Maciel aprovou **Capi Newsroom** como nome do núcleo editorial e confirmou **Conteúdo & Conhecimento** como nome da frente comercial em 04/09/2026. A navegação continua usando “Conteúdo”.

## Decisão solicitada

Aprovar uma das direções:

Decisão encerrada: **Conteúdo & Conhecimento** é a frente comercial; **Capi Newsroom** é a marca do núcleo editorial.
