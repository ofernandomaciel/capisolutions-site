import Link from "next/link";
export default function NotFound() { return <main className="page-hero" style={{ minHeight: "100svh" }}><div className="shell"><p className="eyebrow">Erro 404</p><h1>Esta rota saiu do mapa.</h1><p>O conteúdo pode ter mudado de endereço ou ainda não ter sido publicado.</p><Link className="button button--primary" href="/">Voltar ao início</Link></div></main>; }
