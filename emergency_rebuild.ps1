
$header = @"
    <!-- Header Section -->
    <header>
        <div class="nav-container">
            <a href="index.html" class="logo-link">
                <img class="logo-header" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation Logo">
            </a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a class="nav-link">Initiatives <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown">
                        <a href="bolti-nadi.html" class="dropdown-link">Bolti Nadi</a>
                        <a href="farmours.html" class="dropdown-link">Farmours</a>
                        <a href="prayaas.html" class="dropdown-link">Prayaas</a>
                        <a href="yoga-kutumb.html" class="dropdown-link">Yoga Kutumb</a>
                        <a href="social-heritage-walk.html" class="dropdown-link">Social Heritage Walk</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Research <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown">
                        <a href="rivers-chhattisgarh.html" class="dropdown-link">Rivers of Chhattisgarh</a>
                        <a href="edusuto-courses.html" class="dropdown-link">EduSuTo Courses</a>
                        <a href="ijmeer.html" class="dropdown-link">IJMEER Journal</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Emerging <i class="fas fa-chevron-down"></i></a>
                    <div class="dropdown">
                        <a href="community-radio.html" class="dropdown-link">Community Radio</a>
                        <a href="guriya-magazine.html" class="dropdown-link">Guriya Magazine</a>
                    </div>
                </li>
                <li class="nav-item"><a href="impact.html" class="nav-link">Impact</a></li>
                <li class="nav-item"><a href="resources.html" class="nav-link">Resources</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                <li class="nav-item"><a href="get-involved.html" class="nav-link">Get Involved</a></li>
                <li><a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm">DONATE NOW</a></li>
            </ul>
            <div class="hamburger"><i class="fas fa-bars"></i></div>
        </div>
    </header>

    <!-- Mobile Sidebar -->
    <div class="mobile-sidebar">
        <div class="sidebar-close"><i class="fas fa-times"></i></div>
        <div class="sidebar-links">
            <a href="index.html" class="sidebar-link">Home</a>
            <a href="bolti-nadi.html" class="sidebar-link">Bolti Nadi</a>
            <a href="farmours.html" class="sidebar-link">Farmours</a>
            <a href="impact.html" class="sidebar-link">Impact</a>
            <a href="resources.html" class="sidebar-link">Resources</a>
            <a href="contact.html" class="sidebar-link">Contact</a>
            <a href="get-involved.html" class="sidebar-link">Get Involved</a>
            <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm" style="margin-top: 20px; text-align: center;">DONATE NOW</a>
        </div>
    </div>
"@

$footer = @"
    <!-- Footer Section -->
    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img class="footer-logo" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation">
                    <p>Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
                    <div class="social-icons">
                        <a href="https://x.com/meerfoundations/" target="_blank"><i class="fab fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com/meerfoundation/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/meerfoundations/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/meerfoundation/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.youtube.com/@meerfoundations" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Transparency</h4>
                    <p>NGO Darpan ID: CG/2018/0191949</p>
                    <p>PAN: AACAM4289J</p>
                    <p>12A | 80G | CSR-1 Registered</p>
                </div>
                <div class="footer-col">
                    <h4>Contact Details</h4>
                    <p>House No 103, Housing Board Colony, Hatkeshar, Dhamtari, Chhattisgarh 493773</p>
                    <p>meercare@live.com</p>
                    <p>+91 98261 21177</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Meer Foundation. All rights reserved.</p>
            </div>
        </div>
    </footer>
"@

function Create-Page {
    param($Filename, $Title, $Content)
    
    $html = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$Title | Meer Foundation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
</head>
<body>
$header
    <main>
$Content
    </main>
$footer
    <script src="assets/js/main.js"></script>
</body>
</html>
"@
    $html | Set-Content $Filename
}

