## Entire File and Folder Structure

```text
frontend/
├── .env.example                     # Environment variables template (Gemini API key)
├── .gitignore                       # Git exclusion rules (node_modules, dist, .env, etc.)
├── .vercelignore                    # Vercel deployment exclusions
├── eslint.config.js                 # ESLint flat configuration (React 19, React Hooks, React Refresh)
├── index.html                       # Application entry HTML with viewport, fonts, and root container
├── package.json                     # Project manifest, dependencies, and npm scripts
├── package-lock.json                # Locked dependency tree
├── README.md                        # Project documentation, architecture, and directory structure
├── vercel.json                      # Vercel SPA routing rewrite rules (directing all paths to index.html)
├── vite.config.js                   # Vite configuration with React, Tailwind CSS v4, and chunk splitting
│
├── public/                          # Static public assets (served at root /)
│   ├── favicon.svg                  # LUCID brand favicon
│   ├── icons.svg                    # SVG sprite symbols
│   ├── Lucid.jpg                    # High-resolution LUCID brand logo used in the animated loader
│   └── Luicd.jpg                    # Fallback brand image asset
│
└── src/                             # Application source code
    ├── main.jsx                     # Application bootstrap mounting <App /> into DOM
    ├── App.jsx                      # Root container: global navigation, view routing, modals & context
    ├── App.css                      # Root application stylesheet helpers
    ├── index.css                    # Global Tailwind CSS v4 @theme, fonts, glassmorphism & keyframes
    │
    ├── assets/                      # Bundled static media assets
    │   ├── hero.png                 # Dashboard mockup for Hero section
    │   ├── react.svg                # React vector mark
    │   └── vite.svg                 # Vite vector mark
    │
    ├── components/                  # Reusable modular UI components
    │   ├── chat/                    # AI Assistant feature
    │   │   └── ChatWidget.jsx       # Floating AI chat widget with fallback & Gemini API modes
    │   │
    │   ├── home/                    # Landing and presentation sections
    │   │   ├── Architecture.jsx     # Hybrid On-Premise + Cloud resilience architecture section
    │   │   ├── CtaBanner.jsx        # Bottom conversion call-to-action banner
    │   │   ├── FAQ.jsx              # Categorized accordion FAQ component
    │   │   ├── Founder.jsx          # Founder spotlight (Pradeep C S) with 3D tilt & LinkedIn link
    │   │   ├── Hero.jsx             # Top hero banner with value proposition, stats & CTAs
    │   │   ├── Solutions.jsx        # Multi-tab product showcase (PMS, POS, Club ERP, Food Court)
    │   │   ├── TeamLeads.jsx        # Domain leadership cards with department filters & career callout
    │   │   ├── Testimonials.jsx     # Client reviews and property success stories
    │   │   └── TrustedClients.jsx   # Continuous auto-scrolling client brand carousel
    │   │
    │   ├── layout/                  # Persistent layout wrappers
    │   │   ├── Footer.jsx           # Multi-column footer with links, contact details & copyright
    │   │   └── Navbar.jsx           # Glassmorphic header with navigation links, mobile drawer & CTAs
    │   │
    │   ├── modals/                  # On-demand dialog modals (lazy loaded)
    │   │   ├── ApplyModal.jsx       # Job application modal with file upload & LinkedIn profile input
    │   │   └── DemoModal.jsx        # Interactive schedule demo request modal with module selection
    │   │
    │   └── ui/                      # Shared UI primitive components
    │       ├── Icon.jsx             # Centralized Lucide icon wrapper mapping icon names to components
    │       ├── LucidLoader.jsx      # High-animation brand loader with orbital rings, shimmer & progress
    │       └── PageLoader.jsx       # Suspense fallback page transition loader wrapper
    │
    ├── context/                     # Global state management
    │   └── AppContext.jsx           # React context for active view, navigation, modals, chat & solutions
    │
    ├── data/                        # Structured content and mock databases
    │   ├── aboutData.js             # Founder bio, impact stats, core principles & TEAM_LEADS dataset
    │   ├── clientBrands.js          # Hospitality clients, hotels, clubs, and property statistics
    │   ├── contactData.js           # Bengaluru HQ address, phone numbers, emails, and support contacts
    │   ├── dashboardData.js         # Interactive dashboard preview metrics and KPI summaries
    │   ├── faqsData.js              # Comprehensive FAQ questions and answers by domain
    │   ├── jobsData.js              # Open career listings, requirements, and department categories
    │   └── solutionsData.js         # Deep-dive specs for Hotel PMS, Restaurant POS, Club ERP & Food Court
    │
    ├── hooks/                       # Custom React hooks
    │   ├── useClientCarousel.js     # Infinite scroll & drag interaction hook for client brand strip
    │   └── useFounderInteractions.js# Mouse tracking hook for 3D perspective tilt & radial photo glow
    │
    └── pages/                       # Route-level views (code-split via React.lazy)
        ├── HomeView.jsx             # Main landing page combining all primary home sections
        ├── AboutView.jsx            # About page with LucidLoader entrance, Founder, Team Leads & Values
        ├── CareersView.jsx          # Careers page with benefits, culture, and job listings
        ├── ContactView.jsx          # Contact page with interactive inquiry form & HQ location cards
        └── SolutionDetailView.jsx   # Detailed deep-dive specifications for individual software solutions
```

