export default function Servizi({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="servizi" className="lv1" aria-labelledby="servizi-title">
      <h2 id="servizi-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto var(--spacing-lg)' }}>
        {data.subtitle}
      </p>
      <ul className="services-grid" role="list">
        {data.services.map((s: any) => (
          <li key={s.number}>
            <article className="lv2 service-card store-card">
              <div className="step-header">
                <span className="step-number">{s.number}</span>
              </div>
              <h3 className="head-3">{s.title}</h3>
              <p className="text">{s.description}</p>
              <ul className="pricing-features" role="list" style={{ marginTop: 'var(--spacing-sm)' }}>
                {s.bullets.map((b: string) => (
                  <li key={b} className="text pricing-feature-item">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
