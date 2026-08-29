const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('C:\\Users\\hashm\\Downloads\\Meer-Foundation-Vanilla-HTML-CSS-JS.txt', 'utf8');
const lines = content.split('\n');

let routesStart = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('ALL 46 PAGE ROUTES')) {
        routesStart = i + 4;
        break;
    }
}

const template = fs.readFileSync('index.html', 'utf8');

// Parse routes
let currentRoute = null;
const routes = [];

for (let i = routesStart; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (line.includes('FORM STRUCTURES')) break;
    
    if (line.startsWith('  /') || line === '  /') {
        currentRoute = { path: line.trim() };
        routes.push(currentRoute);
    } else if (currentRoute) {
        if (line.includes('Title:')) currentRoute.title = line.split('Title:')[1].trim();
        if (line.includes('Content:')) currentRoute.content = line.split('Content:')[1].trim();
        if (line.includes('File:')) currentRoute.file = line.split('File:')[1].trim();
    }
}

for (const route of routes) {
    if (!route.file || route.file === 'index.html') continue; // Skip root homepage
    
    // Calculate depth for relative paths
    const depth = route.file.split('/').length - 1;
    let prefix = '';
    for (let i = 0; i < depth; i++) prefix += '../';
    
    // Create directory
    const dir = path.dirname(route.file);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    // Modify template
    let newHtml = template;
    
    // Replace paths
    newHtml = newHtml.replace(/href="assets\//g, `href="${prefix}assets/`);
    newHtml = newHtml.replace(/src="assets\//g, `src="${prefix}assets/`);
    
    // Update links to use trailing slashes for navigation so GitHub Pages serves index.html
    // E.g., /about/ becomes prefix + about/
    newHtml = newHtml.replace(/href="\//g, `href="${prefix}`); 
    
    // Add title
    newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>${route.title} · Meer Foundation</title>`);
    
    // Replace content
    const heroRegex = /<!-- ===== HERO SECTION ===== -->[\s\S]*?(?=<!-- ===== FOOTER ===== -->)/;
    const newMainContent = `
<!-- ===== PAGE CONTENT ===== -->
<section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl)); min-height: 60vh;">
  <div class="container text-center">
    <h1>${route.title}</h1>
    <p class="text-muted" style="max-width: 600px; margin: var(--space-md) auto;">${route.content}</p>
    <div style="padding: var(--space-2xl) 0; border: 2px dashed var(--border); border-radius: var(--r-lg); margin-top: var(--space-lg);">
      <p><em>Template placeholder. Existing content for this route will be migrated here.</em></p>
    </div>
  </div>
</section>
`;
    newHtml = newHtml.replace(heroRegex, newMainContent);
    
    fs.writeFileSync(route.file, newHtml);
    console.log(`Created ${route.file}`);
}

console.log('Finished bulk generating pages.');