# --- 1. INDEX.HTML ---
$indexContent = @"
        <section class="hero" style="background: linear-gradient(rgba(10,37,64,0.85), rgba(10,37,64,0.85)), url('images/hero-home.png') center/cover;">
            <div class="container fade-in">
                <p style="text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 20px; color: rgba(255,255,255,0.9);">Meer Foundation · Est. 2011 · Chhattisgarh</p>
                <h1>Empowering Communities,<br>Restoring Nature.</h1>
                <p>Working with people, never for them. We build self-reliant rural communities across Chhattisgarh through education, environmental conservation, and sustainable livelihoods.</p>
                <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                    <a href="#initiatives" class="btn-hero btn-primary">Our Initiatives</a>
                    <a href="get-involved.html" class="btn-hero btn-outline">Start Helping</a>
                </div>
            </div>
        </section>

        <section id="milestones" class="section-padding" style="background: white;">
            <div class="container">
                <div style="text-align: center; margin-bottom: 60px;">
                    <span class="calligraphy" style="font-size: 2rem;">A Legacy of Change</span>
                    <h2>Milestones & Achievements</h2>
                </div>
                <div class="initiative-grid">
                    <div class="initiative-card">
                        <i class="fas fa-droplet"></i>
                        <h3>Bolti Nadi · River Restoration</h3>
                        <p>Successfully restored and rejuvenated local rivers and streams, ensuring clean drinking water for over 20 million people across Chhattisgarh.</p>
                        <div style="font-weight: 800; margin-top: 15px;">2016 - Present | 15+ Rivers</div>
                    </div>
                    <div class="initiative-card">
                        <i class="fas fa-flag"></i>
                        <h3>Tiranga World Record 2019</h3>
                        <p>15-kilometer long human chain in Raipur, Chhattisgarh. A historic achievement of national unity with 40+ NGOs, CRPF, and students.</p>
                        <div style="font-weight: 800; margin-top: 15px;">11 August 2019 | 15 KM Chain</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="initiatives" class="section-padding" style="background: var(--bg-light);">
            <div class="container">
                <h2>Our Impact Areas</h2>
                <div class="initiative-grid">
                    <div class="initiative-card">
                        <i class="fas fa-water"></i>
                        <h3>Bolti Nadi</h3>
                        <p>Protecting river basins and ensuring water security.</p>
                        <a href="bolti-nadi.html" style="font-weight: 700; text-decoration: none; color: #3b82f6;">Learn More &rarr;</a>
                    </div>
                    <div class="initiative-card">
                        <i class="fas fa-wheat-awn"></i>
                        <h3>Farmours</h3>
                        <p>Sustainable livelihoods and organic farming.</p>
                        <a href="farmours.html" style="font-weight: 700; text-decoration: none; color: #3b82f6;">Learn More &rarr;</a>
                    </div>
                    <div class="initiative-card">
                        <i class="fas fa-book-open"></i>
                        <h3>Prayaas</h3>
                        <p>Education and digital literacy for rural learners.</p>
                        <a href="prayaas.html" style="font-weight: 700; text-decoration: none; color: #3b82f6;">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
"@
Create-Page "index.html" "Sustainable Change for Chhattisgarh" $indexContent

# --- 2. RIVERS-CHHATTISGARH.HTML ---
# Adding Chart.js only to this page
$riversContent = @"
        <section class="hero" style="background: linear-gradient(rgba(10,37,64,0.9), rgba(10,37,64,0.9)), url('images/hero-home.png') center/cover; padding: 100px 0; text-align: center;">
            <div class="container fade-in">
                <span class="calligraphy">Research & Conservation</span>
                <h1 style="color: white;">Rivers of Chhattisgarh</h1>
                <p style="margin: 0 auto; margin-bottom: 40px;">Scientific data dashboard monitoring the lifelines of over 20 million people.</p>
            </div>
        </section>

        <section class="section-padding">
            <div class="container">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: var(--shadow-md);">
                        <h3>Mahanadi Basin</h3>
                        <canvas id="mahanadiChart" style="margin-top: 20px;"></canvas>
                        <p style="margin-top: 20px;">Health Index: 85% | Status: Good</p>
                    </div>
                    <div style="background: white; padding: 40px; border-radius: 20px; box-shadow: var(--shadow-md);">
                        <h3>Sheonath Basin</h3>
                        <canvas id="sheonathChart" style="margin-top: 20px;"></canvas>
                        <p style="margin-top: 20px;">Health Index: 74% | Status: Moderate</p>
                    </div>
                </div>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                new Chart(document.getElementById('mahanadiChart'), { type: 'doughnut', data: { labels: ['Clean', 'Polluted'], datasets: [{ data: [85, 15], backgroundColor: ['#3b82f6', '#e2e8f0'] }] } });
                new Chart(document.getElementById('sheonathChart'), { type: 'doughnut', data: { labels: ['Clean', 'Polluted'], datasets: [{ data: [74, 26], backgroundColor: ['#3b82f6', '#e2e8f0'] }] } });
            });
        </script>
