# Dhruv Thakor — Portfolio

Personal portfolio site built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide icons and the Geist typeface.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The page reloads as you edit.

To test the production build:

```bash
npm run build
npm start
```

## Updating content

Nearly all text lives in **`src/content/site.ts`**: hero copy, the "Currently" line, About, experience, skills, education, certificates, highlights and the approach steps. Edit that file. You don't need to touch the components.

- **GitHub:** set `github` in `site.ts` to show it in the hero and footer. If it's empty, it stays hidden.
- **Domain:** once deployed, set `url` in `site.ts` to your real domain. It's used for SEO, the sitemap and social previews.
- **Resume:** replace `public/Dhruv-Thakor-Resume.pdf` and keep the same filename.
- **Colours:** the design tokens are at the top of `src/app/globals.css`, with a dark-mode set.

## Structure

```
src/
  app/          layout (SEO metadata, JSON-LD), page, favicon, OG image, robots, sitemap
  components/   Navbar, Hero, HeroVisual, About, Experience, ExperienceCard, WorkHighlights,
                Approach, Skills, Education, Contact, CopyEmail, Footer, Reveal, ui
  content/      site.ts (all content)
public/         resume PDF
```

## Deploy (Vercel, recommended)

1. Push this repo to GitHub.
2. At https://vercel.com/new, import the repository. The default settings detect Next.js.
3. Click **Deploy**. Optionally, add a custom domain under Project → Settings → Domains, then update `url` in `site.ts`.

The site is fully static, so it also deploys to Netlify or Cloudflare Pages with `npm run build` as the build command.
