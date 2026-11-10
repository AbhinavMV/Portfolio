# Modern developer portfolio design: research (Nov 2026)

Research for redesigning this portfolio. The old site used Next.js (Pages Router), Tailwind v2, framer-motion and JavaScript; the new one will be TypeScript. Every claim below links to its primary source: the live site, its public repo, or official docs. Live sites were checked on 2026-11-10. "Stack" comes from the page's served HTML (`/_next/static`, `data-astro`, `<meta name="generator">`, font file names) unless a repo is linked.

Method note: I read the live pages through a text extractor and also fetched their raw HTML. So colour, motion and spacing notes come from markup and class names, not screenshots. Check the visual claims by eye before copying anything.

---

## 1. Exemplary portfolios

| Site | Archetype | Stack evidence |
| --- | --- | --- |
| [brittanychiang.com](https://brittanychiang.com) | Sticky two-column résumé portfolio | Next.js + Tailwind + Vercel, set in Inter (stated in the site footer). Older v4 is Gatsby + styled-components, MIT ([github.com/bchiang7/v4](https://github.com/bchiang7/v4)) |
| [leerob.com](https://leerob.com) | Single-column text-first | Next.js 16, Tailwind 4, `@next/mdx`, framer-motion 12, TypeScript, Vercel ([package.json](https://raw.githubusercontent.com/leerob/site/main/package.json), [repo](https://github.com/leerob/site)) |
| [paco.me](https://paco.me) | Single-column minimal | Next.js (`/_next/static` in HTML) |
| [rauno.me](https://rauno.me) | Minimal index + craft gallery | Next.js; body font through a `--fonts-body` CSS variable (HTML) |
| [emilkowal.ski](https://emilkowal.ski) | Single-column, motion craft lives on sub-pages | Next.js + Tailwind (`max-w-[692px]`, `dark:` classes in HTML) |
| [delba.dev](https://delba.dev) | Single-page anchored sections (Work / Personal / About) | Next.js; Geist Sans, Geist Mono and Geist Pixel font files in HTML; `prefers-reduced-motion` handled |
| [joshwcomeau.com](https://www.joshwcomeau.com) | Content-hub / blog-as-portfolio | Next.js (`/_next/static`); dark-mode toggle and sound toggle in the footer |
| [cassidoo.co](https://cassidoo.co) | Single-column personal homepage | Astro (`<meta name="generator" content="Astro v7.0.3">`); open source at `cassidoo/blahg` (footer) |
| [antfu.me](https://antfu.me) | Dense single-column link index | Vite + Vue + UnoCSS, Netlify ([github.com/antfu/antfu.me](https://github.com/antfu/antfu.me)) |

### Notes per site

**Brittany Chiang ([brittanychiang.com](https://brittanychiang.com)).** This is the closest model for an engineer with a résumé.
- **Layout:** two columns on large screens. The left `<header>` is `lg:sticky lg:top-0 lg:max-h-screen lg:w-[48%]` and holds the name, role, one-line pitch, in-page nav and social icons. The right `<main>` is `lg:w-[52%]` and scrolls. The container is `max-w-screen-xl` (from served HTML).
- **Colour:** dark slate (`bg-slate-900`, `text-slate-400`) with a cursor-following `radial-gradient` spotlight. That is the only decorative motion.
- **Sections:** About, Experience, Projects, Writing, and a footer with build credits.
- **Experience entries:** a date range in a narrow column, then "Title · Company" linked to the company, a short paragraph, and pill-shaped tech tags. Some entries add extra links. The section ends with "View Full Résumé", which links a PDF.
- **Accessibility:** a "Skip to Content" link.
- **Reuse caution:** the v4 README allows forking only with attribution and a link back ([v4 README](https://github.com/bchiang7/v4)). Copy the pattern, not the design.

**Lee Robinson ([leerob.com](https://leerob.com)).**
- Plain, document-like single column: name, short bio with a "Default/Long" toggle, a list of Notes, and a list of dated posts. There is almost no decoration.
- The source is a good current reference for a TypeScript + App Router + Tailwind 4 + MDX setup ([package.json](https://raw.githubusercontent.com/leerob/site/main/package.json)).
- It generates the OG image with code (`opengraph-image.png?...` in `<head>`).

**Paco Coursey ([paco.me](https://paco.me)).**
- Sections: Building, Projects, Writing, Now, Connect. Each item is a link plus one line of description.
- Very sparse, with generous vertical rhythm. Italics are the only emphasis.
- It shows that a short page with a few well-written lines reads as senior. The author built `cmdk` and `next-themes`, which are listed on the page.

**Rauno Freiberg ([rauno.me](https://rauno.me)).**
- The home page is a short intro and a nav to Craft, Projects and Field Notes.
- The interaction work lives on the Craft pages, not the landing page.
- The "Email" link is click-to-copy and shows a "Copied" state: a small, good micro-interaction.

**Emil Kowalski ([emilkowal.ski](https://emilkowal.ski)).**
- Today / Projects / Writing / More, in a ~692px column.
- He is a motion specialist (Sonner, Vaul, animations.dev, all listed on the page), yet his home page stays static. One of his articles is titled "You Don't Need Animations". That restraint is the lesson.

**Delba de Oliveira ([delba.dev](https://delba.dev)).**
- One page with anchored sections: Work, Personal, About me.
- Each work item is a card with an image (`/_next/image`).
- The intro states plainly what role she is looking for, with a "Let's talk" CTA. That is worth copying if this site supports a job search.
- Uses Geist Sans + Mono, plus Geist Pixel as a display accent.

**Josh W. Comeau ([joshwcomeau.com](https://www.joshwcomeau.com)).**
- The opposite extreme: personality-heavy, with whimsy, sound effects and a dark-mode toggle (footer).
- It works because the brand is teaching CSS and animation. For a backend engineer it is the wrong model, but it shows that motion has to be on-message to earn its place.

**Cassidy Williams ([cassidoo.co](https://cassidoo.co)).**
- Photo, one-line tagline ("Software Engineer in Chicago"), short bio, recent posts, subscribe links, tag index. Text-driven, with a single image.
- Built with Astro, a live example of the Astro path.

**Anthony Fu ([antfu.me](https://antfu.me)).**
- A link-dense index (Blog, Projects, Talks, Sponsors, ...). This works when you have a lot of open source to list.
- Not Next.js. It shows that the minimalist look comes from the content, not the framework.

### What makes them look professional (common factors)
- **One typeface family, usually a neo-grotesque sans.** Inter: brittanychiang.com (stated in footer). Geist: delba.dev (font files). Weight and colour carry the hierarchy, not many sizes.
- **Narrow measure.** Body column around 600-700px (emilkowal.ski `max-w-[692px]`). Even the two-column layout uses half of `max-w-screen-xl` per column (brittanychiang.com).
- **Muted neutral palette plus one accent.** Slate greys with a teal accent and a subtle gradient (brittanychiang.com). Most of the others are monochrome with link underlines.
- **Low density, list-shaped content.** Title + one line + date/tags (paco.me, emilkowal.ski, cassidoo.co).
- **Motion restraint.** At most one ambient effect (Chiang's cursor spotlight) and micro-interactions (Rauno's copy-email). Motion-heavy craft lives on sub-pages, not the landing page (rauno.me, emilkowal.ski). Delba's CSS respects `prefers-reduced-motion`.
- **Dark mode with system default.** `prefers-color-scheme` is present in leerob.com, emilkowal.ski and delba.dev. A manual toggle is less common (joshwcomeau.com).
- **Real OG images.** Every Next.js site above ships `og:image` with `twitter:card=summary_large_image`, except paco.me, which uses `summary` (served HTML).

---

## 2. Recurring layout patterns

| Pattern | Seen at | Pros | Cons for a backend/full-stack engineer with 4-5 years |
| --- | --- | --- | --- |
| **Sticky two-column**: left identity + nav, right scrolling content | [brittanychiang.com](https://brittanychiang.com) | Name, role and contact are always visible. A recruiter scans Experience in about 30s. Active-section nav highlights well. Collapses to a single column on mobile. | Very widely imitated, so it reads as a template unless the copy and accents are your own. Needs scroll-spy JS. The left column wastes space on mid-size screens. |
| **Single-column minimal**: name, bio, short lists | [leerob.com](https://leerob.com), [paco.me](https://paco.me), [emilkowal.ski](https://emilkowal.ski), [cassidoo.co](https://cassidoo.co) | Fastest to build and the fastest page. Ages well. The writing does the work. | It only looks senior if the copy is strong. Experience with metrics can feel cramped unless it moves to its own page. |
| **Single page with anchored sections and project cards** | [delba.dev](https://delba.dev) | Good for showing visual project artefacts. A clear "hire me" CTA. | Backend work rarely has screenshots. Cards with placeholder images look weak. |
| **Content hub / blog-first** | [joshwcomeau.com](https://www.joshwcomeau.com), [antfu.me](https://antfu.me) | Builds long-term credibility. | Needs a steady stream of content. Empty "Blog" sections hurt more than they help. |
| **Bento grid** | Common in templates and listicles. None of the exemplars above use it on the landing page. | Visually rich and good for screenshots. | Tile sizing implies a visual hierarchy that backend work rarely has. Heavy on the layout effort. Dated if overdone. |

**Fit:** a backend/full-stack engineer's strongest material is experience (scope, scale, impact) and a few systems projects. The **sticky two-column** and **single-column minimal** layouts both put that material first. Bento and card-heavy layouts favour visual artefacts the engineer probably doesn't have.

---

## 3. Recommended current stack

Current versions are from the npm registry on 2026-11-10 (`npm view <pkg> version`): `next` 16.4.6, `react` 19.3.1, `tailwindcss` 4.3.5, `motion` 14.11.1, `astro` 7.4.8, `geist` 1.9.2, `next-themes` 0.4.6, `shadcn` 4.23.0, `typescript` 7.0.2. The Tailwind docs header shows v4.3 ([tailwindcss.com](https://tailwindcss.com/docs/installation/framework-guides/nextjs)). As a real-world baseline, leerob.com pins `next` 16.4.1 and `tailwindcss` ^4.1.8 ([package.json](https://raw.githubusercontent.com/leerob/site/main/package.json)).

### Next.js (App Router, static export) vs Astro

**Next.js static export**
- **Setup:** set `output: 'export'`; `next build` writes `out/`.
- **What works:** Server Components run at build time; client components still work; `GET` route handlers with `force-static` are prerendered ([static exports](https://nextjs.org/docs/app/guides/static-exports)).
- **Not supported:** default `next/image` optimisation (needs a custom loader or unoptimized images), redirects/rewrites/headers, Server Actions, ISR, and dynamic routes without `generateStaticParams` (same page).
- **Deploy:** the docs list static export as "Limited" feature support but deployable to any static host ([deploying](https://nextjs.org/docs/app/getting-started/deploying)). GitHub Pages has an official template that sets `output: 'export'` and `basePath` from `PAGES_BASE_PATH` ([deploy-github-pages](https://github.com/nextjs/deploy-github-pages), [next.config.ts](https://raw.githubusercontent.com/nextjs/deploy-github-pages/main/next.config.ts)).
- **OG images:** generated with `ImageResponse` from `next/og` at build time by default ("statically optimized") and default to 1200x630 ([opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)). A static `opengraph-image.png` file also works.
- **Hosting on Vercel:** Vercel is a verified Next.js adapter, so you can drop `output: 'export'` there and keep full features ([deploying](https://nextjs.org/docs/app/getting-started/deploying)).

**Astro**
- **JavaScript:** renders components to HTML and CSS, "stripping out all client-side JavaScript automatically". Only components marked with `client:load`, `client:idle` or `client:visible` hydrate as islands. React components are supported ([islands](https://docs.astro.build/en/concepts/islands/)).
- **Tailwind 4:** `astro add tailwind` installs `@tailwindcss/vite` on Astro 5.2+ ([styling](https://docs.astro.build/en/guides/styling/)).
- **GitHub Pages:** official `withastro/action@v6` + `actions/deploy-pages@v5` workflow; set `site`, and set `base` unless the repo is `<user>.github.io` ([deploy to GitHub](https://docs.astro.build/en/guides/deploy/github/)).

**Verdict for this repo:** stay on **Next.js**. The old site and its muscle memory are already React/Next. The repo's `package.json` already has the `next dev` / `next build` / `typecheck` scripts. Most exemplars and their source (leerob/site) are Next.js 16 + Tailwind 4 + TypeScript. For a content-light portfolio, Astro's zero-JS advantage is real but small: a mostly Server-Component Next page with one or two client islands is also light. Pick Astro only if you want a Markdown-blog-first site and minimal JS above all.

### Tailwind v4 setup (Next.js)
From [tailwindcss.com/docs/installation/framework-guides/nextjs](https://tailwindcss.com/docs/installation/framework-guides/nextjs):
```bash
npm install tailwindcss @tailwindcss/postcss postcss
```
```js
// postcss.config.mjs
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```
```css
/* app/globals.css */
@import "tailwindcss";
```
Configuration is CSS-first in v4: there is no `tailwind.config.js` by default. Define design tokens in CSS (`@theme`) instead of the v2 JS config.

### Motion
- **Package:** "Motion for React" is the renamed Framer Motion. Install `motion` and import from `motion/react` (`import { motion } from "motion/react"`). It is described as fully tree-shakable ([motion.dev/docs/react](https://motion.dev/docs/react)). `framer-motion` is still published at the same version (14.11.1, npm), but new code should use `motion`.
- **Reduced motion:** wrap the app in `<MotionConfig reducedMotion="user">`. It disables transform and layout animations for users with reduced motion and keeps opacity and colour animations. `useReducedMotion()` gives you a boolean for custom handling ([accessibility](https://motion.dev/docs/react-accessibility)).
- **Budget:** at most one entrance fade/stagger and hover micro-interactions. Prefer plain CSS transitions where they are enough. Every animated component is a client component in the App Router.

### Fonts
- **`next/font`:** self-hosts Google and local fonts. Files are served from your domain, so the browser sends no requests to Google, and there is no layout shift. Variable fonts are recommended ([fonts](https://nextjs.org/docs/app/getting-started/fonts)).
- **Geist:** OFL-1.1, with Sans, Mono, Serif and Pixel families ([vercel.com/font](https://vercel.com/font)).
  - Load it with `next/font/google` (`import { Geist } from 'next/font/google'`), as the Next docs example does.
  - Or use the `geist` npm package (`geist/font/sans`, `geist/font/mono`), which exposes `--font-geist-sans` / `--font-geist-mono` variables.
  - Geist Serif is not on Google Fonts (vercel.com/font).
- **Inter:** the proven alternative (brittanychiang.com is "set entirely in Inter").
- **Recommendation:** Geist Sans for text and Geist Mono for dates, tags and code. Expose them as CSS variables and map them in `@theme` (`--font-sans`, `--font-mono`).

### Dark mode
- Tailwind v4's `dark:` follows `prefers-color-scheme` by default.
- For a manual toggle, override the variant: `@custom-variant dark (&:where(.dark, .dark *));`. Set the class before paint with an inline `<head>` script to avoid a flash of unstyled content (FOUC) ([dark mode](https://tailwindcss.com/docs/dark-mode)).
- In Next.js, `next-themes` does this for you. shadcn recommends `ThemeProvider` with `attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange` and `suppressHydrationWarning` on `<html>` ([shadcn dark mode](https://ui.shadcn.com/docs/dark-mode/next)).
- **Recommendation:** default to system, offer a small toggle, and keep a single accent colour that passes contrast in both themes.

### shadcn/ui
Optional. It copies components into your repo (CLI `shadcn` 4.23.0, npm). A portfolio needs maybe a Button, a Badge for tech tags, and a Tooltip, which are easy to hand-roll. Use it only if you want its theme-token conventions.

### Deploy
- **Vercel:** zero-config for Next.js; it is the verified adapter ([deploying](https://nextjs.org/docs/app/getting-started/deploying)). The simplest option, with preview deploys per branch.
- **GitHub Pages:** requires `output: 'export'`, plus `basePath` unless you use `<user>.github.io` or a custom domain, plus unoptimized/custom-loader images. Use the official template ([deploy-github-pages](https://github.com/nextjs/deploy-github-pages)).
- **Recommendation:** keep `output: 'export'` anyway. Then the site stays portable and works on either host.

---

## 4. Must-have sections and content practices

**Sections**, in the order the exemplars use:
1. **Hero/identity:** name, role ("Backend / Full-stack Engineer"), one-sentence pitch naming your domain, social icons. Add a status line if job-seeking, as delba.dev does.
2. **About:** 2-3 short paragraphs.
3. **Experience:** a date range, "Title · Company" linked, one paragraph or 2-3 bullets, and tech tags. Format as on [brittanychiang.com](https://brittanychiang.com).
   - Lead with **quantified impact**: latency, throughput, cost, reliability/SLO, scale (requests/day, data volume), team or migration scope.
   - Use the form "Cut p99 latency of X from 800ms to 120ms by …", not a list of duties.
4. **Projects:** 3-5 items, each with problem → approach → result, plus repo/demo links. Backend projects can show an architecture diagram instead of a screenshot.
5. **Writing** (optional): include only if you have 2 or more posts (paco.me, emilkowal.ski). An empty section hurts.
6. **Résumé download:** a PDF linked near Experience ("View Full Résumé", brittanychiang.com) and in the hero.
7. **Contact:** an email link (copy-to-clipboard like rauno.me is a nice touch) plus GitHub and LinkedIn. Avoid contact forms on a static export: Server Actions are unsupported ([static exports](https://nextjs.org/docs/app/guides/static-exports)).

**SEO / sharing**
- Use the Next.js Metadata API for title and description.
- Add a 1200x630 `opengraph-image` (static file or `ImageResponse`) with `opengraph-image.alt.txt` ([opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)).
- Use `twitter:card=summary_large_image`, like the exemplars.
- Add `sitemap.ts` and `robots.ts`, prerendered as static route handlers.

**Accessibility** (WCAG 2.2 AA, [quickref](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&levels=aa)):
- A skip link (2.4.1 Bypass Blocks; brittanychiang.com has one).
- Text contrast of at least 4.5:1 in both themes (1.4.3).
- Visible focus rings (2.4.7) that a sticky header does not cover (2.4.11).
- Pointer targets of at least 24x24 px (2.5.8).
- Respect reduced motion (2.3.3 Animation from Interactions, plus the Motion `reducedMotion="user"` above), and any auto-moving effect must be pausable (2.2.2).
- Semantic landmarks: `header`, `nav`, `main`, `section` with headings.

**Performance**
- Targets at the 75th percentile: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 ([web.dev/vitals](https://web.dev/articles/vitals)).
- To meet them:
  - Use `next/font` to avoid layout shift.
  - Keep most components as Server Components.
  - Keep motion and theme code in small client islands.
  - Give images explicit sizes.
  - Avoid large hero media.

---

## 5. Recommendation

1. **Stack:** Next.js 16 App Router + React 19 + TypeScript, `output: 'export'`. Tailwind CSS 4.3 through `@tailwindcss/postcss` with CSS-first `@theme` tokens. `motion` (`motion/react`) for a little motion, wrapped in `MotionConfig reducedMotion="user"`. Geist Sans + Geist Mono through `next/font`. `next-themes` for system-default dark mode with a toggle. No shadcn unless needed.
2. **Layout:** the sticky two-column layout (identity + section nav + socials on the left; About / Experience / Projects / Contact on the right), collapsing to one column under `lg`. Keep the content column around 600-700px. Make it your own with a single accent colour, your own copy, and one restrained ambient detail, not a clone of brittanychiang.com.
3. **Content:** impact-metric experience bullets, 3-5 backend/full-stack projects with diagrams and repo links, a résumé PDF, and copy-to-clipboard email. Ship a generated OG image, a sitemap and a skip link.
4. **Deploy:** Vercel for the simplest path. Static export keeps GitHub Pages viable, using the official template with `basePath`.
5. **Motion budget:** one entrance stagger and hover states. Nothing on scroll that blocks reading.
