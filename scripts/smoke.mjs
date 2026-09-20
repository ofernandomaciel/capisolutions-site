import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const port = 3021;
const baseUrl = `http://127.0.0.1:${port}`;
const nextCli = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const server = spawn(process.execPath, [nextCli, "start", "--hostname", "127.0.0.1", "--port", String(port)], {
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
});

let serverOutput = "";
server.stdout.on("data", (chunk) => { serverOutput += chunk; });
server.stderr.on("data", (chunk) => { serverOutput += chunk; });

const waitForServer = async () => {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview server did not become ready.\n${serverOutput}`);
};

const expectStatus = async (route, expectedStatus = 200) => {
  const response = await fetch(`${baseUrl}${route}`);
  if (response.status !== expectedStatus) {
    throw new Error(`${route} returned ${response.status}; expected ${expectedStatus}`);
  }
  return response.text();
};

try {
  await waitForServer();

  const publicRoutes = [
    "/",
    "/solucoes",
    "/solucoes/tecnologia-produto",
    "/solucoes/conteudo-conhecimento",
    "/solucoes/linguagem-comunicacao",
    "/newsroom",
    "/newsroom/artigos",
    "/newsroom/entrevistas",
    "/sobre",
    "/contato",
    "/privacidade",
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const route of publicRoutes) await expectStatus(route);
  await expectStatus("/rota-inexistente", 404);

  const home = await expectStatus("/");
  const forbiddenCopy = [
    "O que realmente muda com a IA generativa",
    "Thanássius Veloso",
    "Transição de carreira: por onde começar?",
    "duas vezes por semana",
  ];
  for (const copy of forbiddenCopy) {
    if (home.includes(copy)) throw new Error(`Home still contains unapproved copy: ${copy}`);
  }

  const sitemap = await expectStatus("/sitemap.xml");
  for (const emptyRoute of ["/newsroom/artigos", "/newsroom/entrevistas"]) {
    if (sitemap.includes(emptyRoute)) throw new Error(`Sitemap includes empty route: ${emptyRoute}`);
  }

  for (const emptyRoute of ["/newsroom/artigos", "/newsroom/entrevistas"]) {
    const page = await expectStatus(emptyRoute);
    if (!/<meta name="robots" content="noindex, follow"/i.test(page)) {
      throw new Error(`${emptyRoute} is missing the expected noindex directive`);
    }
  }

  console.log(`Smoke test passed for ${publicRoutes.length} public routes and the 404 state.`);
} finally {
  server.kill("SIGTERM");
}
