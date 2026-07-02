/* ============================================================
   IJMEER — core.js  (v4 — Fixed Edition)
   Navigation, dark mode, scroll effects, reveal animations
   ============================================================ */

(function () {
  'use strict';

  // ── Apply stored theme IMMEDIATELY (before DOMContentLoaded) ─────────────
  // This prevents flash of wrong theme
  const storedTheme = localStorage.getItem('mf-theme');
  if (storedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // ── Progress bar ──────────────────────────────────────────
  const progressBar = document.getElementById('progress-bar');
  function updateProgress() {
    if (!progressBar) return;
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    progressBar.style.width = Math.min(pct, 100) + '%';
  }

  // ── Header scroll effect ──────────────────────────────────
  const header = document.getElementById('site-header');
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  // ── Scroll-to-top button ──────────────────────────────────
  const scrollTopBtn = document.getElementById('scroll-top');
  function updateScrollTop() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
    else scrollTopBtn.classList.remove('visible');
  }
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Reveal animations ─────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  window.revealObserver = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        window.revealObserver.unobserve(e.target);
      }
    }),
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );
  revealEls.forEach(el => window.revealObserver.observe(el));

  // ── Mobile Menu System (Premium Slide-in Redesign) ─────────────────────
  window.initMobileMenu = function () {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-menu');

    if (!toggle || !nav || !overlay) return;
    if (toggle._bound) return;
    toggle._bound = true;

    function openMenu() {
      nav.classList.add('active');
      overlay.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('active');
      overlay.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  };

  // Bind to injection event
  document.addEventListener('headerInjected', () => window.initMobileMenu());
  // Also try immediate in case it's hardcoded
  window.initMobileMenu();


  // ── Accordion ─────────────────────────────────────────────
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Tabs ──────────────────────────────────────────────────
  document.querySelectorAll('.tab-bar').forEach(bar => {
    bar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        const container = bar.closest('[data-tabs]') || document;
        bar.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        container.querySelectorAll('.tab-panel').forEach(p => {
          const isActive = p.dataset.panel === target;
          p.classList.toggle('active', isActive);
          p.hidden = !isActive;
        });
      });
    });
  });

  // ── Dynamic footer year ───────────────────────────────────
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ── Active nav highlighting ───────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && href === currentPage) {
      link.style.color = 'var(--blue)';
      link.style.background = 'rgba(37,99,235,0.07)';
    }
  });

  // ── Scroll listener ───────────────────────────────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateHeader();
        updateScrollTop();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial calls
  updateHeader();
  updateScrollTop();

  // ── Copy citation helper (for citations page) ─────────────
  window.copyCitation = function(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 2000);
      if (window.showToast) window.showToast('Citation copied to clipboard!');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
      btn.textContent = '✓ Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
    });
  };

  // ── Floating Control Panel Logic ─────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const panelFab = document.getElementById('mf-controls-fab');
    const panel    = document.getElementById('mf-controls-panel');
    const panelClose = document.getElementById('mf-panel-close');

    // ── Panel open / close ──────────────────────────────────
    if (panelFab && panel) {
      panelFab.addEventListener('click', () => {
        panel.classList.toggle('active');
      });
    }

    if (panelClose && panel) {
      panelClose.addEventListener('click', () => {
        panel.classList.remove('active');
      });
    }

    // ── Theme Toggle ────────────────────────────────────────
    const themeBtns = document.querySelectorAll('.theme-btn');
    const savedTheme = localStorage.getItem('mf-theme') || 'light';

    // Sync active state with stored preference
    themeBtns.forEach(btn => {
      if (btn.dataset.theme === savedTheme) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    themeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;

        themeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }

        localStorage.setItem('mf-theme', theme);
      });
    });

    // ── Language Toggle ─────────────────────────────────────
    const langSelect = document.getElementById('mf-lang-select');
    if (langSelect) {
      // Pre-select current language if stored
      const currentLang = localStorage.getItem('mf-lang') || 'en';
      langSelect.value = currentLang;

      // Apply stored language on page load (non-English pages)
      if (currentLang !== 'en') {
        applyTranslations(currentLang);
      }

      langSelect.addEventListener('change', async (e) => {
        const lang = e.target.value;
        localStorage.setItem('mf-lang', lang);
        document.documentElement.setAttribute('lang', lang);

        // Auto-close panel after selection
        if (panel) {
          panel.classList.remove('active');
        }

        await applyTranslations(lang);
      });
    }
  });

  // ── Translation helper ────────────────────────────────────
  async function applyTranslations(lang) {
    const localeLang = (lang && lang !== 'en') ? lang : 'en';
    try {
      // Build base path from current page URL so it works from any depth
      const base = document.querySelector('base')?.href || '';
      const localeUrl = base
        ? new URL(`assets/locales/${localeLang}.json`, base).href
        : `assets/locales/${localeLang}.json`;

      const response = await fetch(localeUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const translations = await response.json();

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] !== undefined) {
          el.textContent = translations[key];
        }
      });
    } catch (error) {
      console.warn(`Could not load translations for "${localeLang}":`, error);
    }
  }

})();
