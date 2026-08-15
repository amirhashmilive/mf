// ============================================================================
// MEER FOUNDATION — COMPREHENSIVE MAIN.JS ENGINE
// Site-wide interactivity + Presentation Framework orchestration
// ============================================================================

(function () {
  'use strict';

  // ===== 1. THEME CONTROLLER & PERSISTENCE =====
  (function initTheme() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || localStorage.getItem('mf_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', currentTheme);

    const toggles = document.querySelectorAll('.theme-toggle');
    function updateToggleIcons(theme) {
      toggles.forEach(toggle => {
        if (toggle.querySelector('i')) {
          toggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        } else {
          toggle.textContent = theme === 'dark' ? '☀' : '☾';
        }
      });
    }

    updateToggleIcons(currentTheme);

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        html.classList.add('theme-transitioning');
        setTimeout(() => html.classList.remove('theme-transitioning'), 450);

        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        localStorage.setItem('mf_theme', next);
        updateToggleIcons(next);

        window.dispatchEvent(new Event('themeChanged'));
      });
    });
  })();

  // ===== 2. MOBILE NAVIGATION MENU =====
  (function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
      });
    }
  })();

  // ===== 3. HEADER SCROLL SHADOW =====
  (function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      });
    }
  })();

  // ===== 4. SCROLL REVEAL OBSERVER =====
  (function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .slide').forEach(el => observer.observe(el));
  })();

  // ===== 5. FAQ ACCORDION =====
  (function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content && content.classList.contains('open');
        document.querySelectorAll('.accordion-content.open').forEach(c => c.classList.remove('open'));
        if (content && !isOpen) {
          content.classList.add('open');
        }
      });
    });
  })();

  // ===== 6. FORM TOAST SUBMISSIONS =====
  (function initFormToasts() {
    function showToast(message, description) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = '<strong>' + message + '</strong>' + (description ? '<br><small>' + description + '</small>' : '');
      toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--primary);color:#fff;padding:16px 24px;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,0.25);z-index:9999;transition:opacity 0.3s;';
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    }

    document.querySelectorAll('form[data-toast]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = form.dataset.toast || 'Form submitted successfully!';
        const desc = form.dataset.toastDesc || 'Thank you for reaching out.';
        showToast(msg, desc);
        form.reset();
      });
    });
  })();

  // ===== 7. ANIMATED COUNTERS =====
  (function initCounters() {
    const counters = document.querySelectorAll('[data-count], [data-count-to]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count || el.dataset.countTo, 10);
          const suffix = el.dataset.suffix || el.dataset.countSuffix || '';
          const isIndian = el.dataset.countIndian === 'true';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const value = Math.floor(progress * target);
            if (isIndian && value >= 1000) {
              el.textContent = value.toLocaleString('en-IN') + suffix;
            } else {
              el.textContent = value.toLocaleString() + suffix;
            }
            if (progress < 1) requestAnimationFrame(update);
          }

          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
  })();

  // ===== 8. BEFORE/AFTER SLIDER INTERACTION =====
  (function initBeforeAfter() {
    document.querySelectorAll('.before-after').forEach(container => {
      const beforeImg = container.querySelector('.before-after__before');
      const slider = container.querySelector('.before-after__slider');
      if (!beforeImg || !slider) return;

      let isDragging = false;
      function setPosition(x) {
        const rect = container.getBoundingClientRect();
        let posX = Math.max(0, Math.min(x - rect.left, rect.width));
        let percent = (posX / rect.width) * 100;
        beforeImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
        slider.style.left = `${percent}%`;
      }

      function onMove(e) {
        if (!isDragging) return;
        const pageX = e.touches ? e.touches[0].pageX : e.pageX;
        setPosition(pageX);
      }

      slider.addEventListener('mousedown', () => isDragging = true);
      window.addEventListener('mouseup', () => isDragging = false);
      window.addEventListener('mousemove', onMove);

      slider.addEventListener('touchstart', () => isDragging = true, { passive: true });
      window.addEventListener('touchend', () => isDragging = false);
      window.addEventListener('touchmove', onMove, { passive: true });
    });
  })();

  // ===== 9. PRESENTATION SLIDE PROGRESS DOTS & KEYBOARD NAV =====
  (function initPresentationEngine() {
    const slides = Array.from(document.querySelectorAll('.slide-container .slide'));
    if (slides.length > 1) {
      let dotsContainer = document.querySelector('.progress-dots');
      if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'progress-dots';
        document.body.appendChild(dotsContainer);
      }
      dotsContainer.innerHTML = '';

      slides.forEach((slide, idx) => {
        const dot = document.createElement('button');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Navigate to slide ${idx + 1}`);
        dot.addEventListener('click', () => {
          slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        dotsContainer.appendChild(dot);
      });

      const dotObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = slides.indexOf(entry.target);
            if (index !== -1) {
              const dots = dotsContainer.querySelectorAll('.dot');
              dots.forEach((d, i) => d.classList.toggle('active', i === index));
            }
          }
        });
      }, { threshold: 0.5 });

      slides.forEach(s => dotObserver.observe(s));
    }

    // Keyboard Arrow Navigation
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
      const scrollContainer = document.querySelector('.slide-container');
      if (!scrollContainer) return;
      const vh = window.innerHeight;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollContainer.scrollBy({ top: vh, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollContainer.scrollBy({ top: -vh, behavior: 'smooth' });
      }
    });

    // Hover-Magnify Width Protection
    const magnifyCards = document.querySelectorAll('.hover-magnify');
    magnifyCards.forEach(card => {
      setTimeout(() => {
        if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
          card.classList.add('hover-magnify-lg');
        }
      }, 150);
    });
  })();

})();