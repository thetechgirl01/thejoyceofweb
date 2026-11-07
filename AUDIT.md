# Crownatech audit and improvement record

Audit date: 7 November 2026. Baseline: `20385fb`, branch `audit/crownatech-improvements`. This is an incremental engineering audit, not a compliance certification. No deployment or production configuration changes are authorized.

## Production/source mismatch: deployment BLOCKED

Read-only inspection of the live HTML and its public `/assets/index-BdAxlOC6.js` on 7 November found an Axios client using `https://crownatech.onrender.com`, `/api/contacts`, `/api/blogs`, authentication and admin modules, and token storage in localStorage. These do not exist in this checkout or the fetched remote branches (`main` and the audit branch). Production uses dynamic `/projects/:slug` and `/blog/:slug` routes while this local version has static project routes and numeric blog IDs. A build from this checkout must not replace production: it could regress existing functionality and URLs. Source findings below apply to this checkout unless specifically identified as live checks. Reconcile the deployed commit/repository and backend source before integrating services or declaring release readiness. Existing services must be assessed before any replacement recommendation. No admin API was probed and no production form was submitted.

## Inventory and baseline

- React 19 SPA, JavaScript/JSX, React Router 7, Rolldown Vite 7 alias, Tailwind 4 Vite plugin, GSAP, React Icons, Lucide, and React Helmet. npm is the package manager (`package-lock.json`).
- No application server, database, authentication, admin routes, sessions, uploads, webhooks, or API handlers found in this repository. Password hashing, server authorization, CSRF, SQL/NoSQL injection, and endpoint rate limiting are not applicable to this checked-in frontend. External services cannot be assessed from this source.
- BrowserRouter routes: `/`, `/about`, `/works`, `/blogs`, `/blog/:id`, `/contact`, `/faq`, `/work`, `/projects/errands-by-brownie`, plus wildcard fallback. Shared navigation, booking CTA, and footer; home composes hero, services, sliced portrait, projects, process, and contact sections.
- Existing tokens: navy `#011936`, slate `#1E293B`, pale gray `#E5E7EB`; yellow/goldenrod accents. Gotu, Montserrat, Roboto and Manrope are loaded from Google Fonts. Preserve custom clipped project images, portrait slices, and `lg:mt-96` alternating portfolio offsets.
- No environment-variable references, example env file, backend configuration, CI workflow, or checked-in hosting configuration found. Do not invent a CMS URL or contact backend. Root `.env` files are not ignored by the baseline rules.
- Public homepage headers identify Vercel. Hosting configuration, project settings and environment variables are outside this repository's evidence.
- `npm ci --ignore-scripts --no-audit --no-fund`: PASS, 335 packages installed with lockfile unchanged. Peer warning: React Helmet's `react-side-effect` supports React through 18, while the app uses 19. Unused react-snap brings deprecated Puppeteer and legacy server dependencies. Lifecycle scripts intentionally disabled.
- Baseline `npm run build`: PASS, 74 modules; JS 472.73 kB (153.23 kB gzip), CSS 65.68 kB (11.80 kB gzip). These are bundle sizes, not Core Web Vitals.
- Baseline `npm run lint`: FAIL, 12 errors and 1 warning. Unused handlers/data in shared Contact (6), unused About callback argument (1), WorkContent callback arguments (2), Errands callback arguments/ref (3); Services cleanup ref warning (1).
- No test or typecheck scripts, TypeScript source/config, or existing test suite. NOT RUN as unavailable; browser checks are tracked below.
- Git fetch: PASS; branch and remote both contain `20385fb`, divergence 0/0. Existing work was clean.

## Prioritized findings

