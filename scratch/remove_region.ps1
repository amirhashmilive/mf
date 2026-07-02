$files = Get-ChildItem -Path "d:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website" -Filter "*.html" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Regex to find and remove the panel-section containing Region
    $pattern = '(?s)<div class="panel-section">\s*<span class="panel-section-title" data-i18n="controls\.region">Region</span>.*?</div>'
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, ''
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
