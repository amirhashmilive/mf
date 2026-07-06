const fs = require('fs');
const path = require('path');

const base = process.cwd();

function writePage(relativePath, title, metaDesc, canonical, depth, h1, sectionTag, bodyContent) {
    const assetPath = "../".repeat(depth);
    const compScript = `${assetPath}assets/js/components-sub.js?v=4`;
    const coreScript = `${assetPath}assets/js/core.js?v=4`;
    const css = `${assetPath}assets/css/style.css?v=4`;
    const favicon = "/assets/images/favicon.svg";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="https://meerfoundation.co.in/${canonical}">
  <link rel="icon" type="image/svg+xml" href="${favicon}">
  <link rel="stylesheet" href="${css}">
</head>
<body>
<div id="progress-bar"></div>
<div id="site-header-inject"></div>
${bodyContent}
<div id="site-footer-inject"></div>
<script src="${compScript}"></script>
<script src="${coreScript}"></script>
</body>
</html>`;
    
    const fullPath = path.join(base, relativePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, html, 'utf8');
    console.log(`Created: ${relativePath}`);
}

const pages = [
    {
        path: "initiatives/index.html",
        title: "Initiatives | Meer Foundation",
        desc: "Discover Meer Foundation's initiatives across education, health, environment, and livelihood in Chhattisgarh.",
        canon: "initiatives/",
        depth: 2,
        h1: "Our Initiatives",
        tag: "What We Do",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">What We Do</div>
      <h1 class="section-title">Our Initiatives</h1>
      <p class="section-subtitle">Holistic development across 10 districts of Chhattisgarh through four thematic pillars.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <a href="/initiatives/education/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;">
        <div class="hero-card-badge">SDG 4</div>
        <h3 style="margin:15px 0;">Education</h3>
        <p style="font-size:0.9rem;color:var(--text-3);">Smart classrooms, scholarship programmes, science labs, and teacher training in 150+ government schools across rural Chhattisgarh.</p>
        <div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Education →</div>
      </a>
      <a href="/initiatives/health/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;">
        <div class="hero-card-badge">SDG 3</div>
        <h3 style="margin:15px 0;">Health &amp; Well-being</h3>
        <p style="font-size:0.9rem;color:var(--text-3);">Yoga Kutumb and holistic wellness programmes integrating certified yoga professionals into rural communities for lasting well-being.</p>
        <div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Health →</div>
      </a>
      <a href="/initiatives/environment/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;">
        <div class="hero-card-badge">SDG 6 · SDG 15</div>
        <h3 style="margin:15px 0;">Environment</h3>
        <p style="font-size:0.9rem;color:var(--text-3);">Bolti Nadi — community-led river conservation, the 90km Sakri River Walk, and ongoing monitoring of 20 major Chhattisgarh rivers.</p>
        <div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Environment →</div>
      </a>
      <a href="/initiatives/livelihood/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;">
        <div class="hero-card-badge">SDG 1 · SDG 8</div>
        <h3 style="margin:15px 0;">Livelihood</h3>
        <p style="font-size:0.9rem;color:var(--text-3);">Farmours — indigenous farming systems, women-led SHGs, and market linkages empowering 216+ entrepreneurs across Chhattisgarh.</p>
        <div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Livelihood →</div>
      </a>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/education/index.html",
        title: "Education Initiative — Prayaas | Meer Foundation",
        desc: "Meer Foundation's Prayaas initiative delivers quality education to rural Chhattisgarh through smart classrooms, scholarships, and teacher training in 150+ schools.",
        canon: "initiatives/education/",
        depth: 3,
        h1: "Education",
        tag: "SDG 4",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">SDG 4 – Quality Education</div>
      <h1 class="section-title">Prayaas: Reshaping Rural Education</h1>
      <p class="section-subtitle">Bridging the gap between traditional learning and modern educational methodologies across rural Chhattisgarh.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Prayaas is a transformative initiative dedicated to bridging the gap between traditional learning and modern educational methodologies in rural Chhattisgarh. As the implementing agency for education-focused CSR projects, Meer Foundation has upgraded 150+ schools with smart classrooms, computer labs, and digital tools.</p>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Smart classroom installations in 150+ government schools</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Scholarships enabling 1,200+ meritorious BPL students to continue education</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Adult literacy and vocational training for out-of-school youth</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Girl education advocacy across 59+ villages</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Science labs and library development programmes</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">150+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Schools Reached</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">34.6L</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Students Impacted</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">2.11L</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Teachers Trained</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">2,271</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Sanitation Units</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:10px;">Smart Classrooms</h4><p style="font-size:.9rem;color:var(--text-3);">Interactive digital boards, projector systems, and e-learning content deployed across government higher secondary and high schools.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:10px;">Scholarship Programme</h4><p style="font-size:.9rem;color:var(--text-3);">Financial support for meritorious students from economically weaker sections, reducing dropout rates and enabling higher education access.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:10px;">Science Labs</h4><p style="font-size:.9rem;color:var(--text-3);">Fully-equipped science laboratories installed in underserved schools, aligning with the national STEM agenda for rural students.</p></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/health/index.html",
        title: "Health & Well-being — Yoga Kutumb | Meer Foundation",
        desc: "Meer Foundation's Yoga Kutumb initiative promotes holistic well-being through certified yoga training and community wellness programmes in rural Chhattisgarh.",
        canon: "initiatives/health/",
        depth: 3,
        h1: "Health & Well-being",
        tag: "SDG 3",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">SDG 3 – Good Health &amp; Well-being</div>
      <h1 class="section-title">Yoga Kutumb: Holistic Well-being</h1>
      <p class="section-subtitle">Integrating principles of holistic well-being into everyday life through certified yoga professionals and community wellness training.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Yoga Kutumb integrates the science of yoga with community health initiatives, creating a network of trained practitioners who serve as wellness ambassadors in their villages. This initiative addresses physical, mental, and spiritual health through certified training programmes.</p>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Certified yoga instructor training for community members</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> 225+ youth trained as wellness ambassadors</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Women-focused health and nutrition workshops</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Mental health awareness campaigns in rural schools</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="feature-card" style="text-align:center;padding:40px;">
          <div style="font-size:3rem;margin-bottom:16px;">🧘</div>
          <h3 style="margin-bottom:16px;">Yoga Kutumb</h3>
          <p style="color:var(--text-3);font-size:0.9rem;line-height:1.7;">A community of wellness practitioners building healthier, happier rural Chhattisgarh — one village at a time.</p>
          <a href="/get-involved/volunteer/" class="btn btn-primary" style="margin-top:24px;">Join as Volunteer</a>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:10px;">Certified Training</h4><p style="font-size:.9rem;color:var(--text-3);">Nationally accredited yoga instructor certification programmes that empower community members to lead local wellness sessions.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:10px;">Women's Health</h4><p style="font-size:.9rem;color:var(--text-3);">Specialized workshops addressing maternal health, nutrition, and mental well-being for women in rural communities.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:10px;">School Integration</h4><p style="font-size:.9rem;color:var(--text-3);">Daily yoga sessions integrated into school curricula across project districts, promoting focus and physical fitness from a young age.</p></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/environment/index.html",
        title: "Environment — Bolti Nadi River Conservation | Meer Foundation",
        desc: "Bolti Nadi: Meer Foundation's flagship river conservation initiative documenting and protecting Chhattisgarh's rivers through community-led walks and scientific assessment.",
        canon: "initiatives/environment/",
        depth: 3,
        h1: "Environment & Conservation",
        tag: "SDG 6 · SDG 15",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">SDG 6 · SDG 15</div>
      <h1 class="section-title">Bolti Nadi: Let the Rivers Speak</h1>
      <p class="section-subtitle">A community-driven movement to restore, protect, and document the lifelines of Chhattisgarh.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">In 2019, the Bolti Nadi initiative undertook a historic 90-kilometer on-foot expedition along the Sakri River. Traversing from its origin in Kariyama Village to its confluence with the Half River in Darhi Village, the team spent four continuous days documenting the river's health.</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:30px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">90KM</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">On-Foot Expedition</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">5K+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Citizens Mobilized</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">59</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Villages Reached</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">50+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Countries Screened</div></div>
        </div>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);">
          <h3 style="margin-bottom:20px;">Measurable Impact</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> ₹2 Crore Sewage Treatment Plant established in Kawardha due to our policy submission.</li>
            <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> Large-scale tree plantation along banks approved under Mukhyamantri Vriksh Sampada Yojana.</li>
            <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> MGNREGA teams mobilized for desilting across 59 villages.</li>
            <li style="display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> Continuous monitoring of 3 major rivers established with local youth volunteers.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/livelihood/index.html",
        title: "Livelihood — Farmours Initiative | Meer Foundation",
        desc: "Farmours — Meer Foundation's indigenous farming systems initiative empowering rural women entrepreneurs with sustainable livelihood in Chhattisgarh.",
        canon: "initiatives/livelihood/",
        depth: 3,
        h1: "Livelihood & Entrepreneurship",
        tag: "SDG 1 · SDG 2 · SDG 8",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">SDG 1 · SDG 2 · SDG 8</div>
      <h1 class="section-title">Farmours: Indigenous Farming Systems</h1>
      <p class="section-subtitle">Transforming traditional village-based farming into a structured, community-owned livelihood model across Chhattisgarh.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Meer Foundation's Indigenous Farming Systems (FARMOURS) transforms traditional village-based farming into a structured, community-owned livelihood model. Implemented in the Nagri forest region of Dhamtari district, this initiative introduces makhana (fox nut) cultivation as a high-value, sustainable livelihood.</p>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> 100 acres identified; 25 acres in active cultivation (Phase 1)</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Women SHGs mobilised and trained as primary decision-makers</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Demonstration pilot plots and market linkages established</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Medicinal plant cultivation across 200 acres in Kanker-Narayanpur</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">54+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">SHGs Formed</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">216+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Women Entrepreneurs</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">100</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Acres Identified</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">200</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Farmers Trained</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/bolti-nadi/index.html",
        title: "Bolti Nadi | Flagship River Conservation Initiative — Meer Foundation",
        desc: "Bolti Nadi: Meer Foundation's 90km Sakri River Walk documenting and protecting Chhattisgarh's rivers through community-led conservation since 2016.",
        canon: "initiatives/bolti-nadi/",
        depth: 3,
        h1: "Bolti Nadi",
        tag: "Flagship Initiative",
        body: `
<section style="background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/images/hero-bg.webp');background-size:cover;background-position:center;padding:160px 0 100px;color:#fff;text-align:center;">
  <div class="container">
    <div class="hero-badge" style="background:rgba(255,255,255,0.2);color:#fff;border-color:rgba(255,255,255,0.3);">Flagship Initiative</div>
    <h1 style="font-size:3.5rem;margin-bottom:20px;">Bolti Nadi</h1>
    <p style="font-size:1.2rem;max-width:700px;margin:0 auto;opacity:0.9;">"Let the Rivers Speak" — A community-driven movement to restore, protect, and document the lifelines of Chhattisgarh.</p>
  </div>
</section>
<div class="container">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin-top:-60px;z-index:10;position:relative;">
    <div style="background:#fff;padding:30px;border-radius:var(--r-xl);box-shadow:var(--shadow-lg);text-align:center;border:1px solid var(--border);"><div style="font-family:var(--font-serif);font-size:2.5rem;font-weight:800;color:#1e40af;line-height:1;">90KM</div><div style="font-size:0.8rem;color:var(--text-3);font-weight:600;text-transform:uppercase;margin-top:8px;">On-Foot Expedition</div></div>
    <div style="background:#fff;padding:30px;border-radius:var(--r-xl);box-shadow:var(--shadow-lg);text-align:center;border:1px solid var(--border);"><div style="font-family:var(--font-serif);font-size:2.5rem;font-weight:800;color:#1e40af;line-height:1;">5K+</div><div style="font-size:0.8rem;color:var(--text-3);font-weight:600;text-transform:uppercase;margin-top:8px;">Citizens Mobilized</div></div>
    <div style="background:#fff;padding:30px;border-radius:var(--r-xl);box-shadow:var(--shadow-lg);text-align:center;border:1px solid var(--border);"><div style="font-family:var(--font-serif);font-size:2.5rem;font-weight:800;color:#1e40af;line-height:1;">59</div><div style="font-size:0.8rem;color:var(--text-3);font-weight:600;text-transform:uppercase;margin-top:8px;">Villages Reached</div></div>
    <div style="background:#fff;padding:30px;border-radius:var(--r-xl);box-shadow:var(--shadow-lg);text-align:center;border:1px solid var(--border);"><div style="font-family:var(--font-serif);font-size:2.5rem;font-weight:800;color:#1e40af;line-height:1;">50+</div><div style="font-size:0.8rem;color:var(--text-3);font-weight:600;text-transform:uppercase;margin-top:8px;">Countries Screened</div></div>
  </div>
</div>
<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;" class="reveal">
      <div>
        <h2 style="font-family:var(--font-serif);margin-bottom:25px;">Sakri River Walk (2019)</h2>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">In 2019, the Bolti Nadi initiative undertook a historic 90-kilometer on-foot expedition along the Sakri River. The mission combined hydrological assessment, ecological documentation, and community consultation across 59 villages.</p>
      </div>
      <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);">
        <h3 style="margin-bottom:20px;">Measurable Impact</h3>
        <ul style="list-style:none;padding:0;">
          <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> ₹2 Crore Sewage Treatment Plant established in Kawardha</li>
          <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> Large-scale tree plantation along river banks approved</li>
          <li style="margin-bottom:15px;display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> MGNREGA teams mobilized for desilting across 59 villages</li>
          <li style="display:flex;gap:10px;"><span style="color:#10b981;font-weight:800;">✓</span> Monitoring of 3 major rivers established with local youth</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/farmours/index.html",
        title: "Farmours — Indigenous Farming & Livelihood | Meer Foundation",
        desc: "Farmours: Meer Foundation's indigenous farming systems initiative supporting 216+ women entrepreneurs through sustainable livelihood in Chhattisgarh.",
        canon: "initiatives/farmours/",
        depth: 3,
        h1: "Farmours Initiative",
        tag: "SDG 1 · SDG 2 · SDG 8",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">SDG 1 · SDG 2 · SDG 8</div>
      <h1 class="section-title">Farmours Initiative</h1>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p class="section-subtitle" style="text-align:left;">Meer Foundation's Indigenous Farming Systems (FARMOURS) transforms traditional village-based farming into a structured, community-owned livelihood model across Chhattisgarh.</p>
        <h2 style="font-family:var(--font-serif);margin:16px 0 20px;">Dhamtari Makhana Initiative</h2>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Implemented in the <strong>Nagri forest region of Dhamtari district</strong>, this initiative introduces makhana (fox nut) cultivation as a high-value, sustainable livelihood leveraging the region's favourable agro-climatic conditions and perennial water bodies.</p>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div style="display:inline-flex;flex-direction:column;align-items:center;background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 30px;text-align:center;"><span style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;color:#1e40af;line-height:1;">100</span><span style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-4);margin-top:6px;">Acres Identified</span></div>
          <div style="display:inline-flex;flex-direction:column;align-items:center;background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 30px;text-align:center;"><span style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;color:#1e40af;line-height:1;">54+</span><span style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-4);margin-top:6px;">SHGs Formed</span></div>
          <div style="display:inline-flex;flex-direction:column;align-items:center;background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 30px;text-align:center;"><span style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;color:#1e40af;line-height:1;">216+</span><span style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-4);margin-top:6px;">Women Entrepreneurs</span></div>
          <div style="display:inline-flex;flex-direction:column;align-items:center;background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 30px;text-align:center;"><span style="font-family:var(--font-serif);font-size:2.2rem;font-weight:800;color:#1e40af;line-height:1;">25</span><span style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-4);margin-top:6px;">Acres Phase 1</span></div>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/prayaas/index.html",
        title: "Prayaas — Quality Education Initiative | Meer Foundation",
        desc: "Prayaas: Meer Foundation's flagship education initiative delivering smart classrooms, scholarships, and digital learning to 150+ schools in rural Chhattisgarh.",
        canon: "initiatives/prayaas/",
        depth: 3,
        h1: "Prayaas: Reshaping Rural Education",
        tag: "SDG 4",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">SDG 4 – Quality Education</div><h1 class="section-title">Prayaas: Reshaping Rural Education</h1></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Prayaas is a transformative initiative by Meer Foundation dedicated to bridging the gap between traditional learning and modern educational methodologies in rural Chhattisgarh. As the implementing agency for education-focused CSR projects, Meer Foundation has upgraded 150+ schools with smart classrooms, computer labs, and digital tools.</p>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Smart classroom installations bringing digital learning to 150+ government schools</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Scholarship programmes enabling 1,200+ meritorious students from BPL families</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Girl education advocacy in 59+ villages</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Science labs and library development programmes</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">150+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Schools Reached</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">34.6L</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Students Impacted</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/yoga-kutumb/index.html",
        title: "Yoga Kutumb — Health & Well-being Initiative | Meer Foundation",
        desc: "Yoga Kutumb: Meer Foundation's holistic wellness programme training community yoga instructors and promoting well-being in rural Chhattisgarh.",
        canon: "initiatives/yoga-kutumb/",
        depth: 3,
        h1: "Yoga Kutumb",
        tag: "SDG 3",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">SDG 3 – Good Health</div><h1 class="section-title">Yoga Kutumb</h1><p class="section-subtitle">Integrating principles of holistic well-being into everyday life through certified yoga professionals and community training.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:10px;">225+ Youth Trained</h4><p style="font-size:.9rem;color:var(--text-3);">Certified yoga and wellness ambassadors trained and deployed across 10+ districts of Chhattisgarh.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:10px;">Women's Well-being</h4><p style="font-size:.9rem;color:var(--text-3);">Specialized programmes addressing maternal health, mental wellness, and nutrition for rural women.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:10px;">School Integration</h4><p style="font-size:.9rem;color:var(--text-3);">Daily yoga sessions woven into school schedules, cultivating focus and physical fitness from an early age.</p></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/guriya-magazine/index.html",
        title: "Guriya Magazine — Community Publication | Meer Foundation",
        desc: "Guriya Magazine: Meer Foundation's community publication celebrating women's voices and rural culture in Chhattisgarh.",
        canon: "initiatives/guriya-magazine/",
        depth: 3,
        h1: "Guriya Magazine",
        tag: "Emerging Platform",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Community Media</div><h1 class="section-title">Guriya Magazine</h1><p class="section-subtitle">A community-focused publication celebrating women's voices, rural culture, and development narratives from Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Guriya Magazine serves as a platform for rural women to share their stories, celebrate their culture, and advocate for their communities. Published by Meer Foundation, each edition features local voices, development success stories, and cultural documentation from across Chhattisgarh.</p>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="feature-card" style="text-align:center;padding:40px;"><div style="font-size:3rem;margin-bottom:16px;">📖</div><h3>Read Guriya Magazine</h3><p style="color:var(--text-3);font-size:0.9rem;margin-top:12px;">Available in print and digital formats across project communities.</p><a href="/contact/" class="btn btn-primary" style="margin-top:24px;">Request a Copy</a></div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "initiatives/edusuto/index.html",
        title: "EduSuTo Courses — Education Sustainability Tourism | Meer Foundation",
        desc: "EduSuTo — Meer Foundation's curated online learning series covering Education, Sustainability, and Tourism for rural youth and change-makers in Chhattisgarh.",
        canon: "initiatives/edusuto/",
        depth: 3,
        h1: "EduSuTo Courses",
        tag: "Knowledge Platform",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Education · Sustainability · Tourism</div><h1 class="section-title">EduSuTo Courses</h1><p class="section-subtitle">A curated online learning series designed for rural youth and grassroots change-makers across Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:10px;">Education</h4><p style="font-size:.9rem;color:var(--text-3);">Courses on pedagogy, community education management, and child development for grassroots educators.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:10px;">Sustainability</h4><p style="font-size:.9rem;color:var(--text-3);">Environmental awareness, sustainable farming, water conservation, and ecological impact assessment modules.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:10px;">Tourism</h4><p style="font-size:.9rem;color:var(--text-3);">Rural and heritage tourism management for local entrepreneurs, enabling community-based tourism ventures.</p></div>
    </div>
    <div style="text-align:center;margin-top:40px;" class="reveal"><a href="/research/ijmeer/" class="btn btn-primary">View IJMEER Journal</a>&nbsp;&nbsp;<a href="/get-involved/volunteer/" class="btn btn-outline">Join as Volunteer</a></div>
  </div>