"@
Create-Page "rivers-chhattisgarh.html" "Rivers of Chhattisgarh Dashboard" $riversContent

# --- 3. BOLTI-NADI.HTML ---
$boltiContent = @"
        <section class="hero">
            <div class="container">
                <h1>Bolti Nadi</h1>
                <p>Protecting Chhattisgarh's lifelines through community-led monitoring and flow restoration.</p>
            </div>
        </section>
        <section class="section-padding">
            <div class="container">
                <h2>Our Water Initiatives</h2>
                <div class="initiative-grid">
                    <div class="initiative-card">
                        <i class="fas fa-droplet"></i>
                        <h3>Water Monitoring</h3>
                        <p>Regular testing of chemical runoff and pH levels across 45 monitoring stations.</p>
                    </div>
                    <div class="initiative-card">
                        <i class="fas fa-users-gear"></i>
                        <h3>Village Committees</h3>
                        <p>Aiding local communities in managing their catchment areas sustainably.</p>
                    </div>
                </div>
            </div>
        </section>
"@
Create-Page "bolti-nadi.html" "Bolti Nadi: Save River Initiative" $boltiContent

# Repeating for other pages with simplified base content to ensure speed and consistency
$genericPages = @(
    @("farmours.html", "Farmours", "Sustainable livelihoods and organic farming for smallholder households."),
    @("prayaas.html", "Prayaas", "Education and digital literacy for rural learners."),
    @("yoga-kutumb.html", "Yoga Kutumb", "Holistic health through ancient wisdom."),
    @("social-heritage-walk.html", "Social Heritage Walk", "Connecting with history through local exploration."),
    @("edusuto-courses.html", "EduSuTo Courses", "Climate and sustainability training for youth."),
    @("ijmeer.html", "IJMEER Journal", "International scholarly journal for multidisciplinary research."),
    @("community-radio.html", "Community Radio", "Upcoming platform for last-mile connectivity."),
    @("guriya-magazine.html", "Guriya Magazine", "Monthly handwritten magazine for local culture."),
    @("impact.html", "Our Impact", "150+ Villages Impacted, 22,000+ Students Taught."),
    @("resources.html", "Resources", "Annual reports, research papers, and educational toolkits."),
    @("contact.html", "Contact Us", "Get in touch with Meer Foundation."),
    @("get-involved.html", "Get Involved", "Partner with us or volunteer for change."),
    @("terms.html", "Terms & Conditions", "Privacy and usage policies."),
    @("privacy.html", "Privacy Policy", "Data protection and privacy standards."),
    @("sitemap.html", "Sitemap", "Universal navigation guide.")
)

foreach ($p in $genericPages) {
    $content = @"
        <section class="hero">
            <div class="container">
                <h1>$($p[1])</h1>
                <p>$($p[2])</p>
            </div>
        </section>
        <section class="section-padding">
            <div class="container">
                <h2>Program Details</h2>
                <p>Meer Foundation is committed to excellence in $($p[1]). Our work in this area has impacted thousands of lives across Chhattisgarh.</p>
            </div>
        </section>
"@
    Create-Page $p[0] $p[1] $content
}

Write-Host "Emergency Rebuild Complete. All pages standardized."
