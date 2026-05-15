const newsItems = [
  {
    date: 'Maggio 2025',
    datetime: '2025-05',
    text: 'ShareIT lancia il nuovo servizio di AI Integration per le PMI italiane.',
  },
  {
    date: 'Aprile 2025',
    datetime: '2025-04',
    text: 'Premiati come miglior agenzia digitale under 40 al DigitalAwards 2025.',
  },
  {
    date: 'Marzo 2025',
    datetime: '2025-03',
    text: 'Nuovo partnership strategico con i principali cloud provider europei.',
  },
]

export default function News() {
  return (
    <section id="news" className="lv1" aria-labelledby="news-title">
      <h2 id="news-title" className="head-2">News &amp; Aggiornamenti</h2>
      <ul className="services-grid" role="list">
        {newsItems.map((n) => (
          <li key={n.datetime}>
            <article className="lv2 service-card">
              <h3 className="head-3">
                <time dateTime={n.datetime}>{n.date}</time>
              </h3>
              <p className="text">{n.text}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
