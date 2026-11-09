# UI_GUIDELINES.md — Meer Foundation Website

## Contemporary Glass Cards UI Design System

The Meer Foundation website utilizes a modern, luminous Frosted Glass Cards design system defined in `assets/css/glass-ui.css`. Agents and developers have full creative freedom to maintain, iterate, and polish UI/UX without restrictive color or font locks, ensuring an engaging, accessible, and world-class non-profit experience.

---

## Frosted Glass Tokens (`assets/css/glass-ui.css`)

### Glass Surfaces & Borders
| Token                   | Light Theme Value                  | Dark Theme Value                  | Usage                                |
|-------------------------|------------------------------------|-----------------------------------|--------------------------------------|
| `--glass-canvas-bg`     | `#F8FAFC`                         | `#090D16`                         | Base background behind ambient mesh  |
| `--glass-surface`       | `rgba(255, 255, 255, 0.72)`       | `rgba(15, 23, 42, 0.65)`          | Card and header frosted surface      |
| `--glass-surface-hover` | `rgba(255, 255, 255, 0.92)`       | `rgba(30, 41, 59, 0.85)`          | Card hover state                     |
| `--glass-border`        | `rgba(255, 255, 255, 0.85)`       | `rgba(255, 255, 255, 0.1)`        | Outer crisp border                   |
| `--glass-border-subtle` | `rgba(226, 232, 240, 0.7)`        | `rgba(51, 65, 85, 0.6)`           | Dividers, header bottom border       |
| `--glass-blur`          | `blur(20px)`                       | `blur(20px)`                      | Standard card backdrop blur          |
| `--glass-blur-heavy`    | `blur(28px)`                       | `blur(28px)`                      | Header and dropdown backdrop blur    |

### High Contrast Typography & Jewel Accents
| Token                   | Hex / Value                        | Purpose                              |
|-------------------------|------------------------------------|--------------------------------------|
| `--glass-ink`           | `#0F172A` (Light) / `#F8FAFC` (Dark)| High-contrast primary headings/body |
| `--glass-ink-muted`     | `#475569` (Light) / `#94A3B8` (Dark)| Subtitles, secondary descriptions    |
| `--glass-primary`       | `#059669` (Forest Emerald)        | CTAs, environmental accents, badges  |
| `--glass-secondary`     | `#0284C7` (River Sky Blue)        | Water, hydrology, secondary jewels   |
| `--glass-accent`        | `#D97706` (Warm Amber)            | Attention pills, metric highlights   |

---

## Typography
- **Primary Sans**: `'Inter', -apple-system, sans-serif`
- **Editorial Serif**: `'Fraunces', 'Playfair Display', serif`
- **Monospace**: `'JetBrains Mono', monospace`
- **Accessibility**: All text combinations meet WCAG 2.1 AA 4.5:1 minimum contrast.

---

## Standard Page Architecture
Every subpage follows this scannable, modern component layout:
1. **Top Statutory Bar**: Non-profit registration, 12A, 80G, and CSR-1 approval notices.
2. **Glass Sticky Header**: Floating frosted glass header with dropdown menus and mobile drawer.
3. **Glass Hero with Aurora Mesh**: High-contrast headline, pill badge, 2-line summary, and 4 metric chips.
4. **Three-Card Glass Highlights Grid**: Crisp cards with colored frosted icons and concise descriptions.
5. **Split Feature Panel**: Deep dive into outcomes, methodologies, or CSR alignment.
6. **Accessible FAQ Accordion**: Interactive Q&A covering the most important questions.
7. **Glass CTA Banner**: Action-oriented gradient banner with direct donation and contact buttons.
8. **Contemporary 4-Column Footer**: Statutory badges, structured navigation, and copyright.

---

## Spacing & Layout

### Container
- **Max width**: `1300px` (`--max-w`)
- **Side padding**: `28px`

### Section Padding
| Class        | Padding     |
|--------------|-------------|
| `.section`   | `96px 0`    |
| `.section-sm`| `60px 0`    |
| `.section-lg`| `128px 0`   |
| `.section-xs`| `40px 0`    |

### Header
- **Height**: `78px` (`--header-h`)

---

## Border Radius Scale

| Token      | Value   | Usage                    |
|------------|---------|--------------------------|
| `--r-xs`   | `4px`   | Small elements, badges   |
| `--r-sm`   | `8px`   | Buttons, inputs          |
| `--r`      | `12px`  | Cards (default)          |
| `--r-lg`   | `18px`  | Large cards              |
| `--r-xl`   | `24px`  | Feature sections         |
| `--r-2xl`  | `32px`  | Hero elements            |
| `--r-3xl`  | `48px`  | Decorative elements      |
| `--r-full` | `9999px`| Pills, avatars           |

