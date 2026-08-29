import re

IMPACT_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Impact | Meer Foundation Statistics and Data</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .impact-header { background: var(--bg-2); padding: 140px 0 60px; border-bottom: 1px solid var(--border); }
    .data-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 40px; }
    .data-card { background: #fff; padding: 40px; border-radius: var(--r-xl); border: 1px solid var(--border); transition: var(--t); }
    .progress-wrap { margin-top: 30px; }
    .progress-bar-bg { height: 10px; background: var(--bg-2); border-radius: 5px; overflow: hidden; margin-top: 10px; }
    .progress-bar-fill { height: 100%; background: var(--grad-brand); border-radius: 5px; transition: width 1.5s ease-in-out; }
    .stat-large { font-family: var(--font-serif); font-size: 3.5rem; font-weight: 800; color: #1e40af; line-height: 1.1; margin-bottom: 10px;}
    .stat-label-large { font-size: 1.1rem; color: var(--text-3); font-weight: 600; text-transform: uppercase;}
  </style>
</head>
<body>

<div id="progress-bar"></div>
<div id="site-header-inject"></div>

<section class="impact-header">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Measurable Change</div>
      <h1 class="section-title">Our Impact in Chhattisgarh</h1>
      <p class="section-subtitle">A data-driven look at our work across education, water conservation, healthcare, and livelihood since 2011. As the trusted implementing agency for major CSR partners (including HDFC Bank, GMR, Bhilai Steel Plant, NMDC, and SECL), we have executed high-impact projects reaching the state's most vulnerable populations.</p>
    </div>

    <div class="grid-4" style="margin-top: 50px;">
      <div class="stat-card reveal">
        <div class="stat-num">400K+</div>
        <div class="stat-label">Lives Impacted</div>
      </div>
      <div class="stat-card reveal reveal-delay-1">
        <div class="stat-num">10+</div>
        <div class="stat-label">Districts Covered</div>
      </div>
      <div class="stat-card reveal reveal-delay-2">
        <div class="stat-num">₹170Cr+</div>
        <div class="stat-label">CSR Funds Executed</div>
      </div>
      <div class="stat-card reveal reveal-delay-3">
        <div class="stat-num">14+</div>
        <div class="stat-label">Years of Service</div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid-2">
      <!-- Sectoral Spend -->
      <div class="reveal">
        <h2 style="font-family: var(--font-serif); margin-bottom: 25px;">Sector-Wise CSR Execution</h2>
        <p style="color: var(--text-2); margin-bottom: 30px;">Distribution of CSR funds and project focus executed by Meer Foundation across key developmental sectors in Chhattisgarh.</p>
        
        <div class="progress-wrap">
          <div style="display: flex; justify-content: space-between; font-weight: 700;"><span>Education & Skill Development</span><span>36%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 36%;"></div></div>
        </div>
        <div class="progress-wrap">
          <div style="display: flex; justify-content: space-between; font-weight: 700;"><span>Healthcare & Sanitation</span><span>25%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 25%;"></div></div>
        </div>
        <div class="progress-wrap">
          <div style="display: flex; justify-content: space-between; font-weight: 700;"><span>Environment & Water (Bolti Nadi)</span><span>22%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 22%;"></div></div>
        </div>
        <div class="progress-wrap">
          <div style="display: flex; justify-content: space-between; font-weight: 700;"><span>Livelihood & Women Empowerment</span><span>17%</span></div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width: 17%;"></div></div>
        </div>
      </div>

      <!-- Key Numbers -->
      <div class="reveal reveal-delay-1">
        <div style="background: var(--bg-2); padding: 40px; border-radius: var(--r-2xl); border: 1px solid var(--border);">
          <h3 style="margin-bottom: 25px;">On-Ground Deliverables</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">500+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Villages Reached</span>
            </div>
            <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">150+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Schools Upgraded</span>
            </div>
            <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">35+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Health Centers Built</span>
            </div>
            <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">20+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Rivers Documented</span>
            </div>
             <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">50K+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Trees Planted</span>
            </div>
             <div style="background:#fff; padding: 20px; border-radius: 12px; border-left: 4px solid #1e40af;">
              <strong style="font-size:1.5rem; color:#1e40af;">12K+</strong><br><span style="font-size: 0.85rem; color: var(--text-4);">Youth Trained (EduSuTo)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background: var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Geographic Reach</div>
      <h2 class="section-title">Districts of Operation</h2>
      <p class="section-subtitle">We implement CSR and developmental projects across the most crucial districts of Chhattisgarh.</p>
    </div>
    <div class="grid-5" style="margin-top: 40px;">
      <div class="feature-card reveal" style="text-align: center;">Dhamtari</div>
      <div class="feature-card reveal" style="text-align: center;">Raipur</div>
      <div class="feature-card reveal" style="text-align: center;">Bastar</div>
      <div class="feature-card reveal" style="text-align: center;">Baloda Bazar</div>
      <div class="feature-card reveal" style="text-align: center;">Kawardha</div>
      <div class="feature-card reveal" style="text-align: center;">Balod</div>
      <div class="feature-card reveal" style="text-align: center;">Bemetara</div>
      <div class="feature-card reveal" style="text-align: center;">Kanker</div>
      <div class="feature-card reveal" style="text-align: center;">Surguja</div>
      <div class="feature-card reveal" style="text-align: center;">Raigarh</div>
    </div>
  </div>
</section>

<div id="site-footer-inject"></div>

<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

with open("impact.html", "w", encoding="utf-8") as f:
    f.write(IMPACT_HTML)


TESTIMONIALS_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beneficiary Stories | Meer Foundation</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .testimonial-card { background: #fff; padding: 40px; border-radius: var(--r-2xl); border: 1px solid var(--border); box-shadow: var(--shadow-md); position: relative; }
    .quote-icon { position: absolute; top: 30px; right: 30px; width: 40px; height: 40px; opacity: 0.1; }
    .testimonial-text { font-size: 1.1rem; line-height: 1.8; color: var(--text-2); font-style: italic; margin-bottom: 25px; }
    .testimonial-author { display: flex; align-items: center; gap: 15px; }
    .author-avatar { width: 50px; height: 50px; background: var(--bg-2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #1e40af; }
    .category-tag { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #fff; background: #1e40af; padding: 4px 10px; border-radius: 12px; position: absolute; top: -12px; left: 40px; }
  </style>
</head>
<body>

<div id="progress-bar"></div>
<div id="site-header-inject"></div>

<section class="section" style="padding-top: 140px; background: var(--bg-2);">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">Voices from the Ground</div>
      <h1 class="section-title">Beneficiary Stories</h1>
      <p class="section-subtitle">Real experiences from the communities we serve across Chhattisgarh. Our CSR implementations have directly transformed the lives of farmers, women, youth, and patients.</p>
    </div>

    <div class="grid-2" style="margin-top: 60px;">
      
      <!-- Testimonial 1 - Education -->
      <div class="testimonial-card reveal">
        <div class="category-tag">Education (Prayaas)</div>
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
        <p class="testimonial-text">"Since Meer Foundation upgraded our school with smart classes, the lessons are explained so well. The interactive screens make learning fun. Earlier, we didn't feel like studying as much, but now we don't want to miss a single day."</p>
        <div class="testimonial-author">
          <div class="author-avatar">S</div>
          <div>
            <div style="font-weight: 700;">Suman</div>
            <div style="font-size: 0.85rem; color: var(--text-4);">Student, Balodabazar</div>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 - Health -->
      <div class="testimonial-card reveal reveal-delay-1">
        <div class="category-tag">Healthcare & Wellness</div>
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
        <p class="testimonial-text">"When the mobile health units managed by Meer Foundation started visiting our village, everything changed. Previously, we had to travel 20km for basic checkups. The health camps saved my father's life by diagnosing his condition early."</p>
        <div class="testimonial-author">
          <div class="author-avatar">R</div>
          <div>
            <div style="font-weight: 700;">Rajesh</div>
            <div style="font-size: 0.85rem; color: var(--text-4);">Resident, Raigarh District</div>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 - Women Empowerment -->
      <div class="testimonial-card reveal">
        <div class="category-tag">Women Empowerment</div>
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
        <p class="testimonial-text">"Meer Foundation helped us form a Self-Help Group (SHG) and provided training. We created a green pit for organic compost. Today, 15 women from our village are financially independent, running our own small enterprise."</p>
        <div class="testimonial-author">
          <div class="author-avatar">L</div>
          <div>
            <div style="font-weight: 700;">Laxmi</div>
            <div style="font-size: 0.85rem; color: var(--text-4);">SHG Member, Dhamtari</div>
          </div>
        </div>
      </div>

      <!-- Testimonial 4 - Environment (Bolti Nadi) -->
      <div class="testimonial-card reveal reveal-delay-1">
        <div class="category-tag">Environment (Bolti Nadi)</div>
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
        <p class="testimonial-text">"When the Bolti Nadi expedition reached our village along the Sakri River, it opened our eyes. The check dams built through the foundation's intervention have ensured our wells don't run dry during the summer anymore."</p>
        <div class="testimonial-author">
          <div class="author-avatar">M</div>
          <div>
            <div style="font-weight: 700;">Manish</div>
            <div style="font-size: 0.85rem; color: var(--text-4);">Farmer, Kawardha District</div>
          </div>
        </div>
      </div>
      
      <!-- Testimonial 5 - Livelihood -->
      <div class="testimonial-card reveal">
        <div class="category-tag">Agricultural Livelihood</div>
        <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z"/></svg>
        <p class="testimonial-text">"Through the Farmours initiative, we received training on medicinal plant cultivation. Instead of relying solely on traditional crops, my income has doubled by growing Tulsi and Brahmi, and selling them to verified buyers."</p>
        <div class="testimonial-author">
          <div class="author-avatar">P</div>
          <div>
            <div style="font-weight: 700;">Prakash</div>
            <div style="font-size: 0.85rem; color: var(--text-4);">Farmer, Kanker District</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

<div id="site-footer-inject"></div>

<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

with open("testimonials.html", "w", encoding="utf-8") as f:
    f.write(TESTIMONIALS_HTML)

print("Updated impact.html and testimonials.html with requested statistics and categorized quotes.")
