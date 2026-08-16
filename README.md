# Pineapple Kayaks Kauaʻi — site rebuild

Mobile-first rebuild of [pineapplekayakskauai.com](https://www.pineapplekayakskauai.com/). **Booking stays on FareHarbor.** The site itself should **not** stay on Wix.

Wix is why the live site ranks poorly: `/copy-of-hanalei-adventure` is actually Secret Falls, `/dive-sites` is the FAQ, pages are slow, and Google is indexing junk slugs. This folder is already a real site — HTML, their photos, their calendars.

## Open the prototype

```bash
python3 -m http.server 4173 --directory prototype
```

Then visit http://127.0.0.1:4173/

## Preview on Netlify (from GitHub)

The site is static. `netlify.toml` publishes `prototype/` with no build command. `_redirects` already 301s old Wix slugs.

1. Open [Import this repo on Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/abrhamhabtu/pineapple-kayaks).
2. Authorize GitHub if asked. Pick the `abrhamhabtu/pineapple-kayaks` repo.
3. Set **production branch** to `redesign-2026` for this preview (leave `main` if you want the older version live instead). Publish directory is already `prototype` via `netlify.toml`.
4. Deploy. Netlify will give you a `*.netlify.app` URL and a new URL on every push to that branch.

Later, when you are ready to replace Wix: add the custom domain `pineapplekayakskauai.com`, then in Google Search Console submit `sitemap.xml` and request indexing on `/`, `/secret-falls`, `/hanalei`. Keep FareHarbor. Do not add a second booking system.

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
