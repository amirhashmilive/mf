"""
Convert all images to .webp and enforce naming rules.
- Converts PNG/JPG/JPEG to .webp (quality 85)
- Renames files to lowercase, max 50 chars, only [a-z0-9-]
- Updates all HTML/CSS/JS references
- Leaves favicon.svg and favicon.ico as-is (special browser requirements)
- Skips backups/ directory
"""

import os
import sys
# Force UTF-8 output on Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')
import re
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("ERROR: Pillow not installed. Run: pip install Pillow")
    sys.exit(1)

ROOT = Path(r"D:\DRIVE (Ai) Agents\00 Projects\Meer Foundation Website")
SKIP_DIRS = {"backups", "node_modules", ".git", ".agents"}
# SVG favicons and .ico are special browser requirements — don't convert
SKIP_FILES = {"favicon.svg", "favicon.ico"}
CONVERTIBLE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".bmp"}
WEBP_QUALITY = 85

# ─── Naming helpers ───────────────────────────────────────────────

def sanitize_name(name: str) -> str:
    """Convert a filename (without ext) to lowercase, a-z 0-9 hyphens only, max 50 chars."""
    # Lowercase
    name = name.lower()
    # Replace underscores, spaces, dots with hyphens
    name = re.sub(r'[_\s.]+', '-', name)
    # Replace % encoded sequences with hyphen
    name = re.sub(r'%[0-9a-fA-F]{2}', '-', name)
    # Replace & and special chars with hyphen
    name = re.sub(r'[^a-z0-9-]', '-', name)
    # Collapse multiple hyphens
    name = re.sub(r'-+', '-', name)
    # Strip leading/trailing hyphens
    name = name.strip('-')
    # Truncate to 50 chars (including .webp = 5 chars, so stem max 45)
    if len(name) > 45:
        name = name[:45].rstrip('-')
    return name


def build_rename_map(files: list[Path]) -> dict[Path, Path]:
    """Build old_path → new_path mapping for all convertible images."""
    rename_map = {}
    # Track new names per directory to avoid collisions
    used_names: dict[Path, set[str]] = {}

    for f in files:
        parent = f.parent
        stem = f.stem
        ext = f.suffix.lower()

        if parent not in used_names:
            used_names[parent] = set()

        new_stem = sanitize_name(stem)
        new_name = f"{new_stem}.webp"

        # Handle collision
        counter = 2
        while new_name in used_names[parent]:
            candidate = f"{new_stem}-{counter}"
            if len(candidate) > 45:
                candidate = candidate[:45].rstrip('-')
            new_name = f"{candidate}.webp"
            counter += 1

        used_names[parent].add(new_name)
        rename_map[f] = parent / new_name

    return rename_map


# ─── Reference update helpers ─────────────────────────────────────

def build_reference_replacements(rename_map: dict[Path, Path]) -> list[tuple[str, str]]:
    """Build list of (old_reference, new_reference) pairs for text replacement."""
    replacements = []

    for old_path, new_path in rename_map.items():
        # Compute relative paths from project root
        old_rel = old_path.relative_to(ROOT).as_posix()
        new_rel = new_path.relative_to(ROOT).as_posix()

        # Plain reference
        replacements.append((old_rel, new_rel))

        # URL-encoded version (spaces → %20, & → %26, etc.)
        old_encoded = old_rel.replace(' ', '%20').replace('&', '%26')
        if old_encoded != old_rel:
            replacements.append((old_encoded, new_rel))

        # Also handle references with just filename (no directory)
        old_name = old_path.name
        new_name = new_path.name
        old_name_encoded = old_name.replace(' ', '%20').replace('&', '%26')

        # Don't add bare filename replacements if they're too generic
        # (they could match unintended strings)

    # Sort by length descending so longer paths are replaced first
    replacements.sort(key=lambda x: len(x[0]), reverse=True)
    return replacements


def update_references_in_file(filepath: Path, replacements: list[tuple[str, str]]) -> bool:
    """Update image references in a single file. Returns True if changes were made."""
    try:
        content = filepath.read_text(encoding='utf-8', errors='replace')
    except Exception as e:
        print(f"  WARN: Could not read {filepath}: {e}")
        return False

    original = content
    for old_ref, new_ref in replacements:
        content = content.replace(old_ref, new_ref)

    if content != original:
        try:
            filepath.write_text(content, encoding='utf-8')
            return True
        except Exception as e:
            print(f"  ERROR: Could not write {filepath}: {e}")
            return False
    return False


