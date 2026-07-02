$root = "D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website"
$utf8 = [System.Text.Encoding]::UTF8
$noBom = New-Object System.Text.UTF8Encoding($false)
$n = 0

# Build the bad Hindi string using char codes (double-encoded UTF-8 read as UTF-8)
# Original UTF-8 bytes for हिंदी: E0 A4 B9 E0 A4 BF E0 A4 A8 E0 A5 8D E0 A4 A6 E0 A5 80
# When UTF-8 bytes are mis-decoded as Latin-1 then re-encoded as UTF-8, each byte 0xXX becomes C3 (XX-64) or C2 XX
# Result seen: à¤¹à¤¿à¤¨à¥à¤¦à¥€
# We use the good replacement directly in the file as UTF-8

$goodHindi = "हिंदी"
$badHindi = $utf8.GetString([byte[]](0xC3,0xA0,0xC2,0xA4,0xC2,0xB9,0xC3,0xA0,0xC2,0xA4,0xC2,0xBF,0xC3,0xA0,0xC2,0xA4,0xC2,0xA8,0xC3,0xA0,0xC2,0xA5,0xC2,0x81,0xC3,0xA0,0xC2,0xA4,0xC2,0xA6,0xC3,0xA0,0xC2,0xA5,0xC2,0x80))

Get-ChildItem -Path $root -Filter "*.html" | ForEach-Object {
    $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
    $txt = $utf8.GetString($bytes)
    $orig = $txt

    if ($txt.Contains($badHindi)) {
        $txt = $txt.Replace($badHindi, $goodHindi)
        [System.IO.File]::WriteAllText($_.FullName, $txt, $noBom)
        Write-Host "Fixed: $($_.Name)"
        $n++
    }
}

Write-Host ""
Write-Host "Done. Fixed $n files."
