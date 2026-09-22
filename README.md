# Ashish P. Portfolio

Personal site for [Ashish P](https://github.com/ashishpatill): twelve years of iOS craft, now building coding-agent harnesses and independent design tooling in Mumbai.

Live content is typed in `content/`. Featured work links only to public GitHub repositories. There is no invented product URL, user count, or SaaS claim.

The design is original. It is inspired by the restraint of editorial one-pagers (Brittany Chiang, Lee Robinson, Rauno), not a fork of `bchiang7/v4` or any template.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- `next/font` (Newsreader + Geist)
- Static where possible, Vercel-friendly

## Run locally

You need Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm build
pnpm start
```

## Edit content

| File | What it holds |
| --- | --- |
| `content/site.ts` | Name, headline, about, contact, socials, site URL |
| `content/experience.ts` | Honest timeline |
| `content/projects.ts` | Featured case studies plus archive links |

Case study routes are generated from featured slugs at `/work/[slug]`.

Set `NEXT_PUBLIC_SITE_URL` to the canonical host before you care about sitemap, robots, and Open Graph absolute URLs. Local fallback is `https://ashishpatill.github.io/portfolio`.

## Deploy

**Vercel (preferred).** Import this repo, framework preset Next.js, install command `pnpm install`, build command `pnpm build`. Add `NEXT_PUBLIC_SITE_URL` as the production origin (your Vercel domain or a custom domain).

**GitHub Pages.** This app uses App Router features (`opengraph-image`, `icon`) that assume a Node server. Static `output: "export"` is possible later, but you would drop or replace generated OG/icon routes. Vercel is the intended host.

## Featured work

1. [Tell Proof](https://github.com/ashishpatill/tell-proof). Independent design layer for Cursor / agent harnesses. Open source, local dogfood.
2. [harness-from-scratch](https://github.com/ashishpatill/harness-from-scratch). Teaching harness. Allow, write, exact-byte proof.
3. [grok-kit](https://github.com/ashishpatill/grok-kit). Personal Cursor + Grok Build kit. Consent-gated. MIT.
4. [Nagrik Saathi](https://github.com/ashishpatill/nagrik-saathi). Safe public-document copilot. Explains. Does not file.

See [BUILD-NOTES.md](./BUILD-NOTES.md) for design choices and content gaps.

## License

[MIT](./LICENSE) © 2026 Ashish P
