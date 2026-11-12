# Arsalan Ahmad – Portfolio

Static site: plain HTML, CSS and JavaScript. No build step and no dependencies.
Open `index.html` directly, or serve the folder with any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Structure

```
index.html            main page (no inline CSS, JS or base64 images)
contact/index.html   contact page (served at /contact/)
404.html              not-found page
favicon.ico
site.webmanifest
robots.txt
sitemap.xml
_redirects            old .html URLs -> clean URLs
_headers              security + cache headers (Netlify / Cloudflare Pages)
css/
  base.css            design tokens, reset, typography, layout
  navigation.css      top navigation
  hero.css            hero, affiliations, social links
  sections.css        projects, research, experience, Beyond Tech, lightbox
  case-study.css      case-study pages
  contact.css         contact page
  all-work.css        "All work" page
  approach.css        "How I approach problems"
  animations.css      motion and reveal effects
  mobile.css          phone and small-tablet refinements (loaded after about.css)
  theme.css           light / dark theme toggle
  services.css        services section
  about.css           about section
  utilities.css       small helpers, skip link, print styles
js/
  theme-init.js       runs in <head> to prevent a theme flash
  theme.js            theme toggle
  router.js           hash routing for case-study pages
  nav.js              active nav link
  menu.js             mobile menu (hamburger)
  disclosure.js       Beyond Tech toggles
  lightbox.js         photo viewer
  running-track.js    running animation
  contact-form.js     contact form (validation, opens email draft)
  analytics.js        PostHog analytics (project key is set inside the file)
  approach-reveal.js  approach section reveal
  reveal.js           scroll reveal + progress bar
images/
  logos/  profile/  projects/  creative/  running/  photography/  icons/
  og-image.png        social preview card (1200x630)
```

Load order of the CSS files in `index.html` matters (later files override earlier ones). Keep it as is.

## Before you publish: replace the placeholder domain

`https://your-domain.com` appears in:
- `index.html`, `contact/index.html` (served at `/contact/`) (canonical, og:url, og:image, twitter:image, JSON-LD)
- `robots.txt`
- `sitemap.xml`

Search and replace it with your real domain.

## Contact form

The form on `contact/index.html` (served at `/contact/`) validates the message, then opens the visitor's email app with a draft addressed to `arsalanjmi87@gmail.com`, pre-filled with their name, email, topic and message. They press Send in their mail app. No third-party form service is used.

## Service enquiries

Each service card links to `/contact/?service=<key>`, which pre-selects that service in the form's "What is this about?" dropdown. The service name is added to the email subject. To add a service, give its card a new key and add a matching `<option data-key="...">` in `contact/index.html` (served at `/contact/`).

## Adding content

- New image: put it in the matching `images/` subfolder (WebP recommended, max ~1600px wide) and give the `<img>` real `width` and `height` attributes.
- New section styles: add to the closest CSS file, or create a new one and link it in `index.html` before `utilities.css`.

## Analytics (PostHog)

`js/analytics.js` loads PostHog (US cloud, project key already set) on every page. It is a separate file because the Content-Security-Policy blocks inline scripts.
The CSP tags in `index.html` and `contact/index.html` (served at `/contact/`) already allow `us.i.posthog.com` and `us-assets.i.posthog.com`. For the EU cloud, change the hosts in `analytics.js` and in both CSP tags.
Session recording and surveys are switched off in `analytics.js`; enabling them also needs CSP changes.
