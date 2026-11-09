"""Builds the editable Word version of the CV (cv/abdelhakam_cv.docx).

Content mirrors cv/abdelhakam_cv.html — keep both in sync when editing.
Requires: pip install python-docx
Usage:    python3 cv/build_docx.py
"""
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT
from docx.shared import Pt, Inches, RGBColor

TEAL = RGBColor(0x2A, 0x74, 0x80)
INK = RGBColor(0x1F, 0x23, 0x28)
MUTED = RGBColor(0x55, 0x5B, 0x61)
BODY_FONT = "Arial"
HEAD_FONT = "Georgia"
RIGHT_TAB = Inches(7.3)

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Inches(8.5), Inches(11)
sec.top_margin = sec.bottom_margin = Inches(0.5)
sec.left_margin = sec.right_margin = Inches(0.6)

normal = doc.styles["Normal"]
normal.font.name = BODY_FONT
normal.font.size = Pt(10)
normal.font.color.rgb = INK
normal.element.rPr.rFonts.set(qn("w:eastAsia"), BODY_FONT)
normal.paragraph_format.space_after = Pt(0)
normal.paragraph_format.line_spacing = 1.1


def para(space_before=0, space_after=0):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    return p


def run(p, text, bold=False, italic=False, color=None, size=None, font=None):
    r = p.add_run(text)
    r.bold, r.italic = bold, italic
    if color is not None:
        r.font.color.rgb = color
    if size:
        r.font.size = Pt(size)
    if font:
        r.font.name = font
        r._element.rPr.rFonts.set(qn("w:eastAsia"), font)
    return r


def link(p, text, url, color=None, underline=True, serif=True):
    r_id = p.part.relate_to(url, RT.HYPERLINK, is_external=True)
    h = OxmlElement("w:hyperlink")
    h.set(qn("r:id"), r_id)
    r = OxmlElement("w:r")
    rpr = OxmlElement("w:rPr")
    if serif:  # header links use the original small serif style
        fonts = OxmlElement("w:rFonts")
        fonts.set(qn("w:ascii"), HEAD_FONT)
        fonts.set(qn("w:hAnsi"), HEAD_FONT)
        rpr.append(fonts)
        sz = OxmlElement("w:sz")
        sz.set(qn("w:val"), "18")
        rpr.append(sz)
    if color is not None:
        c = OxmlElement("w:color")
        c.set(qn("w:val"), str(color))
        rpr.append(c)
    if underline:
        u = OxmlElement("w:u")
        u.set(qn("w:val"), "single")
        rpr.append(u)
    r.append(rpr)
    t = OxmlElement("w:t")
    t.text = text
    t.set(qn("xml:space"), "preserve")
    r.append(t)
    h.append(r)
    p._p.append(h)


def bottom_border(p, color="D5DADD", size=4):
    ppr = p._p.get_or_add_pPr()
    bdr = OxmlElement("w:pBdr")
    b = OxmlElement("w:bottom")
    b.set(qn("w:val"), "single")
    b.set(qn("w:sz"), str(size))
    b.set(qn("w:space"), "1")
    b.set(qn("w:color"), color)
    bdr.append(b)
    ppr.append(bdr)


def heading(text):
    p = para(9, 3)
    p.paragraph_format.keep_with_next = True
    run(p, text, color=TEAL, size=14, font=HEAD_FONT)


def bullet(text):
    p = doc.add_paragraph(style="List Bullet")
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.left_indent = Inches(0.22)
    p.paragraph_format.first_line_indent = Inches(-0.15)
    run(p, text)


def job(company, location, dates, role, intro=None):
    p = para(7)
    p.paragraph_format.keep_with_next = True
    p.paragraph_format.tab_stops.add_tab_stop(RIGHT_TAB, WD_TAB_ALIGNMENT.RIGHT)
    run(p, company.upper(), bold=True, size=10.5)
    run(p, f" | {location}", color=MUTED)
    run(p, f"\t{dates}", color=MUTED, size=9.6)
    p = para()
    p.paragraph_format.keep_with_next = True
    run(p, role, italic=True)
    if intro:
        p = para(1)
        run(p, intro)


