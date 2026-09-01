'use client'

import { useState } from 'react'

const needs = [
  'Una app / web app',
  'Un sito web',
  "Un'automazione",
  "Un'integrazione con l'IA",
  'Non lo so ancora, voglio capirlo insieme',
]

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
      <p className="text section-sub">
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

        <fieldset className="form-group needs-fieldset">
          <legend>Di cosa avresti bisogno?</legend>
          <div className="needs-grid">
            {needs.map((need, i) => (
              <label key={need} className="need-option">
                <input type="checkbox" id={`contact-need-${i}`} name="needs" value={need} />
                <span>{need}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="form-group">
          <label htmlFor="contact-message">Quale processo vorresti migliorare o automatizzare</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Come nascono oggi i preventivi? Dove si perde più tempo? Quali strumenti usate già?"
          />
        </div>

        <button type="submit" className="btn contact-submit" id="contact-submit-btn">
          Invia richiesta
        </button>
      </form>

      <p className="text section-note">
        Oppure scrivi direttamente a{' '}
        <a href="mailto:info@shareitwebagency.com" className="link-accent">
          info@shareitwebagency.com
        </a>
      </p>
    </section>
  )
}
