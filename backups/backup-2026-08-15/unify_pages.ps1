
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
            <a href="impact.html" class="sidebar-link">Impact</a>
            <a href="resources.html" class="sidebar-link">Resources</a>
            <a href="contact.html" class="sidebar-link">Contact</a>
            <a href="get-involved.html" class="sidebar-link">Get Involved</a>
            <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm" style="margin-left: 0; text-align: center;">DONATE NOW</a>
        </div>
    </div>
"@

$footer = @"
    <!-- Footer Section -->
    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col" style="display: flex; flex-direction: column; align-items: flex-start;">
                    <img class="footer-logo" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation" style="margin-left: 0;">
                    <p style="text-align: left;">Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
                </div>
                <div class="footer-col">
                    <h4>Transparency</h4>
                    <p>NGO Darpan ID: CG/2018/0191949</p>
                    <p>PAN: AACAM4289J</p>
                    <p>12A | 80G | CSR-1 Registered</p>
                </div>
                <div class="footer-col" style="padding-left: 20px;">
                    <h4>Contact Details</h4>
                    <p>House No 103, Housing Board Colony, Hatkeshar, Dhamtari, Chhattisgarh 493773</p>
                    <p>meercare@live.com</p>
                    <p>+91 98261 21177</p>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="social-icons" style="justify-content: center;">
                    <a href="https://x.com/meerfoundations/" target="_blank"><i class="fab fa-x-twitter"></i></a>
                    <a href="https://www.facebook.com/meerfoundation/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/meerfoundations/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/meerfoundation/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/@meerfoundations" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
                <p style="margin-top: 20px; text-align: center;">&copy; 2026 Meer Foundation. All rights reserved.</p>
            </div>
        </div>
    </footer>
"@

$files = @(
    "index.html",
    "bolti-nadi.html",
    "farmours.html",
    "prayaas.html",
    "yoga-kutumb.html",
    "social-heritage-walk.html",
    "rivers-chhattisgarh.html",
    "edusuto-courses.html",
    "ijmeer.html",
    "community-radio.html",
    "guriya-magazine.html",
    "impact.html",
    "resources.html",
    "contact.html",
    "get-involved.html",
    "initiatives.html",
    "about.html",
    "sitemap.html"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Updating $file..."
        $content = Get-Content $file -Raw
        
        # Replace Header
        $content = $content -replace '(?s)<header>.*?</header>', $header
        
        # Replace Mobile Sidebar if it exists or insert after header
        if ($content -match 'mobile-sidebar') {
            $content = $content -replace '(?s)<div class="mobile-sidebar">.*?</div>', ""
            # Re-insert the mobile sidebar part of the header template which already includes it
        }
        
        # Ensure only one mobile sidebar exists (cleanup if needed)
        # The template now includes both <header> and <div class="mobile-sidebar">
        
        # Replace Footer
        $content = $content -replace '(?s)<footer>.*?</footer>', $footer
        
        # Ensure styles.css
        $content = $content -replace 'assets/css/style.css', 'assets/css/styles.css'
        
        Set-Content $file $content
    }
}
