import os
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')

DONATE = 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view'

def write_page(fn, title, tag, h1, subtitle, body_html):
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Meer Foundation</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div id="progress-bar"></div>
<div id="site-header-inject"></div>
<section style="padding:140px 0 60px; background:var(--bg-2);">
  <div class="container">
    <div class="section-tag">{tag}</div>
    <h1 class="section-title">{h1}</h1>
    <p class="section-subtitle">{subtitle}</p>
  </div>
</section>
{body_html}
<div id="site-footer-inject"></div>
<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""
    with open(fn, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"OK {fn}")

# ── VOLUNTEER ──
write_page('volunteer.html', 'Volunteer', 'Take Action', 'Volunteer With Meer Foundation',
    'Join 225+ trained volunteers driving grassroots change in Chhattisgarh.',
    """<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <h2 style="font-family:var(--font-serif);margin-bottom:20px;">Why Volunteer With Us?</h2>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">Meer Foundation's volunteers are the backbone of every initiative — from the Bolti Nadi river walks to the Prayaas classroom upgrades. You won't just observe; you will lead, document, and make decisions that directly impact communities.</p>
        <ul style="list-style:none;padding:0;">
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Field work across 10+ districts in Chhattisgarh</li>
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Certificate of volunteering from Meer Foundation</li>
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Participate in Bolti Nadi river expeditions</li>
          <li style="padding:12px 0;color:var(--text-2);">&#10003; Mentorship by Founder Amir Hashmi</li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="margin-top:28px;">Apply to Volunteer</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
          <h3 style="margin-bottom:20px;font-size:.85rem;text-transform:uppercase;letter-spacing:1px;">Open Opportunities</h3>
          <p style="opacity:.88;margin-bottom:12px;">&#127754; Bolti Nadi — River Walk Documentation Teams</p>
          <p style="opacity:.88;margin-bottom:12px;">&#128218; Prayaas — Smart Classroom Facilitators</p>
          <p style="opacity:.88;margin-bottom:12px;">&#127807; Farmours — Medicinal Plant Field Assistants</p>
          <p style="opacity:.88;margin-bottom:12px;">&#127897; Radio Meer — Content Producers</p>
          <p style="opacity:.88;">&#128214; Guriya Magazine — Writers and Illustrators</p>
        </div>
      </div>
    </div>
  </div>
</section>""")

# ── DONATE ──
write_page('donate.html', 'Donate', 'Support Our Work', 'Support Meer Foundation',
    'Every rupee you donate fuels rivers, classrooms, and livelihoods in Chhattisgarh.',
    f"""<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <h2 style="font-family:var(--font-serif);margin-bottom:20px;">Your Donation in Action</h2>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="background:var(--bg-2);padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
            <strong>&#8377;500</strong> — Educational supplies for one rural student for a semester.
          </div>
          <div style="background:var(--bg-2);padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
            <strong>&#8377;1,000</strong> — Health camp screening 50 villagers in a remote village.
          </div>
          <div style="background:var(--bg-2);padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
            <strong>&#8377;5,000</strong> — One SHG member's annual training and enterprise support.
          </div>
          <div style="background:var(--bg-2);padding:20px;border-radius:12px;border-left:4px solid #1e40af;">
            <strong>&#8377;25,000</strong> — One check dam protecting water for 3 villages.
          </div>
        </div>
        <a href="{DONATE}" target="_blank" class="btn btn-primary btn-lg" style="margin-top:30px;width:100%;justify-content:center;">
          Donate Securely via Razorpay &#8594;
        </a>
        <p style="font-size:.8rem;color:var(--text-4);margin-top:12px;">
          &#10003; 80G Tax Exemption Available &nbsp;|&nbsp; &#10003; Registered NGO &nbsp;|&nbsp; &#10003; Annual Report Published
        </p>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
          <h3 style="margin-bottom:20px;font-size:.85rem;text-transform:uppercase;letter-spacing:1px;">What Donations Have Built</h3>
          <p style="opacity:.88;margin-bottom:12px;">&#127754; 90km Sakri River walk protecting water for 500,000+ people</p>
          <p style="opacity:.88;margin-bottom:12px;">&#128218; 150+ schools upgraded with smart classrooms</p>
          <p style="opacity:.88;margin-bottom:12px;">&#128105; 54+ SHGs empowering 216+ women entrepreneurs</p>
          <p style="opacity:.88;margin-bottom:12px;">&#127807; 200 farmers cultivating medicinal plants</p>
          <p style="opacity:.88;">&#128137; 300+ children receiving cardiac care</p>
        </div>
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;margin-top:20px;">
          <h4 style="margin-bottom:12px;">Banking Details</h4>
          <p style="font-size:.9rem;color:var(--text-3);">Account Name: Meer Foundation<br>Bank: State Bank of India<br>Branch: Dhamtari</p>
          <p style="font-size:.8rem;color:var(--text-4);margin-top:8px;">Contact us at info@meerfoundation.co.in for NEFT/RTGS details.</p>
        </div>
      </div>
    </div>
  </div>
</section>""")

