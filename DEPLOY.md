# Deploying chainfoundry.dev

Target: **Netlify**. The site is a Next.js 14 App Router app with one server
route (`/api/subscribe`) that sends a SendGrid email to `info@ai2innovate.io`
every time someone subscribes.

---

## 1. One-time Netlify setup

1. Push this repo to GitHub.
2. In Netlify → **Add new site → Import from Git** → pick the repo.
3. Build settings — **leave them blank**. [`netlify.toml`](netlify.toml)
   tells Netlify everything it needs:
   - `command = "npm run build"`
   - `publish = ".next"`
   - Plugin: `@netlify/plugin-nextjs` (auto-installed)
4. Click **Deploy site**. First build takes ~2 min.

---

## 2. Environment variables (critical)

In Netlify → **Site settings → Environment variables → Add a variable**:

| Key | Value |
| --- | --- |
| `SENDGRID_API_KEY` | Your **newly generated** SendGrid key (starts with `SG.`) |

**Do not** paste the key anywhere else — not in Slack, not in the repo, not in
commit messages. If it ever leaks, rotate it immediately in SendGrid.

> Reminder: the key you shared in chat earlier is compromised — delete it in
> SendGrid (Settings → API Keys → trash can) and issue a new one.

### SendGrid sender verification

SendGrid will refuse to send until the sender address is verified. Two options:

- **Single Sender Verification** — quick. In SendGrid → Sender Authentication
  → Single Sender Verification → add `info@ai2innovate.io` → click the
  confirmation email.
- **Domain Authentication** (recommended long-term) — in SendGrid → Sender
  Authentication → Domain → add `ai2innovate.io`, add the DNS records they
  give you, done. Also unlocks better deliverability.

---

## 3. Custom domain (chainfoundry.dev)

In Netlify → **Domain management → Add custom domain** → `chainfoundry.dev`.

At your DNS provider, either:

- **If Netlify manages your DNS** — just accept their nameservers.
- **If your DNS stays where it is** — add these records for `chainfoundry.dev`:
  - `A` record at apex → `75.2.60.5` (Netlify's load balancer)
  - `CNAME` at `www` → `<your-netlify-subdomain>.netlify.app`

Netlify issues a Let's Encrypt cert automatically once DNS resolves.

---

## 4. Local development

```bash
cp .env.example .env.local          # then paste your SendGrid key into .env.local
npm install
npm run dev                         # http://localhost:3000
```

To smoke-test the subscribe API locally:

```bash
curl -X POST http://localhost:3000/api/subscribe/ \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
# → {"ok":true} if SENDGRID_API_KEY is set
# → {"error":"not_configured"} with status 503 if missing (form falls back to mailto)
```

Note the trailing slash on `/api/subscribe/` — `trailingSlash: true` in
`next.config.mjs` means the canonical URL ends with `/`.

---

## 5. What happens when the key is missing

The site still works. The `NewsletterForm` component detects a 503 /
network-error response and opens a `mailto:info@ai2innovate.io` link as a
fallback — the user's own email client drafts the subscribe message. No data is
lost, the UX is only one extra click. This is also what happens if you ever
revert to a pure static host without API routes.

---

## 6. Rolling the SendGrid key

1. SendGrid → Settings → API Keys → **delete** the old key.
2. Create new key — **Mail Send → Full Access** scope only.
3. Netlify → Environment variables → edit `SENDGRID_API_KEY` → paste new value.
4. Netlify → Deploys → **Trigger deploy** → clear cache and deploy.

The old key is dead within seconds of deletion in SendGrid.

---

## 7. Repo layout

```text
chainfoundry.dev/
├── src/                         # Next.js app
│   ├── app/                     # routes (pages + /api/subscribe)
│   ├── components/              # shared UI
│   └── content/                 # posts + use-case data
├── public/                      # static assets (favicon, etc.)
├── netlify.toml                 # Netlify build + plugin config
├── next.config.mjs
├── tailwind.config.ts
├── package.json
├── .env.example                 # copy to .env.local and set SENDGRID_API_KEY
├── DEPLOY.md                    # this file
└── CHAINFOUNDRY-WEBSITE-CONTENT.md   # source spec
```
