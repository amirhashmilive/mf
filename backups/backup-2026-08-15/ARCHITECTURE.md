# ARCHITECTURE.md — Meer Foundation Website

## Overview

The Meer Foundation website is a **static site** (no build step, no server-side rendering) deployed on **GitHub Pages**. All pages are standalone HTML files that share a common design system via CSS and inject shared components (header/footer) via JavaScript.

---

## Architecture Diagram

```
┌──────────────────────────────────────────────────────────┐
│                    GitHub Pages (CDN)                     │
│                  meerfoundation.co.in                     │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────┐   ┌─────────────┐   ┌──────────────┐  │
│  │  HTML Pages  │   │   assets/    │   │    data/      │  │
│  │  (50+ pages) │   │  css/ js/    │   │  JSON files   │  │
│  │              │   │  images/     │   │  (config,     │  │
│  │  Each page   │◄──┤             │   │   papers,     │  │
│  │  loads core  │   │  Shared      │   │   issues,     │  │
│  │  JS + CSS    │   │  resources   │   │   editors)    │  │
│  └─────────────┘   └─────────────┘   └──────────────┘  │
│                                                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  Google Fonts (CDN)    │  Razorpay (Payments)       │ │
│  │  GTM + GA4 (Analytics) │  WhatsApp (Community)      │ │
│  └─────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## CSS Architecture

The CSS is organized in layers, loaded in this order:

| File            | Size   | Purpose                                              |
|-----------------|--------|------------------------------------------------------|
| `style.css`     | ~80 KB | **Primary design system**: tokens, reset, layout, components, responsive, dark mode |
| `premium.css`   | ~24 KB | Premium/enhanced component styles (glassmorphism, animations) |
| `main.css`      | ~46 KB | Legacy/supplementary styles, page-specific overrides  |
| `styles.css`    | ~6 KB  | Additional utility styles                             |

### CSS Token System

All design tokens are declared in `style.css` under `:root { }` (lines 11–106). Categories:

- **Core palette**: `--navy`, `--blue`, `--violet`, `--gold`, `--emerald`, `--rose`, `--teal`, `--indigo`
- **Surfaces**: `--bg` through `--bg-4`, `--glass` variants
- **Text**: `--text-1` (darkest) through `--text-5` (lightest)
- **Borders**: `--border` through `--border-3`
- **Shadows**: `--sh-xs` through `--sh-xl`, glow variants
- **Gradients**: `--grad-brand`, `--grad-navy`, `--grad-gold`, etc.
- **Layout**: `--max-w: 1300px`, `--header-h: 78px`
- **Radius**: `--r-xs` (4px) through `--r-full` (9999px)
- **Transitions**: `--t-fast` (0.15s), `--t` (0.25s), `--t-slow` (0.45s), `--t-spring` (0.4s)
- **Typography**: `--font-sans`, `--font-serif`, `--font-mono`
- **Z-index**: `--z-elevated` (10) through `--z-progress` (9999)

---

## JavaScript Architecture

All scripts are vanilla ES6+, loaded in order:

| File             | Size   | Purpose                                            |
|------------------|--------|----------------------------------------------------|
| `core.js`        | ~7.5 KB| Navigation, scroll effects, reveal animations, dark mode, mobile menu |
| `components.js`  | ~11 KB | Header/footer HTML injection into all pages        |
| `timeline.js`    | ~4.7 KB| Quarterly auto-timeline (reads `data/config.json`) |
| `papers.js`      | ~2.5 KB| Paper listing, filtering, search                   |
| `main.js`        | ~2.5 KB| Page initialization, component wiring              |

### Key Patterns

1. **IIFE pattern**: All modules wrapped in `(function() { 'use strict'; ... })();`
2. **Component injection**: `components.js` injects shared header/footer via `innerHTML`
3. **IntersectionObserver**: Used for scroll-reveal animations (`.reveal` → `.visible`)
4. **Client-side data**: JSON files fetched and rendered dynamically (papers, issues)
5. **No build step**: No bundler, no transpilation — files served as-is

---

## Data Architecture

```
data/
├── config.json    # Site-wide configuration
│   ├── journal.*  # Journal metadata (ISSN, frequency, contacts)
│   ├── submission.*  # Submission form URLs, emails
│   ├── quarters.* # Q1–Q4 deadline/publication schedule
│   ├── fees.*     # APC, late fees, payment URLs
│   ├── analytics.*# GTM/GA IDs
│   └── social_media.* # Social profile URLs
├── papers.json    # Array of published papers (id, title, authors, year, volume, issue, subject, pdf_url, abstract)
├── issues.json    # Array of journal issues (id, volume, issue, quarter, year, title, status, papers[])
└── editors.json   # Editorial board member data
```

---

## Deployment

| Item            | Value                                    |
|-----------------|------------------------------------------|
| Host            | GitHub Pages                             |
| Branch          | `main`                                   |
| Domain          | `meerfoundation.co.in` (via CNAME)       |
| SSL             | Automatic (GitHub-managed)               |
| CDN             | GitHub's Fastly CDN                      |
| Build           | None (static files served directly)      |

### Deploy Process
1. Push to `main` branch
2. GitHub Pages automatically deploys
3. Changes live within ~1–2 minutes

---

## External Dependencies

| Service          | Purpose                    | Integration Point        |
|------------------|----------------------------|--------------------------|
| Google Fonts     | Typography (Inter, Playfair)| CSS `@import` in style.css |
| Google Tag Manager| Analytics tracking         | `data/config.json` → GTM ID |
| Google Analytics | Traffic analytics           | `data/config.json` → GA ID  |
| Razorpay         | Donation payments           | External link in components.js |
| WhatsApp         | Community chat              | External link             |

---

## Page Categories

### Foundation Pages (meerfoundation.co.in)
Homepage, About, Initiatives (Bolti Nadi, Farmours, Prayaas, Yoga Kutumb, Social Heritage Walk), Impact, Rivers, Contact, Donate, Get Involved, Volunteer

### Journal Pages (IJMEER)
Journal landing, Archive, Editorial Board, Peer Review, Ethics, Open Access, Submission, Authors, Citations, Policies, Rights & Permissions

### Utility Pages
404, Privacy Policy, Terms, Sitemap, Refund/Cancellation
