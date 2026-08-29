import os
os.chdir(r'C:\Users\hashm\Desktop\Workplace Meer Foundation')

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
<section style="padding:140px 0 60px;background:var(--bg-2);">
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

# ── LEGAL PAGES ──
write_page('12a-80g.html','Tax Exemption Certificates','Legal Compliance','12A & 80G Certificates',
    'Meer Foundation holds valid 12A and 80G registrations, making all donations tax-deductible.',
    """<section class="section"><div class="container"><div class="grid-2"><div class="reveal">
    <h2 style="font-family:var(--font-serif);margin-bottom:20px;">What These Certificates Mean</h2>
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="background:var(--bg-2);padding:24px;border-radius:var(--r-xl);border-left:4px solid #1e40af;">
        <h4 style="color:#1e40af;margin-bottom:8px;">Section 12A — Income Tax Exemption</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Meer Foundation is registered under Section 12A of the Income Tax Act, 1961. This means all income earned by the Foundation for charitable purposes is exempt from income tax, ensuring more resources go directly to our beneficiaries.</p>
      </div>
      <div style="background:var(--bg-2);padding:24px;border-radius:var(--r-xl);border-left:4px solid #10b981;">
        <h4 style="color:#10b981;margin-bottom:8px;">Section 80G — Donor Tax Deduction</h4>
        <p style="font-size:.9rem;color:var(--text-3);">Donations made to Meer Foundation are eligible for a 50% deduction under Section 80G of the Income Tax Act. Donors will receive an official receipt and Form 10BE for claiming deductions in their income tax returns.</p>
      </div>
    </div>
    </div>
    <div class="reveal reveal-delay-1">
      <div style="background:#1e40af;color:#fff;padding:40px;border-radius:var(--r-2xl);">
        <h3 style="margin-bottom:16px;font-size:.85rem;text-transform:uppercase;letter-spacing:1px;">Registration Details</h3>
        <p style="opacity:.88;margin-bottom:12px;font-size:.9rem;">Registered: Chhattisgarh Society Registration Act, 1973</p>
        <p style="opacity:.88;margin-bottom:12px;font-size:.9rem;">FCRA: Status available on request</p>
        <p style="opacity:.88;margin-bottom:12px;font-size:.9rem;">NGO Darpan: Registered participant</p>
        <p style="opacity:.88;font-size:.9rem;">Address: Sr. MIG 103, Housing Board, Hatkeshar, Dhamtari, CG 493773</p>
      </div>
      <div style="margin-top:20px;padding:24px;background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);">
        <p style="font-size:.88rem;color:var(--text-3);text-align:center;">For certificate copies and formal documentation, write to<br><a href="mailto:info@meerfoundation.co.in" style="color:#1e40af;font-weight:700;">info@meerfoundation.co.in</a></p>
      </div>
    </div></div></div></section>""")

write_page('fcra.html','FCRA Details','International Compliance','Foreign Contribution Regulation Act',
    'Information on Meer Foundation FCRA registration for international donors.',
    """<section class="section"><div class="container"><div style="max-width:800px;margin:0 auto;" class="reveal">
    <div style="background:var(--bg-2);padding:40px;border-radius:var(--r-2xl);border:1px solid var(--border);margin-bottom:30px;">
      <h2 style="font-family:var(--font-serif);margin-bottom:20px;">FCRA Registration Status</h2>
      <p style="color:var(--text-2);line-height:1.8;margin-bottom:20px;">The Foreign Contribution (Regulation) Act (FCRA), 2010 governs the acceptance and utilisation of foreign contributions by NGOs in India. Meer Foundation is committed to full compliance with FCRA provisions.</p>
      <p style="color:var(--text-2);line-height:1.8;">For current FCRA registration status and bank account details for international donations, please contact us directly. All foreign contributions are used exclusively for charitable purposes as defined under our registration.</p>
    </div>
    <div style="background:#1e40af;color:#fff;padding:30px;border-radius:var(--r-xl);">
      <h3 style="margin-bottom:12px;font-size:.85rem;text-transform:uppercase;">Contact for International Donations</h3>
      <p style="opacity:.88;font-size:.9rem;">Email: info@meerfoundation.co.in | Phone: +91 98261-21177</p>
    </div>
    </div></div></section>""")

write_page('terms.html','Terms and Conditions','Legal','Terms and Conditions',
    'Terms governing use of the Meer Foundation website and participation in our programmes.',
    """<section class="section"><div class="container"><div style="max-width:800px;margin:0 auto;color:var(--text-2);line-height:1.8;" class="reveal">
    <p>Last Updated: April 2026</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">1. Acceptance of Terms</h3>
    <p>By accessing the Meer Foundation website, you agree to be bound by these terms. If you do not agree, please do not use our website.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">2. Use of Content</h3>
    <p>All content on this website is the intellectual property of Meer Foundation. You may not reproduce or redistribute content without prior written permission.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">3. Donations</h3>
    <p>All donations are processed securely via Razorpay. By donating, you confirm that the funds are from a legitimate source. Meer Foundation issues official receipts for all donations.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">4. Disclaimer</h3>
    <p>The information on this website is provided in good faith and for general informational purposes only. Meer Foundation makes no warranties about the completeness or accuracy of this information.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">5. Contact</h3>
    <p>For questions about these terms, contact us at info@meerfoundation.co.in</p>
    </div></div></section>""")

