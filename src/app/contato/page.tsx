import type { Metadata } from "next";
import { NexoPreview } from "@/components/nexo-preview";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Contato", description: "Conte seu contexto à CapiSolutions." };
export default function ContactPage() { return <PageShell kicker="Contato" title="Conte seu contexto." description="O Nexo ajudará a organizar sua necessidade e a escolher um canal real para continuar a conversa."><NexoPreview /></PageShell>; }
