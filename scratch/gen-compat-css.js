const fs = require('fs');

const classes = fs.readFileSync('scratch/classes.txt', 'utf8').split('\n').filter(Boolean);

// Build CSS rules for Tailwind utility classes
const rules = [];

// Helper to escape class names for CSS selectors
function esc(cls) {
    return cls
        .replace(/\//g, '\\/')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\#/g, '\\#')
        .replace(/\+/g, '\\+')
        .replace(/\./g, '\\.')
        .replace(/\:/g, '\\:')
        .replace(/\>/g, '\\>')
        .replace(/\*/g, '\\*')
        .replace(/\,/g, '\\,')
        .replace(/\'/g, "\\'")
        .replace(/\&/g, '\\&')
        .replace(/\$/g, '\\$')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/\=/g, '\\=')
        .replace(/\!/g, '\\!')
        .replace(/\?/g, '\\?');
}

// Tailwind spacing scale (rem)
const spacing = {
    '0': '0', '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem',
    '2': '0.5rem', '2.5': '0.625rem', '3': '0.75rem', '3.5': '0.875rem',
    '4': '1rem', '5': '1.25rem', '6': '1.5rem', '7': '1.75rem',
    '8': '2rem', '9': '2.25rem', '10': '2.5rem', '11': '2.75rem',
    '12': '3rem', '14': '3.5rem', '16': '4rem', '20': '5rem',
    '24': '6rem', '28': '7rem', '32': '8rem', '36': '9rem',
    '40': '10rem', '44': '11rem', '48': '12rem', '52': '13rem',
    '56': '14rem', '60': '15rem', '64': '16rem', '72': '18rem',
    '80': '20rem', '96': '24rem'
};

// Color map using our CSS variables
const colors = {
    'primary': 'var(--primary)',
    'primary-dark': 'var(--primary-dark)',
    'primary-foreground': '#fff',
    'secondary': 'var(--secondary)',
    'secondary-foreground': '#fff',
    'accent': 'var(--accent)',
    'accent-foreground': 'var(--ink)',
    'muted': '#f5f0e5',
    'muted-foreground': 'var(--muted)',
    'foreground': 'var(--ink)',
    'background': 'var(--bg)',
    'card': 'var(--bg-card)',
    'card-foreground': 'var(--ink)',
    'border': 'var(--border)',
    'destructive': '#dc2626',
    'success': 'var(--success)',
    'warning': '#b26a00',
    'warn': '#b26a00',
    'danger': '#dc2626',
    'ring': 'var(--primary)',
    'input': 'var(--border)',
    'white': '#fff',
    'black': '#000',
    'transparent': 'transparent',
    'inherit': 'inherit',
    'current': 'currentColor'
};

// Mapping rules
const cssMap = {};

for (const cls of classes) {
    // Skip template literals, JS artifacts, and already-handled custom classes
    if (cls.startsWith('$') || cls.startsWith("'") || cls.includes('===') || cls.includes('&&') || cls.startsWith('?') || cls.includes('{') || cls.includes('}') || cls.startsWith('data-') || cls.startsWith('[&') || cls.startsWith('*:') || cls.includes("'")) continue;

    // Display
    if (cls === 'flex') cssMap[cls] = 'display: flex';
    if (cls === 'inline-flex') cssMap[cls] = 'display: inline-flex';
    if (cls === 'grid') cssMap[cls] = 'display: grid';
    if (cls === 'inline-grid') cssMap[cls] = 'display: inline-grid';
    if (cls === 'block') cssMap[cls] = 'display: block';
    if (cls === 'inline-block') cssMap[cls] = 'display: inline-block';
    if (cls === 'inline') cssMap[cls] = 'display: inline';
    if (cls === 'hidden') continue; // already in style.css
    if (cls === 'sr-only') cssMap[cls] = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0';
    if (cls === 'not-sr-only') cssMap[cls] = 'position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal';

    // Position
    if (cls === 'relative') cssMap[cls] = 'position: relative';
    if (cls === 'absolute') cssMap[cls] = 'position: absolute';
    if (cls === 'fixed') cssMap[cls] = 'position: fixed';
    if (cls === 'sticky') cssMap[cls] = 'position: sticky';

    // Flexbox
    if (cls === 'flex-col') cssMap[cls] = 'flex-direction: column';
    if (cls === 'flex-row') cssMap[cls] = 'flex-direction: row';
    if (cls === 'flex-wrap') cssMap[cls] = 'flex-wrap: wrap';
    if (cls === 'flex-nowrap') cssMap[cls] = 'flex-wrap: nowrap';
    if (cls === 'flex-1') cssMap[cls] = 'flex: 1 1 0%';
    if (cls === 'grow') cssMap[cls] = 'flex-grow: 1';
    if (cls === 'shrink-0') cssMap[cls] = 'flex-shrink: 0';

    // Alignment
    if (cls === 'items-center') cssMap[cls] = 'align-items: center';
    if (cls === 'items-start') cssMap[cls] = 'align-items: flex-start';
    if (cls === 'items-end') cssMap[cls] = 'align-items: flex-end';
    if (cls === 'items-stretch') cssMap[cls] = 'align-items: stretch';
    if (cls === 'items-baseline') cssMap[cls] = 'align-items: baseline';
    if (cls === 'justify-center') cssMap[cls] = 'justify-content: center';
    if (cls === 'justify-between') cssMap[cls] = 'justify-content: space-between';
    if (cls === 'justify-start') cssMap[cls] = 'justify-content: flex-start';
    if (cls === 'justify-end') cssMap[cls] = 'justify-content: flex-end';
    if (cls === 'self-center') cssMap[cls] = 'align-self: center';
    if (cls === 'self-start') cssMap[cls] = 'align-self: flex-start';
    if (cls === 'self-end') cssMap[cls] = 'align-self: flex-end';

    // Spacing: gap
    let match;
    if ((match = cls.match(/^gap-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `gap: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^gap-x-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `column-gap: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^gap-y-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `row-gap: ${spacing[match[1]]}`;
    }

    // Padding
    if ((match = cls.match(/^p-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^px-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-left: ${spacing[match[1]]}; padding-right: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^py-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-top: ${spacing[match[1]]}; padding-bottom: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^pt-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-top: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^pb-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-bottom: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^pl-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-left: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^pr-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `padding-right: ${spacing[match[1]]}`;
    }

    // Margin
    if ((match = cls.match(/^m-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^mx-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-left: ${spacing[match[1]]}; margin-right: ${spacing[match[1]]}`;
    }
    if (cls === 'mx-auto') cssMap[cls] = 'margin-left: auto; margin-right: auto';
    if ((match = cls.match(/^my-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-top: ${spacing[match[1]]}; margin-bottom: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^mt-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-top: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^mb-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-bottom: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^ml-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-left: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^mr-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `margin-right: ${spacing[match[1]]}`;
    }

    // Width & Height
    if (cls === 'w-full') cssMap[cls] = 'width: 100%';
    if (cls === 'w-auto') cssMap[cls] = 'width: auto';
    if (cls === 'h-full') cssMap[cls] = 'height: 100%';
    if (cls === 'h-auto') cssMap[cls] = 'height: auto';
    if (cls === 'h-screen') cssMap[cls] = 'height: 100vh';
    if (cls === 'min-h-screen') cssMap[cls] = 'min-height: 100vh';
    if (cls === 'min-w-0') cssMap[cls] = 'min-width: 0';
    if ((match = cls.match(/^w-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `width: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^h-(\d+\.?\d*)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `height: ${spacing[match[1]]}`;
    }
    if ((match = cls.match(/^max-w-(\d+)xl$/))) {
        const vals = { '1': '36rem', '2': '42rem', '3': '48rem', '4': '56rem', '5': '64rem', '6': '72rem', '7': '80rem' };
        if (vals[match[1]]) cssMap[cls] = `max-width: ${vals[match[1]]}`;
    }
    if (cls === 'max-w-xs') cssMap[cls] = 'max-width: 20rem';
    if (cls === 'max-w-sm') cssMap[cls] = 'max-width: 24rem';
    if (cls === 'max-w-md') cssMap[cls] = 'max-width: 28rem';
    if (cls === 'max-w-lg') cssMap[cls] = 'max-width: 32rem';
    if (cls === 'max-w-xl') cssMap[cls] = 'max-width: 36rem';
    if (cls === 'max-w-2xl') cssMap[cls] = 'max-width: 42rem';
    if (cls === 'max-w-3xl') cssMap[cls] = 'max-width: 48rem';
    if (cls === 'max-w-4xl') cssMap[cls] = 'max-width: 56rem';
    if (cls === 'max-w-5xl') cssMap[cls] = 'max-width: 64rem';
    if (cls === 'max-w-6xl') cssMap[cls] = 'max-width: 72rem';
    if (cls === 'max-w-7xl') cssMap[cls] = 'max-width: 80rem';
    if (cls === 'max-w-none') cssMap[cls] = 'max-width: none';

    // Typography
    if (cls === 'text-left') cssMap[cls] = 'text-align: left';
    if (cls === 'text-center') continue; // already in style.css
    if (cls === 'text-right') cssMap[cls] = 'text-align: right';
    if (cls === 'text-justify') cssMap[cls] = 'text-align: justify';
    if (cls === 'text-xs') cssMap[cls] = 'font-size: 0.75rem; line-height: 1rem';
    if (cls === 'text-sm') cssMap[cls] = 'font-size: 0.875rem; line-height: 1.25rem';
    if (cls === 'text-base') cssMap[cls] = 'font-size: 1rem; line-height: 1.5rem';
    if (cls === 'text-lg') cssMap[cls] = 'font-size: 1.125rem; line-height: 1.75rem';
    if (cls === 'text-xl') cssMap[cls] = 'font-size: 1.25rem; line-height: 1.75rem';
    if (cls === 'text-2xl') cssMap[cls] = 'font-size: 1.5rem; line-height: 2rem';
    if (cls === 'text-3xl') cssMap[cls] = 'font-size: 1.875rem; line-height: 2.25rem';
    if (cls === 'text-4xl') cssMap[cls] = 'font-size: 2.25rem; line-height: 2.5rem';
    if (cls === 'text-5xl') cssMap[cls] = 'font-size: 3rem; line-height: 1';
    if (cls === 'text-balance') cssMap[cls] = 'text-wrap: balance';
    if (cls === 'text-pretty') cssMap[cls] = 'text-wrap: pretty';
    if (cls === 'font-heading') cssMap[cls] = "font-family: var(--font-heading)";
    if (cls === 'font-bold') cssMap[cls] = 'font-weight: 700';
    if (cls === 'font-semibold') cssMap[cls] = 'font-weight: 600';
    if (cls === 'font-medium') cssMap[cls] = 'font-weight: 500';
    if (cls === 'font-normal') cssMap[cls] = 'font-weight: 400';
    if (cls === 'font-light') cssMap[cls] = 'font-weight: 300';
    if (cls === 'font-extrabold') cssMap[cls] = 'font-weight: 800';
    if (cls === 'italic') cssMap[cls] = 'font-style: italic';
    if (cls === 'not-italic') cssMap[cls] = 'font-style: normal';
    if (cls === 'uppercase') cssMap[cls] = 'text-transform: uppercase';
    if (cls === 'lowercase') cssMap[cls] = 'text-transform: lowercase';
    if (cls === 'capitalize') cssMap[cls] = 'text-transform: capitalize';
    if (cls === 'truncate') cssMap[cls] = 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap';
    if (cls === 'tabular-nums') cssMap[cls] = 'font-variant-numeric: tabular-nums';
    if (cls === 'leading-none') cssMap[cls] = 'line-height: 1';
    if (cls === 'leading-tight') cssMap[cls] = 'line-height: 1.25';
    if (cls === 'leading-snug') cssMap[cls] = 'line-height: 1.375';
    if (cls === 'leading-normal') cssMap[cls] = 'line-height: 1.5';
    if (cls === 'leading-relaxed') cssMap[cls] = 'line-height: 1.625';
    if (cls === 'leading-loose') cssMap[cls] = 'line-height: 2';
    if (cls === 'tracking-tight') cssMap[cls] = 'letter-spacing: -0.025em';
    if (cls === 'tracking-normal') cssMap[cls] = 'letter-spacing: 0';
    if (cls === 'tracking-wide') cssMap[cls] = 'letter-spacing: 0.025em';
    if (cls === 'tracking-wider') cssMap[cls] = 'letter-spacing: 0.05em';
    if (cls === 'tracking-widest') cssMap[cls] = 'letter-spacing: 0.1em';
    if (cls === 'whitespace-nowrap') cssMap[cls] = 'white-space: nowrap';
    if (cls === 'whitespace-pre-wrap') cssMap[cls] = 'white-space: pre-wrap';
    if (cls === 'line-clamp-1') cssMap[cls] = 'display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden';
    if (cls === 'line-clamp-2') cssMap[cls] = 'display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden';
    if (cls === 'line-clamp-3') cssMap[cls] = 'display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden';
    if (cls === 'underline') cssMap[cls] = 'text-decoration: underline';
    if (cls === 'no-underline') cssMap[cls] = 'text-decoration: none';

    // Colors - text
    for (const [name, val] of Object.entries(colors)) {
        if (cls === `text-${name}`) cssMap[cls] = `color: ${val}`;
    }

    // Colors - background
    for (const [name, val] of Object.entries(colors)) {
        if (cls === `bg-${name}`) cssMap[cls] = `background-color: ${val}`;
    }

    // Border
    if (cls === 'border') cssMap[cls] = 'border-width: 1px; border-style: solid; border-color: var(--border)';
    if (cls === 'border-0') cssMap[cls] = 'border-width: 0';
    if (cls === 'border-2') cssMap[cls] = 'border-width: 2px';
    if (cls === 'border-t') cssMap[cls] = 'border-top-width: 1px; border-top-style: solid';
    if (cls === 'border-b') cssMap[cls] = 'border-bottom-width: 1px; border-bottom-style: solid';
    if (cls === 'border-l') cssMap[cls] = 'border-left-width: 1px; border-left-style: solid';
    if (cls === 'border-l-4') cssMap[cls] = 'border-left-width: 4px; border-left-style: solid';
    if (cls === 'border-r') cssMap[cls] = 'border-right-width: 1px; border-right-style: solid';
    if (cls === 'border-dashed') cssMap[cls] = 'border-style: dashed';
    if (cls === 'border-none') cssMap[cls] = 'border-style: none';

    // Border radius
    if (cls === 'rounded-none') cssMap[cls] = 'border-radius: 0';
    if (cls === 'rounded-sm') cssMap[cls] = 'border-radius: 0.125rem';
    if (cls === 'rounded') cssMap[cls] = 'border-radius: 0.25rem';
    if (cls === 'rounded-md') cssMap[cls] = 'border-radius: 0.375rem';
    if (cls === 'rounded-lg') cssMap[cls] = 'border-radius: 0.5rem';
    if (cls === 'rounded-xl') cssMap[cls] = 'border-radius: 0.75rem';
    if (cls === 'rounded-2xl') cssMap[cls] = 'border-radius: 1rem';
    if (cls === 'rounded-3xl') cssMap[cls] = 'border-radius: 1.5rem';
    if (cls === 'rounded-full') continue; // already in style.css

    // Shadow
    if (cls === 'shadow-sm') cssMap[cls] = 'box-shadow: 0 1px 2px rgba(0,0,0,0.05)';
    if (cls === 'shadow-md') cssMap[cls] = 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)';
    if (cls === 'shadow-lg') cssMap[cls] = 'box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)';
    if (cls === 'shadow-xl') cssMap[cls] = 'box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1)';
    if (cls === 'shadow-xs') cssMap[cls] = 'box-shadow: 0 1px 1px rgba(0,0,0,0.04)';
    if (cls === 'shadow-none') cssMap[cls] = 'box-shadow: none';

    // Overflow
    if (cls === 'overflow-hidden') cssMap[cls] = 'overflow: hidden';
    if (cls === 'overflow-auto') cssMap[cls] = 'overflow: auto';
    if (cls === 'overflow-x-auto') cssMap[cls] = 'overflow-x: auto';
    if (cls === 'overflow-y-auto') cssMap[cls] = 'overflow-y: auto';
    if (cls === 'overflow-visible') cssMap[cls] = 'overflow: visible';

    // Position values
    if (cls === 'top-0') cssMap[cls] = 'top: 0';
    if (cls === 'bottom-0') cssMap[cls] = 'bottom: 0';
    if (cls === 'left-0') cssMap[cls] = 'left: 0';
    if (cls === 'right-0') cssMap[cls] = 'right: 0';
    if (cls === 'inset-0') cssMap[cls] = 'top: 0; right: 0; bottom: 0; left: 0';

    // Z-index
    if ((match = cls.match(/^z-(\d+)$/))) cssMap[cls] = `z-index: ${match[1]}`;

    // Opacity
    if ((match = cls.match(/^opacity-(\d+)$/))) cssMap[cls] = `opacity: ${parseInt(match[1]) / 100}`;

    // Transitions
    if (cls === 'transition-all') cssMap[cls] = 'transition: all 0.2s ease';
    if (cls === 'transition-colors') cssMap[cls] = 'transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease';
    if (cls === 'transition-transform') cssMap[cls] = 'transition: transform 0.2s ease';
    if (cls === 'transition-opacity') cssMap[cls] = 'transition: opacity 0.2s ease';
    if (cls === 'duration-200') cssMap[cls] = 'transition-duration: 200ms';
    if (cls === 'duration-300') cssMap[cls] = 'transition-duration: 300ms';
    if (cls === 'duration-500') cssMap[cls] = 'transition-duration: 500ms';

    // Transforms
    if (cls === 'rotate-0') cssMap[cls] = 'rotate: 0deg';
    if (cls === 'scale-0') cssMap[cls] = 'scale: 0';
    if (cls === 'scale-100') cssMap[cls] = 'scale: 1';

    // Cursor
    if (cls === 'cursor-pointer') cssMap[cls] = 'cursor: pointer';
    if (cls === 'pointer-events-none') cssMap[cls] = 'pointer-events: none';
    if (cls === 'select-none') cssMap[cls] = 'user-select: none';

    // Grid columns
    if ((match = cls.match(/^grid-cols-(\d+)$/))) cssMap[cls] = `grid-template-columns: repeat(${match[1]}, minmax(0, 1fr))`;
    if (cls === 'col-span-2') cssMap[cls] = 'grid-column: span 2 / span 2';
    if (cls === 'col-span-3') cssMap[cls] = 'grid-column: span 3 / span 3';
    if (cls === 'col-span-full') cssMap[cls] = 'grid-column: 1 / -1';

    // Scroll
    if ((match = cls.match(/^scroll-mt-(\d+)$/))) {
        if (spacing[match[1]]) cssMap[cls] = `scroll-margin-top: ${spacing[match[1]]}`;
    }

    // Backdrop
    if (cls === 'backdrop-blur') cssMap[cls] = 'backdrop-filter: blur(8px)';
    if (cls === 'backdrop-blur-sm') cssMap[cls] = 'backdrop-filter: blur(4px)';
    if (cls === 'backdrop-blur-md') cssMap[cls] = 'backdrop-filter: blur(12px)';
    if (cls === 'backdrop-blur-lg') cssMap[cls] = 'backdrop-filter: blur(16px)';

    // Object fit
    if (cls === 'object-cover') cssMap[cls] = 'object-fit: cover';
    if (cls === 'object-contain') cssMap[cls] = 'object-fit: contain';
    if (cls === 'object-center') cssMap[cls] = 'object-position: center';

    // List
    if (cls === 'list-none') cssMap[cls] = 'list-style-type: none';
    if (cls === 'list-disc') cssMap[cls] = 'list-style-type: disc';

    // Misc
    if (cls === 'outline-none') cssMap[cls] = 'outline: none';
    if (cls === 'resize-none') cssMap[cls] = 'resize: none';
    if (cls === 'appearance-none') cssMap[cls] = 'appearance: none';
    if (cls === 'animate-pulse') cssMap[cls] = 'animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite';
    if (cls === 'animate-bounce') cssMap[cls] = 'animation: bounce 1s infinite';
    if (cls === 'animate-ping') cssMap[cls] = 'animation: ping 1s cubic-bezier(0,0,0.2,1) infinite';
    if (cls === 'space-y-0') cssMap[cls] = ''; // handled as > * + * { margin-top: 0 }
    if (cls === 'blur-3xl') cssMap[cls] = 'filter: blur(64px)';
}

// Generate CSS output
let css = `/* ============================================================================
   MEER FOUNDATION — CONTENT COMPATIBILITY STYLESHEET
   Auto-generated from Z AI content classes. Pure vanilla CSS — no Tailwind.
   Maps Tailwind-style utility class names to standard CSS properties.
   ============================================================================ */

/* ===== CUSTOM Z AI SEMANTIC CLASSES ===== */
.meer-eyebrow { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); margin-bottom: 0.5rem; }
.meer-gradient-text { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.meer-glass-strong { background: rgba(var(--bg-card), 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
.meer-aurora { position: absolute; inset: 0; overflow: hidden; }
.meer-aurora::before, .meer-aurora::after {
  content: ''; position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.3;
  animation: float 15s ease-in-out infinite alternate;
}
.meer-aurora::before { background: var(--primary); width: 500px; height: 500px; top: -20%; left: -10%; }
.meer-aurora::after { background: var(--secondary); width: 400px; height: 400px; bottom: -15%; right: -5%; animation-delay: -7s; }

.page-content { padding-top: var(--header-height); }

/* ===== COLOR UTILITIES WITH OPACITY ===== */
.text-accent { color: var(--accent); }
.text-primary { color: var(--primary); }
.text-secondary { color: var(--secondary); }
.text-success { color: var(--success); }
.text-foreground { color: var(--ink); }
.text-muted-foreground { color: var(--muted); }
.text-primary-foreground { color: #fff; }
.text-secondary-foreground { color: #fff; }
.text-white { color: #fff; }
.text-inherit { color: inherit; }
.text-transparent { color: transparent; }

.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops, var(--primary), var(--secondary))); }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops, var(--primary), var(--secondary))); }
.bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops, transparent, var(--bg))); }
.from-primary { --tw-gradient-from: var(--primary); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, transparent); }
.via-\\[\\#0a4749\\] { --tw-gradient-via: #0a4749; }
.to-secondary { --tw-gradient-to: var(--secondary); }
.to-accent\\/5 { --tw-gradient-to: rgba(212,155,63,0.05); }
.from-primary\\/10 { --tw-gradient-from: rgba(13,91,94,0.1); }
.via-primary\\/5 { --tw-gradient-via: rgba(13,91,94,0.05); }
.from-transparent { --tw-gradient-from: transparent; }
.to-transparent { --tw-gradient-to: transparent; }

/* Opacity-modified colors */
.bg-primary\\/5 { background-color: rgba(13,91,94,0.05); }
.bg-primary\\/8 { background-color: rgba(13,91,94,0.08); }
.bg-primary\\/10 { background-color: rgba(13,91,94,0.1); }
.bg-primary\\/15 { background-color: rgba(13,91,94,0.15); }
.bg-secondary\\/5 { background-color: rgba(194,84,44,0.05); }
.bg-secondary\\/10 { background-color: rgba(194,84,44,0.1); }
.bg-secondary\\/15 { background-color: rgba(194,84,44,0.15); }
.bg-accent\\/5 { background-color: rgba(212,155,63,0.05); }
.bg-accent\\/10 { background-color: rgba(212,155,63,0.1); }
.bg-accent\\/15 { background-color: rgba(212,155,63,0.15); }
.bg-accent\\/20 { background-color: rgba(212,155,63,0.2); }
.bg-success\\/5 { background-color: rgba(46,125,50,0.05); }
.bg-success\\/10 { background-color: rgba(46,125,50,0.1); }
.bg-success\\/15 { background-color: rgba(46,125,50,0.15); }
.bg-danger\\/5 { background-color: rgba(220,38,38,0.05); }
.bg-danger\\/10 { background-color: rgba(220,38,38,0.1); }
.bg-danger\\/15 { background-color: rgba(220,38,38,0.15); }
.bg-warn\\/10 { background-color: rgba(178,106,0,0.1); }
.bg-warn\\/15 { background-color: rgba(178,106,0,0.15); }
.bg-warning\\/5 { background-color: rgba(178,106,0,0.05); }
.bg-warning\\/15 { background-color: rgba(178,106,0,0.15); }
.bg-muted\\/20 { background-color: rgba(245,240,229,0.2); }
.bg-muted\\/30 { background-color: rgba(245,240,229,0.3); }
.bg-muted\\/40 { background-color: rgba(245,240,229,0.4); }
.bg-muted\\/50 { background-color: rgba(245,240,229,0.5); }
.bg-muted-foreground\\/30 { background-color: rgba(107,94,78,0.3); }
.bg-muted-foreground\\/40 { background-color: rgba(107,94,78,0.4); }
.bg-card\\/60 { background-color: rgba(255,255,255,0.6); }
.bg-card\\/70 { background-color: rgba(255,255,255,0.7); }
.bg-card\\/80 { background-color: rgba(255,255,255,0.8); }
.bg-card\\/10 { background-color: rgba(255,255,255,0.1); }
.bg-card\\/40 { background-color: rgba(255,255,255,0.4); }
.bg-background\\/40 { background-color: rgba(255,255,255,0.4); }
.bg-background\\/60 { background-color: rgba(255,255,255,0.6); }
.bg-white\\/10 { background-color: rgba(255,255,255,0.1); }
.bg-white\\/20 { background-color: rgba(255,255,255,0.2); }
.bg-white\\/60 { background-color: rgba(255,255,255,0.6); }
.bg-white\\/80 { background-color: rgba(255,255,255,0.8); }
.bg-white\\/85 { background-color: rgba(255,255,255,0.85); }
.bg-black\\/50 { background-color: rgba(0,0,0,0.5); }
.bg-black\\/60 { background-color: rgba(0,0,0,0.6); }
.bg-surface-alt\\/30 { background-color: rgba(245,240,229,0.3); }

.text-white\\/70 { color: rgba(255,255,255,0.7); }
.text-white\\/80 { color: rgba(255,255,255,0.8); }
.text-white\\/85 { color: rgba(255,255,255,0.85); }
.text-white\\/90 { color: rgba(255,255,255,0.9); }
.text-foreground\\/70 { color: rgba(31,26,20,0.7); }
.text-foreground\\/80 { color: rgba(31,26,20,0.8); }
.text-foreground\\/90 { color: rgba(31,26,20,0.9); }
.text-muted-foreground\\/80 { color: rgba(107,94,78,0.8); }

.border-border\\/60 { border-color: rgba(229,219,200,0.6); }
.border-border\\/40 { border-color: rgba(229,219,200,0.4); }
.border-primary\\/20 { border-color: rgba(13,91,94,0.2); }
.border-primary\\/30 { border-color: rgba(13,91,94,0.3); }
.border-primary\\/40 { border-color: rgba(13,91,94,0.4); }
.border-secondary\\/30 { border-color: rgba(194,84,44,0.3); }
.border-accent\\/30 { border-color: rgba(212,155,63,0.3); }
.border-accent\\/40 { border-color: rgba(212,155,63,0.4); }
.border-white\\/10 { border-color: rgba(255,255,255,0.1); }
.border-white\\/20 { border-color: rgba(255,255,255,0.2); }
.border-white\\/30 { border-color: rgba(255,255,255,0.3); }
.border-white\\/40 { border-color: rgba(255,255,255,0.4); }

.ring-1 { box-shadow: 0 0 0 1px var(--border); }
.ring-white\\/20 { box-shadow: 0 0 0 1px rgba(255,255,255,0.2); }

/* ===== ASPECT RATIOS ===== */
.aspect-square { aspect-ratio: 1/1; }
.aspect-\\[16\\/9\\] { aspect-ratio: 16/9; }
.aspect-\\[16\\/7\\] { aspect-ratio: 16/7; }
.aspect-\\[16\\/10\\] { aspect-ratio: 16/10; }
.aspect-\\[4\\/3\\] { aspect-ratio: 4/3; }
.aspect-\\[3\\/4\\] { aspect-ratio: 3/4; }
.aspect-\\[5\\/3\\] { aspect-ratio: 5/3; }
.aspect-\\[5\\/4\\] { aspect-ratio: 5/4; }
.aspect-\\[4\\/5\\] { aspect-ratio: 4/5; }

/* ===== ANIMATIONS ===== */
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0,0,0.2,1); } }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }

/* ===== SPACE-Y / SPACE-X UTILITIES ===== */
.space-y-0\\.5 > * + * { margin-top: 0.125rem; }
.space-y-1 > * + * { margin-top: 0.25rem; }
.space-y-1\\.5 > * + * { margin-top: 0.375rem; }
.space-y-2 > * + * { margin-top: 0.5rem; }
.space-y-3 > * + * { margin-top: 0.75rem; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-8 > * + * { margin-top: 2rem; }
.space-y-10 > * + * { margin-top: 2.5rem; }
.space-y-12 > * + * { margin-top: 3rem; }
.space-y-16 > * + * { margin-top: 4rem; }
.space-x-2 > * + * { margin-left: 0.5rem; }
.space-x-3 > * + * { margin-left: 0.75rem; }
.space-x-4 > * + * { margin-left: 1rem; }

/* ===== RESPONSIVE BREAKPOINTS ===== */
@media (min-width: 640px) {
  .sm\\:block { display: block; }
  .sm\\:flex { display: flex; }
  .sm\\:grid { display: grid; }
  .sm\\:hidden { display: none; }
  .sm\\:inline-flex { display: inline-flex; }
  .sm\\:flex-row { flex-direction: row; }
  .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sm\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .sm\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .sm\\:col-span-1 { grid-column: span 1 / span 1; }
  .sm\\:col-span-2 { grid-column: span 2 / span 2; }
  .sm\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .sm\\:text-base { font-size: 1rem; line-height: 1.5rem; }
  .sm\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .sm\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
  .sm\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .sm\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
  .sm\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
  .sm\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
  .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
  .sm\\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .sm\\:p-5 { padding: 1.25rem; }
  .sm\\:p-6 { padding: 1.5rem; }
  .sm\\:gap-3 { gap: 0.75rem; }
  .sm\\:gap-4 { gap: 1rem; }
  .sm\\:gap-6 { gap: 1.5rem; }
  .sm\\:w-auto { width: auto; }
  .sm\\:self-center { align-self: center; }
  .sm\\:items-center { align-items: center; }
  .sm\\:h-16 { height: 4rem; }
  .sm\\:w-16 { width: 4rem; }
}

@media (min-width: 1024px) {
  .lg\\:block { display: block; }
  .lg\\:flex { display: flex; }
  .lg\\:grid { display: grid; }
  .lg\\:hidden { display: none; }
  .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
  .lg\\:px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
  .lg\\:py-12 { padding-top: 3rem; padding-bottom: 3rem; }
  .lg\\:py-28 { padding-top: 7rem; padding-bottom: 7rem; }
  .lg\\:text-lg { font-size: 1.125rem; }
  .lg\\:col-span-2 { grid-column: span 2 / span 2; }
  .lg\\:gap-8 { gap: 2rem; }
}

@media (min-width: 1280px) {
  .xl\\:block { display: block; }
  .xl\\:hidden { display: none; }
  .xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* ===== HOVER STATES ===== */
.hover\\:bg-accent\\/10:hover { background-color: rgba(212,155,63,0.1); }
.hover\\:bg-muted:hover { background-color: #f5f0e5; }
.hover\\:bg-primary\\/10:hover { background-color: rgba(13,91,94,0.1); }
.hover\\:bg-primary\\/90:hover { background-color: rgba(13,91,94,0.9); }
.hover\\:bg-secondary\\/90:hover { background-color: rgba(194,84,44,0.9); }
.hover\\:bg-white\\/20:hover { background-color: rgba(255,255,255,0.2); }
.hover\\:text-foreground:hover { color: var(--ink); }
.hover\\:text-primary:hover { color: var(--primary); }
.hover\\:text-accent-foreground:hover { color: var(--ink); }
.hover\\:underline:hover { text-decoration: underline; }
.hover\\:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }

/* ===== FOCUS STATES ===== */
.focus\\:not-sr-only:focus { position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal; }
.focus\\:ring-2:focus { box-shadow: 0 0 0 2px var(--primary); }
.focus-visible\\:ring-2:focus-visible { box-shadow: 0 0 0 2px var(--primary); }
.focus-visible\\:outline-none:focus-visible { outline: none; }
.focus\\:border-primary:focus { border-color: var(--primary); }

/* ===== DISABLED STATES ===== */
.disabled\\:pointer-events-none:disabled { pointer-events: none; }
.disabled\\:opacity-50:disabled { opacity: 0.5; }
.disabled\\:opacity-60:disabled { opacity: 0.6; }

/* ===== CUSTOM SIZE VALUES ===== */
.size-9 { width: 2.25rem; height: 2.25rem; }
.h-16 { height: 4rem; }
.h-11 { height: 2.75rem; }
.h-10 { height: 2.5rem; }
.h-14 { height: 3.5rem; }
.w-11 { width: 2.75rem; }
.w-10 { width: 2.5rem; }
.w-14 { width: 3.5rem; }
.w-48 { width: 12rem; }

/* ===== CLAMP FONT SIZES ===== */
[class*="text-\\[clamp"] {
  /* Handled inline by the content — these are clamp() values in style attributes */
}

`;

// Add all simple utility mappings
for (const [cls, rule] of Object.entries(cssMap)) {
    if (!rule) continue;
    const sel = cls.replace(/\//g, '\\/').replace(/\./g, '\\.').replace(/\:/g, '\\:');
    css += `.${sel} { ${rule}; }\n`;
}

fs.writeFileSync('assets/css/content-compat.css', css);
console.log('Generated content-compat.css with ' + Object.keys(cssMap).length + ' utility rules + semantic classes + responsive breakpoints.');