write_page('refund-cancellation.html','Refund and Cancellation Policy','Legal','Refund & Cancellation Policy',
    'Policy for donation refunds and cancellation of recurring contributions.',
    """<section class="section"><div class="container"><div style="max-width:800px;margin:0 auto;color:var(--text-2);line-height:1.8;" class="reveal">
    <p>Last Updated: April 2026</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">Donation Refund Policy</h3>
    <p>Meer Foundation values your contribution and commitment to our mission. In the event of an erroneous or duplicate transaction, you may request a refund within 7 days of the transaction date by emailing info@meerfoundation.co.in with your transaction ID and reason.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">Cancellation of Recurring Donations</h3>
    <p>If you have set up a recurring donation, you may cancel it at any time by contacting us at info@meerfoundation.co.in or by managing your subscription through your Razorpay account. Cancellations are effective immediately and no further charges will be made.</p>
    <h3 style="color:#1e40af;margin:24px 0 12px;">Processing Time</h3>
    <p>Approved refunds will be credited back to the original payment method within 7–10 working days.</p>
    </div></div></section>""")

# ── MEDIA/NEWS PAGES ──
write_page('news.html','News and Press','Media Updates','News & Press Coverage',
    'Latest news, press releases, and milestones from Meer Foundation.',
    """<section class="section"><div class="container"><div class="grid-3" class="reveal">
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);overflow:hidden;transition:var(--t);">
      <div style="background:linear-gradient(135deg,#1e40af,#3b82f6);height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Bolti Nadi Documentary</div>
      <div style="padding:24px;"><div style="font-size:.75rem;color:var(--text-4);margin-bottom:8px;">2021 | Environment</div><h4 style="margin-bottom:10px;">Sakri River Documentary Screened at 50+ International Film Festivals</h4><p style="font-size:.88rem;color:var(--text-3);">The Bolti Nadi documentary, following the historic 90km Sakri River Walk, was selected and screened at film festivals across 50+ countries.</p></div>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);overflow:hidden;">
      <div style="background:linear-gradient(135deg,#059669,#10b981);height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">Tiranga World Record</div>
      <div style="padding:24px;"><div style="font-size:.75rem;color:var(--text-4);margin-bottom:8px;">August 11, 2019 | National Unity</div><h4 style="margin-bottom:10px;">Meer Foundation Co-Creates 15km Tricolor World Record in Raipur</h4><p style="font-size:.88rem;color:var(--text-3);">As a core partner, Meer Foundation helped achieve a historic 15km tricolor human chain in Raipur on Independence Day.</p></div>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);overflow:hidden;">
      <div style="background:linear-gradient(135deg,#7c3aed,#a78bfa);height:120px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">IJMEER Launch 2026</div>
      <div style="padding:24px;"><div style="font-size:.75rem;color:var(--text-4);margin-bottom:8px;">2026 | Research</div><h4 style="margin-bottom:10px;">IJMEER Journal Launched — Open Access Research from Dhamtari</h4><p style="font-size:.88rem;color:var(--text-3);">Meer Foundation launches its international peer-reviewed journal covering 70+ disciplines with a double-blind review process.</p></div>
    </div>
    </div></div></section>""")

write_page('media-gallery.html','Media Gallery','Multimedia','Videos and Media',
    'Documentaries, short films, and media features from Meer Foundation.',
    """<section class="section"><div class="container" class="reveal">
    <div style="background:linear-gradient(135deg,#1e40af,#3b82f6);border-radius:var(--r-2xl);padding:60px;text-align:center;color:#fff;margin-bottom:40px;">
      <div style="font-size:3rem;margin-bottom:16px;">&#127909;</div>
      <h2 style="margin-bottom:12px;">Bolti Nadi: The Documentary</h2>
      <p style="opacity:.88;max-width:600px;margin:0 auto 24px;">The award-winning documentary following the 90km Sakri River Walk — screened at international film festivals in 50+ countries.</p>
      <a href="https://www.youtube.com/@meerfoundations" target="_blank" class="btn" style="background:#fff;color:#1e40af;">Watch on YouTube</a>
    </div>
    <div class="grid-3">
      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;text-align:center;">
        <div style="font-size:2rem;margin-bottom:12px;">&#127897;</div>
        <h4 style="margin-bottom:8px;">Radio Meer Pilot Broadcast</h4>
        <p style="font-size:.85rem;color:var(--text-3);">Community radio pilot recordings showcasing rural Chhattisgarhi voices and stories.</p>
      </div>
      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;text-align:center;">
        <div style="font-size:2rem;margin-bottom:12px;">&#127807;</div>
        <h4 style="margin-bottom:8px;">FARMOURS Field Footage</h4>
        <p style="font-size:.85rem;color:var(--text-3);">Time-lapse and field documentation from the Makhana initiative in Dhamtari.</p>
      </div>
      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:var(--r-xl);padding:24px;text-align:center;">
        <div style="font-size:2rem;margin-bottom:12px;">&#128218;</div>
        <h4 style="margin-bottom:8px;">Prayaas Classroom Journeys</h4>
        <p style="font-size:.85rem;color:var(--text-3);">Before-and-after documentation of school transformations across Balodabazar.</p>
      </div>
    </div>
    </div></section>""")

