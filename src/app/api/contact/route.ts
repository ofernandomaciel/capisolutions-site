import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function singleLine(value: unknown, maxLength: number) {
  return text(value, maxLength).replace(/[\r\n]+/g, " ");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character] || character);
}

function clientAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

function isRateLimited(address: string) {
  const now = Date.now();
  const current = attempts.get(address);

  if (!current || current.resetAt <= now) {
    attempts.set(address, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ message: "A mensagem excede o tamanho permitido." }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Formato de envio inválido." }, { status: 415 });
  }

  const address = clientAddress(request);
  if (isRateLimited(address)) {
    return NextResponse.json({ message: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    const rawPayload = await request.text();
    if (new TextEncoder().encode(rawPayload).length > MAX_REQUEST_BYTES) {
      return NextResponse.json({ message: "A mensagem excede o tamanho permitido." }, { status: 413 });
    }
    payload = JSON.parse(rawPayload) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Não foi possível ler os dados enviados." }, { status: 400 });
  }

  const name = singleLine(payload.name, 100);
  const email = singleLine(payload.email, 160).toLowerCase();
  const subject = singleLine(payload.subject, 140);
  const message = text(payload.message, 4000);
  const website = text(payload.website, 200);

  if (website) return NextResponse.json({ message: "Mensagem enviada." }, { status: 201 });

  if (name.length < 2 || !isEmail(email) || subject.length < 3 || message.length < 20 || payload.consent !== "accepted") {
    return NextResponse.json({ message: "Revise os campos obrigatórios e tente novamente." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || "contato@capisolutions.com";
  const from = process.env.CONTACT_FROM_EMAIL || smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !from) {
    return NextResponse.json({ message: "O envio está temporariamente indisponível. Tente novamente mais tarde." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user: smtpUser, pass: smtpPass },
  });

  try {
    await transporter.sendMail({
      from: { name: "CapiSolutions", address: from },
      to,
      replyTo: { name, address: email },
      subject: `[Site CapiSolutions] ${subject}`,
      text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
      html: `<h2>Novo contato pelo site</h2><p><strong>Nome:</strong> ${escapeHtml(name)}</p><p><strong>E-mail:</strong> ${escapeHtml(email)}</p><p><strong>Assunto:</strong> ${escapeHtml(subject)}</p><p><strong>Mensagem:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
  } catch {
    return NextResponse.json({ message: "Não foi possível enviar agora. Tente novamente mais tarde." }, { status: 502 });
  }

  return NextResponse.json({ message: "Mensagem enviada." }, { status: 201 });
}
