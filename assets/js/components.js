/* ============================================================================
   MEER FOUNDATION — GLOBAL COMPONENTS INJECTION
   Header & Footer Component Generator with Exact Required Navigation Hierarchy
   ============================================================================ */

(function () {
  'use strict';

  // Helper to determine root relative prefix
  function getRootPrefix() {
    const path = window.location.pathname;
    if (path.endsWith('/') && path !== '/') return '../';
    const depth = (path.match(/\//g) || []).length;
    if (path.endsWith('.html') || path === '/') {
      return depth > 1 ? '../'.repeat(depth - 1) : './';
    }
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  const root = getRootPrefix();

  const HEADER_HTML = `
  <header class="site-header" id="site-header" role="banner">
    <div class="container header-inner">
      <a href="${root}index.html" class="brand" aria-label="Meer Foundation Home">
        <img src="${root}assets/images/logo/logo-horizontal.webp" alt="Meer Foundation" class="brand-logo" onerror="this.onerror=null; this.src='${root}assets/images/logo.png';">
      </a>

      <nav class="main-nav" id="main-nav" aria-label="Main Navigation">
        <div class="nav-item">
          <a href="${root}index.html" class="nav-link">Home</a>
        </div>
        <div class="nav-item dropdown">
          <a href="${root}about.html" class="nav-link">About Us <i class="fas fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-content">
            <a href="${root}about.html#mission">Our Mission</a>
            <a href="${root}about.html#team">Our Team</a>
            <a href="${root}about.html#work">Our Work</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="${root}editorial.html" class="nav-link">Editorial Board <i class="fas fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-content">
            <a href="${root}editorial.html#members">Board Members</a>
            <a href="${root}editorial.html#advisory">Advisory Committee</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="${root}issn.html" class="nav-link">ISSN <i class="fas fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-content">
            <a href="${root}issn.html#status">ISSN Application Status</a>
            <a href="${root}issn.html#details">ISSN Details</a>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a href="${root}publications.html" class="nav-link">Publications <i class="fas fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-content">
            <a href="${root}publications.html#current">Current Issue</a>
            <a href="${root}publications.html#archives">Archives</a>
            <a href="${root}publications.html#submit">Submit Paper</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="${root}news.html" class="nav-link">News &amp; Events</a>
        </div>
        <div class="nav-item dropdown">
          <a href="${root}contact.html" class="nav-link">Contact Us <i class="fas fa-chevron-down" style="font-size: 0.7em;"></i></a>
          <div class="dropdown-content">
            <a href="${root}contact.html#form">Contact Form</a>
            <a href="${root}contact.html#location">Location</a>
            <a href="${root}contact.html#support">Support Us</a>
          </div>
        </div>
      </nav>

      <div class="header-actions">
        <button class="theme-toggle-btn" id="theme-toggle" aria-label="Toggle dark/light theme">
          <i class="fas fa-moon"></i>
        </button>
        <a href="${root}contact.html#support" class="btn btn-primary btn-sm desktop-only">Join Us</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Open mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
  <aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Mobile Navigation Menu">
    <div class="mobile-nav-header">
      <h4 style="margin:0; color: var(--primary);">Navigation</h4>
      <button class="close-mobile-nav" id="close-mobile-nav" aria-label="Close menu">&times;</button>
    </div>
    <div class="mobile-menu-list">
      <a href="${root}index.html">1. Home</a>
      <div>
        <a href="${root}about.html">2. About Us</a>
        <div class="mobile-submenu">
          <a href="${root}about.html#mission">• Our Mission</a>
          <a href="${root}about.html#team">• Our Team</a>
          <a href="${root}about.html#work">• Our Work</a>
        </div>
      </div>
      <div>
        <a href="${root}editorial.html">3. Editorial Board</a>
        <div class="mobile-submenu">
          <a href="${root}editorial.html#members">• Board Members</a>
          <a href="${root}editorial.html#advisory">• Advisory Committee</a>
        </div>
      </div>
      <div>
        <a href="${root}issn.html">4. ISSN</a>
        <div class="mobile-submenu">
          <a href="${root}issn.html#status">• ISSN Status</a>
          <a href="${root}issn.html#details">• ISSN Details</a>
        </div>
      </div>
      <div>
        <a href="${root}publications.html">5. Publications</a>
        <div class="mobile-submenu">
          <a href="${root}publications.html#current">• Current Issue</a>
          <a href="${root}publications.html#archives">• Archives</a>
          <a href="${root}publications.html#submit">• Submit Paper</a>
        </div>
      </div>
      <a href="${root}news.html">6. News &amp; Events</a>
      <div>
        <a href="${root}contact.html">7. Contact Us</a>
        <div class="mobile-submenu">
          <a href="${root}contact.html#form">• Contact Form</a>
          <a href="${root}contact.html#location">• Location</a>
          <a href="${root}contact.html#support">• Support Us</a>
        </div>
      </div>
    </div>
  </aside>
  `;

  const FOOTER_HTML = `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${root}assets/images/logo/logo-horizontal.webp" alt="Meer Foundation" class="footer-logo" onerror="this.onerror=null; this.src='${root}assets/images/logo.png';">
          <p style="color: rgba(255,255,255,0.75); font-size: 0.9rem; margin-bottom: 16px;">
            Meer Foundation — Non-profit NGO established in 2011, advancing sustainable community development, river conservation, education, and multidisciplinary research.
          </p>
          <div style="display: flex; gap: 12px; font-size: 1.2rem;">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" style="color: var(--secondary-light);"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" style="color: var(--secondary-light);"><i class="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" style="color: var(--secondary-light);"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style="color: var(--secondary-light);"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Quick Links</h4>
          <div class="footer-links">
            <a href="${root}index.html">Home</a>
            <a href="${root}about.html">About Us</a>
            <a href="${root}editorial.html">Editorial Board</a>
            <a href="${root}issn.html">ISSN Status</a>
            <a href="${root}publications.html">Publications</a>
            <a href="${root}news.html">News &amp; Events</a>
            <a href="${root}contact.html">Contact Us</a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Publications</h4>
          <div class="footer-links">
            <a href="${root}publications.html#current">Current Issue</a>
            <a href="${root}publications.html#archives">Journal Archives</a>
            <a href="${root}publications.html#submit">Submit Research Paper</a>
            <a href="${root}issn.html">ISSN Application</a>
            <a href="${root}editorial.html#members">Peer Review Board</a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Contact &amp; Support</h4>
          <p style="font-size: 0.9rem; margin-bottom: 10px; color: rgba(255,255,255,0.75);">
            <i class="fas fa-map-marker-alt" style="color: var(--secondary-light); margin-right: 8px;"></i> Chhattisgarh, India
          </p>
          <p style="font-size: 0.9rem; margin-bottom: 10px; color: rgba(255,255,255,0.75);">
            <i class="fas fa-envelope" style="color: var(--secondary-light); margin-right: 8px;"></i> ijmeerj@gmail.com
          </p>
          <p style="font-size: 0.9rem; margin-bottom: 16px; color: rgba(255,255,255,0.75);">
            <i class="fab fa-whatsapp" style="color: var(--secondary-light); margin-right: 8px;"></i> +91 98261 21177
          </p>
          <a href="${root}contact.html#support" class="btn btn-primary btn-sm" style="width: 100%;">Support Our Mission</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          &copy; ${new Date().getFullYear()} Meer Foundation. All Rights Reserved. | <a href="${root}about.html" style="color: var(--secondary-light);">Meer Foundation Website</a>
        </div>
        <div style="display: flex; gap: 16px;">
          <a href="${root}contact.html" style="color: rgba(255,255,255,0.6);">Privacy Policy</a>
          <a href="${root}contact.html" style="color: rgba(255,255,255,0.6);">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="back-to-top" id="back-to-top" aria-label="Back to top">
    <i class="fas fa-arrow-up"></i>
  </button>
  `;

  document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-mount') || document.querySelector('header');
    if (headerContainer && headerContainer.parentNode) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = HEADER_HTML;
      headerContainer.parentNode.replaceChild(tempDiv.firstElementChild, headerContainer);
      if (tempDiv.children.length > 0) {
        document.body.appendChild(tempDiv.children[0]); // overlay
        document.body.appendChild(tempDiv.children[0]); // drawer
      }
    } else {
      document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
    }

    const footerContainer = document.getElementById('footer-mount') || document.querySelector('footer');
    if (footerContainer && footerContainer.parentNode) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = FOOTER_HTML;
      footerContainer.parentNode.replaceChild(tempDiv.firstElementChild, footerContainer);
      if (tempDiv.children.length > 0) {
        document.body.appendChild(tempDiv.firstElementChild); // back-to-top
      }
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  });

})();
