const fs = require('fs');
const path = require('path');

let modifiedCount = 0;
function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && !['scratch','assets','.git','node_modules','data','.agents','backups'].includes(entry.name)) {
            scan(full);
        } else if (entry.name === 'index.html' || (entry.name.endsWith('.html') && dir === '.')) {
            let html = fs.readFileSync(full, 'utf8');
            
            // Matches style="..." where opacity is 0 or 0; followed by transforms
            const regex = /style="[^"]*opacity:\s*0[^"]*"/g;
            if (regex.test(html)) {
                html = html.replace(regex, '');
                fs.writeFileSync(full, html);
                modifiedCount++;
            }
        }
    }
}

scan('.');
console.log('Modified HTML files to remove hidden opacity:', modifiedCount);