</section>
`
    },
    {
        path: "initiatives/heritage-walk/index.html",
        title: "Social Heritage Walk — Cultural Initiative | Meer Foundation",
        desc: "Social Heritage Walk: Meer Foundation's immersive community walks celebrating Chhattisgarh's rich cultural heritage and connecting people with their roots.",
        canon: "initiatives/heritage-walk/",
        depth: 3,
        h1: "Social Heritage Walk",
        tag: "Culture",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Culture &amp; Heritage</div><h1 class="section-title">Social Heritage Walk</h1><p class="section-subtitle">Celebrating Chhattisgarh's rich cultural heritage through immersive community walks that connect people with their roots.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">The Social Heritage Walk initiative organizes immersive cultural walks through Chhattisgarh's historic villages, temples, rivers, and tribal settlements. These walks document oral histories, traditional practices, and architectural heritage while fostering community pride and inter-generational knowledge transfer.</p>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Documentation of tribal art, crafts, and oral traditions</li>
          <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Community-led guided heritage walks for schools and tourists</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Integration with Bolti Nadi for riverine heritage documentation</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="feature-card" style="text-align:center;padding:40px;"><div style="font-size:3rem;margin-bottom:16px;">🏛️</div><h3>Join a Heritage Walk</h3><p style="color:var(--text-3);font-size:0.9rem;margin-top:12px;">Open to schools, universities, and community groups across Chhattisgarh.</p><a href="/contact/" class="btn btn-primary" style="margin-top:24px;">Enquire Now</a></div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "research/index.html",
        title: "Research & Publications | Meer Foundation",
        desc: "Meer Foundation's research portfolio: rivers of Chhattisgarh, IJMEER Journal, academic publications, and CSR research serving ecology and community development.",
        canon: "research/",
        depth: 2,
        h1: "Research & Publications",
        tag: "Knowledge Creation",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Knowledge Creation</div>
      <h1 class="section-title">Research &amp; Publications</h1>
      <p class="section-subtitle">Evidence-based knowledge creation driving policy change and community empowerment in Chhattisgarh.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <a href="/research/rivers-chhattisgarh/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🌊</div><h3 style="margin:12px 0;">Rivers of Chhattisgarh</h3><p style="font-size:0.9rem;color:var(--text-3);">Comprehensive documentation of 20 major rivers — ecology, culture, pollution status, and conservation framework.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Archive →</div></a>
      <a href="/research/ijmeer/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📰</div><h3 style="margin:12px 0;">IJMEER Journal</h3><p style="font-size:0.9rem;color:var(--text-3);">Open-access, peer-reviewed quarterly journal covering 70+ multidisciplinary research fields published by Meer Foundation.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read Journal →</div></a>
      <a href="/research/publications/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📚</div><h3 style="margin:12px 0;">Publications</h3><p style="font-size:0.9rem;color:var(--text-3);">Research papers, policy reports, and working documents produced by Meer Foundation and published externally.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Browse Publications →</div></a>
      <a href="/research/csr-research/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🏢</div><h3 style="margin:12px 0;">CSR Research</h3><p style="font-size:0.9rem;color:var(--text-3);">Evidence-based CSR communication research informing corporate social responsibility policy and implementation in India.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Research →</div></a>
    </div>
  </div>
</section>
`
    },
    {
        path: "research/rivers-chhattisgarh/index.html",
        title: "Rivers of Chhattisgarh | Meer Foundation Research",
        desc: "Comprehensive documentation of 20 major rivers of Chhattisgarh — ecology, culture, pollution status, and conservation framework by Meer Foundation.",
        canon: "research/rivers-chhattisgarh/",
        depth: 3,
        h1: "Rivers of Chhattisgarh",
        tag: "Water Research",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Water Research</div><h1 class="section-title">Rivers of Chhattisgarh</h1><p class="section-subtitle">Comprehensive documentation of 20 major rivers — ecology, culture, pollution status, and conservation framework.</p></div></div>
</section>
<section class="section">
  <div class="container reveal">
    <p style="color:var(--text-2);line-height:1.8;max-width:800px;margin:0 auto 40px;text-align:center;">Meer Foundation maintains one of Chhattisgarh's most comprehensive databases on river health, cultural significance, and ecological status. This research feeds directly into policy advocacy and community conservation programmes.</p>
    <div class="grid-3">
      <div class="feature-card"><h4 style="color:#1e40af;margin-bottom:10px;">Ecological Assessment</h4><p style="font-size:.9rem;color:var(--text-3);">Water quality, biodiversity surveys, and hydrological profiling of major rivers including Sakri, Mahanadi, Jonk, and Indravati.</p></div>
      <div class="feature-card"><h4 style="color:#1e40af;margin-bottom:10px;">Cultural Documentation</h4><p style="font-size:.9rem;color:var(--text-3);">Recording oral traditions, festivals, and community relationships with rivers as part of intangible heritage preservation.</p></div>
      <div class="feature-card"><h4 style="color:#1e40af;margin-bottom:10px;">Pollution Mapping</h4><p style="font-size:.9rem;color:var(--text-3);">GIS-based pollution source mapping, industrial effluent tracking, and community health impact assessment across 59+ villages.</p></div>
    </div>
    <div style="text-align:center;margin-top:40px;"><a href="/initiatives/environment/" class="btn btn-primary">Bolti Nadi Initiative</a>&nbsp;&nbsp;<a href="/contact/" class="btn btn-outline">Request Research Data</a></div>
  </div>
</section>
`
    },
    {
        path: "research/ijmeer/index.html",
        title: "IJMEER Journal — International Journal | Meer Foundation",
        desc: "IJMEER: The International Journal of Multidisciplinary Educational and Ecological Research — an open-access, peer-reviewed quarterly journal published by Meer Foundation.",
        canon: "research/ijmeer/",
        depth: 3,
        h1: "IJMEER Journal",
        tag: "Open-Access Research",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Open-Access Journal</div><h1 class="section-title">IJMEER Journal</h1><p class="section-subtitle">International Journal of Multidisciplinary Educational and Ecological Research — published quarterly by Meer Foundation.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">IJMEER is a peer-reviewed, open-access quarterly journal covering 70+ multidisciplinary research fields. Indexed in multiple databases and committed to advancing knowledge at the intersection of ecology, education, and community development.</p>
        <div class="grid-2" style="margin-top:30px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">70+</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Research Fields</div></div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;"><div style="font-size:2rem;font-weight:800;color:#1e40af;">4x</div><div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Issues Per Year</div></div>
        </div>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
          <h3 style="margin-bottom:16px;">Submit Your Research</h3>
          <p style="opacity:.88;margin-bottom:24px;">We welcome original research from scholars, practitioners, and community researchers working at the intersection of ecology, education, and social development.</p>
          <a href="mailto:ijmeerj@gmail.com" class="btn" style="background:#fff;color:#1e40af;display:inline-block;">Submit Manuscript</a>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "research/publications/index.html",
        title: "Publications | Meer Foundation Research Output",
        desc: "Research papers, policy reports, and working documents produced by Meer Foundation covering community development, river conservation, and CSR in Chhattisgarh.",
        canon: "research/publications/",
        depth: 3,
        h1: "Publications",
        tag: "Research Output",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Research Output</div><h1 class="section-title">Publications</h1><p class="section-subtitle">Research papers, policy reports, and working documents produced by Meer Foundation and affiliated researchers.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:10px;">Policy Reports</h4><p style="font-size:.9rem;color:var(--text-3);">Evidence-based policy submissions to district and state governments on river conservation, education, and rural livelihoods.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:10px;">Research Papers</h4><p style="font-size:.9rem;color:var(--text-3);">Peer-reviewed articles published in IJMEER and other indexed journals covering multidisciplinary community research.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:10px;">Working Documents</h4><p style="font-size:.9rem;color:var(--text-3);">Internal research memoranda, field reports, and programme evaluations shared with partner organizations and government bodies.</p></div>
    </div>
    <div style="text-align:center;margin-top:40px;" class="reveal"><a href="/research/ijmeer/" class="btn btn-primary">IJMEER Journal</a>&nbsp;&nbsp;<a href="mailto:info@meerfoundation.co.in" class="btn btn-outline">Request Publications</a></div>
  </div>
</section>
`
    },
    {
        path: "research/csr-research/index.html",
        title: "CSR Research | Meer Foundation",
        desc: "Meer Foundation's CSR research programme: evidence-based corporate social responsibility communication, policy analysis, and implementation frameworks for Chhattisgarh.",
        canon: "research/csr-research/",
        depth: 3,
        h1: "CSR Research",
        tag: "Corporate Social Responsibility",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Corporate Social Responsibility</div><h1 class="section-title">CSR Research</h1><p class="section-subtitle">Evidence-based research informing corporate social responsibility policy and implementation across central India.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Meer Foundation's CSR research builds on the Five Pillars Framework, providing corporations with evidence-based frameworks to align their CSR investments with genuine community need. This research directly informs our role as a CSR implementing agency in Chhattisgarh.</p>
        <p style="color:var(--text-2);line-height:1.8;">Founder Amir Hashmi's PhD research at Kabindra Tagore University focuses specifically on CSR communication and community development — feeding cutting-edge academic insight directly into our on-ground programmes.</p>
        <a href="/get-involved/csr-partner/" class="btn btn-primary" style="margin-top:30px;">Become a CSR Partner</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);">
          <h3 style="margin-bottom:20px;">Research Focus Areas</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:800;">→</span> CSR Communication Effectiveness in Rural India</li>
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:800;">→</span> Five Pillars Framework Application in Corporate Programmes</li>
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:800;">→</span> Community Development Indicators and Measurement</li>
            <li style="display:flex;gap:10px;"><span style="color:#1e40af;font-weight:800;">→</span> Environmental CSR: River Conservation Policy Impact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "emerging/index.html",
        title: "Emerging Platforms | Meer Foundation",
        desc: "Meer Foundation's emerging media platforms: Community Radio, Media Gallery, News & Press, and Field Notes Blog — amplifying rural voices from Chhattisgarh.",
        canon: "emerging/",
        depth: 2,
        h1: "Emerging Platforms",
        tag: "Media & Communication",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Media &amp; Communication</div>
      <h1 class="section-title">Emerging Platforms</h1>
      <p class="section-subtitle">Amplifying community voices and grassroots stories through new-age media platforms.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <a href="/emerging/community-radio/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📻</div><h3 style="margin:12px 0;">Community Radio</h3><p style="font-size:0.9rem;color:var(--text-3);">Grassroots radio connecting rural communities with local news, health advisories, and cultural content in regional languages.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Learn More →</div></a>
      <a href="/emerging/media-gallery/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🖼️</div><h3 style="margin:12px 0;">Media Gallery</h3><p style="font-size:0.9rem;color:var(--text-3);">Visual documentation of Meer Foundation's impact — field photography, event coverage, and community stories.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">View Gallery →</div></a>
      <a href="/emerging/news-press/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📰</div><h3 style="margin:12px 0;">News &amp; Press</h3><p style="font-size:0.9rem;color:var(--text-3);">Media coverage, press releases, and news stories featuring Meer Foundation's work across national and regional publications.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read News →</div></a>
      <a href="/emerging/field-notes/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">✍️</div><h3 style="margin:12px 0;">Field Notes Blog</h3><p style="font-size:0.9rem;color:var(--text-3);">First-hand accounts, reflections, and learnings from our team members working on the ground across Chhattisgarh.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read Blog →</div></a>
    </div>
  </div>
