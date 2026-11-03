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

The static production files are generated in `dist/public`. The repository includes `vercel.json`, which sets the Vercel build command, output directory, and SPA rewrites for nested lesson and biography routes. Import the `Physion` repository into Vercel and deploy with the default project settings.

## Main routes

- `/` — welcome page
- `/learn` — course browser
- `/learn/:slug` — detailed lesson pages
- `/scientists` — biography index
- `/scientists/:slug` — full scientist profiles
- `/glossary` — physics reference
- `/settings` — learning preferences

The project uses Vite, React, TypeScript, Wouter, Tailwind CSS, and Lucide icons.
