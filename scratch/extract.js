const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('C:\\Users\\hashm\\Downloads\\Meer-Foundation-Vanilla-HTML-CSS-JS.txt', 'utf8');
const lines = content.split('\n');

let cssStart = 0, cssEnd = 0, jsStart = 0, jsEnd = 0, htmlStart = 0, htmlEnd = 0;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('FILE: style.css')) cssStart = i + 3;
    else if (lines[i].includes('FILE: main.js')) {
        cssEnd = i - 3;
        jsStart = i + 3;
    }
    else if (lines[i].includes('FILE: index.html (Homepage Template)')) {
        jsEnd = i - 3;
        htmlStart = i + 3;
    }
    else if (lines[i].includes('ALL 46 PAGE ROUTES')) {
        htmlEnd = i - 3;
    }
}

// Adjust indices if they missed
const css = lines.slice(cssStart, cssEnd).join('\n');
const js = lines.slice(jsStart, jsEnd).join('\n');
const html = lines.slice(htmlStart, htmlEnd).join('\n');

fs.mkdirSync('assets/css', { recursive: true });
fs.mkdirSync('assets/js', { recursive: true });

fs.writeFileSync('assets/css/style.css', css);
fs.writeFileSync('assets/js/main.js', js);
fs.writeFileSync('index.html', html);

console.log('Extracted CSS, JS, and HTML successfully.');
