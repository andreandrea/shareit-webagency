'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contatti" className="lv1" aria-labelledby="contatti-title">
      <h2 id="contatti-title" className="head-2">Contattaci</h2>

      {submitted && (
        <div className="success-message" role="alert">Messaggio inviato con successo!</div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Il tuo nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="La tua email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Messaggio</label>
          <textarea id="message" name="message" placeholder="Il tuo messaggio" />
        </div>
        <button type="submit" className="btn">Invia Messaggio</button>
      </form>
    </section>
  )
}
