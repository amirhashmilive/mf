"""
MEER FOUNDATION - BUILD BATCH 2
Research, Emerging, Impact pages with real data
"""
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')

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
    .prog-bar{{height:10px;background:var(--bg-2);border-radius:5px;overflow:hidden;margin-top:8px;margin-bottom:20px;}}
    .prog-fill{{height:100%;background:linear-gradient(90deg,#1e40af,#3b82f6);border-radius:5px;}}
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
# 5. COMMUNITY-RADIO.HTML
# ─────────────────────────────────────────────
radio = page("Radio Meer – Community Radio", "SDG 16 · Communication",
    "Radio Meer: The Voice of Rural Chhattisgarh",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Radio Meer is Meer Foundation's upcoming community radio station initiative — designed to become the primary information and empowerment channel for rural communities across Chhattisgarh. Broadcasting in Chhattisgarhi and Hindi, it will bridge the communication gap between development programmes and their intended beneficiaries.</p>
        <ul class="check-list">
          <li>Community radio frequency applied for under Ministry of Information & Broadcasting</li>
          <li>Content strategy covering health, agriculture, education, rights, and local culture</li>
          <li>Local youth trained as radio jockeys and programme producers</li>
          <li>Collaboration with Guriya Magazine for content cross-pollination</li>
          <li>Live public consultations and Gram Sabha broadcasts</li>
          <li>Emergency alert system for flood and drought early warnings</li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="margin-top:20px;">Express Interest in Radio Meer</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="blue-card">
          <h3>Why Community Radio?</h3>
          <p style="margin-bottom:16px;">In Chhattisgarh, nearly 60% of rural households rely on radio as their primary information source. Community radio empowers locals to create and consume content in their own language, ensuring no communication gap in government schemes, health advisories, or disaster alerts.</p>
          <p>Radio Meer will operate as a fully independent, community-owned station — managed, produced, and broadcast by the people it serves.</p>
        </div>
      </div>
    </div>
  </div>
</section>""")

with open('community-radio.html', 'w', encoding='utf-8') as f:
    f.write(radio)
print("✓ community-radio.html")

# ─────────────────────────────────────────────
# 6. GURIYA-MAGAZINE.HTML
# ─────────────────────────────────────────────
guriya = page("Guriya Magazine – Cultural Publication", "Culture · Heritage · SDG 11",
    "Guriya: Chhattisgarh's Community Magazine",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Guriya is a handwritten, hand-illustrated community magazine produced in the Chhattisgarhi language by Meer Foundation. It preserves regional folklore, celebrates local heroes, and empowers youth through participatory storytelling and artisan illustration.</p>
        <ul class="check-list">
          <li>Published periodically in Chhattisgarhi with Hindi translations</li>
          <li>Handwritten and illustrated by community youth volunteers</li>
          <li>Content covers: local heroes, folklore, recipes, health tips, environment, and women's stories</li>
          <li>Distributed free across villages in Dhamtari and adjoining districts</li>
          <li>Archives digitised and uploaded to Meer Foundation's digital library</li>
          <li>Acts as a creative apprenticeship for aspiring rural writers and artists</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-2xl);padding:40px;">
          <h3 style="margin-bottom:20px;font-family:var(--font-serif);">Why Guriya Matters</h3>
          <p style="color:var(--text-2);line-height:1.8;margin-bottom:16px;">With rapid digitisation, Chhattisgarhi oral traditions and local dialects face existential risk. Guriya serves as a living archive — created by the community, for the community — ensuring that stories, recipes, and wisdom passed down for generations are not lost to time.</p>
          <div style="background:#fff;border-left:4px solid #1e40af;padding:20px;border-radius:8px;">
            <div style="font-style:italic;color:var(--text-2);">"When we write for Guriya, we feel our stories matter. They are not just village tales — they are Chhattisgarh's heritage."</div>
            <div style="font-size:.85rem;font-weight:700;margin-top:10px;">Youth Contributor, Dhamtari</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>""")

with open('guriya-magazine.html', 'w', encoding='utf-8') as f:
    f.write(guriya)
print("✓ guriya-magazine.html")

# ─────────────────────────────────────────────
# 7. EDUSUTO-COURSES.HTML
# ─────────────────────────────────────────────
edusuto = page("EduSuTo – Education for Sustainable Tomorrow", "SDG 13 · SDG 4",
    "EduSuTo: Certifications in Sustainability",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">EduSuTo (Education for Sustainable Tomorrow) is Meer Foundation's flagship training and certification programme using the Penta-Alignment framework to train professionals, students, and community leaders in sustainable development, climate action, and CSR implementation.</p>
        <ul class="check-list">
          <li>Certification course in Carbon Capture and Ecological Balance</li>
          <li>CSR Implementation and Communication training (aligned with Penta-Alignment Model)</li>
          <li>Sustainability auditing and impact measurement workshops</li>
          <li>Online and offline blended learning modules</li>
          <li>Industry partnerships with CSR practitioners across Chhattisgarh</li>
          <li>Certificates recognised for academic credit at partner institutions</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-2xl);padding:40px;">
          <h3 style="margin-bottom:20px;font-family:var(--font-serif);">Course Catalogue</h3>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div style="background:#fff;padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
              <strong>Carbon Capture Fundamentals</strong>
              <p style="font-size:.85rem;color:var(--text-4);margin-top:4px;">4 weeks · Certificate · Online + Field</p>
            </div>
            <div style="background:#fff;padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
              <strong>CSR Strategy & Implementation</strong>
              <p style="font-size:.85rem;color:var(--text-4);margin-top:4px;">6 weeks · Certificate · Based on Penta-Alignment Model</p>
            </div>
            <div style="background:#fff;padding:20px;border-radius:12px;border-left: 4px solid #1e40af;">
              <strong>SDG Monitoring & Impact Verification</strong>
              <p style="font-size:.85rem;color:var(--text-4);margin-top:4px;">8 weeks · Advanced Certification</p>
            </div>
          </div>
          <a href="contact.html" class="btn btn-primary" style="margin-top:24px;width:100%;justify-content:center;">Enrol in EduSuTo</a>
        </div>
      </div>
    </div>
  </div>
</section>""")

with open('edusuto-courses.html', 'w', encoding='utf-8') as f:
    f.write(edusuto)
print("✓ edusuto-courses.html")

# ─────────────────────────────────────────────
# 8. IJMEER-JOURNAL.HTML
# ─────────────────────────────────────────────
ijmeer = page("IJMEER – International Journal", "SDG 4 · SDG 9 · SDG 17",
    "IJMEER: Open Access Research Journal",
    """
<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">The International Journal of Multidisciplinary Explication and Emerging Research (IJMEER) is a quarterly, open-access, double-blind peer-reviewed academic journal published by Meer Foundation. Established in 2026 and based in Dhamtari, Chhattisgarh, IJMEER facilitates interdisciplinary research across 70+ academic disciplines.</p>
        <ul class="check-list">
          <li>Quarterly issues in both print and online formats</li>
          <li>Double-blind peer review with plagiarism screening</li>
          <li>Publication timeline of 4–8 weeks from submission</li>
          <li>DOI assignment for every published article</li>
          <li>Open-access with no subscription barrier for readers</li>
          <li>Aligned with UGC-CARE compliance standards</li>
          <li>Research focus: CSR, SDGs, rural development, tribal policy</li>
        </ul>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="blue-card" style="margin-bottom:24px;">
          <h3>SDG Alignment</h3>
          <ul style="list-style:none;padding:0;">
            <li style="margin-bottom:8px;">📖 SDG 4 — Quality Education (open-access knowledge)</li>
            <li style="margin-bottom:8px;">⚙️ SDG 9 — Industry, Innovation & Infrastructure</li>
            <li style="margin-bottom:8px;">♀️ SDG 5 — Gender Equality (inclusive participation)</li>
            <li style="margin-bottom:8px;">🤝 SDG 17 — Partnerships for the Goals</li>
          </ul>
        </div>
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;text-align:center;">
          <div style="font-size:.85rem;color:var(--text-4);font-weight:700;text-transform:uppercase;letter-spacing:1px;">Journal Website</div>
          <a href="https://www.ijmeer.com" target="_blank" rel="noopener" style="color:#1e40af;font-size:1.1rem;font-weight:700;display:block;margin-top:8px;">www.ijmeer.com →</a>
        </div>
      </div>
    </div>
  </div>
</section>""")

with open('ijmeer-journal.html', 'w', encoding='utf-8') as f:
    f.write(ijmeer)
print("✓ ijmeer-journal.html")

# ─────────────────────────────────────────────
# 9. CSR-RESEARCH.HTML (critical — uses all CSR data)
# ─────────────────────────────────────────────
csr = page("CSR Research – Policy & Impact", "CSR Implementation · Research",
    "CSR Research & Implementation Hub",
    """
<section class="section">
  <div class="container">
    <div class="section-header reveal" style="text-align:left;">
      <p style="color:var(--text-2);line-height:1.8;max-width:900px;">Meer Foundation is a trusted implementing agency for corporate CSR mandates under India's Companies Act, 2013. The following data represents outcomes from CSR projects implemented by Meer Foundation across Chhattisgarh — the agency behind the transformation.</p>
    </div>

    <div class="grid-4" style="margin-top:40px;">
      <div class="stat-chip reveal"><span class="num">₹170Cr</span><span class="lbl">CSR Projects Executed</span></div>
      <div class="stat-chip reveal"><span class="num">42.6L+</span><span class="lbl">Lives Impacted (CG)</span></div>
      <div class="stat-chip reveal"><span class="num">31,947</span><span class="lbl">Farmers Trained</span></div>
      <div class="stat-chip reveal"><span class="num">17,187</span><span class="lbl">Women Entrepreneurs</span></div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Sector-Wise CSR Implementation</div>
      <h2 class="section-title">What Meer Foundation Delivers</h2>
      <p class="section-subtitle">All CSR projects listed below were executed by Meer Foundation as the on-ground implementing agency.</p>
    </div>

    <div class="grid-2" style="margin-top:40px;gap:40px;">
      <div class="reveal">
        <h3 style="margin-bottom:20px;font-family:var(--font-serif);">Education Projects</h3>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Smart Classroom Deployment</span><span>36%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:36%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Scholarship Implementation</span><span>28%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:28%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Teacher Training Programmes</span><span>18%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:18%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Infrastructure (Labs, Libraries)</span><span>18%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:18%;"></div></div>
      </div>

      <div class="reveal reveal-delay-1">
        <h3 style="margin-bottom:20px;font-family:var(--font-serif);">Healthcare & Environment Projects</h3>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Mobile Health Units & Camps</span><span>30%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:30%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Water & Sanitation (Bolti Nadi)</span><span>25%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:25%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Livelihood & Women Empowerment</span><span>27%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:27%;"></div></div>

        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:.9rem;"><span>Infrastructure & Public Safety</span><span>18%</span></div>
        <div class="prog-bar"><div class="prog-fill" style="width:18%;"></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Key Projects Implemented</div>
      <h2 class="section-title">Flagship CSR Interventions</h2>
    </div>
    <div class="grid-3" style="margin-top:40px;">
      <div class="feature-card reveal">
        <div class="sdg-badge">Education</div>
        <h4 style="margin:12px 0 10px;">Girls' Hostel, NIT Raipur</h4>
        <p style="font-size:.88rem;color:var(--text-3);">A 500-bed girls' hostel constructed at the National Institute of Technology, Raipur under a ₹48.19 crore MoU — implemented by Meer Foundation as a key CSR education infrastructure project.</p>
      </div>
      <div class="feature-card reveal reveal-delay-1">
        <div class="sdg-badge">Healthcare</div>
        <h4 style="margin:12px 0 10px;">Cardiac Surgeries for Children</h4>
        <p style="font-size:.88rem;color:var(--text-3);">Implementation of ₹4.71 crore cardiac surgery programme for 300 children with Congenital Heart Defects across Chhattisgarh. 60+ life-saving surgeries already completed.</p>
      </div>
      <div class="feature-card reveal reveal-delay-2">
        <div class="sdg-badge">Environment</div>
        <h4 style="margin:12px 0 10px;">Sakri River Rejuvenation</h4>
        <p style="font-size:.88rem;color:var(--text-3);">End-to-end implementation of Bolti Nadi's Sakri River programme — including check dams, gabions, tree plantations, and a ₹2 crore sewage treatment plant across 59 villages.</p>
      </div>
      <div class="feature-card reveal">
        <div class="sdg-badge">Rural Development</div>
        <h4 style="margin:12px 0 10px;">Holistic Rural Development Programme</h4>
        <p style="font-size:.88rem;color:var(--text-3);">Agricultural technique introduction, clean drinking water provision, SHG strengthening and 6,415+ solar lights installed in rural communities across 16 districts of Chhattisgarh.</p>
      </div>
      <div class="feature-card reveal reveal-delay-1">
        <div class="sdg-badge">Digital Education</div>
        <h4 style="margin:12px 0 10px;">Digi Vidya Smart Classrooms</h4>
        <p style="font-size:.88rem;color:var(--text-3);">265 smart classroom solutions and 84 science labs deployed across government higher secondary schools in Chhattisgarh under a ₹13.73 crore CSR project.</p>
      </div>
      <div class="feature-card reveal reveal-delay-2">
        <div class="sdg-badge">TB Elimination</div>
        <h4 style="margin:12px 0 10px;">100-Day TB Elimination Campaign</h4>
        <p style="font-size:.88rem;color:var(--text-3);">Active field implementation of the national TB elimination intensified campaign across coalfield and tribal areas of Chhattisgarh, including screening and treatment linkages.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Research Framework</div>
      <h2 class="section-title">Penta-Alignment: Measuring CSR Effectiveness</h2>
    </div>
    <div class="grid-2" style="margin-top:40px;">
      <div class="reveal">
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Meer Foundation's proprietary <strong>Penta-Alignment Theory</strong> (developed by Founder Amir Hashmi, PhD) provides a rigorous scientific methodology for measuring CSR effectiveness. The theory defines a composite <strong>CSR Effectiveness Index (CEI)</strong> capturing additive and multiplicative effects across five pillars.</p>
        <a href="five-pillars.html" class="btn btn-primary">Explore the Five Pillars →</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div class="blue-card">
          <h3>CSR Thesis Research</h3>
          <p>Based on 40 in-depth field interviews across Chhattisgarh and Jharkhand (200 community respondents per state), this research provides empirical grounding for CSR implementation best practices, communication effectiveness scores, and beneficiary perception data.</p>
        </div>
      </div>
    </div>
  </div>
</section>
""")

with open('csr-research.html', 'w', encoding='utf-8') as f:
    f.write(csr)
print("✓ csr-research.html")

# ─────────────────────────────────────────────
# 10. DISTRICT-PROFILES.HTML
# ─────────────────────────────────────────────
districts_data = [
    ("Dhamtari", "Foundation's home district. Active FARMOURS Makhana Initiative, Bolti Nadi operations, SHG programmes, Yoga Kutumb, and Guriya Magazine.", "12", "SHGs Formed"),
    ("Raipur", "Urban CSR implementation hub. Education scholarships, infrastructure projects, skill development, and medical camps.", "8,710+", "Individuals Treated"),
    ("Bastar", "Tribal livelihood programmes, NTFP value chains, forest-based livelihoods, and healthcare camps.", "15", "Villages Covered"),
    ("Baloda Bazar", "Smart classroom deployments across 50+ schools, teacher training, and girl education drives.", "50+", "Schools Upgraded"),
    ("Kawardha (Kabirdham)", "Sakri River Walk origin point. Check dam construction, watershed programme, NABARD partnership.", "90km", "River Walk Base"),
    ("Bemetara", "Sakri River Walk destination. Desilting, MGNREGA mobilisation, sewage treatment plant.", "59", "Villages Desilted"),
    ("Kanker", "Medicinal plant project. 200 farmers trained in Tulsi, Kalmegh, Bringraj cultivation across 200 acres.", "200", "Farmers Trained"),
    ("Balod", "Vegetable farming diversification, water security projects, women SHG formation.", "8+", "SHGs Active"),
    ("Surguja", "Tribal rights, forest governance, NTFP livelihoods, and community health programmes.", "10+", "Villages Active"),
    ("Raigarh", "Mobile health units, livelihood training for coal-belt communities, solar street light deployment.", "6,415", "Solar Lights Installed"),
]

dist_cards = ''.join(f"""
      <div class="feature-card reveal" style="border-left:4px solid #1e40af;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <h4 style="color:#1e40af;">{d[0]}</h4>
          <div style="text-align:right;"><div style="font-size:1.4rem;font-weight:800;color:#1e40af;">{d[2]}</div><div style="font-size:.7rem;text-transform:uppercase;color:var(--text-4);">{d[3]}</div></div>
        </div>
        <p style="font-size:.88rem;color:var(--text-3);line-height:1.6;">{d[1]}</p>
      </div>""" for d in districts_data)

districts = page("District Profiles – Our Reach", "Geographic Impact · 10+ Districts",
    "District Profiles: Meer Foundation Reach",
    f"""
<section class="section">
  <div class="container">
    <div class="section-header reveal">
      <p class="section-subtitle">Meer Foundation has active implementation presence in 10+ districts of Chhattisgarh. Each district profile below shows the primary interventions and key impact numbers.</p>
    </div>
    <div class="grid-2" style="margin-top:50px;">{dist_cards}</div>
  </div>
</section>

<section class="section" style="background:var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">Collective Impact Across All Districts</h2>
    </div>
    <div class="grid-5" style="margin-top:40px;">
      <div class="stat-chip reveal"><span class="num">400K+</span><span class="lbl">Lives Impacted</span></div>
      <div class="stat-chip reveal"><span class="num">500+</span><span class="lbl">Villages Reached</span></div>
      <div class="stat-chip reveal"><span class="num">54+</span><span class="lbl">SHGs Formed</span></div>
      <div class="stat-chip reveal"><span class="num">14+</span><span class="lbl">Years Active</span></div>
      <div class="stat-chip reveal"><span class="num">10+</span><span class="lbl">Districts</span></div>
    </div>
  </div>
</section>
""")

with open('district-profiles.html', 'w', encoding='utf-8') as f:
    f.write(districts)
print("✓ district-profiles.html")

print("\nBatch 2 complete.")
