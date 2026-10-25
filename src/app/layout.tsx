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
  alternates: { canonical: "/" },
  openGraph: {
    title: "CapiSolutions",
    description:
      "Tecnologia, comunicação e conteúdo para transformar ideias complexas em soluções claras, confiáveis e humanas.",
    type: "website",
    locale: "pt_BR",
    siteName: "CapiSolutions",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapiSolutions — Tecnologia, conteúdo e comunicação",
    description: "Tecnologia, comunicação e conteúdo para transformar ideias complexas em soluções claras, confiáveis e humanas.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://capisolutions.com/#organization",
      name: "CapiSolutions",
      url: "https://capisolutions.com",
      email: "mailto:contato@capisolutions.com",
      founder: { "@id": "https://capisolutions.com/#fernando-maciel" },
    },
    {
      "@type": "Person",
      "@id": "https://capisolutions.com/#fernando-maciel",
      name: "Fernando Maciel",
      url: "https://capisolutions.com/sobre",
      worksFor: { "@id": "https://capisolutions.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://capisolutions.com/#website",
      name: "CapiSolutions",
      url: "https://capisolutions.com",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://capisolutions.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
