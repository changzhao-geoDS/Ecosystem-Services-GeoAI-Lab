# Ecosystem Services GeoAI Lab Website — Documentation

Lab website for Dr. Chang Zhao’s Ecosystem Services and Geospatial Artificial Intelligence Lab at the University of Florida.

**Live site:** https://changzhao-geods.github.io/Ecosystem-Services-GeoAI-Lab/index.html  
**Repo:** https://github.com/changzhao-geoDS/Ecosystem-Services-GeoAI-Lab

---

## Table of Contents

1. [How to Edit Content (start here)](#1-how-to-edit-content-start-here)
2. [Site Overview](#2-site-overview)
3. [Repository File Map](#3-repository-file-map)
4. [Architecture](#4-architecture)
5. [Local Preview & Deploy](#5-local-preview--deploy)
6. [Conventions & Tips](#6-conventions--tips)

---

## 1. How to Edit Content (start here)

Almost all page content lives in **`index.html`**. Assets go in **`img/`**, **`GroupPictures/`**, or **`docs/`**. Behavior is in **`script.js`**; styling is in **`styles.css`**.

After editing, open `index.html` in a browser (or use a local server) to check the change, then commit and push to `main` for GitHub Pages to update.

### 1.1 Add a news item (Home tab)

**Where:** `index.html` → `#tab-home` → section `.news` → `.news-list`

1. Put any photos under something like `img/news/Month DD YYYY Topic/`.
2. Insert a new block **at the top** of `.news-list` (newest first):

```html
<div class="news-item">
    <div class="news-date">April 9, 2026</div>
    <div class="news-content">
        <h3>Short Headline</h3>
        <p>Announcement text. Mark names with <strong>Name</strong>.</p>
        <!-- Optional images -->
        <div class="news-images">
            <a href="img/news/.../photo.jpg" target="_blank">
                <img src="img/news/.../photo.jpg" alt="Describe the event">
            </a>
        </div>
        <!-- Optional links -->
        <div class="news-links">
            <a href="https://example.com" target="_blank">External link</a>
            <!-- Or jump to another tab: -->
            <a href="#" data-tab="vacancies">View Opportunities →</a>
        </div>
    </div>
</div>
```

3. **Show more / hide older news:** older entries can use class `news-item-hidden` instead of only `news-item`. They stay hidden until the user clicks `#showMoreNews` (“See More News”). Keep a reasonable number of recent items visible; hide the rest.

4. Paths with spaces (e.g. `April 09 2026 Mohanad`) work, but prefer folders without spaces when adding new assets.

### 1.2 Add or edit a team member (Team tab)

**Where:** `index.html` → `#tab-team`  
**Sections:** Postdoctoral Associates · Graduate Researchers · Undergraduate Researchers · Alumni

1. Add the headshot to `img/` (descriptive filename, e.g. `first_last.jpg`).
2. Paste a card into the correct `.team-grid` (first card in a section = left side of that row):

```html
<div class="team-card">
    <div class="team-image">
        <img src="img/first_last.jpg" alt="First Last">
    </div>
    <div class="team-info">
        <h3>First Last</h3>
        <p class="team-role">PhD Student</p>
        <p class="team-bio-small">Short bio, about 300 characters or less (2–3 sentences).</p>
        <!-- Optional social links -->
        <div class="team-social">
            <a href="mailto:email@ufl.edu" class="social-link">Email</a>
            <a href="https://linkedin.com/in/..." target="_blank" class="social-link">LinkedIn</a>
            <a href="https://scholar.google.com/..." target="_blank" class="social-link">Google Scholar</a>
        </div>
    </div>
</div>
```

3. **Moving someone to alumni:** cut their card from the active section and paste it into the Alumni `.team-grid`. Update `team-role` (e.g. “Former Undergraduate Researcher”).
4. **Grid fillers:** empty placeholders use `<div class="team-card team-card-empty"></div>` when a section needs an odd number of cards for layout. Adjust or remove as the roster changes.
5. **Full bios archive:** long original bios are kept in `docs/team_bios_original.txt`. When you shorten or rewrite a website bio, update that file too if you want a durable record of the long version.
6. **Stats counter (Research tab):** if headcount changes, update `data-target` on the “Team Members” `.stat-number` under `#tab-research`.

### 1.3 Edit courses (Teaching tab)

**Where:** `index.html` → `#tab-teaching` → `.courses-grid`

Each course is an `<a class="course-card">` that opens the syllabus PDF.

```html
<a class="course-card"
   href="https://example.com/path/to/syllabus.pdf"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Open syllabus PDF for COURSE_CODE Title">
    <div class="course-image">
        <img src="img/courses/your_image.jpg" alt="">
    </div>
    <div class="course-content">
        <h3>COURSE_CODE</h3>
        <p class="course-title">Full Course Title</p>
        <div class="course-details">
            <p><strong>Credits:</strong> 3 · <strong>Term:</strong> Fall 2026</p>
            <p><strong>Instructor:</strong> Dr. Chang Zhao</p>
            <p>Short course description…</p>
            <p><strong>Prerequisites:</strong> …</p>
            <p class="course-syllabus-link">View syllabus (PDF) →</p>
        </div>
    </div>
</a>
```

- Update `href` when the syllabus URL changes.
- Put new course images in `img/courses/`.
- To add another course, copy a card into `.courses-grid`. To remove one, delete that `<a class="course-card">` block.

### 1.4 Edit job postings / vacancies (Vacancies tab)

**Where:** `index.html` → `#tab-vacancies` → `.vacancies-grid`

Each posting is a horizontal vacancy card:

```html
<div class="vacancy-card vacancy-card-horizontal">
    <div class="vacancy-card-left">
        <div class="vacancy-badge">Undergraduate</div>
        <h3>Position Title</h3>
        <p class="vacancy-type">Short role label</p>
    </div>
    <div class="vacancy-card-right">
        <div class="vacancy-content">
            <p><strong>Eligibility:</strong> …</p>
            <p><strong>Deadline:</strong> …</p>
            <p>Description paragraphs…</p>
        </div>
        <div class="vacancy-footer">
            <!-- Text contact, or buttons: -->
            <p class="vacancy-contact-text">Contact <a href="mailto:changzhao@ufl.edu">changzhao@ufl.edu</a>.</p>
            <a href="docs/flyer.pdf" target="_blank" class="btn btn-outline">View Flyer</a>
            <a href="https://apply.example.edu" target="_blank" class="btn btn-primary">Apply Here</a>
        </div>
    </div>
</div>
```

- PDFs for flyers/CVs go in `docs/` and are linked from the card.
- Update or remove posts when deadlines pass.
- Home-tab news that mention openings often link with `data-tab="vacancies"`; keep wording consistent with this section.

### 1.5 Add a publication (Publications tab)

**Where:** `index.html` → `#tab-publications`

There are three lists:

| Heading | Place new items |
|---------|-----------------|
| Peer-Reviewed Journal Publications | First `.publications-list` |
| Peer-Reviewed Conference Proceedings | Second list |
| Book Chapters | Third list |

Template:

```html
<div class="publication-item">
    <div class="pub-year">2026</div>
    <div class="pub-content">
        <h3>Paper title</h3>
        <p class="pub-authors">Author A, <strong>Zhao, C.</strong>, Author B</p>
        <p class="pub-journal"><i>Journal Name</i>, volume, pages</p>
        <a href="https://doi.org/..." target="_blank" class="pub-link">Read More →</a>
    </div>
</div>
```

- Insert newest items near the top of the relevant list.
- Highlight lab PI / related authors with `<strong>…</strong>` as elsewhere.
- For journal items that should stay behind “See More Publications”, add class `publication-item-hidden` (used with `#showMorePublications`).
- Optional related figures can live under `img/publications/` and be linked from a Home news item rather than from the pub card itself.
- After adding pubs, refresh the Research tab **Publications** and **Conference Papers** `data-target` stats if those numbers should stay accurate.

### 1.6 Edit Research tab content

**Where:** `index.html` → `#tab-research`

| Element | What to edit |
|---------|----------------|
| PI photo / bio / links | `.pi-intro` (photo: `img/prof-img.jpg`, CV: `docs/CV_ChangZhao.pdf`) |
| Lab “About” copy | `.about-text` paragraphs |
| Animated stats | `.stat-number` attributes `data-target="N"` (Publications, Team Members, Conference Papers) |
| Research area cards | `.research-grid` → each `.research-card` (icon, title, short paragraph) |

### 1.7 Update hero text or mosaic (Home)

**Hero copy** is in `#tab-home` → `.hero-content` (badge, title lines, subtitle, CTAs). CTAs use `data-tab="research"` / `data-tab="publications"` to switch tabs.

**Mosaic background photos** are *not* listed in HTML. They are loaded from an array in **`script.js`** (`initMosaicBackground`):

1. Add image files under `GroupPictures/`.
2. Append the path string to the `images` array in `script.js`, e.g. `'GroupPictures/your_new_photo.jpg'`.
3. Prefer simple filenames (avoid spaces/commas where possible).

### 1.8 Edit navigation or footer

- Nav tabs: `<ul class="nav-menu">` at the top of `index.html`. Each link needs matching `data-tab="…"` and a `#tab-…` section.
- Footer year / branding: `<footer class="footer">` near the bottom of `index.html`.

### 1.9 Quick checklist before publishing

- [ ] New images committed under `img/`, `GroupPictures/`, or `docs/`
- [ ] Paths in HTML/`script.js` match filenames exactly (case-sensitive on GitHub Pages)
- [ ] Newest news/publications appear first
- [ ] Team bio length stays roughly ≤ 300 characters on the site card
- [ ] Stats `data-target` values still make sense
- [ ] Linked vacancies/course PDFs still open
- [ ] Spot-check on desktop and a narrow window (mobile nav)

---

## 2. Site Overview

Static multi-tab lab site (no build step, no framework).

| Tab | ID | Purpose |
|-----|-----|---------|
| Home | `#tab-home` | Hero mosaic, latest news |
| Research | `#tab-research` | PI intro, lab about, research areas, stats |
| Team | `#tab-team` | Postdocs, grads, undergrads, alumni |
| Publications | `#tab-publications` | Journals, conferences, book chapters |
| Teaching | `#tab-teaching` | Courses with syllabus links |
| Vacancies | `#tab-vacancies` | Open positions |

Client-side tab switching uses `data-tab` attributes; only one `.tab-content.active` is shown at a time.

---

## 3. Repository File Map

```
Ecosystem-Services-GeoAI-Lab/
├── index.html              # All page content and structure
├── styles.css              # Layout, theme, responsive rules
├── script.js               # Tabs, mobile nav, mosaic, animations, show-more
├── README.md               # Short live URL
├── doc.md                  # This documentation
├── LICENSE
├── updates.txt             # Internal backlog notes
├── Lab_News_Tracker*.*     # Manual news tracker helpers (not used by the site)
├── google*.html            # Google Search Console verification
│
├── docs/                   # Downloadable PDFs and archived text
│   ├── CV_ChangZhao.pdf
│   ├── ifas_summer_internship_flyer.pdf
│   ├── PhD Position Zhao 2025 Fall.pdf
│   └── team_bios_original.txt
│
├── img/                    # Headshots, courses, news galleries, figures
│   ├── courses/
│   ├── news/
│   ├── publications/
│   ├── homes/
│   ├── Projects/
│   └── demo/
│
└── GroupPictures/          # Hero mosaic source photos
```

Core trio to edit for most work: **`index.html`** (content) → **`img/` / `docs/`** (assets) → occasionally **`script.js`** (mosaic list) or **`styles.css`** (layout tweaks).

---

## 4. Architecture

### 4.1 Stack

- HTML5 + CSS3 + vanilla JavaScript
- Fonts: Google Fonts (`Inter`, `Space Grotesk`)
- Hosting: GitHub Pages from `main`

### 4.2 Tab switching

- Nav links and many buttons use `data-tab="<name>"`.
- Click handler in `script.js` (`initTabs`) activates `#tab-<name>` and the matching `.nav-link`.
- Page scroll resets to top when switching tabs.

### 4.3 Notable JavaScript features (`script.js`)

| Feature | Behavior |
|---------|----------|
| Mobile hamburger | Toggle menu + overlay at ≤768px |
| Navbar shadow | Stronger shadow after scroll |
| Stat counters | Animate `.stat-number` when scrolled into view |
| Scroll animations | Fade/slide for research, team, publication, project, course cards |
| Hero mosaic | Shuffle + inject `GroupPictures/` images into `#mosaicBackground` |
| Show more news | Reveals `.news-item-hidden`, hides `#showMoreNews` |
| Show more publications | Reveals `.publication-item-hidden`, hides `#showMorePublications` |

### 4.4 Styling (`styles.css`)

Theme tokens are defined as CSS variables at `:root` (greens/blues, surfaces, shadows). Responsive breakpoints tighten layout and mobile menu behavior. Prefer existing classes over one-off inline styles when possible; some older news blocks still use inline styles for lists/links.

---

## 5. Local Preview & Deploy

### Local preview

No build tools required. Options:

1. Open `index.html` directly in a browser, or  
2. From the repo root, run a simple static server, e.g.:

```bash
# Python
python -m http.server 8000

# Node (if available)
npx serve .
```

Then visit `http://localhost:8000`.

### Deploy (GitHub Pages)

1. Commit changes on `main`.
2. Push to `origin` (`https://github.com/changzhao-geoDS/Ecosystem-Services-GeoAI-Lab.git`).
3. GitHub Pages serves the root of `main`; allow a few minutes for the live URL to refresh.

There is no separate deploy pipeline in this repo—**pushing to `main` is publish**.

---

## 6. Conventions & Tips

- **Newest first** for news and publications.
- **Website bios:** short (~300 chars). Keep fuller text in `docs/team_bios_original.txt` when useful.
- **PI name** in author lists is commonly bolded as `<strong>Zhao, C.</strong>` or `<strong>Chang Zhao</strong>`.
- **Tab jumps** from news or other copy: use `href="#"` plus `data-tab="…"`, not a bare `#tab-…` hash (the JS tab system drives visibility).
- **External links:** prefer `target="_blank"` and `rel="noopener noreferrer"` on teaching/outward links.
- **Case and spaces:** GitHub Pages is case-sensitive; mismatched `img/…` paths cause broken images. Prefer filenames without spaces.
- **Internal planning notes:** `updates.txt` and Lab News Tracker files are not rendered by the site; only edit them for lab workflow, not for the live page.

---

## Maintainer note

When in doubt about structure, copy an existing item of the same type (news item, team card, vacancy card, publication item, course card) and replace the text and image paths. That preserves markup and CSS expectations without needing style changes.
