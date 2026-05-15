# ShareIT Next.js — Note per Claude

> **Attenzione:** Next.js 16 ha breaking changes rispetto alle versioni precedenti.
> Prima di scrivere codice, leggi `node_modules/next/dist/docs/` per le API aggiornate.
> Rispetta gli avvisi di deprecazione.

## Differenze chiave da Next.js 15

- `params` e `searchParams` sono **Promise** — usa `await`
- Turbopack è abilitato di default (niente `--turbopack`)
- `experimental.turbopack` è ora `turbopack` a livello top di `next.config.ts`
- `revalidateTag` richiede un secondo argomento `cacheLife`

## Struttura del progetto

Vedi `../CLAUDE.md` nella root del repository per la documentazione completa.

## Componenti client

Usa `'use client'` solo per:

- `Header.tsx` — stato menu aperto/chiuso
- `About.tsx` — carosello con `setInterval`
- `Quiz.tsx` — stato domande e punteggio
- `Contact.tsx` — stato form inviato

Tutto il resto è Server Component di default.
