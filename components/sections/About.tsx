'use client'

import { useState, useEffect } from 'react'

export default function About({ data }: { data: any }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!data?.slides) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [data])

  if (!data) return null;

  // Sostituiamo i tag ** testo ** con <strong> nel testo introduttivo, o semplicemente lo stampiamo 
  const introMarkup = { __html: data.intro.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--accent-color)">$1</strong>') };

  return (
    <section id="chi-siamo" className="lv1" aria-labelledby="chi-siamo-title">
      <h2 id="chi-siamo-title" className="head-2">
        {data.title}
      </h2>

      <div className="about-layout">
        <div className="about-text-col">
          <p className="text" dangerouslySetInnerHTML={introMarkup} />
          
          <div className="about-pillars">
            {data.pillars.map((pillar: any, i: number) => (
              <div key={i} className="pillar">
                <span className="pillar-icon">{pillar.icon}</span>
                <div>
                  <strong>{pillar.title}</strong>
                  <p className="text">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-container about-carousel-col" aria-live="polite" aria-atomic="true">
          <div
            className="carousel"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {data.slides.map((slide: any) => (
              <div key={slide.title} className="carousel-slide">
                <div className="lv2">
                  <h3 className="head-3">{slide.title}</h3>
                  <p className="text">{slide.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            {data.slides.map((_: any, i: number) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Vai alla slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
