document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE MENU TOGGLE
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    if (hamburger && mobileSidebar) {
        hamburger.addEventListener('click', () => {
            mobileSidebar.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    if (sidebarClose && mobileSidebar) {
        sidebarClose.addEventListener('click', () => {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });
    }

    // Close sidebar on click outside
    document.addEventListener('click', (e) => {
        if (mobileSidebar && mobileSidebar.classList.contains('active') && !mobileSidebar.contains(e.target) && !hamburger.contains(e.target)) {
            mobileSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 2. ACTIVE LINK HIGHLIGHTING
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-link, .sidebar-link');
    
    allLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
            const parentNavItem = link.closest('.nav-item');
            if (parentNavItem) parentNavItem.classList.add('active');
        }
    });

    // 3. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.fade-in');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. STATS COUNTER ANIMATION
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            obj.innerHTML = current.toLocaleString() + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. COPY PROTECTION
    // Disable right click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable common devtool shortcuts
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
        }
    });

    // 6. STICKY HEADER SCROLL EFFECT
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.backgroundColor = '#0A2540F2'; // Slightly transparent on scroll
        } else {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#0A2540';
        }
    });
});
