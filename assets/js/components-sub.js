/* ============================================================
   MEER FOUNDATION — components-sub.js
   Injects header + footer into nested directory pages.
   Uses root-relative paths so assets resolve from any depth.
   ============================================================ */
(function () {
  'use strict';

  const DONATE = 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view';

  /* ────────────────────────────────────────────────────────────
     HEADER — root-relative paths, updated nav for new structure
  ──────────────────────────────────────────────────────────── */
  const HEADER = `
<header class="site-header" id="site-header" role="banner">
  <div class="container header-inner">
    <a href="/" class="brand" aria-label="Meer Foundation Home">
      <img src="/assets/images/logo/logo-horizontal.webp" alt="Meer Foundation" style="height: 50px; width: auto;">
    </a>

    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <div class="nav-item dropdown">
        <a href="/about/" class="nav-link">About</a>
        <div class="dropdown-content">
          <a href="/about/our-story/">Our Story &amp; Founder</a>
          <a href="/about/annual-reports/">Annual Reports</a>
          <a href="/about/five-pillars/">Five Pillars Model</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="/initiatives/" class="nav-link">Initiatives</a>
        <div class="dropdown-content">
          <a href="/initiatives/education/">Education</a>
          <a href="/initiatives/health/">Health</a>
          <a href="/initiatives/environment/">Environment</a>
          <a href="/initiatives/livelihood/">Livelihood</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="/research/" class="nav-link">Research</a>
        <div class="dropdown-content">
          <a href="/research/rivers-chhattisgarh/">Rivers of Chhattisgarh</a>
          <a href="/research/ijmeer/">IJMEER Journal</a>
          <a href="/research/publications/">Publications</a>
          <a href="/research/csr-research/">CSR Research</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="/emerging/" class="nav-link">Emerging</a>
        <div class="dropdown-content">
          <a href="/emerging/community-radio/">Community Radio</a>
          <a href="/emerging/media-gallery/">Media Gallery</a>
          <a href="/emerging/news-press/">News &amp; Press</a>
          <a href="/emerging/field-notes/">Field Notes Blog</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="/impact/" class="nav-link">Impact</a>
        <div class="dropdown-content">
          <a href="/impact/statistics/">Statistics</a>
          <a href="/impact/case-studies/">Case Studies</a>
          <a href="/impact/district-profiles/">District Profiles</a>
          <a href="/impact/project-gallery/">Project Gallery</a>
          <a href="/impact/testimonials/">Testimonials</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="/get-involved/" class="nav-link">Get Involved</a>
        <div class="dropdown-content">
          <a href="/get-involved/volunteer/">Volunteer</a>
          <a href="/get-involved/csr-partner/">CSR Partner</a>
          <a href="/get-involved/internship/">Internship</a>
          <a href="/get-involved/donate/">Donate</a>
        </div>
      </div>
      <div class="nav-item"><a href="/contact/" class="nav-link">Contact</a></div>
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
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About</a></li>
      <li><a href="/about/our-story/">Our Story</a></li>
      <li><a href="/about/annual-reports/">Annual Reports</a></li>
      <li><a href="/about/five-pillars/">Five Pillars</a></li>
      <li><a href="/initiatives/">All Initiatives</a></li>
      <li><a href="/initiatives/education/">Education</a></li>
      <li><a href="/initiatives/health/">Health</a></li>
      <li><a href="/initiatives/environment/">Environment</a></li>
      <li><a href="/initiatives/livelihood/">Livelihood</a></li>
      <li><a href="/research/">Research</a></li>
      <li><a href="/research/rivers-chhattisgarh/">Rivers of CG</a></li>
      <li><a href="/research/ijmeer/">IJMEER Journal</a></li>
      <li><a href="/research/publications/">Publications</a></li>
      <li><a href="/research/csr-research/">CSR Research</a></li>
      <li><a href="/emerging/">Emerging</a></li>
      <li><a href="/emerging/community-radio/">Community Radio</a></li>
      <li><a href="/emerging/media-gallery/">Media Gallery</a></li>
      <li><a href="/emerging/news-press/">News &amp; Press</a></li>
      <li><a href="/emerging/field-notes/">Field Notes Blog</a></li>
      <li><a href="/impact/">Impact</a></li>
      <li><a href="/impact/statistics/">Statistics</a></li>
      <li><a href="/impact/case-studies/">Case Studies</a></li>
      <li><a href="/impact/district-profiles/">District Profiles</a></li>
      <li><a href="/impact/testimonials/">Testimonials</a></li>
      <li><a href="/get-involved/">Get Involved</a></li>
      <li><a href="/get-involved/volunteer/">Volunteer</a></li>
      <li><a href="/get-involved/csr-partner/">CSR Partner</a></li>
      <li><a href="/get-involved/internship/">Internship</a></li>
      <li><a href="/get-involved/donate/">Donate</a></li>
      <li><a href="/contact/">Contact</a></li>
      <li style="margin-top: 30px;"><a href="${DONATE}" class="submit-btn" target="_blank" rel="noopener">Donate Now</a></li>
    </ul>
  </nav>
</header>`;

  /* ────────────────────────────────────────────────────────────
     FOOTER — root-relative paths
  ──────────────────────────────────────────────────────────── */
  const FOOTER = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand column -->
      <div class="footer-brand">
        <a href="/" class="brand" style="margin-bottom:16px;" aria-label="Meer Foundation Home">
          <img src="/assets/images/logo/logo-1x1.webp" alt="Meer Foundation" style="height: 60px; width: auto; margin-bottom: 10px;">
          <div class="brand-text">
            <span class="brand-name">Meer Foundation</span>
            <span class="brand-sub">Empowering Communities</span>
          </div>
        </a>
        <p class="footer-desc">Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
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
          <a href="/about/our-story/">Our Story</a>
          <a href="/about/five-pillars/">Penta Model</a>
          <a href="/impact/statistics/">Impact Data</a>
          <a href="/impact/testimonials/">Beneficiaries</a>
          <a href="/about/annual-reports/">Annual Reports</a>
          <a href="/research/rivers-chhattisgarh/">Chhattisgarh Rivers</a>
        </nav>
      </div>

      <!-- Initiatives column -->
      <div>
        <h3 class="footer-head">Initiatives</h3>
        <nav class="footer-links">
          <a href="/initiatives/environment/">Bolti Nadi</a>
          <a href="/initiatives/livelihood/">Prayaas</a>
          <a href="/initiatives/health/">Yoga Kutumb</a>
          <a href="/emerging/media-gallery/">Guriya Magazine</a>
          <a href="/emerging/community-radio/">Radio Meer</a>
          <a href="/research/ijmeer/">IJMEER Journal</a>
        </nav>
      </div>

      <!-- Connect column -->
      <div>
        <h3 class="footer-head">Connect</h3>
        <nav class="footer-links">
          <a href="/contact/">Contact Us</a>
          <a href="/get-involved/volunteer/">Volunteer</a>
          <a href="/get-involved/csr-partner/">CSR Partner</a>
          <a href="/get-involved/donate/">Donate</a>
          <a href="/emerging/news-press/">News &amp; Blog</a>
          <a href="mailto:info@meerfoundation.co.in">Email Us</a>
          <a href="/legal/privacy-policy/">Privacy Policy</a>
          <a href="/legal/terms-of-use/">Terms &amp; Conditions</a>
        </nav>
        <div class="social-links" style="margin-top:24px;">
          <a href="https://facebook.com/meerfoundation" class="social-link" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://instagram.com/meerfoundations" class="social-link" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://x.com/meerfoundations" class="social-link" aria-label="X / Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="https://linkedin.com/company/meerfoundation" class="social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="https://youtube.com/@meerfoundation" class="social-link" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span data-year></span> Meer Foundation. Est. 2011. All rights reserved. | <a href="/legal/privacy-policy/" style="color:inherit;">Privacy</a> | <a href="/legal/terms-of-use/" style="color:inherit;">Terms</a></p>
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

  const ORG_SCHEMA = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Meer Foundation",
  "url": "https://meerfoundation.co.in",
  "logo": "https://meerfoundation.co.in/assets/images/logo/logo-1x1.webp",
  "foundingDate": "2011",
  "description": "A non-profit organization dedicated to sustainable community development, river conservation, and rural empowerment across Chhattisgarh.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sr. MIG 103, Housing Board Colony, Hatkeshar",
    "addressLocality": "Dhamtari",
    "addressRegion": "Chhattisgarh",
    "postalCode": "493773",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@meerfoundation.co.in",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://facebook.com/meerfoundation",
    "https://instagram.com/meerfoundations",
    "https://x.com/meerfoundations",
    "https://linkedin.com/company/meerfoundation",
    "https://youtube.com/@meerfoundation"
  ]
}
</script>`;

  inject('site-header-inject', HEADER);
  inject('site-footer-inject', FOOTER);
  document.head.insertAdjacentHTML('beforeend', ORG_SCHEMA);
  
  // Inject Quiz & Certificate Script
  const quizScript = document.createElement('script');
  quizScript.src = '/assets/js/quiz-certificate.js';
  document.body.appendChild(quizScript);

  document.dispatchEvent(new CustomEvent('headerInjected'));
})();
