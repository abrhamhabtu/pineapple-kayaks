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
- **Direction:** Premium island editorial. Warm ivory paper, deep navy, palm green, pineapple gold. Real Kauaʻi photos do the work.
- **Decoration:** Film grain, subtle gradient overlays, slow hero pan, reveal-on-scroll. No blobs, no purple, no icon-circle grids.
- **Mood:** Warm tropical morning. Mountain mist, golden light, taro fields, real kayak photos from the rivers.
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
- **Paper (page bg):** `#fdfbf3`
- **Cream (section bands):** `#f8f0d7`
- **Sand (alt bands):** `#efe5c8`
- **White:** `#ffffff`
- **Navy (headings):** `#1d2b50`
- **Navy deep (footer/dark sections):** `#131f3d`
- **Palm (accents):** `#0d4a26`
- **Palm deep (hover):** `#093a1e`
- **Ink (strong text):** `#182444`
- **Body ink (paragraph text):** `#3e4763`
- **Muted (meta/secondary):** `#6a7188`
- **On dark (text on navy):** `#f7f4e8`
- **Teal (utility links):** `#0e7d6d`
- **Mango (primary CTA):** `#f0a51a`
- **Mango soft (accent text):** `#f6c04d`
- **Mango deep (CTA hover):** `#9c6d07`
- **Mango ink (text on CTA):** `#221703`
- **Line:** `rgba(24, 36, 68, 0.14)`
- **Error:** `#cf4a37`

## Spacing
- **Base unit:** 8px
- **Section padding:** clamp(64px, 10vw, 120px)
- **Gutter:** clamp(20px, 4vw, 48px)
- **Max content:** 1200px. Article max 46rem.
- **Radius:** 18px cards, 28px hero/gallery frames, 999px pills.

## Layout
- **Mobile first.** Most traffic is phones.
- Full-viewport hero with slow video pan, editorial left-aligned type, scroll cue.
- Alternating splits, stat rows, tilted photo frames, hover zoom.
- Sticky header with logo badge (pineapple in cream circle) + wordmark — readable on any photo.
- Sticky mobile Call / Book pill bar at bottom.
- **Touch targets:** 44px minimum.

## Motion
- Hero: 30s ease-in-out pan on the kayak video.
- Subtle gradient overlays, film grain, reveal-on-scroll (IntersectionObserver).
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
| 2026-08-16 | Hero is official kayak video, not desert canyon | Their YouTube kayak video shows the actual experience. Canyon video (from a different location) was moved to About page. |
| 2026-08-16 | Redesign: island editorial light (current `main` branch) | Warm ivory paper + deep navy + palm green + pineapple gold. Fraunces display, film grain, full-viewport hero video, reveal-on-scroll, full-screen mobile menu. Logo in cream badge so it reads on any photo. Blog expanded to 9 guides. |
