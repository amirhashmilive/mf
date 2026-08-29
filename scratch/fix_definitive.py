"""
DEFINITIVE FIX: Remove any opacity/visibility hiding from .dropdown class.
The nav-item divs have class="nav-item dropdown" and must NOT be hidden.
Only .dropdown-content should be hidden by default.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')

CSS_PATH = r'C:\Users\hashm\Desktop\Workplace Meer Foundation\assets\css\style.css'

with open(CSS_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find and report all lines containing 'dropdown' for diagnosis
print("=== All lines containing .dropdown ===")
for i, line in enumerate(lines):
    if '.dropdown' in line:
        print(f"  {i+1}: {line.rstrip()}")

# Now write the corrected CSS block for dropdown
# Find the dropdown section and replace it entirely
css = ''.join(lines)

# Remove any combined rule that might hide .dropdown
# Pattern: anything that sets opacity:0 or visibility:hidden on .dropdown (not .dropdown-content)
import re

# Replace any rule that starts with '.dropdown' and sets hidden properties
# We need to ensure ONLY .dropdown-content has the hiding behavior

# Check if there's a problematic combined rule
if '.dropdown, .dropdown-content' in css:
    print("\nFOUND combined rule - fixing...")
    # Replace with only .dropdown-content
    css = re.sub(
        r'\.dropdown,\s*\.dropdown-content\s*\{[^}]+\}',
        lambda m: m.group(0).replace('.dropdown, .dropdown-content', '.dropdown-content'),
        css
    )

# Also check for any standalone .dropdown { ... opacity/visibility rule
# that might have snuck in
dropdown_blocks = re.findall(r'\.dropdown\s*\{[^}]+\}', css)
print("\nStandalone .dropdown blocks found:")
for b in dropdown_blocks:
    print(" ", b[:100])
    if 'opacity' in b or 'visibility' in b or 'display: none' in b:
        print("   *** THIS IS THE BUG - removing hiding properties ***")
        # Remove opacity and visibility from this block
        fixed = re.sub(r'\s*opacity:\s*\d[^;]*;', '', b)
        fixed = re.sub(r'\s*visibility:\s*\w+;', '', fixed)
        css = css.replace(b, fixed)
        print("   Fixed to:", fixed[:100])

# Final verification - write back
with open(CSS_PATH, 'w', encoding='utf-8') as f:
    f.write(css)

print("\n=== After fix - lines containing .dropdown ===")
for i, line in enumerate(css.split('\n')):
    if '.dropdown' in line and '.dropdown-content' not in line and '.dropdown-divider' not in line:
        print(f"  {i+1}: {line.rstrip()}")

print("\nDone. CSS saved.")
