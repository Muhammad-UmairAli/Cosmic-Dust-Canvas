# Phase 2 — v0.2-features-and-polish

**Date opened:** 2026-06-15
**Status:** IN FLIGHT

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

<!-- Filled in when the phase closes. Date closed, Issue/PR numbers,
what shipped, files NOT touched, sanity checks, what this unblocks. -->
