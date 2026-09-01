export default function Portfolio({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="portfolio" className="lv1" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" className="head-2">
        {data.title}
      </h2>
      <p className="text section-sub">{data.subtitle}</p>
      <ul className="card-grid card-grid--2" role="list">
        {data.projects.map((p: any) => (
          <li key={p.title}>
            <article className="lv2 card">
              <div className="card-tag" style={{ borderColor: p.tagColor, color: p.tagColor }}>
                {p.tag}
              </div>
              <div>
                <h3 className="head-3">{p.title}</h3>
                <p className="text card-subtitle">{p.client}</p>
              </div>
              <p className="text">{p.description}</p>
              <div className="card-result">
                <span className="text card-result-text">Risultato: {p.result}</span>
              </div>
              <div className="card-tags">
                {p.stack.map((s: string) => (
                  <span key={s} className="card-tag-item">{s}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
