# Osiaru Tech — Next.js site

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

For production:

```bash
npm run build
npm start
```

## Editing content

- **Previous projects** — `components/projects.js`. Each entry is a plain object; see the
  comment block at the top of the file for the full model (title, category, year, summary,
  tags, image, gif, video, url). Clicking a project card opens a popup showing, in order,
  the `gif`, else the `video`, else the `image`.
- **Site-wide facts** (name, URL, email, phone, founder, CAC registration) —
  `lib/site-config.js`. This feeds both the page metadata and the Founder person / SEO
  structured data.
- **Logo** — `public/logo.png` (also duplicated as `app/icon.png` for the browser tab icon
  and `public/apple-touch-icon.png` for iOS). Replace with your own artwork at 512×512px
  and keep the same filenames, or update the references in `app/layout.js`,
  `components/Header.js` and `components/Footer.js` if you rename them.
- **Copy/sections** — each section is its own file under `components/` (Hero, Services,
  Work, About, Process, CTASection, Contact, Footer).

## SEO

- `app/layout.js` sets the title template, meta description, Open Graph/Twitter tags,
  canonical URL and keywords — all sourced from `lib/site-config.js`.
- `components/JsonLd.js` emits Organization + Person (founder) + WebSite structured data
  (schema.org JSON-LD) so search engines can associate "Osiaru Tech" with its founder,
  Believe Robert Osiaru.
- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and `/robots.txt`
  automatically.
- Before going live, update `siteConfig.url` in `lib/site-config.js` if the domain
  changes, and fill in the real phone number (currently a placeholder).

## Notes

- The contact form validates client-side only — wire `components/Contact.js`'s
  `handleSubmit` up to a real backend or form service (an API route, Formspree, etc.)
  before relying on it.
- No component libraries beyond React/Next itself — styling is plain CSS in
  `app/globals.css`, matching the original single-page design.
