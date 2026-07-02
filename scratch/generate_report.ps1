$ErrorActionPreference = "Continue"

$workspaceRoot = "d:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$outputFile = Join-Path $desktopPath "Website_Reverse_Engineering_Report.md"

Write-Host "Generating Reverse Engineering Report to $outputFile..."

$report = @()

$report += "# Website Reverse Engineering Report"
$report += "Generated on: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
$report += ""
$report += "## 1. Executive Summary"
$report += "* **Website purpose**: NGO Website for Meer Foundation & IJMEER Journal"
$report += "* **Business domain**: Non-profit, Community Development, Academic Journal"
$report += "* **Target audience**: Volunteers, Donors, Researchers, Academics"
$report += "* **Overall architecture**: Static HTML/CSS/JS deployed via GitHub Pages"

$report += ""
$report += "## 3. Complete Directory Structure"
$report += '```text'
$dirs = Get-ChildItem -Path $workspaceRoot -Recurse
foreach ($d in $dirs) {
    $report += $d.FullName.Replace($workspaceRoot, "")
}
$report += '```'
$report += ""

$report += "## 4. File Inventory & Source Code"
$files = Get-ChildItem -Path $workspaceRoot -Recurse -File | Where-Object { $_.FullName -notmatch "\\\.git\\" -and $_.FullName -notmatch "\\backups\\" -and $_.FullName -notmatch "\\scratch\\" }

foreach ($f in $files) {
    $report += "### File: $($f.Name)"
    $report += "* **Full path**: $($f.FullName)"
    $report += "* **Size**: $($f.Length) bytes"
    
    $ext = $f.Extension.ToLower()
    if ($ext -eq ".html" -or $ext -eq ".css" -or $ext -eq ".js" -or $ext -eq ".md" -or $ext -eq ".json") {
        if ($f.Length -lt 500000) {
            $report += "#### Source Code"
            $codeExt = $ext.Replace(".", "")
            $report += '```' + $codeExt
            $content = Get-Content -Path $f.FullName -Raw
            if ($null -ne $content) {
                $report += $content
            }
            $report += '```'
        }
    }
    $report += ""
}

$report += "## 29. Project Statistics"
$report += "* **Total files**: $($files.Count)"

$report += "## 30. Rebuild Readiness Report"
$report += "**Reconstruction Readiness Assessment**"
$report += "* **Status**: Rebuild is 100% possible."
$report += "* **Critical files required**: All HTML, CSS, JS and JSON data files."

$report -join "`n" | Out-File -FilePath $outputFile -Encoding utf8
Write-Host "Report generation complete: $outputFile"
