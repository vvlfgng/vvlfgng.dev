# vvlfgng.dev

The personal website of vvlfgng. A slow-growing collection of writing, projects, and current interests, modeled in structure after [マリウス](https://xn--gckvb8fzb.com/) and built on Astro.

Canonical domain: `vvlfgng.dev`. The `vvlfgng.com` domain redirects to the canonical with a 301.

## Stack

- [Astro 6](https://astro.build) — static site generator, strict TypeScript, no UI framework.
- Self-hosted [Commit Mono](https://commitmono.com/) (SIL OFL 1.1) under `public/fonts/`.
- Node 26 — pinned via `.node-version` and `package.json#engines`. Use [fnm](https://github.com/Schniz/fnm) or your version manager of choice.

## Local development

All commands run from the project root.

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start dev server at `http://localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Serve the production build locally              |

## Project structure

```
.design/core-pages/         Design brief, IA, tokens spec, tasks, and review.
public/                     Static assets (favicons, self-hosted font).
src/
├── config/site.ts          Single source of truth for site metadata,
│                           nav items, and social handles.
├── layouts/Base.astro      Shared page chrome (header, footer, nav).
├── pages/                  Routes: /, /now, /contact.
└── styles/global.css       Design tokens at :root + element styling.
```

The /now page's date stamp resolves automatically from the git commit time of `src/pages/now.astro` at build time, with a hardcoded fallback when no git history is available.

## Design system

Before changing layout, typography, color, or chrome, read the design brief and tokens spec in `.design/core-pages/`. The aesthetic is **Terminal Editorial**: dark monospace, comment-prefix voice tags (`// …`), bracket state markers (`[ ]`, `[soon]`, `[reserved]`), and one desaturated terminal-green accent reserved exclusively for interaction states.

Conventions worth noting before extending the site:
- URLs are flat at the top level. Dynamic segments only for `/blog/[slug]` and `/projects/[slug]` (when those ship).
- All chrome data lives in `src/config/site.ts`. Adding a section means creating its page file and adding one entry to the homepage TOC.
- Single `<h1>` per page; heading order h1 → h2 → h3 with no skips.
- Accent color is for interaction only. State indicators (current-page nav, active items) use `--fg-bright`. Inert text (`[soon]`, `[reserved]`, taglines, dividers) uses `--fg-dim`.

## License

Source code: all rights reserved (unlicensed). Self-hosted Commit Mono font: SIL OFL 1.1 — see `public/fonts/OFL-commit-mono.txt`.
