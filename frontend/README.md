# LUCID IT Solutions — React port

A React + Vite + Tailwind CSS v4 rebuild of the LUCID hospitality software landing page, matching the original static HTML design and interactions.

## Run locally

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build   # production build
npm run lint    # ESLint
npm run preview # preview the production build
```

## AI assistant

The floating AI assistant works out of the box with built-in fallback replies. To enable Gemini responses, copy `.env.example` to `.env` and set `VITE_GEMINI_API_KEY`.

## Performance

Pages and modals are loaded on demand with `React.lazy` and `Suspense`. React, React DOM and the icon libraries are split into separate vendor chunks for better browser caching.

## Deploy to Vercel

This folder is ready for Vercel.

1. Import the repository into Vercel.
2. If the repo root is `Lucid_React`, set **Root Directory** to `frontend`.
3. Vercel will detect **Vite**. Build command: `npm run build`, output directory: `dist`.
4. Add `VITE_GEMINI_API_KEY` in **Environment Variables** only if you want Gemini-powered AI replies.
5. Deploy.

`vercel.json` includes an SPA rewrite so deep links fall back to `index.html`.

## Structure

```text
src/
├── components/
│   ├── chat/        # Floating AI assistant
│   ├── home/        # Landing-page sections
│   ├── layout/      # Navbar and footer
│   ├── modals/      # Demo request and job application modals (loaded on demand)
│   └── ui/          # Shared Icon wrapper and page loader
├── context/         # App-wide navigation/modal/chat state
├── data/            # Brands, dashboard, solutions, FAQs, jobs, About/founder and contact content
├── hooks/           # Carousel and founder interactions
├── pages/           # Home, About, Careers, Contact and solution detail pages (route-level code splitting)
├── App.jsx
└── index.css        # Tailwind theme + custom styles
```
