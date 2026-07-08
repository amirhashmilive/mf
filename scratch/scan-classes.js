const fs = require('fs');
const path = require('path');

// Scan all generated HTML files for classes used
const classSet = new Set();
const classRegex = /class="([^"]*)"/g;

function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && !['scratch','assets','.git','node_modules','data','.agents'].includes(entry.name)) {
            scanDir(full);
        } else if (entry.name.endsWith('.html')) {
            const html = fs.readFileSync(full, 'utf8');
            let m;
            while ((m = classRegex.exec(html)) !== null) {
                m[1].split(/\s+/).forEach(c => { if (c) classSet.add(c); });
            }
        }
    }
}
scanDir('.');

const all = [...classSet].sort();
console.log('Total unique classes: ' + all.length);
fs.writeFileSync('scratch/classes.txt', all.join('\n'));
console.log('Written to scratch/classes.txt');
