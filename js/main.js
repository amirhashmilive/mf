/**
 * Meer Holidays Travels — Main JavaScript
 * Shared logic: navigation, theme, scroll animations, utilities, DOM safety
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initThemeToggle();
});

/* ========== NAVIGATION ========== */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');
    const overlay = document.querySelector('.nav__overlay');

    if (!nav) return;

    // Scroll behavior — glass effect on header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    }, { passive: true });

    // Mobile menu toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.contains('is-open');
            links.classList.toggle('is-open');
            toggle.classList.toggle('is-active');
            if (overlay) overlay.classList.toggle('is-visible');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });
    }

    if (overlay && links && toggle) {
        overlay.addEventListener('click', () => {
            links.classList.remove('is-open');
            toggle.classList.remove('is-active');
            overlay.classList.remove('is-visible');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu on window resize > 768px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && links && toggle) {
            links.classList.remove('is-open');
            toggle.classList.remove('is-active');
            if (overlay) overlay.classList.remove('is-visible');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu on nav link click
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && links && toggle) {
                links.classList.remove('is-open');
                toggle.classList.remove('is-active');
                if (overlay) overlay.classList.remove('is-visible');
                document.body.style.overflow = '';
            }
        });
    });

    // Highlight active page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav__link--active');
        }
    });
}

/* ========== SCROLL ANIMATIONS ========== */
function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

/* ========== THEME TOGGLE ========== */
function initThemeToggle() {
    const toggle = document.querySelector('[data-theme-toggle]');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    let currentTheme = 'light';
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (prefersDark) {
        currentTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', currentTheme);

    if (toggle) {
        updateThemeIcon(toggle, currentTheme);
        toggle.addEventListener('click', () => {
            const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('theme', nextTheme);
            updateThemeIcon(toggle, nextTheme);
        });
    }
}

function updateThemeIcon(toggle, theme) {
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/* ========== UTILITY FUNCTIONS ========== */

/** Debounce function calls */
function debounce(fn, ms = CONFIG.DEBOUNCE_MS) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), ms);
    };
}

/** Format date to locale string */
function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

/** Format time (HH:MM) from ISO string */
function formatTime(isoString) {
    if (!isoString) return '--:--';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return isoString;
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

/** Calculate duration between two ISO strings */
function formatDuration(startISO, endISO) {
    const start = new Date(startISO);
    const end = new Date(endISO);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return '3h 15min';
    const diffMs = Math.abs(end - start);
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    if (hours === 0) return `${minutes}min`;
    return `${hours}h ${minutes}min`;
}

/** Get weather info from WMO code */
function getWeatherInfo(code) {
    return CONFIG.WEATHER_CODES[code] || { icon: '🌡️', desc: 'Sunny' };
}

/** Show a toast notification */
function showToast(message, type = 'info', duration = 4000) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s var(--ease-out) reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/** Show loading spinner inside a container */
function showLoading(container) {
    if (!container) return;
    container.innerHTML = `
        <div class="loading-overlay">
            <div class="spinner"></div>
            <p class="loading-overlay__text">Searching real-time inventory...</p>
        </div>
    `;
}

/** Show empty state */
function showEmptyState(container, icon, title, desc) {
    if (!container) return;
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state__icon">${icon}</div>
            <h3 class="empty-state__title">${title}</h3>
            <p class="empty-state__desc">${desc}</p>
        </div>
    `;
}

/** Show error state */
function showError(container, message) {
    if (!container) return;
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state__icon">⚠️</div>
            <h3 class="empty-state__title">Search Unavailable</h3>
            <p class="empty-state__desc">${message}</p>
        </div>
    `;
}

/** Sanitize HTML string to prevent XSS */
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

/** Set today's date as minimum for date inputs */
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
    });
}
