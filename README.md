# Ashish P. Portfolio

Personal site for [Ashish P](https://github.com/ashishpatill): twelve years of iOS craft, now building coding-agent harnesses and independent design tooling in Mumbai.

Live content is typed in `content/`. Featured work links only to public GitHub repositories. There is no invented product URL, user count, or SaaS claim.

The design is original. It is inspired by the restraint of editorial one-pagers (Brittany Chiang, Lee Robinson, Rauno), not a fork of `bchiang7/v4` or any template.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- `next/font` (Newsreader + Geist)
- Static pages where possible. Render Node web service (see [RENDER.md](./RENDER.md))

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

Set `NEXT_PUBLIC_SITE_URL` to the canonical host before you care about sitemap, robots, and Open Graph absolute URLs. Until then the fallback is `http://localhost:3000`.

## Deploy

**Render URL (placeholder):** add the `*.onrender.com` origin here after the first Web Service exists. Do not guess it.

**Render (intended host).** Node web service, branch `main`, free plan OK.

| Setting | Value |
| --- | --- |
| Runtime | Node |
| Build | `pnpm install && pnpm build` |
| Start | `pnpm start` |
| Bind | `0.0.0.0:$PORT` (Render sets `PORT`) |

Full click-path: [RENDER.md](./RENDER.md). After the first deploy, set `NEXT_PUBLIC_SITE_URL` to that origin and redeploy.

**Vercel.** Import this repo, framework preset Next.js, `pnpm install` / `pnpm build`. Same `NEXT_PUBLIC_SITE_URL` rule.

**GitHub Pages / Render Static Site.** Not used. This app keeps `opengraph-image` and `icon` on a Node server. There is no `output: "export"` and no `out/` publish path.

## Featured work

1. [Tell Proof](https://github.com/ashishpatill/tell-proof). Independent design layer for Cursor / agent harnesses. Open source, local dogfood.
2. [harness-from-scratch](https://github.com/ashishpatill/harness-from-scratch). Teaching harness. Allow, write, exact-byte proof.
3. [grok-kit](https://github.com/ashishpatill/grok-kit). Personal Cursor + Grok Build kit. Consent-gated. MIT.
4. [Nagrik Saathi](https://github.com/ashishpatill/nagrik-saathi). Safe public-document copilot. Explains. Does not file.

See [BUILD-NOTES.md](./BUILD-NOTES.md) for design choices and content gaps.

## License

[MIT](./LICENSE) © 2026 Ashish P