---

## Detailed Directory Breakdown

### 1. `src/components/home/`
- **`Hero.jsx`**: The opening hero banner presenting the core value proposition, primary CTAs (*Request Demo*, *Explore Products*), and key impact metrics.
- **`Founder.jsx`**: Dedicated spotlight for Founder & Director Pradeep C S, featuring a 3D perspective tilt effect on mouse hover, radial glow, full biography, and LinkedIn profile link.
- **`TeamLeads.jsx`**: Leadership showcase featuring rich UI cards with high-res portrait avatars, fallback handlers, role badges, bios, skill tags, LinkedIn/Email links, interactive department filter tabs (*Engineering*, *Product*, *Hospitality Ops*), and a bottom recruitment callout.
- **`Solutions.jsx`**: Interactive tabbed product explorer highlighting Hotel PMS, Restaurant POS, Club ERP, and Food Court software.
- **`Architecture.jsx`**: Explains LUCID's hybrid architecture (Local LAN + Cloud synchronization) with live operational diagrams.
- **`TrustedClients.jsx`**: Smooth drag-and-scroll carousel displaying major hotel, restaurant, and club client brands.
- **`Testimonials.jsx`**: Testimonials from hospitality directors, GMs, and operations managers.
- **`FAQ.jsx`**: Accordion component resolving common client questions on migration, multi-property rollouts, hardware compatibility, and support.
- **`CtaBanner.jsx`**: Conversion block placed across views to drive demo requests and client onboarding.

### 2. `src/components/ui/`
- **`LucidLoader.jsx`**: Premium brand loading screen utilizing `public/Lucid.jpg` with high animation:
  - Concentric counter-rotating orbital rings (dashed outer ring + glowing gradient inner ring).
  - Radiating sonar/radar pulse waves.
  - 3D floating logo stage with continuous diagonal light sweep shimmer.
  - Dynamic percentage counter (`0%` to `100%`) with animated glow track and cycling status messages.
  - Smooth cinematic scale-up and fade-out transition upon completion, plus an instant "Skip Intro" option.
- **`PageLoader.jsx`**: Lightweight wrapper rendering `LucidLoader` as a Suspense fallback during asynchronous page transitions.
- **`Icon.jsx`**: Centralized icon registry utilizing `lucide-react` for consistent SVG rendering across the app.

### 3. `src/components/chat/`
- **`ChatWidget.jsx`**: Expandable floating AI assistant capable of answering questions about LUCID products, pricing, offline PMS mode, and hotel modules. Connects directly to Gemini via `VITE_GEMINI_API_KEY` with automatic local fallback if no API key is provided.

### 4. `src/components/modals/`
- **`DemoModal.jsx`**: Modal form enabling prospective clients to request a tailored demonstration for their property size, room count, and outlet configuration.
- **`ApplyModal.jsx`**: Application modal for prospective team members applying to open roles listed on the Careers page.

### 5. `src/pages/`
- **`HomeView.jsx`**: Primary landing view.
- **`AboutView.jsx`**: Company heritage, 25+ years story, Founder spotlight, Team Leads component, and core principles. Includes the high-animation `LucidLoader` on entrance.
- **`CareersView.jsx`**: Company culture, employee benefits, and open job roles with direct modal application triggers.
- **`ContactView.jsx`**: Direct sales and support inquiry forms, Bangalore HQ address, phone hotlines, and Google Maps reference.
- **`SolutionDetailView.jsx`**: In-depth module-by-module breakdown when exploring a specific product line.

---

## Performance & Optimization

- **Route-Level Code Splitting**: All pages and modals are asynchronously imported via `React.lazy()` and wrapped in `Suspense` fallbacks.
- **Chunk Optimization**: Vendor libraries (`react`, `react-dom`, `lucide-react`, `react-icons`) are bundled into separate cached chunks in `vite.config.js`.
- **CSS Hardware Acceleration**: Keyframe animations utilize `transform` and `opacity` with `will-change` properties for 60 FPS transitions without layout shifts.

---

## Deployment to Vercel

1. Import this repository into Vercel.
2. If the repository root is `Lucid_React`, set **Root Directory** to `frontend`.
3. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add `VITE_GEMINI_API_KEY` in **Environment Variables** (optional).
5. Deploy. `vercel.json` provides SPA fallback rewrites for seamless client-side routing.
