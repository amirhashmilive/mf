const fs = require('fs');
const path = require('path');

const date = new Date().toISOString().split('T')[0];

const urls = [
    "/",
    "/about/",
    "/about/our-story/",
    "/about/annual-reports/",
    "/about/five-pillars/",
    "/initiatives/",
    "/initiatives/education/",
    "/initiatives/health/",
    "/initiatives/environment/",
    "/initiatives/livelihood/",
    "/initiatives/bolti-nadi/",
    "/initiatives/prayaas/",
    "/initiatives/edusuto/",
    "/initiatives/farmours/",
    "/initiatives/yoga-kutumb/",
    "/initiatives/guriya-magazine/",
    "/initiatives/heritage-walk/",
    "/research/",
    "/research/rivers-chhattisgarh/",
    "/research/ijmeer/",
    "/research/publications/",
    "/research/csr-research/",
    "/emerging/",
    "/emerging/community-radio/",
    "/emerging/media-gallery/",
    "/emerging/news-press/",
    "/emerging/field-notes/",
    "/impact/",
    "/impact/statistics/",
    "/impact/case-studies/",
    "/impact/district-profiles/",
    "/impact/project-gallery/",
    "/impact/testimonials/",
    "/get-involved/",
    "/get-involved/volunteer/",
    "/get-involved/csr-partner/",
    "/get-involved/internship/",
    "/get-involved/donate/",
    "/contact/",
    "/legal/accessibility/",
    "/legal/cookie-policy/",
    "/legal/disclaimer/",
    "/legal/privacy-policy/",
    "/legal/refund-policy/",
    "/legal/terms-of-use/"
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

urls.forEach(url => {
    sitemap += `
  <url>
    <loc>https://meerfoundation.co.in${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
});

sitemap += `\n</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'sitemap.xml'), sitemap, 'utf8');
console.log('sitemap.xml generated.');
