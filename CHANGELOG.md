# CHANGELOG.md — Meer Foundation Website

All notable changes to this project will be documented in this file.

Format: [Keep a Changelog](https://keepachangelog.com/)

---

## [2026-07-08] — Fix Menu Structure, Dark Mode Colors, Broken Pages

### Fixed
- Restored correct menu structure across all 47 pages: About, Initiatives (4 sectors only: Education, Health, Environment, Livelihood), Research, Emerging, Impact, Get Involved, Contact
- Moved Donate CTA button to far-right of header with correct visual placement
- Added theme toggle (☾/☀) positioned between Contact link and Donate button
- Fixed dark mode color rendering: replaced all hardcoded RGBA values in `content-compat.css` with `color-mix(in srgb, var(--primary/secondary/accent) N%, transparent)` so opacity-based colors adapt correctly when dark theme is active
- Fixed JS syntax error in `main.js` (extra closing parenthesis on `matchMedia` call)
- Corrected mobile menu structure to include all 7 nav links and Donate CTA
- Audited 2,946 internal links — zero broken page links

### Changed
- Rebuilt `scratch/fix-header.js` script to bulk-update all 47 HTML files simultaneously with correct header and mobile menu HTML
- `content-compat.css`: 77 RGBA color definitions updated to CSS `color-mix()` for dynamic dark mode support

---

## [2026-07-06] — Website Restructure (Directory-Based URLs)


### Added
- Created 40+ directory-based pages (e.g., \`/about/our-story/index.html\`)
- Created \`assets/js/components-sub.js\` for nested route injection (later merged into \`components.js\`)

### Changed
- Converted flat HTML structure to directory-based routing
- Updated \`assets/js/components.js\` to use root-relative paths for all assets and links
- Updated \`sitemap.xml\` with new directory-based URLs
- Implemented HTML \`<meta http-equiv="refresh">\` redirects in 30+ legacy flat `.html` files in root to preserve SEO backlinks
- Added \`loading="lazy"\` attributes to all non-critical images across the site for better Core Web Vitals
- Injected global \`Organization\` JSON-LD schema into \`assets/js/components.js\` for enhanced SEO

### Files Modified
- \`assets/js/components.js\`
- \`sitemap.xml\`
- Assorted HTML pages created in directories

---

## [2026-06-27] — Project Memory & Backup System

### Added
- `.agents/AGENTS.md` — AI agent instructions and project context
- `ARCHITECTURE.md` — System architecture documentation
- `UI_GUIDELINES.md` — Complete design token reference
- `WORKFLOW.md` — Development workflow guide
- `DECISIONS.md` — Architecture Decision Records (8 ADRs)
- `CODING_STANDARD.md` — HTML/CSS/JS coding conventions
- `CURRENT_TASK.md` — Living task tracker
- `CHANGELOG.md` — This changelog file
- `ROADMAP.md` — Future development plans
- `backup-config.json` — Backup system configuration
- `backup.ps1` — PowerShell automated backup script
- `backups/` — Backup storage directory
- `.git/hooks/pre-commit` — Auto-backup Git hook

### Changed
- `README.md` — Added project memory system and backup documentation sections

---

## Template

```markdown
## [YYYY-MM-DD] — Brief Title

### Added
- New files or features

### Changed
- Modifications to existing files

### Fixed
- Bug fixes

### Removed
- Deleted files or deprecated features

### Files Modified
- List of specific files changed
```
