import type { Metadata } from "next";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

export function pageMetadata({ title, description, path, robots }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "pt_BR",
      siteName: "CapiSolutions",
    },
    twitter: { card: "summary_large_image", title, description },
    robots,
  };
}
