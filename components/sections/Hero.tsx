'use client'

import { useEffect, useState } from 'react'
import NeuralBackground from './NeuralBackground'

const VELOCITA_SCRITTURA = 75
const VELOCITA_CANCELLAZIONE = 40
const PAUSA_PAROLA_COMPLETA = 1800

export default function Hero({ data }: { data: any }) {
  const words: string[] = data?.words || ['business', 'lavoro', 'processo', 'settore']

  const [indice, setIndice] = useState(0)
  const [scritto, setScritto] = useState(words[0])
  const [fase, setFase] = useState<'scrive' | 'attende' | 'cancella'>('attende')
  const [animato, setAnimato] = useState(false)

  // Con prefers-reduced-motion la parola resta fissa
  useEffect(() => {
    setAnimato(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!animato) return
    const parola = words[indice]
    let timer: ReturnType<typeof setTimeout>

    if (fase === 'scrive') {
      if (scritto.length < parola.length) {
        timer = setTimeout(() => setScritto(parola.slice(0, scritto.length + 1)), VELOCITA_SCRITTURA)
      } else {
        timer = setTimeout(() => setFase('attende'), PAUSA_PAROLA_COMPLETA)
      }
    } else if (fase === 'attende') {
      timer = setTimeout(() => setFase('cancella'), PAUSA_PAROLA_COMPLETA)
    } else {
      if (scritto.length > 0) {
        timer = setTimeout(() => setScritto(parola.slice(0, scritto.length - 1)), VELOCITA_CANCELLAZIONE)
      } else {
        setIndice((i) => (i + 1) % words.length)
        setFase('scrive')
      }
    }

    return () => clearTimeout(timer)
  }, [animato, fase, scritto, indice, words])

  if (!data) return null;

  return (
    <section id="hero" aria-labelledby="hero-title">
      <NeuralBackground />

      <div className="hero-badge">{data.badge}</div>

      <h1 id="hero-title" className="head-2 hero-h1">
        {data.headline.split('[WORD]')[0]}
        <span className="hero-word">{scritto}</span>
        {animato && <span className="hero-caret" aria-hidden="true" />}
        {data.headline.split('[WORD]')[1]}
      </h1>

      <p className="text hero-sub">
        {data.subtitle}
      </p>

      <div className="hero-cta-group">
        <a href={data.cta_primary_href} className="btn hero-btn-primary" id="hero-cta-primary">
          {data.cta_primary}
        </a>
        <a href={data.cta_secondary_href} className="btn btn--ghost hero-btn-secondary" id="hero-cta-secondary">
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
