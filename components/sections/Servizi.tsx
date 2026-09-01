export default function Servizi({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="servizi" className="lv1" aria-labelledby="servizi-title">
      <h2 id="servizi-title" className="head-2">
        {data.title}
      </h2>
      <p className="text section-sub">{data.subtitle}</p>
      <ul className="card-grid" role="list">
        {data.services.map((s: any) => (
          <li key={s.number}>
            <article className={`lv2 card${s.thinking ? ' card--thinking' : ''}`}>
              <div className="step-header">
                <span className="step-number">{s.number}</span>
              </div>
              <h3 className="head-3">{s.title}</h3>
              <p className="text">{s.description}</p>
              <ul className="card-list" role="list">
                {s.bullets.map((b: string) => (
                  <li key={b} className="text card-list-item">
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
