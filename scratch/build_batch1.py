"""
MEER FOUNDATION - MASTER BUILD SCRIPT
Builds all enhanced pages with real resource data
"""
import os, sys
sys.stdout.reconfigure(encoding='utf-8')

BASE = r'C:\Users\hashm\Desktop\Workplace Meer Foundation'
os.chdir(BASE)

DONATE = 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view'

def page(title, tag, h1, content, extra_css=''):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Meer Foundation</title>
  <meta name="description" content="{tag} — Meer Foundation, Chhattisgarh">
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .page-hero{{background:var(--bg-2);padding:140px 0 60px;border-bottom:1px solid var(--border);}}
    .check-list{{list-style:none;padding:0;}}
    .check-list li{{display:flex;gap:12px;margin-bottom:14px;color:var(--text-2);font-size:.95rem;line-height:1.6;}}
    .check-list li::before{{content:"✓";color:#10b981;font-weight:800;flex-shrink:0;margin-top:2px;}}
    .stat-chip{{display:inline-flex;flex-direction:column;align-items:center;background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:24px 30px;text-align:center;}}
    .stat-chip .num{{font-family:var(--font-serif);font-size:2.2rem;font-weight:800;color:#1e40af;line-height:1;}}
    .stat-chip .lbl{{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-4);margin-top:6px;}}
    .sdg-badge{{display:inline-block;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;padding:4px 12px;border-radius:20px;background:rgba(30,64,175,.08);color:#1e40af;margin-bottom:14px;}}
    .blue-card{{background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);}}
    .blue-card h3{{margin-bottom:16px;opacity:.9;font-size:.85rem;text-transform:uppercase;letter-spacing:1px;}}
    .blue-card p,.blue-card li{{opacity:.88;font-size:.95rem;line-height:1.7;}}
    .timeline{{border-left:3px solid #1e40af;padding-left:28px;margin-top:30px;}}
    .tl-node{{position:relative;margin-bottom:34px;}}
    .tl-node::before{{content:'';position:absolute;left:-38px;top:4px;width:14px;height:14px;background:#1e40af;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 2px #1e40af;}}
    .tl-year{{font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#1e40af;margin-bottom:4px;}}
    .tl-title{{font-weight:700;color:var(--text-1);margin-bottom:6px;}}
    .tl-desc{{font-size:.9rem;color:var(--text-3);line-height:1.6;}}
    {extra_css}
  </style>
</head>
<body>
<div id="progress-bar"></div>
<div id="site-header-inject"></div>
<section class="page-hero">
  <div class="container">
    <div class="section-header reveal">
      <div class="sdg-badge">{tag}</div>
      <h1 class="section-title">{h1}</h1>
    </div>
  </div>
</section>
{content}
<div id="site-footer-inject"></div>
<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

# ─────────────────────────────────────────────
# 1. FARMOURS.HTML — Agricultural Livelihoods
# ─────────────────────────────────────────────
farmours = page(
    "Farmours – Indigenous Farming & Livelihood",
    "SDG 1 · SDG 2 · SDG 8",
    "Farmours Initiative",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p class="section-subtitle" style="text-align:left;">Meer Foundation's Indigenous Farming Systems (FARMOURS) transforms traditional village-based farming into a structured, community-owned livelihood model across Chhattisgarh.</p>
        <div class="sdg-badge" style="margin-top:20px;">Women-Led Agricultural Enterprise</div>
        <h2 style="font-family:var(--font-serif);margin:16px 0 20px;">Dhamtari Makhana Initiative</h2>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Implemented by Meer Foundation in the <strong>Nagri forest region of Dhamtari district</strong>, this initiative introduces makhana (fox nut) cultivation as a high-value, sustainable livelihood leveraging the region's favourable agro-climatic conditions and perennial water bodies.</p>
        <ul class="check-list">
          <li>100 acres identified; 25 acres in active cultivation (Phase 1)</li>
          <li>Women Self Help Groups (SHGs) mobilised and trained as primary decision-makers</li>
          <li>Demonstration pilot plots and market linkages established</li>
          <li>Integration with existing rural livelihood systems to reduce income dependency on a single crop</li>
          <li>Structured training on water management, crop care & post-harvest handling</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div class="stat-chip"><span class="num">100</span><span class="lbl">Acres Identified</span></div>
          <div class="stat-chip"><span class="num">25</span><span class="lbl">Acres Phase 1</span></div>
          <div class="stat-chip"><span class="num">54+</span><span class="lbl">SHGs Formed</span></div>
          <div class="stat-chip"><span class="num">216+</span><span class="lbl">Women Entrepreneurs</span></div>
        </div>
        <div class="blue-card">
          <h3>The FARMOURS Framework</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:10px;">🌱 <strong>Community Institution Building</strong> — Women-led SHGs drive financial management</li>
            <li style="margin-bottom:10px;">📚 <strong>Capacity Building</strong> — Structured training programs and demonstration plots</li>
            <li style="margin-bottom:10px;">🔗 <strong>Livelihood Convergence</strong> — Crop diversification to reduce risk</li>
            <li>📊 <strong>IKS Research</strong> — Academic documentation via IJMEER Journal</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Impact Across Districts</div>
      <h2 class="section-title">Vegetable Farming & Crop Diversification</h2>
      <p class="section-subtitle">As the implementing agency for CSR partners, Meer Foundation has deployed the FARMOURS model across 12 villages, promoting millet agriculture, organic compost, and market-oriented crop clusters.</p>
    </div>
    <div class="grid-3" style="margin-top:40px;">
      <div class="feature-card reveal">
        <h4 style="color:#1e40af;margin-bottom:10px;">Medicinal Plant Cultivation</h4>
        <p style="color:var(--text-3);font-size:.9rem;">200 farmers trained in Kanker-Narayanpur on growing Tulsi, Kalmegh, Bringraj, and Brahmi across 200 acres, creating a premium herbal value chain.</p>
      </div>
      <div class="feature-card reveal reveal-delay-1">
        <h4 style="color:#1e40af;margin-bottom:10px;">Lac & Forest Livelihoods</h4>
        <p style="color:var(--text-3);font-size:.9rem;">Reviving traditional lac and imli (tamarind) production in forest-dependent communities, creating direct incomes for tribal households.</p>
      </div>
      <div class="feature-card reveal reveal-delay-2">
        <h4 style="color:#1e40af;margin-bottom:10px;">Agriculture Production Clusters</h4>
        <p style="color:var(--text-3);font-size:.9rem;">Male and female farmers organised into Agriculture Production Clusters (APCs) with detailed training on market-demand-aligned farming practices.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container reveal">
    <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-2xl);padding:40px;text-align:center;">
      <div style="font-size:1.2rem;font-style:italic;color:var(--text-2);margin-bottom:20px;">"We organised women and farmers at the village level. We trained them to practice farming that aligns with market demands. Today these communities earn sustainably."</div>
      <div style="font-weight:700;">Implementing Agency Coordinator</div>
      <div style="font-size:.85rem;color:var(--text-4);">Dhamtari District, Chhattisgarh</div>
    </div>
  </div>
</section>
""")

with open('farmours.html', 'w', encoding='utf-8') as f:
    f.write(farmours)
print("✓ farmours.html")

# ─────────────────────────────────────────────
# 2. PRAYAAS.HTML — Education
# ─────────────────────────────────────────────
prayaas = page(
    "Prayaas – Quality Education Initiative",
    "SDG 4 – Quality Education",
    "Prayaas: Reshaping Rural Education",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <div class="sdg-badge">Established 2011 · Chhattisgarh</div>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Prayaas is a transformative initiative by Meer Foundation dedicated to bridging the gap between traditional learning and modern educational methodologies in rural Chhattisgarh. As the implementing agency for education-focused CSR projects, Meer Foundation has upgraded 150+ schools with smart classrooms, computer labs, and digital tools.</p>
        <ul class="check-list">
          <li>Smart classroom installations bringing digital learning to 150+ government schools</li>
          <li>Scholarship programmes enabling 1,200+ meritorious students from BPL families to continue education</li>
          <li>Adult literacy and vocational training for out-of-school youth</li>
          <li>Girl education advocacy and awareness programmes in 59+ villages</li>
          <li>Library development and reading culture promotion</li>
          <li>Special support for children with disabilities in project-affected areas</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div class="stat-chip"><span class="num">150+</span><span class="lbl">Schools Reached</span></div>
          <div class="stat-chip"><span class="num">34.6L</span><span class="lbl">Students Impacted</span></div>
          <div class="stat-chip"><span class="num">2.11L</span><span class="lbl">Teachers Trained</span></div>
          <div class="stat-chip"><span class="num">2,271</span><span class="lbl">Sanitation Units</span></div>
        </div>
        <div class="blue-card">
          <h3>CSR Implementation</h3>
          <p>Meer Foundation serves as the on-ground implementing agency for education CSR projects. This includes infrastructure grants, digital equipment deployment, teacher capacity training, and impact documentation per the Penta-Alignment Framework.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="grid-3">
      <div class="feature-card reveal">
        <h4 style="color:#1e40af;margin-bottom:10px;">Smart Classrooms</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Interactive digital boards, projector systems, and e-learning content deployed across government higher secondary and high schools in Chhattisgarh.</p>
      </div>
      <div class="feature-card reveal reveal-delay-1">
        <h4 style="color:#1e40af;margin-bottom:10px;">Scholarship Programme</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Financial support for meritorious students from economically weaker sections, reducing dropout rates and enabling higher education access.</p>
      </div>
      <div class="feature-card reveal reveal-delay-2">
        <h4 style="color:#1e40af;margin-bottom:10px;">Science Labs</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Fully-equipped science laboratories installed in underserved schools, aligning with the national STEM agenda and giving rural students equal opportunity.</p>
      </div>
    </div>
    <div style="margin-top:40px;text-align:center;" class="reveal">
      <blockquote style="max-width:700px;margin:0 auto;font-size:1.1rem;font-style:italic;color:var(--text-2);">"Since smart class came, with big pictures and zooming, it was explained well. We have benefited a lot. Earlier we didn't even feel like studying."</blockquote>
      <div style="margin-top:16px;font-weight:700;">Community Leader</div>
      <div style="font-size:.85rem;color:var(--text-4);">Balodabazar District, Chhattisgarh</div>
    </div>
  </div>
</section>
""")

with open('prayaas.html', 'w', encoding='utf-8') as f:
    f.write(prayaas)
print("✓ prayaas.html")

# ─────────────────────────────────────────────
# 3. YOGA-KUTUMB.HTML
# ─────────────────────────────────────────────
yoga = page(
    "Yoga Kutumb – Health & Wellness",
    "SDG 3 – Good Health and Well-Being",
    "Yoga Kutumb: Holistic Community Wellness",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Yoga Kutumb is an initiative supported by Meer Foundation that integrates the transformative power of yoga into everyday rural life across Chhattisgarh. Aligned with India's cultural heritage and the global yoga movement, this programme deploys certified yoga professionals to work directly with communities.</p>
        <ul class="check-list">
          <li>Certified yoga professionals engaged for community-level training</li>
          <li>Health camps combined with yoga sessions across 10+ districts</li>
          <li>Special programming for women, children, and elderly participants</li>
          <li>Convergence with primary healthcare outreach (Mobile Health Units)</li>
          <li>International Yoga Day mass participation events</li>
          <li>Corporate wellness sessions integrated with CSR health mandates</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div class="stat-chip"><span class="num">35+</span><span class="lbl">Health Centres</span></div>
          <div class="stat-chip"><span class="num">8,710</span><span class="lbl">Individuals Treated</span></div>
          <div class="stat-chip"><span class="num">79%</span><span class="lbl">Healthcare Access (CG)</span></div>
          <div class="stat-chip"><span class="num">10+</span><span class="lbl">Districts Active</span></div>
        </div>
        <div class="blue-card">
          <h3>Meer Foundation as Healthcare Implementing Agency</h3>
          <p>Health camps, mobile health units, and cardiac care surgeries for underprivileged children have been implemented by Meer Foundation as the executing agency for CSR healthcare mandates. This includes 300+ children benefitting from congenital heart defect treatment programmes.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container reveal">
    <div class="grid-3">
      <div class="feature-card">
        <h4 style="color:#1e40af;margin-bottom:10px;">Mobile Health Units</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Bringing diagnostic services and basic medical care to remote villages where no permanent healthcare facility exists within 20 kilometres.</p>
      </div>
      <div class="feature-card">
        <h4 style="color:#1e40af;margin-bottom:10px;">Cardiac Care for Children</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Life-saving surgeries for children with Congenital Heart Defects across Chhattisgarh, ensuring no financial barrier prevents treatment. 300+ children targeted.</p>
      </div>
      <div class="feature-card">
        <h4 style="color:#1e40af;margin-bottom:10px;">TB Elimination Drive</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Participation in the 100-Day Intensified TB Elimination Campaign, screening and treating patients in coalfield and forest areas of Chhattisgarh.</p>
      </div>
    </div>
  </div>
</section>
""")

with open('yoga-kutumb.html', 'w', encoding='utf-8') as f:
    f.write(yoga)
print("✓ yoga-kutumb.html")

# ─────────────────────────────────────────────
# 4. SOCIAL-HERITAGE-WALK.HTML
# ─────────────────────────────────────────────
heritage = page(
    "Social Heritage Walk – Cultural Preservation",
    "SDG 11 – Sustainable Cities & Communities",
    "Social Heritage Walk: #LocalHeritage",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:18px;">Every year on <strong>World Heritage Day (April 18th)</strong> — the International Day for Monuments and Sites — Meer Foundation invites youth worldwide to dedicate one hour to stroll to a nearby heritage site and document its history for the world to see.</p>
        <ul class="check-list">
          <li>Annual event held on April 18 (World Heritage Day)</li>
          <li>Participants visit local heritage sites and share on social media using <strong>#LocalHeritage</strong></li>
          <li>Cultural documentation of oral histories and architectural details</li>
          <li>Youth engagement with 14th-century Sherki Mahal and 11th-century Bhoramdev Temple</li>
          <li>Integration with Bolti Nadi documentation of river-linked heritage sites</li>
          <li>Community storytelling sessions preserving Chhattisgarhi folklore</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="blue-card" style="margin-bottom:20px;">
          <h3>Heritage Sites Documented</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:8px;">🏛️ Sherki Mahal — 14th Century, Sakri River Basin</li>
            <li style="margin-bottom:8px;">🕌 Bhoramdev Temple — 11th Century, Kawardha</li>
            <li style="margin-bottom:8px;">🌊 River Ghats — Traditional bathing & agricultural heritage</li>
            <li>🌿 Tribal Forest Shrines — Indigenous spiritual heritage</li>
          </ul>
        </div>
        <div class="stat-chip" style="display:flex;flex-direction:row;gap:20px;align-items:center;width:100%;padding:24px;">
          <span class="num">April 18</span>
          <span style="font-size:.9rem;color:var(--text-3);">World Heritage Day — Annual Event by Meer Foundation</span>
        </div>
      </div>
    </div>
  </div>
</section>
""")

with open('social-heritage-walk.html', 'w', encoding='utf-8') as f:
    f.write(heritage)
print("✓ social-heritage-walk.html")

print("\nBatch 1 (4 program pages) complete.")
