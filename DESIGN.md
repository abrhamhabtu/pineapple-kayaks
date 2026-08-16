# Design System — Pineapple Kayaks Kauaʻi

## Product Context
- **What this is:** A mobile-first booking site for self-guided kayak rentals on Kauaʻi.
- **Who it's for:** Visitors on phones, often deciding same-week. Families, couples, groups.
- **Space:** Local adventure rental, not a luxury resort and not a SaaS tour marketplace.
- **Project type:** Marketing site that hands off to FareHarbor.
- **Memorable thing:** Explore Kauaʻi at your own pace. You paddle. They handle the gear.

## Platform Constraint
**Ship this HTML.** FareHarbor already does checkout. Wix is optional and worse for SEO (slow, leftover slugs, `/copy-of-…` URLs). If they insist on Wix, the same pages still map — no Velo.

FareHarbor owns date, time, guests, payment, and confirmation. The site never collects card numbers.

## Aesthetic Direction
- **Direction:** Premium editorial dark. Deep jungle green, not navy. Photos do the work.
- **Decoration:** Film grain, ambient gradient, slow hero pan, reveal-on-scroll. No blobs, no purple, no icon-circle grids.
- **Mood:** Rainforest at dusk. River mist, mango-gold light, real Kauaʻi photos.
- **Anti-slop:** No centered-everything, no 8-checkmark chips, no Instagram caption dumps, no stock desert canyon as the hero.

## Typography
- **Display:** Fraunces (Google Fonts) — large, editorial, light-medium weight.
- **Body / UI:** Plus Jakarta Sans (Google Fonts).
- **Scale:**
  - Display: `clamp(46px, 11vw, 120px)` / line-height 1.0
  - H2: `clamp(30px, 5vw, 52px)`
  - H3: `clamp(21px, 3vw, 26px)`
  - Body: 16.5px / 1.65
  - Kicker / meta: 12px, 0.22em, uppercase
- **Rule:** Display font on headlines only. Never on paragraphs or buttons.

## Color
- **Night (page):** `#040b09`
- **Jungle (band):** `#0b221c`
- **Leaf (deep photo bg):** `#0e332a`
- **Panel (cards):** `#102d25`
- **Foam (headings):** `#f2f1e8`
- **Mist (body on dark):** `#b9cfc6`
- **Mist dim (meta):** `#8fae9f`
- **Mango (primary CTA):** `#f0a51a`
- **Mango soft (accent text):** `#f6c04d`
- **Mango ink (on CTA):** `#1a1203`
- **Line:** `rgba(185,207,198,0.16)`
- **Error:** `#e0604d`
- **Light mode:** Not in v2. This direction is a dark, cinematic river site.

## Spacing
- **Base unit:** 8px
- **Section padding:** clamp(64px, 10vw, 120px)
- **Gutter:** clamp(20px, 4vw, 48px)
- **Max content:** 1200px. Article max 46rem.
- **Radius:** 18px cards, 28px hero/gallery frames, 999px pills.

## Layout
- **Mobile first.** Most traffic is phones.
- Full-viewport hero with slow pan, editorial left-aligned type, scroll cue.
- Alternating splits, stat rows, tilted photo frames, hover zoom.
- Sticky header with logo badge (cream circle) + wordmark — readable on any photo.
- Sticky mobile Call / Book pill bar.
- **Touch targets:** 44px minimum.

## Motion
- Hero: 30s ease-in-out pan on the photo.
- Ambient gradient drift, film grain overlay, reveal-on-scroll (IntersectionObserver).
- Full-screen mobile menu with staggered link reveals.
- `prefers-reduced-motion`: everything static.

## Decisions Log
| Date | Decision | Rationale |
|---|---|---|
| 2026-08-16 | HTML prototype + Wix spec, not a custom app | First pass assumed Wix |
| 2026-08-16 | Prefer static host over Wix | SEO, speed, clean URLs; FareHarbor already books |
| 2026-08-16 | FareHarbor for checkout | They already book through Red Eye Snack Shack; no fake card form |
| 2026-08-16 | Live-site ops over prototype fiction | Mon–Fri Secret Falls, zone delivery, $15 parking |
| 2026-08-16 | Fraunces + Plus Jakarta | Distinctive display, brief-safe body, both on Google Fonts |
| 2026-08-16 | Hero is Hanalei photo, not the live canyon video | That clip is a desert paddle, not Kauaʻi. Their Secret Falls YouTube is the Hawaii video. Canyon still stays on About. |
| 2026-08-16 | Redesign: premium editorial dark (`redesign-2026` branch) | Deep jungle green + mango, Fraunces display, film grain, ambient gradient, full-viewport hero pan, reveal-on-scroll, full-screen mobile menu. Logo sits in a cream badge so it reads on any photo. Blog expanded to 4 guides. |
