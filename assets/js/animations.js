/* ============================================================================
   MEER FOUNDATION — GSAP & SCROLL TRIGGER ANIMATION ENGINE
   Provides Smooth Text Reveals, Stat Counter Animations, and Card Elevation Effects
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. GSAP ScrollTrigger Animations ---
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero Text Staggered Fade Up
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-ctas');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }

    // Reveal Elements on Scroll
    const reveals = document.querySelectorAll('.gsap-reveal');
    reveals.forEach(elem => {
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

  } else {
    // Fallback IntersectionObserver if GSAP is not loaded
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translate(0, 0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right').forEach(el => {
      observer.observe(el);
    });
  }

  // --- 2. Stat Counter Animation ---
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-count') || el.innerText;
          const target = parseInt(targetStr.replace(/\D/g, ''), 10);
          const suffix = targetStr.replace(/[0-9]/g, '') || '+';

          if (!isNaN(target) && !el.classList.contains('counted')) {
            el.classList.add('counted');
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.innerText = target + suffix;
                clearInterval(timer);
              } else {
                el.innerText = current + suffix;
              }
            }, 30);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => counterObserver.observe(stat));
  }

});
