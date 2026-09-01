export default function HowItWorks({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="come-funziona" className="lv1" aria-labelledby="come-funziona-title">
      <h2 id="come-funziona-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto var(--spacing-lg)' }}>
        {data.subtitle}
      </p>
      <ul className="steps-grid" role="list">
        {data.steps.map((s: any) => (
          <li key={s.step} className="lv2 step-card">
            <div className="step-header">
              <span className="step-number">{s.step}</span>
              <span className="step-icon">{s.icon}</span>
            </div>
            <h3 className="head-3">{s.title}</h3>
            <p className="text">{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
