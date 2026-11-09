# CHANGELOG.md — Meer Foundation Website

All notable changes to this project will be documented in this file.

## [2026-11-10] — Contemporary Glass Cards UI Site-Wide Transformation & Content Condensation

### Complete Modern Re-Architecture
- **Contemporary Frosted Glass Cards UI (`assets/css/glass-ui.css`)**:
  - Implemented an elegant, contemporary glass cards design system across all 49 pages.
  - Custom frosted glass tokens: `--glass-surface: rgba(255, 255, 255, 0.72);`, `--glass-blur: blur(20px);`, `--glass-border: rgba(255, 255, 255, 0.85);`, `--glass-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);`, with high-contrast Slate 900 typography.
  - Ambient fixed aurora mesh gradient overlay on `body` providing subtle background depth.
  - Floating frosted glass sticky navigation header with smooth transitions, rounded glass dropdowns, and responsive mobile drawers.
- **Site-Wide Content Condensation & Concise Rewriting**:
  - Rewrote legacy bloated walls of text across all section pages into clear, scannable, and modern cards.
  - Standardized structure for every subpage: Glass Hero with Aurora background + Pill Badge + 4 Metric Chips + 3 Highlights Glass Cards + Split-Panel Deep Dive / Impact Features + Accessible Vanilla JS Accordion FAQ + Glass CTA Banner + 4-Column Statutory Footer.
- **Total Quiz & Trivia Purge**:
  - Automated detection and removal of all 26 quiz/trivia sections (`id="quiz"`, `id="knowledge"`, "Test your gallery IQ", "Gallery recall") and duplicate floating sidebar buttons across 26 subpages (over 300 KB of clutter stripped).
  - Cleaned aside navigation bar to center content in an uncluttered `max-width: 1240px` view.
- **Complete End-to-End Page Transformation**:
  - **About Section**: `about/index.html`, `about/our-story/index.html` (Sakri expedition, 15 years ground truth), `about/five-pillars/index.html` (AEIOM model), `about/annual-reports/index.html` (15 years audited transparency & filings).
  - **Initiatives Section**: `initiatives/index.html`, `initiatives/bolti-nadi/index.html`, `initiatives/environment/index.html`, `initiatives/education/index.html`, `initiatives/edusuto/index.html`, `initiatives/prayaas/index.html`, `initiatives/health/index.html`, `initiatives/yoga-kutumb/index.html`, `initiatives/livelihood/index.html`, `initiatives/farmours/index.html`, `initiatives/heritage-walk/index.html`, `initiatives/guriya-magazine/index.html`.
  - **Research Section**: `research/index.html`, `research/rivers-chhattisgarh/index.html` (47+ rivers mapped), `research/ijmeer/index.html` (ISSN 2583-8474, open access), `research/publications/index.html`, `research/csr-research/index.html`, `research/edusuto/index.html`.
  - **Impact Section**: `impact/index.html`, `impact/statistics/index.html`, `impact/case-studies/index.html`, `impact/district-profiles/index.html`, `impact/project-gallery/index.html`, `impact/testimonials/index.html`.
  - **Get Involved Section**: `get-involved/index.html`, `get-involved/donate/index.html` (dynamic giving tiers & 80G tax receipt calculator), `get-involved/volunteer/index.html`, `get-involved/csr-partner/index.html`, `get-involved/internship/index.html`.
  - **Emerging Section**: `emerging/index.html`, `emerging/community-radio/index.html`, `emerging/field-notes/index.html`, `emerging/guriya-magazine/index.html`, `emerging/media-gallery/index.html`, `emerging/news-press/index.html`.
  - **Contact & Legal**: `contact/index.html` (with 2-day response SLA, zero personal phones or direct residential addresses), `legal/privacy-policy/`, `legal/terms-of-use/`, `legal/cookie-policy/`, `legal/accessibility/`, `legal/refund-policy/`, `legal/disclaimer/`, and `404.html`.
- **Navigation Intact**:
  - Preserved all top-level menus and sub-menu dropdown hierarchies exactly as requested.

---

