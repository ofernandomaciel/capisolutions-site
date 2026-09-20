import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const technologyCards = [
  ["01", "Soluções com IA", "Aplicações práticas de inteligência artificial para automatizar, analisar e criar novas oportunidades.", "✺"],
  ["02", "Automação de Processos", "Menos trabalho manual, mais eficiência e foco no que importa.", "⚙"],
  ["03", "Análise de Dados", "Dados que revelam oportunidades e orientam decisões mais seguras.", "↗"],
  ["04", "Engenharia de Dados", "Bases sólidas para escalar soluções e sustentar o futuro.", "▱"],
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="approved-home">
        <section className="approved-hero" id="inicio">
          <div className="shell approved-hero__grid">
            <div className="approved-hero__copy">
              <p className="approved-kicker"><span>Tecnologia</span> com propósito</p>
              <h1>Ideias reais.<br /><span>Soluções que</span><br /><em>funcionam.</em></h1>
              <p className="approved-hero__lead">Tecnologia, comunicação e conteúdo para transformar complexidade em resultados claros, confiáveis e humanos.</p>
              <div className="approved-actions">
                <Link className="approved-button approved-button--coral" href="#solucoes">Conheça as soluções <ArrowUpRight /></Link>
                <Link className="approved-button approved-button--cyan" href="#nexo">Fale com o Nexo</Link>
              </div>
            </div>
            <div className="approved-hero__portrait" aria-hidden="true">
              <Image src="/images/fernando-hero-approved.png" alt="" fill priority sizes="(max-width: 760px) 56vw, 45vw" />
              <blockquote>“Transformar complexidade em soluções possíveis é o que me move.”<cite>— Fernando Maciel</cite></blockquote>
              <p className="approved-hero__stack"><span />Tecnologia<br />Conteúdo<br />Comunicação<br />Pessoas</p>
            </div>
          </div>
        </section>

        <section className="approved-section approved-section--paper" id="solucoes">
          <div className="shell">
            <div className="approved-section-title">
              <span className="approved-number">01</span>
              <div><p>Tecnologia &amp; Produto</p><h2>Da ideia à implementação.<br />Soluções que geram valor real.</h2></div>
              <p className="approved-section-title__support">Inteligência, automação, dados e arquitetura para resolver problemas de forma prática, eficiente e escalável.</p>
            </div>
            <div className="technology-grid">
              {technologyCards.map(([number, title, description, icon], index) => (
                <article className={`technology-card technology-card--${index + 1}`} key={title}>
                  <div className="technology-card__top"><span>{number}</span><b>{icon}</b></div>
                  <div><h3>{title}</h3><p>{description}</p><Link href="/solucoes">Saiba mais <ArrowUpRight /></Link></div>
                </article>
              ))}
            </div>

            <div className="approved-section-title approved-section-title--compact">
              <span className="approved-number">02</span>
              <div><p>Outras formas de transformar complexidade</p></div>
            </div>
            <div className="secondary-grid">
              <article><span className="secondary-grid__icon">▣</span><div><h3>Conteúdo &amp; Conhecimento</h3><p>Artigos, análises, entrevistas e conteúdos para aprender, compartilhar e construir juntos.</p><Link href="/solucoes#conteudo-conhecimento">Saiba mais <ArrowUpRight /></Link></div></article>
              <article><span className="secondary-grid__icon">▢</span><div><h3>Linguagem &amp; Comunicação</h3><p>Tradução, interpretação e comunicação clara para conectar pessoas e oportunidades.</p><Link href="/solucoes#linguagem-comunicacao">Saiba mais <ArrowUpRight /></Link></div></article>
            </div>
          </div>
        </section>

        <section className="approved-section approved-section--paper newsroom-strip" id="conteudo">
          <div className="shell">
            <div className="approved-section-title newsroom-heading">
              <span className="approved-number">03</span>
              <div><p>Capi Newsroom</p><h2>Histórias, ideias e conversas oportunas.</h2><span>Tecnologia, IA, dados e as pessoas que estão construindo esse futuro.</span></div>
              <Link href="/newsroom">Conhecer a Newsroom <ArrowUpRight /></Link>
            </div>
            <div className="newsroom-empty-state">
              <span>00</span>
              <div><p>Edição de lançamento</p><h3>As primeiras publicações estão em preparação.</h3><p>Artigos, entrevistas e curadorias serão apresentados somente depois da revisão editorial.</p></div>
              <Link href="/newsroom">Ver a estrutura editorial <ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="approved-section approved-section--paper about-strip" id="sobre">
          <div className="shell about-strip__grid">
            <div className="approved-section-title">
              <span className="approved-number">04</span>
              <div><p>Sobre</p><h2>Uma trajetória multidisciplinar com propósito.</h2><p className="about-strip__text">Sou Fernando Maciel. Atuo na interseção entre tecnologia, comunicação e conteúdo. Hoje, estou em transição para Engenharia de Dados e IA, sempre com o mesmo objetivo: transformar complexidade em soluções claras e humanas.</p><Link href="/sobre">Conheça minha história <ArrowUpRight /></Link></div>
            </div>
            <Image src="/images/fernando-hero-approved.png" alt="Fernando Maciel" width={900} height={900} sizes="240px" />
            <blockquote>“Tecnologia só faz sentido quando aproxima pessoas.”</blockquote>
          </div>
        </section>

        <section className="nexo-band" id="nexo">
          <div className="shell nexo-band__grid">
            <span className="approved-number">05</span>
            <div><p>Vamos conversar?</p><h2>Conte ao Nexo o que você precisa.</h2><span>O Nexo entende sua demanda, organiza um resumo e encaminha pelos canais disponíveis.</span></div>
            <Link className="approved-button approved-button--coral" href="/contato">Falar com o Nexo <ArrowUpRight /></Link>
            <div className="nexo-band__character"><Image src="/images/nexo-approved.png" alt="Nexo, a capivara robô da CapiSolutions" fill sizes="340px" /><b>Oi!<br />Eu sou<br />o Nexo!</b></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
