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
- Change colors, fonts, or design tokens without explicit approval
- Add any CSS/JS framework (no Tailwind, Bootstrap, React, etc.)
- Modify the quarterly auto-timeline logic without understanding `data/config.json`
- Push directly to `main` without a backup
- Remove or alter existing comments/docstrings unrelated to your change
- Delete any HTML page without explicit instruction

### DO — Always
- Read `CURRENT_TASK.md` before starting any work
- Follow the design tokens in `assets/css/style.css` `:root { }` block
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Maintain accessibility: `aria-label`, `role` attributes, `:focus-visible` styles
- Enforce Image Standards: `.webp` only, max 50 chars, lowercase, no special chars
- Update `CHANGELOG.md` after every change
- Test on mobile viewport (375px) before committing

---

## File Structure Overview

```
Meer Foundation Website/
├── index.html                    # Homepage
├── about.html                    # About / Founder story
├── initiatives.html              # All initiatives overview
├── bolti-nadi.html               # Bolti Nadi river conservation
├── farmours.html                 # Farmours initiative
├── prayaas.html                  # Prayaas initiative
├── yoga-kutumb.html              # Yoga Kutumb initiative
├── social-heritage-walk.html     # Social Heritage Walk
├── rivers.html                   # Rivers of Chhattisgarh
├── rivers-chhattisgarh.html      # Detailed river profiles
├── impact.html                   # Impact metrics
├── contact.html                  # Contact page
├── donate.html                   # Donation page
├── get-involved.html             # Volunteer / participate
├── ijmeer-journal.html           # IJMEER journal landing
├── journal.html                  # Journal archive
├── editorial-board.html          # Editorial board
├── peer-review.html              # Peer review process
├── archive.html                  # Full archive
├── 404.html                      # Error page
├── assets/
│   ├── css/
│   │   ├── style.css             # Primary design system (2050 lines)
│   │   ├── premium.css           # Premium component styles
│   │   ├── main.css              # Legacy/supplementary styles
│   │   └── styles.css            # Additional styles
│   ├── js/
│   │   ├── core.js               # Navigation, dark mode, scroll, reveal
│   │   ├── components.js         # Header/footer injection
│   │   ├── main.js               # Page-specific init
│   │   ├── timeline.js           # Quarterly auto-timeline
│   │   └── papers.js             # Paper listing/filtering
│   └── images/                   # All image assets
├── data/
│   ├── config.json               # Site/journal configuration
│   ├── papers.json               # Published papers
│   ├── issues.json               # Journal issues
│   └── editors.json              # Editorial board data
├── CNAME                         # GitHub Pages domain
├── manifest.json                 # PWA manifest
├── robots.txt                    # Search engine rules
├── sitemap.xml                   # XML sitemap
└── favicon.ico / favicon.svg     # Favicons
```

---

## Design System Reference

- **Primary Color**: `#1e40af` (used in hero, stats, accents)
- **Accent Color**: `#047857` (emerald green for CTAs)
- **Brand Gradient**: `linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)`
- **Hero Gradient**: `linear-gradient(270deg, #1e40af, #047857, #1e40af)`
- **Font Sans**: `'Inter', -apple-system, sans-serif`
- **Font Serif**: `'Playfair Display', Georgia, serif`
- **Max Width**: `1300px`
- **Header Height**: `78px`

See `UI_GUIDELINES.md` for complete design token reference.

---

## Commit Convention

```
[TYPE] Description

TYPE: FEATURE | FIX | SEO | CONTENT | DESIGN | REFACTOR | BACKUP
```

---

## Key Contacts

- **Email**: ijmeerj@gmail.com / editor@ijmeer.com
- **WhatsApp**: +91 98261 21177
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