def project(name, meta=None, url=None, url_text=None):
    p = para(4, 1)
    p.paragraph_format.keep_with_next = True
    run(p, name, bold=True, color=TEAL)
    if meta:
        run(p, f" — {meta}", color=MUTED)
    if url:
        run(p, " — ", color=MUTED)
        link(p, url_text, url, color=MUTED, serif=False)


# ---------- Header (original design) ----------
p = para()
run(p, "Abdelhakam Elewa", color=TEAL, size=27, font=HEAD_FONT)
p = para(2, 3)
run(p, "Software Engineer | PHP, Laravel, React.js & Next.js", size=11, font=HEAD_FONT)
bottom_border(p, color="6F777C", size=6)
for line in ["Cairo, Egypt", "+201090125176"]:
    p = para()
    run(p, line, color=MUTED, size=8.8, font=HEAD_FONT)
p = para()
link(p, "abdelhakamelewa.dev@gmail.com", "mailto:abdelhakamelewa.dev@gmail.com", color=MUTED)
p = para()
link(p, "https://www.linkedin.com/in/abdelhakam-elewa-78613a205/",
     "https://www.linkedin.com/in/abdelhakam-elewa-78613a205/", color=MUTED, underline=False)
p = para()
link(p, "https://github.com/Abdelhakam11", "https://github.com/Abdelhakam11", color=MUTED, underline=False)

# ---------- Profile ----------
heading("Profile")
p = para()
run(p, size=9.6, font=HEAD_FONT, text="Full Stack Software Engineer with approximately 3 years of professional experience building web "
       "applications across backend and frontend. Develops backend features with PHP and Laravel — RESTful APIs, "
       "business logic, authentication, and database-driven workflows — and builds user interfaces with React.js, "
       "Next.js, and TypeScript. Has contributed to commercial business platforms in Saudi Arabia and to "
       "international multi-region e-commerce platforms, working end to end from data layer and API integration "
       "to responsive, accessible UI.")

# ---------- Experience ----------
heading("Experience")

job("Prismatecs", "Cairo, Egypt (Hybrid)", "Nov 2025 – Present", "Full Stack Software Engineer",
    "Full-stack development of commercial web applications using PHP, Laravel, and JavaScript.")
project("Rafed", "Platform for charitable associations, Saudi Arabia")
for b in [
    "Contributed to developing a platform that serves charitable associations across Saudi Arabia.",
    "Built backend features and application functionality with PHP and Laravel, including business logic, "
    "database operations, and application workflows.",
    "Developed and maintained application features in JavaScript, and contributed to API integrations and "
    "frontend/backend communication.",
    "Worked on digital services and solutions associated with the Two Holy Mosques — Al-Masjid Al-Haram (Makkah), "
    "including services related to the Holy Kaaba, and Al-Masjid An-Nabawi (Madinah).",
]:
    bullet(b)
project("Brassbell", "Property Management System (PMS)")
bullet("Contributed to developing a Property Management System, implementing application features and backend business logic.")
bullet("Implemented data-related operations, application workflows, and frontend/backend integration.")
project("Teckdo", "Content Management System (CMS)")
bullet("Currently contributing to building a Content Management System, working on backend functionality, "
       "application structure, and core features.")
bullet("Developing and integrating features across the backend and frontend.")

job("Scandiweb", "Latvia (Remote)", "Aug 2024 – Oct 2025", "Software Engineer",
    "Developed features for international e-commerce applications: frontend development, CMS integration, "
    "reusable components, and application functionality.")
