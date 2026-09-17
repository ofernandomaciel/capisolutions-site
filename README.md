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
- Nexo apenas como demonstração local, sem API e sem armazenamento;
- nenhuma integração externa ou publicação de produção.

O site anterior foi preservado em `legacy/` e também pela tag Git `legacy-2026-09-10`.
