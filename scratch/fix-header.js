const fs = require('fs');
const path = require('path');

function getHeaderHTML(rootPath, logoPath) {
    return `<!-- ===== HEADER ===== -->
<header class="header" id="header">
  <div class="container">
    <a href="${rootPath || '/'}" class="logo"><img src="${logoPath}" alt="Meer Foundation" height="40"></a>
    <nav class="nav" style="margin-left: auto;">
      <div class="nav-item">
        <a href="${rootPath}about/" class="nav-link">About ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}about/our-story/">Our Story & Founder</a>
          <a href="${rootPath}about/annual-reports/">Annual Reports</a>
          <a href="${rootPath}about/five-pillars/">Five Pillars Model</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="${rootPath}initiatives/" class="nav-link">Initiatives ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}initiatives/education/">Education</a>
          <a href="${rootPath}initiatives/health/">Health</a>
          <a href="${rootPath}initiatives/environment/">Environment</a>
          <a href="${rootPath}initiatives/livelihood/">Livelihood</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="${rootPath}research/" class="nav-link">Research ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}research/rivers-chhattisgarh/">Rivers of Chhattisgarh</a>
          <a href="${rootPath}research/ijmeer/">IJMEER Journal</a>
          <a href="${rootPath}research/publications/">Publications</a>
          <a href="${rootPath}research/csr-research/">CSR Research</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="${rootPath}emerging/" class="nav-link">Emerging ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}emerging/community-radio/">Community Radio</a>
          <a href="${rootPath}emerging/media-gallery/">Media Gallery</a>
          <a href="${rootPath}emerging/news-press/">News & Press</a>
          <a href="${rootPath}emerging/field-notes/">Field Notes Blog</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="${rootPath}impact/" class="nav-link">Impact ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}impact/statistics/">Statistics</a>
          <a href="${rootPath}impact/case-studies/">Case Studies</a>
          <a href="${rootPath}impact/district-profiles/">District Profiles</a>
          <a href="${rootPath}impact/project-gallery/">Project Gallery</a>
          <a href="${rootPath}impact/testimonials/">Testimonials</a>
        </div>
      </div>
      <div class="nav-item">
        <a href="${rootPath}get-involved/" class="nav-link">Get Involved ▾</a>
        <div class="nav-dropdown">
          <a href="${rootPath}get-involved/volunteer/">Volunteer</a>
          <a href="${rootPath}get-involved/csr-partner/">CSR Partner</a>
          <a href="${rootPath}get-involved/internship/">Internship</a>
          <a href="${rootPath}get-involved/donate/">Donate</a>
        </div>
      </div>
      <a href="${rootPath}contact/" class="nav-link">Contact</a>
      <button class="theme-toggle" aria-label="Toggle theme" style="margin-left: 0.5rem; margin-right: 1rem;">☾</button>
      <a href="${rootPath}get-involved/donate/" class="btn btn-accent btn-sm">Donate</a>
    </nav>
    <button class="mobile-toggle">☰</button>
  </div>
</header>

<!-- ===== MOBILE MENU ===== -->
<div class="mobile-menu" id="mobileMenu">
  <a href="${rootPath}about/" class="nav-link">About</a>
  <a href="${rootPath}initiatives/" class="nav-link">Initiatives</a>
  <a href="${rootPath}research/" class="nav-link">Research</a>
  <a href="${rootPath}emerging/" class="nav-link">Emerging</a>
  <a href="${rootPath}impact/" class="nav-link">Impact</a>
  <a href="${rootPath}get-involved/" class="nav-link">Get Involved</a>
  <a href="${rootPath}contact/" class="nav-link">Contact</a>
  <div style="margin-top: 1rem; padding: 1rem; text-align: center;">
    <a href="${rootPath}get-involved/donate/" class="btn btn-accent" style="width: 100%; justify-content: center;">Donate</a>
  </div>
</div>`;
}

let modifiedCount = 0;
function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory() && !['scratch','assets','.git','node_modules','data','.agents','backups'].includes(entry.name)) {
            scan(full);
        } else if (entry.name === 'index.html' || (entry.name.endsWith('.html') && dir === '.')) {
            let html = fs.readFileSync(full, 'utf8');
            
            const depth = full.split(path.sep).length - 1;
            const prefix = '../'.repeat(depth);
            const rootPath = depth === 0 ? '' : prefix;
            const logoPath = rootPath + 'assets/images/logo/logo-horizontal.webp';
            
            const newHeader = getHeaderHTML(rootPath, logoPath);
            
            const regex = /<!-- ===== HEADER ===== -->[\s\S]*?<!-- ===== MAIN CONTENT ===== -->/;
            if (regex.test(html)) {
                html = html.replace(regex, newHeader + '\n\n<!-- ===== MAIN CONTENT ===== -->');
                fs.writeFileSync(full, html);
                modifiedCount++;
            }
        }
    }
}

scan('.');
console.log('Modified HTML files:', modifiedCount);
