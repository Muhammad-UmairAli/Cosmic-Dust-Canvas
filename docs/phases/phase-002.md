# Phase 2 — v0.2-features-and-polish

**Date opened:** 2026-06-15
**Status:** CLOSED (2026-06-16)

## Scope

Ship **v0.2.0** of `cosmic-dust-canvas` — features and polish on the published
v0.1.x base. All changes are non-breaking and additive: defaults reproduce
v0.1.x exactly. Four tracks: (1) a main-thread sprite pre-render + batched draw
loop as the performance foundation; (2) new particle behaviours — custom shapes,
twinkle/opacity pulse, colour breathing; (3) touch support; (4) an interactive
playground published to GitHub Pages plus CI auto-publish on `v*` tag. Worker /
OffscreenCanvas rendering is explicitly deferred.

## Deliverables

- [ ] Mergeable PR(s) closing the linked GitHub Issue(s)
- [ ] TIME-LOG.md rows logged for each substantive step (via /log-time)
- [ ] DASHBOARD.html updated with rows for every step (auto via /log-time)
- [ ] Closure log appended below at phase close

## Plan

Decomposition: `.claude/ccpm/epics/phase-2-v0.2-features-and-polish/` (PRD, EPIC, 001–008).

| Task | Title                                     | Depends on      |
| ---- | ----------------------------------------- | --------------- |
| 001  | Sprite pre-render + batched draw loop     | —               |
| 002  | Custom shapes (union + renderParticle)    | 001             |
| 003  | Twinkle / opacity pulse                   | 001             |
| 004  | Colour breathing (palette cycling)        | 001             |
| 005  | Touch support                             | 001             |
| 006  | Interactive playground + GitHub Pages     | 002,003,004,005 |
| 007  | GitHub Actions auto-publish on tag        | —               |
| 008  | Release prep: README, props table, v0.2.0 | 002–007         |

### Task 001 — Sprite pre-render + batched draw loop (Issue #7)

Replaced the per-particle radial-gradient + save/restore + double-arc draw block
with a cached offscreen-`<canvas>` sprite blitted via `drawImage`. New module
`src/sprites.ts`: `getSprite` (bounded LRU, max 2048), `drawGlowSprite` (the
v0.1.1 ring-glow halo + core), `getGlowSprite` (resolve/build, keyed by
shape·color·size·glow·dpr), `clearSpriteCache`. Hot path is now a Map lookup +
blit with zero per-frame gradient allocation. `clearSpriteCache` fires when
colors/minSize/maxSize/glowIntensity change and when `devicePixelRatio` changes
on resize/zoom. Output at default props is visually indistinguishable from v0.1.1
(exact sizes preserved — no quantization).

Note (advisory, deferred): on fractional-DPR displays (1.5×, 2.25×) the
`drawImage` downscale adds a faint sub-pixel edge softness the old direct-draw
path lacked; imperceptible at 1×/2×. The main canvas backing store is not yet
DPR-scaled — see SPLIT-PLAN §6 (backlog) for the retina pass.

## Closure log

**Date closed:** 2026-06-16
**Shipped:** `cosmic-dust-canvas@0.2.1` on npm (with provenance), playground live at
https://muhammad-umairali.github.io/Cosmic-Dust-Canvas/

### Tasks (all merged to `develop`, each via its own PR + code-review gate)

| Task                   | Issue/PR  | Summary                                                                                                          |
| ---------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| 001 sprite cache       | #7 / #8   | Bounded-LRU offscreen-canvas sprite cache; per-frame draw = Map lookup + `drawImage`, zero gradient allocation   |
| 002 custom shapes      | #9 / #10  | `shape` union (circle/star/square/triangle) + `renderParticle` escape hatch; `Particle`/`ParticleShape` exported |
| 003 twinkle            | #11 / #12 | `twinkle` opacity pulse, out of sync, exact no-op at 0                                                           |
| 004 colour breathing   | #13 / #14 | `colorCycle` palette cycling, shrink-safe, reuses cached sprites                                                 |
| 005 touch              | #15 / #16 | `touch` drag → shared `mouseRef` influence; leak-free listeners                                                  |
| 006 playground + Pages | #17 / #18 | Interactive demo with controls for every prop + Pages deploy workflow                                            |
| 007 CI publish         | #19 / #20 | Tag-triggered npm publish w/ provenance; security-audited (HIGH resolved via env gate)                           |
| 008 release prep       | #21 / #22 | README/JSDoc, version bump                                                                                       |

### Release + post-release fixes

- **v0.2.0** published from a pre-fix commit (publish approved before the dpr fix
  merged) → blurry on hi-DPI. npm forbids republishing, so superseded by v0.2.1.
- **Provenance fix** (#24): added `repository`/`homepage`/`bugs` to package.json
  (npm `--provenance` requires `repository.url`).
- **hi-DPI blur fix** (#25 / #26 → #27): the SPLIT-PLAN §6 (backlog) "DPR-aware main
  canvas" item, picked up — backing store now `cssW/H × devicePixelRatio` +
  `ctx.setTransform(dpr)`, so the dpr-rendered sprites blit 1:1 (crisp cores).
- **v0.2.1** (#28): version bump + `glowIntensity` now defaults to `0` (glow opt-in).
  Back-merged `main` → `develop` (#29) to resync.

### Sanity checks

- 59 Vitest tests pass; `tsc` + `eslint` + `actionlint` clean.
- Build **9.25 KB gzip (ESM)** — within the ≤ 12 KB budget (NFR-2).
- `npm view cosmic-dust-canvas@0.2.1 gitHead` = `50deae2` (the crisp build).
- `develop` content-identical to `main` after the back-merge.

### Carried to SPLIT-PLAN §6 (backlog)

- SHA-pin GitHub Actions repo-wide + Dependabot (Task 007 security MEDIUM-2, risk accepted).

### Follow-up for the maintainer

- `npm deprecate cosmic-dust-canvas@0.2.0 "blurry on hi-DPI displays; upgrade to 0.2.1+"` (needs npm login).

### Files NOT touched

`docs/methodology/`, `.claude/settings.json`, the test framework config (Vitest/ESLint/Prettier setup).
