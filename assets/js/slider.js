// ============================================================
// LIGHTBOX SLIDER — Presentation Framework
// Fullscreen image viewer with keyboard & touch navigation
// ============================================================

(function () {
    'use strict';

    window.initLightbox = function (triggerSelector, lightboxClass) {
        const triggers = document.querySelectorAll(triggerSelector);
        if (triggers.length === 0) return;

        const images = [];
        const captions = [];

        triggers.forEach((el, index) => {
            const imgSrc = el.getAttribute('data-image') || el.querySelector('img')?.src;
            const caption = el.getAttribute('data-caption') || el.querySelector('.gallery-card-caption')?.textContent || '';
            images.push(imgSrc);
            captions.push(caption);
            el.setAttribute('data-lightbox-index', index);
        });

        let overlay = document.querySelector(`.lightbox-overlay.${lightboxClass}-overlay`);
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = `lightbox-overlay ${lightboxClass ? lightboxClass + '-overlay' : ''}`;
            overlay.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
                    <img class="lightbox-img" src="" alt="Gallery Image">
                    <button class="lightbox-prev" aria-label="Previous Image">&#10094;</button>
                    <button class="lightbox-next" aria-label="Next Image">&#10095;</button>
                    <div class="lightbox-counter">1 / ${images.length}</div>
                    <div class="lightbox-caption"></div>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        let currentIndex = 0;
        const imgEl = overlay.querySelector('.lightbox-img');
        const counterEl = overlay.querySelector('.lightbox-counter');
        const capEl = overlay.querySelector('.lightbox-caption');

        function showImage(index) {
            currentIndex = (index + images.length) % images.length;
            imgEl.src = images[currentIndex] || '';
            counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
            if (capEl) {
                capEl.textContent = captions[currentIndex] || '';
                capEl.style.display = captions[currentIndex] ? 'block' : 'none';
            }
        }

        triggers.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const idx = parseInt(el.getAttribute('data-lightbox-index'), 10);
                showImage(isNaN(idx) ? 0 : idx);
                overlay.classList.add('active');
            });
        });

        overlay.querySelector('.lightbox-close').addEventListener('click', () => overlay.classList.remove('active'));
        overlay.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex - 1);
        });
        overlay.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentIndex + 1);
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });

        document.addEventListener('keydown', (e) => {
            if (!overlay.classList.contains('active')) return;
            if (e.key === 'Escape') overlay.classList.remove('active');
            if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        window.initLightbox('.gallery-card', 'gallery');
        window.initLightbox('.pillar-click', 'pillar');
        window.initLightbox('[data-image]', 'generic');
    });
})();