# ─── Main ─────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  IMAGE CONVERSION TO WEBP")
    print("=" * 60)

    # Step 1: Find all convertible images (skip backups, skip special files)
    all_images = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Skip excluded directories
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fname in filenames:
            if fname in SKIP_FILES:
                continue
            fpath = Path(dirpath) / fname
            if fpath.suffix.lower() in CONVERTIBLE_EXTS:
                all_images.append(fpath)

    print(f"\n[1/4] Found {len(all_images)} convertible images:\n")
    for img in all_images:
        rel = img.relative_to(ROOT)
        size_kb = img.stat().st_size / 1024
        print(f"  {rel}  ({size_kb:.0f} KB)")

    # Step 2: Build rename map
    rename_map = build_rename_map(all_images)

    print(f"\n[2/4] Rename mapping:\n")
    for old, new in rename_map.items():
        old_rel = old.relative_to(ROOT)
        new_rel = new.relative_to(ROOT)
        if old_rel != new_rel:
            print(f"  {old_rel}")
            print(f"    → {new_rel}")
        else:
            print(f"  {old_rel} (name OK, converting format)")

    # Step 3: Convert images
    print(f"\n[3/4] Converting images to .webp...\n")
    converted = 0
    total_old_size = 0
    total_new_size = 0

    for old_path, new_path in rename_map.items():
        old_rel = old_path.relative_to(ROOT)
        new_rel = new_path.relative_to(ROOT)
        old_size = old_path.stat().st_size

        try:
            img = Image.open(old_path)
            # Convert to RGB if necessary (e.g., RGBA PNGs)
            if img.mode in ('RGBA', 'LA', 'P'):
                # For RGBA, save as webp with alpha
                img.save(str(new_path), 'WEBP', quality=WEBP_QUALITY, method=6)
            else:
                img = img.convert('RGB')
                img.save(str(new_path), 'WEBP', quality=WEBP_QUALITY, method=6)

            new_size = new_path.stat().st_size
            total_old_size += old_size
            total_new_size += new_size
            savings = (1 - new_size / old_size) * 100 if old_size > 0 else 0

            print(f"  ✓ {old_rel} → {new_rel.name}")
            print(f"    {old_size/1024:.0f} KB → {new_size/1024:.0f} KB ({savings:.0f}% smaller)")

            # Delete old file if the new file has a different path
            if old_path != new_path and old_path.exists():
                old_path.unlink()

            converted += 1
        except Exception as e:
            print(f"  ✗ FAILED: {old_rel} — {e}")

    # Step 4: Update references in HTML/CSS/JS files
    print(f"\n[4/4] Updating references in HTML/CSS/JS...\n")
    replacements = build_reference_replacements(rename_map)

    ref_files = []
    for ext in ('*.html', '*.css', '*.js', '*.json'):
        for dirpath, dirnames, filenames in os.walk(ROOT):
            dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
            for fname in filenames:
                fpath = Path(dirpath) / fname
                if fpath.suffix.lower() == ext.replace('*', ''):
                    ref_files.append(fpath)

    updated_files = 0
    for rf in ref_files:
        if update_references_in_file(rf, replacements):
            print(f"  ✓ Updated: {rf.relative_to(ROOT)}")
            updated_files += 1

    # Summary
    print("\n" + "=" * 60)
    print("  CONVERSION COMPLETE")
    print("=" * 60)
    print(f"  Images converted:  {converted}/{len(all_images)}")
    if total_old_size > 0:
        print(f"  Total old size:    {total_old_size/1024/1024:.2f} MB")
        print(f"  Total new size:    {total_new_size/1024/1024:.2f} MB")
        print(f"  Space saved:       {(total_old_size - total_new_size)/1024/1024:.2f} MB ({(1 - total_new_size/total_old_size)*100:.0f}%)")
    print(f"  Files updated:     {updated_files}")
    print("=" * 60)


if __name__ == '__main__':
    main()
