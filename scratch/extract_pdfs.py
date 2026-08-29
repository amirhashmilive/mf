import sys, os
sys.stdout.reconfigure(encoding='utf-8')

from pdfminer.high_level import extract_text

THESIS_BASE = r'D:\DRIVE (E) MEER GROUP\Amir Hashmi\01 Personal\Education\PhD & Reseaarch\KTUJM\PhD Thesis\THESIS'
CG_DIR = os.path.join(THESIS_BASE, r'Data\Litrature reviews\01 Chhattisgarh')
INTERVIEWS_PATH = os.path.join(THESIS_BASE, r'Thesis Progress Report 03 (07-07-2025 to 06-01-2026)\Interview Transcript\Interviews Coding\Interviews Coding.pdf')

def read_pdf(path, maxchars=5000):
    try:
        text = extract_text(path)
        return (text or "EMPTY")[:maxchars]
    except Exception as e:
        return f"ERROR: {e}"

pdfs = [
    '17 Corporate Social Responsibility (CSR) Activities in Chhattisgarh.pdf',
    '18 SECL Approves CSR Projects Worth \u20b9170 Crores, Strengthening Community Development.pdf',
    '19 A Study of Corporate Social Responsibility in Raipur, Chhattisgarh, India.pdf',
    '20 CSR Policy of Chhattisgarh State Power Holding Company Limited (CSPHCL).pdf',
    '21 Corporate Social Responsibility A Case Study of GMR Chhattisgarh Energy Limited.pdf',
    '22 CSR Initiatives by Bhilai Steel Plant, SAIL.pdf',
    '23 Social Audit of NMDC CSR Initiatives.pdf',
    '25 CSR Initiatives by HDFC Bank in Chhattisgarh.pdf',
]

for pdf in pdfs:
    fpath = os.path.join(CG_DIR, pdf)
    print(f"\n{'='*50}")
    print(f"FILE: {pdf}")
    print('='*50)
    print(read_pdf(fpath, 3000))

print(f"\n{'='*50}")
print("INTERVIEWS CODING PDF")
print('='*50)
print(read_pdf(INTERVIEWS_PATH, 6000))
