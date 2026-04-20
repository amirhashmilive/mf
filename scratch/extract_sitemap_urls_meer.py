import xml.etree.ElementTree as ET

sitemap_path = r'c:\Users\hashm\Desktop\Workplace Meer Foundation\sitemap.xml'
tree = ET.parse(sitemap_path)
root = tree.getroot()

urls = []
for url in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
    loc = url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
    urls.append(loc)

for u in sorted(urls):
    print(u)
