export default function About({ data }: { data: any }) {
  if (!data) return null;

  // Nell'intro il nome dell'agenzia e in grassetto Markdown
  const introMarkup = {
    __html: data.intro.replace(/\*\*(.*?)\*\*/g, '<strong class="link-accent">$1</strong>'),
  }

  return (
    <section id="chi-siamo" className="lv1" aria-labelledby="chi-siamo-title">
      <h2 id="chi-siamo-title" className="head-2">
        {data.title}
      </h2>

      <p className="text about-intro" dangerouslySetInnerHTML={introMarkup} />

      <ul className="about-manifesto" role="list">
        {data.points.map((p: any) => (
          <li key={p.label} className="about-row">
            <h3 className="head-3 about-label">{p.label}</h3>
            <p className="text">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
