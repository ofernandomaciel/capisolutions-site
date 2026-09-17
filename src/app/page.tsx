import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, SparkIcon } from "@/components/icons";
import { NexoPreview } from "@/components/nexo-preview";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { offers, solutionFronts } from "@/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <div className="hero__glow hero__glow--coral" />
          <div className="hero__glow hero__glow--cyan" />
          <div className="shell hero__inner">
            <div className="eyebrow reveal reveal--1"><span className="eyebrow__dot" />Tecnologia · Dados · Comunicação</div>
            <h1 className="display display--hero reveal reveal--2">Ideias complexas.<span>Soluções que fazem sentido.</span></h1>
            <p className="hero__lead reveal reveal--3">Eu conecto tecnologia, comunicação e conteúdo para transformar problemas reais em experiências claras, confiáveis e humanas.</p>
            <div className="hero__actions reveal reveal--4">
              <Link className="button button--primary" href="#nexo">Conte seu contexto <ArrowUpRight /></Link>
              <Link className="button button--ghost" href="#solucoes">Conhecer as soluções <ChevronRight /></Link>
            </div>
            <div className="hero__index reveal reveal--4" aria-label="Áreas principais">
              <span>01 IA & Automação</span><span>02 Dados</span><span>03 Conteúdo</span><span>04 Comunicação</span>
            </div>
          </div>
        </section>

        <section className="section section--ink" id="solucoes">
          <div className="shell">
            <SectionHeading index="01" kicker="Tecnologia & Produto" title="Tecnologia útil começa pelo problema — não pela ferramenta." description="Eu conecto IA, automação e dados para melhorar produtos, decisões e processos. Quando o projeto pede, entram também QA, UI/UX e desenvolvimento." tone="dark" />
            <div className="offer-grid">
              {offers.map((offer, index) => (
                <article className={`offer-card ${index === 0 ? "offer-card--featured" : ""}`} key={offer.slug}>
                  <div className="offer-card__topline"><span>{String(index + 1).padStart(2, "0")}</span><SparkIcon /></div>
                  <h3>{offer.title}</h3><p>{offer.description}</p>
                  <Link href={`/solucoes#${offer.slug}`}>{offer.cta} <ArrowUpRight /></Link>
                </article>
              ))}
            </div>
            <Link className="text-link text-link--light" href="/solucoes">Explorar todas as soluções <ArrowUpRight /></Link>
          </div>
        </section>

        <section className="section section--paper">
          <div className="shell">
            <SectionHeading index="02" kicker="Outras frentes" title="A tecnologia encontra a linguagem." description="Nem todo desafio começa no código. Às vezes, o trabalho é tornar uma ideia compreensível, memorável e capaz de atravessar contextos." />
            <div className="front-grid">
              {solutionFronts.slice(1).map((front, index) => (
                <article className="front-card" key={front.slug}>
                  <span className="front-card__index">0{index + 2}</span><p className="front-card__label">{front.label}</p>
                  <h3>{front.title}</h3><p>{front.description}</p>
                  <ul>{front.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  <Link href={`/solucoes#${front.slug}`}>Explorar esta frente <ArrowUpRight /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--newsroom" id="conteudo">
          <div className="shell">
            <div className="newsroom-brand"><span>Capi</span><strong>Newsroom</strong><span className="newsroom-brand__edition">Edição 00 · Em preparação</span></div>
            <div className="newsroom-layout">
              <article className="newsroom-feature">
                <p className="newsroom-meta">ANÁLISE · AUTOMAÇÃO</p><h2>Nem todo processo precisa de IA.</h2>
                <p>As primeiras publicações estão em preparação. A estreia parte de uma pergunta prática: quando automatizar e quando a inteligência artificial realmente acrescenta valor?</p>
                <span className="newsroom-status">Conteúdo em produção</span>
              </article>
              <aside className="newsroom-manifesto">
                <p className="eyebrow eyebrow--dark">Tecnologia sem ruído</p><h3>O futuro da tecnologia não chega com manual de instruções.</h3>
                <p>Na Capi Newsroom, eu acompanho o que muda em IA, dados e carreira, separo sinal de ruído e converso com quem está construindo esse futuro.</p>
                <Link className="button button--ink" href="/newsroom">Entrar na Newsroom <ArrowUpRight /></Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section--about" id="sobre">
          <div className="shell about-grid">
            <div className="about-image-wrap">
              <span className="about-image-wrap__caption">Fernando Maciel · CapiSolutions</span>
              <Image className="about-image" src="/images/fernando.jpeg" alt="Fernando Maciel" width={1199} height={1600} sizes="(max-width: 760px) 92vw, 42vw" />
            </div>
            <div className="about-copy">
              <SectionHeading index="03" kicker="Sobre" title="Tecnologia, conteúdo e comunicação — conectados por uma mesma curiosidade." description="A CapiSolutions reúne essas frentes em um só lugar. É onde apresento meu trabalho e compartilho o que acompanho e aprendo sobre tecnologia, dados e comunicação." tone="dark" />
              <Link className="text-link text-link--light" href="/sobre">Conhecer a trajetória <ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="section section--nexo" id="nexo">
          <div className="shell">
            <SectionHeading index="04" kicker="Nexo · Assistente virtual" title="Conte o que você quer construir, melhorar ou destravar." description="O Nexo ajuda a organizar sua necessidade e a encontrar o próximo passo. Nesta fundação, a experiência é apenas demonstrativa e não envia dados." />
            <NexoPreview />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
