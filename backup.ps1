# ============================================================
# backup.ps1 - Meer Foundation Website Automated Backup
# ============================================================
# Usage:  powershell -ExecutionPolicy Bypass -File backup.ps1
# ============================================================

param(
    [string]$ConfigPath = "backup-config.json"
)

$ErrorActionPreference = "Stop"

# -- Resolve paths --------------------------------------------
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
if (-not $ScriptDir) { $ScriptDir = (Get-Location).Path }
$ConfigFile = Join-Path $ScriptDir $ConfigPath

# -- Load configuration ---------------------------------------
if (-not (Test-Path $ConfigFile)) {
    Write-Host "[ERROR] Config file not found: $ConfigFile" -ForegroundColor Red
    exit 1
}

$Config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
$SourceDir = $ScriptDir
$BackupRoot = Join-Path $SourceDir $Config.backupDir
$MaxBackups = $Config.maxBackups
$LogFile = Join-Path $SourceDir $Config.logFile
$ExcludePatterns = $Config.exclude

# -- Create backup directory if needed ------------------------
if (-not (Test-Path $BackupRoot)) {
    New-Item -Path $BackupRoot -ItemType Directory -Force | Out-Null
    Write-Host "[INFO] Created backup directory: $BackupRoot" -ForegroundColor Cyan
}

# -- Generate timestamp ---------------------------------------
$Timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$BackupDir = Join-Path $BackupRoot $Timestamp

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  MEER FOUNDATION - Automated Backup" -ForegroundColor Cyan
Write-Host "  Timestamp: $Timestamp" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# -- Collect files to backup ----------------------------------
$AllItems = Get-ChildItem -Path $SourceDir -Recurse -Force -ErrorAction SilentlyContinue

$FilesToCopy = @()
foreach ($Item in $AllItems) {
    $RelativePath = $Item.FullName.Substring($SourceDir.Length + 1)
    $Skip = $false

    foreach ($Pattern in $ExcludePatterns) {
        $Segments = $RelativePath -split '[/\\]'
        foreach ($Seg in $Segments) {
            if ($Seg -like $Pattern) {
                $Skip = $true
                break
            }
        }
        if ($Skip) { break }
    }

    if (-not $Skip -and -not $Item.PSIsContainer) {
        $FilesToCopy += $Item
    }
}

Write-Host "[INFO] Found $($FilesToCopy.Count) files to backup" -ForegroundColor Green

# -- Copy files -----------------------------------------------
$CopiedCount = 0
$ErrCount = 0

foreach ($File in $FilesToCopy) {
    $RelPath = $File.FullName.Substring($SourceDir.Length + 1)
    $DestPath = Join-Path $BackupDir $RelPath
    $DestDir = Split-Path -Parent $DestPath

    try {
        if (-not (Test-Path $DestDir)) {
            New-Item -Path $DestDir -ItemType Directory -Force | Out-Null
        }
        Copy-Item -Path $File.FullName -Destination $DestPath -Force
        $CopiedCount++
    }
    catch {
        Write-Host "[WARN] Failed to copy: $RelPath - $($_.Exception.Message)" -ForegroundColor Yellow
        $ErrCount++
    }
}

# -- Calculate backup size ------------------------------------
$BackupSize = 0
$SizeItems = Get-ChildItem -Path $BackupDir -Recurse -Force -ErrorAction SilentlyContinue
if ($SizeItems) {
    $BackupSize = ($SizeItems | Measure-Object -Property Length -Sum).Sum
}
$BackupSizeMB = [math]::Round($BackupSize / 1MB, 2)

# -- Prune old backups ----------------------------------------
$ExistingBackups = Get-ChildItem -Path $BackupRoot -Directory |
    Where-Object { $_.Name -match '^\d{4}-\d{2}-\d{2}_\d{6}$' } |
    Sort-Object Name

$PrunedCount = 0
if ($ExistingBackups.Count -gt $MaxBackups) {
    $RemoveCount = $ExistingBackups.Count - $MaxBackups
    $ToRemove = $ExistingBackups | Select-Object -First $RemoveCount
    foreach ($Old in $ToRemove) {
        Write-Host "[PRUNE] Removing old backup: $($Old.Name)" -ForegroundColor Yellow
        Remove-Item -Path $Old.FullName -Recurse -Force
        $PrunedCount++
    }
}

# -- Write log entry ------------------------------------------
$LogDir = Split-Path -Parent $LogFile
if (-not (Test-Path $LogDir)) {
    New-Item -Path $LogDir -ItemType Directory -Force | Out-Null
}
$LogEntry = "[$Timestamp] Backup: $BackupDir | Files: $CopiedCount | Size: $BackupSizeMB MB | Errors: $ErrCount | Pruned: $PrunedCount"
Add-Content -Path $LogFile -Value $LogEntry -Encoding UTF8

# -- Summary --------------------------------------------------
Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  BACKUP COMPLETE" -ForegroundColor Green
Write-Host "  Location:  $BackupDir" -ForegroundColor Green
Write-Host "  Files:     $CopiedCount copied" -ForegroundColor Green
Write-Host "  Size:      $BackupSizeMB MB" -ForegroundColor Green
Write-Host "  Errors:    $ErrCount" -ForegroundColor Green
Write-Host "  Pruned:    $PrunedCount old backups removed" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""

exit 0
