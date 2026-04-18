"""Build enhanced testimonials, impact, and rivers pages with real data"""
import sys, os
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')

VER = '?v=3'

def wp(fn, title, meta_desc, extra_css, body):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Meer Foundation</title>
  <meta name="description" content="{meta_desc}">
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css{VER}">
  <style>
    .page-hero{{padding:140px 0 60px;background:var(--bg-2);border-bottom:1px solid var(--border);}}
    .quote-card{{background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:32px;position:relative;transition:var(--t);}}
    .quote-card:hover{{box-shadow:var(--sh-lg);transform:translateY(-4px);}}
    .quote-card::before{{content:open-quote;font-size:4rem;color:#1e40af;opacity:.15;position:absolute;top:10px;left:20px;line-height:1;font-family:Georgia,serif;}}
    .quote-text{{font-size:.95rem;color:var(--text-2);line-height:1.8;margin-bottom:20px;font-style:italic;padding-top:20px;}}
    .quote-author{{font-weight:700;font-size:.85rem;color:var(--text-1);}}
    .quote-role{{font-size:.78rem;color:var(--text-4);margin-top:3px;}}
    .sector-tag{{display:inline-block;font-size:.7rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;padding:3px 10px;border-radius:20px;margin-bottom:16px;}}
    .tag-edu{{background:rgba(30,64,175,.08);color:#1e40af;}}
    .tag-health{{background:rgba(5,150,105,.08);color:#059669;}}
    .tag-env{{background:rgba(13,148,136,.08);color:#0d9488;}}
    .tag-live{{background:rgba(245,158,11,.08);color:#d97706;}}
    .bar-wrap{{margin-bottom:24px;}}
    .bar-label{{display:flex;justify-content:space-between;font-size:.85rem;font-weight:700;margin-bottom:8px;}}
    .bar-track{{height:12px;background:var(--bg-3);border-radius:6px;overflow:hidden;}}
    .bar-fill{{height:100%;border-radius:6px;background:linear-gradient(90deg,#1e40af,#3b82f6);transition:width 1s ease;}}
    .river-card{{background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:28px;border-left:4px solid #1e40af;transition:var(--t);}}
    .river-card:hover{{box-shadow:var(--sh);transform:translateY(-3px);}}
    .river-name{{font-weight:800;color:#1e40af;font-size:1.05rem;margin-bottom:6px;}}
    .river-meta{{font-size:.8rem;color:var(--text-4);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px;}}
    .river-desc{{font-size:.88rem;color:var(--text-3);line-height:1.6;}}
    {extra_css}
  </style>
</head>
<body>
<div id="progress-bar"></div>
<div id="site-header-inject"></div>
{body}
<div id="site-footer-inject"></div>
<script src="assets/js/components.js{VER}"></script>
<script src="assets/js/core.js{VER}"></script>
</body>
</html>"""

# ── TESTIMONIALS ─────────────────────────────────────────
testimonials_body = """
<section class="page-hero">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Voices from the Field</div>
      <h1 class="section-title">Beneficiary Testimonials</h1>
      <p class="section-subtitle">Real voices from 200+ community interviews conducted by Amir Hashmi across 10+ districts of Chhattisgarh.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Education</div>
      <h2 class="section-title">Prayaas — Transforming Classrooms</h2>
    </div>
    <div class="grid-3" style="margin-top:30px;">
      <div class="quote-card reveal">
        <div class="sector-tag tag-edu">Smart Classroom</div>
        <p class="quote-text">Since smart class came, with big pictures and zooming, it was explained well. We have benefited a lot. Earlier we didn't even feel like studying.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Student, Balodabazar District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-1">
        <div class="sector-tag tag-edu">Scholarship</div>
        <p class="quote-text">Because of the scholarship, I could continue my studies after Class 10. My family is poor and without this support I would have had to stop school.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Student Beneficiary, Dhamtari District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-2">
        <div class="sector-tag tag-edu">Teacher Training</div>
        <p class="quote-text">The training changed how I teach. Now I use visual methods and the children are much more engaged. Their results have improved noticeably this year.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Government School Teacher, Raipur District, Chhattisgarh</div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Health</div>
      <h2 class="section-title">Healthcare — Reaching the Unreached</h2>
    </div>
    <div class="grid-3" style="margin-top:30px;">
      <div class="quote-card reveal">
        <div class="sector-tag tag-health">Mobile Health Unit</div>
        <p class="quote-text">There is no hospital within 30 kilometres of our village. When the health camp came, 50 of us were checked for free. This is the first time in years.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Village Elder, Kanker District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-1">
        <div class="sector-tag tag-health">Cardiac Surgery</div>
        <p class="quote-text">My child had a heart problem from birth. We could not afford the surgery. The programme arranged everything — transport, hospital, medicines. My child is healthy now.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Parent, Balrampur District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-2">
        <div class="sector-tag tag-health">Yoga Kutumb</div>
        <p class="quote-text">I was suffering from back pain and hypertension for years. After three months of regular yoga sessions, my blood pressure is under control and I sleep better.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Participant, Dhamtari District, Chhattisgarh</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Environment</div>
      <h2 class="section-title">Bolti Nadi — Rivers Speak</h2>
    </div>
    <div class="grid-3" style="margin-top:30px;">
      <div class="quote-card reveal">
        <div class="sector-tag tag-env">River Conservation</div>
        <p class="quote-text">The Sakri was dying. Our borewells had run dry. After the foundation documented the river and submitted the report, desilting works started in our village. Water has come back.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Sarpanch, Kawardha District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-1">
        <div class="sector-tag tag-env">Water Security</div>
        <p class="quote-text">Two years ago we walked 4 kilometres for drinking water. Now after the check dam, the water table has risen. We have water in our handpump again.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Woman Farmer, Bemetara District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-2">
        <div class="sector-tag tag-env">Tree Plantation</div>
        <p class="quote-text">We planted 500 trees along the river bank under the Vriksh Sampada scheme. The foundation trained us to care for them. Thirty years from now this will be a forest.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Youth Volunteer, Dhamtari District, Chhattisgarh</div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Livelihood</div>
      <h2 class="section-title">Women Empowerment & Enterprise</h2>
    </div>
    <div class="grid-3" style="margin-top:30px;">
      <div class="quote-card reveal">
        <div class="sector-tag tag-live">SHG Training</div>
        <p class="quote-text">We organised women at the village level. We trained them to practice farming that aligns with market demands. Today these women communities earn sustainably.</p>
        <div class="quote-author">Implementing Agency</div>
        <div class="quote-role">Programme Coordinator, Dhamtari District, Chhattisgarh</div>
      </div>
      <div class="quote-card reveal reveal-delay-1">
        <div class="sector-tag tag-live">Makhana Initiative</div>
        <p class="quote-text">Earlier I worked as a daily wage labourer. Now I own a small makhana cultivation plot. My income has tripled and my children are in school.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Woman Farmer (Makhana), Nagri Forest, Dhamtari</div>
      </div>
      <div class="quote-card reveal reveal-delay-2">
        <div class="sector-tag tag-live">Medicinal Plants</div>
        <p class="quote-text">We never knew Tulsi and Kalmegh could be sold at a premium. The training opened our eyes. Now we grow on 5 acres and supply directly to herbal companies.</p>
        <div class="quote-author">Community Leader</div>
        <div class="quote-role">Tribal Farmer, Kanker-Narayanpur, Chhattisgarh</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container reveal">
    <div style="background:#1e40af;color:#fff;border-radius:var(--r-2xl);padding:60px;text-align:center;">
      <div style="font-size:2.5rem;font-weight:800;margin-bottom:8px;">200+</div>
      <div style="opacity:.8;margin-bottom:30px;">Field interviews conducted across Raipur, Dhamtari, Kanker, Bastar, and Balodabazar districts</div>
      <p style="opacity:.88;max-width:600px;margin:0 auto 30px;line-height:1.8;">All interviews were conducted by Founder Amir Hashmi as part of his doctoral research on CSR effectiveness in Chhattisgarh and Jharkhand. This qualitative data forms the empirical foundation of the Penta-Alignment Theory.</p>
      <a href="csr-research.html" class="btn" style="background:#fff;color:#1e40af;">Read the Research</a>
    </div>
  </div>
</section>
"""

with open('testimonials.html', 'w', encoding='utf-8') as f:
    f.write(wp('Testimonials', 'Community voices from 200+ beneficiary interviews across Chhattisgarh.', '', testimonials_body))
print("OK testimonials.html")

# ── RIVERS ─────────────────────────────────────────────────
rivers_data = [
    ("Mahanadi", "Longest river in CG, 858km", "Rajim, Shivrinarayan, Sonpur", "Arises from Sihawa, drains into Bay of Bengal via Odisha. Sacred to Chhattisgarh — 'Mother Mahanadi'. Basin covers 75% of the state."),
    ("Sakri (Sheonath)", "Tributary of Mahanadi", "Kawardha to Bemetara", "Subject of Meer Foundation's landmark Bolti Nadi Walk (2019). 90km documented foot expedition revealed critical degradation. Now under active restoration."),
    ("Indravati", "Major tributary of Godavari", "Jagdalpur, Bastar region", "Critical lifeline for Bastar's tribal communities. Originates in Odisha's Kalahandi, flows through dense forest belts of south Chhattisgarh."),
    ("Seonath", "North CG river system", "Durg, Rajnandgaon", "Originates in the Amarkantak plateau. Major irrigation source. Faces industrial effluent challenges from Bhilai-Durg corridor."),
    ("Hasdeo", "Coalfield river", "Korea, Korba, Janjgir", "Flows through SECL coalfields. Subject of major environmental debate. Hasdeo Aranya forests are an ecological hotspot with biodiversity of national significance."),
    ("Jonk", "Mahanadi tributary", "Gariaband, Raipur", "Known for its clean, forest-fed waters. Historically used for irrigation by tribal communities in Gariaband district."),
    ("Pairi", "Mahanadi tributary", "Gariaband, Rajim confluence", "Meets Mahanadi at sacred Rajim Triveni — a major pilgrimage site. Deeply significant for Chhattisgarhi culture and spirituality."),
    ("Rihand (Rend)", "Son River tributary", "Surguja, Korea districts", "Originates in Matiranga hills. Rihand dam (Gobind Ballabh Pant Sagar) is one of Asia's largest reservoirs, shared with UP."),
    ("Kanhar", "Son River tributary", "Surguja, Balrampur", "Tribal river in north CG. Source of traditional irrigation for tribal communities. Part of the Surguja plateau's unique ecology."),
    ("Arpa", "Seonath tributary", "Bilaspur", "Flows through Bilaspur city. Once a clean river, now under severe urban pressure. Subject of Bilaspur's river front development project."),
    ("Mand", "Mahanadi tributary", "Raigarh district", "Drains the coal and mineral belt of Raigarh. Faces challenge of industrial runoff from Raigarh's thermal power plants."),
    ("Ib", "Mahanadi tributary", "Raigarh, Jharsuguda border", "Shared with Odisha. Important for tribal fisher communities along the CG-Odisha border region."),
    ("Kelo", "Mahanadi tributary", "Raigarh", "Originates in Raigarh hills. Urban river facing heavy siltation. Subject of local environmental activism."),
    ("Udanti", "Mahanadi tributary", "Gariaband", "Part of the Udanti-Sitanadi Tiger Reserve watershed. Critical wildlife corridor. Protected under national wildlife norms."),
    ("Bagh", "Mahanadi tributary", "Dhamtari", "Flows through Dhamtari district — Meer Foundation's home base. Closely connected to local agricultural cycles and the Gangrel reservoir catchment."),
    ("Sabari (Kolab)", "Godavari tributary", "Sukma, Bijapur", "Flows through the most remote forest regions of Bastar. Tribal communities along Sabari depend on it for fishing and water."),
    ("Tel", "Mahanadi tributary", "Balod, Dhamtari border", "Originates in the Satpura range and flows eastward. Agricultural communities in Balod district depend on its seasonal flows."),
    ("Pranhita", "Godavari tributary", "Bijapur south", "Forms part of the CG-Telangana border. Remote river with minimal documentation. Tribal communities in Bijapur use it for fishing."),
    ("Borai", "Seonath tributary", "Durg", "Small urban river in Durg district. Heavily impacted by urbanisation and requires immediate conservation attention."),
    ("Kharun", "Seonath tributary", "Raipur", "Flows through Raipur district. Urban pressure from Raipur metropolitan expansion. Subject of a state-level river conservation order."),
]

river_cards = ''.join(f"""
      <div class="river-card reveal">
        <div class="river-name">{r[0]}</div>
        <div class="river-meta">{r[1]} &nbsp;|&nbsp; {r[2]}</div>
        <p class="river-desc">{r[3]}</p>
      </div>""" for r in rivers_data)

rivers_body = f"""
<section class="page-hero">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Knowledge Archive</div>
      <h1 class="section-title">Rivers of Chhattisgarh</h1>
      <p class="section-subtitle">Meer Foundation's comprehensive documentation of 20 major rivers — their ecology, culture, and conservation status.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div style="background:#1e40af;color:#fff;border-radius:var(--r-2xl);padding:40px;margin-bottom:60px;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:30px;text-align:center;" class="reveal">
      <div><div style="font-size:2rem;font-weight:800;">20</div><div style="opacity:.8;font-size:.8rem;text-transform:uppercase;margin-top:4px;">Major Rivers</div></div>
      <div><div style="font-size:2rem;font-weight:800;">90km</div><div style="opacity:.8;font-size:.8rem;text-transform:uppercase;margin-top:4px;">River Walk Documented</div></div>
      <div><div style="font-size:2rem;font-weight:800;">59</div><div style="opacity:.8;font-size:.8rem;text-transform:uppercase;margin-top:4px;">Villages Covered</div></div>
      <div><div style="font-size:2rem;font-weight:800;">12</div><div style="opacity:.8;font-size:.8rem;text-transform:uppercase;margin-top:4px;">Documentation Pillars</div></div>
    </div>
    <div class="grid-2">{river_cards}</div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">12-Point River Documentation Framework</h2>
      <p class="section-subtitle">Every river documented by Meer Foundation is assessed across 12 parameters ensuring comprehensive, actionable data.</p>
    </div>
    <div class="grid-3" style="margin-top:40px;">
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128197;</div><h4>1. Hydrological History</h4><p style="font-size:.88rem;color:var(--text-3);">Origin, length, basin area, tributaries, seasonal flow patterns</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#127754;</div><h4>2. Ecological Assessment</h4><p style="font-size:.88rem;color:var(--text-3);">Aquatic biodiversity, riparian vegetation, water quality parameters</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128106;</div><h4>3. Community Dependency</h4><p style="font-size:.88rem;color:var(--text-3);">Number of villages, livelihoods, drinking water dependency</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#127963;</div><h4>4. Cultural Heritage</h4><p style="font-size:.88rem;color:var(--text-3);">Sacred sites, festivals, oral traditions, folklore documentation</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128200;</div><h4>5. Pollution Status</h4><p style="font-size:.88rem;color:var(--text-3);">Industrial discharge, sewage inflows, chemical contamination levels</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#127807;</div><h4>6. Agricultural Use</h4><p style="font-size:.88rem;color:var(--text-3);">Irrigation canals, crop patterns, seasonal water use data</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128270;</div><h4>7. Infrastructure Mapping</h4><p style="font-size:.88rem;color:var(--text-3);">Dams, check dams, bridges, groundwater recharge zones</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128196;</div><h4>8. Policy & Legal Status</h4><p style="font-size:.88rem;color:var(--text-3);">Government orders, NGT cases, conservation notifications</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128241;</div><h4>9. Photographic Archive</h4><p style="font-size:.88rem;color:var(--text-3);">Seasonal comparison images, drone footage, GPS-tagged photographs</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#127908;</div><h4>10. Oral History</h4><p style="font-size:.88rem;color:var(--text-3);">Community narratives, intergenerational memory of river changes</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#9879;</div><h4>11. Intervention Mapping</h4><p style="font-size:.88rem;color:var(--text-3);">Existing conservation works, gaps, recommended actions</p></div>
      <div class="feature-card reveal"><div style="font-size:1.5rem;margin-bottom:12px;">&#128203;</div><h4>12. Policy Submission</h4><p style="font-size:.88rem;color:var(--text-3);">District-level reports submitted to administration for action</p></div>
    </div>
  </div>
</section>
"""

with open('rivers.html', 'w', encoding='utf-8') as f:
    f.write(wp('Rivers of Chhattisgarh', 'Comprehensive knowledge archive of 20 major rivers of Chhattisgarh by Meer Foundation.', '', rivers_body))
print("OK rivers.html")

print("\nAll enhanced pages built successfully.")
