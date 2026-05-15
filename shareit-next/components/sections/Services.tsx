const services = [
  {
    title: 'Sviluppo Web',
    description: 'Siti web moderni e responsive per il tuo business digitale.',
  },
  {
    title: 'App Mobile',
    description: 'Applicazioni native e cross-platform per iOS e Android.',
  },
  {
    title: 'E-commerce',
    description: 'Piattaforme di vendita online ottimizzate per le conversioni.',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategie complete per la tua presenza online.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Infrastrutture cloud scalabili e sicure per la tua azienda.',
  },
  {
    title: 'Consulenza IT',
    description: 'Supporto strategico e tecnico per la tua trasformazione digitale.',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="section">
      <div className="lv1">
        <h2 className="head-2">I Nostri Servizi</h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <h3 className="head-3">{s.title}</h3>
              <p className="text">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
