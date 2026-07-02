# CHANGELOG.md — Meer Foundation Website

All notable changes to this project will be documented in this file.

Format: [Keep a Changelog](https://keepachangelog.com/)

---

## [2026-07-02] — Site Controls: Dark Mode, Language Fix, Country Removed

### Fixed
- **Dark Mode** — Complete dark theme overrides in `assets/css/dark-mode.css` covering all components (header, nav, hero, cards, footer, forms, tables, tabs, accordions, Site Controls panel). Theme preference persists via localStorage with no flash-of-wrong-theme.
- **Language Switching** — Fixed mojibake (garbled text) for Hindi (हिन्दी), Español, Français, Português in all language selector dropdowns across 78 HTML pages. Cause: UTF-8 bytes double-encoded due to wrong charset in PowerShell write operations.
- **Auto-close Panel** — Site Controls panel now auto-closes after a language is selected.
- **Theme Init** — Dark/light button active state now correctly reflects stored preference on page load.

### Removed
- **Country/Region Selector** — Removed the Country/Region dropdown from the Site Controls panel across all 80+ HTML pages.

### Changed
- `assets/js/core.js` — Complete rewrite of floating panel logic: theme init, language switching with auto-close, removed Region handler.
- `assets/css/dark-mode.css` — Replaced minimal 35-line stub with 270-line comprehensive dark theme.
- All `*.html` pages — Removed `<div class="panel-section">` Region block; fixed encoding of language option labels.

---



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
