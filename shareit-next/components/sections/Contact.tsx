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
        Candidati per il tuo store
      </h2>
      <p className="text" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto var(--spacing-lg)' }}>
        Non selezioniamo le opere più belle — selezioniamo gli artisti con un pubblico attivo
        che vuole comprare. Compila il form: ti rispondiamo entro 48 ore.
      </p>

      {submitted && (
        <div className="success-message" role="alert">
          ✅ Candidatura inviata! Ti contatteremo entro 48 ore lavorative.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} id="application-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="apply-name">Nome e Cognome *</label>
            <input type="text" id="apply-name" name="name" placeholder="Es. Marta Ferroni" required />
          </div>
          <div className="form-group">
            <label htmlFor="apply-email">Email *</label>
            <input type="email" id="apply-email" name="email" placeholder="Es. marta@email.com" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="apply-social">Profilo social principale *</label>
            <input
              type="url"
              id="apply-social"
              name="social"
              placeholder="Es. https://instagram.com/tuonome"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apply-followers">Follower / iscritti (circa)</label>
            <input
              type="number"
              id="apply-followers"
              name="followers"
              placeholder="Es. 8500"
              min={0}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="apply-style">Tipo di opere che vorresti vendere</label>
          <input
            type="text"
            id="apply-style"
            name="style"
            placeholder="Es. fotografia paesaggistica, illustrazione digitale, ritratti..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="apply-message">Raccontaci il tuo pubblico e perché vuoi uno store tuo</label>
          <textarea
            id="apply-message"
            name="message"
            placeholder="Hai già venduto online? Hai una newsletter? Come coinvolgi il tuo pubblico?"
          />
        </div>

        <button type="submit" className="btn" id="apply-submit-btn" style={{ alignSelf: 'center', padding: 'var(--spacing-sm) var(--spacing-xl)' }}>
          Invia candidatura 🚀
        </button>
      </form>

      <p className="text" style={{ textAlign: 'center', marginTop: 'var(--spacing-md)', opacity: 0.6, fontSize: 'var(--font-size-sm)' }}>
        Oppure scrivi direttamente a{' '}
        <a href="mailto:artstore@shareitwebagency.com" style={{ color: 'var(--accent-color)' }}>
          artstore@shareitwebagency.com
        </a>
      </p>
    </section>
  )
}
