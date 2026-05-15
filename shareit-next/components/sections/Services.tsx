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
    <section id="servizi" className="lv1" aria-labelledby="servizi-title">
      <h2 id="servizi-title" className="head-2">I Nostri Servizi</h2>
      <ul className="services-grid" role="list">
        {services.map((s) => (
          <li key={s.title} className="lv2 service-card">
            <h3 className="head-3">{s.title}</h3>
            <p className="text">{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
