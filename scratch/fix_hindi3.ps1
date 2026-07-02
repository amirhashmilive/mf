$root = "D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website"
$utf8 = [System.Text.Encoding]::UTF8
$noBom = New-Object System.Text.UTF8Encoding($false)
$n = 0

# The bad bytes we found: 195,160,194,164,194,185,195,160,194,164,194,191,195,160,194,164,194,168,195,160,194,165,194,141,195,160,194,164,194,166,195,160,194,165,226,130,172
$badBytes = [byte[]](195,160,194,164,194,185,195,160,194,164,194,191,195,160,194,164,194,168,195,160,194,165,194,141,195,160,194,164,194,166,195,160,194,165,226,130,172)
$badHindi = $utf8.GetString($badBytes)

# The correct Hindi word: हिंदी
# UTF-8 bytes: E0 A4 B9 E0 A4 BF E0 A4 A8 E0 A5 8D E0 A4 A6 E0 A5 80
$goodBytes = [byte[]](0xE0,0xA4,0xB9,0xE0,0xA4,0xBF,0xE0,0xA4,0xA8,0xE0,0xA5,0x8D,0xE0,0xA4,0xA6,0xE0,0xA5,0x80)
$goodHindi = $utf8.GetString($goodBytes)

Write-Host "Bad Hindi string: '$badHindi' (len=$($badHindi.Length))"
Write-Host "Good Hindi string: '$goodHindi' (len=$($goodHindi.Length))"

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
