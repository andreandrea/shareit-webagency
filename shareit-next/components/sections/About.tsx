'use client'

import { useState, useEffect } from 'react'

const slides = [
  {
    title: 'La Nostra Missione',
    text: "Aiutare le aziende a crescere nel mondo digitale con soluzioni su misura e all'avanguardia.",
  },
  {
    title: 'Il Nostro Team',
    text: 'Un gruppo di professionisti appassionati con oltre 10 anni di esperienza nel settore IT.',
  },
  {
    title: 'I Nostri Valori',
    text: 'Innovazione, qualità e trasparenza sono i pilastri del nostro approccio al lavoro.',
  },
]

export default function About() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  return (
    <section id="chi-siamo" className="lv1">
      <h2 className="head-2">Chi Siamo</h2>
      <p className="text">
        ShareIT è un&apos;agenzia digitale italiana specializzata nello sviluppo di soluzioni web
        e mobile innovative. Il nostro team di esperti combina creatività e tecnologia per offrire
        prodotti digitali di alta qualità.
      </p>

      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="carousel-slide">
              <div className="lv2">
                <h3 className="head-3">{slide.title}</h3>
                <p className="text">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Vai alla slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
