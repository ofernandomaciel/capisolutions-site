# CapiSolutions — nova experiência digital

Fundação da nova CapiSolutions em Next.js, criada na Sprint 03 após a aprovação dos Gates 04, 05 e 06.

## Stack

- Next.js 16 com App Router;
- React 19 e TypeScript;
- Tailwind CSS 4 no pipeline de build;
- ESLint;
- Sanity e Vercel planejados para os próximos blocos.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Verificações

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Ou execute tudo com `pnpm check`.

## Estado atual

- fundação visual e rotas institucionais;
- Home responsiva;
- Newsroom em estado editorial inicial;
- Nexo como personagem principal da identidade, sem chat, API ou armazenamento;
- formulário de contato com envio SMTP pelo servidor;
- nenhuma integração externa ou publicação de produção.

## Formulário de contato

Copie `.env.example` para `.env.local` e configure as credenciais SMTP. O formulário permanece visível sem essas variáveis, mas o servidor responde com indisponibilidade temporária e não tenta enviar mensagens.

Variáveis necessárias:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` e `SMTP_AUTH`;
- `SMTP_USER` e `SMTP_PASS`;
- `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL`.

Credenciais nunca devem ser versionadas ou expostas ao navegador.

## Teste local com Docker

O ambiente Docker executa o site e o Mailpit, que captura e-mails localmente sem entregá-los a destinatários externos:

```bash
docker compose up --build
```

- site: `http://localhost:3000`;
- caixa de e-mail local: `http://localhost:8025`.

Com os containers em execução, valide o envio completo com:

```bash
pnpm test:email:docker
```

O arquivo `compose.yaml` desativa autenticação apenas na rede Docker local. Em preview e produção, mantenha `SMTP_AUTH=true` e use uma credencial exclusiva configurada no ambiente de hospedagem.

O site anterior foi preservado em `legacy/` e também pela tag Git `legacy-2026-09-10`.

## Documentação e decisões

Os Gates, registros das sprints, referências visuais e auditorias estão versionados em [`docs/`](docs/README.md). Essa pasta é a fonte canônica do projeto; cópias externas e caches são apenas referências de origem.
