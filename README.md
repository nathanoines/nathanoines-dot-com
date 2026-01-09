# nathanoines.com

Personal portfolio website showcasing my projects and competitive pinball career.

**Live site:** [nathanoines.com](https://nathanoines.com)

## Tech Stack

- **Preact** - Lightweight React alternative
- **Vite** - Fast build tool with HMR
- **SCSS** - CSS preprocessing with variables and mixins

## Features

- Responsive design optimized for all devices
- Live IFPA pinball statistics via API integration
- Project showcase with links to live sites and GitHub repos
- Clean, modern UI with orange accent theme

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is deployed to a Linux server with Apache. After building:

```bash
git pull
npm run build
cp -r dist/* .
```

The `api-proxy.php` file handles IFPA API requests in production to avoid CORS issues.

## Project Structure

```
src/
  components/
    Header/      # Navigation
    Hero/        # Landing section
    Projects/    # Featured projects
    About/       # Bio and pinball stats
    Contact/     # Contact links
    Footer/      # Site footer
  styles/        # Global SCSS variables and mixins
```

## License

MIT
