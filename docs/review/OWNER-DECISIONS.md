# Owner decisions before deployment

These notes and drafts are not website content. No legal policy, business claim, replacement service, booking provider, or live payment integration is approved by this document.

## Resolve deployed source first

The live www site uses a newer frontend bundle and Render REST API, absent from this checkout. Required: deployed frontend repository/commit, matching backend repository/commit, deployment owners, and staging environment. Do not deploy this older branch over the live app. Port reviewed improvements into the authoritative source after reconciliation, preserving its dynamic project/blog URLs, admin controls and working contact flow.

A read-only HEAD to the discovered public `/api/blogs` endpoint returned JSON content type and HTTP 200. That proves an endpoint responds, not that publishing, mail delivery, authorization or retention work. No login, admin data retrieval, contact submission, or payment was attempted.

## Contact and publishing

- Current checkout: form state + prior console logging only; no email provider, API handler, environment references or deployment service configuration. Proposed branch displays an honest unavailable state rather than pretending to send.
- Production bundle: Axios client base URL `https://crownatech.onrender.com`, contact submission via `/api/contacts`, blog reads via `/api/blogs` and `/api/blogs/:slug`, plus authenticated admin modules. These URLs are observed evidence, not newly invented or integrated configuration.
- Recommendation: reconcile and retain/repair the existing backend first. Obtain its request/response schemas, public/private endpoint boundaries, CORS allowlist, validation/rate limits, mail delivery and failure/retry design, bot protection, persistence/retention and deployment configuration. Verify in staging using owner-approved synthetic data. Do not submit test personal data to production.
- Credentials/configuration: backend hosting access, domain/email delivery provider already in use, verified sender and recipient, SPF/DKIM/DMARC, appropriate server-only mail credentials, storage permissions, log redaction and service monitoring. Share secrets through the deployment secret store, never this report or client-side VITE variables.
- Costs: no new service has been selected or purchased. Existing Render, database, storage, and email subscription/usage costs cannot be determined from frontend source and need dashboard confirmation. Quote any replacement service's current plan/limits before approval and integration. No paid commitment is authorized.
- Publishing recommendation: use the existing blog API/admin workflow after its security/maintenance review. Do not introduce a second CMS. If that source is irrecoverable and publishing is infrequent, version-controlled Markdown with a build-time index is a possible maintainable alternative with no CMS subscription; implementation and migration need owner approval. A hosted CMS is not justified merely because this checkout is incomplete.

## Booking

Only `https://calendly.com` was present in both this checkout and the live bundle. This is a provider homepage, not an approved Crownatech booking page. The proposed branch removes it from the user experience, retains the existing floating image/ring and dialog, and links to Contact without promising a free call or duration. Supply a verified owner booking URL and approved offer/duration; integration belongs in `src/components/Bookcall.jsx` (and the authoritative deployed source after reconciliation). Do not put placeholders in public UI.

## Business/content evidence register

No supporting business records or owner confirmation have been supplied for these claims. Removed/withheld from proposed public rendering; history retains exact originals.

| Source | Claim/terms requiring evidence |
| --- | --- |
| About stats | 100+ projects, 50+ happy clients, 5+ years, 24/7 support |
| Contact page/shared Contact | 100+ projects, typical 24-hour response, 24–48 hour average response, founding in 2019 |
| FAQ timelines | 2–4, 4–6, and 8–12 week delivery ranges |
| FAQ pricing | $1,500 basic; $3,000–$7,000 business; $5,000–$15,000 commerce; $10,000+ applications |
| FAQ support/hosting | Maintenance subscriptions, backups, SSL, 24/7 monitoring, security updates, performance optimization |
| FAQ ownership/guarantees | 100% ownership transferred on final payment; every device/browser and perfect performance guarantees |
| Booking/contact | Free 15-minute consultation and free initial consultation |
| Home/Errands case study | Best/No.1 courier claims; unsupported sports case-study assertions |
| Existing service language | Absolute “works perfectly” statement removed; ordinary existing service descriptions retained, not independently verified |

Existing project images, names, screenshots and ordinary descriptions were preserved. The Errands overview reuses the existing portfolio description; no new achievements, partnerships or case-study results were written. No mounted testimonials/reviews or fabricated review schema were found. Unmounted Blog/YouTube components contain sample articles/video dates and must not be enabled without review. Existing social profiles and hello@crownatech.com must be confirmed by the owner; network/MX checks do not prove ownership or delivery.

## Sports/demo and payments register

- `/work`, `src/pages/WorkContntPage.jsx`: AJP/jiu-jitsu/UAE narrative, unrelated external logo and stock imagery, example.com demo and Stripe test checkout. Entire content was a demo rather than substantiated Crownatech work. Route retained as a simple link to the real portfolio, with noindex; replacement case study remains pending.
- `/projects/errands-by-brownie`: AJP/UAE narrative, desert branding, sports league rankings/athlete profiles/event management and unrelated stock photos were clear copied demo sections. Removed while preserving the client logo, local website showcase, title, real demo link, original hero treatment and existing portfolio description.
- Both files contained `https://buy.stripe.com/test_123456`. Legacy Work rendered two checkout links. Errands rendered one final checkout link plus one commented-out link. Prices were $149. No Stripe SDK, server handler, account key, webhook configuration, product IDs, or real payment flow exists in this checkout. Those demo checkout controls/data were removed, with no replacement checkout.
- To activate payments: owner-approved commercial offering/price/currency, verified business Stripe account and eligibility, approved live Payment Link or server-side checkout integration, applicable terms/refund/privacy text, webhook signature verification and idempotency if fulfilling purchases, secure server credentials, staging/sandbox validation and explicit go-live approval. No credentials should enter this repository.

## Draft project copy: review before publishing

Draft only, not inserted into the site:

- Errands case-study section heading: “Service discovery and enquiries”. Draft: “The website presents the courier and errand services in one place. The project overview can describe the agreed service pages, enquiry journey, and responsive layouts once the final scope is confirmed.” Owner must confirm deliverables and replace the conditional wording with verified facts.
- Replacement `/work` content: select an actual project and provide approved brief, scope, assets, contribution, and any supported outcomes. No invented case-study text is proposed.
- FAQ commercial answers: provide approved pricing, delivery estimates, support obligations and ownership terms. Do not silently reinstate old template promises.