## [2026-11-10] — Modern UI/UX Transformation: Bright White Theme, High Contrast Typography & Interactive Features

### Added & Redesigned
- **Bright White & High-Contrast Design System**:
  - Replaced the dark/muddy default theme with a crisp, bright white design system (`--bg: #FFFFFF;`, `--bg-surface: #F8FAFC;`, `--ink: #0F172A;`).
  - Switched default fallback in `assets/js/theme.js` and `assets/js/main.js` from `'dark'` to `'light'`.
  - Upgraded `:root` design tokens with vibrant Forest Emerald (`#059669`), River Sky Blue (`#0284C7`), Amber (`#D97706`), and Coral accents while maintaining a clean, high-contrast dark mode toggle.
- **Interactive Donation Impact Calculator**:
  - Added an interactive giving calculator to `index.html` with real-time impact generation across preset amounts (₹500, ₹1000, ₹2500, ₹5000, ₹10000) and custom inputs.
  - Dynamically calculates verifiable ground outcomes: native riverbank saplings, digital CGBSE study kits for tribal children, portable water testing kits, maternal wellness camps, and micro-watershed mapping units.
- **Interactive Initiatives Tabbed Explorer**:
  - Implemented tabbed deep-dive panels on `index.html` covering Bolti Nadi, Prayaas & EduSuTo, Yoga Kutumb, Farmours, and Radio Meer & Media with key metrics and direct links.
- **Hero & Card Modernization**:
  - Upgraded homepage hero with subtle dot matrix canvas (`radial-gradient(#CBD5E1 1px, transparent 1px)`), elevated white metric cards, and responsive button layouts.
  - Upgraded `.pillar-card-modern`, `.action-card-modern`, and `.spotlight-box` with crisp 1px borders, smooth hover elevations, and modern typography.
- **Purged Obsolete Non-NGO Junk & Legacy Artifacts**:
  - Removed outdated travel concierge folders (`flights/`, `hotels/`, `trains/`).
  - Removed temporary extraction folders (`temp_bolti_unzipped/`, `temp_docs_unzipped/`, `temp_docx/`).
  - Replaced legacy `contact.html` with a 0-second meta-redirect to `/contact/`.
- **Content Compatibility Clean-Up**:
  - Removed all muddy parchment tones (`#f5f0e5`, `rgba(245,240,229,...)`, `rgba(229,219,200,...)`) and dark murky gradients (`via-[#0a4749]`) from `assets/css/content-compat.css`.
  - Standardized the top statutory notification bar with modern slate styling across all 49 HTML pages.
  - Kept all menus and sub-menus completely intact.

---

## [2026-11-10] — Contact Audit & Privacy Hardening: Removal of Mobile Number (+91 98261 21177) & Direct Addresses

### Removed & Updated
- **Mobile Number Stripped**: Removed `+91 98261 21177` and `tel:+919826121177` from all website pages (`contact/`, `about/`, `emerging/news-press/`, `initiatives/edusuto/`, `legal/privacy-policy/`, `legal/refund-policy/`, `data/config.json`, `.agents/AGENTS.md`, `README.md`). Replaced with digital communication channels (`meercare@live.com`, online response desk, and contact form).
- **Direct Physical Address Removed**: Removed `House No 103, Housing Board Colony, Hatkeshar, Dhamtari, Chhattisgarh 493773` and `Sr. MIG 103...` from all pages and components. Replaced with `Registered Location: Chhattisgarh, India (Reg. No. 3588)`.
- **Dhamtari Direct Relations Updated**: Updated references in `contact/index.html`, `legal/terms-of-use/index.html` (court jurisdiction to competent courts in Chhattisgarh), `legal/cookie-policy/index.html`, `legal/privacy-policy/index.html`, `about/our-story/index.html`, `emerging/community-radio/index.html`, `emerging/guriya-magazine/index.html`, `get-involved/volunteer/index.html`, and `impact/district-profiles/index.html` to focus on broad regional operations across Chhattisgarh rather than a single residential address or headquarters tag.
- **Components & Schema Cleaned**: Updated `assets/js/components.js` and `assets/js/components-sub.js` footer addresses and JSON-LD `PostalAddress` structured data to state-level locality without direct street coordinates.
- **Maintenance Scripts Hardened**: Cleaned legacy build scripts (`unify_pages.ps1`, `deep_clean.ps1`, `emergency_rebuild.ps1`, `final_site_repair.ps1`, `full_repair.ps1`, `merge_rivers_final_fix.ps1`) to prevent re-introduction.

