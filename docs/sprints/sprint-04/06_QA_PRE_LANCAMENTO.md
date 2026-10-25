# Sprint 04 — QA de pré-lançamento

**Executado em:** 19/10/2026  
**Branch:** `codex/sprint-04-nexo-formulario`  
**Escopo:** preview privado, sem integração à `main`

## Resultado executivo

O site está tecnicamente pronto para a etapa de homologação humana no preview privado. A compilação de produção, o lint, a verificação de tipos e o smoke test foram aprovados. As pendências restantes exigem aparelhos ou navegadores não disponíveis neste ambiente, leitura humana final e decisões de negócio antes do go-live.

## Matriz de QA

| Área | Resultado | Evidência / observação |
| --- | --- | --- |
| Chrome desktop | Aprovado | Navegação, layout, formulário, foco e rotas públicas verificados. |
| Chrome mobile 375 × 812 | Aprovado em emulação | Sem rolagem horizontal; menu, formulário, hierarquia e alvos de toque verificados. |
| Chrome tablet 768 × 1024 | Aprovado em emulação | Layout em duas colunas e espaçamento da seção de soluções corrigidos e verificados. |
| Edge, Firefox e Safari desktop | Pendente | Exige execução manual nos navegadores reais. |
| iPhone/Safari e Android/Chrome reais | Pendente | Emulação não substitui aparelho físico, teclado virtual e áreas seguras. |
| Teclado e foco | Aprovado | Ordem lógica; honeypot fora do fluxo; link de salto; foco visível; alvos móveis com pelo menos 44 px. |
| Leitor de tela | Parcial | Idioma, títulos, rótulos, textos alternativos, região `aria-live` e estado ocupado verificados no DOM. Falta teste falado com NVDA, VoiceOver e TalkBack. |
| Contraste | Aprovado após correção | Coral sobre fundo claro passou de 2,61:1 para 4,65:1; links teal passaram de 3,19:1 para 4,55:1. |
| Formulário | Aprovado | Validação, formato inválido, carga excessiva, honeypot, indisponibilidade SMTP e limite de tentativas cobertos pelo smoke test. |
| Envio real | Aprovado anteriormente | Endpoint do preview respondeu “Mensagem enviada”; a confirmação da chegada desse último e-mail ainda é uma ação humana. |
| Performance de imagens | Aprovado | Seis PNGs, totalizando 23,4 MB, substituídos por WebP totalizando 680 KB (redução aproximada de 97%). |
| SEO técnico | Aprovado | Canonical por página, Open Graph, Twitter Card, imagem social, robots, sitemap e JSON-LD de Organização, Pessoa e Website. |
| Política de Privacidade | Implementada | Controlador, finalidade, provedores, retenção, direitos, segurança e canal de contato definidos. Requer aprovação final do responsável antes do go-live. |

## Testes automatizados aprovados

- lint e TypeScript;
- build de produção com webpack;
- 14 rotas públicas e página 404;
- canonical em todas as páginas HTML;
- Open Graph, Twitter Card, imagem social e dados estruturados;
- exclusão de páginas `noindex` do sitemap;
- formulário: HTTP 400, 413, 415, 429 e 503;
- cabeçalhos básicos de segurança;
- ausência das cópias antigas do chat do Nexo.

## Alterações resultantes da auditoria

- link “Pular para o conteúdo” e destino principal identificável;
- foco visível e ordem de teclado consistente;
- área mínima de toque no menu e nos botões móveis;
- aviso para não enviar senhas, documentos ou dados sensíveis;
- contraste corrigido sem alterar a identidade geral;
- redução do espaço excessivo antes dos cards em tablet;
- metadados sociais e dados estruturados centralizados;
- Política de Privacidade atualizada para a operação real com Vercel e Hostinger;
- build fixado em webpack devido a uma falha do Turbopack no ambiente Windows, sem erro no código do projeto.

## Pendências obrigatórias antes do go-live

1. Homologar em iPhone/Safari e Android/Chrome reais.
2. Homologar em Edge, Firefox e Safari desktop.
3. Fazer uma passagem falada com NVDA, VoiceOver ou TalkBack.
4. Confirmar na caixa de destino a mensagem enviada pelo preview e testar o `Reply-To`.
5. Aprovar formalmente a Política de Privacidade e a rotina operacional de exclusão após 12 meses.
6. Confirmar ou remover os ícones sociais que ainda não possuem links reais.
7. Medir Core Web Vitals após a publicação no domínio final, pois o preview privado exige autenticação e não representa tráfego real.
8. Documentar e ensaiar o rollback para o site legado.

## Critério de liberação

Não integrar à `main` nem publicar no domínio principal enquanto as pendências obrigatórias acima não estiverem registradas como concluídas e houver autorização explícita para o go-live.
