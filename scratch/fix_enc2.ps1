$root = "D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website"
$utf8 = [System.Text.Encoding]::UTF8
$noBom = New-Object System.Text.UTF8Encoding($false)
$n = 0

Get-ChildItem -Path $root -Filter "*.html" | ForEach-Object {
    $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
    $txt = $utf8.GetString($bytes)
    $orig = $txt

    # Fix double-encoded UTF-8: EspaÃ±ol -> Español
    $badEs = [char]69 + [char]115 + [char]112 + [char]97 + [char]195 + [char]177 + [char]111 + [char]108
    $goodEs = [char]69 + [char]115 + [char]112 + [char]97 + [char]241 + [char]111 + [char]108
    $txt = $txt.Replace($badEs, $goodEs)

    # Fix FranÃ§ais -> Français
    $badFr = [char]70 + [char]114 + [char]97 + [char]110 + [char]195 + [char]167 + [char]97 + [char]105 + [char]115
    $goodFr = [char]70 + [char]114 + [char]97 + [char]110 + [char]231 + [char]97 + [char]105 + [char]115
    $txt = $txt.Replace($badFr, $goodFr)

    # Fix PortuguÃªs -> Português
    $badPt = [char]80 + [char]111 + [char]114 + [char]116 + [char]117 + [char]103 + [char]117 + [char]195 + [char]170 + [char]115
    $goodPt = [char]80 + [char]111 + [char]114 + [char]116 + [char]117 + [char]103 + [char]117 + [char]234 + [char]115
    $txt = $txt.Replace($badPt, $goodPt)

    if ($txt -ne $orig) {
        [System.IO.File]::WriteAllText($_.FullName, $txt, $noBom)
        Write-Host "Fixed: $($_.Name)"
        $n++
    }
}

Write-Host ""
Write-Host "Done. Fixed $n files."