</section>
`
    },
    {
        path: "emerging/community-radio/index.html",
        title: "Community Radio | Meer Foundation",
        desc: "Meer Foundation's Community Radio initiative bringing local news, health information, and cultural programming to rural communities in regional languages across Chhattisgarh.",
        canon: "emerging/community-radio/",
        depth: 3,
        h1: "Community Radio",
        tag: "Emerging Platform",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Community Media</div><h1 class="section-title">Community Radio</h1><p class="section-subtitle">Grassroots radio programming connecting rural communities with local news, health advisories, and cultural content in regional languages.</p></div></div>
</section>
<section class="section">
  <div class="container"><div class="grid-2">
    <div class="reveal"><p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Community Radio Meer is an emerging platform dedicated to amplifying local voices across Chhattisgarh. Broadcasting in Chhattisgarhi, Hindi, and tribal dialects, the station provides health information, agricultural advisories, cultural programming, and civic awareness content designed specifically for rural audiences.</p>
    <ul style="list-style:none;padding:0;">
      <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Local language programming in Chhattisgarhi and tribal dialects</li>
      <li style="display:flex;gap:12px;margin-bottom:14px;"><span style="color:#10b981;font-weight:800;">✓</span> Health and nutrition advisories for rural women</li>
      <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">✓</span> Agricultural information and market price updates</li>
    </ul></div>
    <div class="reveal reveal-delay-1"><div class="feature-card" style="text-align:center;padding:40px;"><div style="font-size:3rem;margin-bottom:16px;">📻</div><h3>Radio Meer</h3><p style="color:var(--text-3);font-size:0.9rem;margin-top:12px;">Your voice. Your community. Your radio.</p><a href="/contact/" class="btn btn-primary" style="margin-top:24px;">Partner With Us</a></div></div>
  </div></div>
</section>
`
    },
    {
        path: "emerging/media-gallery/index.html",
        title: "Media Gallery | Meer Foundation",
        desc: "Visual documentation of Meer Foundation's community impact — field photography, event coverage, and stories from across Chhattisgarh.",
        canon: "emerging/media-gallery/",
        depth: 3,
        h1: "Media Gallery",
        tag: "Visual Documentation",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Visual Documentation</div><h1 class="section-title">Media Gallery</h1><p class="section-subtitle">Visual stories of change — field photography and event documentation from Meer Foundation's work across Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container reveal">
    <div style="background:var(--bg-2);border:2px dashed var(--border);border-radius:var(--r-2xl);padding:80px 40px;text-align:center;">
      <div style="font-size:3rem;margin-bottom:16px;">🖼️</div>
      <h3 style="margin-bottom:12px;">Gallery Coming Soon</h3>
      <p style="color:var(--text-3);max-width:500px;margin:0 auto 24px;">We are curating our visual archive of 14+ years of community work. Our photo and video gallery will be available here soon.</p>
      <a href="/contact/" class="btn btn-primary">Contact Us for Media</a>
    </div>
  </div>
</section>
`
    },
    {
        path: "emerging/news-press/index.html",
        title: "News & Press | Meer Foundation",
        desc: "Meer Foundation in the news — press releases, media coverage, and news stories featuring our community work across Chhattisgarh.",
        canon: "emerging/news-press/",
        depth: 3,
        h1: "News & Press",
        tag: "Media Coverage",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Media Coverage</div><h1 class="section-title">News &amp; Press</h1><p class="section-subtitle">Meer Foundation in the media — coverage, press releases, and news stories about our work across Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-3">
      <div class="paper-card reveal"><div class="hero-card-badge">River Conservation</div><h4 style="margin:12px 0;">Bolti Nadi Documentary Screened in 50+ Countries</h4><p style="font-size:.85rem;color:var(--text-3);">The Sakri River Walk documentary brought global attention to water conservation challenges in Chhattisgarh.</p></div>
      <div class="paper-card reveal reveal-delay-1"><div class="hero-card-badge">World Record</div><h4 style="margin:12px 0;">Tiranga World Record — Independence Day 2019</h4><p style="font-size:.85rem;color:var(--text-3);">Meer Foundation organized a 15km Tiranga rally in Raipur, setting a world record for national pride celebration.</p></div>
      <div class="paper-card reveal reveal-delay-2"><div class="hero-card-badge">Education</div><h4 style="margin:12px 0;">Smart Classrooms Transformed Rural Learning</h4><p style="font-size:.85rem;color:var(--text-3);">150+ government schools upgraded with digital learning tools, impacting 34.6 lakh students across Chhattisgarh.</p></div>
    </div>
    <div style="text-align:center;margin-top:40px;" class="reveal"><a href="mailto:info@meerfoundation.co.in" class="btn btn-primary">Press Enquiries</a></div>
  </div>
</section>
`
    },
    {
        path: "emerging/field-notes/index.html",
        title: "Field Notes Blog | Meer Foundation",
        desc: "Field Notes — first-hand accounts, reflections, and learnings from Meer Foundation's team members working on the ground across rural Chhattisgarh.",
        canon: "emerging/field-notes/",
        depth: 3,
        h1: "Field Notes Blog",
        tag: "From the Ground",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">From the Ground</div><h1 class="section-title">Field Notes Blog</h1><p class="section-subtitle">First-hand accounts, reflections, and learnings from our team working across rural Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="paper-card reveal"><div class="hero-card-badge">River Walk</div><h4 style="margin:12px 0;">90km on Foot: What the Sakri River Taught Us</h4><p style="font-size:.85rem;color:var(--text-3);">A reflection on four days walking alongside the Sakri — its beauty, its scars, and the communities that depend on it.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read More →</div></div>
      <div class="paper-card reveal reveal-delay-1"><div class="hero-card-badge">Farming</div><h4 style="margin:12px 0;">From Forest to Market: The Makhana Journey</h4><p style="font-size:.85rem;color:var(--text-3);">How women farmers in Dhamtari turned a traditional forest food into a sustainable income source through the Farmours initiative.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read More →</div></div>
    </div>
    <div style="text-align:center;margin-top:40px;" class="reveal"><p style="color:var(--text-3);">More field notes coming soon. <a href="/contact/" style="color:#1e40af;font-weight:700;">Subscribe for updates</a>.</p></div>
  </div>
</section>
`
    },
    {
        path: "impact/index.html",
        title: "Impact | Meer Foundation",
        desc: "Meer Foundation's community impact across Chhattisgarh — statistics, case studies, district profiles, testimonials and project documentation since 2011.",
        canon: "impact/",
        depth: 2,
        h1: "Our Impact",
        tag: "Measuring Change",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Measuring Change</div>
      <h1 class="section-title">Our Impact</h1>
      <p class="section-subtitle">14+ years of verified impact across education, health, environment, and livelihood in Chhattisgarh.</p>
    </div>
    <div class="grid-3" style="margin-top:50px;">
      <a href="/impact/statistics/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📊</div><h3 style="margin:12px 0;">Statistics</h3><p style="font-size:0.9rem;color:var(--text-3);">Key metrics and quantitative data on Meer Foundation's reach across communities, schools, rivers, and districts.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">View Data →</div></a>
      <a href="/impact/case-studies/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">📋</div><h3 style="margin:12px 0;">Case Studies</h3><p style="font-size:0.9rem;color:var(--text-3);">Deep-dive stories of transformation from specific communities and individuals who have benefited from our programmes.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read Cases →</div></a>
      <a href="/impact/district-profiles/" class="paper-card reveal reveal-delay-2" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🗺️</div><h3 style="margin:12px 0;">District Profiles</h3><p style="font-size:0.9rem;color:var(--text-3);">Geographic breakdown of our work across 10+ Chhattisgarh districts with community context and intervention data.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Explore Districts →</div></a>
      <a href="/impact/project-gallery/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🖼️</div><h3 style="margin:12px 0;">Project Gallery</h3><p style="font-size:0.9rem;color:var(--text-3);">Visual documentation of completed and ongoing projects showing real-world outcomes on the ground.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">View Projects →</div></a>
      <a href="/impact/testimonials/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">💬</div><h3 style="margin:12px 0;">Testimonials</h3><p style="font-size:0.9rem;color:var(--text-3);">First-hand testimonials from beneficiaries, community leaders, and partner organisations about their experience with Meer Foundation.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Read Stories →</div></a>
    </div>
  </div>
</section>
`
    },
    {
        path: "impact/statistics/index.html",
        title: "Impact Statistics | Meer Foundation",
        desc: "Meer Foundation impact statistics: 400K+ lives, 10+ districts, 54+ SHGs, 216+ entrepreneurs, 150+ schools across Chhattisgarh since 2011.",
        canon: "impact/statistics/",
        depth: 3,
        h1: "Impact Statistics",
        tag: "Quantified Impact",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Quantified Impact</div><h1 class="section-title">Impact Statistics</h1><p class="section-subtitle">Key metrics from 14+ years of on-ground community development across Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:24px;" class="reveal">
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">400K+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Lives Impacted</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">14+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Years of Service</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">10+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Districts Active</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">54+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">SHGs Formed</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">216+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Women Entrepreneurs</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">225+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Youth Trained</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">150+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Schools Reached</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">90KM</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">River Walk (2019)</div></div>
      <div class="feature-card" style="text-align:center;padding:40px 20px;"><div style="font-family:var(--font-serif);font-size:3rem;font-weight:800;color:#1e40af;line-height:1;">5K+</div><div style="font-size:0.85rem;color:var(--text-3);font-weight:600;margin-top:8px;">Citizens Mobilized</div></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "impact/case-studies/index.html",
        title: "Case Studies | Meer Foundation Impact",
        desc: "Deep-dive case studies of community transformation from Meer Foundation's programmes across Chhattisgarh — river conservation, education, farming, and wellness.",
        canon: "impact/case-studies/",
        depth: 3,
        h1: "Case Studies",
        tag: "Community Transformation",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Community Transformation</div><h1 class="section-title">Case Studies</h1><p class="section-subtitle">Real stories of change from communities across Chhattisgarh transformed by Meer Foundation's programmes.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="paper-card reveal" style="border-left:4px solid #1e40af;"><div class="hero-card-badge">River Conservation</div><h4 style="margin:12px 0;">Sakri River: From Degradation to Policy Change</h4><p style="font-size:.9rem;color:var(--text-3);">A 90km walk by Meer Foundation's team resulted in a ₹2 Crore sewage treatment plant, MGNREGA desilting across 59 villages, and ongoing river monitoring by youth volunteers.</p></div>
      <div class="paper-card reveal reveal-delay-1" style="border-left:4px solid #059669;"><div class="hero-card-badge">Livelihood</div><h4 style="margin:12px 0;">Makhana Cultivation: Women as Market Leaders</h4><p style="font-size:.9rem;color:var(--text-3);">In Dhamtari's Nagri forest region, 54+ women-led SHGs transformed traditional makhana cultivation into a structured, market-linked livelihood creating 216+ sustainable entrepreneurs.</p></div>
      <div class="paper-card reveal" style="border-left:4px solid #7c3aed;"><div class="hero-card-badge">Education</div><h4 style="margin:12px 0;">Smart Classrooms: "Now We Want to Study"</h4><p style="font-size:.9rem;color:var(--text-3);">After smart classroom installation in Balodabazar district, student attendance and engagement increased dramatically. "Earlier we didn't even feel like studying" — now children rush to school.</p></div>
      <div class="paper-card reveal reveal-delay-1" style="border-left:4px solid #d97706;"><div class="hero-card-badge">Heritage</div><h4 style="margin:12px 0;">Tiranga World Record — Independence Day 2019</h4><p style="font-size:.9rem;color:var(--text-3);">A 15km Tiranga rally in Raipur organized by Meer Foundation set a world record and brought together thousands of citizens in a celebration of national pride and community spirit.</p></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "impact/district-profiles/index.html",
        title: "District Profiles | Meer Foundation",
        desc: "Geographic breakdown of Meer Foundation's work across 10+ districts of Chhattisgarh — community context, interventions, and impact data by district.",
        canon: "impact/district-profiles/",
        depth: 3,
        h1: "District Profiles",
        tag: "Geographic Reach",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Geographic Reach</div><h1 class="section-title">District Profiles</h1><p class="section-subtitle">Meer Foundation's work spans 10+ districts of Chhattisgarh — each with unique community contexts and intervention strategies.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:8px;">Dhamtari</h4><p style="font-size:.85rem;color:var(--text-3);">Headquarters district. Makhana cultivation, SHG formation, Bolti Nadi river monitoring, and Prayaas education programmes.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:8px;">Kawardha (Kabirdham)</h4><p style="font-size:.85rem;color:var(--text-3);">Sakri River Walk 2019 district. ₹2 Crore STP established. Ongoing water conservation and community monitoring.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:8px;">Bemetara</h4><p style="font-size:.85rem;color:var(--text-3);">Sakri River confluence region. MGNREGA desilting, check dam construction, and youth volunteer monitoring network.</p></div>
      <div class="feature-card reveal"><h4 style="color:#1e40af;margin-bottom:8px;">Kanker-Narayanpur</h4><p style="font-size:.85rem;color:var(--text-3);">200+ farmers trained in medicinal plant cultivation. Tribal livelihood diversification through FARMOURS framework.</p></div>
      <div class="feature-card reveal reveal-delay-1"><h4 style="color:#1e40af;margin-bottom:8px;">Balodabazar</h4><p style="font-size:.85rem;color:var(--text-3);">Smart classroom rollout across government schools. Teacher training and scholarship programmes for BPL students.</p></div>
      <div class="feature-card reveal reveal-delay-2"><h4 style="color:#1e40af;margin-bottom:8px;">Raipur</h4><p style="font-size:.85rem;color:var(--text-3);">Urban outreach hub. Tiranga World Record (2019). Media, research, and CSR coordination centre.</p></div>
    </div>
  </div>
</section>
`
    },
    {
        path: "impact/project-gallery/index.html",
        title: "Project Gallery | Meer Foundation",
        desc: "Visual documentation of Meer Foundation's completed and ongoing projects — field photography and project coverage from across Chhattisgarh.",
        canon: "impact/project-gallery/",
        depth: 3,
        h1: "Project Gallery",
        tag: "Visual Documentation",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Visual Documentation</div><h1 class="section-title">Project Gallery</h1><p class="section-subtitle">Visual evidence of impact — from river banks to classrooms, from farms to communities across Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container reveal">
    <div style="background:var(--bg-2);border:2px dashed var(--border);border-radius:var(--r-2xl);padding:80px 40px;text-align:center;">
      <div style="font-size:3rem;margin-bottom:16px;">🖼️</div>
      <h3 style="margin-bottom:12px;">Photo Gallery Coming Soon</h3>
      <p style="color:var(--text-3);max-width:500px;margin:0 auto 24px;">We are curating our visual archive of field photography spanning 14+ years and dozens of community projects. The gallery will be live soon.</p>
      <a href="/contact/" class="btn btn-primary">Request Media Kit</a>
    </div>
  </div>
</section>
`
    },
    {
        path: "impact/testimonials/index.html",
        title: "Testimonials | Meer Foundation",
        desc: "First-hand testimonials from beneficiaries, community leaders, and partner organisations about Meer Foundation's impact in Chhattisgarh.",
        canon: "impact/testimonials/",
        depth: 3,
        h1: "Testimonials",
        tag: "Community Voices",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Community Voices</div><h1 class="section-title">Testimonials</h1><p class="section-subtitle">In their own words — beneficiaries, community leaders, and partners share their experience with Meer Foundation.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="paper-card reveal" style="background:var(--bg-2);">
        <div style="font-size:2rem;margin-bottom:16px;color:#1e40af;">"</div>
        <p style="font-size:1rem;font-style:italic;color:var(--text-2);line-height:1.8;margin-bottom:20px;">Since smart class came, with big pictures and zooming, it was explained well. We have benefited a lot. Earlier we didn't even feel like studying.</p>
        <div style="font-weight:700;">Community Leader</div>
        <div style="font-size:.85rem;color:var(--text-4);">Balodabazar District, Chhattisgarh</div>
      </div>
      <div class="paper-card reveal reveal-delay-1" style="background:var(--bg-2);">
        <div style="font-size:2rem;margin-bottom:16px;color:#1e40af;">"</div>
        <p style="font-size:1rem;font-style:italic;color:var(--text-2);line-height:1.8;margin-bottom:20px;">We organised women and farmers at the village level. We trained them to practice farming that aligns with market demands. Today these communities earn sustainably.</p>
        <div style="font-weight:700;">Implementing Agency Coordinator</div>
        <div style="font-size:.85rem;color:var(--text-4);">Dhamtari District, Chhattisgarh</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:40px;" class="reveal"><a href="/impact/case-studies/" class="btn btn-primary">Read Full Case Studies</a></div>
  </div>
</section>
`
    },
    {
        path: "get-involved/index.html",
        title: "Get Involved | Meer Foundation",
        desc: "Join Meer Foundation's mission — volunteer, become a CSR partner, apply for an internship, or donate to support community development in Chhattisgarh.",
        canon: "get-involved/",
        depth: 2,
        h1: "Get Involved",
        tag: "Join Our Mission",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Join Our Mission</div>
      <h1 class="section-title">Get Involved</h1>
      <p class="section-subtitle">Every form of support accelerates change. Join us in building a prosperous, self-sustained Chhattisgarh.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">
      <a href="/get-involved/volunteer/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🙋</div><h3 style="margin:12px 0;">Volunteer</h3><p style="font-size:0.9rem;color:var(--text-3);">Join our network of grassroots volunteers contributing skills in education, environment, health, and community development.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Volunteer With Us →</div></a>
      <a href="/get-involved/csr-partner/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🏢</div><h3 style="margin:12px 0;">CSR Partner</h3><p style="font-size:0.9rem;color:var(--text-3);">Partner with us as a CSR implementing agency. We provide evidence-based programme design, execution, and impact reporting.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Become a Partner →</div></a>
      <a href="/get-involved/internship/" class="paper-card reveal" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">🎓</div><h3 style="margin:12px 0;">Internship</h3><p style="font-size:0.9rem;color:var(--text-3);">Hands-on field internships for students and young professionals in social work, research, communications, and community development.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Apply for Internship →</div></a>
      <a href="/get-involved/donate/" class="paper-card reveal reveal-delay-1" style="text-decoration:none;color:inherit;display:block;"><div style="font-size:2rem;margin-bottom:12px;">❤️</div><h3 style="margin:12px 0;">Donate</h3><p style="font-size:0.9rem;color:var(--text-3);">Support our programmes with a financial contribution. Donations are eligible for 80G tax exemption under the Income Tax Act.</p><div style="margin-top:16px;color:#1e40af;font-weight:700;font-size:0.85rem;">Donate Now →</div></a>
    </div>
  </div>
</section>
`
    },
    {
        path: "get-involved/volunteer/index.html",
        title: "Volunteer | Meer Foundation",
        desc: "Volunteer with Meer Foundation — join our grassroots network contributing to water conservation, education, health, and community development across Chhattisgarh.",
        canon: "get-involved/volunteer/",
        depth: 3,
        h1: "Volunteer with Us",
        tag: "Join Our Network",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Join Our Network</div><h1 class="section-title">Volunteer with Meer Foundation</h1><p class="section-subtitle">Share your skills and time to accelerate community transformation across rural Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <h3 style="font-family:var(--font-serif);margin-bottom:20px;">How You Can Contribute</h3>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Field Volunteers</strong> — Support river walks, community events, and on-ground programme implementation.</div></li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Research Assistants</strong> — Help with data collection, documentation, and report writing for IJMEER and project evaluation.</div></li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Communications</strong> — Photography, video, social media, and content creation to amplify our stories.</div></li>
          <li style="display:flex;gap:12px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Teaching</strong> — Support Prayaas and smart classroom programmes in government schools.</div></li>
        </ul>
        <a href="mailto:info@meerfoundation.co.in" class="btn btn-primary" style="margin-top:30px;">Apply to Volunteer</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
          <h3 style="margin-bottom:16px;">Why Volunteer with Us?</h3>
          <ul style="list-style:none;padding:0;opacity:.88;">
            <li style="margin-bottom:12px;">✓ Work directly with rural communities on real-world challenges</li>
            <li style="margin-bottom:12px;">✓ Mentorship from social entrepreneurs and researchers</li>
            <li style="margin-bottom:12px;">✓ Certificate of contribution from Meer Foundation</li>
            <li style="margin-bottom:12px;">✓ Opportunity to co-author research papers for IJMEER</li>
            <li>✓ Field exposure across 10+ Chhattisgarh districts</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "get-involved/csr-partner/index.html",
        title: "CSR Partner | Meer Foundation",
        desc: "Partner with Meer Foundation as your CSR implementing agency. Evidence-based programme design, on-ground execution, and transparent impact reporting in Chhattisgarh.",
        canon: "get-involved/csr-partner/",
        depth: 3,
        h1: "Become a CSR Partner",
        tag: "Corporate Partnership",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Corporate Partnership</div><h1 class="section-title">Become a CSR Partner</h1><p class="section-subtitle">Meer Foundation serves as a trusted CSR implementing agency with 14+ years of on-ground expertise in Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">As a CSR partner, your company gains a credible, experienced implementing agency that designs evidence-based programmes, executes with community sensitivity, and reports with full transparency under the Five Pillars Framework Framework.</p>
        <div class="grid-2">
          <div class="feature-card" style="padding:20px;"><h5 style="color:#1e40af;margin-bottom:8px;">Programme Design</h5><p style="font-size:.85rem;color:var(--text-3);">Need assessment, strategy, and intervention design aligned to company CSR policy.</p></div>
          <div class="feature-card" style="padding:20px;"><h5 style="color:#1e40af;margin-bottom:8px;">Implementation</h5><p style="font-size:.85rem;color:var(--text-3);">On-ground execution with community mobilization and government coordination.</p></div>
          <div class="feature-card" style="padding:20px;"><h5 style="color:#1e40af;margin-bottom:8px;">Monitoring</h5><p style="font-size:.85rem;color:var(--text-3);">Real-time progress tracking, field visits, and quarterly review meetings.</p></div>
          <div class="feature-card" style="padding:20px;"><h5 style="color:#1e40af;margin-bottom:8px;">Impact Reporting</h5><p style="font-size:.85rem;color:var(--text-3);">Comprehensive impact reports with data, stories, and MCA-compliant documentation.</p></div>
        </div>
        <a href="/contact/" class="btn btn-primary" style="margin-top:30px;">Discuss Partnership</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);">
          <h3 style="margin-bottom:20px;">Sectors We Work In</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:700;">🎓</span> Education (SDG 4)</li>
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:700;">🌊</span> Water &amp; Environment (SDG 6, 15)</li>
            <li style="margin-bottom:14px;display:flex;gap:10px;"><span style="color:#1e40af;font-weight:700;">🌱</span> Livelihood &amp; Agriculture (SDG 1, 8)</li>
            <li style="display:flex;gap:10px;"><span style="color:#1e40af;font-weight:700;">🧘</span> Health &amp; Well-being (SDG 3)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "get-involved/internship/index.html",
        title: "Internship | Meer Foundation",
        desc: "Apply for a Meer Foundation internship — hands-on field experience in social development, research, communications, and community work across Chhattisgarh.",
        canon: "get-involved/internship/",
        depth: 3,
        h1: "Internship Programme",
        tag: "Learn by Doing",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Learn by Doing</div><h1 class="section-title">Internship Programme</h1><p class="section-subtitle">Hands-on field internships for students and young professionals passionate about social development and sustainability.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <h3 style="font-family:var(--font-serif);margin-bottom:20px;">Available Internship Tracks</h3>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Community Research</strong> — Data collection, surveys, and impact documentation for ongoing programmes.</div></li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Environmental Studies</strong> — River monitoring, ecological assessment, and conservation reporting.</div></li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Communications &amp; Media</strong> — Social media, content writing, photography, and community storytelling.</div></li>
          <li style="display:flex;gap:12px;"><span style="color:#1e40af;font-weight:800;font-size:1.2rem;">•</span><div><strong>Programme Management</strong> — Support CSR project coordination and stakeholder management.</div></li>
        </ul>
        <a href="mailto:info@meerfoundation.co.in" class="btn btn-primary" style="margin-top:30px;">Apply for Internship</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
          <h3 style="margin-bottom:16px;">Eligibility &amp; Terms</h3>
          <ul style="list-style:none;padding:0;opacity:.88;">
            <li style="margin-bottom:12px;">✓ Open to UG/PG students and recent graduates</li>
            <li style="margin-bottom:12px;">✓ Duration: 4–12 weeks (flexible)</li>
            <li style="margin-bottom:12px;">✓ Location: Dhamtari or remote options available</li>
            <li style="margin-bottom:12px;">✓ Certificate of completion provided</li>
            <li>✓ Opportunity for paper co-authorship in IJMEER</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "get-involved/donate/index.html",
        title: "Donate | Support Meer Foundation",
        desc: "Donate to Meer Foundation — support river conservation, education, and rural empowerment in Chhattisgarh. 80G tax exemption available for Indian donors.",
        canon: "get-involved/donate/",
        depth: 3,
        h1: "Support Meer Foundation",
        tag: "Donate",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header reveal"><div class="section-tag">Make a Difference</div><h1 class="section-title">Support Meer Foundation</h1><p class="section-subtitle">Your donation directly funds river conservation, education, and livelihood programmes across rural Chhattisgarh.</p></div></div>
