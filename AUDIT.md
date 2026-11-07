# Crownatech audit and improvement record

Audit date: 7 November 2026. Baseline: `20385fb`, branch `audit/crownatech-improvements`. This is an incremental engineering audit, not a compliance certification. No deployment or production configuration changes are authorized.

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
