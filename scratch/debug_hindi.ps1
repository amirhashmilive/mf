$file = "D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website\yoga-kutumb.html"
$bytes = [System.IO.File]::ReadAllBytes($file)
$txt = [System.Text.Encoding]::UTF8.GetString($bytes)

# Find the Hindi option line
$idx = $txt.IndexOf("Hindustani")
if ($idx -ge 0) {
    $snippet = $txt.Substring([Math]::Max(0, $idx-30), 50)
    Write-Host "Snippet: $snippet"
    
    # Show actual bytes around the area
    $lineStart = $txt.LastIndexOf("`n", $idx)
    $lineEnd = $txt.IndexOf("`n", $idx)
    $line = $txt.Substring($lineStart, $lineEnd - $lineStart)
    Write-Host "Line: $line"
    
    # Get byte values of the garbled chars
    $optStart = $txt.IndexOf("value=`"hi`">", $idx - 200) + "value=`"hi`">".Length
    $optEnd = $txt.IndexOf("</option>", $optStart)
    $badStr = $txt.Substring($optStart, $optEnd - $optStart)
    Write-Host "Bad string length: $($badStr.Length)"
    Write-Host "Chars:"
    for ($i = 0; $i -lt [Math]::Min($badStr.Length, 20); $i++) {
        Write-Host "  [$i] char=$([int][char]$badStr[$i]) '$(if([int][char]$badStr[$i] -gt 31){$badStr[$i]}else{'?'})'"
    }
    
    # Also encode back to bytes
    $strBytes = [System.Text.Encoding]::UTF8.GetBytes($badStr)
    Write-Host "UTF8 bytes: $($strBytes -join ',')"
}
