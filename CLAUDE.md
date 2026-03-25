# CLAUDE.md

## Project Overview

Personal portfolio website for Nathan Oines — showcases development projects and competitive pinball stats. Single-page app deployed to nathanoines.com.

## Tech Stack

- **Framework:** Preact (lightweight React alternative)
- **Build Tool:** Vite
- **Styling:** SCSS (Sass) with modern `@use` syntax
- **Language:** JavaScript (JSX) — no TypeScript
- **Server:** Apache with PHP (for IFPA API proxy)

## Commands

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

No test runner, linter, or formatter is configured.

## Project Structure

```
src/
  main.jsx              # Entry point
  app.jsx               # Root component
  components/           # Each component in its own folder
    Header/             # Nav + social icons
    Hero/               # Landing section
    Projects/           # Project grid
    ProjectCard/        # Individual project card
    About/              # Bio + IFPA pinball stats
    Contact/            # CTA with email/social links
    Footer/             # Copyright
  styles/
    main.scss           # Global styles (imports variables & mixins)
    _variables.scss     # Design tokens (colors, spacing, breakpoints, etc.)
    _mixins.scss        # Responsive & utility mixins
  assets/               # Static assets (SVGs)
public/                 # Served as-is (favicons)
api-proxy.php           # PHP proxy for IFPA API (CORS workaround)
.htaccess               # Apache config (API proxy routing, gzip)
```

## Code Conventions

- **Components:** PascalCase directories and filenames, co-located `.jsx` + `.scss`
- **CSS:** BEM naming (`.block__element--modifier`), kebab-case class names
- **JS:** `function` keyword for components (not arrow functions), named exports, camelCase variables
- **SCSS:** `@use` imports (not `@import`), variables prefixed with `$`, partials prefixed with `_`
- **Responsive:** Mobile-first using `@include respond-to('md')` mixin from `_mixins.scss`

## Design Tokens (from `_variables.scss`)

- **Primary:** #2c3e50 | **Accent:** #e67e22 (orange)
- **Breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Font stack:** system fonts (no web font loading)

## IFPA API Integration

The About component fetches competitive pinball stats from the IFPA API:
- Dev: Vite proxies `/api/ifpa/*` to `api.ifpapinball.com`
- Prod: `.htaccess` routes `/api/ifpa/*` to `api-proxy.php` which uses cURL

## Deployment

Runs on a cPanel Apache/PHP server. The repo is cloned directly into `/home/nathanoines/public_html`.

**Deploy process:**
1. Run `npm run build` locally
2. Commit the `dist/` folder (it's tracked in git — cPanel's deploy runner can't build due to Wasm memory limits)
3. Push to `origin/main`
4. Pull from cPanel Git Version Control + Deploy HEAD Commit
5. `.cpanel.yml` copies `dist/` contents into `public_html`
