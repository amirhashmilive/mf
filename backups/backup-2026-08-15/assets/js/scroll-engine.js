/* ============================================================
   MEER FOUNDATION — scroll-engine.js
   Premium scroll-driven animation engine
   Pure vanilla JS — no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ── Feature Detection ───────────────────────────────────── */
  const supportsScrollTimeline = CSS && CSS.supports && CSS.supports('animation-timeline', 'scroll()');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  /* ── ScrollEngine Namespace ──────────────────────────────── */
  window.ScrollEngine = {
    _sections: [],
    _counters: [],
    _parallaxEls: [],
    _frameSequences: [],
    _tiltCards: [],
    _beforeAfters: [],
    _rafId: null,
    _initialized: false,

    /* ── Main init ─────────────────────────────────────────── */
    init: function () {
      if (this._initialized) return;
      this._initialized = true;

      if (prefersReducedMotion) {
        // Immediately show all reveal elements
        document.querySelectorAll('.scroll-reveal, .scroll-reveal--left, .scroll-reveal--right, .scroll-reveal--scale, .scroll-reveal--3d, .scroll-stagger').forEach(function (el) {
          el.classList.add('revealed');
        });
        return;
      }

      var heroCanvas = document.getElementById('hero-canvas');
      if (heroCanvas) {
        var frameDir = heroCanvas.getAttribute('data-frame-dir') || 'assets/images/hero-frames';
        var frameCount = parseInt(heroCanvas.getAttribute('data-frame-count') || '45', 10);
        this.registerSequence('hero-canvas', frameDir, frameCount, 0, 1);
      }

      this._initReveals();
      this._initCounters();
      this._initParallax();
      this._initTiltCards();
      this._initBeforeAfter();
      this._startScrollLoop();

      // Re-check on resize
      var self = this;
      var resizeTimer;
      window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          self._onResize();
        }, 200);
      });
    },

    /* ── Reveal System (IntersectionObserver) ───────────────── */
    _initReveals: function () {
      var revealSelectors = '.scroll-reveal, .scroll-reveal--left, .scroll-reveal--right, .scroll-reveal--scale, .scroll-reveal--3d, .scroll-stagger';
      var els = document.querySelectorAll(revealSelectors);

      if (!els.length) return;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });

      els.forEach(function (el) {
        observer.observe(el);
      });
    },

    /* ── Animated Counters ─────────────────────────────────── */
    _initCounters: function () {
      var counters = document.querySelectorAll('[data-count-to]');
      if (!counters.length) return;

      var self = this;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            self._animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counters.forEach(function (el) {
        observer.observe(el);
      });
    },

    _animateCounter: function (el) {
      var target = parseInt(el.getAttribute('data-count-to'), 10);
      var suffix = el.getAttribute('data-count-suffix') || '';
      var prefix = el.getAttribute('data-count-prefix') || '';
      var useIndian = el.hasAttribute('data-count-indian');
      var duration = parseInt(el.getAttribute('data-count-duration') || '2000', 10);
      var start = 0;
      var startTime = null;

      function formatNumber(num) {
        if (useIndian) {
          // Indian number formatting: 1,00,000
          var s = Math.floor(num).toString();
          var result = '';
          var count = 0;
          for (var i = s.length - 1; i >= 0; i--) {
            result = s[i] + result;
            count++;
            if (count === 3 && i > 0) {
              result = ',' + result;
            } else if (count > 3 && (count - 3) % 2 === 0 && i > 0) {
              result = ',' + result;
            }
          }
          return result;
        }
        return Math.floor(num).toLocaleString('en-IN');
      }

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out quint
        var eased = 1 - Math.pow(1 - progress, 5);
        var current = Math.floor(eased * target);
        el.textContent = prefix + formatNumber(current) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + formatNumber(target) + suffix;
        }
      }

      requestAnimationFrame(step);
    },

    /* ── Frame Sequencer (Hero Canvas) ─────────────────────── */
    registerSequence: function (canvasId, frameDir, frameCount, scrollStart, scrollEnd) {
      if (isMobile || prefersReducedMotion) return;

      var canvas = document.getElementById(canvasId);
      if (!canvas) return;

      var ctx = canvas.getContext('2d');
      var frames = [];
      var loadedCount = 0;
      var currentFrame = -1;

      // Size canvas to viewport
      function sizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      sizeCanvas();
      window.addEventListener('resize', sizeCanvas);

      // Pre-load frames
      for (var i = 1; i <= frameCount; i++) {
        var img = new Image();
        var num = String(i).padStart(3, '0');
        img.src = frameDir + '/hero-frame-' + num + '.webp';
        img.onload = function () {
          loadedCount++;
          if (loadedCount === 1) {
            // Draw first frame immediately
            drawFrame(0);
          }
        };
        frames.push(img);
      }

      function drawFrame(index) {
        if (index === currentFrame) return;
        if (index < 0 || index >= frames.length) return;
        if (!frames[index].complete) return;

        currentFrame = index;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Cover-fit the image
        var img = frames[index];
        var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        var x = (canvas.width - img.width * scale) / 2;
        var y = (canvas.height - img.height * scale) / 2;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      this._frameSequences.push({
        canvas: canvas,
        ctx: ctx,
        frames: frames,
        frameCount: frameCount,
        scrollStart: scrollStart,
        scrollEnd: scrollEnd,
        drawFrame: drawFrame
      });
    },

    /* ── Hero Overlay Management ───────────────────────────── */
    _updateHeroOverlays: function (scrollProgress) {
      var overlays = document.querySelectorAll('.scroll-hero__overlay');
      overlays.forEach(function (overlay) {
        var range = overlay.getAttribute('data-scroll-range');
        if (!range) return;

        var parts = range.split('-');
        var rangeStart = parseFloat(parts[0]);
        var rangeEnd = parseFloat(parts[1]);

        if (scrollProgress >= rangeStart && scrollProgress <= rangeEnd) {
          overlay.classList.add('active');
        } else {
          overlay.classList.remove('active');
        }
      });

      // Update progress bar
      var progressBar = document.querySelector('.scroll-hero__progress');
      if (progressBar) {
        progressBar.style.width = (scrollProgress * 100) + '%';
      }
    },

    /* ── Parallax ──────────────────────────────────────────── */
    _initParallax: function () {
      if (isMobile) return;

      var els = document.querySelectorAll('[data-parallax]');
      els.forEach(function (el) {
        this._parallaxEls.push({
          el: el,
          speed: parseFloat(el.getAttribute('data-parallax') || '0.3')
        });
      }.bind(this));
    },

    _updateParallax: function () {
      var scrollY = window.scrollY;
      var viewportHeight = window.innerHeight;

      this._parallaxEls.forEach(function (item) {
        var rect = item.el.getBoundingClientRect();
        var centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        var translateY = centerOffset * item.speed * 100;
        item.el.style.transform = 'translateY(' + translateY + 'px)';
      });
    },

    /* ── 3D Tilt Cards (mouse-follow) ──────────────────────── */
    _initTiltCards: function () {
      if (isMobile) return;

      document.querySelectorAll('.tilt-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          var centerX = rect.width / 2;
          var centerY = rect.height / 2;
          var rotateX = ((y - centerY) / centerY) * -6;
          var rotateY = ((x - centerX) / centerX) * 6;

          card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
        });

        card.addEventListener('mouseleave', function () {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
    },

    /* ── Before/After Slider ───────────────────────────────── */
    _initBeforeAfter: function () {
      document.querySelectorAll('.before-after').forEach(function (container) {
        var slider = container.querySelector('.before-after__slider');
        var beforeImg = container.querySelector('.before-after__before');
        if (!slider || !beforeImg) return;

        var isDragging = false;

        function updatePosition(x) {
          var rect = container.getBoundingClientRect();
          var percent = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
          slider.style.left = percent + '%';
          beforeImg.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
        }

        slider.addEventListener('mousedown', function () { isDragging = true; });
        document.addEventListener('mouseup', function () { isDragging = false; });
        document.addEventListener('mousemove', function (e) {
          if (isDragging) {
            e.preventDefault();
            updatePosition(e.clientX);
          }
        });

        // Touch support
        slider.addEventListener('touchstart', function () { isDragging = true; });
        document.addEventListener('touchend', function () { isDragging = false; });
        document.addEventListener('touchmove', function (e) {
          if (isDragging) {
            updatePosition(e.touches[0].clientX);
          }
        });
      });
    },

    /* ── Main Scroll Loop (rAF-throttled) ──────────────────── */
    _startScrollLoop: function () {
      var self = this;
      var ticking = false;

      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(function () {
            self._onScrollFrame();
            ticking = false;
          });
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      // Initial call
      this._onScrollFrame();
    },

    _onScrollFrame: function () {
      var scrollY = window.scrollY;

      // ── Update frame sequences ──
      this._frameSequences.forEach(function (seq) {
        var section = seq.canvas.closest('.scroll-hero');
        if (!section) return;

        var rect = section.getBoundingClientRect();
        var sectionHeight = section.offsetHeight;
        var stickyHeight = window.innerHeight;
        var scrollableDistance = sectionHeight - stickyHeight;

        if (scrollableDistance <= 0) return;

        var scrolled = -rect.top;
        var progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
        var frameIndex = Math.floor(progress * (seq.frameCount - 1));

        seq.drawFrame(frameIndex);

        // Update overlays
        ScrollEngine._updateHeroOverlays(progress);
      });

      // ── Update parallax ──
      if (this._parallaxEls.length) {
        this._updateParallax();
      }
    },

    /* ── Resize handler ────────────────────────────────────── */
    _onResize: function () {
      // Recalculate mobile state
      var wasMobile = isMobile;
      // Note: isMobile is const, so we check directly
      if (window.innerWidth < 768 && !wasMobile) {
        // Switched to mobile — disable heavy effects
        this._parallaxEls.forEach(function (item) {
          item.el.style.transform = '';
        });
      }
    }
  };

  /* ── Auto-init when DOM ready ────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      ScrollEngine.init();
    });
  } else {
    ScrollEngine.init();
  }

})();
