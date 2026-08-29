import os

PAGES = {
    # PROGRAM PAGES
    "farmours.html": {
        "title": "Farmours | Agricultural Livelihood Program",
        "tag": "Agricultural Livelihood",
        "headline": "Empowering Farmers Through Sustainable Agriculture",
        "desc": "The Farmours initiative supports rural farmers in Chhattisgarh by promoting sustainable farming practices, providing modern agricultural tools, and creating direct market linkages to ensure better livelihoods.",
        "icon": "🌱"
    },
    "prayaas.html": {
        "title": "Prayaas | Education Support Program",
        "tag": "Education Support",
        "headline": "Reshaping the Educational Landscape",
        "desc": "Prayaas focuses on bringing modern educational methodologies, smart classrooms, and essential resources to underserved rural schools across Chhattisgarh, ensuring quality education for every child.",
        "icon": "📚"
    },
    "yoga-kutumb.html": {
        "title": "Yoga Kutumb | Health and Wellness Program",
        "tag": "Health & Wellness",
        "headline": "Holistic Well-being for Rural Communities",
        "desc": "Yoga Kutumb integrates the principles of holistic well-being into everyday life through certified yoga professionals, community training, and health camps implemented by Meer Foundation.",
        "icon": "🧘"
    },
    "social-heritage-walk.html": {
        "title": "Social Heritage Walk | Cultural Heritage Program",
        "tag": "Cultural Heritage",
        "headline": "Preserving Our Shared History",
        "desc": "An initiative to connect youth with their local history and heritage sites across Chhattisgarh through guided walks, documentation, and conservation awareness.",
        "icon": "🏛️"
    },
    
    # EMERGING PAGES
    "community-radio.html": {
        "title": "Radio Meer | Community Radio Initiative",
        "tag": "Rural Communication",
        "headline": "The Voice of Rural Chhattisgarh",
        "desc": "A community-operated radio station designed to broadcast educational content, health awareness, agricultural tips, and local news to remote villages.",
        "icon": "📻"
    },
    "guriya-magazine.html": {
        "title": "Guriya Magazine | Cultural Publication",
        "tag": "Cultural Publication",
        "headline": "Stories from the Heart of Chhattisgarh",
        "desc": "A handwritten and hand-illustrated magazine in the Chhattisgarhi language, empowering local youth and preserving regional folklore and heritage.",
        "icon": "📖"
    },

    # RESEARCH & KNOWLEDGE PAGES
    "edusuto-courses.html": {
        "title": "EduSuTo Courses | Education for Sustainable Tomorrow",
        "tag": "Sustainable Education",
        "headline": "Certification in Climate Action & Sustainability",
        "desc": "Specialized training courses focusing on carbon capture, ecological balance, and sustainable development goals to create future environmental leaders.",
        "icon": "🌍"
    },
    "ijmeer-journal.html": {
        "title": "IJMEER Journal | Research Publication",
        "tag": "Academic Research",
        "headline": "International Journal of Multidisciplinary Explication and Emerging Research",
        "desc": "An open-access peer-reviewed journal publishing high-quality research papers across multiple disciplines to foster academic growth and innovation.",
        "icon": "🔬"
    },
    "publications.html": {
        "title": "Publications | Meer Foundation Research",
        "tag": "Research Repository",
        "headline": "Our Academic and Field Publications",
        "desc": "A comprehensive repository of research papers, field study reports, and policy briefs authored and supported by the Meer Foundation.",
        "icon": "📑"
    },
    "csr-research.html": {
        "title": "CSR Research | Policy and Impact Papers",
        "tag": "CSR Policy Analysis",
        "headline": "Analyzing the Impact of Corporate Social Responsibility",
        "desc": "In-depth research on CSR implementation effectiveness in Chhattisgarh, evaluating the social, economic, and environmental returns on investment.",
        "icon": "📊"
    },

    # IMPACT & DATA PAGES
    "district-profiles.html": {
        "title": "District Profiles | Our Reach in Chhattisgarh",
        "tag": "Geographic Impact",
        "headline": "Transforming 10+ Districts Across Chhattisgarh",
        "desc": "Detailed demographic and impact data for our intervention zones, including Dhamtari, Raipur, Bastar, Baloda Bazar, and Kawardha.",
        "icon": "🗺️"
    },
    "project-gallery.html": {
        "title": "Project Gallery | Visual Impact",
        "tag": "Visual Documentation",
        "headline": "Witness the Change We Bring",
        "desc": "A curated collection of photographs and visuals documenting our fieldwork, community engagements, and the real impact of our initiatives.",
        "icon": "📸"
    },
    "case-studies.html": {
        "title": "Case Studies | Detailed Impact Reports",
        "tag": "Impact Assessment",
        "headline": "Stories of Measurable Transformation",
        "desc": "Comprehensive case studies detailing our methodological approaches, execution challenges, and the quantifiable outcomes of our key projects.",
        "icon": "📈"
    },

    # GET INVOLVED PAGES
    "volunteer.html": {
        "title": "Volunteer | Join Meer Foundation",
        "tag": "Take Action",
        "headline": "Be the Catalyst for Change",
        "desc": "Join our network of dedicated volunteers and contribute your time and skills to drive meaningful social impact in rural communities.",
        "icon": "🤝"
    },
    "partner-with-us.html": {
        "title": "Partner With Us | CSR Implementation",
        "tag": "Corporate Partnerships",
        "headline": "Strategic CSR Implementation Partnerships",
        "desc": "Collaborate with Meer Foundation as your trusted implementing agency to execute high-impact, compliant, and sustainable CSR projects in Chhattisgarh.",
        "icon": "🏢"
    },
    "internship.html": {
        "title": "Internship | Learn and Contribute",
        "tag": "Youth Development",
        "headline": "Build Your Career in Social Work",
        "desc": "Gain hands-on experience in community development, research, and project management through our structured internship programs.",
        "icon": "🎓"
    },

    # LEGAL & POLICY PAGES
    "terms.html": {
        "title": "Terms and Conditions | Meer Foundation",
        "tag": "Legal",
        "headline": "Terms of Use",
        "desc": "The terms and conditions governing the use of the Meer Foundation website and participation in our programs and services.",
        "icon": "⚖️"
    },
    "refund-cancellation.html": {
        "title": "Refund and Cancellation Policy | Meer Foundation",
        "tag": "Legal",
        "headline": "Donation Refund Policy",
        "desc": "Our policies regarding the cancellation of recurring donations and the process for requesting refunds for erroneous transactions.",
        "icon": "💳"
    },
    "fcra.html": {
        "title": "FCRA Details | Meer Foundation",
        "tag": "Compliance",
        "headline": "Foreign Contribution Regulation Act",
        "desc": "Information regarding our FCRA registration and compliance for accepting international contributions to support our initiatives.",
        "icon": "🌐"
    },
    "12a-80g.html": {
        "title": "12A & 80G Certificates | Tax Exemption",
        "tag": "Compliance",
        "headline": "Tax Exemption Certificates",
        "desc": "Meer Foundation is registered under Section 12A and 80G of the Income Tax Act. Donations made to us are eligible for tax deductions.",
        "icon": "📜"
    },

    # MEDIA & NEWS PAGES
    "news.html": {
        "title": "News & Press | Meer Foundation",
        "tag": "Media Updates",
        "headline": "Latest Updates and Press Coverage",
        "desc": "Stay updated with the latest news, press releases, and media mentions regarding our projects and organizational milestones.",
        "icon": "📰"
    },
    "media-gallery.html": {
        "title": "Media Gallery | Videos and Media",
        "tag": "Multimedia",
        "headline": "Video Documentaries and Media Features",
        "desc": "Watch our award-winning documentaries, including the Bolti Nadi film screened globally, and other multimedia content.",
        "icon": "🎥"
    },
    "blog.html": {
        "title": "Blog | Stories from the Field",
        "tag": "Insights",
        "headline": "Field Notes and Organizational Insights",
        "desc": "Read articles, stories, and insights from our founders, volunteers, and community leaders working on the ground.",
        "icon": "✍️"
    }
}

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  <style>
    .page-hero {{ background: var(--bg-2); padding: 140px 0 60px; border-bottom: 1px solid var(--border); }}
    .content-section {{ padding: 60px 0; }}
    .icon-large {{ font-size: 4rem; margin-bottom: 20px; }}
  </style>
