# SPLIT-PLAN.md

The spine of this project. Every phase, every deferred item, every cross-cutting concept lives here or in a doc this points at. If it isn't on the spine, it doesn't exist.

> See `docs/methodology/01-orchestration-spine.md` for how to use this document.

---

## §0 — Header

<!-- One paragraph describing the project and its current state of the world. Update at every phase boundary. -->

_Project: `<your-project-name>`. Current state: Phase 0 — Project Init complete. Phase 1 not yet started._

---

## §1 — Goals

<!-- What this project is trying to achieve. Stable; rarely edited. -->

- Generate hundreds of softly glowing particles that slowly drift across the screen and gently react to the user's mouse.
- Ship as a reusable React component so users can drop cosmic dust into their own ReactJS projects.

---

## §2 — Out of scope

<!-- What this project is NOT. Defended actively. -->

- _(none specified yet)_

---

## §3 — Architecture overview

<!-- Pointer to docs/architecture-design-decisions.md. Don't duplicate decisions here. -->

See [`docs/architecture-design-decisions.md`](docs/architecture-design-decisions.md) for current architecture and decision history.

---

## §4 — Cross-cutting concepts

<!-- Names and values that must update in EVERY affected file when changed. When editing one of these, walk every row and update every file in it. -->

| Concept                       | Files that must agree                                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| _e.g. canonical project name_ | `README.md`, `CLAUDE.md`, `docs/DESIGN.md`                                                                                               |
| `docs/DESIGN.md`              | Visual identity — Binance, Ferrari, Shopify, Spotify, PlayStation, Airbnb, Nike, Slack, NVIDIA, Uber; theme picker mandate for VoltAgent |

---

## §5 — Progress log

<!-- One-line pointer rows, one per closed phase. Full closure detail lives in docs/phases/phase-NNN.md for non-trivial phases. -->

| Date       | Phase                  | What was done                                                                | What is next                                |
| ---------- | ---------------------- | ---------------------------------------------------------------------------- | ------------------------------------------- |
| 2026-06-14 | Phase 0 — Project Init | Bootstrap via `init-project.sh`. See `TIME-LOG.md` Phase 0 rows for actuals. | Define SPLIT-PLAN §1 (goals); open Phase 1. |

---

| 2026-06-14 | Phase 1 — react-cosmic-dust-component | PR #1 merged (feature/react-cosmic-dust-component → develop). Shipped cosmic-dust-canvas npm package: Canvas+React+TypeScript particle engine, mouse spring physics (repel/attract/none), manual radial-gradient glow scaling with glowIntensity (0–40), 16 passing Vitest tests, Vite ESM+CJS build at 7.83 KB gzip. Post-merge bug fixes: ctx.shadowBlur replaced with radial-gradient halo (glow now visually responds to slider); spring force doubled + clamp raised (mouseInfluenceRadius clearly perceptible). Files NOT touched: demo/, .github/, docs/methodology/. Unblocks: npm publish to registry, Phase 2 feature work. | (closed) |
| 2026-06-15 | Phase 2 — v0.2-features-and-polish | IN FLIGHT | (will be filled in at close) |
## §6 — Backlog

<!--
Items deliberately deferred from in-flight phases.

Three rules:
1. A future phase that picks up an item: adds a SPLIT-PLAN §5 (progress log) row referencing SPLIT-PLAN §6 (backlog), addresses ONLY the chosen item, REMOVES the bullet from SPLIT-PLAN §6 (backlog).
2. New deferred items added only when a phase explicitly defers something. No hypotheticals.
3. SPLIT-PLAN §6 (backlog) is never modified by an unrelated phase. Stop and ask if tempted.
-->

- **SHA-pin GitHub Actions repo-wide + Dependabot.** Deferred from Phase 2 — Task 007 (security audit MEDIUM-2, **risk accepted**). All workflows (`ci.yml`, `pages.yml`, `publish.yml`) pin `actions/*` to mutable major-version tags (`@v4`, etc.) rather than full commit SHAs. For the secret-bearing `publish.yml` this is a (bounded) supply-chain risk. Accepted for now because the actions are first-party `actions/*` and the `npm-publish` environment approval gate inserts a human checkpoint before the token-bearing job runs. A future hardening pass should SHA-pin all workflows and add a `github-actions` Dependabot config to bump them safely (repo-wide, not piecemeal).
