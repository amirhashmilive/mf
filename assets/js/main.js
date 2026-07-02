
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    if (hamburger && mobileSidebar && sidebarClose) {
        hamburger.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        sidebarClose.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close when clicking links
        document.querySelectorAll('.sidebar-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileSidebar.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Scroll Animation Observer
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 3. Stats Counter Animation (Home Page)
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCount(entry.target, target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        stats.forEach(s => statsObserver.observe(s));
    }

    function animateCount(el, target) {
        let current = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target));
        const timer = setInterval(() => {
            current += Math.ceil(target / 100);
            if (current >= target) {
                el.innerText = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                el.innerText = current.toLocaleString();
            }
        }, 20);
    }

    // 4. Control Panel Logic
    const panelFab = document.getElementById('mf-controls-fab');
    const panel = document.getElementById('mf-controls-panel');
    const panelClose = document.getElementById('mf-panel-close');

    if (panelFab && panel && panelClose) {
        panelFab.addEventListener('click', () => {
            panel.classList.toggle('active');
        });

        panelClose.addEventListener('click', () => {
            panel.classList.remove('active');
        });
    }

    // Theme Toggle
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const theme = e.target.dataset.theme;
            
            // Update active class
            themeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Apply theme
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            
            localStorage.setItem('mf-theme', theme);
        });
    });

    // Language Toggle
    const langSelect = document.getElementById('mf-lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', async (e) => {
            const lang = e.target.value;
            localStorage.setItem('mf-lang', lang);
            document.documentElement.setAttribute('lang', lang);
            
            if (lang !== 'en') {
                try {
                    const response = await fetch(`assets/locales/${lang}.json`);
                    const translations = await response.json();
                    
                    document.querySelectorAll('[data-i18n]').forEach(el => {
                        const key = el.getAttribute('data-i18n');
                        if (translations[key]) {
                            el.textContent = translations[key];
                        }
                    });
                } catch (error) {
                    console.error('Error loading translations:', error);
                }
            } else {
                // To properly support switching back to EN, we should ideally fetch en.json too.
                try {
                    const response = await fetch(`assets/locales/en.json`);
                    const translations = await response.json();
                    
                    document.querySelectorAll('[data-i18n]').forEach(el => {
                        const key = el.getAttribute('data-i18n');
                        if (translations[key]) {
                            el.textContent = translations[key];
                        }
                    });
                } catch (error) {
                    console.error('Error loading en translations:', error);
                }
            }
        });
    }

    // Region Toggle
    const regionSelect = document.getElementById('mf-region-select');
    if (regionSelect) {
        regionSelect.addEventListener('change', (e) => {
            const region = e.target.value;
            localStorage.setItem('mf-region', region);
            
            // Simple mapping for demonstration
            const regionData = {
                'IN': { curr: '₹', donate: 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view' },
                'US': { curr: '$', donate: 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view' },
                'GB': { curr: '£', donate: 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view' },
                'EU': { curr: '€', donate: 'https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view' }
            };
            
            const data = regionData[region] || regionData['IN'];
            
            document.querySelectorAll('[data-region-currency]').forEach(el => {
                el.textContent = data.curr;
            });
            
            document.querySelectorAll('[data-region-donate]').forEach(el => {
                el.href = data.donate;
            });
        });
    }

});
