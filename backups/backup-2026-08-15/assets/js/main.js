// ============================================================
// MAIN JAVASCRIPT ENGINE — Presentation Framework
// Full-viewport scroll orchestration, progress dots, keyboard nav
// ============================================================

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.slide-container') || document.documentElement;
        const slides = Array.from(document.querySelectorAll('.slide'));

        // ── 1. Vertical Progress Dots Generation ────────────────────
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

            // Active dot observer
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

        // ── 2. Cinematic Slide Reveal Observer ──────────────────────
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.2 });

        slides.forEach(s => revealObserver.observe(s));

        // ── 3. Keyboard Arrow Navigation (100vh Snap) ───────────────
        document.addEventListener('keydown', (e) => {
            // Ignore if active input/textarea
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

            const scrollContainer = document.querySelector('.slide-container') || window;
            const vh = window.innerHeight;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (scrollContainer.scrollBy) {
                    scrollContainer.scrollBy({ top: vh, behavior: 'smooth' });
                } else {
                    window.scrollBy({ top: vh, behavior: 'smooth' });
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (scrollContainer.scrollBy) {
                    scrollContainer.scrollBy({ top: -vh, behavior: 'smooth' });
                } else {
                    window.scrollBy({ top: -vh, behavior: 'smooth' });
                }
            }
        });

        // ── 4. Universal Hover-Magnify Safeguard (>400px Cap) ───────
        const magnifyCards = document.querySelectorAll('.hover-magnify');
        magnifyCards.forEach(card => {
            setTimeout(() => {
                if (card.offsetWidth > 400 && !card.hasAttribute('data-force-magnify')) {
                    card.classList.add('hover-magnify-lg');
                }
            }, 150);
        });

        // ── 5. Mobile Navigation Menu Toggle ────────────────────────
        const mobileToggle = document.querySelector('.mobile-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('open');
                mobileToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
            });
        }
    });
})();