</section>
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Every contribution helps Meer Foundation continue its work across 10+ districts of Chhattisgarh. Donations are eligible for tax exemption under Section 80G of the Income Tax Act.</p>
        <div style="background:#1e40af;color:#fff;padding:30px;border-radius:var(--r-xl);margin-bottom:24px;">
          <h3 style="margin-bottom:16px;">Donate Securely via Razorpay</h3>
          <p style="opacity:.88;margin-bottom:20px;">Quick, secure online payment via UPI, credit/debit card, net banking, or wallets.</p>
          <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" class="btn" style="background:#fff;color:#1e40af;font-weight:700;" target="_blank" rel="noopener">Donate Online Now</a>
        </div>
        <p style="color:var(--text-3);font-size:.85rem;">For bank transfers or cheque donations, contact: <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a></p>
      </div>
      <div class="reveal reveal-delay-1">
        <h3 style="font-family:var(--font-serif);margin-bottom:20px;">Your Donation Funds</h3>
        <ul style="list-style:none;padding:0;">
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#10b981;font-weight:800;">🌊</span> River conservation and water quality monitoring</li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#10b981;font-weight:800;">🎓</span> Smart classroom and scholarship programmes</li>
          <li style="display:flex;gap:12px;margin-bottom:16px;"><span style="color:#10b981;font-weight:800;">🌱</span> Women farmer training and SHG development</li>
          <li style="display:flex;gap:12px;"><span style="color:#10b981;font-weight:800;">🧘</span> Community yoga and wellness programmes</li>
        </ul>
        <div style="background:var(--bg-2);padding:20px;border-radius:var(--r-xl);border:1px solid var(--border);margin-top:24px;font-size:.85rem;color:var(--text-3);">
          <strong>Tax Benefits:</strong> Donations to Meer Foundation are eligible for 80G tax exemption under the Income Tax Act, 1961. Please request your donation receipt for tax filing.
        </div>
      </div>
    </div>
  </div>