---

## [2026-08-29] — Complete Site-Wide UI/UX Modernization & Theme Harmonization (All 52 Pages)

### Added & Harmonized
- Transformed all 52 HTML pages across all 8 website sections to adhere strictly to the unified design system.
- Standardized dual-theme (Light & Dark) color tokens with high-contrast text and surface visibility safeguards.
- Unified top statutory notification bar, glassmorphic navigation header, dropdown menus, instant theme toggle, and mobile drawer across all pages.
- Harmonized typography across all pages using Google Fonts `Fraunces` (Headings) + `Inter` (Body) + `JetBrains Mono` (Metrics).
- Unified institutional footers with complete statutory registrations (CSR-1, 12A, 80G, NGO Darpan).
- Verified full integrity across all 52 pages with automated tag balancing and link validation.

---

## [2026-08-29] — Modern UI/UX Theme Redesign for Homepage

### Added & Redesigned
- Redesigned `index.html` with a modern, high-impact NGO UI/UX theme.
- Implemented ambient mesh gradient hero with pill badge, editorial Fraunces headline, high-contrast action CTAs, and 4 interactive floating metric counter cards.
- Built interactive 5 Pillars of Rural Transformation cards with practice badges and animated hover states.
- Enhanced Bolti Nadi River Spotlight with before/after interactive revival slider and hydrological stats.
- Upgraded the AEIOM governance architecture, IJMEER journal showcase, and Get Involved action matrix.
- Extended `assets/css/style.css` with modern theme utility classes and responsive styling.

---

## [2026-08-29] — Removal of All Quiz & Certificate Elements

### Removed
- Removed interactive "Test Your Knowledge" / quiz sections, question cards, and certificate blocks from `impact/statistics/index.html`, `impact/index.html`, and `initiatives/bolti-nadi/index.html`.
- Removed quiz navigation buttons and renumbered subsequent section eyebrow badges cleanly.
- Deleted `assets/js/quiz-certificate.js` and removed dynamic quiz script injection from `assets/js/components.js` and `assets/js/components-sub.js`.

---

## [2026-08-16] — Formal Corporate UI/UX Transformation & Site-Wide Harmonization

### Added & Refined
- Re-architected site-wide design system (`assets/css/style.css` & `assets/css/premium.css`) to enforce a formal, minimalist corporate NGO visual identity suitable for Meer Foundation (est. 2011).
- Harmonized typography across all 47 HTML pages with formal Fraunces serif headings and Inter sans-serif body text.
- Enforced clean 1px card borders (`#E5DBC8`), 12px/16px border-radii, warm parchment background (`#FBF7F0`), and zero horizontal overflow (`overflow-x: hidden`).
- Standardized site-wide corporate navigation header and institutional footer across all 8 main sections (`about/`, `initiatives/`, `research/`, `emerging/`, `impact/`, `get-involved/`, `contact/`, `legal/`, `index.html`).
- Updated statutory compliance badges and registration details (CSR-1: CSR00075824, 12A, 80G, NGO Darpan) across footers and action hubs.
- Updated agentic memory rules in `.agents/AGENTS.md` and `CURRENT_TASK.md`.

---

## [2026-08-16] — Comprehensive End-to-End Page Audit & Fixes

### Fixed
- Fixed non-existent image paths `/logos/prayaas-yellow.png` and `/logos/prayaas-white.png` in `initiatives/prayaas/index.html` to use optimized `.webp` logo assets (`assets/images/logo/logo-1x1.webp`).
- Corrected broken link `/dprs/csr-budget-template-v1.xlsx` in `get-involved/csr-partner/index.html` to point to Governance & Annual Reports.
- Added interactive toast feedback (`data-toast`, `data-toast-desc`) to forms across `contact/`, `get-involved/csr-partner/`, `get-involved/donate/`, `get-involved/internship/`, and `get-involved/volunteer/`.
- Replaced dead `href="#"` links across `emerging/` and `initiatives/` pages with active toast notifications and valid resource targets.
- Conducted full automated end-to-end site audit validating all 47 HTML pages, JS scripts, CSS styles, metadata tags, and relative image references.

