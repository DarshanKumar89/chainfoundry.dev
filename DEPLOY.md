# Deploying chainfoundry.dev

Target: **Netlify**. The site is a Next.js 14 App Router app with one server
route (`/api/subscribe`) that sends a Microsoft 365 SMTP email to
`info@ai2innovate.io` every time someone subscribes.

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

In Netlify → **Site settings → Environment variables → Add a variable**.
Six variables, all required:

| Key | Value |
| --- | --- |
| `SMTP_HOST` | `smtp.office365.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `info@ai2innovate.io` |
| `SMTP_PASS` | the mailbox password (or an App Password if MFA is on) |
| `MAIL_TO` | `info@ai2innovate.io` |
| `MAIL_FROM` | `info@ai2innovate.io` |

After adding them, **Deploys → Trigger deploy → Clear cache and deploy** so the
new variables land on the function.

> The old `SENDGRID_API_KEY` is no longer used. If it's still present in
> Netlify, delete it — the code path is gone.

---

## 3. Enable SMTP AUTH on the Microsoft 365 mailbox

Microsoft disables authenticated SMTP by default on new tenants. Enable it on
the send-as account only:

1. **Microsoft 365 admin center** → Users → Active users → click `info@ai2innovate.io`.
2. **Mail** tab → **Manage email apps** → tick **"Authenticated SMTP"** → Save.

### If MFA is enforced on the mailbox

SMTP AUTH with MFA requires an **App Password** (modern auth doesn't support
basic SMTP). Create one:

1. `info@ai2innovate.io` signs in → **My account** → **Security info** → **Add
   method** → **App password**.
2. Copy the generated 16-character password.
3. Paste that into Netlify as `SMTP_PASS` (not the regular account password).

### Alternative if App Password is blocked by tenant policy

Use OAuth2 with Microsoft Graph instead — the code path would change. Tell me
if your tenant is locked down and I'll switch the implementation.

---

## 4. Custom domain (chainfoundry.dev)

In Netlify → **Domain management → Add custom domain** → `chainfoundry.dev`.

At your DNS provider, either:

- **If Netlify manages your DNS** — just accept their nameservers.
- **If your DNS stays where it is** — add these records for `chainfoundry.dev`:
  - `A` record at apex → `75.2.60.5` (Netlify's load balancer)
  - `CNAME` at `www` → `<your-netlify-subdomain>.netlify.app`

Netlify issues a Let's Encrypt cert automatically once DNS resolves.

---

## 5. Local development

```bash
cp .env.example .env.local          # fill in SMTP_PASS
npm install
npm run dev                         # http://localhost:3000
```

Smoke-test the subscribe API:

```bash
curl -X POST http://localhost:3000/api/subscribe/ \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
# → {"ok":true} if all 6 env vars are set
# → {"error":"not_configured"} with status 503 if any are missing
# → {"error":"send_failed","detail":"..."} if SMTP auth or network failed
```

Note the trailing slash on `/api/subscribe/` — `trailingSlash: true` in
`next.config.mjs` means the canonical URL ends with `/`.

---

## 6. What happens if config is missing

The site still works. `NewsletterForm` detects a 503 / network-error response
and opens a `mailto:info@ai2innovate.io` link as a fallback — the user's own
email client drafts the subscribe message. No data is lost, the UX is one
extra click.

---

## 7. Rolling the SMTP password

1. In Microsoft 365 → reset the mailbox password (or revoke the old App
   Password and generate a new one).
2. Netlify → Environment variables → edit `SMTP_PASS` → paste new value.
3. Netlify → Deploys → **Trigger deploy** → clear cache and deploy.

---

## 8. Repo layout

```text
chainfoundry.dev/
├── src/
│   ├── app/                     # routes (pages + /api/subscribe)
│   ├── components/              # shared UI
│   ├── content/                 # posts + use-case data
│   └── lib/                     # SEO schema helpers + link constants
├── public/                      # favicon, llms.txt
├── netlify.toml                 # Netlify build + plugin config
├── next.config.mjs
├── tailwind.config.ts
├── package.json
├── .env.example                 # copy to .env.local and set SMTP_PASS
├── DEPLOY.md                    # this file
└── CHAINFOUNDRY-WEBSITE-CONTENT.md   # source spec
```
