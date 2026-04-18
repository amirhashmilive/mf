import sys, os
sys.stdout.reconfigure(encoding='utf-8')

from docx import Document
from pdfminer.high_level import extract_text

BASE_DOCX = r'C:\Users\hashm\Desktop\Plan Mode\MF\Resources'
THESIS_BASE = r'D:\DRIVE (E) MEER GROUP\Amir Hashmi\01 Personal\Education\PhD & Reseaarch\KTUJM\PhD Thesis\THESIS'
FIVE_PILLARS_PATH = os.path.join(THESIS_BASE, r'Thesis Progress Report 03 (07-07-2025 to 06-01-2026)\Five Pillars\Kimi The Penta.docx')
MASTER_PATH = os.path.join(THESIS_BASE, r'Thesis Progress Report 03 (07-07-2025 to 06-01-2026)\00 2026-04 Master.docx')
CG_DIR = os.path.join(THESIS_BASE, r'Data\Litrature reviews\01 Chhattisgarh')
INTERVIEWS_PATH = os.path.join(THESIS_BASE, r'Thesis Progress Report 03 (07-07-2025 to 06-01-2026)\Interview Transcript\Interviews Coding\Interviews Coding.pdf')

def read_docx(path, maxchars=8000):
    try:
        doc = Document(path)
        text = '\n'.join(p.text for p in doc.paragraphs if p.text.strip())
        return text[:maxchars]
    except Exception as e:
        return f"ERROR: {e}"

def read_pdf(path, maxchars=6000):
    try:
        text = extract_text(path)
        return text[:maxchars] if text else "EMPTY PDF"
    except Exception as e:
        return f"ERROR: {e}"

print("=" * 60)
print("1. MEER FOUNDATION INITIATIVES")
print("=" * 60)
print(read_docx(os.path.join(BASE_DOCX, 'Meer Foundation Initiatives.docx'), 10000))

print("\n" + "=" * 60)
print("2. BOLTI NADI INITIATIVE")
print("=" * 60)
print(read_docx(os.path.join(BASE_DOCX, 'Bolti Nadi Initiative.docx'), 8000))

print("\n" + "=" * 60)
print("3. WEBSITE REFERENCE SHORT")
print("=" * 60)
print(read_docx(os.path.join(BASE_DOCX, '2026-03-25 Website ref short.docx'), 6000))

print("\n" + "=" * 60)
print("4. FIVE PILLARS (PENTA MODEL) - KEY SECTIONS")
print("=" * 60)
print(read_docx(FIVE_PILLARS_PATH, 8000))

print("\n" + "=" * 60)
print("5. MASTER THESIS - CG SPECIFIC SECTIONS")
print("=" * 60)
print(read_docx(MASTER_PATH, 8000))
