# ShareIT Web Agency

Sito istituzionale di **ShareIT Web Agency**: analisi del business, web app su misura e agent AI
personalizzati. Il progetto vive interamente in `shareit-next/` (Next.js 16).

## Core business (contenuti del sito)

1. Capiamo ed esploriamo a fondo il business del cliente
2. Creazione di web app personalizzate su misura
3. Creazione di agent AI personalizzati su misura

Esempi di riferimento nella sezione progetti: **configuratore Fotorecord** e **configuratore Eternografiche**.

## Stack

| Elemento | Valore |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack di default) |
| Linguaggio | TypeScript |
| Stile | CSS personalizzato + Tailwind CSS v4 |
| Font | Titillium Web + Orbitron via `next/font/google` |
| React | v19.2 |

## Struttura `shareit-next/`

```
app/
  layout.tsx        — layout root: font, metadata, Header + Footer
  page.tsx          — homepage (importa tutte le sezioni)
  globals.css       — variabili CSS ShareIT + stili globali
  not-found.tsx     — pagina 404 con robot animato
components/
  Header.tsx        — menu modale (client component)
  Footer.tsx        — footer con icone social SVG inline
  sections/
    Hero.tsx        — sezione hero con parola rotante (client)
    Servizi.tsx     — i 3 servizi core (server)
    Services.tsx    — "Il nostro metodo", 6 step (server)
    About.tsx       — chi siamo + carosello auto (client)
    Portfolio.tsx   — progetti/configuratori realizzati (server)
    Pricing.tsx     — modalità di collaborazione (server)
    News.tsx        — FAQ (server)
    Quiz.tsx        — quiz 3 domande con punteggio (client)
    Contact.tsx     — form di contatto con feedback (client)
content/            — testi delle sezioni in Markdown + front matter
  hero.md, servizi.md, how-it-works.md, about.md,
  portfolio.md, pricing.md, faq.md, quiz.md
lib/
  content.ts        — getContent(): legge content/<nome>.md con gray-matter
```

I testi delle sezioni si modificano **solo** nei file di `content/`: i componenti ricevono i dati
come prop dal front matter YAML e non contengono copy hardcoded (eccetto `Contact.tsx`).

## Comandi

```bash
cd shareit-next
npm run dev     # sviluppo locale (http://localhost:3200)
npm run build   # build produzione
npm run start   # avvia server produzione
```

## Note Next.js 16

- **Turbopack** è abilitato di default per `dev` e `build`
- `params` e `searchParams` sono **async** (breaking change da v15)
- I componenti con `useState`/`useEffect` richiedono `'use client'`
- I font sono auto-hostati (nessuna richiesta esterna a Google)
- Le icone social sono SVG inline (no FontAwesome)
