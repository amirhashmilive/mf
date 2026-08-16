/* ============================================================================
   MEER FOUNDATION — ZERO-OVERFLOW CAROUSEL & SLIDER MODULE
   Responsive, Touch-Enabled Slider with Auto-Play & Navigation Controls
   ============================================================================ */

function initCarousel(carouselId) {
  'use strict';

  const container = document.getElementById(carouselId);
  if (!container) return;

  const track = container.querySelector('.carousel-track');
  const slides = Array.from(container.querySelectorAll('.carousel-slide'));
  const prevBtn = container.querySelector('.carousel-prev');
  const nextBtn = container.querySelector('.carousel-next');
  const dotsContainer = container.querySelector('.carousel-dots');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let slidesPerView = getSlidesPerView();
  let autoPlayTimer = null;

  function getSlidesPerView() {
    const width = window.innerWidth;
    if (width <= 425) return 1;
    if (width <= 768) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, slides.length - slidesPerView);
  }

  function updateCarousel() {
    slidesPerView = getSlidesPerView();
    if (currentIndex > maxIndex()) currentIndex = maxIndex();

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
    const moveAmount = (slideWidth + gap) * currentIndex;

    track.style.transform = `translateX(-${moveAmount}px)`;

    updateDots();
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const totalDots = maxIndex() + 1;

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      updateCarousel();
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
      updateCarousel();
      resetAutoPlay();
    });
  }

  // Touch Swipe Support
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      } else {
        currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1;
      }
      updateCarousel();
    }
    isSwiping = false;
    startAutoPlay();
  });

  // Auto-play feature
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1;
      updateCarousel();
    }, 4500);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  window.addEventListener('resize', () => {
    createDots();
    updateCarousel();
  });

  // Initial call
  createDots();
  updateCarousel();
  startAutoPlay();
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousel('board-carousel');
  initCarousel('publications-carousel');
});
