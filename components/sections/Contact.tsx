'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section id="contatti" className="lv1" aria-labelledby="contatti-title">
      <h2 id="contatti-title" className="head-2">
        Parliamo del tuo business
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto var(--spacing-lg)' }}>
        Raccontaci come lavori e quale processo vorresti migliorare. Ti rispondiamo entro 48 ore
        con una prima valutazione — e se non è il caso di costruire nulla, te lo diciamo.
      </p>

      {submitted && (
        <div className="success-message" role="alert">
          Richiesta inviata. Ti contattiamo entro 48 ore lavorative.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">Nome e Cognome *</label>
            <input type="text" id="contact-name" name="name" placeholder="Es. Marco Rossi" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email *</label>
            <input type="email" id="contact-email" name="email" placeholder="Es. marco@azienda.it" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-company">Azienda *</label>
            <input type="text" id="contact-company" name="company" placeholder="Es. Rossi S.r.l." required />
          </div>
          <div className="form-group">
            <label htmlFor="contact-website">Sito web</label>
            <input
              type="url"
              id="contact-website"
              name="website"
              placeholder="Es. https://www.tuazienda.it"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-sector">Di cosa si occupa la tua azienda</label>
          <input
            type="text"
            id="contact-sector"
            name="sector"
            placeholder="Es. stampa e cornici su misura, produzione, servizi B2B..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">Quale processo vorresti migliorare o automatizzare</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Come nascono oggi i preventivi? Dove si perde più tempo? Quali strumenti usate già?"
          />
        </div>

        <button type="submit" className="btn" id="contact-submit-btn" style={{ alignSelf: 'center', padding: 'var(--spacing-sm) var(--spacing-xl)' }}>
          Invia richiesta
        </button>
      </form>

      <p className="text" style={{ textAlign: 'center', marginTop: 'var(--spacing-md)', opacity: 0.6, fontSize: 'var(--font-size-sm)' }}>
        Oppure scrivi direttamente a{' '}
        <a href="mailto:info@shareitwebagency.com" style={{ color: 'var(--accent-color)' }}>
          info@shareitwebagency.com
        </a>
      </p>
    </section>
  )
}
