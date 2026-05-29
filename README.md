# ABA Membership Portal / Media Kit

Premium web-based membership portal and interactive media kit for the **Academy
Baseball Association (ABA)**.

- **Domain:** deck.academyball.com
- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript
- **Motion:** CSS/Tailwind only (IntersectionObserver scroll-reveals + rAF stat
  counters) — no animation dependency.
- **Deploy target:** Vercel (static — the page prerenders fully).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Architecture

Single-page, section-driven site with a floating left navigation and
active-section highlighting.

```
app/
  layout.tsx          Root layout, fonts, metadata
  globals.css         Design system: navy/graphite/silver tokens, motion utils
  page.tsx            Composes the 14 sections in order
components/
  Section.tsx         Section shell + SectionHeading (eyebrow/title/body)
  Reveal.tsx          Scroll-reveal wrapper (IntersectionObserver)
  StatCounter.tsx     Count-up stat (requestAnimationFrame, in-view trigger)
  SideNav.tsx         Floating left nav + mobile menu, active tracking
  SiteFooter.tsx
  ...                 12 reusable components (see below)
  sections/           One file per page section
lib/
  nav.ts              Section list (drives nav + anchors + active tracking)
  content.ts          All copy/data — CMS-ready, single source of truth
public/                Drop hero video/poster + budget PDFs here
```

### Reusable components

`HeroSection` · `StatCounter` · comparison cards (in `WhyABA`) · `DivisionExplorer`
· `TimelineRoadmap` · `PricingTable` · `FAQAccordion` · `EcosystemMap` ·
media gallery (in `NationalVisibility`) · `CTASection` · `SchoolGrid` ·
`PDFDownloadCard` · plus `CostCalculator` and `ContactForm`.

## Content & placeholders

All copy and data live in `lib/content.ts`. Figures marked `note: 'placeholder'`
(e.g. media impressions, highlight counts) should be confirmed against
source-of-truth materials before launch. The 14 founding members are real
(alphabetized, with city/state and map coordinates where known); school logos
and budget PDFs are pending drop-in assets — see `public/*.md`. The ABA logo
and the Georgia Premier Academy championship photo are already wired in.

The Founding Members section includes a dependency-free schematic locator map
(`components/InteractiveMap.tsx`) that projects each school's lat/lng onto a
Southeast-region panel. It can be swapped for a true basemap (Mapbox/Leaflet)
later without touching the section.

## Future architecture

Structured to grow into authentication, an admin/CMS layer, member dashboards,
standings/schedules, governance voting, and onboarding uploads. The `content.ts`
shapes map cleanly onto a future CMS; `ContactForm` and `CostCalculator` are
built to be wired to API routes / live pricing without touching their sections.

## Accessibility & motion

- Honors `prefers-reduced-motion` (reveals + counters snap to final state).
- Semantic landmarks, `aria-current` on active nav, accessible accordion/tabs.
- ≥44px tap targets on interactive controls.
