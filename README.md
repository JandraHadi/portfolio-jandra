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
| Name, headline, intro, about, email, GitHub, LinkedIn, Instagram, Facebook, Medium, CV (set a link to `null` to hide it) | `src/data/profile.ts` |
| Projects (add `github` / `demo` URLs) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |

A link set to `null` (or left out) is hidden. To show a CV button, put the PDF in `public/` and set `cvUrl: "/cv.pdf"`.

## Profile photo

The photo is `src/images/profile.jpeg`, imported in `src/components/ProfilePhoto.tsx` (so `next/image` resizes it and the build fails if it is missing). To change it, replace that file (portrait, roughly 4:5, 1200px or more on the long edge). Adjust the focus with `object-[50%_55%]` in the same component if the face is cropped. Initials show only if the image fails to load.

## Hobby photos

Just drop files into the folder for each hobby. **No code change is needed**: the Hobbies page lists each folder at build time, so only files that exist are shown (no broken images; an empty folder shows a "coming soon" placeholder).

| Hobby | Folder | Expected names |
| --- | --- | --- |
| Motorcycle riding | `public/images/riding/` | `riding1.jpeg`, `riding2.jpeg` |
| Guitar & singing | `public/images/guitar/` | `guitar1.jpeg`, `guitar2.jpeg` |
| Mobile photography | `public/images/photography/` | `photography1.jpeg`, `photography2.jpeg`, `photography3.jpeg` |

**Add a photo:** save it in the right folder as `<folder>N.jpeg` with the next number (`riding3.jpeg`, `photography4.jpeg`, ...). `.jpg`, `.png`, `.webp` and `.avif` also work. Photos are shown in natural order (`2` before `10`). The grid shows 6 (riding, guitar) or 9 (photography) at first, then a "Load more" button.

**Size:** original JPEGs are fine; `next/image` serves resized WebP/AVIF per screen. To keep the repo light, use about 1600px on the long edge and under ~400 KB each. Riding and guitar are cropped to 3:2, photography to 4:5, centered with `object-fit: cover`, so keep the subject near the middle.

**Optional alt text:** photos get a generic description ("Mobile photography, photo 2"). To describe one, add `alts: { "riding1.jpeg": "Riding along a coastal road" }` to that hobby in `src/data/hobbies.ts`. That file also holds the hobby texts, order of photos per page, and the crop (`aspect`).

**Check locally:** `npm run dev`, open http://localhost:3000/hobbies. New files are picked up on refresh in dev; for a production check run `npm run build && npm start`. Commit the files to git so Vercel deploys them.

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
3. Test locally: also set `NEXT_PUBLIC_GA_ENABLE_DEV=true`, run `npm run dev`, press **Accept cookies**, then check Reports → Realtime or Admin → DebugView.
4. Production: add the variables in Vercel (Project → Settings → Environment Variables) and redeploy (values are baked in at build time).
5. Optional: Admin → Events → mark `contact_click`, `cv_download`, `project_link_click` as key events.

**Behaviour:** localhost and dev builds are excluded by default; Google Signals and ad personalization are off; `page_view` is sent once per route; events are `page_view`, `project_link_click`, `contact_click`, `social_click`, `cv_download` (only fire for links that exist). To remove analytics entirely, leave `NEXT_PUBLIC_GA_ID` empty or delete `<Analytics />` from `src/app/layout.tsx`.

**Consent:** because visitors may come from the EU/UK and GA4 sets cookies, consent is required there. The site shows a small, non-blocking bar and loads Google's script only after **Accept cookies**. This is a practical default, not legal advice; if you'd rather have no banner, you would need to limit the audience or use a cookieless setup.

## Deploy to Vercel

Import the repo on vercel.com, set the env vars above, deploy. No server secrets needed.

## Still to fill in

- [ ] Confirm name, headline, intro and About text (`profile.ts`)
- [ ] Verify the 3 project descriptions and technologies (`projects.ts`)
- [ ] Add GitHub / demo links per project
- [ ] Confirm which contact links to publish (email, GitHub, LinkedIn)
- [ ] CV PDF (optional)
- [ ] `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_SITE_URL`
