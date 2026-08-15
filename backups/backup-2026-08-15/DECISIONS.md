# DECISIONS.md — Architecture Decision Records

This document records key architectural decisions for the Meer Foundation website. Each decision is numbered, dated, and includes context and rationale.

---

## ADR-001: Static HTML over JavaScript Frameworks

- **Date**: 2025 (project inception)
- **Status**: Accepted
- **Context**: The site needs to be fast, SEO-friendly, and maintainable by a small team. Content changes are infrequent.
- **Decision**: Use static HTML pages with vanilla CSS and JavaScript. No React, Vue, Next.js, or other frameworks.
- **Rationale**:
  - Zero build step = zero build complexity
  - GitHub Pages serves static files instantly
  - SEO: full HTML in source, no client-side rendering delays
  - No dependency vulnerabilities to manage
  - Any developer can understand and edit the code
- **Consequences**: Shared components (header/footer) must be injected via JS (`components.js`), leading to a brief flash before injection completes.

---

## ADR-002: GitHub Pages for Hosting

- **Date**: 2025 (project inception)
- **Status**: Accepted
- **Context**: Need free, reliable hosting with custom domain support and SSL.
- **Decision**: Host on GitHub Pages with custom domain `meerfoundation.co.in`.
- **Rationale**:
  - Free tier is sufficient for a static site
  - Automatic SSL via GitHub
  - Built-in CDN (Fastly)
  - Deployment = `git push`
  - Version control and hosting unified
- **Consequences**: No server-side processing. No dynamic routes. No database.

---

## ADR-003: CSS Custom Properties as Design Tokens

- **Date**: 2025
- **Status**: Accepted
- **Context**: Need a consistent design system across 50+ pages.
- **Decision**: Define all colors, spacing, typography, shadows, and transitions as CSS custom properties in `:root { }` of `style.css`.
- **Rationale**:
  - Single source of truth for all design values
  - Easy to update globally
  - Native browser support, no preprocessor needed
  - Enables future dark mode via token override
- **Consequences**: All new styles must use tokens, not hardcoded values.

---

## ADR-004: Component Injection via JavaScript

- **Date**: 2025
- **Status**: Accepted
- **Context**: 50+ HTML pages all share the same header and footer. Maintaining these manually across all files is impractical.
- **Decision**: Use `components.js` to inject header and footer HTML into placeholder `<div>` elements on each page.
- **Rationale**:
  - Single source of truth for navigation structure
  - Adding a new nav item updates all pages automatically
  - No server-side includes needed
- **Consequences**:
  - Header/footer briefly absent during initial page load (FOUC)
  - JavaScript must be enabled for navigation to appear
  - SEO crawlers handle this well (Googlebot executes JS)

---

## ADR-005: Quarterly Auto-Timeline

- **Date**: 2025
- **Status**: Accepted
- **Context**: The IJMEER journal operates on a quarterly publication schedule. Deadlines and statuses need to update automatically.
- **Decision**: Define quarter schedules in `data/config.json` and compute all deadlines/statuses client-side via `timeline.js`.
- **Rationale**:
  - No manual date updates ever needed
  - Submission status (Open/Late/Closed) updates in real-time
  - Countdown timers compute from current date
  - Late fee warnings appear automatically
- **Consequences**: Quarterly schedule changes require editing `config.json`, not JavaScript.

---

## ADR-006: Google Fonts over Self-Hosted

- **Date**: 2025
- **Status**: Accepted
- **Context**: Typography uses Inter and Playfair Display.
- **Decision**: Load fonts via Google Fonts CDN (`@import` in CSS).
- **Rationale**:
  - Fast CDN delivery
  - High cache hit rate (many sites use the same fonts)
  - Automatic subsetting and format optimization
  - Zero maintenance
- **Consequences**: External dependency. Fonts won't load if Google Fonts CDN is down (extremely rare). Slight render-blocking on first load.

---

## ADR-007: Razorpay for Donations

- **Date**: 2025
- **Status**: Accepted
- **Context**: Need to accept donations from Indian donors (primarily UPI/card).
- **Decision**: Use Razorpay payment links (external redirect).
- **Rationale**:
  - Indian payment infrastructure (UPI, cards, wallets)
  - No server-side integration needed (external payment page)
  - PCI compliance handled by Razorpay
- **Consequences**: Donation flow redirects away from the website.

---

## ADR-008: Project Memory System

- **Date**: 2026-06-27
- **Status**: Accepted
- **Context**: Multiple AI agents and developers need consistent context about the project. Knowledge gets lost between sessions.
- **Decision**: Create a set of standardized documentation files (`AGENTS.md`, `ARCHITECTURE.md`, `UI_GUIDELINES.md`, etc.) that serve as persistent project memory.
- **Rationale**:
  - AI agents can read these files at the start of every session
  - Humans get onboarding documentation for free
  - Decisions are recorded and not repeated
  - Workflow is standardized
- **Consequences**: Documentation must be maintained alongside code changes.

---

## Template for New Decisions

```markdown
## ADR-NNN: Title

- **Date**: YYYY-MM-DD
- **Status**: Proposed | Accepted | Deprecated | Superseded
- **Context**: What is the situation that requires a decision?
- **Decision**: What was decided?
- **Rationale**: Why was this decision made?
- **Consequences**: What are the trade-offs?
```
