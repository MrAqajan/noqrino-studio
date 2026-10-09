# Noqrino Studio — Telegram Mini App

Front-end of the Noqrino product-photo studio. Backend: n8n workflow **Noqrino Studio v3**.

- `index.html` — the app (built from `src/app.html` with `node src/build.js`, which inlines `logo.svg`)
- `fonts/` — Vazirmatn (SIL OFL 1.1, see `fonts/OFL.txt`), self-hosted for speed
- API address comes from the bot's buttons (`?api=...`); photos load through signed n8n links
