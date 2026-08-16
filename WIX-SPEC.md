# Site spec — Pineapple Kayaks Kauaʻi

**Preferred:** deploy `prototype/` as the real site (Cloudflare Pages or Netlify). Point `pineapplekayakskauai.com` at it. FareHarbor stays the checkout. Wix is the thing Google is already punishing — leftover `/copy-of-…` slugs, a dive-shop FAQ URL, and a slow homepage.

**Fallback:** if they will not leave Wix, rebuild in **Wix Studio** from this prototype. Do not restyle the current classic-Editor site. No Velo.

Current live site: [pineapplekayakskauai.com](https://www.pineapplekayakskauai.com/).

## Apps to install
1. **FareHarbor** — they already book through Red Eye Snack Shack (`redeyesnackshack`, flow `1122156`). Embed the calendar. Do **not** install Wix Bookings.
2. **Wix Blog** — `/blog` and posts
3. **Instagram feed** — footer or a dedicated strip, never raw captions on the homepage
4. **Google Maps** — footer
5. Keep **Wix Stores cart** off the header unless you actually sell merch

## Fix these slugs first
The live URLs are broken. Redirect the old ones so Google and saved links do not 404.

| Live slug (bad) | New slug | Page |
|---|---|---|
| `/` | `/` | Home |
| `/about-1` | `/adventures` | Adventure index (was “Booking Adventures”) |
| `/copy-of-hanalei-adventure` | `/secret-falls` | Secret Falls (yes — the live name is inverted) |
| `/adventure-packages` | `/hanalei` | Hanalei |
| `/copy-of-secret-falls-adventure` | `/weekend` | 3-day deal |
| `/copy-of-secret-falls-adventure-1` | `/groups` | Group deals |
| `/dive-sites` | `/faq` | FAQ (dive-shop leftover) |
| `/about` | `/about` | About |
| — | `/book` | Bookings landing |
| — | `/blog` | Wix Blog |

`prototype/_redirects` already 301s every old slug. On Wix, set the same redirects in SEO settings.

## Site menu
**Home · Adventures · FAQ · Blog · About · Book Now**

Adventures can be a dropdown on desktop: Secret Falls, Hanalei, 3-Day, Groups. On mobile, one Adventures item is enough — the index page does the rest.

## Global chrome (Master page)
Rebuild once. Every page inherits it.

### Header
- Sticky. Foam background, 1px sand line.
- Logo left (replace the teal circle with the real mark).
- Desktop links + teal **Book Now** pill → `/book`
- Mobile: hamburger → full-screen navy menu, gold Book button
- Wix: Studio header + mobile menu. Do not use the old horizontal “More” dump.

### Sticky mobile bar
- Fixed bottom: **Call** (`tel:8086318035`) + **Book Now** (`/book`)
- Hide on desktop (breakpoint 750+)
- Wix: pinned section or floating buttons, 48px tall, safe-area padding

### Footer
- Phone, address, Instagram / Facebook / Yelp
- Google Map for `3-4684 Kuhio Highway, Lihue, HI 96766`
- Copyright. Drop “Designed by Retro Spectiv” if this is a new build, or keep if they want credit.

## Pages → Studio sections

### Home `/`
1. Full-bleed photo hero, left-aligned type, gold Book + ghost See Adventures. Text link: “Watch how Secret Falls works” → `#watch`
2. Short “why us” — four lines, not eight checkmark chips
3. **YouTube** — [How To Kayak To Secret Falls](https://www.youtube.com/watch?v=pljF-Cx5X94) in its own 16:9 section. Never overlay it on the hero.
4. Three adventure cards (Falls, Hanalei, Groups) + link to weekend
5. One Yelp quote on navy
6. Founders / shop photo + Kamokila story → About
7. Two blog cards (Wix Blog repeater)
8. Optional: Instagram strip **as a grid of images**, not caption text

Hero: Hanalei kayaks (`weekend-01.jpg`) — real Kauaʻi, not the live site’s desert-canyon stock clip. The old canyon still lives on About only; do not label it as Kauaʻi. Do not use the current IG-post slideshow as the homepage body. Do not drop the YouTube player on the hero image the way the live site does. If they supply a Wailua/Hanalei paddle clip, drop it in as `prototype/img/video/hero.mp4`.

### Adventures `/adventures`
Repeater, 2 columns desktop / 1 mobile. Each card: photo, hours chip, name, one-line pitch, price, Details + Book.

### Secret Falls `/secret-falls`
Photo, chips (hours / distance / difficulty), Mon–Fri callout, included list, what to bring, parking $15, cruise-ship $50 note. **Bookings widget** at the bottom, service = Secret Falls. Block Sat/Sun.

### Hanalei `/hanalei`
Same pattern. Open 7 days. Delivery zone table. Bookings widget + delivery extras.

### Weekend `/weekend`
Itinerary, storage rules, Bookings service = 3-day rental.

### Groups `/groups`
$40 / person at 4 guests. Bookings coupon or dedicated service. Phone CTA for 10+.

### About `/about`
Shop location, Kamokila, what you rent. Map. No keyword stuffing (“kayaks near me”).

### FAQ `/faq`
Wix Accordion. Copy from `prototype/faq.html`. One question open at a time.

### Blog `/blog`
Wix Blog list. Seed the four guides from the prototype. Each post ends with a Book CTA.

### Book `/book`
Trip cards, then the **FareHarbor embed** for that item. Same widget as the live site, just not buried on leftover slugs.

## Booking UX (prototype at `/book`)

Do not rebuild checkout. FareHarbor already has calendar, guests, extras, and payment.

1. **Trip** — one tap on Secret Falls / Hanalei / 3-Day / Groups. Coming from a detail page (`/book#hanalei`) skips this and opens that item.
2. **FareHarbor iframe** — company `redeyesnackshack`, flow `1122156`.
3. Call stays one tap away.

In Studio: HTML embed (iframe) or FareHarbor’s Wix app. Lightframe script is optional if you want Book buttons to open a popup instead of a page.

## FareHarbor items (live, Aug 2026)

Catalog: `https://fareharbor.com/embeds/book/redeyesnackshack/items/?flow=1122156&full-items=yes`

| Prototype trip | Live page (bad slug) | Item | Price |
|---|---|---|---|
| Secret Falls | `/copy-of-hanalei-adventure` | `560856` | From $45 |
| Hanalei | `/adventure-packages` | `727496` | From $45 |
| 3-Day Weekend | `/copy-of-secret-falls-adventure` | `727495` | From $150 |
| Groups 4+ | `/copy-of-secret-falls-adventure-1` | `748682` | From $40 |

Embed one item:

`https://fareharbor.com/embeds/book/redeyesnackshack/items/{ID}/?full-items=yes&flow=1122156`

Cooking class (`523799`) is on the same flow. Do not put it on the kayak site unless they ask.

**Policies already in FareHarbor** — do not fork them into Wix. Confirm deposit / cancel copy on the FAQ still matches what FareHarbor charges.

## Design tokens in Studio
Set site styles once, then only use those styles.

- Fonts: **Fraunces** (headings), **Plus Jakarta Sans** (body / buttons) — both Google Fonts
- Colors: foam `#f7f3eb`, sand `#e4dcc8`, ink `#16242b`, navy `#123a4d`, lagoon `#0f6e6e`, pineapple `#f2c14e`, line `#d9d1c0`
- Buttons: 999px radius, 48px min height
- Cards: 8px radius, 1px line
- Section padding: 40px mobile / 72px desktop
- Breakpoints: 320 / 750 / 1000 / 1440

Do not introduce a third font. Do not use the old Wix theme teal-on-white defaults.

## Photos
Pulled from the live FareHarbor galleries (their own Filestack uploads). Files live in `prototype/img/fh/`.

Use these first — they are the real places, not stock:

| Slot | File |
|---|---|
| Home hero | `weekend-01.jpg` — kayaks in Hanalei Bay (not the live canyon clip) |
| About, not Kauaʻi | `canyon-kayak.jpg` — old homepage still, keep but do not caption as Hawaii |
| Secret Falls cards / aerial | `secret-falls-01.jpg` |
| Secret Falls pool | `secret-falls-03.jpg` |
| Wailua launch / groups | `secret-falls-07.jpg` |
| Hanalei river | `hanalei-01.jpg` |
| Hanalei Pier | `hanalei-09.jpg` |
| Reef / yellow kayak | `hanalei-06.jpg` |

Still missing (shoot later): shop / founders at The Pineapple Store, kayak on a rental-car roof.

Compress in Wix. No 4MB hero slides.

## SEO / content rules
- Title tags from the prototype `<title>`s
- One H1 per page
- Delete homepage Instagram caption essays and hashtag walls
- Delete empty `​` headings
- Keep Hawaiian spellings consistent: Kauaʻi, Līhuʻe, Kūhiō, Hāʻena
- LocalBusiness schema via Wix SEO: phone, address, hours, geo

## Mobile QA (do this on a real phone)
- [ ] Menu opens and closes
- [ ] Book and Call are thumb-reachable
- [ ] Type does not overflow the hero
- [ ] Cards stack, buttons stay 48px
- [ ] FareHarbor calendar is usable in one column
- [ ] Map does not hijack scroll
- [ ] No horizontal scroll at 375px

## Out of scope
- Custom payment wizard
- Velo
- Leaving Wix
- Rebuilding the Instagram dump as page content
- Fake card fields from the original `.dc.html` mock
