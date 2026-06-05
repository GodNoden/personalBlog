# personalBlog — Qwen Context

## Stack
- **Framework:** Next.js 16 (App Router) + React 19
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 + shadcn/ui (New York style)
- **Package Manager:** pnpm
- **Deployment:** Vercel

## Project Structure
- `app/` — App Router pages (/, /about, /archive, /post/[slug])
- `components/` — React components (custom + shadcn/ui primitives)
- `lib/` — Business logic (posts.ts, i18n.ts, language-context.tsx)
- `public/` — Static assets (icons, placeholders)
- `styles/` — Global CSS

## Key Conventions
- **Pages:** Home (client), About (client, trilingüe), Archive (client, filtros), Post (server, SSG)
- **Posts:** Definidos en `lib/posts.ts` con interfaz `Post` (slug, title, excerpt, content, date, language, category, readTime, author, featured)
- **i18n:** Context React con `LanguageProvider`, switcher en navbar. Idiomas: es, en, fr
- **Categorías:** Philosophy, Literature, Personal, Travel, Other
- **Dark mode:** next-themes con variables CSS oklch
- **Fuentes:** Inter (sans) + Cormorant Garamond (serif)
- **Componentes:** shadcn/ui con `cn()` utility (clsx + tailwind-merge)
- **Sin testing configurado aún**

## Contenido actual
3 posts literarios (ES/EN/FR). Contenido hardcodeado en TypeScript, sin CMS ni archivos markdown.
