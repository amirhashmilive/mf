const fs = require('fs');
const path = require('path');

function audit() {
    const dir = 'd:/DRIVE (Ai) Agents/00 Projects/Meer Foundation Website';
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    let report = {
        totalPages: files.length,
        pages: [],
        issues: []
    };

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        let canonical = false;
        if (content.includes('rel="canonical"')) canonical = true;
        
        let metaDesc = false;
        if (content.includes('name="description"')) metaDesc = true;
        
        // Find missing alt texts (basic regex)
        const imgRegex = /<img[^>]+>/g;
        let images = content.match(imgRegex) || [];
        let missingAlt = 0;
        let nonWebp = 0;
        
        images.forEach(img => {
            if (!img.includes('alt=')) missingAlt++;
            const srcMatch = img.match(/src="([^"]+)"/);
            if (srcMatch) {
                const src = srcMatch[1];
                if (!src.toLowerCase().endsWith('.webp') && !src.startsWith('data:')) {
                    nonWebp++;
                }
            }
        });
        
        if (!canonical) report.issues.push({ type: 'Minor', location: file, description: 'Missing canonical tag' });
        if (!metaDesc) report.issues.push({ type: 'Minor', location: file, description: 'Missing meta description' });
        if (missingAlt > 0) report.issues.push({ type: 'Minor', location: file, description: `${missingAlt} images missing alt text` });
        if (nonWebp > 0) report.issues.push({ type: 'Minor', location: file, description: `${nonWebp} images not .webp format` });
        
        report.pages.push(file);
    });
    
    fs.writeFileSync(path.join(dir, 'scratch/audit_results.json'), JSON.stringify(report, null, 2));
}

audit();
