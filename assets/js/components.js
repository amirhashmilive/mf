const components = {
    header: `
    <header id="main-header">
        <div class="container">
            <nav>
                <a href="index.html" class="logo">
                    <img src="assets/images/logo.png" alt="Meer Foundation Logo" style="height: 60px; width: auto;">
                    <div class="logo-text">
                        <h1 style="color: var(--secondary);">MEER <span style="color: var(--primary);">Foundation</span></h1>
                        <p style="font-size: 0.6rem; color: var(--text-muted); margin-top: 2px; font-weight: 600;">Est. 2011 · Chhattisgarh</p>
                    </div>
                </a>
                <ul class="nav-links">
                    <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                    <li class="nav-item has-dropdown">
                        <a href="initiatives.html" class="nav-link">Initiatives</a>
                        <div class="dropdown">
                            <a href="initiatives.html#bolti-nadi" class="dropdown-item">Bolti Nadi</a>
                            <a href="initiatives.html#farmours" class="dropdown-item">Farmours</a>
                            <a href="initiatives.html#prayaas" class="dropdown-item">Prayaas</a>
                            <a href="initiatives.html#yoga-kutumb" class="dropdown-item">Yoga Kutumb</a>
                            <a href="initiatives.html#heritage" class="dropdown-item">Social Heritage Walk</a>
                        </div>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="research.html" class="nav-link">Research</a>
                        <div class="dropdown">
                            <a href="research.html#rivers" class="dropdown-item">Rivers of Chhattisgarh</a>
                            <a href="research.html#edusuto" class="dropdown-item">EduSuTo Courses</a>
                            <a href="research.html#ijmeer" class="dropdown-item">IJMEER</a>
                        </div>
                    </li>
                    <li class="nav-item has-dropdown">
                        <a href="emerging.html" class="nav-link">Emerging</a>
                        <div class="dropdown">
                            <a href="emerging.html#radio" class="dropdown-item">Community Radio</a>
                            <a href="emerging.html#guriya" class="dropdown-item">Guriya Magazine</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="impact.html" class="nav-link">Impact</a></li>
                    <li class="nav-item"><a href="resources.html" class="nav-link">Resources</a></li>
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="get-involved.html" class="btn-cta">Get Involved</a></li>
                </ul>
                <div class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
        <div class="mobile-drawer" id="mobile-drawer">
             <div class="drawer-header">
                <h2>MEER</h2>
                <span class="close-drawer">&times;</span>
             </div>
             <ul class="mobile-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="initiatives.html">Initiatives</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="emerging.html">Emerging</a></li>
                <li><a href="impact.html">Impact</a></li>
                <li><a href="resources.html">Resources</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="get-involved.html">Get Involved</a></li>
             </ul>
        </div>
    </header>
    `,
    footer: `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img src="assets/images/logo.png" alt="Meer Foundation" style="height: 80px; margin-bottom: 1rem;">
                    <h3>Meer Foundation</h3>
                    <p>Empowering rural communities across Chhattisgarh through education, environmental conservation, and sustainable development since 2011.</p>
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">Our Story</a></li>
                        <li><a href="initiatives.html">Initiatives</a></li>
                        <li><a href="impact.html">Our Impact</a></li>
                        <li><a href="get-involved.html">Volunteer</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Legal</h3>
                    <ul>
                         <li><a href="#">Registration Act 1973</a></li>
                         <li><a href="#">12A & 80G Certified</a></li>
                         <li><a href="#">CSR-1 Compliant</a></li>
                         <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact</h3>
                    <p>Housing Board Colony,<br>Dhamtari, Chhattisgarh</p>
                    <p>Email: meercare@live.com</p>
                    <p>Phone: +91 9826121177</p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; 2011–Present Meer Foundation. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) headerPlaceholder.innerHTML = components.header;

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = components.footer;

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Sticky Header Logic
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Logic
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.querySelector('.close-drawer');

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', () => drawer.classList.add('active'));
        closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
        
        // Close drawer on link click
        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => drawer.classList.remove('active'));
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
