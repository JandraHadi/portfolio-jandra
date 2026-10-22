# Portfolio — Jandra Hadi Nurkarim

Minimal dark portfolio. Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build && npm start
```

## Edit your content

| What | File |
| --- | --- |
| Name, headline, intro, about, email, GitHub, LinkedIn, CV | `src/data/profile.ts` |
| Projects (add `github` / `demo` URLs) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |

A link set to `null` (or left out) is hidden. To show a CV button, put the PDF in `public/` and set `cvUrl: "/cv.pdf"`.

## Profile photo

Save your photo as `public/images/profile.jpg` (portrait, roughly 4:5, ~800×1000px, under 300 KB). It is cropped with `object-fit: cover` focused near the top (`object-[50%_20%]` in `src/components/ProfilePhoto.tsx` — adjust if your face is cropped). Until the file exists, a "JH" initials tile is shown instead.

## Colors

Forest & Sage tokens live in `src/app/globals.css` (`:root`): background `#172b2a`, surface `#223c38`, accent `#a8c3b0`, text `#e8efe8`, muted `#c4d2c8`.

## Environment variables

All are public values; never put secrets in `NEXT_PUBLIC_*`. Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (`G-…`). Empty = analytics completely off. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and Open Graph. |
| `NEXT_PUBLIC_GA_ENABLE_DEV` | `true` to allow analytics on localhost / dev (testing only). |

## Google Analytics 4

1. analytics.google.com → Admin → Create property → add a **Web** data stream.
2. Copy the Measurement ID and set `NEXT_PUBLIC_GA_ID`.
3. Test locally: also set `NEXT_PUBLIC_GA_ENABLE_DEV=true`, run `npm run dev`, press **Accept**, then check Reports → Realtime or Admin → DebugView.
4. Production: add the variables in Vercel (Project → Settings → Environment Variables) and redeploy (values are baked in at build time).
5. Optional: Admin → Events → mark `contact_click`, `cv_download`, `project_link_click` as key events.

**Behaviour:** localhost and dev builds are excluded by default; Google Signals and ad personalization are off; `page_view` is sent once per route; events are `page_view`, `project_link_click`, `contact_click`, `social_click`, `cv_download` (only fire for links that exist). To remove analytics entirely, leave `NEXT_PUBLIC_GA_ID` empty or delete `<Analytics />` from `src/app/layout.tsx`.

**Consent:** because visitors may come from the EU/UK and GA4 sets cookies, consent is required there. The site shows a small, non-blocking bar and loads Google's script only after **Accept**. This is a practical default, not legal advice; if you'd rather have no banner, you would need to limit the audience or use a cookieless setup.

## Deploy to Vercel

Import the repo on vercel.com, set the env vars above, deploy. No server secrets needed.

## Still to fill in

- [ ] Confirm name, headline, intro and About text (`profile.ts`)
- [ ] Verify the 3 project descriptions and technologies (`projects.ts`)
- [ ] Add GitHub / demo links per project
- [ ] Confirm which contact links to publish (email, GitHub, LinkedIn)
- [ ] CV PDF (optional)
- [ ] `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_SITE_URL`
