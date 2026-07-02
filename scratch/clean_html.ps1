$htmlFiles = Get-ChildItem -Path "." -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    if ($file.FullName -like "*backups*") { continue }
    if ($file.FullName -like "*scratch*") { continue }

    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    # Remove <link rel="stylesheet" href="assets/css/styles.css"> and any leading whitespace/trailing newlines
    $content = $content -replace '(?m)^[ \t]*<link rel="stylesheet" href="assets/css/styles\.css">\r?\n?', ''
    # Also just in case it's inline without start of line
    $content = $content -replace '<link rel="stylesheet" href="assets/css/styles\.css">\r?\n?', ''
    
    # Remove <script src="assets/js/main.js"></script> and any leading whitespace/trailing newlines
    $content = $content -replace '(?m)^[ \t]*<script src="assets/js/main\.js"></script>\r?\n?', ''
    # Also inline
    $content = $content -replace '<script src="assets/js/main\.js"></script>\r?\n?', ''
    
    if ($original -ne $content) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Cleaned: $($file.Name)"
    }
}