write_page('blog.html','Blog — Field Notes','Insights','Field Notes & Insights',
    'Stories, articles, and research perspectives from Meer Foundation team and community.',
    """<section class="section"><div class="container"><div class="grid-3" class="reveal">
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:30px;">
      <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:12px;">Founder's Note</div>
      <h4 style="margin-bottom:12px;">Why Rivers Are Our Priority</h4>
      <p style="font-size:.88rem;color:var(--text-3);line-height:1.7;margin-bottom:16px;">Amir Hashmi reflects on the 2019 Sakri River Walk and why water stewardship is inseparable from community development in Chhattisgarh...</p>
      <a href="#" style="color:#1e40af;font-weight:700;font-size:.85rem;">Read More</a>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:30px;">
      <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:12px;">Research Insights</div>
      <h4 style="margin-bottom:12px;">The Penta-Alignment Model in Practice</h4>
      <p style="font-size:.88rem;color:var(--text-3);line-height:1.7;margin-bottom:16px;">How the five pillars of Corporate Identity, Implementation Architecture, Portfolio, Verification, and Communication created measurable impact...</p>
      <a href="five-pillars.html" style="color:#1e40af;font-weight:700;font-size:.85rem;">Read More</a>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:var(--r-xl);padding:30px;">
      <div style="font-size:.75rem;font-weight:800;color:#1e40af;text-transform:uppercase;margin-bottom:12px;">Community Story</div>
      <h4 style="margin-bottom:12px;">How Makhana Changed Lives in Nagri Forest</h4>
      <p style="font-size:.88rem;color:var(--text-3);line-height:1.7;margin-bottom:16px;">The story of 15 women who turned an underutilised forest pond in Dhamtari into a thriving makhana enterprise under the FARMOURS model...</p>
      <a href="farmours.html" style="color:#1e40af;font-weight:700;font-size:.85rem;">Read More</a>
    </div>
    </div></div></section>""")

write_page('publications.html','Publications — Research','Research Repository','Our Publications',
    'Research papers, field reports, and policy briefs by Meer Foundation and its researchers.',
    """<section class="section"><div class="container" class="reveal">
    <div style="display:flex;flex-direction:column;gap:20px;max-width:900px;margin:0 auto;">
      <div style="background:#fff;padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);display:flex;gap:20px;align-items:flex-start;">
        <div style="min-width:60px;height:80px;background:#1e40af;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.7rem;text-align:center;">IJMEER<br>2026</div>
        <div>
          <h4 style="margin-bottom:6px;">The Penta-Alignment Theory of CSR Effectiveness: A Theory-Model-Framework Triad</h4>
          <p style="font-size:.85rem;color:#1e40af;margin-bottom:8px;">Amir Hashmi — IJMEER Journal, 2026 | Peer-Reviewed</p>
          <p style="font-size:.88rem;color:var(--text-3);">A unified theoretical framework for analysing CSR effectiveness across five organisational pillars, with a composite CSR Effectiveness Index (CEI).</p>
        </div>
      </div>
      <div style="background:#fff;padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);display:flex;gap:20px;align-items:flex-start;">
        <div style="min-width:60px;height:80px;background:#059669;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.7rem;text-align:center;">FIELD<br>REPORT</div>
        <div>
          <h4 style="margin-bottom:6px;">Sakri River: Hydrological Assessment and Policy Recommendations</h4>
          <p style="font-size:.85rem;color:#1e40af;margin-bottom:8px;">Meer Foundation Research Team — 2019 | Submitted to District Administrations</p>
          <p style="font-size:.88rem;color:var(--text-3);">Comprehensive 90km field study combining water quality sampling, ecological documentation, and community consultation along the full course of the Sakri River.</p>
        </div>
      </div>
      <div style="background:#fff;padding:30px;border-radius:var(--r-xl);border:1px solid var(--border);display:flex;gap:20px;align-items:flex-start;">
        <div style="min-width:60px;height:80px;background:#7c3aed;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.7rem;text-align:center;">IJMEER<br>2026</div>
        <div>
          <h4 style="margin-bottom:6px;">Indigenous Farming Systems (FARMOURS): A Scalable Model for Rural Transformation in Chhattisgarh</h4>
          <p style="font-size:.85rem;color:#1e40af;margin-bottom:8px;">Amir Hashmi — IJMEER Journal, 2026 | Case Study</p>
          <p style="font-size:.88rem;color:var(--text-3);">Academic documentation of the FARMOURS model including district-wise impact data, women-led SHG outcomes, and ecological farming analysis from Dhamtari.</p>
        </div>
      </div>
    </div>
    </div></section>""")

print("\nAll batch 4 pages built successfully.")
