with open(r'assets\js\components.js', 'r', encoding='utf-8') as f:
    c = f.read()
print('dropdown-content:', c.count('dropdown-content'))
print('class=dropdown:', c.count('class="dropdown"'))
print('class="dropdown-content":', c.count('class="dropdown-content"'))

# Check mobile nav CSS in style.css
with open(r'assets\css\style.css', 'r', encoding='utf-8') as f:
    css = f.read()
print('\nmobile-nav in CSS:', '.mobile-nav' in css)
print('mobile-menu-toggle in CSS:', '.mobile-menu-toggle' in css)
print('overlay in CSS:', '.overlay' in css)
