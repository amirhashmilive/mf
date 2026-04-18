import sys
sys.stdout.reconfigure(encoding='utf-8')
with open(r'assets\css\style.css', 'r', encoding='utf-8') as f:
    css = f.read()
checks = ['grid-5', 'paper-card', 'cfp-section', 'cfp-content', 'reveal-delay-3', 'reveal-delay-4', 'scroll-top', '#scroll-top']
for c in checks:
    found = 'FOUND' if c in css else 'MISSING'
    print(c + ': ' + found)
