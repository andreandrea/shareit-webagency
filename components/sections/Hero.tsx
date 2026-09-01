'use client'

import { useEffect, useState } from 'react'

export default function Hero({ data }: { data: any }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const words = data?.words || ['Fotografi', 'Illustratori', 'Artisti', 'Creativi']

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [words])

  if (!data) return null;

  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="hero-badge">{data.badge}</div>

      <h1 id="hero-title" className="head-2 hero-h1">
        {data.headline.split('[WORD]')[0]}
        <span
          className="hero-word"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
        >
          {words[index]}
        </span>
        {data.headline.split('[WORD]')[1]}
      </h1>

      <p className="text hero-sub">
        {data.subtitle}
      </p>

      <div className="hero-cta-group">
        <a href={data.cta_primary_href} className="btn hero-btn-primary" id="hero-cta-primary">
          {data.cta_primary}
        </a>
        <a href={data.cta_secondary_href} className="btn hero-btn-secondary" id="hero-cta-secondary">
          {data.cta_secondary}
        </a>
      </div>

      <div className="hero-stats">
        {data.stats.map((stat: any, i: number) => (
          <div key={i} className="hero-stat-group">
            <div className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
            {i < data.stats.length - 1 && <div className="hero-stat-divider" />}
          </div>
        ))}
      </div>
    </section>
  )
}
