# Photo Gallery

## Descrizione
Questo è un progetto Next.js che mostra una galleria di immagini 3D infinita usando **Three.js** e **react-three-fiber**.

## Come avviare il progetto localmente
```bash
npm install
npm run dev
```

## Dove definire le foto
Le immagini visualizzate sono definite nell'array `sampleImages` nel file `app/page.tsx` (riga 4‑13). Ogni elemento è un oggetto con le proprietà `src` e `alt`. 

- **`src`**: percorso relativo all'immagine nella cartella `public` del progetto (es. `/1.webp`).
- **`alt`**: testo alternativo per l'accessibilità.

Per aggiungere o modificare le foto:
1. Copia le tue immagini nella cartella `public` (es. `d:\Project\Photo Gallery\public`).
2. Aggiorna l'array `sampleImages` con i nuovi percorsi e descrizioni.

## Pubblicare su GitHub
1. **Crea un repository su GitHub** (senza README, .gitignore o licenza).
2. Esegui i seguenti comandi nella radice del progetto:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```
   - Sostituisci `USERNAME` e `REPO_NAME` con i tuoi dati.

## Deploy su Vercel
1. Vai su https://vercel.com e **crea un nuovo progetto**.
2. Collega il tuo account GitHub e scegli il repository appena pushato.
3. Vercel rileverà automaticamente che è un progetto Next.js e utilizzerà le impostazioni predefinite (`npm install` + `npm run build`).
4. Clicca **Deploy**. Dopo il deploy, il tuo sito sarà disponibile all'URL fornito da Vercel.

## Note aggiuntive
- Se vuoi personalizzare la configurazione di Vercel (es. variabili d'ambiente), aggiungile nella sezione **Settings → Environment Variables** del progetto Vercel.
- Per aggiornare il sito, basta fare un nuovo `git push` su `main`; Vercel farà il redeploy automaticamente.

---
*Questo README è stato generato da Antigravity, il tuo assistente di sviluppo.*
