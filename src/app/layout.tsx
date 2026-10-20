import type { Metadata } from "next";
import "@fontsource/archivo-black";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://capisolutions.com"),
  title: {
    default: "CapiSolutions — Tecnologia, conteúdo e comunicação",
    template: "%s | CapiSolutions",
  },
  description:
    "Tecnologia, comunicação e conteúdo para transformar ideias complexas em soluções claras, confiáveis e humanas.",
  openGraph: {
    title: "CapiSolutions",
    description:
      "Tecnologia, comunicação e conteúdo para transformar ideias complexas em soluções claras, confiáveis e humanas.",
    type: "website",
    locale: "pt_BR",
    siteName: "CapiSolutions",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
