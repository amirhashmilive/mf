# AGENTS.md — Meer Foundation Website

## Project Identity

- **Name**: Meer Foundation Website
- **Domain**: meerfoundation.co.in
- **Repository**: https://github.com/amirhashmilive/mf
- **Publisher**: Meer Foundation — Non-profit NGO, Chhattisgarh, India (est. 2011)
- **Mission**: Sustainable community development, river conservation, education, and rural empowerment

---

## Tech Stack

| Layer       | Technology                               |
|-------------|------------------------------------------|
| Markup      | HTML5 (semantic)                         |
| Styling     | Vanilla CSS3 (custom properties, Grid, Flexbox) |
| JavaScript  | ES6+ (vanilla, no frameworks)            |
| Fonts       | Inter, Playfair Display, JetBrains Mono (Google Fonts) |
| Hosting     | GitHub Pages (static site)               |
| Analytics   | Google Tag Manager + GA4                 |
| Payments    | Razorpay (donation links)                |

---

## Critical Rules

### DO NOT — Ever
- Add heavy external runtime frameworks (no React, Next.js, Vue, Angular runtime)
- Modify the quarterly auto-timeline logic without understanding `data/config.json`
- Push directly to `main` without a backup (`backup.ps1`)
- Remove or alter existing comments/docstrings unrelated to your change
- Delete any HTML page without explicit instruction

### DO — Always
- Prioritize modern, high-contrast, professional, and accessible user experience
- Maintain the Contemporary Glass Cards UI design system (`assets/css/glass-ui.css`)
- Keep content concise, readable, and structured into scannable cards and metric chips
- Read `CURRENT_TASK.md` before starting any work
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Maintain accessibility: `aria-label`, `role` attributes, `:focus-visible` styles
- Enforce Image Standards: `.webp` only, max 50 chars, lowercase, no special chars
- Update `CHANGELOG.md` after every change
- Test on mobile viewport (375px) before committing

---

## File Structure Overview

```
Meer Foundation Website/
├── index.html                    # Homepage (Contemporary Glass UI)
├── 404.html                      # Error page (Glass UI)
├── about/                        # About section
│   ├── index.html                # About overview
│   ├── our-story/index.html      # Founder story & Sakri expedition
│   ├── five-pillars/index.html   # AEIOM architecture
│   └── annual-reports/index.html # 15-year audited filings
├── initiatives/                  # Initiatives section
│   ├── index.html                # Initiatives overview
│   ├── bolti-nadi/index.html     # Bolti Nadi river rejuvenation
│   ├── education/index.html      # Prayaas & EduSuTo education hub
│   ├── health/index.html         # Yoga Kutumb health hub
│   └── livelihood/index.html     # Farmours livelihood hub
├── research/                     # Research & publications
├── impact/                       # Impact metrics & district profiles
├── get-involved/                 # Volunteer, CSR & donation portal
├── emerging/                     # Community radio & media gallery
├── contact/                      # Contact desk & enquiry dispatch
├── legal/                        # Compliance & governance policies
├── assets/
│   ├── css/
│   │   ├── glass-ui.css          # Contemporary Glass Cards UI Design System
│   │   ├── style.css             # Base styles & variables
│   │   └── content-compat.css    # Supplemental utility overrides
│   ├── js/                       # Vanilla ES6+ modules
│   └── images/                   # Optimized .webp visual assets
└── data/                         # Config & structured datasets
```

---

## Design System Reference (Contemporary Glass Cards UI)

- **Design Philosophy**: Ultra-modern, frosted glass cards aesthetic with high-contrast Slate 900 typography, luminous white canvas, and vivid jewel accents.
- **Glass Tokens** (`assets/css/glass-ui.css`):
  - `--glass-canvas-bg`: `#F8FAFC` (with fixed subtle aurora mesh overlay)
  - `--glass-surface`: `rgba(255, 255, 255, 0.72)`
  - `--glass-border`: `rgba(255, 255, 255, 0.85)`
  - `--glass-border-subtle`: `rgba(226, 232, 240, 0.7)`
  - `--glass-blur`: `blur(20px)`
  - `--glass-shadow`: `0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.5)`
- **Typography & Colors**:
  - Ink: `--glass-ink: #0F172A;` / Muted: `--glass-ink-muted: #475569;`
  - Primary Brand Jewel: `--glass-primary: #059669;` (Forest Emerald)
  - Secondary Brand Jewel: `--glass-secondary: #0284C7;` (River Sky Blue)
  - Accent Jewel: `--glass-accent: #D97706;` (Warm Amber)
  - Fonts: `'Inter', sans-serif`, `'Fraunces', serif`, `'JetBrains Mono', monospace`
- **UI Freedom**: Agents have full flexibility to enhance, modernize, and polish the UI/UX without restrictive color or font locks. Keep designs clean, contemporary, and accessible.

---

## Commit Convention

```
[TYPE] Description

TYPE: FEATURE | FIX | SEO | CONTENT | DESIGN | REFACTOR | BACKUP
```

---

## Key Contacts

- **Email**: ijmeerj@gmail.com / editor@ijmeer.com / meercare@live.com
- **WhatsApp Community**: https://chat.whatsapp.com/EpVXdvvrbKc9HlyXKDfftB
- **Twitter**: @meerfoundations

---

## Related Documentation

| File                | Purpose                        |
|---------------------|--------------------------------|
| `ARCHITECTURE.md`   | System architecture details    |
| `UI_GUIDELINES.md`  | Design tokens & components     |
| `WORKFLOW.md`       | Development workflow           |
| `DECISIONS.md`      | Architecture decision records  |
| `CODING_STANDARD.md`| Code style guide               |
| `CURRENT_TASK.md`   | Current task in progress       |
| `CHANGELOG.md`      | Change history                 |
| `ROADMAP.md`        | Future plans                   |
