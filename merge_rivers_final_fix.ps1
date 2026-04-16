$sourcePath = 'C:\Users\hashm\Desktop\Plan Mode\MF\Resources\rivers of chhattisgarh page.html'
$destPath = 'c:\Users\hashm\Desktop\Workplace Meer Foundation\rivers-chhattisgarh.html'

$content = Get-Content $sourcePath -Raw

# 1. Extract External Libraries (Leaflet, Charts)
$extStart = $content.IndexOf('<!-- Leaflet CSS -->')
$extEnd = $content.IndexOf('</head>')
$externalLibs = $content.Substring($extStart, $extEnd - $extStart)

# 2. Extract Specific Style Block (Rivers Technical Style)
$styleStart = $content.IndexOf('<style>')
$styleEnd = $content.IndexOf('</style>') + 8
$riversStyle = $content.Substring($styleStart, $styleEnd - $styleStart)

# 3. Extract Technical Body Content (Everything inside body except their nav)
$bodyStart = $content.IndexOf('<body>') + 6
$bodyEnd = $content.IndexOf('<div class="nav-bar">') # Source has its own nav at bottom
if ($bodyEnd -lt 0) { $bodyEnd = $content.LastIndexOf('</body>') }
$technicalContent = $content.Substring($bodyStart, $bodyEnd - $bodyStart)

# 4. Extract Technical Scripts (Logic for maps/charts)
$scriptStart = $content.IndexOf('<!-- Leaflet JS -->')
if ($scriptStart -lt 0) { $scriptStart = $content.IndexOf('<script src="https://unpkg.com/leaflet') }
$scriptEnd = $content.LastIndexOf('</body>')
$technicalScripts = $content.Substring($scriptStart, $scriptEnd - $scriptStart)

$header = @"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rivers of Chhattisgarh | Meer Foundation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    $externalLibs
    $riversStyle
    <style>
        /* Resolve conflicts between technical layout and site footer */
        body { padding-bottom: 0px !important; }
        .section { scroll-margin-top: 100px; }
        header { position: sticky !important; }
        .footer-grid { border-top: 1px solid rgba(255,255,255,0.1); }
        /* Ensure technical map doesn't overlap logo */
        #map { z-index: 10 !important; }
    </style>
</head>
<body>
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
                <li><a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm">DONATE NOW</a></li>
            </ul>
        </div>
    </header>

    <div class="mobile-sidebar">
        <div class="sidebar-close"><i class="fas fa-times"></i></div>
        <div class="sidebar-links">
            <a href="index.html" class="sidebar-link">Home</a>
            <a href="impact.html" class="sidebar-link">Impact</a>
            <a href="resources.html" class="sidebar-link">Resources</a>
            <a href="contact.html" class="sidebar-link">Contact</a>
            <a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm" style="margin-left: 0;">DONATE NOW</a>
        </div>
    </div>

    <main id="technical-rivers-content">
        $technicalContent
    </main>

    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-col">
                    <img class="footer-logo" src="images/logo/LOGO_-_MEER_FOUNDATION%20transperent%20horizontal%20logo.png" alt="Meer Foundation">
                    <p>Meer Foundation Est. 2011. Working at the intersection of ecology, education, and community.</p>
                </div>
                <div class="footer-col">
                    <h4>Legitimacy</h4>
                    <p>NGO Darpan ID: CG/2018/0191949</p>
                    <p>PAN: AACAM4289J</p>
                    <p>12A | 80G | CSR-1 Registered</p>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <p>Dhamtari, Chhattisgarh 493773</p>
                    <p>meercare@live.com</p>
                    <p>+91 98261 21177</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Meer Foundation. Research Division.</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/main.js"></script>
    $technicalScripts
</body>
</html>
"@

Set-Content -Path $destPath -Value $header
