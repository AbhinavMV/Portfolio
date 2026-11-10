# Abhinav MV · Portfolio

**Live:** [abhinav-portfolio.vercel.app](https://abhinav-portfolio.vercel.app)

Personal portfolio of **Abhinav MV**, a backend engineer who builds blockchain data APIs and real-time indexing pipelines with TypeScript, NestJS, ClickHouse and Rust.

A single-page site with a sticky two-column layout. On the left: identity, a section nav that follows your scroll position, and links. On the right: scrolling content covering experience, measurable impact, selected work and skills.

## Features

- **Content in one place.** Every word on the page comes from [`src/content/profile.ts`](src/content/profile.ts), a typed TypeScript module, so updating the site means editing data, not markup.
- **Impact first.** About opens with headline metrics. Selected work is a set of short *problem → approach → result* case studies.
- **Light and dark themes.** Uses `next-themes`, defaults to dark, follows the system setting and has a toggle with no flash on load.
- **Restrained motion.** Content fades in as you scroll, and a soft spotlight follows the cursor (pointer devices only). Both turn off under `prefers-reduced-motion`.
- **Accessible.** Semantic landmarks, a skip-to-content link, labelled icon links, `aria-current` on the active nav item, and visible focus states.
- **SEO ready.** Metadata, an Open Graph image generated at build time, `sitemap.xml` and `robots.txt`.
- **Fully static.** Every route is prerendered at build time.

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) on React 19 |
| Language | TypeScript 5.9 (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), configured in CSS with `@theme` and OKLCH colour tokens |
| Motion | [Motion](https://motion.dev) (`motion/react`) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Fonts | [Geist Sans and Geist Mono](https://vercel.com/font) |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

Requires Node.js 20.9 or newer (pinned through `engines` in `package.json`, which Vercel also reads).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Make a production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Run `tsc --noEmit` |

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, theme provider, site metadata
│   ├── page.tsx              # the single page: sidebar + all sections
│   ├── globals.css           # Tailwind import, design tokens, light/dark palettes
│   ├── opengraph-image.tsx   # 1200×630 social preview, generated at build time
│   ├── sitemap.ts
│   ├── robots.ts
│   └── favicon.ico
├── components/
│   ├── section-nav.tsx       # scroll-spy nav (IntersectionObserver)
│   ├── reveal.tsx            # fade-in-on-scroll wrapper
│   ├── spotlight.tsx         # cursor-following background glow
│   ├── theme-toggle.tsx
│   └── icons.tsx             # inline SVG icons
└── content/
    └── profile.ts            # ← all site content lives here
public/
└── Abhinav_MV_Resume.pdf     # served at /Abhinav_MV_Resume.pdf
docs/
└── research/                 # design research behind the redesign
```

## Updating content

| To change… | Edit |
| --- | --- |
| Name, role, tagline, email, social links | `profile` in `src/content/profile.ts` |
| About paragraphs and headline metrics | `about`, `metrics` |
| Jobs and their highlights | `experience` |
| Case studies | `caseStudies` |
| Skills | `skills` |
| Downloadable resume | Replace `public/Abhinav_MV_Resume.pdf` with the same filename, or change `profile.resume` |
| Colours | The `:root` and `.dark` token blocks in `src/app/globals.css` |
| Sections in the nav | The `sections` array at the top of `src/app/page.tsx` |

`profile.siteUrl` is the production domain. The canonical URL, Open Graph tags, sitemap and robots file all derive from it.

## Deployment

The site deploys to Vercel with no configuration: import the repository at [vercel.com/new](https://vercel.com/new), and every push to `main` triggers a production deploy.

Every route is static, so any static host also works. To publish on GitHub Pages, add `output: "export"` to `next.config.ts` and upload the generated `out/` directory. If the site is served from a sub-path, also set `basePath`.

## Design notes

The redesign follows patterns shared by well-regarded developer portfolios: a single typeface family, one accent colour, a narrow reading column, experience-first ordering, and motion used sparingly. The research, with sources, is in [`docs/research/modern-portfolio-design.md`](docs/research/modern-portfolio-design.md).

## History

The original 2021 version was a JavaScript Next.js (Pages Router) site with Tailwind v2 and framer-motion. Its source is still in this repository's git history, before the `feat(site): rewrite portfolio in next.js 16 and typescript` commit.
