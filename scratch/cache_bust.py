"""Add cache-busting version string to CSS/JS links in all HTML pages"""
import sys, os, glob, re
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')

VER = '?v=3'
pages = glob.glob('*.html')
updated = 0

for p in pages:
    with open(p, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Replace old versioned or unversioned references
    new_content = re.sub(r'assets/css/style\.css(\?v=\d+)?', f'assets/css/style.css{VER}', content)
    new_content = re.sub(r'assets/js/components\.js(\?v=\d+)?', f'assets/js/components.js{VER}', new_content)
    new_content = re.sub(r'assets/js/core\.js(\?v=\d+)?', f'assets/js/core.js{VER}', new_content)
    
    if new_content != content:
        with open(p, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated += 1

print(f'Cache-busted {updated}/{len(pages)} pages with {VER}')