# ── PARTNER ──
write_page('partner-with-us.html', 'CSR Partnerships', 'Corporate Partners', 'Partner With Meer Foundation',
    'Meer Foundation is your trusted CSR implementing agency in Chhattisgarh.',
    """<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <h2 style="font-family:var(--font-serif);margin-bottom:20px;">Why Choose Meer Foundation?</h2>
        <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">With 14+ years of on-ground experience across 10+ districts, Meer Foundation has established itself as Chhattisgarh's most reliable CSR implementation partner. We manage the entire lifecycle — from community consultation and project design to execution, monitoring, and audit-ready reporting.</p>
        <ul style="list-style:none;padding:0;">
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Full CSR compliance under Companies Act 2013, Section 135</li>
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; End-to-end implementation: design, execution, M&amp;E, audit</li>
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Access to 10+ district networks and 500+ villages</li>
          <li style="padding:12px 0;border-bottom:1px solid var(--border);color:var(--text-2);">&#10003; Penta-Alignment Framework for impact verification</li>
          <li style="padding:12px 0;color:var(--text-2);">&#10003; 80G / 12A registered, NGO Darpan listed</li>
        </ul>
        <a href="contact.html" class="btn btn-primary" style="margin-top:28px;">Discuss a Partnership</a>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-2xl);padding:40px;">
          <h3 style="margin-bottom:20px;font-family:var(--font-serif);">Sectors We Implement</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="background:#fff;padding:16px;border-radius:10px;border-left:4px solid #1e40af;">
              &#127979; <strong>Education</strong> — Smart Classrooms, Scholarships, Science Labs, Libraries
            </div>
            <div style="background:#fff;padding:16px;border-radius:10px;border-left:4px solid #1e40af;">
              &#127973; <strong>Healthcare</strong> — Mobile Units, Health Camps, Cardiac Surgeries
            </div>
            <div style="background:#fff;padding:16px;border-radius:10px;border-left:4px solid #1e40af;">
              &#127754; <strong>Environment</strong> — Bolti Nadi, Watershed, Tree Plantation, Water Conservation
            </div>
            <div style="background:#fff;padding:16px;border-radius:10px;border-left:4px solid #1e40af;">
              &#128105; <strong>Women Empowerment</strong> — SHGs, Livelihood Training, Micro-enterprise
            </div>
            <div style="background:#fff;padding:16px;border-radius:10px;border-left:4px solid #1e40af;">
              &#127807; <strong>Agriculture</strong> — Crop Diversification, Medicinal Plants, Makhana
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>""")

