"""
SURGICAL FIX: Replace ALL .dropdown CSS rules with .dropdown-content
The nav-item divs use class="nav-item dropdown" so .dropdown CSS rules hide them.
The popup menus use class="dropdown-content" so we target only that.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

CSS_PATH = r'C:\Users\hashm\Desktop\Workplace Meer Foundation\assets\css\style.css'

with open(CSS_PATH, 'r', encoding='utf-8') as f:
    css = f.read()

print("Before fix - checking for .dropdown rules:")
for i, line in enumerate(css.split('\n')):
    if '.dropdown' in line:
        print(f"  Line {i+1}: {line.rstrip()}")

# Apply surgical replacements
replacements = [
    # Core dropdown popup rule
    ('.dropdown {\n  position: absolute; top: calc(100% + 10px); left: 0;\n  min-width: 260px; background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg); box-shadow: var(--sh-xl);\n  padding: 8px; opacity: 0; visibility: hidden;\n  transform: translateY(10px) scale(0.97);\n  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;\n  z-index: var(--z-dropdown);\n  transform-origin: top left;\n}',
     '.dropdown-content {\n  position: absolute; top: calc(100% + 10px); left: 0;\n  min-width: 260px; background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg); box-shadow: var(--sh-xl);\n  padding: 8px; opacity: 0; visibility: hidden;\n  transform: translateY(10px) scale(0.97);\n  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;\n  z-index: var(--z-dropdown);\n  transform-origin: top left;\n}'),

    # Hover show rule
    ('.nav-item:hover > .dropdown {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}',
     '.nav-item:hover > .dropdown-content {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}'),

    # Link styles
    ('.dropdown a {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 14px;\n  color: var(--text-2); font-size: 0.85rem; font-weight: 500;\n  border-radius: var(--r-sm); transition: var(--t);\n}',
     '.dropdown-content a {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 14px;\n  color: var(--text-2); font-size: 0.85rem; font-weight: 500;\n  border-radius: var(--r-sm); transition: var(--t);\n}'),

    ('.dropdown a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }',
     '.dropdown-content a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }'),

    ('.dropdown a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }',
     '.dropdown-content a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }'),
]

for old, new in replacements:
    if old in css:
        css = css.replace(old, new)
        print(f"  Replaced: {old[:50].strip()}...")
    else:
        print(f"  NOT FOUND: {old[:50].strip()}...")

with open(CSS_PATH, 'w', encoding='utf-8') as f:
    f.write(css)

print("\nAfter fix - checking remaining .dropdown rules:")
count = 0
for i, line in enumerate(css.split('\n')):
    if '.dropdown' in line and '.dropdown-content' not in line and '.dropdown-divider' not in line:
        print(f"  Line {i+1}: {line.rstrip()}")
        count += 1
if count == 0:
    print("  CLEAN - no conflicting .dropdown rules")
else:
    print(f"  WARNING: {count} remaining .dropdown rules")
