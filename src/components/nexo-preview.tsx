"use client";

import Image from "next/image";
import { useState } from "react";

const choices = [
  { label: "Automatizar um processo", reply: "Quero entender um processo repetitivo que hoje toma tempo da equipe." },
  { label: "Explorar uma ideia com IA", reply: "Tenho uma ideia com IA, mas ainda não sei qual caminho faz sentido." },
  { label: "Criar ou melhorar um site", reply: "Quero melhorar a experiência e o posicionamento do meu site." },
];

export function NexoPreview() {
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="nexo-demo">
      <div className="nexo-demo__character">
        <span className="nexo-demo__badge">Estado · Ouvindo</span>
        <Image src="/images/avatar-waving.png" alt="Nexo, a capivara robô da CapiSolutions" width={1792} height={2392} sizes="(max-width: 860px) 100vw, 40vw" />
      </div>
      <div className="nexo-demo__chat">
        <div className="nexo-demo__header">
          <strong>Nexo</strong>
          <span>Demonstração local</span>
        </div>
        <div className="nexo-demo__messages" aria-live="polite">
          <div className="message message--nexo">Oi! Sou o Nexo, assistente virtual da CapiSolutions. Me conta o que você quer construir, melhorar ou destravar.</div>
          {message && <div className="message message--visitor">{message}</div>}
          {message && <div className="message message--nexo">Entendi. Nesta etapa eu ainda não processo sua resposta, mas a interface já está preparada para organizar o contexto sem transformar a conversa em formulário.</div>}
        </div>
        <div className="nexo-demo__choices" aria-label="Exemplos de início de conversa">
          {choices.map((choice) => <button type="button" key={choice.label} onClick={() => setMessage(choice.reply)}>{choice.label}</button>)}
        </div>
        <p className="nexo-demo__note">Demonstração visual: nenhuma mensagem é enviada ou armazenada.</p>
      </div>
    </div>
  );
}