</head>
<body>

<div id="progress-bar"></div>
<div id="site-header-inject"></div>

<section class="page-hero">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-tag">{tag}</div>
      <div class="icon-large">{icon}</div>
      <h1 class="section-title">{headline}</h1>
      <p class="section-subtitle">{desc}</p>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container reveal">
    <div style="background: #fff; padding: 40px; border-radius: var(--r-xl); border: 1px solid var(--border); box-shadow: var(--shadow-md);">
      <h2 style="font-family: var(--font-serif); margin-bottom: 20px; color: #1e40af;">Overview</h2>
      <p style="color: var(--text-2); line-height: 1.8; margin-bottom: 20px;">
        As a core pillar of the Meer Foundation's strategic portfolio, this initiative represents our commitment to sustainable and inclusive development in Chhattisgarh. By leveraging the Penta-Alignment framework, we ensure that our implementation architecture aligns perfectly with community needs and corporate social responsibility goals.
      </p>
      <p style="color: var(--text-2); line-height: 1.8;">
        <strong>Implementation Note:</strong> All grassroots activities, capability building sessions, and infrastructure deployments associated with this program are directly implemented by Meer Foundation as the primary executing agency, ensuring transparency, accountability, and maximum impact for our beneficiaries and CSR partners.
      </p>
      
      <div style="margin-top: 40px; text-align: center;">
        <a href="contact.html" class="btn btn-primary btn-lg">Get Involved</a>
      </div>
    </div>
  </div>