---

## [2026-08-15] — End-to-End Site-Wide CSS & JavaScript Engine Restoration

### Fixed
- Unified `assets/css/style.css` combining site-wide layout classes (`.header`, `.nav`, `.nav-dropdown`, `.mobile-menu`, `.footer`, `.card`, `.stat-card`, `.badge`, `.accordion`, `.btn`, `.container`, `.grid`) with the Presentation Framework & Glassmorphism system.
- Unified `assets/js/main.js` supporting all sub-page mechanics (theme switching, mobile navigation menu toggle, sticky header scroll shadow, FAQ accordion expansion, form toast submissions, animated counters, before/after slider) and presentation slide features.
- Restored standard full navigation header and mobile menu to `index.html` ensuring consistent site-wide header UX.

---

## [2026-08-15] — Cinematic Presentation & Glassmorphism UI/UX Transformation

### Added
- `assets/css/slider-styles.css` — Lightbox modal image viewer styles.
- `assets/js/theme.js` — Dual dark/light theme switching engine with `themeChanged` event broadcast.
- `assets/js/slider.js` — Full-screen lightbox modal with touch & keyboard navigation (`initLightbox`).
- `assets/js/slide-number.js` — Dynamic slide number badge (`.sn-badge`) with interactive slide dropdown jump menus.
- `assets/js/popup.js` — Statistical popup modal engine with formula definitions and field verification data.
- `assets/js/charts.js` — Theme-aware Chart.js color palette helper.

### Changed
- `index.html` — Converted to 8 full-viewport presentation slides (`.slide-container` with 100vh scroll-snap), glassmorphic cards, breathing neon border glows (`.glow-cyan`, `.glow-orange`, etc.), and popover triggers.
- `assets/css/style.css` — Re-engineered with complete Presentation Framework CSS architecture (dark/light tokens, glass cards, hover magnification safeguard, floating navigation pill).
- `assets/js/main.js` — Integrated vertical progress dots (`.progress-dots`), keyboard slide scrolling (`ArrowUp`/`ArrowDown`), and wide-card hover magnification protection (`>400px` capped at `1.02x`).

---

## [2026-08-15] — Premium 3D Theme Transformation & Automated Date-Based Backup System

### Added
- `assets/css/scroll-animations.css` — Comprehensive 3D scroll-driven animation system (sticky canvas sequence, 3D card tilt, staggered cascade, dynamic counter easing, before/after comparison slider).
- `assets/js/scroll-engine.js` — Vanilla ES6+ scroll animation engine with canvas frame sequencer, multi-stage overlay synchronizer, IntersectionObserver triggers, and mouse-parallax tilt.
- `assets/images/hero-frames/` — 45 high-definition 3D WebP sequence frames depicting Lotus unfolding into a flowing river.
- `assets/images/bolti-nadi-dry.webp` & `assets/images/bolti-nadi-flowing.webp` — Visual assets for interactive Bolti Nadi river revival slider.
- Automated Date-Based Backup System (`backup.ps1`, `backup-config.json`, `.git/hooks/pre-commit`) maintaining exactly the latest 10 distinct date snapshots in `backups/backup-YYYY-MM-DD/`.

### Changed
- `index.html` — Upgraded Hero to sticky 3D scroll canvas with multi-stage text overlays, enhanced Five Pillars cards with 3D perspective transforms, integrated before/after Sakri River slider, and connected dynamic counter animations.
- `assets/css/style.css` — Added scroll animation design tokens to `:root`.
- Normalized metric figures across homepage to 15 Years of service and 12 Districts.

### Fixed
- Replaced broken SVG placeholder in Bolti Nadi section with interactive comparison slider.
- Corrected title & meta tag spacing issues in `index.html`.

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
