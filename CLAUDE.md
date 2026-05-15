# ShareIT Web Agency

Sito istituzionale di **ShareIT**, agenzia digitale italiana. Il progetto vive in `shareit-next/` (Next.js 16); i file `index.html` / `style.css` / `script.js` nella root sono la versione statica legacy.

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
    Hero.tsx        — sezione hero (server)
    Services.tsx    — griglia 6 servizi (server)
    About.tsx       — chi siamo + carosello auto (client)
    Portfolio.tsx   — 3 progetti (server)
    News.tsx        — 3 news (server)
    Quiz.tsx        — quiz 3 domande con punteggio (client)
    Contact.tsx     — form di contatto con feedback (client)
```

## Comandi

```bash
cd shareit-next
npm run dev     # sviluppo locale (http://localhost:3000)
npm run build   # build produzione
npm run start   # avvia server produzione
```

## Note Next.js 16

- **Turbopack** è abilitato di default per `dev` e `build`
- `params` e `searchParams` sono **async** (breaking change da v15)
- I componenti con `useState`/`useEffect` richiedono `'use client'`
- I font sono auto-hostati (nessuna richiesta esterna a Google)
- Le icone social sono SVG inline (no FontAwesome)
