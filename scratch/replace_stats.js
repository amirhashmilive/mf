const fs = require('fs');
const path = require('path');

const statsMapping = {
    // General / Homepage
    'Years of service': '14+',
    'Audited years': '14+',
    'Districts active': '12',
    'Self-Help Groups': '860+',
    'River km walked': '1,620',
    'Women farmers': '12,000+',
    'Reports published': '10',
    'Villages restored': '59+',
    'Students taught': '22,000+',
    'Trees planted': '50,000+',
    'Villages impacted': '150+',
    'CSR partners': '3', 
    'Compliance': '100%',
    
    // Initiatives
    'km walked': '1,620',
    'villages': '59',
    'million+ people': '20',
    'students': '22,000+',
    'schools': '12',
    'CGBSE Class 1-12': '1-12',
    'farmers': '50,000+',
    'SHGs': '860+',
    'FPOs': '18',
    'women': '12,000+',
    '12-week CCS course': '12',
    'free courses': '4',
    'sessions': '100+',
    'instructors': '40+',
    'issues': '4',
    'pages each': '32',
    
    // Research
    'rivers studied': '8',
    'research reports': '5',
    'disciplines (IJMEER)': '70+',
    'Disciplines': '70+',
    'Open-access papers': '70+', // Guess based on disciplines
    'Rivers': '8',
    'Reports': '5',
    'Villages surveyed': '12+',
    
    // Financial (if any are tabular-nums)
    'FY 2022-23': '₹13,30,676',
    'FY 2023-24': '₹14,20,399',
    'FY 2024-25': '₹12,75,219'
};

const valueMap = {
    'years of service': '14+',
    'audited years': '14+',
    'districts active': '12',
    'districts': '12',
    'self-help groups': '860+',
    'shgs': '860+',
    'fpos': '18',
    'river km walked': '1,620',
    'km walked': '1,620',
    'women farmers': '12,000+',
    'reports published': '10',
    'villages restored': '59+',
    'students taught': '22,000+',
    'students': '22,000+',
    'schools': '12',
    'trees planted': '50,000+',
    'villages impacted': '150+',
    'villages surveyed': '12+',
    'villages': '59',
    'csr partners': '3',
    'compliance': '100%',
    'people reached': '20M+',
    'rivers studied': '8',
    'rivers': '8',
    'research reports': '5',
    'reports': '5',
    'disciplines': '70+',
    'free courses': '4',
    'sessions': '100+',
    'instructors': '40+',
    'issues': '4',
    'pages': '32',
    'programmes delivered': '12+',
    'csr projects': '3'
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // This regex looks for `<span class="tabular-nums">0+</span></div><div class="...">Label</div>`
    // and replaces the `0+` or `0` or `XX` with the mapped value based on the `Label`
    const regex = /(<span[^>]*class="[^"]*tabular-nums[^"]*"[^>]*>)([^<]+)(<\/span><\/div><div[^>]*>)([^<]+)(<\/div>)/gi;
    
    content = content.replace(regex, (match, p1, value, p3, label, p5) => {
        let cleanLabel = label.trim().toLowerCase();
        let mappedValue = valueMap[cleanLabel];
        
        if (!mappedValue) {
            // Check substring mapping
            for (const [key, val] of Object.entries(valueMap)) {
                if (cleanLabel.includes(key)) {
                    mappedValue = val;
                    break;
                }
            }
        }

        if (mappedValue && (value.includes('0') || value.includes('X') || value === '-' || value === 'TBD')) {
            modified = true;
            return `${p1}${mappedValue}${p3}${label}${p5}`;
        }
        return match; // Unchanged
    });

    // Also look for `<div class="tabular-nums ...">0+</div><div ...>Label</div>`
    const regex2 = /(<div[^>]*class="[^"]*tabular-nums[^"]*"[^>]*>)([^<]+)(<\/div><div[^>]*>)([^<]+)(<\/div>)/gi;
    content = content.replace(regex2, (match, p1, value, p3, label, p5) => {
        let cleanLabel = label.trim().toLowerCase();
        let mappedValue = valueMap[cleanLabel];
        
        if (!mappedValue) {
            for (const [key, val] of Object.entries(valueMap)) {
                if (cleanLabel.includes(key)) {
                    mappedValue = val;
                    break;
                }
            }
        }

        // if there's an internal span, handle it
        let innerRegex = /<span[^>]*>([^<]+)<\/span>/i;
        let innerMatch = value.match(innerRegex);
        if (innerMatch) {
            let innerVal = innerMatch[1];
            if (mappedValue && (innerVal.includes('0') || innerVal.includes('X'))) {
                 let newVal = value.replace(innerVal, mappedValue);
                 modified = true;
                 return `${p1}${newVal}${p3}${label}${p5}`;
            }
        } else {
            if (mappedValue && (value.includes('0') || value.includes('X'))) {
                modified = true;
                return `${p1}${mappedValue}${p3}${label}${p5}`;
            }
        }
        return match;
    });

    // Also delete any empty cards: `<div class="card"></div>` or `<div class="rounded-2xl ..."></div>`
    // We will do a generic empty div remover for standard card structures
    // E.g. <div class="card p-4"></div>
    const emptyCardRegex = /<div class="[^"]*(card|rounded-2xl)[^"]*">\s*<\/div>/g;
    if (emptyCardRegex.test(content)) {
        content = content.replace(emptyCardRegex, '');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated stats in ${filePath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('.git') && !fullPath.includes('node_modules') && !fullPath.includes('backups')) {
                walkDir(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            processFile(fullPath);
        }
    }
}

walkDir('.');
