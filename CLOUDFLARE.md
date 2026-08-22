# Cloudflare Pages Deployment

This document explains how to deploy the Pineapple Kayaks Kauaʻi site to Cloudflare Pages.

## Overview

The site is a static HTML site with no build step. All files live in the `prototype/` directory. Cloudflare Pages will serve these files directly with clean URLs via `_redirects`.

## Setup Instructions

### 1. Connect GitHub to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select this repository: `abrhamhabtu/pineapple-kayaks`
4. Authorize Cloudflare to access the repository if prompted

### 2. Configure the Project

Use these settings when creating the Pages project:

- **Production branch:** `main`
- **Build command:** _(leave empty)_
- **Build output directory / Root directory:** `prototype`

### 3. Preview First — DO NOT Request Indexing

After the first deployment:

- Cloudflare will give you a `*.pages.dev` preview URL
- Test the site thoroughly on this URL
- **DO NOT request indexing of the `*.pages.dev` URL** — canonicals already point at `https://www.pineapplekayakskauai.com/`
- Verify:
  - All pages load with clean URLs (e.g., `/adventures`, not `/adventures.html`)
  - `.html` URLs redirect to clean slugs via 301
  - Old Wix URLs redirect correctly
  - FareHarbor booking embeds work
  - Security headers are applied (check DevTools Network tab)
  - Images and videos load correctly

### 4. Custom Domain Cutover (Later)

**DO NOT point the custom domain until the owner approves.**

#### Before DNS Flip

1. **Confirm Google Search Console verification method** with the owner:
   - Check if current verification is via Wix HTML file or DNS TXT record
   - If Wix HTML file: add DNS TXT verification in GSC **before** DNS cutover
   - Do NOT invent a `google-site-verification` HTML file
   - Ensure verification will persist after leaving Wix

2. **Prepare DNS records** (do not apply yet):
   - Add `www.pineapplekayakskauai.com` as custom domain in Cloudflare Pages
   - Add `pineapplekayakskauai.com` (apex) as custom domain in Cloudflare Pages
   - Configure apex → www redirect in Cloudflare Pages settings

#### During DNS Cutover

When ready to go live:

1. In Cloudflare Pages project → **Custom domains**
2. Add `www.pineapplekayakskauai.com` (primary)
3. Add `pineapplekayakskauai.com` (apex) and redirect to www
4. Cloudflare will automatically provision SSL certificates
5. Update DNS records as instructed by Cloudflare
6. Wait for DNS propagation (usually < 5 minutes)
7. Verify `https://www.pineapplekayakskauai.com/` loads correctly
8. Verify apex `https://pineapplekayakskauai.com/` redirects to www

**Important:** Canonicals and sitemap already use `www.pineapplekayakskauai.com` — this is a same-domain deployment, not a domain move.

#### After DNS Cutover

1. Wait 24–48 hours for DNS to fully propagate
2. Submit sitemap in Google Search Console: `https://www.pineapplekayakskauai.com/sitemap.xml`
3. **DO NOT use "Change of Address" tool in GSC** — this is the same domain, not a domain move
4. Request indexing for key pages: `/`, `/secret-falls`, `/hanalei`
5. Monitor Google Search Console for crawl errors
6. Monitor search performance for 2–4 weeks

## What's Configured

### Security Headers (`prototype/_headers`)

The site includes production-ready security headers via `_headers`:

- **X-Content-Type-Options: nosniff** — prevents MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** — privacy-friendly referrers
- **X-Frame-Options: SAMEORIGIN** — clickjacking protection
- **Permissions-Policy** — restricts geolocation, microphone, camera
- **Cache-Control** — HTML must-revalidate, images/videos cached 1 year

**Note:** No HSTS header until the custom domain is confirmed. No strict CSP to avoid breaking Google Fonts, YouTube, Google Maps, or FareHarbor embeds.

**HSTS Setup at Cutover:** After DNS points to Cloudflare Pages, enable HSTS in the Cloudflare dashboard (SSL/TLS → Edge Certificates → HTTP Strict Transport Security). Use `max-age=31556952` to match what Wix currently sends. Do NOT add HSTS to `_headers` before confirming the custom domain works on HTTPS.

### URL Structure (`prototype/_redirects`)

The `_redirects` file handles:

1. **Old Wix slugs → Clean URLs (301)** — SEO redirects from broken Wix URLs:
   - `/copy-of-hanalei-adventure` → `/secret-falls`
   - `/services` → `/adventures`
   - `/service-page/kayak-rentals` → `/book`
   - `/service-page/secret-falls-self-guided-tours` → `/book`
   - Plus 3 other Wix redirect URLs
2. **`.html` URLs → Clean slugs (301)** — prevents duplicate content (e.g., `/adventures.html` → `/adventures`)
3. **Clean URLs → HTML files (200)** — internal rewrites for pretty URLs

**Important:** Keep `prototype/_redirects` for **at least one year after cutover**. Old Wix URLs may still be indexed in Google, shared in travel forums, or bookmarked by returning customers. Removing redirects prematurely will create 404s and hurt SEO.

### URLs That Need Owner Decision

The following Wix URLs currently return 200 on the live site but are NOT mapped in `prototype/_redirects`. After DNS cutover, they would 404. **Do NOT invent destinations** — the owner must decide where these should redirect:

**Product Pages (9 URLs):**
- `/product-page/...` (merchandise/shop items)

**Category Pages (4 URLs):**
- `/category/...` (shop categories)

Options:
1. Let them 404 (if the shop/merch is retired)
2. 301 to `/` (if no clear equivalent)
3. 301 to a new shop page (if the owner adds merch to the new site)

These URLs are intentionally excluded from this PR to avoid guessing business intent.

## FareHarbor Integration

**Do not change:**

- Company: `redeyesnackshack`
- Flow: `1122156`
- Item IDs: See `README.md` for the full list

Booking happens on FareHarbor. The site never collects card numbers.

## SEO & Indexing Strategy

### Before Cutover

- **DO NOT request indexing of `*.pages.dev` URLs** — these are for testing only
- Canonicals in all HTML files already point at `https://www.pineapplekayakskauai.com/`
- Google will ignore the preview URLs due to canonical tags

### During Cutover

- This is a **same-domain deployment**, not a domain move or migration
- The domain stays `pineapplekayakskauai.com` (www subdomain)
- Only the hosting platform changes (Wix → Cloudflare Pages)

### After Cutover

- **DO NOT use Google Search Console "Change of Address" tool** — that's for domain moves (e.g., `old-domain.com` → `new-domain.com`)
- **DO NOT submit sitemap.xml until the custom domain points at Cloudflare Pages** — wait 24–48 hours after DNS cutover
- Submit sitemap: `https://www.pineapplekayakskauai.com/sitemap.xml`
- Request indexing for key pages: `/`, `/secret-falls`, `/hanalei`
- Monitor Google Search Console for crawl errors and performance

### URL Preservation

- Keep `prototype/_redirects` for **at least one year** after cutover
- Old Wix slugs (e.g., `/copy-of-hanalei-adventure`) may still be indexed or bookmarked
- Removing redirects prematurely creates 404s and hurts SEO

## Netlify Configuration

The `netlify.toml` file is still in the repo for historical context. Cloudflare Pages ignores it. The Cloudflare-specific configuration is in `_headers` and `_redirects`, which both platforms support (with slight syntax differences that are already accounted for).

## Need Help?

- Cloudflare Pages docs: https://developers.cloudflare.com/pages
- Check build logs in the Cloudflare dashboard if deployment fails
- Preview deployments happen automatically on every push to any branch
- Production deployments happen on pushes to `main`
