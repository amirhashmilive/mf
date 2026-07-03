import os
import re
import sys
from pathlib import Path

# Paths
try:
    # If run from scripts/, move up one level
    ROOT = Path(__file__).resolve().parent.parent
except NameError:
    # Fallback if __file__ is not defined
    ROOT = Path.cwd()

# The maximum length of the filename (including the .webp extension)
MAX_LEN = 50

# Valid image extensions to check for format compliance
IMG_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"}

# Exclusions
SKIP_DIRS = {"backups", "node_modules", ".git", ".agents", "scratch"}
SKIP_FILES = {"favicon.ico", "favicon.svg"}

def check_images():
    errors = []
    
    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Filter out skipped directories
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        
        for fname in filenames:
            if fname in SKIP_FILES:
                continue
                
            fpath = Path(dirpath) / fname
            ext = fpath.suffix.lower()
            
            # 1. Enforce WebP format
            if ext in IMG_EXTS and ext != ".webp":
                errors.append(f"FORMAT ERROR: '{fpath.relative_to(ROOT)}' is a {ext} file. Only .webp is allowed.")
                continue
            
            # Check rules for webp files
            if ext == ".webp":
                # 2. Enforce max length
                if len(fname) > MAX_LEN:
                    errors.append(f"LENGTH ERROR: '{fname}' is {len(fname)} chars. Must be <= {MAX_LEN} chars.")
                
                # 3. Enforce lowercase (check stem)
                stem = fpath.stem
                if stem != stem.lower():
                    errors.append(f"CASE ERROR: '{fname}' contains uppercase letters. Must be all lowercase.")
                
                # 4. Enforce valid characters (no special chars, only a-z, 0-9, hyphens)
                if not re.match(r'^[a-z0-9-]+$', stem.lower()):
                    errors.append(f"CHAR ERROR: '{fname}' contains special characters or spaces. Use only letters, numbers, and hyphens.")

    if errors:
        print("=" * 60)
        print("  IMAGE POLICY VIOLATIONS DETECTED")
        print("=" * 60)
        for err in errors:
            print(f"✗ {err}")
        print("=" * 60)
        print("Please fix these errors before committing.")
        sys.exit(1)
    else:
        print("✓ All images comply with the formatting and naming rules.")
        sys.exit(0)

if __name__ == '__main__':
    check_images()
