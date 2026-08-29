const fs = require('fs');
const path = require('path');

const base = process.cwd();

function processHtmlFiles(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.git', '.agents', 'backups', 'scratch'].includes(file)) {
                processHtmlFiles(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Regex to find <img> tags without loading attribute
            // We ignore tags that already have loading="lazy" or loading="eager"
            // We also ignore images containing "logo" or "hero" in their class or src as they are likely above the fold
            content = content.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
                if (/loading=["']?(?:lazy|eager)["']?/i.test(attrs)) {
                    return match; // Already has loading attribute
                }
                if (/(logo|hero|brand)/i.test(attrs)) {
                    return match; // Skip critical/above-fold images
                }
                updated = true;
                return `<img ${attrs.trim()} loading="lazy">`;
            });

            if (updated) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Added loading="lazy" to images in ${path.relative(base, fullPath)}`);
            }
        }
    });
}

processHtmlFiles(base);
