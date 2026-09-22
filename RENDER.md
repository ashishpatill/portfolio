# Deploy on Render

Node web service. Not a static export. `next start` binds `0.0.0.0:$PORT`.

Free plan is fine. The service sleeps after 15 minutes idle and takes a short cold start on the next request.

## Dashboard settings

Create a **Web Service** from [https://github.com/ashishpatill/portfolio](https://github.com/ashishpatill/portfolio).

| Field | Value |
| --- | --- |
| Runtime | Node |
| Branch | `main` |
| Build command | `pnpm install && pnpm build` |
| Start command | `pnpm start` |
| Instance | Free |
| Health check path | `/` |

Render reads `pnpm-lock.yaml` and `.node-version` (Node 22). No Docker file.

## Environment

Render injects `PORT`. Do not hardcode a port.

After the first deploy, copy the `*.onrender.com` origin Render gives you (do not guess it) and set:

| Key | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | that origin, including `https://`, no trailing slash |

Then **Manual Deploy → Clear build cache & deploy** so sitemap, robots, and Open Graph pick up the origin. `NEXT_PUBLIC_*` is baked in at build time.

## Local check that matches Render

```bash
pnpm install
pnpm build
PORT=4000 pnpm start
```

The process must listen on `0.0.0.0:4000`. Open `http://127.0.0.1:4000`.

## Optional Blueprint

`render.yaml` in this repo matches the table above. In the Render dashboard: New → Blueprint → this repo. Still set `NEXT_PUBLIC_SITE_URL` after you have a real origin.

## Not this

Do not use Render Static Site / `publishPath: out` for this app. Open Graph and icon routes need the Node server. There is no `output: 'export'`.
