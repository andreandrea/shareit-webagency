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
    <section id="portfolio" className="section">
      <div className="lv1">
        <h2 className="head-2">Portfolio</h2>
        <p className="text">Alcuni dei nostri progetti più recenti e significativi.</p>
        <div className="services-grid">
          {projects.map((p) => (
            <div key={p.title} className="service-card">
              <h3 className="head-3">{p.title}</h3>
              <p className="text">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
