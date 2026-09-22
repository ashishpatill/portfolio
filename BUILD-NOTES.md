# Build notes

Short record for the owner. What was chosen, what was left honest, what you may want to change.

## Design

- Dark editorial field (`#0a0a0b`), warm off-white ink, one brass accent (`#e4b56a`). Amber instead of Chiang mint so this does not read as a clone.
- Newsreader for display, Geist for UI. Generous measure, hairline rules, no purple SaaS chrome, no WebGL.
- Desktop: sticky left rail (name, headline, nav, socials) and a scrolling right column. Mobile: compact sticky nav plus stacked sections.
- Motion is CSS fade/slide via IntersectionObserver. Content stays visible without JS. `prefers-reduced-motion` disables it.
- Tell Proof cards use stills copied from `ashishpatill/tell-proof` (`docs/media`). Other featured projects use abstract CSS panels, not fake product screenshots.
- OG image and favicon are generated (`app/opengraph-image.tsx`, `app/icon.tsx`).

## Copy rules that were kept

- No em dashes.
- No live Tell / Nagrik / grok-kit production URLs. Repos only.
- No DeepHarness, SuperLearn, bimrag, EvidenceLoom, or RouteFusion as shipped public products.
- BIMExtract / BIMWeb / related archives are not featured.
- BIMLabz is framed as a personal studio. One sentence. No demo links.
- harness-from-scratch is a teaching repo, not a product.
- Contact is email, LinkedIn, GitHub, and the resume PDF on this site. X stays public in the header.

## Content gaps for you

- The 2013 to 2024 iOS chapter has no employer names. Add them in `content/experience.ts` if you want that on the record.
- `NEXT_PUBLIC_SITE_URL` should become the real Render origin after the first Web Service exists. Do not invent the `*.onrender.com` host. See RENDER.md.
- If you later publish a Tell capture host or Nagrik HTTPS demo, add it as an optional link in `content/projects.ts`. Do not add it until it exists.
- Avatar is the GitHub portrait (`public/avatar.png`). Swap if you want a different crop.
- DiskSense is public and recent. It was left out of featured work because the brief named four case studies. Easy to add as archive if you want.
- Companion X article for harness-from-scratch is still unpublished. The case study says so.

## Implementation notes

- Next.js 15.5 + React 19 + Tailwind v4 + pnpm. Render start binds `0.0.0.0:$PORT`.
- Content is typed TypeScript, not MDX. Same edit surface, fewer moving parts.
- `pnpm create next-app@15` scaffolded the toolchain. All UI, copy, and design tokens were written for this repo.
- Stills are vendored under `public/projects/` so the site does not hotlink GitHub raw assets.
