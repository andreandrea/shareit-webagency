export default function Pricing({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="prezzi" className="lv1" aria-labelledby="prezzi-title">
      <h2 id="prezzi-title" className="head-2">
        {data.title}
      </h2>
      <p className="text section-sub">{data.subtitle}</p>
      <div className="card-grid">
        {data.plans.map((plan: any) => {
          // I piani a preventivo non hanno un importo: mostriamo il testo così com'è
          const isAmount = /^[\d.,]+$/.test(String(plan.price))

          return (
            <div
              key={plan.name}
              className={`lv2 card pricing-card${plan.highlight ? ' pricing-card--highlight' : ''}`}
            >
              {plan.highlight && (
                <div className="pricing-badge">Più richiesto</div>
              )}
              <div>
                <h3 className="head-3 pricing-name">{plan.name}</h3>
                <p className="text card-subtitle">{plan.tagline}</p>
              </div>
              <div className="pricing-price">
                <span className={`pricing-amount${isAmount ? '' : ' pricing-amount--text'}`}>
                  {isAmount ? `${plan.price}€` : plan.price}
                </span>
                <span className="pricing-period">{plan.priceNote}</span>
              </div>
              <ul className="card-list">
                {plan.features.map((f: string) => (
                  <li key={f} className="text card-list-item">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className={`btn pricing-cta${plan.highlight ? '' : ' btn--ghost'}`}
                id={plan.ctaId}
              >
                {plan.cta}
              </a>
            </div>
          )
        })}
      </div>
      <p className="text section-note">{data.footnote}</p>
    </section>
  )
}
