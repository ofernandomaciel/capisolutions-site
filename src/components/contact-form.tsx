"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setFeedback("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Não foi possível enviar a mensagem.");

      form.reset();
      setState("success");
      setFeedback("Mensagem enviada. Obrigado por compartilhar seu contexto.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Não foi possível enviar a mensagem.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__heading">
        <p className="eyebrow eyebrow--dark">Formulário de contato</p>
        <h2>Conte um pouco sobre o seu projeto.</h2>
        <p>Os campos marcados com * são obrigatórios.</p>
      </div>

      <div className="contact-form__grid">
        <label>
          <span>Nome *</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label>
          <span>E-mail *</span>
          <input name="email" type="email" autoComplete="email" maxLength={160} required />
        </label>
      </div>

      <label>
        <span>Assunto *</span>
        <input name="subject" type="text" minLength={3} maxLength={140} required />
      </label>

      <label>
        <span>Como podemos ajudar? *</span>
        <textarea name="message" rows={7} minLength={20} maxLength={4000} required />
      </label>

      <label className="contact-form__honeypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="contact-form__consent">
        <input name="consent" type="checkbox" value="accepted" required />
        <span>Concordo com o uso destes dados para responder ao contato, conforme a <Link href="/privacidade">Política de Privacidade</Link>. *</span>
      </label>

      <div className="contact-form__actions">
        <button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Enviando…" : "Enviar mensagem"}
        </button>
        <p className={`contact-form__feedback contact-form__feedback--${state}`} role="status" aria-live="polite">{feedback}</p>
      </div>
    </form>
  );
}
