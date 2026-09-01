'use client'

import { useEffect, useRef } from 'react'

type Nodo = { x: number; y: number; vx: number; vy: number; fase: number }

/**
 * Rete di nodi e connessioni dietro l'hero: richiama una rete neurale.
 * Sotto i 768px non viene disegnata; con prefers-reduced-motion resta
 * disegnata ma ferma (niente movimento, la grafica rimane).
 */
export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const motoRidotto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (window.innerWidth < 768) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodi: Nodo[] = []
    let larghezza = 0
    let altezza = 0
    let distanzaMax = 160
    let frame = 0

    const dimensiona = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      larghezza = rect.width
      altezza = rect.height
      canvas.width = larghezza * dpr
      canvas.height = altezza * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // densita in base all'area, non alla sola larghezza
      const quanti = Math.max(30, Math.min(90, Math.round((larghezza * altezza) / 26000)))
      distanzaMax = Math.min(220, Math.max(140, Math.round(larghezza / 11)))
      nodi = Array.from({ length: quanti }, () => ({
        x: Math.random() * larghezza,
        y: Math.random() * altezza,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        fase: Math.random() * Math.PI * 2,
      }))
    }

    function disegnaScena(t: number, muovi = true) {
      if (!ctx) return
      ctx.clearRect(0, 0, larghezza, altezza)

      if (muovi) {
        for (const n of nodi) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > larghezza) n.vx *= -1
          if (n.y < 0 || n.y > altezza) n.vy *= -1
        }
      }

      // connessioni
      for (let i = 0; i < nodi.length; i++) {
        for (let j = i + 1; j < nodi.length; j++) {
          const dx = nodi[i].x - nodi[j].x
          const dy = nodi[i].y - nodi[j].y
          const d = Math.hypot(dx, dy)
          if (d > distanzaMax) continue
          const forza = 1 - d / distanzaMax
          // impulso che percorre la connessione
          const impulso = 0.5 + 0.5 * Math.sin(t / 900 + (i + j) * 0.6)
          ctx.strokeStyle = `rgba(0, 216, 255, ${(forza * 0.3 * impulso).toFixed(3)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(nodi[i].x, nodi[i].y)
          ctx.lineTo(nodi[j].x, nodi[j].y)
          ctx.stroke()
        }
      }

      // nodi
      for (const n of nodi) {
        const pulsazione = 0.6 + 0.4 * Math.sin(t / 700 + n.fase)
        ctx.fillStyle = `rgba(0, 216, 255, ${(0.55 * pulsazione).toFixed(3)})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6 + pulsazione, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const disegna = (t: number) => {
      disegnaScena(t)
      frame = requestAnimationFrame(disegna)
    }

    const aggiorna = () => {
      dimensiona()
      if (motoRidotto) disegnaFermo()
    }

    // Con moto ridotto disegniamo un fotogramma solo, senza loop
    function disegnaFermo() {
      cancelAnimationFrame(frame)
      disegnaScena(1200)
    }

    dimensiona()
    // Primo fotogramma subito: se la scheda parte in secondo piano
    // requestAnimationFrame non scatta e l'hero resterebbe vuoto
    disegnaScena(1200, false)
    if (!motoRidotto) {
      frame = requestAnimationFrame(disegna)
    }
    window.addEventListener('resize', aggiorna)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', aggiorna)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-neural" aria-hidden="true" />
}
