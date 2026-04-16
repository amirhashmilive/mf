$sourcePath = 'C:\Users\hashm\Desktop\Plan Mode\MF\Resources\rivers of chhattisgarh page.html'
$destPath = 'c:\Users\hashm\Desktop\Workplace Meer Foundation\rivers-chhattisgarh.html'

$content = Get-Content $sourcePath -Raw

# Extract Style
$styleStart = $content.IndexOf('<style>')
$styleEnd = $content.IndexOf('</style>') + 8
$style = $content.Substring($styleStart, $styleEnd - $styleStart)

# Extract Body Content
$bodyStart = $content.IndexOf('<body>') + 6
$bodyEnd = $content.IndexOf('<div class="nav-bar">') # Remove its own nav bar
if ($bodyEnd -lt 0) { $bodyEnd = $content.IndexOf('</body>') }
$body = $content.Substring($bodyStart, $bodyEnd - $bodyStart)

# Extract Scripts (especially the Leaflet stuff)
$scriptsStart = $content.IndexOf('<!-- Leaflet JS -->')
if ($scriptsStart -lt 0) { $scriptsStart = $content.IndexOf('<script src="https://unpkg.com/leaflet') }
$scriptsEnd = $content.IndexOf('</body>')
$scripts = $content.Substring($scriptsStart, $scriptsEnd - $scriptsStart)

# Extract Head elements (Leaflet CSS, ChartJS, etc)
$headStart = $content.IndexOf('<!-- Leaflet CSS -->')
$headEnd = $content.IndexOf('<style>')
$externalHead = $content.Substring($headStart, $headEnd - $headStart)

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
    $externalHead
    $style
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
                <li class="nav-item"><a href="impact.html" class="nav-link">Impact</a></li>
                <li class="nav-item"><a href="resources.html" class="nav-link">Resources</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                <li><a href="https://pages.razorpay.com/pl_P3UWnMipCqTDJM/view" target="_blank" class="btn-donate-sm">DONATE NOW</a></li>
            </ul>
            <div class="hamburger"><i class="fas fa-bars"></i></div>
        </div>
    </header>
"@

$footer = @"
    <footer>
        <div class="footer-container">
            <div class="footer-bottom">
                <p>&copy; 2026 Meer Foundation. Research Cell.</p>
            </div>
        </div>
    </footer>
    <script src="assets/js/main.js"></script>
    $scripts
</body>
</html>
"@

$final = $header + $body + $footer
Set-Content -Path $destPath -Value $final
