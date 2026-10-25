import { ImageResponse } from "next/og";

export const alt = "CapiSolutions — tecnologia, conteúdo e comunicação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px 84px",
        color: "#f7f7f5",
        background: "radial-gradient(circle at 80% 18%, #26383a 0%, #151515 34%, #0b0b0b 72%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 42, fontWeight: 800, letterSpacing: "-2px" }}>
        <span style={{ color: "#f7f7f5" }}>Capi</span><span style={{ color: "#ff6b57" }}>Solutions</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ color: "#00e5ff", fontSize: 24, fontWeight: 700, letterSpacing: "5px", textTransform: "uppercase" }}>Tecnologia com propósito</div>
        <div style={{ maxWidth: 920, fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: "-4px" }}>Ideias reais. Soluções que funcionam.</div>
        <div style={{ maxWidth: 860, color: "#d6d6d6", fontSize: 28, lineHeight: 1.35 }}>Tecnologia, comunicação e conteúdo para transformar complexidade em resultados claros e humanos.</div>
      </div>
    </div>,
    size,
  );
}
