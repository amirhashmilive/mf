/* ============================================================
   MEER FOUNDATION — components.js
   Injects header + footer into all pages.
   ============================================================ */
(function () {
  'use strict';

  const DONATE = 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view';

  /* ────────────────────────────────────────────────────────────
     HEADER
  ──────────────────────────────────────────────────────────── */
  const HEADER = `
<header class="site-header" id="site-header" role="banner">
  <div class="container header-inner">
    <a href="index.html" class="brand" aria-label="Meer Foundation Home">
      <img src="assets/images/logo/logo-horizontal.png" alt="Meer Foundation" style="height: 50px; width: auto;">
    </a>

    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <div class="nav-item dropdown">
        <a href="about.html" class="nav-link">About</a>
        <div class="dropdown-content">
          <a href="about.html">Our Story & Founder</a>
          <a href="annual-report.html">Annual Reports</a>
          <a href="five-pillars.html">Five Pillars Model</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="initiatives.html" class="nav-link">Initiatives</a>
        <div class="dropdown-content">
          <a href="bolti-nadi.html">Bolti Nadi</a>
          <a href="farmours.html">Farmours</a>
          <a href="prayaas.html">Prayaas</a>
          <a href="yoga-kutumb.html">Yoga Kutumb</a>
          <a href="social-heritage-walk.html">Social Heritage Walk</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Research</a>
        <div class="dropdown-content">
          <a href="rivers.html">Rivers of Chhattisgarh</a>
          <a href="edusuto-courses.html">EduSuTo Courses</a>
          <a href="ijmeer-journal.html">IJMEER Journal</a>
          <a href="publications.html">Publications</a>
          <a href="csr-research.html">CSR Research</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Emerging</a>
        <div class="dropdown-content">
          <a href="community-radio.html">Community Radio</a>
          <a href="guriya-magazine.html">Guriya Magazine</a>
          <a href="media-gallery.html">Media Gallery</a>
          <a href="news.html">News & Press</a>
          <a href="blog.html">Field Notes Blog</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="impact.html" class="nav-link">Impact</a>
        <div class="dropdown-content">
          <a href="impact.html">Statistics</a>
          <a href="case-studies.html">Case Studies</a>
          <a href="district-profiles.html">District Profiles</a>
          <a href="project-gallery.html">Project Gallery</a>
          <a href="testimonials.html">Testimonials</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Get Involved</a>
        <div class="dropdown-content">
          <a href="volunteer.html">Volunteer</a>
          <a href="partner-with-us.html">CSR Partner</a>
          <a href="internship.html">Internship</a>
          <a href="donate.html">Donate</a>
        </div>
      </div>
      <div class="nav-item"><a href="contact.html" class="nav-link">Contact</a></div>
    </nav>

    <div class="header-actions">
      <a href="${DONATE}" class="btn-submit desktop-only" target="_blank" rel="noopener" id="nav-donate-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Donate
      </a>
      <button class="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <div class="overlay"></div>

  <nav class="mobile-nav">
    <button class="close-menu" aria-label="Close menu">&times;</button>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="initiatives.html">All Initiatives</a></li>
      <li><a href="bolti-nadi.html">Bolti Nadi</a></li>
      <li><a href="farmours.html">Farmours</a></li>
      <li><a href="prayaas.html">Prayaas</a></li>
      <li><a href="yoga-kutumb.html">Yoga Kutumb</a></li>
      <li><a href="social-heritage-walk.html">Heritage Walk</a></li>
      <li><a href="five-pillars.html">Five Pillars</a></li>
      <li><a href="rivers.html">Rivers of CG</a></li>
      <li><a href="ijmeer-journal.html">IJMEER Journal</a></li>
      <li><a href="edusuto-courses.html">EduSuTo</a></li>
      <li><a href="community-radio.html">Community Radio</a></li>
      <li><a href="guriya-magazine.html">Guriya Magazine</a></li>
      <li><a href="impact.html">Impact</a></li>
      <li><a href="case-studies.html">Case Studies</a></li>
      <li><a href="district-profiles.html">District Profiles</a></li>
      <li><a href="testimonials.html">Testimonials</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="csr-research.html">CSR Research</a></li>
      <li><a href="publications.html">Publications</a></li>
      <li><a href="volunteer.html">Volunteer</a></li>
      <li><a href="partner-with-us.html">Partner With Us</a></li>
      <li><a href="internship.html">Internship</a></li>
      <li><a href="donate.html">Donate</a></li>
      <li><a href="annual-report.html">Annual Report</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li style="margin-top: 30px;"><a href="${DONATE}" class="submit-btn" target="_blank" rel="noopener">Donate Now</a></li>
    </ul>
  </nav>
</header>`;

  /* ────────────────────────────────────────────────────────────
     FOOTER
  ──────────────────────────────────────────────────────────── */
  const FOOTER = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand column -->
      <div class="footer-brand">
        <a href="index.html" class="brand" style="margin-bottom:16px;" aria-label="Meer Foundation Home">
          <img src="assets/images/logo/logo-1x1.png" alt="Meer Foundation" style="height: 60px; width: auto; margin-bottom: 10px;">
          <div class="brand-text">
            <span class="brand-name">Meer Foundation</span>
            <span class="brand-sub">Empowering Communities</span>
          </div>
        </a>
        <p class="footer-desc">A non-profit organization dedicated to sustainable community development, river conservation, and rural empowerment across Chhattisgarh.</p>
        <div style="margin-top:20px;">
          <div style="font-size:0.82rem;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">
            Registered Address
          </div>
          <div style="font-size:0.82rem;color:rgba(255,255,255,0.7);line-height:1.7;">
            Sr. MIG 103, Housing Board Colony, Hatkeshar, Dhamtari – 493773, Chhattisgarh, India
          </div>
        </div>
      </div>

      <!-- Quick Links column -->
      <div>
        <h3 class="footer-head">Explore</h3>
        <nav class="footer-links">
          <a href="about.html">Our Story</a>
          <a href="five-pillars.html">Penta Model</a>
          <a href="impact.html">Impact Data</a>
          <a href="testimonials.html">Beneficiaries</a>
          <a href="annual-report.html">Annual Reports</a>
          <a href="rivers.html">Chhattisgarh Rivers</a>
        </nav>
      </div>

      <!-- Initiatives column -->
      <div>
        <h3 class="footer-head">Initiatives</h3>
        <nav class="footer-links">
          <a href="bolti-nadi.html">Bolti Nadi</a>
          <a href="prayaas.html">Prayaas</a>
          <a href="yoga-kutumb.html">Yoga Kutumb</a>
          <a href="guriya-magazine.html">Guriya Magazine</a>
          <a href="community-radio.html">Radio Meer</a>
          <a href="edusuto-courses.html">EduSuTo</a>
        </nav>
      </div>

      <!-- Connect column -->
      <div>
        <h3 class="footer-head">Connect</h3>
        <nav class="footer-links">
          <a href="contact.html">Contact Us</a>
          <a href="volunteer.html">Volunteer</a>
          <a href="partner-with-us.html">CSR Partner</a>
          <a href="donate.html">Donate</a>
          <a href="news.html">News & Blog</a>
          <a href="mailto:info@meerfoundation.co.in">Email Us</a>
        </nav>
        <div class="social-links" style="margin-top:24px;">
          <a href="https://facebook.com/meerfoundation" class="social-link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://instagram.com/meerfoundations" class="social-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://x.com/meerfoundations" class="social-link"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span data-year></span> Meer Foundation. Registered under Chhattisgarh Society Registration Act 1973.</p>
    </div>
  </div>
</footer>
<div id="toast-container" class="toast-container"></div>
<button id="scroll-top" aria-label="Scroll to top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg></button>`;

  function inject(id, html, position = 'before') {
    const placeholder = document.getElementById(id);
    if (!placeholder) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const parent = placeholder.parentNode;
    while (tmp.firstChild) {
      if (position === 'before') parent.insertBefore(tmp.firstChild, placeholder);
      else parent.insertBefore(tmp.firstChild, placeholder.nextSibling);
    }
    placeholder.remove();
  }

  inject('site-header-inject', HEADER);
  inject('site-footer-inject', FOOTER);
  document.dispatchEvent(new CustomEvent('headerInjected'));
})();
