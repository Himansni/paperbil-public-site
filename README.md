# PaperBil Public Website

Static HTML/CSS/JavaScript website for the public-facing PaperBil brand. This repository is separate from the Flutter app repository `Himansni/paper_pay`.

## Files
- `index.html` — homepage
- `features.html` — feature overview
- `pricing.html` — pricing enquiry page (does not publish unverified prices)
- `about.html` — about PaperBil
- `support.html` — support information and a non-submitting demo form
- `privacy.html` — privacy notice draft; verify before publication
- `terms.html` — terms draft; verify before publication
- `delete-account.html` — account deletion information draft; NOT a functioning request endpoint
- `styles.css` — responsive design system
- `script.js` — mobile navigation and demo form behavior
- `404.html` — not-found page

## Local preview
Open `index.html` directly in a browser, or run a static server from this directory:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Cloudflare Pages
Create a Pages project connected to this repository. Use:
- Framework preset: None
- Build command: leave empty
- Build output directory: `/` (repository root)

Add `paperbil.com` as a custom domain only after confirming DNS and domain ownership settings.

## Before public launch
1. Verify the legal operating entity and support contacts.
2. Reconcile plan prices, customer/employee limits, trial, grace, renewal, cancellation and refund behavior with the app and backend.
3. Review privacy disclosures against the production app's actual permissions, data flows, service providers, hosting region and retention controls.
4. Implement and test the real secure account deletion request workflow. `delete-account.html` is currently informational only.
5. Connect the support form to a secure backend or remove the form.
6. Verify all URLs, mobile layouts, accessibility, canonical domain and HTTPS.
7. Add a production `sitemap.xml` and `robots.txt` after final URLs are confirmed.

This is a first website UI draft, not legal advice or a compliance certification.
