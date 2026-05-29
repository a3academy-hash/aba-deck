# Media assets

## In use
- `aba_logo_transparent.png` — ABA shield logo (nav, footer, favicon source).
- `aba_logo2.png` — solid-background variant (kept for reference).
- `champs.jpg` — Georgia Premier Academy, 2026 ABA Premier Division Champions.
  Used as the hero background and the featured image in Championship Experience.
  (Resized to 1600px / ~380KB from the original 18MB source.)

## Optional future drop-ins
- `hero.mp4` — if you later want motion footage behind the hero, drop it in and
  re-add a `<video>` layer over the same gradient treatment in
  `components/sections/Hero.tsx`.
- Real section imagery for the remaining "Image placeholder" tiles
  (Championship Experience, National Visibility) — swap via `next/image`.
- School logos — replace the monogram tiles in `components/SchoolGrid.tsx` once
  available (the data shape in `lib/content.ts` is ready for a `logo` field).
