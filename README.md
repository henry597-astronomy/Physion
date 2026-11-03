# EthioCosmos

EthioCosmos is a responsive physics learning website with separate Home, Courses, Lesson, Biography, Glossary, and Settings pages.

## Run locally

```bash
pnpm install
pnpm dev:static
```

Then open the local URL printed by Vite.

## Build for hosting

```bash
pnpm install
pnpm check
pnpm build:static
```

The static production files are generated in `dist/public`. Upload that directory to a static host such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

## Main routes

- `/` — welcome page
- `/learn` — course browser
- `/learn/:slug` — detailed lesson pages
- `/scientists` — biography index
- `/scientists/:slug` — full scientist profiles
- `/glossary` — physics reference
- `/settings` — learning preferences

The project uses Vite, React, TypeScript, Wouter, Tailwind CSS, and Lucide icons.
