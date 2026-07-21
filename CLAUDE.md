# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Windowsize is a single-page static tool (deployed at https://windowsize.brachkow.com) that reports the various window/screen dimensions of the visitor's browser: physical screen resolution, screen resolution, viewport, and window size, each with computed aspect ratio.

## Commands

- `pnpm dev` — Vite dev server on port 3000 (`host: true` exposes it on the LAN)
- `pnpm build` — parallel `type-check` + `build-only` (via `npm-run-all`)
- `pnpm type-check` — `vue-tsc --noEmit`
- `pnpm lint` — `eslint --fix .`

There is no test runner configured.

## Architecture

The entire app is two files:

- `src/main.ts` — mounts the Vue app and initializes OpenPanel analytics (self-hosted instance).
- `src/App.vue` — the whole UI. `calculate()` reads `screen.*`, `window.inner*`, `window.outer*`, and `devicePixelRatio` into a `rows` ref, recomputing on `resize` and on mount. All styling is a single global (non-scoped) `<style>` block; dark mode is driven purely by `prefers-color-scheme`.

Meta/SEO lives in `index.html`; PWA manifest, icons, `robots.txt`, and `sitemap.xml` are in `public/`.

## Conventions

- Path alias `@` → `src/` (configured in both `vite.config.ts` and `tsconfig.json`).
- ESLint uses `eslint-config-fans` with Prettier as the formatter — run `pnpm lint` rather than adjusting style by hand.
