# Arsalan Ahmad | Personal Portfolio Website

A personal digital hub that brings together professional identity, technology, projects, research, interests, and expertise. It showcases who I am, what I create, and the solutions and services I can offer.

**Live Website:** https://whoarsalan.srht.site

## About

This portfolio goes beyond a traditional online resume. It provides a central space to explore my professional journey, technical capabilities, academic interests, projects, and personal pursuits.

The goal is to create a digital presence that reflects both my professional identity and the person behind the work.

## Portfolio Sections

- **About Me:** Background, interests, and professional journey.
- **Projects:** Development projects and technical experiments.
- **Research:** Academic interests and research activities.
- **Experience:** Internships and professional experience.
- **Services:** Technical skills and solutions I can offer.
- **Beyond Technology:** Personal interests and activities.
- **Contact:** Opportunities for communication and collaboration.

## Technology Stack

**Core Technologies**
- HTML5 — Semantic markup, ARIA attributes, and accessible navigation.
- CSS3 — Modular styling, Grid, Flexbox, CSS custom properties, and fluid layouts.
- Vanilla JavaScript (ES5-style) — Interactive functionality without external frameworks or libraries.

**Development Tools**
- Git and GitHub — Version control and source code management.
- ChatGPT — Brainstorming, problem-solving, code assistance, and content refinement.
- Claude — Development assistance, code exploration, and implementation support.
- PostHog — Privacy-conscious website analytics with Do Not Track support.

**Design and Typography**
- Google Fonts (Geist)
- SVG icons
- WebP image assets

## Key Features

**User Experience and Interface**
- Responsive layouts for desktop, tablet, and mobile.
- Light and dark themes with system preference detection.
- Theme preferences saved using localStorage.
- Hash-based routing for project case studies.
- Mobile navigation menu.
- Expandable content sections.
- Photo lightbox.
- Scroll reveal animations and reading progress indicator.
- Running-track animation.

**Accessibility**
- Semantic HTML structure.
- ARIA attributes and accessible navigation.
- Skip-to-content link.
- Keyboard-friendly interactions.
- Reduced-motion support through `prefers-reduced-motion`.
- Print stylesheet.

**Performance**
- Lazy-loaded WebP images.
- Modular CSS and JavaScript architecture.
- No frontend framework or build process.
- Optimized asset loading and responsive layouts.

**SEO and Discoverability**
- Descriptive page metadata.
- Open Graph metadata.
- Twitter Cards.
- XML sitemap.
- Robots.txt.
- JSON-LD structured data using the Person schema.
- Web app manifest.

**Security and Privacy**
- Content Security Policy (CSP).
- Security headers.
- Clean URL redirects.
- Do Not Track-aware analytics.
- Contact form honeypot for basic spam protection.

**Contact Form**
- Custom client-side validation.
- Honeypot spam detection.
- Pre-filled email draft using `mailto:`.
- Opens the visitor's configured email application.

## Project Architecture

The website uses a modular, framework-free architecture.

- **14 CSS files** for organized styling and responsive layouts.
- **12 JavaScript modules** for interactive functionality.
- Semantic HTML for page structure and accessibility.
- No external JavaScript frameworks, dependencies, or build tools.

## Project Structure

```text
personal-portfolio-website/
├── contact/
│   └── index.html
├── css/
│   └── 14 modular stylesheets
├── images/
│   └── WebP images and visual assets
├── js/
│   └── 12 JavaScript modules
├── index.html
├── 404.html
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── _headers
├── _redirects
├── README.md
└── LICENSE
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/techarsalan/personal-portfolio-website.git
```

Navigate to the project directory:

```bash
cd personal-portfolio-website
```

Open `index.html` in your browser.

No package installation, framework setup, or build process is required.

## Deployment

The website is deployed using SourceHut Pages.

**Live Website:** https://whoarsalan.srht.site

The `_headers` and `_redirects` configuration files are formatted for static hosting environments that support these conventions, including Netlify and Cloudflare Pages.

## Development Philosophy

The objective was to build a personal website from scratch using core web technologies rather than relying on a frontend framework.

The project focuses on modular code, responsive design, accessibility, performance, search engine discoverability, and privacy-conscious analytics.

AI tools such as ChatGPT and Claude were used to support brainstorming, problem-solving, and development. The implementation and final project structure were brought together through an iterative development process.

## Connect With Me

- **Portfolio:** https://whoarsalan.srht.site
- **GitHub:** https://github.com/techarsalan
- **LinkedIn:** https://www.linkedin.com/in/whoarsalan/

For professional inquiries, collaborations, opportunities, and discussions around technology, feel free to connect.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Maintained by Arsalan Ahmad.
