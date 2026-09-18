import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./icons";

export function InteriorCta({ title = "Vamos transformar complexidade em um próximo passo claro." }: { title?: string }) {
  return (
    <section className="interior-cta">
      <div>
        <p>Vamos conversar?</p>
        <h2>{title}</h2>
        <Link className="approved-button approved-button--coral" href="/contato">Fale com a CapiSolutions <ArrowUpRight /></Link>
      </div>
      <Image src="/images/nexo-approved.png" alt="Nexo, a capivara robô da CapiSolutions" width={420} height={420} />
    </section>
  );
}
