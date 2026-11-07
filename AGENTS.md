# Crownatech project rules

## Preserve the existing website
- Refine the existing React website. Do not rebuild or redesign it.
- Preserve existing brand colors, typography personality, navigation, page structure, custom image crops, masks, shapes, and intentional asymmetry.
- Preserve the Work page's staggered project cards and vertical offsets. Keep reading and keyboard order logical; prevent overlap and overflow as projects are added.
- Do not introduce generic templates, purple gradients, generated images, fabricated claims, statistics, testimonials, partnerships, or business details.
- Do not use em dashes in public-facing copy. Flag unverified claims for owner confirmation.

## Security, privacy, and accessibility
- Never print or commit secrets. Inspect staged changes for credentials and sensitive data.
- Apply security protections appropriate to the actual stack. Validate inputs at trusted server boundaries where applicable; never claim client validation provides backend security.
- Use non-destructive verification. Do not aggressively scan production, rotate production credentials, change infrastructure, or modify databases without approval.
- Preserve essential integrations. Do not publish unapproved legal policies or invent retention, refund, or cancellation terms.
- Improve toward WCAG 2.2 AA: semantic structure, keyboard access, visible focus, labels, errors, contrast, reduced motion, and responsive reflow.
- Automated checks alone do not establish accessibility, security, or legal compliance.

## Verification
- Before changes, inspect Git status, remotes, current branch and commit, remote references, and divergence. Preserve all existing work.
- Establish build and lint baselines. After each meaningful change, review the diff, run relevant tests, build and configured lint/type checks, inspect for secrets, and check affected behavior.
- Verify responsive behavior at 320, 375, 390, 768, 1024, 1280, and 1440 pixels where browser tooling permits. Protect the Work layout and image treatments.
- Report failed, blocked, unavailable, and manual checks honestly. Never invent measurements or claim a build proves full functionality.

## Git and production restrictions
- Work on `audit/crownatech-improvements`, never directly on the production branch. Safely reuse existing history; never overwrite another developer's work.
- After each meaningful, logically complete and verified milestone: review changes, check for secrets, stage explicit relevant files, make a descriptive commit, push to the development branch, and verify and report the commit hash and push result before unrelated changes.
- Never use blind `git add .`, force-push, rewrite history, or delete branches without approval.
- If a change cannot be verified, report the limitation and obtain approval before pushing it. If authentication or network access prevents pushing, stop and report the blocker.
- Never deploy automatically, merge to production, or change hosting settings without owner approval.