project("OM System / OMdigital", url="https://explore.omsystem.com/", url_text="explore.omsystem.com")
for b in [
    "Worked on an international multi-region, multi-language e-commerce platform supporting approximately "
    "70 store views and 20+ languages.",
    "Developed reusable React.js and TypeScript components and contributed to component architecture and "
    "data-fetching workflows.",
    "Integrated frontend functionality with Sanity CMS, working with 55+ reusable content blocks, content "
    "structures, and image crop/hotspot functionality.",
    "Worked on Product Listing Pages (PLP) and Product Detail Pages (PDP).",
    "Improved responsive layouts, accessibility, and frontend performance.",
    "Developed and maintained responsive email templates across three regional websites.",
]:
    bullet(b)
project("Purdy's Chocolatier", url="https://www.purdys.com/", url_text="purdys.com")
for b in [
    "Developed and maintained features for an international e-commerce platform, including homepage sections, "
    "reusable components, and header/footer functionality.",
    "Implemented authentication features (sign-in and sign-out) and worked on customer dashboard functionality.",
    "Integrated frontend features with backend services and APIs, and maintained and improved existing business "
    "functionality.",
]:
    bullet(b)

job("Moseley Media Development (MMD)", "Cairo, Egypt", "May 2024 – Jul 2024", "Software Engineer Intern")
for b in [
    "Gained practical backend development experience with PHP and Symfony on web application development.",
    "Developed and maintained application features, working with backend business logic and database operations.",
    "Integrated APIs and connected application components.",
    "Assisted with debugging, testing, and maintaining existing functionality.",
]:
    bullet(b)

job("Freelance", "Remote", "Jun 2022 – Apr 2024", "Software Engineer")
for b in [
    "Built websites and web applications for different clients, managing tasks from requirements and "
    "implementation to delivery.",
    "Developed interactive, responsive interfaces and reusable components with React.js, JavaScript, HTML5, and CSS3.",
    "Integrated REST APIs and third-party services, connecting frontend applications with backend services.",
    "Maintained and improved existing client applications.",
]:
    bullet(b)

# ---------- Skills (original design: two-column bullet list) ----------
heading("Technical Skills")
skills = ["PHP", "Laravel", "Symfony", "RESTful API Development", "MVC Architecture",
          "Authentication & Authorization", "Backend Business Logic", "API Integration", "MySQL",
          "Database Design", "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
          "Tailwind CSS", "Bootstrap", "Sass / SCSS", "Material UI", "CSS Modules", "Responsive Web Design",
          "Performance Optimization", "Lazy Loading", "Code Splitting", "Reusable Component Architecture",
          "Accessibility (WCAG)", "Semantic HTML", "Git & GitHub", "Docker", "NPM", "Webpack", "Jira",
          "Agile / Scrum"]
half = (len(skills) + 1) // 2
table = doc.add_table(rows=1, cols=2)
table.alignment = WD_TABLE_ALIGNMENT.LEFT
table.autofit = False
for cell, items in zip(table.rows[0].cells, (skills[:half], skills[half:])):
    cell.width = Inches(3.65)
    for i, item in enumerate(items):
        p = cell.paragraphs[0] if i == 0 else cell.add_paragraph()
        p.paragraph_format.space_after = Pt(0)
        run(p, f"•  {item}", size=9.6, font=HEAD_FONT)

# ---------- Education ----------
heading("Education")
p = para()
p.paragraph_format.tab_stops.add_tab_stop(RIGHT_TAB, WD_TAB_ALIGNMENT.RIGHT)
run(p, "Bachelor of Engineering – Mechanical Power Engineering", bold=True)
run(p, ", Menoufia University")
run(p, "\tSep 2018 – Jun 2023", color=MUTED, size=9.6)

# ---------- Languages ----------
heading("Languages")
for line in ["Arabic: Native", "English: Advanced"]:
    p = para()
    run(p, line, size=9.6, font=HEAD_FONT)

doc.core_properties.author = "Abdelhakam Elewa"
doc.core_properties.title = "Abdelhakam Elewa – Software Engineer CV"

out = Path(__file__).with_name("abdelhakam_cv.docx")
doc.save(out)
print(f"Wrote {out}")
