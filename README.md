# 574 Creatives

A modern, cinematic nonprofit website for **574 Creatives** — a movement for creatives in the 574.

> "Bridging Creativity in the 574."
> Connecting artists, entrepreneurs, and visionaries through culture, collaboration, and opportunity.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for cinematic animations
- **Lucide React** for icons
- **Inter** + **Space Grotesk** typography
- Optimized for **Netlify** deployment

## Sections

1. Hero — large cinematic typography with scroll parallax
2. About / Mission
3. The Bridge — animated SVG arc concept
4. Programs — six program cards
5. Creative Sessions — feature spotlight
6. Community Impact — animated counters + quote
7. Media / Content Wall — asymmetric grid
8. Partners & Sponsors — looping marquee
9. CTA + Footer

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Deploy to Netlify

The repo includes a `netlify.toml`. Connect the repo on Netlify and it will:

- run `npm run build`
- publish `.next`
- use `@netlify/plugin-nextjs` automatically (install it as a Netlify plugin in the UI or via `npm i -D @netlify/plugin-nextjs` if needed)

## Design system

- **Background:** deep ink blacks (`#070707` → `#1a1a1d`)
- **Accents:** warm ember oranges (`#ff7a1a`, `#ffb45a`)
- **Surface text:** warm cream (`#f6efe3`)
- **Typography:** Space Grotesk (display) / Inter (body)
- **Motion:** scroll-triggered reveals, parallax hero, marching path animations, film-grain overlay

## PWA / "Add to Home Screen"

The site is installable as a Progressive Web App:

- Android / Chrome / Edge / iOS 16.4+ — visitors get an "Install" or "Add to Home Screen" prompt. The site opens fullscreen with the warm ember theme color and the 574 app icon.
- The manifest lives in `public/manifest.json` and the icon in `public/icon.svg`.

**Optional — add PNG icons for older iOS support.** Modern devices use the SVG fine, but if you want to support iOS 16.3 and older, export `public/icon.svg` to PNG at three sizes and drop them in `public/` — `icon-192.png`, `icon-512.png`, and `apple-touch-icon.png` (180×180). Then re-add their entries to `public/manifest.json` and `app/layout.tsx`. Any free SVG-to-PNG tool works (e.g. cloudconvert.com).

## Editing copy

All section copy lives in the components under `/components`. The Hero headline + subheadline are in `components/Hero.tsx`. Program cards are in `components/Programs.tsx`.
