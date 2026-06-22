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
        {data.stores.map((ex: any) => (
          <li key={ex.artist}>
            <article className="lv2 service-card store-card">
              <div className="store-tag" style={{ borderColor: ex.tagColor, color: ex.tagColor }}>
                {ex.tag}
              </div>
              <h3 className="head-3" style={{ marginTop: 'var(--spacing-sm)' }}>
                {ex.artist}
              </h3>
              <p className="text store-handle">{ex.handle}</p>
              <p className="text" style={{ marginTop: 'var(--spacing-sm)' }}>{ex.description}</p>
              <div className="store-result">
                <span className="store-result-icon">✅</span>
                <span className="text" style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
                  {ex.result}
                </span>
              </div>
              <div className="store-meta">
                <span className="store-meta-item">🖼️ {ex.works} opere</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