| ID | Severity | Confirmed evidence | Initial remediation |
| --- | --- | --- | --- |
| S1 | Critical package rating; contextual development risk | npm audit: 39 affected packages (4 critical, 28 high, 3 moderate, 4 low). Unused react-snap includes minimist/proxy-addr chains. No evidence these server packages run in production. | Remove unused tool; compatible dependency remediation, verify build and browser behavior. |
| S2 | High package rating; exposure varies | React Router 7.12 and PostCSS plus transitive build tools have advisories. Most Router server/RSC advisories do not apply to this BrowserRouter-only SPA. | Compatible updates; do not equate advisory count with exploitable production vulnerabilities. |
| F1 | High | `pages/Contact.jsx` submit only logs personal form data, with no delivery and no status. Newsletter Subscribe in Blogs has no handler. | Remove sensitive logging, report unavailable delivery honestly, do not invent an endpoint or claim success. |
| A1 | High | Navbar offscreen links remain focusable; no expanded/controls state or Escape handling. | Make closed panel inert, add disclosure state and keyboard behavior. |
| F2 | Medium | Work links to `/projects/4thmanclothing` and `/projects/the-rose-room-by-adelas`, but only Errands detail exists. Wildcard renders Blogs. | Explicit not-found route; avoid links to nonexistent case studies while retaining cards and public URLs. |
| F3 | Medium | Blogs and blog detail never receive data from App; localhost:1337 image URLs are hardcoded. | Honest empty state; owner must supply approved CMS source/content. |
| F4 | Medium | FAQ contact CTA uses GSAP scrollTo without plugin or matching target; Errands demo hostname is misspelled. | Use existing `/contact` route; fix hostname to existing portfolio URL. |
| A2 | Medium | Contact labels not associated with fields, blog search/newsletter unlabeled, nested anchor/button controls, no skip link/main landmark. | Targeted semantic fixes preserving layout. |
| R1 | Medium | Work card minimum 320px plus 32px page padding cannot fit 320px viewport; tablet grid sets zero row gap. | Remove rigid minimum; preserve clipping and alternating desktop offsets. |
| SEO1 | Medium | Nested Helmet in Home; no route-specific metadata elsewhere, canonicals or OG; favicon/manifest URLs point to files outside public. Sitemap only four routes, no robots.txt. | Valid metadata and assets; preserve production routes; no invented schema/reviews. |
| P1 | Medium | All route modules eagerly imported; unused legacy toolchain; largest image is logo at 200.86 kB; animations ignore reduced motion. | Remove unused dependencies; assess lazy route loading and motion handling. No image replacement. |
| S3 | Medium, production approval needed | Read-only `curl -I https://www.crownatech.com`: HTTPS 200, HSTS max-age=63072000; no CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy or frame protection on this response. Wildcard CORS on public static HTML is not itself an authenticated API vulnerability. | Stage a tested header policy with hosting owner; do not alter infrastructure here. |
| S4 | Medium | `.gitignore` omits `.env`/private key protections. Pattern scan of 197 reachable commits found zero candidates for private key/AWS/GitHub tokens or long assigned credential strings. | Add ignore rules. Pattern scan is limited and cannot prove no secrets ever existed. |
| C1 | High trust risk; owner confirmation | About claims 100+ projects, 50+ clients, 24/7 support; founding date; FAQ pricing/ownership/guarantees; `/work` contains unrelated AJP sports content. Errands also contains AJP copy and placeholder Stripe test links. | Flag for owner review; no fabricated replacement claims, no payment-link changes without approval. |
| L1 | Medium; legal review needed | No legal routes, privacy/terms/cookie/refund pages. Google Fonts and external images contact third parties; booking links to generic Calendly. No first-party analytics, cookies or browser storage code found. | Document processors and actual flows; draft only unapproved offline privacy text, no published legal promises or unnecessary cookie banner. |

## Page-by-page source audit

| Route | Findings and shared concerns |
| --- | --- |
| `/` | Nested Helmet; nested interactive CTAs; About anchor inside Link; multiple section h1s; empty latest-blog section because no data; low-contrast email; custom portrait slices must remain. |
| `/about` | Unsupported numerical claims require confirmation; unused animation callback argument; GSAP motion; inherited navigation/SEO concerns. |
| `/works` | Preserve alternating `lg:mt-96` and polygon crop; minimum-width overflow, zero tablet row gap, unnamed external icon links, two missing detail destinations, invalid `<bt/>`. Includes Contact page form. |
| `/blogs` | Always empty with current App wiring; unconnected newsletter, unlabeled inputs, nested button inside article link, hardcoded localhost image host. |
| `/blog/:id` | Always not found without data; hardcoded CMS image host; no metadata. Backend/approved content missing. |
| `/contact` | Form has no transport; logs personal data, unassociated labels, unsupported privacy assurance. Founding date/social accounts need confirmation. |
| `/faq` | Accordion lacks expanded/controls associations, answers visually collapsed but exposed to assistive tech, CTA broken; purple gradients conflict with requested direction; pricing/service guarantees require confirmation. |
| `/work` | Unrelated sports template with external images/logo, demo.example.com and test Stripe link. Owner approval needed for replacement content/payment changes. |
| `/projects/errands-by-brownie` | Demo hostname typo; unrelated AJP and sports/athlete copy, external stock images, No.1 claim and test Stripe links require owner review. |
| Unmatched URLs | Incorrectly render Blogs; requires useful not-found UI. HTTP 404 response depends on hosting and requires production verification. |
| Shared components | Booking goes to generic calendly.com; footer has no legal links because no approved legal pages exist; global hover color token empty, scrollbars hidden, no reduced-motion treatment. |

