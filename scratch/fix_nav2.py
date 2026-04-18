"""
CRITICAL FIX: The nav-item divs have class 'dropdown' which the CSS hides.
Solution: Replace ALL CSS .dropdown rules to use .dropdown-content instead,
since that's the actual class used for the popup menus in components.js.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

CSS_PATH = r'assets\css\style.css'

with open(CSS_PATH, 'r', encoding='utf-8') as f:
    css = f.read()

# The broken patch from fix_nav.py — revert and fix properly
# OLD: .dropdown, .dropdown-content { ... }
# FIX: Only .dropdown-content gets the hidden/absolute positioning
# The nav-item with class "dropdown" should NOT be hidden

css = css.replace(
    '.dropdown, .dropdown-content {\n  position: absolute; top: calc(100% + 10px); left: 0;',
    '.dropdown-content {\n  position: absolute; top: calc(100% + 10px); left: 0;'
)
css = css.replace(
    '.nav-item:hover > .dropdown, .nav-item:hover > .dropdown-content {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}',
    '.nav-item:hover > .dropdown-content {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}'
)
css = css.replace(
    '.dropdown a, .dropdown-content a {\n  display: flex;',
    '.dropdown-content a {\n  display: flex;'
)
css = css.replace(
    '.dropdown a:hover, .dropdown-content a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }',
    '.dropdown-content a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }'
)
css = css.replace(
    '.dropdown a svg, .dropdown-content a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }',
    '.dropdown-content a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }'
)

# Also fix: the original .dropdown rule (if still present) needs to not hide things
# Make sure the original .dropdown selector is REMOVED / redirected
# Check if old .dropdown still exists and remove it
if '.dropdown {\n  position: absolute;' in css:
    css = css.replace(
        '.dropdown {\n  position: absolute;',
        '.dropdown-content {\n  position: absolute;'
    )
if '.nav-item:hover > .dropdown {' in css and '.nav-item:hover > .dropdown-content' not in css:
    css = css.replace(
        '.nav-item:hover > .dropdown {',
        '.nav-item:hover > .dropdown-content {'
    )
if '.dropdown a {' in css:
    css = css.replace('.dropdown a {', '.dropdown-content a {')
if '.dropdown a:hover' in css:
    css = css.replace('.dropdown a:hover', '.dropdown-content a:hover')
if '.dropdown a svg' in css:
    css = css.replace('.dropdown a svg', '.dropdown-content a svg')

with open(CSS_PATH, 'w', encoding='utf-8') as f:
    f.write(css)

# Verify
remaining = []
for line in css.split('\n'):
    stripped = line.strip()
    if stripped.startswith('.dropdown ') or stripped.startswith('.dropdown{') or stripped == '.dropdown {':
        remaining.append(line)

if remaining:
    print("WARN - still has .dropdown rules that might conflict:")
    for r in remaining:
        print(" ", r)
else:
    print("OK - no conflicting .dropdown rules remain")

print("CSS patched: all dropdown rules now target .dropdown-content only")
