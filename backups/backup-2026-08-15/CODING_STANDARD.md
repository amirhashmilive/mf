# CODING_STANDARD.md — Meer Foundation Website

## General

- **Indentation**: 2 spaces (no tabs)
- **Line endings**: LF (Unix-style preferred, CRLF accepted on Windows)
- **Max line length**: 120 characters (soft limit)
- **File encoding**: UTF-8
- **Trailing whitespace**: Remove
- **Final newline**: Always include

---

## HTML Standards

### Structure
- Use HTML5 doctype: `<!DOCTYPE html>`
- Language attribute: `<html lang="en">`
- Include `charset`, `viewport`, `title`, `meta description` on every page
- One `<h1>` per page, proper heading hierarchy (`h1` → `h2` → `h3`)

### Semantic Elements
```html
<!-- DO: Use semantic elements -->
<header role="banner">...</header>
<nav aria-label="Main navigation">...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<footer>...</footer>

<!-- DON'T: Use divs for everything -->
<div class="header">...</div>
```

### Accessibility
- All images: `alt` attribute (descriptive or empty `alt=""` for decorative)
- Interactive elements: `aria-label` when no visible text
- Buttons: use `<button>`, not `<div onclick>`
- Links: use `<a href>`, not `<span onclick>`
- Forms: `<label>` for every `<input>`
- Focus styles: never remove `:focus-visible` outline

### Naming
- IDs: `kebab-case` — `id="site-header"`, `id="scroll-top"`
- Classes: `kebab-case` — `class="hero-image-bg"`, `class="nav-link"`
- Data attributes: `data-kebab-case` — `data-section-id`

### Component Injection
Every page must include placeholder divs for shared components:
```html
<div id="site-header-inject"></div>
<!-- page content -->
<div id="site-footer-inject"></div>
```

---

## CSS Standards

### Custom Properties First
```css
/* DO: Use design tokens */
color: var(--text-1);
background: var(--bg-2);
border-radius: var(--r);
transition: all var(--t);

/* DON'T: Hardcode values */
color: #0F172A;
background: #F8FAFC;
border-radius: 12px;
transition: all 0.25s ease;
```

### Selector Naming
- Use descriptive class names: `.hero-title`, `.card-body`, `.nav-link`
- Avoid deep nesting (max 3 levels)
- Prefer class selectors over element/ID selectors
- BEM-like naming when appropriate: `.card`, `.card-header`, `.card-body`

### Organization
```css
/* Group properties in this order: */
.element {
  /* 1. Positioning */
  position: relative;
  top: 0;
  z-index: var(--z-elevated);

  /* 2. Display & Layout */
  display: flex;
  align-items: center;
  gap: 16px;

  /* 3. Box Model */
  width: 100%;
  padding: 24px;
  margin: 0;
  border: 1px solid var(--border);
  border-radius: var(--r);

  /* 4. Typography */
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--text-1);

  /* 5. Visual */
  background: var(--bg);
  box-shadow: var(--sh-xs);

  /* 6. Transitions & Animations */
  transition: all var(--t);
}
```

### Responsive
```css
/* Mobile-first approach */
.element { padding: 16px; }

@media (min-width: 768px) {
  .element { padding: 24px; }
}

@media (min-width: 1024px) {
  .element { padding: 32px; }
}
```

### Page-Specific Styles
- Prefer inline `<style>` blocks in the `<head>` for truly page-specific styles
- Only add to CSS files if the style is reusable across pages

---

## JavaScript Standards

### Module Pattern
```javascript
/* Wrap all code in IIFE */
(function () {
  'use strict';

  // Module code here

})();
```

### Naming
- Variables and functions: `camelCase` — `updateProgress`, `scrollTopBtn`
- Constants: `UPPER_SNAKE_CASE` — `DONATE`, `HEADER`
- DOM elements: prefix with element type hint — `const header = document.getElementById('site-header')`
- Boolean variables: prefix with `is`, `has`, `can` — `isVisible`, `hasLoaded`

### DOM Interaction
```javascript
/* DO: Check element exists before using */
const el = document.getElementById('my-element');
if (el) {
  el.addEventListener('click', handler);
}

/* DON'T: Assume element exists */
document.getElementById('my-element').addEventListener('click', handler);
```

### Event Listeners
- Use `addEventListener`, never inline `onclick`
- Clean up observers and listeners when possible
- Use passive listeners for scroll events: `{ passive: true }`

### Modern JS Features (Allowed)
- `const` / `let` (never `var`)
- Arrow functions
- Template literals
- Destructuring
- `async` / `await` (for fetch calls)
- Optional chaining (`?.`)
- `IntersectionObserver`
- `fetch()` API

### Forbidden
- No `var` declarations
- No `eval()`
- No `document.write()`
- No inline event handlers (`onclick="..."`)
- No `jQuery` or external JS libraries
- No `console.log()` in production (remove before commit)

---

## File Naming

| Type       | Convention      | Example                    |
|------------|-----------------|----------------------------|
| HTML pages | `kebab-case`    | `peer-review.html`         |
| CSS files  | `kebab-case`    | `style.css`, `premium.css` |
| JS files   | `kebab-case`    | `core.js`, `components.js` |
| Images     | `kebab-case`    | `hero-bg.webp` (max 50 char)|
| Data files | `kebab-case`    | `papers.json`              |
| Docs       | `UPPER_CASE`    | `README.md`, `CHANGELOG.md`|

---

## Image Standards

1. **Format**: All images MUST be in `.webp` format (except `favicon.ico` and `favicon.svg`).
2. **Naming**: 
   - Maximum 50 characters in length.
   - All lowercase letters.
   - No special characters (only `[a-z]`, `[0-9]`, and `-`).
   - Example: `hero-banner.webp`, `bolti-nadi.webp`.
3. **Enforcement**: Image format and naming are checked by a Git pre-commit hook (`scripts/enforce-image-rules.py`).

---

## Comments

### HTML
```html
<!-- Section: Hero Banner -->
<!-- Component: Newsletter signup form -->
```

### CSS
```css
/* ============================================================
   SECTION NAME
   ============================================================ */

/* Component description */
.component { ... }
```

### JavaScript
```javascript
/* ============================================================
   MODULE — module-name.js (version)
   Brief description of what this module does
   ============================================================ */

// ── Feature name ─────────────────────────────────
function featureName() { ... }
```

---

## Performance Guidelines

1. **Images**: Compress all images. Use WebP where possible. Include `width` and `height` attributes.
2. **CSS**: Minimize specificity. Avoid `!important` except as last resort.
3. **JS**: Defer non-critical scripts. Use `IntersectionObserver` for lazy operations.
4. **Fonts**: Use `display=swap` for Google Fonts (already configured).
5. **Icons**: Use inline SVG, not icon fonts.
