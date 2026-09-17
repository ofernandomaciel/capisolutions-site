import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Privacidade", robots: { index: false, follow: true } };
export default function PrivacyPage() { return <PageShell kicker="Privacidade" title="Clareza também sobre os seus dados." description="Esta página será concluída quando as ferramentas e os tratamentos reais do lançamento estiverem configurados."><article className="prose"><p>A fundação atual não envia nem armazena mensagens do Nexo. Analytics, canais de contato, retenção e fornecedores serão descritos aqui antes da publicação.</p><h2>Compromissos de projeto</h2><p>Coletar somente o necessário, explicar a finalidade, proteger o acesso, definir retenção e oferecer um canal para o exercício de direitos.</p><p>Este texto é um estado de implementação e não substitui a política final revisada.</p></article></PageShell>; }
