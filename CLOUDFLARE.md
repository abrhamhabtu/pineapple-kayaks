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

### 3. Preview First

After the first deployment:

- Cloudflare will give you a `*.pages.dev` preview URL
- Test the site thoroughly on this URL
- Verify:
  - All pages load with clean URLs (e.g., `/adventures`, not `/adventures.html`)
  - `.html` URLs redirect to clean slugs via 301
  - Old Wix URLs redirect correctly
  - FareHarbor booking embeds work
  - Security headers are applied (check DevTools Network tab)
  - Images and videos load correctly

### 4. Custom Domain (Later)

**Do NOT point the custom domain until the owner approves.**

When ready:

1. In Cloudflare Pages project → **Custom domains**
2. Add `pineapplekayakskauai.com` and `www.pineapplekayakskauai.com`
3. Cloudflare will automatically provision SSL certificates
4. Update DNS records as instructed by Cloudflare
5. Wait for DNS propagation (usually < 5 minutes)

After the custom domain is live:

- Submit the new sitemap to Google Search Console: `https://www.pineapplekayakskauai.com/sitemap.xml`
- Request indexing for key pages: `/`, `/secret-falls`, `/hanalei`
- Monitor search performance for a few weeks

## What's Configured

### Security Headers (`prototype/_headers`)

The site includes production-ready security headers via `_headers`:

- **X-Content-Type-Options: nosniff** — prevents MIME sniffing
- **Referrer-Policy: strict-origin-when-cross-origin** — privacy-friendly referrers
- **X-Frame-Options: SAMEORIGIN** — clickjacking protection
- **Permissions-Policy** — restricts geolocation, microphone, camera
- **Cache-Control** — HTML must-revalidate, images/videos cached 1 year

**Note:** No HSTS header until the custom domain is confirmed. No strict CSP to avoid breaking Google Fonts, YouTube, Google Maps, or FareHarbor embeds.

### URL Structure (`prototype/_redirects`)

The `_redirects` file handles:

1. **Old Wix slugs → Clean URLs (301)** — SEO redirects from broken Wix URLs
2. **`.html` URLs → Clean slugs (301)** — prevents duplicate content (e.g., `/adventures.html` → `/adventures`)
3. **Clean URLs → HTML files (200)** — internal rewrites for pretty URLs

## FareHarbor Integration

**Do not change:**

- Company: `redeyesnackshack`
- Flow: `1122156`
- Item IDs: See `README.md` for the full list

Booking happens on FareHarbor. The site never collects card numbers.

## Netlify Configuration

The `netlify.toml` file is still in the repo for historical context. Cloudflare Pages ignores it. The Cloudflare-specific configuration is in `_headers` and `_redirects`, which both platforms support (with slight syntax differences that are already accounted for).

## Need Help?

- Cloudflare Pages docs: https://developers.cloudflare.com/pages
- Check build logs in the Cloudflare dashboard if deployment fails
- Preview deployments happen automatically on every push to any branch
- Production deployments happen on pushes to `main`
