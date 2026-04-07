# Cat Tuong Portfolio Website

Portfolio website for Tran Thi Cat Tuong, built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project presents a personal profile with a modern animated interface and portfolio-style sections:

- Hero introduction
- About profile section
- Featured projects
- Experience timeline
- Contact section
- Dynamic detail pages for each project and tool

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- React Router
- shadcn/ui + Radix UI
- Vitest + Playwright

## Project Structure

- `src/pages/Index.tsx`: main one-page portfolio layout
- `src/components/Hero.tsx`: landing/intro section
- `src/components/About.tsx`: personal profile and contact snapshot
- `src/components/Projects.tsx`: featured projects list and tool links
- `src/components/Experience.tsx`: timeline section
- `src/components/Contact.tsx`: call-to-action and contact links
- `src/pages/ProjectDetail.tsx`: dynamic project detail page (`/project/:id`)
- `src/pages/ToolDetail.tsx`: dynamic tool detail page (`/tool/:tool`)
- `public/robots.txt`: crawler rules

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: build for production
- `npm run preview`: preview production build locally
- `npm run lint`: run ESLint
- `npm run test`: run tests once
- `npm run test:watch`: run tests in watch mode

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

## Notes

- Main SEO metadata is configured in `index.html`.
- The app uses client-side routing, so make sure your deployment supports SPA fallback.
