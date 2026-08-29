# UI_GUIDELINES.md — Meer Foundation Website

## Color Palette

### Core Palette
| Token          | Hex       | Usage                          |
|----------------|-----------|--------------------------------|
| `--navy`       | `#0A1628` | Dark backgrounds, footer       |
| `--navy-mid`   | `#0F2642` | Secondary dark surfaces        |
| `--navy-light` | `#1A3A5C` | Tertiary dark surfaces         |
| `--blue`       | `#2563EB` | Primary brand color, links     |
| `--blue-dark`  | `#1D4ED8` | Hover states on blue           |
| `--blue-light` | `#3B82F6` | Light accents                  |
| `--blue-xlight`| `#DBEAFE` | Blue backgrounds               |
| `--violet`     | `#7C3AED` | Secondary brand, gradients     |
| `--violet-light`| `#A78BFA`| Light violet accents           |
| `--gold`       | `#F59E0B` | Warning, highlights, awards    |
| `--gold-light` | `#FDE68A` | Light gold backgrounds         |
| `--emerald`    | `#059669` | Success, CTA, positive states  |
| `--emerald-light`| `#6EE7B7`| Light green accents          |
| `--rose`       | `#E11D48` | Error, danger, alerts          |
| `--amber`      | `#D97706` | Caution states                 |
| `--teal`       | `#0D9488` | Alternate accent               |
| `--indigo`     | `#4F46E5` | Deep accent                    |

### Hero-Specific Colors
| Usage              | Value                                   |
|--------------------|-----------------------------------------|
| Hero title gradient| `linear-gradient(270deg, #1e40af, #047857, #1e40af)` |
| Stat value color   | `#1e40af`                                |
| Primary blue (legacy) | `#1e40af`                            |

### Surface Colors
| Token     | Hex       | Usage                          |
|-----------|-----------|--------------------------------|
| `--bg`    | `#FFFFFF` | Page background                |
| `--bg-2`  | `#F8FAFC` | Alternate section background   |
| `--bg-3`  | `#F1F5F9` | Card backgrounds               |
| `--bg-4`  | `#E2E8F0` | Muted backgrounds              |
| `--glass` | `rgba(255,255,255,0.88)` | Glassmorphism panels |

### Text Colors
| Token      | Hex       | Usage                        |
|------------|-----------|------------------------------|
| `--text-1` | `#0F172A` | Body text, headings          |
| `--text-2` | `#334155` | Secondary text               |
| `--text-3` | `#64748B` | Tertiary text, labels        |
| `--text-4` | `#94A3B8` | Muted text, placeholders     |
| `--text-5` | `#CBD5E1` | Very muted, disabled text    |

---

## Typography

### Font Families
| Token          | Stack                                                | Usage           |
|----------------|------------------------------------------------------|-----------------|
| `--font-sans`  | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Body text, UI |
| `--font-serif` | `'Playfair Display', Georgia, 'Times New Roman', serif` | Headings, stats |
| `--font-mono`  | `'JetBrains Mono', 'Cascadia Code', 'Courier New', monospace` | Code snippets |

### Base Typography
- **Font size**: `16px` (html base)
- **Line height**: `1.65` (body default)
- **Font smoothing**: antialiased (webkit + moz)

### Heading Convention
- Use `--font-serif` (Playfair Display) for major headings and statistics
- Use `--font-sans` (Inter) for everything else
- Only one `<h1>` per page

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
