export default function Portfolio({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="portfolio" className="lv1" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--spacing-lg)' }}>
        {data.subtitle}
      </p>
      <ul className="services-grid" role="list">
        {data.projects.map((p: any) => (
          <li key={p.title}>
            <article className="lv2 service-card store-card">
              <div className="store-tag" style={{ borderColor: p.tagColor, color: p.tagColor }}>
                {p.tag}
              </div>
              <h3 className="head-3" style={{ marginTop: 'var(--spacing-sm)' }}>
                {p.title}
              </h3>
              <p className="text store-handle">{p.client}</p>
              <p className="text" style={{ marginTop: 'var(--spacing-sm)' }}>{p.description}</p>
              <div className="store-result">
                <span className="text" style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
                  Risultato: {p.result}
                </span>
              </div>
              <div className="store-meta">
                {p.stack.map((s: string) => (
                  <span key={s} className="store-meta-item">{s}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
