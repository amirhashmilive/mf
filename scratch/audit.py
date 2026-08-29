import os
import glob
from bs4 import BeautifulSoup
import json

def audit():
    html_files = glob.glob('d:/DRIVE (Ai) Agents/00 Projects/Meer Foundation Website/*.html')
    
    results = {
        'total_pages': len(html_files),
        'pages': [],
        'issues': []
    }
    
    for file in html_files:
        basename = os.path.basename(file)
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            soup = BeautifulSoup(content, 'html.parser')
            
            page_data = {
                'file': basename,
                'canonical': None,
                'meta_desc': None,
                'has_h1': len(soup.find_all('h1')) > 0,
                'images_total': len(soup.find_all('img')),
                'images_missing_alt': 0,
                'images_non_webp': 0,
                'has_footer_logo': False,
                'has_footer_desc': False
            }
            
            canonical_tag = soup.find('link', rel='canonical')
            if canonical_tag:
                page_data['canonical'] = canonical_tag.get('href')
            else:
                results['issues'].append({'type': 'Minor', 'location': basename, 'description': 'Missing canonical tag'})
                
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc:
                page_data['meta_desc'] = meta_desc.get('content')
            else:
                results['issues'].append({'type': 'Minor', 'location': basename, 'description': 'Missing meta description'})
                
            for img in soup.find_all('img'):
                if not img.get('alt'):
                    page_data['images_missing_alt'] += 1
                src = img.get('src', '')
                if not src.lower().endswith('.webp') and not src.startswith('data:'):
                    page_data['images_non_webp'] += 1
                    
            if page_data['images_missing_alt'] > 0:
                results['issues'].append({'type': 'Minor', 'location': basename, 'description': f"{page_data['images_missing_alt']} images missing alt text"})
            if page_data['images_non_webp'] > 0:
                results['issues'].append({'type': 'Minor', 'location': basename, 'description': f"{page_data['images_non_webp']} images not in .webp format"})
                
            footer = soup.find('footer')
            if footer:
                text = footer.get_text().lower()
                if 'est. 2011' in text or 'meer foundation est. 2011' in text:
                    page_data['has_footer_desc'] = True
                if 'registration' in text or 'darpan' in text:
                    results['issues'].append({'type': 'Critical', 'location': basename, 'description': 'Footer contains registration IDs'})
                    
            results['pages'].append(page_data)
            
    with open('d:/DRIVE (Ai) Agents/00 Projects/Meer Foundation Website/scratch/audit_results.json', 'w') as f:
        json.dump(results, f, indent=2)

if __name__ == '__main__':
    audit()
