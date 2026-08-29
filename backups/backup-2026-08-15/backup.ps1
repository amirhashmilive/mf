# ============================================================
# backup.ps1 - Meer Foundation Website Automated Date-Based Backup
# ============================================================
# Maintains 10 distinct dates of complete website backups in:
# backups/backup-YYYY-MM-DD/
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
$MaxDistinctDates = if ($Config.maxDistinctDates) { [int]$Config.maxDistinctDates } else { 10 }
$FolderPrefix = if ($Config.folderPrefix) { $Config.folderPrefix } else { "backup-" }
$DateFormat = if ($Config.dateFormat) { $Config.dateFormat } else { "yyyy-MM-dd" }
$LogFile = Join-Path $SourceDir $Config.logFile
$ExcludePatterns = $Config.exclude

# -- Create backup root if needed -----------------------------
if (-not (Test-Path $BackupRoot)) {
    New-Item -Path $BackupRoot -ItemType Directory -Force | Out-Null
    Write-Host "[INFO] Created backup root directory: $BackupRoot" -ForegroundColor Cyan
}

# -- Generate date string for folder naming -------------------
$DateStr = Get-Date -Format $DateFormat
$TimestampFull = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$BackupFolderName = "$FolderPrefix$DateStr"
$BackupDir = Join-Path $BackupRoot $BackupFolderName

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  MEER FOUNDATION - Automated Date-Based Backup" -ForegroundColor Cyan
Write-Host "  Target Date: $DateStr" -ForegroundColor Cyan
Write-Host "  Destination: $BackupDir" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# -- Clean or prepare today's target folder -------------------
if (Test-Path $BackupDir) {
    Write-Host "[INFO] Updating existing backup for today: $BackupFolderName" -ForegroundColor Yellow
} else {
    New-Item -Path $BackupDir -ItemType Directory -Force | Out-Null
    Write-Host "[INFO] Created new daily backup folder: $BackupFolderName" -ForegroundColor Green
}

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

Write-Host "[INFO] Copying $($FilesToCopy.Count) files to $BackupFolderName..." -ForegroundColor Green

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

# -- Prune old backups to keep max 10 distinct dates ----------
# Look for backup-YYYY-MM-DD as well as legacy timestamped directories
$DateBackups = Get-ChildItem -Path $BackupRoot -Directory |
    Where-Object { $_.Name -match '^backup-\d{4}-\d{2}-\d{2}$' } |
    Sort-Object Name

# Clean legacy timestamp folders (yyyy-MM-dd_HHmmss) if present
$LegacyBackups = Get-ChildItem -Path $BackupRoot -Directory |
    Where-Object { $_.Name -match '^\d{4}-\d{2}-\d{2}_\d{6}$' }

foreach ($Legacy in $LegacyBackups) {
    Write-Host "[CLEANUP] Removing legacy timestamped backup: $($Legacy.Name)" -ForegroundColor Yellow
    Remove-Item -Path $Legacy.FullName -Recurse -Force
}

# Refresh list of date backups after legacy cleanup
$DateBackups = Get-ChildItem -Path $BackupRoot -Directory |
    Where-Object { $_.Name -match '^backup-\d{4}-\d{2}-\d{2}$' } |
    Sort-Object Name

$PrunedCount = 0
if ($DateBackups.Count -gt $MaxDistinctDates) {
    $RemoveCount = $DateBackups.Count - $MaxDistinctDates
    $ToRemove = $DateBackups | Select-Object -First $RemoveCount
    foreach ($Old in $ToRemove) {
        Write-Host "[ROTATION] Pruning oldest backup (capped at $MaxDistinctDates dates): $($Old.Name)" -ForegroundColor Yellow
        Remove-Item -Path $Old.FullName -Recurse -Force
        $PrunedCount++
    }
}

# -- Write log entry ------------------------------------------
$LogDir = Split-Path -Parent $LogFile
if (-not (Test-Path $LogDir)) {
    New-Item -Path $LogDir -ItemType Directory -Force | Out-Null
}
$LogEntry = "[$TimestampFull] Backup: $BackupFolderName | Files: $CopiedCount | Size: $BackupSizeMB MB | Errors: $ErrCount | Pruned: $PrunedCount | Retained Dates: $([math]::Min($DateBackups.Count, $MaxDistinctDates))"
Add-Content -Path $LogFile -Value $LogEntry -Encoding UTF8

# -- Summary --------------------------------------------------
Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  DATE-BASED BACKUP COMPLETE" -ForegroundColor Green
Write-Host "  Directory: $BackupFolderName" -ForegroundColor Green
Write-Host "  Files:     $CopiedCount copied" -ForegroundColor Green
Write-Host "  Size:      $BackupSizeMB MB" -ForegroundColor Green
Write-Host "  Errors:    $ErrCount" -ForegroundColor Green
Write-Host "  Pruned:    $PrunedCount old backup date(s) removed" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""

exit 0
