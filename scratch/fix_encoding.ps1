# Fix language option labels (garbled due to encoding mismatch) in all HTML files
$rootPath = "d:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website"
$files = Get-ChildItem -Path $rootPath -Filter "*.html" -Recurse

$badToGood = @{
    'à¤¹à¤¿à¤¨à¥à¤¦à¥€ (Hindustani)' = 'हिंदी (Hindustani)'
    'EspaÃ±ol' = 'Español'
    'FranÃ§ais' = 'Français'
    'PortuguÃªs' = 'Português'
    # Also fix Region labels (may remain in pages the script didn't catch)
    'â‚¹ INR' = '₹ INR'
    'Â£ GBP' = '£ GBP'
    'â‚¬ EUR' = '€ EUR'
    'Â£' = '£'
    'â‚¹' = '₹'
    'â‚¬' = '€'
}

$count = 0
foreach ($file in $files) {
    # Read as raw bytes and decode as UTF-8 properly
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $content = [System.Text.Encoding]::UTF8.GetString($bytes)
    
    $modified = $false
    foreach ($pair in $badToGood.GetEnumerator()) {
        if ($content.Contains($pair.Key)) {
            $content = $content.Replace($pair.Key, $pair.Value)
            $modified = $true
        }
    }
    
    if ($modified) {
        # Write back as UTF-8 without BOM
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
        Write-Host "Fixed encoding: $($file.Name)"
        $count++
    }
}

Write-Host ""
Write-Host "Done. Fixed $count files."
