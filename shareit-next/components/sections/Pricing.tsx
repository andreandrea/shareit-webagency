export default function Pricing({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="prezzi" className="lv1" aria-labelledby="prezzi-title">
      <h2 id="prezzi-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto var(--spacing-lg)' }}>
        {data.subtitle}
      </p>
      <div className="pricing-grid">
        {data.plans.map((plan: any) => {
          // I piani a preventivo non hanno un importo: mostriamo il testo così com'è
          const isAmount = /^[\d.,]+$/.test(String(plan.price))

          return (
            <div
              key={plan.name}
              className={`lv2 pricing-card${plan.highlight ? ' pricing-card--highlight' : ''}`}
            >
              {plan.highlight && (
                <div className="pricing-badge">Più richiesto</div>
              )}
              <div className="pricing-header">
                <h3 className="head-3" style={{ margin: 0 }}>{plan.name}</h3>
                <p className="text" style={{ opacity: 0.7, fontSize: 'var(--font-size-sm)', marginTop: 4 }}>
                  {plan.tagline}
                </p>
              </div>
              <div className="pricing-price">
                <span className={`pricing-amount${isAmount ? '' : ' pricing-amount--text'}`}>
                  {isAmount ? `${plan.price}€` : plan.price}
                </span>
                <span className="pricing-period">{plan.priceNote}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f: string) => (
                  <li key={f} className="text pricing-feature-item">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                className="btn pricing-cta"
                id={plan.ctaId}
                style={
                  plan.highlight
                    ? {}
                    : { background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }
                }
              >
                {plan.cta}
              </a>
            </div>
          )
        })}
      </div>
      <p className="text" style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', opacity: 0.6, fontSize: 'var(--font-size-sm)' }}>
        {data.footnote}
      </p>
    </section>
  )
}
