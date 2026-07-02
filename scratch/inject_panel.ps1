$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse

$foucScript = @"
<script>
  (function(){
    var t=localStorage.getItem('mf-theme');
    if(t)document.documentElement.setAttribute('data-theme',t);
    else if(matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.setAttribute('data-theme','dark');
    var l=localStorage.getItem('mf-lang');
    if(l)document.documentElement.setAttribute('lang',l);
  })();
</script>
<link rel="stylesheet" href="assets/css/dark-mode.css">
"@

$panelHtml = @"
<!-- Floating Control Panel -->
<link rel="stylesheet" href="assets/css/styles.css">
<button id="mf-controls-fab" class="mf-controls-fab" aria-label="Site controls">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
</button>

<div id="mf-controls-panel" class="mf-controls-panel" role="dialog" aria-modal="true">
  <div class="panel-header">
    <h3 data-i18n="controls.title">Site Controls</h3>
    <button id="mf-panel-close" class="panel-close-btn">&times;</button>
  </div>
  
  <div class="panel-section">
    <span class="panel-section-title" data-i18n="controls.language">Language</span>
    <select id="mf-lang-select" class="panel-select">
      <option value="en">English</option>
      <option value="hi">हिन्दी (Hindustani)</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="it">Italiano</option>
      <option value="nl">Nederlands</option>
      <option value="pt">Português</option>
    </select>
  </div>
  
  <div class="panel-section">
    <span class="panel-section-title" data-i18n="controls.theme">Theme</span>
    <div class="theme-toggle-wrapper">
      <button class="theme-btn active" data-theme="light" data-i18n="controls.theme.light">Light</button>
      <button class="theme-btn" data-theme="dark" data-i18n="controls.theme.dark">Dark</button>
    </div>
  </div>
  
  <div class="panel-section">
    <span class="panel-section-title" data-i18n="controls.region">Region</span>
    <select id="mf-region-select" class="panel-select">
      <option value="IN">India (₹ INR)</option>
      <option value="US">United States ($ USD)</option>
      <option value="GB">United Kingdom (£ GBP)</option>
      <option value="EU">Europe (€ EUR)</option>
      <option value="DE">Germany (€ EUR)</option>
      <option value="ES">Spain (€ EUR)</option>
      <option value="FR">France (€ EUR)</option>
      <option value="IT">Italy (€ EUR)</option>
      <option value="NL">Netherlands (€ EUR)</option>
      <option value="PT">Portugal (€ EUR)</option>
    </select>
  </div>
</div>
<script src="assets/js/main.js"></script>
"@

foreach ($file in $htmlFiles) {
    if ($file.FullName -like "*backups*") { continue }
    if ($file.FullName -like "*scratch*") { continue }

    $content = Get-Content $file.FullName -Raw
    
    # Inject FOUC script before </head> if not already present
    if ($content -notmatch "mf-theme") {
        $content = $content -replace "(?i)</head>", "$foucScript`n</head>"
    }
    
    # Inject Panel before </body> if not already present
    if ($content -notmatch "mf-controls-fab") {
        # Check if main.js is already there so we don't duplicate
        if ($content -match "assets/js/main.js") {
            # Strip out the <script src="assets/js/main.js"></script> from panelHtml since it's already there
            $cleanPanelHtml = $panelHtml -replace '<script src="assets/js/main.js"></script>', ''
            $content = $content -replace "(?i)</body>", "$cleanPanelHtml`n</body>"
        } else {
            $content = $content -replace "(?i)</body>", "$panelHtml`n</body>"
        }
    }
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
