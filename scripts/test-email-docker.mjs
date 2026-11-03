const siteUrl = process.env.DOCKER_SITE_URL || "http://127.0.0.1:3000";
const mailpitUrl = process.env.MAILPIT_URL || "http://127.0.0.1:8025";
const marker = `Validação Docker ${Date.now()}`;

const response = await fetch(`${siteUrl}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Teste Docker",
    email: "teste@example.com",
    subject: marker,
    message: "Esta mensagem confirma o envio completo do formulário para o SMTP local do Mailpit.",
    consent: "accepted",
  }),
});

if (response.status !== 201) {
  throw new Error(`Contact endpoint returned ${response.status}: ${await response.text()}`);
}

let delivered;
for (let attempt = 0; attempt < 10; attempt += 1) {
  const mailbox = await fetch(`${mailpitUrl}/api/v1/messages`);
  if (!mailbox.ok) throw new Error(`Mailpit API returned ${mailbox.status}`);
  const result = await mailbox.json();
  delivered = result.messages?.find((message) => message.Subject === `[Site CapiSolutions] ${marker}`);
  if (delivered) break;
  await new Promise((resolve) => setTimeout(resolve, 250));
}

if (!delivered) throw new Error("Mailpit did not receive the contact message");

const recipient = delivered.To?.[0]?.Address;
if (recipient !== "contato@capisolutions.com") {
  throw new Error(`Unexpected recipient: ${recipient || "missing"}`);
}

console.log(`Docker email test passed: ${delivered.Subject} -> ${recipient}`);
