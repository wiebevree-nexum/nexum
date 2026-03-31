# Nexum Demo Website — Claude Context

## What is Nexum?

**Nexum Real Estate B.V.** is a Dutch proptech/fintech company building the national digital transaction infrastructure for the Dutch residential housing market. It is **not** a listing platform — it sits at the transaction layer, connecting all stakeholders in one integrated, end-to-end digital rail from bidding to deed transfer.

Think of it as: *the Firm24 for property transactions* — transforming a fragmented, analog, opaque process into a transparent, digitized, and standardized national infrastructure.

**Tagline:** "De vastgoedmarkt, eerlijk en inzichtelijk."
**Five stakeholders:** sellers, buyers, realtors, banks, notaries

---

## Business Units → Portals

| Business Unit | Portal File | Description |
|---|---|---|
| **Nexum Exchange** | `consumer.html` | Marketplace & bidding engine. Transparent, auditable bidding with immutable logs. Digital Property Token (blockchain-anchored). AI-powered Agent Accuracy Index. |
| **Nexum Finance** | `banking.html` | Mortgage auction platform (Time-to-Yes <5 min), KYC/verification, centralized escrow rail. DNB Payment Institution license in progress. |
| **Nexum Notary** | `notary.html` | Deed automation SaaS. Auto-populates templates, KNB/Kadaster integrations, WWFT/AML compliance. Reduces admin work 70%. |
| **Nexum IP & Data** | (cross-cutting) | Core AI engine and proprietary data infrastructure. Primary long-term value driver. |
| **Realtor module** | `realtor.html` | CRM integration (Realworks), lead generation, bidding analytics, Agent Accuracy Index. |

---

## Tone & Communication Rules

- **Authoritative and institutional** — Nexum is infrastructure, not a startup. Language should reflect gravitas and systemic thinking.
- **Clear and direct** — audience is banks, regulators, institutional investors, real estate professionals. No oversimplification.
- **Dutch market-aware** — reference Dutch institutions naturally and accurately: DNB, AFM, Kadaster, BKR, BRP, UWV, Realworks.
- **Stakeholder-centric** — all five stakeholders benefit. Always frame as win-win, not zero-sum.
- **Vision-driven** — Nexum's goal is to be "too important to ignore" for government and institutional capital.
- **Default language: Dutch** for all UI text. English for international/investor contexts only.

## Key Differentiators (for UI copy & messaging)

1. Infrastructure, not a marketplace — the rail that others run on
2. Does not compete with Funda — captures value at the transaction layer Funda cannot touch
3. DNB licensing pathway creates a regulatory moat that is very hard to replicate
4. All five stakeholders gain measurably — this is not a zero-sum play
5. Blockchain-anchored Digital Property Token creates irreplaceable, compounding data value over time

---

## Tech Stack

- Pure HTML + Tailwind CSS (CDN) + Vanilla JS — **no build step**
- Libraries (all CDN): Chart.js, Leaflet, Font Awesome
- Dev server: `npx serve` on port **8787** (configured in `.claude/launch.json`)

---

## File Structure

| File | Purpose | Accent Color |
|---|---|---|
| `index.html` | Landing page — portal selector | — |
| `consumer.html` | Consumer portal (Nexum Exchange) | Teal `#14b8a6` |
| `banking.html` | Bank partner backend (Nexum Finance) | Blue `#3b82f6` |
| `notary.html` | Notary backend (Nexum Notary) | Indigo `#6366f1` |
| `realtor.html` | Realtor backend | Blue `#3b82f6` |
| `Nexum_*.html` / `Nexum_demo(1).html` | Legacy originals — **do not edit** | — |

---

## GitHub & Hosting

- Remote: `https://github.com/wiebevree-nexum/nexum`
- Default branch: `main`
- Hosting: GitHub Pages served from `main`

---

## Brand

- Always invoke the `anthropic-skills:nexum-brand-guidelines` skill **before** making any UI, copy, or design changes.
- Fonts: Inter / Poppins

---

## Feature Development Workflow (CI/CD)

Use the `/new-feature` skill for all changes. It handles:

1. Ask for feature name → slugify → create `feature/<slug>` branch
2. Ask for feature description → implement changes
3. Local preview test → screenshot → console error check
4. Present findings to user → **wait for explicit approval**
5. Squash-merge to `main` → push → delete feature branch

**Rules:**
- Never merge without explicit user approval
- Commit convention: `feat: <description>` / `fix: <description>`
- Always test in preview before merging

---

## Conventions

- All UI text defaults to **Dutch**
- Never edit legacy files (`Nexum_*.html`, `Nexum_demo(1).html`)
- No build tools — keep it pure HTML/CSS/JS
