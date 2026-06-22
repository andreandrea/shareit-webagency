export default function FAQ({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="faq" className="lv1" aria-labelledby="faq-title">
      <h2 id="faq-title" className="head-2">
        {data.title}
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--spacing-lg)' }}>
        {data.subtitle}
      </p>
      <ul className="faq-list" role="list">
        {data.items.map((n: any, i: number) => (
          <li key={i}>
            <article className="lv2 faq-card">
              <h3 className="head-3 faq-q">
                <span className="faq-q-icon">?</span>
                {n.question}
              </h3>
              <p className="text faq-a">{n.answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
