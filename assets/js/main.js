/* ============================================================================
   MEER FOUNDATION — CORE INTERACTIVE CONTROLLER
   Theme Switcher, Mobile Navigation Drawer, Scroll Indicator & Back-To-Top
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. Theme Toggle Management ---
  const savedTheme = localStorage.getItem('mf_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  document.addEventListener('click', function (e) {
    const themeBtn = e.target.closest('#theme-toggle, .theme-toggle-btn');
    if (themeBtn) {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('mf_theme', newTheme);
      updateThemeIcon(newTheme);
    }
  });

  function updateThemeIcon(theme) {
    const themeBtns = document.querySelectorAll('#theme-toggle, .theme-toggle-btn');
    themeBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fas fa-sun';
          icon.style.color = '#F59E0B';
        } else {
          icon.className = 'fas fa-moon';
          icon.style.color = 'var(--primary)';
        }
      }
    });
  }

  // --- 2. Mobile Navigation Drawer Controls ---
  document.addEventListener('click', function (e) {
    if (e.target.closest('#mobile-menu-toggle')) {
      openMobileNav();
    } else if (e.target.closest('#close-mobile-nav') || e.target.closest('#mobile-nav-overlay')) {
      closeMobileNav();
    }
  });

  function openMobileNav() {
    const overlay = document.getElementById('mobile-nav-overlay');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (overlay && drawer) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    const overlay = document.getElementById('mobile-nav-overlay');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (overlay && drawer) {
      overlay.classList.remove('active');
      drawer.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- 3. Scroll Listener for Back-To-Top and Header Blur ---
  const backToTopBtn = document.getElementById('back-to-top');
  const siteHeader = document.getElementById('site-header');

  window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    if (siteHeader) {
      if (scrollPos > 50) {
        siteHeader.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    }
  }, { passive: true });

  document.addEventListener('click', function (e) {
    if (e.target.closest('#back-to-top')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // --- 4. Active Navigation State ---
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav .nav-link, .main-nav .dropdown-content a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (href !== 'index.html' && currentPath.includes(href.replace('.html', ''))))) {
      link.classList.add('active');
      const parentDropdown = link.closest('.nav-item');
      if (parentDropdown) parentDropdown.classList.add('active');
    }
  });

});