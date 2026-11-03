# Interactive-Portfolio-2026

A premium, modern, highly interactive developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Showcases projects, skills, experience, and contact channels with a sophisticated dark/light theme, smooth animations, and GitHub integration.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://mwakidenis.com)
[![GitHub](https://img.shields.io/badge/GitHub-mwakidenis-181717?style=for-the-badge&logo=github)](https://github.com/mwakidenis)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

## Live Portfolio

🌐 **https://mwakidenis.com**

## Features

- **Premium UI/UX** — Clean, sophisticated typography with a futuristic developer aesthetic.
- **Dark & Light Themes** — Professional dual-theme support with persistence and system preference detection.
- **Hero Section** — Animated gradient background, typing intro, social links, and strong CTAs.
- **Responsive Navigation** — Sticky navbar with active section indicators, smooth scrolling, and a functional mobile menu.
- **About Section** — Bio, skills with category badges, experience timeline, and core values.
- **Projects Section** — Premium project cards with tech badges, GitHub/live-demo links, client-side filtering, and hover animations.
- **Contact Section** — Validated contact form with loading/success/error states and direct contact channels.
- **GitHub Integration** — Live GitHub profile and recent repositories fetched via the GitHub API (no tokens exposed), with loading/error states and caching.
- **Performance** — Code-split routes (lazy loading), optimized images, lazy-loaded assets, and minimal bundle size.
- **Accessibility** — Semantic HTML, keyboard navigation, focus-visible indicators, ARIA labels, and reduced-motion support.
- **SEO** — Open Graph and Twitter Card metadata, semantic structure, and descriptive page titles.

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 (TypeScript) |
| Build Tool | Vite |
| Styling | Tailwind CSS + CSS variables (design tokens) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| Notifications | Sonner |
| Deployment | Vercel |
| Language | TypeScript (strict) |

## Project Architecture

```
src/
├── App.tsx                 # App shell with routing & theme provider
├── main.tsx                # Entry point (BrowserRouter + StrictMode)
├── index.css               # Design tokens (CSS variables) + global styles
├── tailwind.css            # Tailwind directives
├── components/
│   ├── Navbar.tsx          # Premium responsive navigation
│   ├── Footer.tsx          # Footer with GitHub profile & recent repos
│   ├── github/
│   │   ├── githubProfile.tsx   # GitHub profile card (API + cache)
│   │   └── githubRepos.tsx     # Recent repositories list (API + cache)
│   └── ui/
│       ├── button.tsx        # Polished button with variants & loading state
│       ├── card.tsx          # Glass card component
│       ├── badge.tsx         # Tech/label badge
│       ├── section.tsx       # Section wrapper + animation primitives
│       ├── loader.tsx        # Accessible spinner
│       └── socialLink.tsx    # Social link anchor
├── pages/
│   ├── Home.tsx            # Hero, features, CTA
│   ├── About.tsx           # Bio, skills, experience timeline, values
│   ├── Projects.tsx        # Project gallery with client-side filtering
│   └── Contact.tsx         # Validated contact form + contact info
├── data/
│   ├── about.ts            # Bio, skills, experience, values, GitHub username
│   ├── projects.ts         # Project catalog (title, description, tech, links)
│   └── socialLinks.ts      # Social profile links
├── hooks/
│   ├── useTheme.tsx        # Dark/light theme context with localStorage persistence
│   └── useGithub.ts        # GitHub API fetch hook with caching & error handling
├── lib/
│   └── utils.ts            # cn() className utility
├── config/
│   └── formspree.ts        # Legacy formspree config note
└── vite-env.d.ts
```

## Installation

### Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

### Steps

```bash
# Clone the repository
git clone https://github.com/mwakidenis/Interactive-Portfolio-2026.git
cd Interactive-Portfolio-2026

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server starts on `http://localhost:5173` by default.

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Type-check then build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type-checking (`tsc --noEmit`) |

## Production Build

```bash
npm run build
```

This runs `tsc` (type-check) followed by `vite build`. The output is emitted to the `dist/` directory, ready for deployment.

Type-check only:

```bash
npm run typecheck
```

## Deployment (Vercel)

The repository is configured for Vercel via `vercel.json` (single-page-app rewrite fallback).

1. Push your changes to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Configure the build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. Vercel will automatically redeploy on every push to the default branch.

The SPA rewrite rule in `vercel.json` ensures client-side routing works on refresh:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## Configuration

- **Theme:** Stored in `localStorage` under key `theme` (`light`/`dark`); respects `prefers-color-scheme`.
- **GitHub API:** The `useGithub` hook fetches from `https://api.github.com` (no auth token). Results are cached in `localStorage` for 30 minutes to avoid rate limits.
- **Contact Form:** Posts to a Formspree endpoint (`https://formspree.io/f/xaqpraep`). No secrets are stored in frontend code.
- **Site metadata:** Edit `index.html` for title, description, Open Graph, and Twitter Card tags.
- **Design tokens:** Edit `src/index.css` CSS variables (`--primary`, `--background`, `--surface`, etc.) to adjust the color system.

## GitHub Integration

The footer displays a live GitHub profile card and recent repositories for `mwakidenis`, fetched client-side via the GitHub REST API:

- Profile: avatar, name, bio, location, company, joined date, repo/follower counts.
- Repositories: up to 6 non-archived public repos sorted by last updated, with language/topic badges and links.
- Error/loading states are shown gracefully; results are cached for 30 minutes.
- No personal access tokens are used or exposed.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

Please see [SECURITY.md](SECURITY.md) for our security policy and vulnerability reporting contact.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Mwaki Denis** — Software Engineer

- GitHub: https://github.com/mwakidenis
- LinkedIn: https://linkedin.com/in/denisit
- Twitter: https://twitter.com/Apro5550
- Email: mwakidenice@gmail.com
- Location: Nairobi, Kenya

---

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Deployed on Vercel.
