
$files = Get-ChildItem "*.html"

foreach ($file in $files) {
    Write-Host "Hyper-cleaning $($file.Name)..."
    $content = Get-Content $file.FullName -Raw
    
    # Remove any stray content between </header> and <main> (excluding the mobile sidebar we want)
    # Correct structure: ... </header> \n <!-- Mobile Sidebar --> \n <div class="mobile-sidebar">...</div> \n <main>
    
    # Let's use a very specific approach: 
    # Replace the whole region from </body> start to <main> with a clean template
    
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

    # Remove EVERYTHING between <body...?> and <main> (or the first <section> or <div> that isn't the sidebar)
    # Then insert the template
    $content = $content -replace '(?s)<body(.*?)>.*?(<main|<section|<div id="content"|<div class="content")', {
        param($m)
        "body" + $m.Groups[1].Value + ">`n" + $headerTemplate + "`n" + $m.Groups[2].Value
    }
    
    # Restore the index hero padding which is unique
    if ($file.Name -eq "index.html") {
         $content = $content -replace 'padding: 80px 0 60px;', 'padding: 140px 0;'
    }

    Set-Content $file.FullName $content
}

Write-Host "Hyper-clean Final Purge Complete."