# ── CASE STUDIES ──
write_page('case-studies.html', 'Case Studies', 'Impact Assessment', 'Impact Case Studies',
    'Documented evidence of Meer Foundation field interventions across Chhattisgarh.',
    """<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <div style="background:var(--bg-2);padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);margin-bottom:24px;">
          <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:10px;">Case Study 01 — Environment</div>
          <h3 style="margin-bottom:12px;">Sakri River Rejuvenation, Kawardha–Bemetara</h3>
          <p style="color:var(--text-3);font-size:.9rem;line-height:1.7;margin-bottom:16px;">In 2019, Meer Foundation conducted a 90km on-foot scientific expedition along the Sakri River. Findings revealed critically low water levels, severe bank erosion, and borewells running dry at 1,000 feet. A comprehensive policy report was submitted to Kawardha and Bemetara district administrations.</p>
          <p style="font-weight:700;color:var(--text-2);font-size:.9rem;">Outcome:</p>
          <ul style="list-style:none;padding:0;font-size:.88rem;color:var(--text-3);">
            <li style="padding:6px 0;">&#10003; &#8377;2 crore sewage treatment plant sanctioned</li>
            <li style="padding:6px 0;">&#10003; Check dams and gabions at erosion sites</li>
            <li style="padding:6px 0;">&#10003; MGNREGA desilting across 59 villages</li>
            <li style="padding:6px 0;">&#10003; Film screened at 50+ international festivals</li>
          </ul>
        </div>
        <div style="background:var(--bg-2);padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);">
          <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:10px;">Case Study 02 — Livelihood</div>
          <h3 style="margin-bottom:12px;">Dhamtari Makhana Initiative</h3>
          <p style="color:var(--text-3);font-size:.9rem;line-height:1.7;margin-bottom:16px;">Meer Foundation identified the Nagri forest belt in Dhamtari as ideal for makhana cultivation. Women SHGs were trained and mobilised to lead cultivation, with a total of 100 acres identified for the programme.</p>
          <p style="font-weight:700;color:var(--text-2);font-size:.9rem;">Outcome:</p>
          <ul style="list-style:none;padding:0;font-size:.88rem;color:var(--text-3);">
            <li style="padding:6px 0;">&#10003; 25 acres active in Phase 1</li>
            <li style="padding:6px 0;">&#10003; Women SHGs as primary financial decision-makers</li>
            <li style="padding:6px 0;">&#10003; Market linkage for premium health food sector</li>
          </ul>
        </div>
      </div>
      <div class="reveal reveal-delay-1">
        <div style="background:var(--bg-2);padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);margin-bottom:24px;">
          <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:10px;">Case Study 03 — Education</div>
          <h3 style="margin-bottom:12px;">Smart Classroom Rollout, Balodabazar</h3>
          <p style="color:var(--text-3);font-size:.9rem;line-height:1.7;margin-bottom:16px;">As the implementing agency for CSR education mandates, Meer Foundation deployed smart classroom systems across 50+ government schools in Balodabazar district, directly transforming learning outcomes for thousands of children.</p>
          <p style="font-weight:700;color:var(--text-2);font-size:.9rem;">Outcome:</p>
          <ul style="list-style:none;padding:0;font-size:.88rem;color:var(--text-3);">
            <li style="padding:6px 0;">&#10003; Interactive boards in 50+ classrooms</li>
            <li style="padding:6px 0;">&#10003; Attendance rates improved by 34%</li>
            <li style="padding:6px 0;">&#10003; 2.11 lakh teachers across CG benefitted</li>
          </ul>
        </div>
        <div style="background:var(--bg-2);padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);">
          <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:10px;">Case Study 04 — Healthcare</div>
          <h3 style="margin-bottom:12px;">Cardiac Care Surgeries, Chhattisgarh</h3>
          <p style="color:var(--text-3);font-size:.9rem;line-height:1.7;margin-bottom:16px;">Meer Foundation implemented a cardiac surgery programme for children with Congenital Heart Defects (CHD) across Chhattisgarh under the SECL Ki Dhadkan initiative, ensuring no financial barrier prevents life-saving treatment.</p>
          <p style="font-weight:700;color:var(--text-2);font-size:.9rem;">Outcome:</p>
          <ul style="list-style:none;padding:0;font-size:.88rem;color:var(--text-3);">
            <li style="padding:6px 0;">&#10003; 60+ surgeries completed; 300 children targeted</li>
            <li style="padding:6px 0;">&#10003; 57 CHD cases identified in Balrampur alone</li>
            <li style="padding:6px 0;">&#10003; &#8377;4.71 crore project scope</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>""")

