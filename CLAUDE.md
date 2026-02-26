# TinoCat - Cat Information Website

## Project Overview
Content-driven cat information website built with Next.js 15 (App Router) + TypeScript + Tailwind CSS + MDX.

## Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + `@tailwindcss/typography`
- **Content:** MDX files parsed with `gray-matter` + rendered with `next-mdx-remote-client/rsc`
- **SEO:** `generateMetadata` per page, JSON-LD structured data, dynamic sitemap/robots

## Project Structure
- `src/app/` — App Router pages and layouts
- `src/components/` — React components (shared UI, content, home, tools)
- `src/lib/` — Core utilities (types, constants, content engine, MDX)
- `content/` — MDX content files organized by section (breeds, health, food-reviews, behavior, blog)

## Key Conventions
- All content pages are statically generated via `generateStaticParams` + `dynamicParams = false`
- Client Components (`'use client'`) only for interactive tools (weight calculator, name generator)
- Import alias: `@/*` maps to `./src/*`
- Brand colors: warm amber primary, indigo accent

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (verifies static generation)
- `npm run lint` — ESLint