---

## Shadow Scale

| Token             | Usage                              |
|-------------------|------------------------------------|
| `--sh-xs`         | Subtle elevation (cards at rest)   |
| `--sh-sm`         | Light elevation (hover prep)       |
| `--sh`            | Medium elevation (cards on hover)  |
| `--sh-lg`         | High elevation (dropdowns, modals) |
| `--sh-xl`         | Maximum elevation (hero cards)     |
| `--sh-glow-blue`  | Blue glow (focused interactive)    |
| `--sh-glow-violet`| Violet glow (accent elements)      |

---

## Gradients

| Token              | Value                                               | Usage                |
|--------------------|-----------------------------------------------------|----------------------|
| `--grad-brand`     | `linear-gradient(135deg, #2563EB, #7C3AED)`         | Brand elements       |
| `--grad-brand-r`   | `linear-gradient(135deg, #7C3AED, #2563EB)`         | Reverse brand        |
| `--grad-navy`      | `linear-gradient(135deg, #0A1628, #1A3A5C, #0F2642)`| Dark sections/footer |
| `--grad-night`     | `linear-gradient(180deg, #070E1A, #0C1830)`         | Deep dark bg         |
| `--grad-gold`      | `linear-gradient(135deg, #F59E0B, #F97316)`         | Gold accents         |
| `--grad-emerald`   | `linear-gradient(135deg, #059669, #0D9488)`         | Success/CTA          |
| `--grad-surface`   | `linear-gradient(180deg, #F8FAFC, #FFFFFF)`         | Subtle surface       |
| `--grad-hero-bg`   | Subtle tricolor wash (blue/violet/emerald)           | Hero background      |

---

## Transitions

| Token        | Value                               | Usage             |
|--------------|-------------------------------------|-------------------|
| `--t-fast`   | `0.15s ease`                        | Micro-interactions |
| `--t`        | `0.25s cubic-bezier(0.4,0,0.2,1)`  | Standard (default)|
| `--t-slow`   | `0.45s cubic-bezier(0.4,0,0.2,1)`  | Page transitions  |
| `--t-spring` | `0.4s cubic-bezier(0.34,1.56,0.64,1)` | Bouncy effects |

---

## Z-Index Scale

| Token          | Value  | Usage          |
|----------------|--------|----------------|
| `--z-elevated` | `10`   | Raised cards   |
| `--z-dropdown` | `100`  | Dropdown menus |
| `--z-sticky`   | `200`  | Sticky elements|
| `--z-overlay`  | `500`  | Overlays       |
| `--z-modal`    | `800`  | Modals         |
| `--z-toast`    | `900`  | Toast alerts   |
| `--z-header`   | `1000` | Fixed header   |
| `--z-progress` | `9999` | Progress bar   |

---

## Component Patterns

### Cards
- Border radius: `--r` (12px)
- Shadow: `--sh-xs` → `--sh` on hover
- Border: `1px solid var(--border)`
- Transition: `var(--t)`

### Buttons (Primary)
- Background: `var(--grad-brand)` or `var(--blue)`
- Text: white
- Border radius: `--r-sm` (8px)
- Hover: lighten + shadow `--sh-glow-blue`

### Links
- Color: `var(--blue)`
- Hover: `var(--blue-dark)`
- Transition: `color var(--t)`

### Accessibility
- `:focus-visible` → `outline: 2px solid var(--blue)`, `outline-offset: 3px`
- All interactive elements need `aria-label` or visible text label
- Header uses `role="banner"`
- Nav uses `aria-label="Main navigation"`

---

## Responsive Breakpoints

| Breakpoint | Width     | Notes                    |
|------------|-----------|--------------------------|
| Mobile     | ≤ 480px   | Single column, stacked   |
| Tablet     | 481–768px | Two columns where needed |
| Desktop    | 769–1024px| Standard layout          |
| Wide       | 1025px+   | Full layout, max-w 1300px|

Always design mobile-first. Test at 375px minimum viewport.

---

## Animation Conventions

1. **Scroll reveal**: Add class `.reveal` → becomes `.visible` via IntersectionObserver
2. **Hover effects**: Use `transform: translateY(-2px)` + shadow increase
3. **Hero animation**: `gradientShift` keyframe (background-position cycling)
4. **No heavy animations**: Keep animations subtle and performant
5. **Respect `prefers-reduced-motion`**: Disable animations when user prefers
