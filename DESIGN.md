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
- **Direction:** Warm editorial / organic. Guidebook, not template.
- **Decoration:** Intentional. Photos do the work. No blobs, no purple, no icon-circle grids.
- **Mood:** River light, sand, pineapple gold used rarely. Local and useful.
- **Anti-slop:** No centered-everything, no 8-checkmark feature chips as the hero story, no Instagram caption dumps on the homepage.

## Typography
- **Display:** Fraunces (Google Fonts) — soft, island, not a tech grotesque.
- **Body / UI:** Plus Jakarta Sans (Google Fonts) — from the original redesign brief, available in Wix.
- **Loading:** Google Fonts in the prototype. In Wix Studio, add the same two fonts to the site styles.
- **Scale:**
  - Display: `clamp(36px, 8vw, 72px)` / line-height 1.05
  - H2: `clamp(26px, 4vw, 40px)` / 1.15
  - H3: `clamp(20px, 2.5vw, 24px)`
  - Body: 16–17px / 1.6
  - Small / meta: 13px / 1.4, letter-spacing 0.04em on labels
- **Rule:** Display font on headlines only. Never on paragraphs or buttons.

## Color
- **Approach:** Restrained. One lagoon action color, one pineapple accent, warm paper neutrals.
- **Foam (page):** `#f7f3eb`
- **White (cards):** `#ffffff`
- **Sand (bands):** `#e4dcc8`
- **Ink (text):** `#16242b`
- **Muted:** `#5c6b70`
- **Navy (footer / dark bands):** `#123a4d`
- **Lagoon (primary CTA):** `#0f6e6e`
- **Lagoon dark (hover / header mark):** `#0b5555`
- **Pineapple (rare accent, mobile Book, quotes):** `#f2c14e`
- **Line:** `#d9d1c0`
- **Error:** `#9b2c2c`
- **Dark mode:** Not in v1. Outdoor phone users in sun need light, high-contrast UI.

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable on desktop, tighter on mobile.
- **Section padding:** 64px desktop, 40px mobile.
- **Page gutter:** 24px mobile, 40px desktop.
- **Max content:** 1120px. Hero text max 20ch–28ch.

## Layout
- **Approach:** Hybrid. Grid for cards and footers. Editorial left-align for heroes and story blocks.
- **Breakpoints (Wix Studio):** 320 / 750 / 1000 / 1440
- **Mobile first.** Most traffic is phones.
- **Border radius:** 8px cards, 999px pills/buttons, 0 on images that should feel photographic.
- **Touch targets:** 44px minimum.

## Motion
- **Approach:** Minimal-functional. Wix Studio entrance animations only if they stay under 300ms.
- **No** scroll-jacking, parallax engines, or custom page transitions.
- **OK:** Header border on scroll, accordion open/close, `:hover` underline on desktop.

## Components Wix Must Recreate
| Prototype | Wix Studio |
|---|---|
| Sticky header + hamburger | Studio header + mobile menu |
| Sticky mobile Call / Book bar | Fixed footer bar or floating buttons |
| Adventure cards | Repeater + FareHarbor item link |
| FAQ accordion | Accordion element |
| Blog index / post | Wix Blog |
| Instagram grid | Instagram feed app |
| Map | Google Maps element |
| Book CTA | FareHarbor embed / item calendar |

## Decisions Log
| Date | Decision | Rationale |
|---|---|---|
| 2026-08-16 | HTML prototype + Wix spec, not a custom app | First pass assumed Wix |
| 2026-08-16 | Prefer static host over Wix | SEO, speed, clean URLs; FareHarbor already books |
| 2026-08-16 | FareHarbor for checkout | They already book through Red Eye Snack Shack; no fake card form |
| 2026-08-16 | Live-site ops over prototype fiction | Mon–Fri Secret Falls, zone delivery, $15 parking |
| 2026-08-16 | Fraunces + Plus Jakarta | Distinctive display, brief-safe body, both on Google Fonts |
| 2026-08-16 | Hero is Hanalei photo, not the live canyon video | That clip is a desert paddle, not Kauaʻi. Their Secret Falls YouTube is the Hawaii video. Canyon still stays on About. |
