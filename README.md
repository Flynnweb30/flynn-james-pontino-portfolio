# Flynn James — B2B Sales Portfolio

Production-ready multi-page portfolio for Flynn James, Senior B2B SDR and appointment-setting specialist.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm install
npm run lint
npm run build
```

The production bundle is written to `dist/`.

Production URL: `https://flynnjamespontino-porfolio.onrender.com/`

XML sitemap: `https://flynnjamespontino-porfolio.onrender.com/sitemap.xml`

Crawler rules: `https://flynnjamespontino-porfolio.onrender.com/robots.txt`

## Render deployment

The included `render.yaml` is configured for a Render Static Site:

| Setting | Value |
|---|---|
| Service Type | Static Site |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Rewrite | `/*` → `/index.html` |

`npm install` is used because this source archive intentionally does not depend on a checked-in lockfile. Render resolves the declared semver ranges in `package.json` during deployment.

## SEO and performance

- Page-specific titles, descriptions, canonicals, Open Graph, and Twitter metadata
- WebPage/ProfilePage and BreadcrumbList JSON-LD generated per route
- Person, ProfessionalService, and WebSite structured data in the document shell
- Crawlable `/about`, `/services`, `/experience`, `/case-studies`, `/samples`, and `/contact` routes
- Sitemap and robots.txt
- Semantic navigation links with SPA navigation preserved
- Descriptive image alt text and explicit image dimensions where applicable
- Responsive page-photo backgrounds with page-specific focal positioning, stronger image visibility, and readable content overlays
- Consistent homepage-style navigation on every route without a redundant visible breadcrumb bar
- Custom SVG favicon and updated Render-domain canonical/structured-data URLs
- Lightweight transform-only ambient animation with `prefers-reduced-motion` support
- No additional runtime dependencies added
- Long-lived immutable caching for built assets on Render

## Routing

The app uses the History API for clean production URLs while continuing to understand legacy `#/...` links. Render's SPA rewrite serves `index.html` for direct route requests and refreshes.


## Google Search Console

Production sitemap: `https://flynnjamespontino-porfolio.onrender.com/sitemap.xml`

Production robots file: `https://flynnjamespontino-porfolio.onrender.com/robots.txt`

Use a URL-prefix Search Console property for `https://flynnjamespontino-porfolio.onrender.com/`, verify ownership, deploy the latest build, then submit `sitemap.xml`. The build now validates that the sitemap and robots files are copied into `dist/` before deployment completes.
