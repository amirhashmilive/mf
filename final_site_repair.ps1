
$headerTemplate = @"
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
            <a href="impact.html" class="sidebar-link">Impact</a>
            <a href="resources.html" class="sidebar-link">Resources</a>
            <a href="contact.html" class="sidebar-link">Contact</a>
            <a href="get-involved.html" class="sidebar-link">Get Involved</a>
            <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm" style="margin-top: 20px; text-align: center;">DONATE NOW</a>
        </div>
    </div>
"@

$footerTemplate = @"
    <!-- Footer Section -->
    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col" style="display: flex; flex-direction: column; align-items: flex-start;">
                    <img class="footer-logo" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation" style="margin-left: 0;">
                    <p style="text-align: left;">Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
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
                <div class="footer-col" style="padding-left: 20px;">
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

$files = Get-ChildItem "*.html"

foreach ($file in $files) {
    if ($file.Name -eq "index.html") { continue } # Skip index, fixed manually
    
    Write-Host "Cleaning and standardizing $($file.Name)..."
    $content = Get-Content $file.FullName -Raw
    
    # Robust removal of Header/Mobile Sidebar/Footer blocks
    $content = $content -replace '(?s)<!-- Header Section -->.*?<!-- Mobile Sidebar -->', ""
    $content = $content -replace '(?s)<header>.*?</header>', ""
    $content = $content -replace '(?s)<div class="mobile-sidebar">.*?</div>', ""
    $content = $content -replace '(?s)<footer>.*?</footer>', ""
    
    # Standardize Hero Section
    # Extract existing Heading and Description
    if ($content -match '(?s)<section class="hero".*?<h1>(.*?)</h1>.*?<p>(.*?)</p>.*?</div>\s*</section>') {
        $title = $matches[1].Trim()
        $desc = $matches[2].Trim()
        
        $newHero = @"
        <section class="hero" style="background: linear-gradient(rgba(10,37,64,0.85), rgba(10,37,64,0.85)), url('images/hero-home.png') center/cover; padding: 100px 0;">
            <div class="container fade-in">
                <p style="text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 20px; color: rgba(255,255,255,0.8); font-family: 'Montserrat', sans-serif;">Meer Foundation · Est. 2011 · Chhattisgarh</p>
                <h1 style="font-size: clamp(2.5rem, 5vw, 3.5rem); line-height: 1.2; margin-bottom: 20px; font-weight: 800; text-transform: uppercase; color: white;">$title</h1>
                <p style="font-size: 1.1rem; max-width: 800px; line-height: 1.8; opacity: 0.95; margin-bottom: 30px;">$desc</p>
                <div style="display: flex; gap: 1.2rem; flex-wrap: wrap;">
                    <a href="index.html#initiatives" class="btn-modern active" style="padding: 14px 30px; border-radius: 50px; background: #3b82f6; color: white; text-decoration: none;">Explore Initiatives</a>
                    <a href="get-involved.html" class="btn-modern" style="padding: 14px 30px; border-radius: 50px; background: transparent; border: 2px solid white; color: white; text-decoration: none;">Get Involved</a>
                </div>
            </div>
        </section>
"@
        $content = $content -replace '(?s)<section class="hero".*?</section>', $newHero
    }
    
    # Re-insert Header/Footer
    if ($content -match '<body.*?>') {
        $content = $content -replace '(<body.*?>)', "`$1`n$headerTemplate"
    }
    if ($content -match '</body>') {
        $content = $content -replace '(</body>)', "$footerTemplate`n`$1"
    }
    
    # Final cleanup of stray buttons (outside header)
    $content = $content -replace '(?s)<a href="https://pages\.razorpay\.com/.*?" target="_blank" class="btn-donate-sm".*?</a>', ""

    Set-Content $file.FullName $content
}

Write-Host "Site-wide Repair and Hero Standardization Complete."
