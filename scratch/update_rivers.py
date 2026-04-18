import re

RIVERS_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rivers of Chhattisgarh | Meer Foundation Knowledge Archive</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .river-list { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; margin-top: 30px; }
    .river-tag { display: block; padding: 15px 20px; background: #fff; border: 1px solid var(--border); border-radius: 12px; font-weight: 600; color: var(--text-2); text-decoration: none; transition: var(--t); }
    .river-tag:hover { border-color: #1e40af; background: rgba(30, 64, 175, 0.05); color: #1e40af; }
    .river-tag.flagship { border-color: #1e40af; background: rgba(30, 64, 175, 0.1); color: #1e40af; box-shadow: 0 4px 12px rgba(30, 64, 175, 0.1); }
  </style>
</head>
<body>

<div id="progress-bar"></div>
<div id="site-header-inject"></div>

<section class="section" style="padding-top: 140px; background: var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Knowledge Archive</div>
      <h1 class="section-title">Rivers of Chhattisgarh</h1>
      <p class="section-subtitle">A dedicated repository documenting the hydrological, ecological, and cultural significance of the lifelines of our state.</p>
    </div>

    <div class="reveal" style="margin-top: 60px;">
      <h3 style="font-family: var(--font-serif); margin-bottom: 10px;">The 20 Major Lifelines</h3>
      <p style="color: var(--text-3); font-size: 0.95rem; margin-bottom: 30px;">Each river represents a unique ecosystem and a cultural repository for the tribal and rural communities of Chhattisgarh. Through Bolti Nadi, we document these rivers to support research, policy, and awareness.</p>
      
      <div class="river-list">
        <a href="bolti-nadi.html" class="river-tag flagship">Sakri River (Flagship)</a>
        <a href="#" class="river-tag">Mahanadi</a>
        <a href="#" class="river-tag">Shivnath River</a>
        <a href="#" class="river-tag">Indravati River</a>
        <a href="#" class="river-tag">Arpa River</a>
        <a href="#" class="river-tag">Kharun River</a>
        <a href="#" class="river-tag">Hasdeo River</a>
        <a href="#" class="river-tag">Pairi River</a>
        <a href="#" class="river-tag">Sondur River</a>
        <a href="#" class="river-tag">Jonk River</a>
        <a href="#" class="river-tag">Mand River</a>
        <a href="#" class="river-tag">Maniyari River</a>
        <a href="#" class="river-tag">Tandula River</a>
        <a href="#" class="river-tag">Godavari River</a>
        <a href="#" class="river-tag">Sabari River</a>
        <a href="#" class="river-tag">Rihand River</a>
        <a href="#" class="river-tag">Kanhar River</a>
        <a href="#" class="river-tag">Ib River</a>
        <a href="#" class="river-tag">Burha River</a>
        <a href="#" class="river-tag">Birupa River</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid-2 reveal">
      <div>
        <h2 style="font-family: var(--font-serif); margin-bottom: 25px;">Documentation Framework</h2>
        <p style="color: var(--text-2); line-height: 1.8; margin-bottom: 20px;">
          For every river in our database, we follow a rigorous 12-point documentation system that covers geographic data, ecological importance, livelihood impact, and oral histories.
        </p>
        <p style="color: var(--text-2); line-height: 1.8;">
          Our goal is to create a living river database that supports sustainable water management and community-led conservation across the state. This documentation acts as a vital tool for our CSR implementation partners.
        </p>
      </div>
      <div style="background: #1e40af; color: #fff; padding: 40px; border-radius: var(--r-2xl);">
        <h3>River Profile Points</h3>
        <ul style="list-style: none; padding: 0; margin-top: 20px; font-size: 0.9rem; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <li>• Geographic Data</li>
          <li>• Ecosystem Health</li>
          <li>• Biodiversity Index</li>
          <li>• Community Usage</li>
          <li>• Cultural History</li>
          <li>• Livelihood Role</li>
          <li>• Pollution Levels</li>
          <li>• Conservation Scope</li>
          <li>• Hydro-morphology</li>
          <li>• Siltation Impact</li>
          <li>• Local Policy Mapping</li>
          <li>• Restoration Strategy</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div id="site-footer-inject"></div>

<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

BOLTI_NADI_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bolti Nadi | Flagship River Conservation Initiative</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .river-hero { background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('assets/images/hero-bg.png'); background-size: cover; background-position: center; padding: 160px 0 100px; color: #fff; text-align: center; }
    .river-stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: -60px; z-index: 10; position: relative; }
    .river-stat-card { background: #fff; padding: 30px; border-radius: var(--r-xl); box-shadow: var(--shadow-lg); text-align: center; border: 1px solid var(--border); }
    .timeline-node { border-left: 2px solid #1e40af; padding-left: 30px; position: relative; margin-bottom: 40px; }
    .timeline-node::before { content: ''; position: absolute; left: -9px; top: 0; width: 16px; height: 16px; background: #1e40af; border-radius: 50%; }
  </style>
</head>
<body>

<div id="progress-bar"></div>
<div id="site-header-inject"></div>

<section class="river-hero">
  <div class="container">
    <div class="hero-badge" style="background: rgba(255,255,255,0.2); color: #fff; border-color: rgba(255,255,255,0.3);">Flagship Initiative</div>
    <h1 style="font-size: 3.5rem; margin-bottom: 20px;">Bolti Nadi</h1>
    <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">"Let the Rivers Speak" — A community-driven movement to restore, protect, and document the lifelines of Chhattisgarh.</p>
  </div>
</section>

<div class="container">
  <div class="river-stat-grid">
    <div class="river-stat-card">
      <div class="stat-val" style="color:#1e40af;">90KM</div>
      <div class="stat-label">On-Foot Expedition</div>
    </div>
    <div class="river-stat-card">
      <div class="stat-val" style="color:#1e40af;">5K+</div>
      <div class="stat-label">Citizens Mobilized</div>
    </div>
    <div class="river-stat-card">
      <div class="stat-val" style="color:#1e40af;">59</div>
      <div class="stat-label">Villages Reached</div>
    </div>
    <div class="river-stat-card">
      <div class="stat-val" style="color:#1e40af;">50+</div>
      <div class="stat-label">Countries Screened</div>
    </div>
  </div>
</div>

<section class="section">
  <div class="container">
    <div class="about-grid">
      <div class="reveal">
        <h2 style="font-family: var(--font-serif); margin-bottom: 25px;">Sakri River Walk (2019)</h2>
        <p style="color: var(--text-2); line-height: 1.8; margin-bottom: 20px;">
          In 2019, the Bolti Nadi initiative undertook a historic 90-kilometer on-foot expedition along the Sakri River. Traversing from its origin in Kariyama Village to its confluence with the Half River in Darhi Village, the team spent four continuous days documenting the river's health.
        </p>
        <p style="color: var(--text-2); line-height: 1.8;">
          The mission combined hydrological assessment, ecological documentation, and community consultation. We collected water samples, documented bank erosion at Rajanawagaon and Kodar villages, and visited 14th-century heritage sites like the Sherki Mahal and the 11th-century Bhoramdev Temple along the banks.
        </p>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background: var(--bg-2); padding: 40px; border-radius: var(--r-2xl); border: 1px solid var(--border);">
          <h3 style="margin-bottom: 20px;">Measurable Impact</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 15px; display: flex; gap: 10px;">
              <svg style="width:20px; color:#10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>₹2 Crore Sewage Treatment Plant established in Kawardha due to our policy submission.</span>
            </li>
            <li style="margin-bottom: 15px; display: flex; gap: 10px;">
              <svg style="width:20px; color:#10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Large-scale tree plantation along banks approved under Mukhyamantri Vriksh Sampada Yojana.</span>
            </li>
            <li style="margin-bottom: 15px; display: flex; gap: 10px;">
              <svg style="width:20px; color:#10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>MGNREGA teams mobilized for desilting and check dam construction across 59 villages.</span>
            </li>
             <li style="display: flex; gap: 10px;">
              <svg style="width:20px; color:#10b981;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              <span>Continuous monitoring of 3 major rivers established with local youth volunteers.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background: var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Timeline</div>
      <h2 class="section-title">The Journey So Far</h2>
    </div>
    
    <div style="max-width: 800px; margin: 50px auto 0;">
      <div class="timeline-node reveal">
        <h4 style="color:#1e40af;">2016: The Beginning</h4>
        <p style="color: var(--text-3); font-size: 0.95rem;">Bolti Nadi launched as an environmental movement under Meer Foundation to address water scarcity in Dhamtari.</p>
      </div>
      <div class="timeline-node reveal reveal-delay-1">
        <h4 style="color:#1e40af;">2019: Sakri River Walk</h4>
        <p style="color: var(--text-3); font-size: 0.95rem;">90km research mission resulting in a comprehensive policy report submitted to district administrations of Kawardha and Bemetara.</p>
      </div>
      <div class="timeline-node reveal reveal-delay-2">
        <h4 style="color:#1e40af;">2021: Global Recognition</h4>
        <p style="color: var(--text-3); font-size: 0.95rem;">The initiative's documentary film screened at international festivals in over 50 countries, bringing global attention to local issues.</p>
      </div>
      <div class="timeline-node reveal reveal-delay-3">
        <h4 style="color:#1e40af;">2024: Expansion</h4>
        <p style="color: var(--text-3); font-size: 0.95rem;">Scaling monitoring systems to 20 major rivers across Chhattisgarh, creating the state's largest community-led water repository.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-section reveal">
      <h2 class="cta-title">Let the Rivers Speak Through You</h2>
      <p class="cta-desc">Become a water steward. Help us monitor river health, document local stories, and participate in our upcoming river walks.</p>
      <div class="cta-actions">
        <a href="volunteer.html" class="btn btn-primary btn-lg">Join as a Volunteer</a>
        <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" class="btn btn-outline btn-lg" style="color:#fff; border-color:#fff;">Support River Rejuvenation</a>
      </div>
    </div>
  </div>
</section>

<div id="site-footer-inject"></div>

<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

with open("rivers.html", "w", encoding="utf-8") as f:
    f.write(RIVERS_HTML)

with open("bolti-nadi.html", "w", encoding="utf-8") as f:
    f.write(BOLTI_NADI_HTML)

print("Updated rivers.html and bolti-nadi.html")
