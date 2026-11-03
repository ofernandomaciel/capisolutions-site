import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const port = 3021;
const baseUrl = `http://127.0.0.1:${port}`;
const nextCli = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const serverEnv = { ...process.env };
for (const key of ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"]) {
  serverEnv[key] = "";
}
const server = spawn(process.execPath, [nextCli, "dev", "--webpack", "--hostname", "127.0.0.1", "--port", String(port)], {
  env: { ...serverEnv, HOSTNAME: "127.0.0.1", PORT: String(port) },
  stdio: ["pipe", "pipe", "pipe"],
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
    "/em-construcao",
    "/opengraph-image",
    "/robots.txt",
    "/sitemap.xml",
  ];

  for (const route of publicRoutes) await expectStatus(route);
  await expectStatus("/rota-inexistente", 404);

  const home = await expectStatus("/");
  const maintenance = await expectStatus("/em-construcao");
  if (!maintenance.includes("Voltamos em breve")) throw new Error("Maintenance page copy is missing");
  if (!maintenance.includes('content="noindex, nofollow, noarchive"')) throw new Error("Maintenance page must be noindex");
  for (const contactUrl of [
    "https://www.instagram.com/ofernandomaciel/",
    "https://www.linkedin.com/in/ofernandomaciel/",
    "https://github.com/ofernandomaciel",
    "https://wa.me/5548991880399",
  ]) {
    if (!maintenance.includes(contactUrl)) throw new Error(`Maintenance page is missing contact link: ${contactUrl}`);
  }
  const forbiddenCopy = [
    "O que realmente muda com a IA generativa",
    "Thanássius Veloso",
    "Transição de carreira: por onde começar?",
    "duas vezes por semana",
    "Fale com o Nexo",
    "O Nexo entende sua demanda",
    "assistente virtual da CapiSolutions",
  ];
  for (const copy of forbiddenCopy) {
    if (home.includes(copy)) throw new Error(`Home still contains unapproved copy: ${copy}`);
  }

  for (const socialUrl of [
    "https://www.instagram.com/ofernandomaciel/",
    "https://www.linkedin.com/in/ofernandomaciel/",
    "https://github.com/ofernandomaciel",
  ]) {
    if (!home.includes(socialUrl)) throw new Error(`Home is missing social profile: ${socialUrl}`);
  }

  const sitemap = await expectStatus("/sitemap.xml");
  for (const includedRoute of ["/newsroom/artigos", "/newsroom/entrevistas"]) {
    if (!sitemap.includes(includedRoute)) throw new Error(`Sitemap is missing route: ${includedRoute}`);
  }
  for (const excludedRoute of ["/privacidade"]) {
    if (sitemap.includes(excludedRoute)) throw new Error(`Sitemap includes excluded route: ${excludedRoute}`);
  }

  const contact = await expectStatus("/contato");
  if (!contact.includes("Formulário de contato")) throw new Error("Contact page is missing the email form");
  if (!contact.includes("Não envie senhas, documentos ou dados sensíveis")) throw new Error("Contact page is missing the sensitive-data warning");

  const htmlRoutes = publicRoutes.filter((route) => !route.endsWith(".txt") && !route.endsWith(".xml") && route !== "/opengraph-image");
  for (const route of htmlRoutes) {
    const page = await expectStatus(route);
    const canonical = route === "/" || route === "/em-construcao"
      ? "https://capisolutions.com"
      : `https://capisolutions.com${route}`;
    if (!page.includes(`rel="canonical" href="${canonical}"`)) throw new Error(`${route} is missing canonical ${canonical}`);
  }

  if (!home.includes("application/ld+json")) throw new Error("Home is missing structured data");
  if (!home.includes("property=\"og:image\"") || !home.includes("name=\"twitter:card\"")) throw new Error("Home is missing social metadata");

  const privacy = await expectStatus("/privacidade");
  for (const requiredCopy of ["Fernando Maciel", "12 meses", "Vercel", "Hostinger"]) {
    if (!privacy.includes(requiredCopy)) throw new Error(`Privacy page is missing: ${requiredCopy}`);
  }
  if (privacy.includes("Documento operacional provisório")) throw new Error("Privacy page still contains provisional copy");

  const unsupportedContact = await fetch(`${baseUrl}/api/contact`, { method: "POST", headers: { "Content-Type": "text/plain" }, body: "{}" });
  if (unsupportedContact.status !== 415) throw new Error(`Unsupported contact content returned ${unsupportedContact.status}; expected 415`);

  const oversizedContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "x".repeat(21_000) }),
  });
  if (oversizedContact.status !== 413) throw new Error(`Oversized contact returned ${oversizedContact.status}; expected 413`);

  const invalidContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "A", email: "invalid", subject: "Oi", message: "curta" }),
  });
  if (invalidContact.status !== 400) throw new Error(`Invalid contact payload returned ${invalidContact.status}; expected 400`);

  const honeypotContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ website: "https://spam.example" }),
  });
  if (honeypotContact.status !== 201) throw new Error(`Honeypot contact returned ${honeypotContact.status}; expected 201`);

  const unconfiguredContact = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Pessoa de Teste",
      email: "teste@example.com",
      subject: "Projeto de teste",
      message: "Esta mensagem válida confirma o comportamento sem credenciais SMTP.",
      consent: "accepted",
    }),
  });
  if (unconfiguredContact.status !== 503) throw new Error(`Unconfigured contact returned ${unconfiguredContact.status}; expected 503`);

  const headers = await fetch(baseUrl);
  if (headers.headers.get("x-content-type-options") !== "nosniff") throw new Error("Security headers are missing");

  const rateLimitStatuses = [];
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "A" }),
    });
    rateLimitStatuses.push(response.status);
  }
  if (rateLimitStatuses.at(-1) !== 429) throw new Error(`Rate limit did not activate: ${rateLimitStatuses.join(", ")}`);

  console.log(`Smoke test passed for ${publicRoutes.length} public routes, metadata, privacy, contact states, security headers and the 404 state.`);
} finally {
  server.kill("SIGTERM");
}
