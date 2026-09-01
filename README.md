# ShareIT Web Agency

Sito istituzionale di **ShareIT Web Agency**: analisi del business, web app su misura e agent AI personalizzati.

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:3200
```

Altri comandi:

```bash
npm run build   # build di produzione
npm run start   # server di produzione (porta 3200)
npm run lint    # eslint
```

## Contenuti

I testi delle sezioni stanno nei file Markdown di `content/` (front matter YAML): `hero.md`,
`servizi.md`, `how-it-works.md`, `about.md`, `portfolio.md`, `pricing.md`, `faq.md`.
I componenti in `components/sections/` li ricevono come prop — per cambiare un testo si modifica
il Markdown, non il componente.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · CSS custom + Tailwind CSS v4 ·
font Titillium Web e Orbitron auto-hostati via `next/font/google`.

## Deploy

Vercel, progetto `shareit-webagency`, Root Directory vuota (il progetto è nella root del repo).
Ogni push su `main` aggiorna la produzione.
