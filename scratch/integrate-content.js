/**
 * MEER FOUNDATION — Full Content Integration Script
 * Extracts Z AI page content and wraps in vanilla HTML template
 */
const fs = require('fs');
const path = require('path');

// ── Read source files ──
const contentFile = fs.readFileSync('C:\\Users\\hashm\\Downloads\\2\\Meer-Foundation-All-45-Pages-Content.txt', 'utf8');
const vanillaExport = fs.readFileSync('C:\\Users\\hashm\\Downloads\\2\\Meer-Foundation-Vanilla-HTML-CSS-JS.txt', 'utf8');

// ── Parse page blocks ──
const pages = [];
const delim = /={10,}\r?\nPAGE (\d+)\/\d+: (.+)\r?\nFILE LOCATION: (.+)\r?\n={10,}/g;
let m;
while ((m = delim.exec(contentFile)) !== null) {
    pages.push({
        num: parseInt(m[1]),
        route: m[2].trim(),
        file: m[3].trim(),
        bodyStart: m.index + m[0].length
    });
}
for (let i = 0; i < pages.length; i++) {
    pages[i].bodyEnd = (i + 1 < pages.length)
        ? contentFile.lastIndexOf('='.repeat(10), pages[i + 1].bodyStart - 1)
        : contentFile.length;
}

// ── Extract <main> content from raw SSR HTML ──
function extractMain(raw) {
    // Try to find <main ...>...</main>
    const mainOpen = raw.indexOf('<main');
    const mainClose = raw.lastIndexOf('</main>');
    if (mainOpen !== -1 && mainClose !== -1) {
        // Get everything after the opening <main ...> tag
        const afterTag = raw.indexOf('>', mainOpen) + 1;
        return raw.substring(afterTag, mainClose);
    }
    // Fallback: try to find content after the header closing tag
    const headerClose = raw.indexOf('</header>');
    const footerOpen = raw.indexOf('<footer');
    if (headerClose !== -1 && footerOpen !== -1) {
        return raw.substring(headerClose + '</header>'.length, footerOpen);
    }
    // Last resort: return cleaned raw (strip hidden divs and obvious framework wrappers)
    return raw.replace(/<div hidden="">.*?<\/div>/g, '');
}

