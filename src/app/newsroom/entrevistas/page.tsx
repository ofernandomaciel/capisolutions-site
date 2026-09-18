import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Entrevistas — Capi Newsroom", description: "Projeto de entrevistas da Capi Newsroom." };

export default function InterviewsPage() {
  return <PageShell kicker="Newsroom · Entrevistas" title="Conversas com quem está construindo o futuro." description="A casa das entrevistas já está preparada. Convidados, pautas e episódios entram depois do go-live, com consentimento e revisão."><section className="editorial-empty editorial-empty--cyan"><span>00</span><h2>Nenhuma conversa publicada ainda.</h2><p>Cada entrevista terá apresentação do convidado, contexto, conversa completa, destaques, referências e conteúdos relacionados.</p><Link className="text-link" href="/newsroom">Voltar para a Newsroom <ArrowUpRight /></Link></section></PageShell>;
}