## Privacy and legal review

No auth cookies or tracking library was found in source; this is not a full network/cookie inventory. Contact values currently stay in component state and are logged locally; no message delivery occurs. Newsletter collects input visually but sends nothing. Outbound social, project, Stripe and Calendly links are not embedded widgets; visitors leave the site when following them. Google Fonts and externally hosted project/blog imagery receive network requests. Vercel access logs and business email processing require owner inventory.

Owner/legal review must establish controller identity/contact, purposes and lawful bases, recipients/processors and international transfers, retention/deletion, rights and complaint handling, and whether any nonessential tracking needs consent. Privacy information is not itself consent; do not assume a banner establishes compliance. See the [NDPC GAID 2025](https://ndpc.gov.ng/wp-content/uploads/2025/03/NDP-ACT-GAID-2025-MARCH-20TH.pdf), especially lawful basis and consent guidance. No legal page is approved or published. Service terms may be appropriate; refund/cancellation terms depend on actual contracts and payments and must not be invented.

## Verification and limitations

| Check | Status | Evidence/limitation |
| --- | --- | --- |
| Baseline build | PASS | npm run build output above |
| Baseline lint | FAIL | 12 errors, 1 warning listed above |
| Dependency advisories | FAIL | npm audit JSON, 39 affected packages; raw local artifact `/tmp/crownatech-audit-baseline.json` |
| Secret pattern history scan | PASS (limited) | 197 commits scanned; zero pattern candidates; not a comprehensive secret audit |
| Live homepage headers | PASS for HTTPS/HSTS; gaps above | Single HEAD response, Vercel, 7 Nov 2026; no aggressive scanning |
| Automated browser/a11y/reflow | NOT RUN yet | Local Chrome + axe audit being prepared |
| Screen-reader, touch, cross-browser, 200% text, contrast over images | REQUIRES MANUAL VERIFICATION | Automated checks cannot establish full WCAG compliance |
| Core Web Vitals | NOT RUN | No field data or lab metric recorded; bundle sizes only |
| External backend/hosting/session security | BLOCKED | No backend/configuration or credentials in repository |

## Implementation and Git milestones

- Existing `20385fb`, `docs: establish Crownatech audit and preservation rules`, AGENTS.md; confirmed pushed via fetch and ancestry check. Do not recreate.
- This report is the initial prioritized audit milestone. Subsequent fixes, verification, commits and push evidence will be appended here.

## Deployment considerations

Development branch only. Do not merge or deploy automatically. Resolve owner-confirmed copy, contact delivery/CMS configuration, approved legal notices, external booking/payment destinations, and production headers before claiming readiness. Verify SPA deep links, real HTTP 404 behavior, sitemap canonical hostname, integrations and caching in staging. No assertion of full security, compliance, or production readiness is made.

### Security dependency milestone

- Removed unused `react-snap`: no imports, package configuration, scripts, or prerender workflow references existed. Applied `npm audit fix --ignore-scripts` without force: Router 7.12.0 -> 7.18.5, PostCSS 8.5.6 -> 8.5.32 and compatible transitive patches/minors. Direct major versions unchanged. Added `.env`, environment variants and private-key ignore rules (example env remains allowed).
- PASS: build; lockfile diff review; ignore-rule probes; all 10 route smoke checks in local Chrome with zero uncaught page errors; npm audit now **0 vulnerabilities** (point-in-time database result, not proof of security). Lint still has the same 12 pre-existing errors/1 warning; no new lint findings. React Helmet peer warning remains for later metadata remediation.
- Browser baseline: Chrome + axe at 390px; seven-width reflow checks on all 10 routes. Work overflow confirmed at 320px (336px document). Axe found home unnamed carousel buttons and project links plus contrast failures; Work unnamed links; Blogs/legacy Work/Errands contrast issues. Baseline JSON and summarized dependency advisories retained in `docs/audit/`. No uncaught page errors during route load; interactions were not covered by this smoke check.

### Form integrity and baseline lint milestone

- Contact form now states delivery is unavailable before entry and reports an explicit unsent status on valid submission. Removed personal-data console logging; linked labels and native length limits/autocomplete added. No external destination was invented. Newsletter controls are disabled with an explanation until a real subscription service is configured. Removed article-link nested button.
- Removed unused shared contact form scaffolding and unused animation arguments/ref, and captured the Services element for reliable cleanup. This resolves all 12 baseline lint errors and the warning without suppressing rules.
- PASS: lint (zero findings), build, diff review; Chrome verified required-field rejection, label associations, valid-submit unsent status, no personal-data logs or non-GET requests, and disabled newsletter input. Message delivery and subscriptions remain BLOCKED pending owner-approved configuration.

### Accessibility, responsive layout and keyboard milestone

- Work card minimum width removed; tablet row spacing restored. Alternating desktop `lg:mt-96` and the original polygon crop are unchanged. Chrome geometry at 1440px confirms the second card begins 384px below the first, the third row does not overlap, and 320px reflow fits. Images now lazy-load without changing source/crop. Full-page screenshots require scrolling to load offscreen lazy images.
- Closed navigation is inert/hidden to assistive technology; expanded/controls state and Escape focus return added. Menu contents fit short screens through scrolling. Added skip link, main landmark, consistent two-tone focus indicators, carousel names/state, and external project link names. Removed nested anchors/buttons and corrected home section headings and light-surface text contrast. Removed the invalid global anchor color override that caused contrast failures.
- FAQ answers use state-driven visibility outside their disclosure buttons with expanded/controls associations; contact CTA now navigates to `/contact`. Replaced FAQ purple gradients with existing slate/yellow treatments. JavaScript entrance/hover animations respect reduced motion, as do CSS effects and carousel scrolling. Fixed consultation modal with native dialog focus containment, named close button, Escape, trigger focus restoration, and readable booking link.
- PASS: lint (no findings), build, diff review; Chrome keyboard skip-link/menu/FAQ checks, reduced-motion content, portfolio geometry and crop checks; open-dialog axe and focus/Escape checks. Initial test failures from reading layout before media-query reflow were fixed by waiting for layout. A modal focus-return failure was corrected before commit. A transient animation contrast result was retested with reduced motion and no violations.
- All 10 routes: zero axe violations in tested WCAG 2 A/AA, 2.1 AA and 2.2 AA tags at 390px; zero document overflow across 320/375/390/768/1024/1280/1440px; zero uncaught route-load errors. Evidence: `docs/audit/after-a11y-browser.json` (follow-up dialog/FAQ changes separately verified). This does not establish full accessibility compliance, 200% text resizing, touch usability or screen-reader compatibility.


### Routing and SEO milestone

- Shared route metadata replaces nested React Helmet; removed incompatible dependency and seven packages. Unique title, description, canonical, OG values and index directives update on SPA navigation. Unknown local routes/blog IDs and the unrelated legacy `/work` page use noindex. Static HTML has homepage fallbacks; social bots that do not execute JavaScript still need approved prerender/SSR work for route-specific previews. No review/business schema was fabricated.
- Unknown paths now show a not-found page instead of Blogs; existing local URLs remain. The two portfolio titles without local case studies are plain headings, retaining their existing external demo controls. Corrected Errands demo typo and made the home email text match its existing `hello@` mailto destination; owner must confirm that mailbox works.
- Existing icon assets copied to public URLs already referenced by HTML; manifest branded using existing navy. Added robots.txt; sitemap now uses verified www canonical hostname and includes Blogs/FAQ. Unverified legacy/case-study content omitted from sitemap pending owner review. HTTP www and HTTPS apex return 308 to HTTPS www (live HEAD checks).
- PASS: lint, build, diff review; Chrome tested ten route titles/canonical/OG/robots, SPA navigation without duplicate head tags, nine static assets returning 200 with non-HTML content types, and only valid local portfolio case-study links. Removed Helmet/side-effect confirmed absent from installed tree. JS bundle now 461.36 kB / 148.82 kB gzip. Production HTTP 404 and route previews remain manual/staging checks.

### Owner-directed content and integration cleanup

- Follow-up owner instructions authorize removing clearly irrelevant demo content, withholding unverified metrics/pricing, and preventing placeholder booking/test payments. About/Contact metrics and founding date, unsupported response-time claims, commercial FAQ terms/guarantees and free-call offer are withheld. Existing ordinary service/project descriptions remain; no numerical replacements or client achievements were invented.
- Removed unrelated sports/AJP/athlete sections, stock images and script-sale CTAs. Errands retains its original local logo/showcase, hero treatment, demo and existing portfolio description. `/work` remains available as navigation to the portfolio with noindex; draft replacement content is offline. No legitimate payment SDK/configuration existed; both demo Stripe data locations and rendered checkout controls were removed. The floating image/ring and dialog remain, now offering Contact navigation with booking explicitly pending rather than linking to calendly.com.
- Read-only live inspection found an existing backend and admin/publishing flow, so recommending a new email service or paid CMS would be premature. The public blog endpoint HEAD returned 200 JSON with security headers; no contact or admin request was made. Backend auth, password hashing, data access, validation, rate limiting and mail delivery require the missing server source and staging access. Production localStorage token use needs an XSS/session review; no exploitability claim is made.
- `docs/review/OWNER-DECISIONS.md` records the exact business claims, source mismatch, existing service evidence, credentials/cost verification requirements, payment/booking activation conditions and unpublished project drafts. `docs/review/PRIVACY-DRAFT.md` is an unapproved worksheet, never exposed through public assets/routes. No legal policy has been published.
- Lint/build/diff review passed, but the initial Chrome content check FAILED: the stats cleanup removed FaLightbulb while another About section still referenced it. The commit/push for f03925a was started before that result was inspected; the earlier claim of browser PASS was incorrect. No deployment occurred. A corrective milestone below restores the import and reruns verification. These branch-only changes must be ported to the authoritative deployed source before release.


### Corrective verification milestone

- Restored the FaLightbulb import used by the existing About service CTA. No history rewritten.
- PASS: lint, build, diff check, full rendered-content scan, dialog Contact navigation, retained Errands assets/demo, and ten-route smoke check with zero uncaught errors. This corrects the f03925a runtime regression. The baseline ESLint configuration does not detect undefined JSX component names; add a focused lint rule in the QA milestone.

### Performance and failure-recovery milestone

- Deferred secondary route modules with React.lazy/Suspense and accessible loading status; added a route error boundary with reload recovery and no exposed exception details. Home retains immediate rendering. Existing unused Manrope font removed; remaining Google Fonts consolidated to one CSS request without changing actual typography.
- Removed unused Lucide and direct Autoprefixer/PostCSS declarations: no Lucide imports or PostCSS/autoprefixer configuration existed. Vite/Tailwind still retain their required patched PostCSS dependencies. No image files were regenerated or replaced.
- Measured build: initial JS 402.66 kB / 137.12 kB gzip versus baseline 472.73 / 153.23 (14.8% fewer initial uncompressed JS bytes, 10.5% fewer gzip bytes). Secondary page chunks load as needed; total all-route bytes are not equivalent to the entry chunk reduction. CSS 61.75 / 11.40 versus 65.68 / 11.80 kB. Content removal and dependency cleanup also contribute; no LCP/INP/CLS score or improvement is claimed.
- PASS: lint/build/diff review; npm audit still zero; all-route Chrome smoke check, form and keyboard/portfolio checks, and intentionally blocked local About chunk showing safe recovery UI. Test harness was updated to await lazy content; the initial newsletter lookup raced the loader, then passed with route settling.
- Read-only production browser audit: six public pages at 390px, no uncaught page errors or failed HTTP responses observed; one home target-size axe finding, no document overflow at this width. Requests to Google Fonts, Unsplash, Render and Cloudinary observed. Fresh anonymous browser observed no cookies/localStorage/sessionStorage keys on these pages; this does not cover login, embedded services, future navigation or server logs. `docs/audit/live-browser.json` records names/hosts only, never storage/cookie values. Production findings differ from local because source/deployment do not match.
