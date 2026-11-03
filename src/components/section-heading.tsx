type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ index, kicker, title, description, tone = "light" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${tone === "dark" ? "section-heading--dark" : ""}`}>
      <span className="section-heading__index">{index}</span>
      <div>
        <p className="section-heading__kicker">{kicker}</p>
        <h2>{title}</h2>
        <p className="section-heading__description">{description}</p>
      </div>
    </div>
  );
}
