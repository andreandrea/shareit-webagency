const projects = [
  {
    title: 'Progetto Alpha',
    description: 'Piattaforma e-commerce per brand di moda con oltre 10.000 prodotti.',
  },
  {
    title: 'Progetto Beta',
    description: 'App mobile per la gestione delle prenotazioni nel settore hospitality.',
  },
  {
    title: 'Progetto Gamma',
    description: 'Dashboard analytics per azienda Fortune 500 con dati in real-time.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="lv1" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" className="head-2">Portfolio</h2>
      <p className="text">Alcuni dei nostri progetti più recenti e significativi.</p>
      <ul className="services-grid" role="list">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="lv2 service-card">
              <h3 className="head-3">{p.title}</h3>
              <p className="text">{p.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
