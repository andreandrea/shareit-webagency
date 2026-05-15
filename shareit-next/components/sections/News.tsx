const newsItems = [
  {
    date: 'Maggio 2025',
    text: 'ShareIT lancia il nuovo servizio di AI Integration per le PMI italiane.',
  },
  {
    date: 'Aprile 2025',
    text: 'Premiati come miglior agenzia digitale under 40 al DigitalAwards 2025.',
  },
  {
    date: 'Marzo 2025',
    text: 'Nuovo partnership strategico con i principali cloud provider europei.',
  },
]

export default function News() {
  return (
    <section id="news" className="section">
      <div className="lv1">
        <h2 className="head-2">News &amp; Aggiornamenti</h2>
        <div className="services-grid">
          {newsItems.map((n) => (
            <div key={n.date} className="service-card">
              <h3 className="head-3">{n.date}</h3>
              <p className="text">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
