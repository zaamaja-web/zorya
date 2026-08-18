# Zorya AI — production site

This is the production build of the Zorya AI marketing site, implemented from a
Claude Design handoff bundle (source: `Zorya AI Site.dc.html` + `support.js`, a
prototype built on Claude Design's `x-dc` runtime). This repo replaces that prototype
runtime with plain static HTML/CSS/JS and real routes, so it deploys to Vercel with
zero configuration.

## Structure

- `index.html` — Home
- `services.html` — Accelerator (served at `/services`)
- `about.html` — About (served at `/about`)
- `contact.html` — Contact (served at `/contact`)
- `slovenija.html` — Slovenian-language landing page (served at `/slovenija.html`, opens
  in a new tab from the main nav, matching the source)
- `assets/site.css`, `assets/site.js` — shared styles and the small amount of
  interactivity (FAQ/week accordions, the waitlist and contact forms)
- `web/` — photos and partner logos
- `vercel.json` — enables clean URLs (`/services` instead of `/services.html`)
- `favicon.svg` — the brand mark used as the bundler thumbnail in the original file

## Deploying

**Option A — connect this repo to Vercel (recommended)**
1. In Vercel: New Project → import `zaamaja-web/zorya`. No build command or output
   directory needed, it's a static site at the repo root.
2. Deploy. Every push to the connected branch redeploys automatically, to the same
   project and the same domain, which avoids the "each export makes a new Vercel
   project" issue from the old Claude Design export flow.

**Option B — deploy this folder directly with the Vercel CLI**
```
npx vercel --prod
```

## Known limitations carried over from the prototype

- The waitlist and contact forms are client-side only (they swap the button label,
  matching the original design's behavior). There's no email delivery wired up yet —
  wire `assets/site.js`'s two `submit` handlers to a real endpoint (a Vercel serverless
  function, Formspree, etc.) before relying on them to capture leads.
- No responsive/mobile breakpoints: the source design had none, so the grid layouts are
  fixed for desktop widths, faithfully matching what was designed and approved.
- `slovenija.html`'s founder bios still contain the original `[dopolniti]` ("to be
  completed") placeholders — real Slovenian bios were never supplied.
- Family-of-brands logos (SheAI, Innervoices, Builders & Co, Lingocare) are present in
  the original prototype's data but were removed from the visible page mid-project; they
  aren't included here either, matching the current live design.
