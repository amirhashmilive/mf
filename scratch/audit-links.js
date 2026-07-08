const fs = require('fs');
const path = require('path');

let totalLinks = 0;
let brokenLinks = 0;

function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && !['scratch','assets','.git','node_modules','data','.agents','backups'].includes(entry.name)) {
            scan(full);
        } else if (entry.name === 'index.html' || (entry.name.endsWith('.html') && dir === '.')) {
            let html = fs.readFileSync(full, 'utf8');
            const hrefs = html.match(/href="(.*?)"/g) || [];
            
            for (let match of hrefs) {
                let link = match.replace(/href="/, '').replace(/"$/, '');
                
                if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.includes('.css') || link.includes('.webp') || link.includes('.png') || link.includes('.ico') || link.includes('.js') || link === '') continue;
                
                totalLinks++;
                
                let targetPath;
                if (link.startsWith('/')) {
                    targetPath = link === '/' ? 'index.html' : path.join(link.substring(1).replace(/\//g, path.sep), 'index.html');
                } else if (link.startsWith('../')) {
                    const targetDir = path.resolve(dir, link);
                    targetPath = path.relative(process.cwd(), targetDir);
                    if (!targetPath.endsWith('.html')) targetPath = path.join(targetPath, 'index.html');
                } else {
                    targetPath = path.join(dir, link.replace(/\//g, path.sep), 'index.html');
                }
                
                if (!fs.existsSync(targetPath)) {
                    console.log('Broken link in ' + full + ': ' + link);
                    brokenLinks++;
                }
            }
        }
    }
}
scan('.');
console.log('Tested ' + totalLinks + ' internal links. Broken: ' + brokenLinks);