</section>

<div id="site-footer-inject"></div>

<script src="assets/js/components.js"></script>
<script src="assets/js/core.js"></script>
</body>
</html>"""

for filename, data in PAGES.items():
    with open(filename, "w", encoding="utf-8") as f:
        f.write(TEMPLATE.format(**data))
        print(f"Created {filename}")

# Update components.js to reflect the massive new navigation
with open("assets/js/components.js", "r", encoding="utf-8") as f:
    components_js = f.read()

NEW_HEADER_NAV = """
    <nav class="main-nav" id="main-nav" aria-label="Main navigation">
      <div class="nav-item dropdown">
        <a href="about.html" class="nav-link">About</a>
        <div class="dropdown-content">
          <a href="about.html">Our Story & Founder</a>
          <a href="annual-report.html">Annual Reports</a>
          <a href="five-pillars.html">Five Pillars Model</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="initiatives.html" class="nav-link">Initiatives</a>
        <div class="dropdown-content">
          <a href="bolti-nadi.html">Bolti Nadi</a>
          <a href="farmours.html">Farmours</a>
          <a href="prayaas.html">Prayaas</a>
          <a href="yoga-kutumb.html">Yoga Kutumb</a>
          <a href="social-heritage-walk.html">Social Heritage Walk</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Research</a>
        <div class="dropdown-content">
          <a href="rivers.html">Rivers of Chhattisgarh</a>
          <a href="edusuto-courses.html">EduSuTo Courses</a>
          <a href="ijmeer-journal.html">IJMEER Journal</a>
          <a href="publications.html">Publications</a>
          <a href="csr-research.html">CSR Research</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Emerging</a>
        <div class="dropdown-content">
          <a href="community-radio.html">Community Radio</a>
          <a href="guriya-magazine.html">Guriya Magazine</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="impact.html" class="nav-link">Impact</a>
        <div class="dropdown-content">
          <a href="impact.html">Statistics</a>
          <a href="case-studies.html">Case Studies</a>
          <a href="district-profiles.html">District Profiles</a>
          <a href="project-gallery.html">Project Gallery</a>
          <a href="testimonials.html">Testimonials</a>
        </div>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link">Get Involved</a>
        <div class="dropdown-content">
          <a href="volunteer.html">Volunteer</a>
          <a href="partner-with-us.html">Partner With Us</a>
          <a href="internship.html">Internship</a>
        </div>
      </div>
      <div class="nav-item"><a href="contact.html" class="nav-link">Contact</a></div>
    </nav>
"""

import re
# Replace the nav block in components.js
components_js = re.sub(
    r'<nav class="main-nav".*?</nav>',
    NEW_HEADER_NAV.strip(),
    components_js,
    flags=re.DOTALL
)

with open("assets/js/components.js", "w", encoding="utf-8") as f:
    f.write(components_js)
    print("Updated components.js")
