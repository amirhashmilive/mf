
$copySym = [char]169
$copyText = "$copySym 2026 Meer Foundation. All rights reserved. | <a href=""terms.html"">Terms</a> | <a href=""privacy.html"">Privacy</a>"

$header = @"
<header>
    <div class="container nav-container">
        <a href="index.html" class="logo-link">
            <img class="logo-header" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation Logo">
        </a>
        <ul class="nav-menu">
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">Initiatives <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="bolti-nadi.html" class="dropdown-link">Bolti Nadi</a>
                    <a href="farmours.html" class="dropdown-link">Farmours</a>
                    <a href="prayaas.html" class="dropdown-link">Prayaas</a>
                    <a href="yoga-kutumb.html" class="dropdown-link">Yoga Kutumb</a>
                    <a href="social-heritage-walk.html" class="dropdown-link">Social Heritage Walk</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Research <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="rivers-chhattisgarh.html" class="dropdown-link">Rivers of Chhattisgarh</a>
                    <a href="edusuto-courses.html" class="dropdown-link">EduSuTo Courses</a>
                    <a href="ijmeer.html" class="dropdown-link">IJMEER</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Emerging <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown">
                    <a href="community-radio.html" class="dropdown-link">Community Radio</a>
                    <a href="guriya-magazine.html" class="dropdown-link">Guriya Magazine</a>
                </div>
            </li>
            <li class="nav-item"><a href="impact.html" class="nav-link">Impact</a></li>
            <li class="nav-item"><a href="get-involved.html" class="nav-link">Get Involved</a></li>
            <li><a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm">DONATE NOW</a></li>
        </ul>
        <div class="hamburger"><i class="fas fa-bars"></i></div>
    </div>
</header>
"@

$mobileSidebarHtml = @"
<div class="mobile-sidebar">
    <div class="sidebar-close"><i class="fas fa-times"></i></div>
    <div class="sidebar-links">
        <a href="index.html" class="sidebar-link">Home</a>
        <a href="about.html" class="sidebar-link">About</a>
        <a href="bolti-nadi.html" class="sidebar-link">Bolti Nadi</a>
        <a href="farmours.html" class="sidebar-link">Farmours</a>
        <a href="prayaas.html" class="sidebar-link">Prayaas</a>
        <a href="yoga-kutumb.html" class="sidebar-link">Yoga Kutumb</a>
        <a href="social-heritage-walk.html" class="sidebar-link">Social Heritage Walk</a>
        <a href="rivers-chhattisgarh.html" class="sidebar-link">Rivers of Chhattisgarh</a>
        <a href="edusuto-courses.html" class="sidebar-link">EduSuTo Courses</a>
        <a href="ijmeer.html" class="sidebar-link">IJMEER</a>
        <a href="community-radio.html" class="sidebar-link">Community Radio</a>
        <a href="guriya-magazine.html" class="sidebar-link">Guriya Magazine</a>
        <a href="impact.html" class="sidebar-link">Impact</a>
        <a href="get-involved.html" class="sidebar-link">Get Involved</a>
        <a href="contact.html" class="sidebar-link">Contact</a>
        <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm" style="margin-top: 20px; text-align: center; display: block;">DONATE NOW</a>
    </div>
</div>
"@

$footerHtml = @"
<footer>
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <img class="footer-logo" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation">
                <p>Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
                <div class="social-icons">
                    <a href="https://x.com/meerfoundations/" target="_blank"><i class="fab fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/meerfoundations/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/meerfoundation/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/96394323/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.youtube.com/@meerfoundations" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Explore</h4>
                <div class="footer-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="bolti-nadi.html">Initiatives</a>
                    <a href="rivers-chhattisgarh.html">Research</a>
                    <a href="community-radio.html">Emerging</a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Actions</h4>
                <div class="footer-links">
                    <a href="impact.html">Impact</a>
                    <a href="get-involved.html">Get Involved</a>
                    <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank">Donate</a>
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>$copyText</p>
        </div>
    </div>
</footer>
"@

$files = Get-ChildItem -Path . -Filter "*.html" | Where-Object { $_.Name -ne "unify_pages.ps1" }

foreach ($file in $files) {
    Write-Host "Repairing $($file.Name)..."
    $content = [System.IO.File]::ReadAllText($file.FullName)

    # 1. Standardize Head
    $content = $content -replace '<link rel="icon".*?>', '<link rel="icon" type="image/svg+xml" href="favicon.svg">'

    # 2. Aggressive Header + Sidebar Replacement
    # Matches from the start of <header> to the start of <main>
    $content = $content -replace '(?s)<header>.*?(?=<main>)', "$header`n`n$mobileSidebarHtml`n`n"

    # 3. Footer Replacement
    $content = $content -replace '(?s)<footer>.*?</footer>', $footerHtml

    # Fix any potential encoding artifacts
    $content = $content -replace "[Â]+$copySym", "$copySym"

    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding($false)))
}

Write-Host "Ultra Robust repair complete!"
