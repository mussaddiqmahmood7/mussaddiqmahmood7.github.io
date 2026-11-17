# mussaddiqmahmood7.github.io

One-page introduction site. Next.js (static export) deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Deploy (first time)
1. On GitHub, signed in as **mussaddiqmahmood7**, create an empty public repo named exactly `mussaddiqmahmood7.github.io` (no README).
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Push:
   ```bash
   git init -b main
   git add .
   git commit -m "First version of the intro site"
   git remote add origin https://github.com/mussaddiqmahmood7/mussaddiqmahmood7.github.io.git
   git push -u origin main
   ```
4. Wait about 1 minute (Actions tab), then open https://mussaddiqmahmood7.github.io

## Where to change things
- Text: `app/page.tsx`
- Sizes, colours, spacing (design tokens at the top): `app/globals.css`
- Email behaviour (mail app on phones, Gmail on computers): `components/EmailButton.tsx`
- Title and link preview: `app/layout.tsx`, `public/og.jpg`
