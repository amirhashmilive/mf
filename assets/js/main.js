
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
});