// ── Clean React/framework artifacts ──
function cleanHtml(html) {
    return html
        .replace(/<!--\$-->/g, '')
        .replace(/<!--\/\$-->/g, '')
        .replace(/<!-- -->/g, '')
        .replace(/data-nimg="[^"]*"/g, '')
        .replace(/data-slot="[^"]*"/g, '')
        .replace(/style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"/g, '')
        .replace(/style="opacity:0;transform:translateY\(\d+px\)"/g, '') // remove framer-motion initial states
        .replace(/\s+/g, ' ')   // collapse whitespace for readability
        .trim();
}

// ── Extract page title from content ──
function extractTitle(html, route) {
    const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
    if (h1Match) {
        return h1Match[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim().substring(0, 80);
    }
    // Fallback: use route name
    return route.replace(/\//g, ' ').trim() || 'Meer Foundation';
}

// ── Build HTML page ──
function buildPage(mainContent, title, filePath) {
    const depth = filePath.split('/').length - 1;
    const prefix = '../'.repeat(depth);

    // If root index.html, prefix is empty
    const cssPath = depth === 0 ? 'assets/css/style.css' : prefix + 'assets/css/style.css';
    const compatCssPath = depth === 0 ? 'assets/css/content-compat.css' : prefix + 'assets/css/content-compat.css';
    const jsPath = depth === 0 ? 'assets/js/main.js' : prefix + 'assets/js/main.js';
    const logoPath = depth === 0 ? 'assets/images/logo/logo-horizontal.webp' : prefix + 'assets/images/logo/logo-horizontal.webp';
    const rootPath = depth === 0 ? '' : prefix;

    return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} · Meer Foundation</title>
  <meta name="description" content="${title} — Meer Foundation, Chhattisgarh NGO working on Education, Environment, Health, Livelihood and Women Empowerment since 2011.">
  <meta property="og:title" content="${title} · Meer Foundation">
  <meta property="og:type" content="website">
  <link rel="stylesheet" href="${cssPath}">
  <link rel="stylesheet" href="${compatCssPath}">
  <link rel="icon" href="${depth === 0 ? 'assets/images/logo/logo-horizontal.webp' : prefix + 'assets/images/logo/logo-horizontal.webp'}">
</head>
<body>

<!-- ===== HEADER ===== -->
<header class="header" id="header">
  <div class="container">
    <a href="${rootPath || '/'}" class="logo"><img src="${logoPath}" alt="Meer Foundation" height="40"></a>
    <nav class="nav">
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
          <a href="${rootPath}initiatives/bolti-nadi/">Bolti Nadi</a>
          <a href="${rootPath}initiatives/prayaas/">Prayaas</a>
          <a href="${rootPath}initiatives/edusuto/">EduSuTo</a>
          <a href="${rootPath}initiatives/farmours/">Farmours</a>
          <a href="${rootPath}initiatives/yoga-kutumb/">Yoga Kutumb</a>
          <a href="${rootPath}initiatives/guriya-magazine/">Guriya Magazine</a>
          <a href="${rootPath}initiatives/heritage-walk/">Heritage Walk</a>
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
      <button class="theme-toggle" aria-label="Toggle theme">☾</button>
      <a href="${rootPath}get-involved/donate/" class="btn btn-accent btn-sm">Donate</a>
    </nav>
    <button class="mobile-toggle">☰</button>
  </div>
</header>

<!-- ===== MOBILE MENU ===== -->
<div class="mobile-menu" id="mobileMenu">
  <a href="${rootPath}about/">About</a>
  <a href="${rootPath}initiatives/">Initiatives</a>
  <a href="${rootPath}research/">Research</a>
  <a href="${rootPath}emerging/">Emerging</a>
  <a href="${rootPath}impact/">Impact</a>
  <a href="${rootPath}get-involved/">Get Involved</a>
  <a href="${rootPath}contact/">Contact</a>
  <a href="${rootPath}get-involved/donate/" class="btn btn-accent">Donate</a>
</div>

<!-- ===== MAIN CONTENT ===== -->
<main id="main-content" class="page-content">
${mainContent}
</main>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>About</h4>
        <a href="${rootPath}about/our-story/">Our Story & Founder</a>
        <a href="${rootPath}about/annual-reports/">Annual Reports</a>
        <a href="${rootPath}about/five-pillars/">Five Pillars Model</a>
      </div>
      <div>
        <h4>Initiatives</h4>
        <a href="${rootPath}initiatives/bolti-nadi/">Bolti Nadi</a>
        <a href="${rootPath}initiatives/prayaas/">Prayaas</a>
        <a href="${rootPath}initiatives/farmours/">Farmours</a>
        <a href="${rootPath}initiatives/health/">Nirogaayam</a>
        <a href="${rootPath}initiatives/edusuto/">EduSuTo</a>
      </div>
      <div>
        <h4>Get Involved</h4>
        <a href="${rootPath}get-involved/volunteer/">Volunteer</a>
        <a href="${rootPath}get-involved/csr-partner/">CSR Partner</a>
        <a href="${rootPath}get-involved/internship/">Internship</a>
        <a href="${rootPath}get-involved/donate/">Donate</a>
        <a href="${rootPath}contact/">Contact</a>
      </div>
      <div>
        <h4>Legal</h4>
        <a href="${rootPath}legal/privacy-policy/">Privacy Policy</a>
        <a href="${rootPath}legal/terms-of-use/">Terms of Use</a>
        <a href="${rootPath}legal/cookie-policy/">Cookie Policy</a>
        <a href="${rootPath}legal/accessibility/">Accessibility</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2011–2026 Meer Foundation · CC-BY 4.0 · Empowering Rural Communities & Restoring Rivers</p>
      <p style="margin-top: 8px; opacity: 0.6;">CSR-1: CSR00075824 · 12A: AAICM9348LE20214 · 80G: AAICM9348LF20217 · NGO Darpan: CG/2018/0191949</p>
    </div>
  </div>
</footer>

<script src="${jsPath}"></script>
</body>
</html>`;
}

// ── Process all pages ──
let created = 0;
let failed = 0;

for (const page of pages) {
    try {
        const rawBody = contentFile.substring(page.bodyStart, page.bodyEnd);
        let mainContent = extractMain(rawBody);
        mainContent = cleanHtml(mainContent);
        const title = extractTitle(mainContent, page.route);

        const fullHtml = buildPage(mainContent, title, page.file);

        // Create directory
        const dir = path.dirname(page.file);
        if (dir !== '.') fs.mkdirSync(dir, { recursive: true });

        fs.writeFileSync(page.file, fullHtml, 'utf8');
        const sizeKB = (Buffer.byteLength(fullHtml) / 1024).toFixed(1);
        console.log(`✓ ${page.file} (${sizeKB} KB)`);
        created++;
    } catch (err) {
        console.error(`✗ ${page.file}: ${err.message}`);
        failed++;
    }
}

console.log(`\nDone: ${created} pages created, ${failed} failed.`);
