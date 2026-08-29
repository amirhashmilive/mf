const fs = require('fs');
const path = require('path');

const map = {
    'about.html': '/about/',
    'annual-report.html': '/about/annual-reports/',
    'five-pillars.html': '/about/five-pillars/',
    'initiatives.html': '/initiatives/',
    'bolti-nadi.html': '/initiatives/bolti-nadi/',
    'farmours.html': '/initiatives/farmours/',
    'prayaas.html': '/initiatives/prayaas/',
    'yoga-kutumb.html': '/initiatives/yoga-kutumb/',
    'social-heritage-walk.html': '/initiatives/heritage-walk/',
    'community-radio.html': '/emerging/community-radio/',
    'guriya-magazine.html': '/initiatives/guriya-magazine/',
    'edusuto-courses.html': '/initiatives/edusuto/',
    'rivers.html': '/research/rivers-chhattisgarh/',
    'rivers-chhattisgarh.html': '/research/rivers-chhattisgarh/',
    'ijmeer-journal.html': '/research/ijmeer/',
    'publications.html': '/research/publications/',
    'csr-research.html': '/research/csr-research/',
    'news.html': '/emerging/news-press/',
    'blog.html': '/emerging/field-notes/',
    'media-gallery.html': '/emerging/media-gallery/',
    'impact.html': '/impact/',
    'case-studies.html': '/impact/case-studies/',
    'district-profiles.html': '/impact/district-profiles/',
    'project-gallery.html': '/impact/project-gallery/',
    'testimonials.html': '/impact/testimonials/',
    'volunteer.html': '/get-involved/volunteer/',
    'partner-with-us.html': '/get-involved/csr-partner/',
    'internship.html': '/get-involved/internship/',
    'donate.html': '/get-involved/donate/',
    'contact.html': '/contact/',
    'privacy.html': '/legal/privacy-policy/',
    'terms.html': '/legal/terms-of-use/',
    'refund-cancellation.html': '/legal/refund-policy/'
};

const base = process.cwd();

for (const [oldFile, newPath] of Object.entries(map)) {
    const fullPath = path.join(base, oldFile);
    if (fs.existsSync(fullPath)) {
        const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://meerfoundation.co.in${newPath}">
  <link rel="canonical" href="https://meerfoundation.co.in${newPath}" />
  <title>Redirecting...</title>
</head>
<body>
  <p>If you are not redirected automatically, follow this <a href="https://meerfoundation.co.in${newPath}">link to the new page</a>.</p>
</body>
</html>`;
        
        fs.writeFileSync(fullPath, redirectHtml, 'utf8');
        console.log(`Applied redirect to ${oldFile} -> ${newPath}`);
    } else {
        console.log(`Skipped ${oldFile} (does not exist)`);
    }
}