</section>
`
    },
    {
        path: "contact/index.html",
        title: "Contact Us | Meer Foundation Chhattisgarh",
        desc: "Contact Meer Foundation — reach us for partnerships, volunteering, media enquiries, or donations. Based in Dhamtari, Chhattisgarh.",
        canon: "contact/",
        depth: 2,
        h1: "Contact Meer Foundation",
        tag: "Get In Touch",
        body: `
<section class="section" style="padding-top:140px;">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Get In Touch</div>
      <h1 class="section-title">Contact Meer Foundation</h1>
      <p class="section-subtitle">We are here to answer your questions and explore ways to collaborate for the betterment of Chhattisgarh.</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:60px;margin-top:40px;" class="contact-grid">
      <div class="reveal">
        <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);height:fit-content;">
          <h3 style="font-family:var(--font-serif);margin-bottom:30px;">Our Office</h3>
          <div style="display:flex;gap:15px;margin-bottom:30px;">
            <div style="width:40px;height:40px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#1e40af;flex-shrink:0;box-shadow:var(--sh-sm);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div><div style="font-weight:700;">Registered Address</div><div style="font-size:.9rem;color:var(--text-3);">Sr. MIG 103, Housing Board Colony, Hatkeshar, Dhamtari – 493773, Chhattisgarh, India</div></div>
          </div>
          <div style="display:flex;gap:15px;margin-bottom:30px;">
            <div style="width:40px;height:40px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#1e40af;flex-shrink:0;box-shadow:var(--sh-sm);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><div style="font-weight:700;">Phone</div><div style="font-size:.9rem;color:var(--text-3);">+91 98261-21177</div></div>
          </div>
          <div style="display:flex;gap:15px;">
            <div style="width:40px;height:40px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#1e40af;flex-shrink:0;box-shadow:var(--sh-sm);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><div style="font-weight:700;">Email</div><div style="font-size:.9rem;color:var(--text-3);">info@meerfoundation.co.in</div></div>
          </div>
        </div>
      </div>
      <div class="reveal reveal-delay-1">
        <div id="success-msg" style="display:none;background:#dcfce7;color:#166534;padding:20px;border-radius:var(--r-xl);margin-bottom:25px;border:1px solid #bbf7d0;font-weight:600;text-align:center;">✓ Thank you! Your message has been sent successfully. We will get back to you soon.</div>
        <script>if(new URLSearchParams(window.location.search).get('success')==='true'){document.getElementById('success-msg').style.display='block';window.history.replaceState({},document.title,window.location.pathname);}</script>
        <form action="https://formspree.io/f/xjgjrzyb" method="POST" style="background:#fff;padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);box-shadow:var(--sh-xl);">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div style="margin-bottom:20px;"><label style="display:block;font-size:.85rem;font-weight:700;color:var(--text-2);margin-bottom:8px;">Full Name</label><input type="text" name="name" style="width:100%;padding:12px 16px;border-radius:8px;border:1px solid var(--border);background:#fff;font-family:inherit;font-size:.95rem;" placeholder="Your name" required></div>
            <div style="margin-bottom:20px;"><label style="display:block;font-size:.85rem;font-weight:700;color:var(--text-2);margin-bottom:8px;">Email Address</label><input type="email" name="email" style="width:100%;padding:12px 16px;border-radius:8px;border:1px solid var(--border);background:#fff;font-family:inherit;font-size:.95rem;" placeholder="your@email.com" required></div>
          </div>
          <div style="margin-bottom:20px;"><label style="display:block;font-size:.85rem;font-weight:700;color:var(--text-2);margin-bottom:8px;">Message</label><textarea name="message" style="width:100%;padding:12px 16px;border-radius:8px;border:1px solid var(--border);background:#fff;font-family:inherit;font-size:.95rem;min-height:150px;" placeholder="How can we help?" required></textarea></div>
          <input type="hidden" name="_next" value="https://meerfoundation.co.in/contact/?success=true">
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
<style>@media(max-width:992px){.contact-grid{grid-template-columns:1fr!important;}}</style>
`
    }
];

const legalStyle = `<style>
  .legal-content { max-width: 800px; margin: 0 auto; }
  .legal-content h2 { font-family: var(--font-serif); font-size: 1.4rem; margin: 40px 0 16px; color: var(--text-1); }
  .legal-content p, .legal-content li { color: var(--text-2); line-height: 1.8; margin-bottom: 12px; }
  .legal-content ul { padding-left: 20px; }
