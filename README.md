# Pineapple Kayaks Kauaʻi — site rebuild

Mobile-first rebuild of [pineapplekayakskauai.com](https://www.pineapplekayakskauai.com/). **Booking stays on FareHarbor.** The site itself should **not** stay on Wix.

Wix is why the live site ranks poorly: `/copy-of-hanalei-adventure` is actually Secret Falls, `/dive-sites` is the FAQ, pages are slow, and Google is indexing junk slugs. This folder is already a real site — HTML, their photos, their calendars.

## Open the prototype

```bash
python3 -m http.server 4173 --directory prototype
```

Then visit http://127.0.0.1:4173/

## Ship it (recommended)

1. Put `prototype/` on **Cloudflare Pages** or **Netlify** (drag the folder, or connect this repo).
2. Add the custom domain `pineapplekayakskauai.com`.
3. `_redirects` already 301s the old Wix URLs to the clean ones.
4. In Google Search Console: submit `sitemap.xml`, request indexing on `/`, `/secret-falls`, `/hanalei`.
5. Keep FareHarbor. Do not add a second booking system.

## What’s in here

| Path | What it is |
|---|---|
| `prototype/` | The site |
| `prototype/img/fh/` | Real photos from the FareHarbor galleries |
| `prototype/sitemap.xml` / `robots.txt` | Crawl map |
| `DESIGN.md` | Fonts, colors, spacing |
| `WIX-SPEC.md` | Page map, FareHarbor IDs, old-slug redirects (Wix only if they refuse to leave) |

## SEO already in the HTML

- Unique title + description + canonical on every page
- Open Graph / Twitter cards with real photos
- LocalBusiness + Product + FAQ + Video JSON-LD (`js/schema.js`)
- Clean slugs: `/secret-falls`, `/hanalei`, `/weekend`, `/groups`, `/faq`
- 301s from the broken Wix URLs

## FareHarbor

Company: `redeyesnackshack` · flow: `1122156`

| Trip | Item |
|---|---|
| Secret Falls | `560856` |
| Hanalei | `727496` |
| 3-Day Weekend | `727495` |
| Groups 4+ | `748682` |

Full list: https://fareharbor.com/embeds/book/redeyesnackshack/items/?flow=1122156&full-items=yes
