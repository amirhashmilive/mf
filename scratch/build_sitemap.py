import os
from datetime import datetime

pages = [
    "index.html", "about.html", "initiatives.html", "bolti-nadi.html", 
    "five-pillars.html", "impact.html", "testimonials.html", "rivers.html", 
    "annual-report.html", "contact.html", "farmours.html", "prayaas.html", 
    "yoga-kutumb.html", "social-heritage-walk.html", "community-radio.html", 
    "guriya-magazine.html", "edusuto-courses.html", "ijmeer-journal.html", 
    "publications.html", "csr-research.html", "district-profiles.html", 
    "project-gallery.html", "case-studies.html", "volunteer.html", 
    "partner-with-us.html", "internship.html", "terms.html", 
    "refund-cancellation.html", "fcra.html", "12a-80g.html", 
    "news.html", "media-gallery.html", "blog.html"
]

date = datetime.now().strftime("%Y-%m-%d")

sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for page in pages:
    priority = "1.0" if page == "index.html" else "0.8"
    sitemap_content += f"""  <url>
    <loc>https://meerfoundation.co.in/{page}</loc>
    <lastmod>{date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>\n"""

sitemap_content += '</urlset>'

with open('sitemap.xml', 'w') as f:
    f.write(sitemap_content)