</style>`;

const legalPages = [
    {
        path: "legal/privacy-policy/index.html",
        title: "Privacy Policy | Meer Foundation",
        desc: "Meer Foundation's Privacy Policy — how we collect, use, and protect your personal data on meerfoundation.co.in.",
        canon: "legal/privacy-policy/",
        depth: 3,
        h1: "Privacy Policy",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Privacy Policy</h1><p class="section-subtitle">Last updated: July 2026</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <p>Meer Foundation ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit meerfoundation.co.in.</p>
      <h2>Information We Collect</h2>
      <p>We may collect information you voluntarily provide when: filling out the contact form, subscribing to newsletters, or making a donation. This includes name, email address, phone number, and payment details (processed securely by Razorpay).</p>
      <h2>How We Use Your Information</h2>
      <ul><li>To respond to enquiries and provide support</li><li>To send programme updates and newsletters (only if you opt in)</li><li>To process donations and issue tax receipts</li><li>To improve our website and services</li></ul>
      <h2>Data Sharing</h2>
      <p>We do not sell, trade, or transfer your personal information to third parties except service providers necessary for our operations (e.g., Razorpay for payments, Formspree for contact forms, Google Analytics for website analytics).</p>
      <h2>Cookies</h2>
      <p>We use cookies and similar tracking technologies (via Google Analytics) to track website activity. You can disable cookies in your browser settings at any time.</p>
      <h2>Contact</h2>
      <p>For privacy-related queries, contact us at <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a>.</p>
    </div>
  </div>
</section>
`
    },
    {
        path: "legal/terms-of-use/index.html",
        title: "Terms of Use | Meer Foundation",
        desc: "Terms of Use for meerfoundation.co.in — guidelines for using the Meer Foundation website, content, and services.",
        canon: "legal/terms-of-use/",
        depth: 3,
        h1: "Terms of Use",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Terms of Use</h1><p class="section-subtitle">Last updated: July 2026</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <p>By accessing meerfoundation.co.in, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, please do not use our website.</p>
      <h2>Use of Content</h2>
      <p>All content on this website — including text, images, data, and research — is the property of Meer Foundation. You may reference or share our content with proper attribution but may not reproduce, modify, or use it for commercial purposes without written permission.</p>
      <h2>Donations</h2>
      <p>Donations made through our Razorpay payment link are governed by Razorpay's terms and conditions. Meer Foundation issues donation receipts for 80G tax exemption upon request.</p>
      <h2>Limitation of Liability</h2>
      <p>Meer Foundation makes no warranties regarding the accuracy or completeness of information on this website. We are not liable for any damages arising from your use of the website.</p>
      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Dhamtari, Chhattisgarh.</p>
      <h2>Contact</h2>
      <p>For queries about these terms, contact <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a>.</p>
    </div>
  </div>
</section>
`
    },
    {
        path: "legal/refund-policy/index.html",
        title: "Refund Policy | Meer Foundation",
        desc: "Meer Foundation refund and cancellation policy for donations and programme fees.",
        canon: "legal/refund-policy/",
        depth: 3,
        h1: "Refund Policy",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Refund Policy</h1><p class="section-subtitle">Last updated: July 2026</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <h2>Donations</h2>
      <p>All donations to Meer Foundation are voluntary contributions to a non-profit organization. We generally do not offer refunds on donations once processed. However, if a donation was made in error or was a duplicate transaction, please contact us within 7 days and we will review your request.</p>
      <h2>Programme Fees</h2>
      <p>For EduSuTo courses or workshop registration fees, refund requests must be submitted at least 48 hours before the programme commencement date. Refunds will be processed within 7-10 business days to the original payment method.</p>
      <h2>How to Request a Refund</h2>
      <p>Email <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a> with your name, transaction ID, amount, and reason for the refund request.</p>
    </div>
  </div>
</section>
`
    },
    {
        path: "legal/disclaimer/index.html",
        title: "Disclaimer | Meer Foundation",
        desc: "Legal disclaimer for meerfoundation.co.in — limitations on information accuracy and liability.",
        canon: "legal/disclaimer/",
        depth: 3,
        h1: "Disclaimer",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Disclaimer</h1><p class="section-subtitle">Last updated: July 2026</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <p>The information on meerfoundation.co.in is provided for general informational purposes only. While we strive to keep the information accurate and current, Meer Foundation makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, services, or related graphics.</p>
      <h2>Research &amp; Statistics</h2>
      <p>Impact statistics and research data presented on this website reflect our best estimates based on field data and programme records. Independent verification may yield different results.</p>
      <h2>External Links</h2>
      <p>Our website may contain links to external websites. These links are provided for convenience only. Meer Foundation has no control over the content of those sites and accepts no responsibility for them.</p>
      <h2>Contact</h2>
      <p>Questions about this disclaimer? Contact <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a>.</p>
    </div>
  </div>
</section>
`
    },
    {
        path: "legal/cookie-policy/index.html",
        title: "Cookie Policy | Meer Foundation",
        desc: "Meer Foundation cookie policy — how we use cookies and tracking technologies on meerfoundation.co.in.",
        canon: "legal/cookie-policy/",
        depth: 3,
        h1: "Cookie Policy",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Cookie Policy</h1><p class="section-subtitle">Last updated: July 2026</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <p>This Cookie Policy explains how Meer Foundation uses cookies and similar tracking technologies when you visit meerfoundation.co.in.</p>
      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and understand how you interact with the site.</p>
      <h2>Cookies We Use</h2>
      <ul>
        <li><strong>Analytics Cookies</strong> — Google Analytics and Google Tag Manager to understand visitor behavior and improve our website.</li>
        <li><strong>Functional Cookies</strong> — Essential cookies for website functionality (e.g., form handling via Formspree).</li>
      </ul>
      <h2>Managing Cookies</h2>
      <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality. For Google Analytics opt-out, visit <a href="https://tools.google.com/dlpage/gaoptout" style="color:#1e40af;" target="_blank" rel="noopener">Google Analytics Opt-out</a>.</p>
    </div>
  </div>
</section>
`
    },
    {
        path: "legal/accessibility/index.html",
        title: "Accessibility Statement | Meer Foundation",
        desc: "Meer Foundation's commitment to web accessibility — our efforts to make meerfoundation.co.in accessible to all users.",
        canon: "legal/accessibility/",
        depth: 3,
        h1: "Accessibility Statement",
        tag: "Legal",
        body: `
<section class="section" style="padding-top:140px;background:var(--bg-2);">
  <div class="container"><div class="section-header"><div class="section-tag">Legal</div><h1 class="section-title">Accessibility Statement</h1><p class="section-subtitle">Our commitment to digital inclusion.</p></div></div>
</section>
<section class="section">
  <div class="container">
    ${legalStyle}
    <div class="legal-content">
      <p>Meer Foundation is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>
      <h2>Our Efforts</h2>
      <ul>
        <li>Semantic HTML5 elements with proper heading structure</li>
        <li>ARIA labels and roles for interactive elements</li>
        <li>Sufficient color contrast ratios throughout the design</li>
        <li>Keyboard navigation support for all interactive elements</li>
        <li>Alt text on all images</li>
        <li>Focus-visible styles for keyboard users</li>
      </ul>
      <h2>Known Limitations</h2>
      <p>Some older PDF documents may not be fully accessible. We are working to address this in our document updates.</p>
      <h2>Feedback</h2>
      <p>If you experience accessibility barriers on our website, please contact us at <a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;">info@meerfoundation.co.in</a>. We aim to respond within 2 business days.</p>
    </div>
  </div>
</section>
`
    }
];

const allPages = [...pages, ...legalPages];

allPages.forEach(page => {
    writePage(page.path, page.title, page.desc, page.canon, page.depth, page.h1, page.tag, page.body);
});

console.log("Successfully created all pages.");
