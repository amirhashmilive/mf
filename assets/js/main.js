
// ============================================================================
// MEER FOUNDATION — MAIN.JS
// Pure vanilla ES6+ JavaScript — no jQuery, no React, no frameworks
// ============================================================================

// ===== THEME TOGGLE =====
(function() {
  const toggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('mf_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', initialTheme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('mf_theme', next);
      toggle.textContent = next === 'dark' ? '☀' : '☾';
    });
    toggle.textContent = initialTheme === 'dark' ? '☀' : '☾';
  }
})();

// ===== MOBILE MENU TOGGLE =====
(function() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
  }
})();

// ===== SCROLL REVEAL (IntersectionObserver) =====
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ===== HEADER SCROLL EFFECT =====
(function() {
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }
})();

// ===== FAQ ACCORDION =====
(function() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');
      document.querySelectorAll('.accordion-content.open').forEach(c => c.classList.remove('open'));
      if (!isOpen) content.classList.add('open');
    });
  });
})();

// ===== FORM SUBMISSION (toast notification) =====
(function() {
  function showToast(message, description) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<strong>' + message + '</strong>' + (description ? '<br><small>' + description + '</small>' : '');
    toast.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--primary);color:#fff;padding:16px 24px;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,0.2);z-index:9999;animation:slideIn 0.3s ease;';
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 4000);
  }

  document.querySelectorAll('form[data-toast]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const toastMsg = form.dataset.toast;
      const toastDesc = form.dataset.toastDesc || '';
      showToast(toastMsg, toastDesc);
      form.reset();
    });
  });
})();

// ===== ANIMATED COUNTERS =====
(function() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          el.textContent = value.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
})();