/**
 * Meer Holidays Travels — Main JavaScript
 * Shared logic: navigation, theme, scroll animations, utilities
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

    // Scroll behavior — add glass effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 60) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = scrollY;
    }, { passive: true });

    // Mobile menu toggle
    if (toggle) {
        toggle.addEventListener('click', () => {
            const isOpen = links.classList.contains('is-open');
            links.classList.toggle('is-open');
            toggle.classList.toggle('is-active');
            if (overlay) overlay.classList.toggle('is-visible');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            links.classList.remove('is-open');
            toggle.classList.remove('is-active');
            overlay.classList.remove('is-visible');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                links.classList.remove('is-open');
                toggle.classList.remove('is-active');
                if (overlay) overlay.classList.remove('is-visible');
                document.body.style.overflow = '';
            }
        });
    });

    // Highlight active nav link
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateThemeIcon(toggle, next);
        });
        updateThemeIcon(toggle, document.documentElement.getAttribute('data-theme') || 'light');
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
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

/** Calculate duration between two ISO strings */
function formatDuration(startISO, endISO) {
    const start = new Date(startISO);
    const end = new Date(endISO);
    const diffMs = end - start;
    const hours = Math.floor(diffMs / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    if (hours === 0) return `${minutes}min`;
    return `${hours}h ${minutes}min`;
}

/** Get weather info from WMO code */
function getWeatherInfo(code) {
    return CONFIG.WEATHER_CODES[code] || { icon: '🌡️', desc: 'Unknown' };
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
    container.innerHTML = `
        <div class="loading-overlay">
            <div class="spinner"></div>
            <p class="loading-overlay__text">Searching for the best deals...</p>
        </div>
    `;
}

/** Show empty state */
function showEmptyState(container, icon, title, desc) {
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
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state__icon">⚠️</div>
            <h3 class="empty-state__title">Something went wrong</h3>
            <p class="empty-state__desc">${message}</p>
        </div>
    `;
}

/** Create skeleton loading cards */
function showSkeletons(container, count = 4) {
    container.innerHTML = Array(count).fill(0).map(() => `
        <div class="card" style="pointer-events:none;">
            <div class="skeleton skeleton--img"></div>
            <div class="card__body">
                <div class="skeleton skeleton--title"></div>
                <div class="skeleton skeleton--text"></div>
                <div class="skeleton skeleton--text" style="width:60%"></div>
            </div>
        </div>
    `).join('');
}

/** Sanitize HTML to prevent XSS */
function sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/** Set today's date as minimum for date inputs */
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        if (!input.min) input.min = today;
    });
}

/** Smooth scroll to element */
function scrollToElement(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
