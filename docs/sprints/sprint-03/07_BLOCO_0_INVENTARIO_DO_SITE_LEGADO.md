# Bloco 0 — Inventário do site legado

**Data do levantamento:** 10/09/2026  
**Local:** `E:\00.Projetos\site-capisolutions`  
**Tratamento:** somente leitura durante o levantamento

## 1. Conclusão

A pasta contém o código completo do site atualmente versionado, não uma implementação da nova arquitetura. O repositório está limpo, na branch `main`, alinhado com `origin/main` no commit `7633583`.

O mesmo repositório pode receber a nova implementação, desde que o estado legado seja preservado por tag e a construção ocorra em uma branch própria antes de qualquer substituição da `main`.

## 2. Repositório

| Item | Resultado |
|---|---|
| Repositório Git | encontrado |
| Branch atual | `main` |
| Estado | limpo; sem alterações locais |
| Remoto | `https://github.com/ofernandomaciel/capisolutions-site.git` |
| Último commit | `7633583` — “Organiza imagens em assets/images e adiciona README” |
| Histórico inicial | seis commits, todos de 22/05/2026 |

## 3. Estrutura encontrada

```text
site-capisolutions/
├── index.html
├── send_mail.php
├── README.md
└── assets/
    └── images/
        ├── logo.png
        ├── avatar-waving.png
        ├── avatar-thinking.png
        ├── avatar-pointing.png
        └── WhatsApp Image 2026-05-20 at 18.11.52.jpeg
```

Não foram encontrados pacote do Gate 05, aplicação Next.js, gerenciador de dependências, testes, CMS, configuração de CI/CD ou arquivos de ambiente.

## 4. Stack legada

- HTML único com navegação por âncoras;
- Tailwind CSS carregado por CDN;
- JavaScript inserido no próprio HTML;
- Google Fonts/Inter carregada externamente;
- PHP com `mail()` para o formulário;
- indicação textual de hospedagem na Hostinger;
- e-mail e link de WhatsApp inseridos diretamente no HTML.

A hospedagem Hostinger é uma inferência baseada nas mensagens do código e no uso de PHP; acesso, plano e DNS ainda precisam de confirmação operacional.

## 5. Assets

| Arquivo | Dimensões | Tamanho aproximado | Observação |
|---|---:|---:|---|
| `logo.png` | 1024 × 1024 | 1,35 MB | candidato a reaproveitamento, sujeito ao Gate 05 |
| `avatar-waving.png` | 1792 × 2392 | 6,44 MB | pesado para entrega direta na web |
| `avatar-thinking.png` | 1792 × 2392 | 5,80 MB | pesado para entrega direta na web |
| `avatar-pointing.png` | 1792 × 2392 | 5,81 MB | pesado para entrega direta na web |
| foto JPEG | 1199 × 1600 | 179 KB | identidade, autorização e finalidade a confirmar |

Os arquivos devem ser preservados como fonte, mas gerar variantes otimizadas para o novo site. Direitos de uso, autoria, versão correta do logo e aderência à direção visual aprovada continuam pendentes.

## 6. Achados técnicos relevantes

### Preservar como referência

- domínio e repositório existentes;
- logo e imagens como inventário de assets;
- base escura e acento ciano como referência histórica, não como decisão nova;
- conteúdo legado para o mapa de migração;
- e-mail e WhatsApp como candidatos a validação.

### Não migrar diretamente

- Tailwind via CDN;
- JavaScript inline;
- envio por `mail()` sem proteção contra automação/abuso;
- formulário sem aviso de privacidade associado;
- imagens originais de vários megabytes servidas diretamente;
- conteúdo antigo que conflita com o posicionamento e a copy aprovados;
- mensagem de sucesso antes de uma verificação operacional completa do canal.

### Defeitos observados

- não há descrição SEO, Open Graph, canonical, sitemap ou dados estruturados no código encontrado;
- não há menu móvel dedicado;
- há uma expressão de fallback de imagem com aspas inválidas no atributo `onerror`;
- o formulário depende de PHP/Hostinger e não possui rate limit, honeypot ou proteção equivalente no código;
- contatos estão codificados diretamente e precisam ser confirmados antes da reutilização;
- não há política de privacidade publicada no conjunto de arquivos.

## 7. Estratégia recomendada para o repositório

1. Confirmar que este continuará sendo o repositório oficial.
2. Atualizar a cópia local com o remoto antes de qualquer mudança.
3. Preservar o commit atual com a tag `legacy-2026-09-10` — concluído em 10/09/2026.
4. Construir na branch `codex/sprint-03-implementacao`, criada a partir da `main` em 10/09/2026.
5. Construir a nova aplicação nessa branch.
6. Manter o site público atual inalterado até o aceite do candidato de produção.
7. Integrar à `main` somente depois dos testes e do plano de rollback.

As operações de preservação e criação da branch foram executadas após autorização explícita. Nenhum arquivo do site foi alterado e nada foi publicado.

## 8. Estado dos itens do Bloco 0

| Item | Estado | Próximo passo |
|---|---|---|
| repositório | localizado e reutilização aprovada | resolvido |
| código legado | inventariado e preservado pela tag `legacy-2026-09-10` | resolvido |
| domínio | identificado como `capisolutions.com` | confirmar registrador e controle de DNS |
| hospedagem | Hostinger indicada no código | confirmar plano e acesso |
| Gate 05 | decisões recuperadas da tarefa da Sprint 02 | resolvido em `08_GATE_05_HANDOFF_RECUPERADO.md` |
| assets | encontrados | confirmar versão, direitos e aderência ao Gate 05 |
| e-mail | candidato encontrado | testar e aprovar para uso público |
| WhatsApp | candidato encontrado | testar e aprovar para uso público |
| CMS/Sanity | não configurado | criar após confirmação de conta/custo |
| Vercel | não configurada | criar projeto após branch inicial |
| privacidade | não encontrada | definir responsável e texto final |
