# Subhom Kundu — Portfolio

A mobile-first portfolio for a Senior Full Stack Engineer specialising in React, TypeScript, accessible UI, and scalable product engineering.

## What changed

- Rebuilt the full site around real CV content and outcome-led case studies.
- Added a responsive editorial layout for mobile, tablet, and desktop.
- Added persistent light and dark themes with system preference detection.
- Added live IBM Carbon Design System contribution statistics and recent PRs from GitHub.
- Added experience, skills, education, certifications, fragrance interests, Instagram, and contact sections.
- Replaced the old profile image with a background-free portrait.
- Replaced the remote CV URL with the current PDF served directly by the site.
- Added metadata, canonical URLs, Open Graph data, and Person structured data.
- Added reduced-motion support, keyboard focus states, semantic landmarks, and a skip link.
- Removed unused UI and animation libraries to keep the client bundle small.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- SCSS
- Sharp image optimisation
- Local Geist variable fonts

The initial experience uses native CSS motion instead of a runtime animation or 3D library. This keeps the homepage statically generated and limits the first-load JavaScript while leaving room for selectively loaded experiments later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The GitHub integration works without credentials for local development. For a
higher API rate limit in production, set a server-only `GITHUB_TOKEN` environment
variable with read access to public repositories. The token is used only by the
Next.js API route and is never sent to the browser.

## Verify

```bash
npm run lint
npm run build
```

Responsive QA targets:

- Mobile: 390 × 844
- Tablet: 768 × 1024
- Desktop: 1440 × 900
- Light and dark themes
- `prefers-reduced-motion: reduce`

## Project structure

```text
public/
├── Subhom_Senior_Fullstack_Developer_Lt.pdf
└── static/media/profile-pic.png
src/app/
├── fonts/
├── globals.scss
├── layout.tsx
└── page.tsx
```

## Possible motion experiments

These ideas should be loaded only where they add meaning:

1. Use GSAP ScrollTrigger for a pinned project index and subtle section transitions. Dynamically import it after the first interaction and disable it for reduced-motion users.
2. Use React Three Fiber for one lightweight fragrance-bottle object in the personal section. Render a static fallback on mobile and load the canvas only when it approaches the viewport.
3. Add a pointer-reactive gradient behind the portrait with CSS custom properties before considering a shader.
4. Create a custom social preview image so shared links carry the same visual identity as the portfolio.

The design principle is simple: one memorable interaction is stronger than animation everywhere.