# ── ANNUAL REPORT ──
write_page('annual-report.html', 'Annual Report 2025–26', 'Accountability', 'Annual Report 2025–26',
    'Complete financial and programme performance data for Meer Foundation.',
    f"""<section class="section">
  <div class="container">
    <div class="grid-2">
      <div class="reveal">
        <div style="background:#fff;padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);box-shadow:var(--shadow-lg);">
          <div style="display:flex;align-items:center;gap:24px;margin-bottom:24px;">
            <div style="width:80px;height:100px;background:#1e40af;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.75rem;text-align:center;line-height:1.3;padding:8px;">ANNUAL<br>REPORT<br>2025–26</div>
            <div>
              <h3 style="margin-bottom:6px;">Meer Foundation Annual Report</h3>
              <p style="color:var(--text-4);font-size:.9rem;">Financial Year 2025–26</p>
            </div>
          </div>
          <p style="color:var(--text-2);font-size:.9rem;line-height:1.7;margin-bottom:24px;">This report covers our 10-district footprint, 400K+ lives impacted, sector-wise CSR implementation data, financial audit summary, and individual programme milestones for the financial year 2025–26.</p>
          <a href="#" class="btn btn-primary" style="width:100%;justify-content:center;">Download Annual Report (PDF)</a>
        </div>
        <div style="margin-top:24px;padding:24px;background:var(--bg-2);border-radius:var(--r-xl);border:1px solid var(--border);">
          <p style="color:var(--text-3);font-size:.88rem;text-align:center;">Previous annual reports are available on request.<br>Contact: info@meerfoundation.co.in</p>
        </div>
      </div>
      <div class="reveal reveal-delay-1">
        <h3 style="font-family:var(--font-serif);margin-bottom:24px;">Key Highlights 2025–26</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:2rem;font-weight:800;color:#1e40af;">400K+</div>
            <div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Lives Impacted</div>
          </div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:2rem;font-weight:800;color:#1e40af;">10+</div>
            <div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Districts Active</div>
          </div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:2rem;font-weight:800;color:#1e40af;">54+</div>
            <div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">SHGs Formed</div>
          </div>
          <div style="background:#fff;border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;">
            <div style="font-size:2rem;font-weight:800;color:#1e40af;">216+</div>
            <div style="font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-4);">Women Entrepreneurs</div>
          </div>
        </div>
        <div style="background:#1e40af;color:#fff;padding:30px;border-radius:var(--r-xl);">
          <h4 style="margin-bottom:12px;font-size:.85rem;text-transform:uppercase;letter-spacing:1px;">Transparency Commitment</h4>
          <p style="opacity:.88;font-size:.9rem;">Meer Foundation maintains 100% financial transparency with annual independent audits, NGO Darpan registration, and 80G/12A certification for donor tax benefits.</p>
        </div>
      </div>
    </div>
  </div>
</section>""")

# ── PROJECT GALLERY ──
write_page('project-gallery.html', 'Project Gallery', 'Visual Documentation', 'Project Gallery',
    'Visual documentation of Meer Foundation field work across Chhattisgarh.',
    """<section class="section">
  <div class="container">
    <p style="text-align:center;color:var(--text-3);margin-bottom:40px;">Our gallery showcases real impact moments from the field — river walks, classroom upgrades, health camps, SHG meetings, and community celebrations.</p>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;" class="reveal">
      <div style="height:220px;background:linear-gradient(135deg,#1e40af,#3b82f6);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Bolti Nadi — Sakri River Walk</div>
      <div style="height:220px;background:linear-gradient(135deg,#059669,#10b981);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Prayaas — Smart Classrooms</div>
      <div style="height:220px;background:linear-gradient(135deg,#7c3aed,#a78bfa);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Farmours — Makhana Fields</div>
      <div style="height:220px;background:linear-gradient(135deg,#b45309,#f59e0b);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Women SHG Training Sessions</div>
      <div style="height:220px;background:linear-gradient(135deg,#be185d,#f472b6);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Yoga Kutumb — Community Wellness</div>
      <div style="height:220px;background:linear-gradient(135deg,#0f766e,#2dd4bf);border-radius:var(--r-xl);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Medicinal Plant Cultivation</div>
    </div>
    <p style="text-align:center;color:var(--text-4);font-size:.88rem;margin-top:24px;">For high-resolution images and documentation requests, contact media@meerfoundation.co.in</p>
  </div>
</section>""")

print("\nAll batch 3 pages built successfully.")
