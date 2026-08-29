"""
Fix 1: Add .dropdown-content as alias for .dropdown in CSS
Fix 2: Ensure mobile nav has enough transition delays for all 36 items
Fix 3: Add the 'media' page to footer links
"""
import re

CSS_PATH = r'assets\css\style.css'
JS_PATH = r'assets\js\components.js'

# ── FIX 1: CSS — add .dropdown-content alias ──
with open(CSS_PATH, 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the dropdown rules to also target .dropdown-content
css = css.replace(
    '.dropdown {\n  position: absolute;',
    '.dropdown, .dropdown-content {\n  position: absolute;'
)
css = css.replace(
    '.nav-item:hover > .dropdown {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}',
    '.nav-item:hover > .dropdown, .nav-item:hover > .dropdown-content {\n  opacity: 1; visibility: visible; transform: translateY(0) scale(1);\n}'
)
css = css.replace(
    '.dropdown a {\n  display: flex;',
    '.dropdown a, .dropdown-content a {\n  display: flex;'
)
css = css.replace(
    '.dropdown a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }',
    '.dropdown a:hover, .dropdown-content a:hover { background: rgba(37,99,235,0.06); color: var(--blue); }'
)
css = css.replace(
    '.dropdown a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }',
    '.dropdown a svg, .dropdown-content a svg { width: 14px; height: 14px; opacity: 0.5; flex-shrink: 0; }'
)

# ── FIX 2: Add more transition delays for 36-item mobile nav ──
EXTRA_DELAYS = ''
for i in range(6, 37):
    delay = 0.3 + (i - 5) * 0.03
    EXTRA_DELAYS += f'  .mobile-nav.active li:nth-child({i}) {{ transition-delay: {delay:.2f}s; }}\n'

# Insert after the last existing delay line (nth-child(5))
css = css.replace(
    '  .mobile-nav.active li:nth-child(5) { transition-delay: 0.3s; }',
    '  .mobile-nav.active li:nth-child(5) { transition-delay: 0.3s; }\n' + EXTRA_DELAYS
)

# ── FIX 3: Ensure mobile nav close button is visible ──
# The close-menu button needs to be visible and styled
if '.close-menu' not in css:
    css += """
/* Close button for mobile nav */
.close-menu {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: 1px solid var(--border);
  width: 44px; height: 44px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--t);
  z-index: 2001;
}
.close-menu:hover { background: var(--bg-3); color: var(--navy); }
"""

with open(CSS_PATH, 'w', encoding='utf-8') as f:
    f.write(css)
print("CSS fixed — dropdown-content alias added, mobile delays extended, close-menu styled")

# ── FIX 4: Update footer links to point to real pages ──
with open(JS_PATH, 'r', encoding='utf-8') as f:
    js = f.read()

old_initiatives = '''          <a href="initiatives.html#prayaas">Prayaas</a>
          <a href="initiatives.html#yoga-kutumb">Yoga Kutumb</a>
          <a href="initiatives.html#guriya">Guriya Magazine</a>
          <a href="initiatives.html#radio-meer">Radio Meer</a>
          <a href="initiatives.html#edusuto">EduSuTo</a>'''

new_initiatives = '''          <a href="prayaas.html">Prayaas</a>
          <a href="yoga-kutumb.html">Yoga Kutumb</a>
          <a href="guriya-magazine.html">Guriya Magazine</a>
          <a href="community-radio.html">Radio Meer</a>
          <a href="edusuto-courses.html">EduSuTo</a>'''

js = js.replace(old_initiatives, new_initiatives)

# Fix footer Connect links to point to real pages
old_connect = '''          <a href="contact.html#volunteer">Volunteer</a>
          <a href="contact.html#csr">CSR Partner</a>'''
new_connect = '''          <a href="volunteer.html">Volunteer</a>
          <a href="partner-with-us.html">CSR Partner</a>
          <a href="donate.html">Donate</a>
          <a href="news.html">News & Blog</a>'''

js = js.replace(old_connect, new_connect)

with open(JS_PATH, 'w', encoding='utf-8') as f:
    f.write(js)
print("components.js fixed — footer links now point to real pages")

# ── FIX 5: Verify all 36 pages have both script tags ──
import os, glob
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')
pages = glob.glob('*.html')
missing = []
for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    has_comp = 'components.js' in content
    has_core = 'core.js' in content
    has_header = 'site-header-inject' in content
    has_footer = 'site-footer-inject' in content
    if not all([has_comp, has_core, has_header, has_footer]):
        missing.append(f"{p}: comp={has_comp} core={has_core} hdr={has_header} ftr={has_footer}")

if missing:
    print("\nPages missing scripts/inject divs:")
    for m in missing:
        print(" ", m)
else:
    print(f"\nAll {len(pages)} pages have correct script tags and inject divs ✓")
