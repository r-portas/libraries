# Design System Setup Plan

A reusable, shadcn-based design system published as an NPM package for use across
projects. Lives at `packages/design-system` in this Bun workspace.

## Goals

- Ship **shadcn components built on Base UI primitives** as the main package exports.
- Build the library with **Vite library mode** (ESM + type declarations).
- Use **Storybook** for local development and component documentation.
- Distribute **agent skills** for the design system in the same NPM package via
  **TanStack Intent**.

## Stack

| Concern            | Choice                                              |
| ------------------ | --------------------------------------------------- |
| Runtime / PM       | Bun (`bun`, `bunx`)                                  |
| Language           | TypeScript                                          |
| Build              | Vite library mode + `vite-plugin-dts`               |
| Styling            | Tailwind CSS v4 (`@tailwindcss/vite`)               |
| Components         | shadcn/ui with **Base UI** primitives (`--base base-ui`) |
| Docs / dev         | Storybook (`@storybook/react-vite`)                 |
| Lint / format      | oxlint + oxfmt (already configured at workspace root)|
| Skill distribution | `@tanstack/intent` (`SKILL.md` + `package.json#intent`) |

## Current state

`packages/design-system` is a default `bunx create-vite` React 19 app scaffold
(App.tsx demo, ESLint config, `index.html`, public assets). It needs to be
converted from an *application* into a *library* and aligned with the workspace's
oxlint/oxfmt tooling.

---

## Step 1 — Clean up the scaffold

- Remove app-only files: `src/App.tsx`, `src/App.css`, `src/main.tsx`,
  `index.html`, `src/assets/*`, demo `public/*`.
- Delete `eslint.config.js` and all ESLint devDependencies — the workspace uses
  oxlint/oxfmt at the root. Replace the package's `"lint"` script with
  `oxlint .` (or rely on the root `bun run lint`).
- Keep `vite.config.ts`, `tsconfig*.json`, `react`/`react-dom`.

## Step 2 — Establish the library structure

```
packages/design-system/
├── src/
│   ├── index.ts            # public barrel export
│   ├── components/ui/       # shadcn components (the main exports)
│   ├── lib/utils.ts         # cn() helper
│   └── styles/globals.css   # Tailwind entry + design tokens
├── skills/                  # TanStack Intent agent skills
│   └── <skill>/SKILL.md
├── components.json          # shadcn config
├── vite.config.ts
└── package.json
```

## Step 3 — Tailwind + shadcn (Base UI)

- Add Tailwind: `bun add -D tailwindcss @tailwindcss/vite`, wire the plugin in
  `vite.config.ts`, create `src/styles/globals.css` with `@import "tailwindcss";`.
- Init shadcn with Base UI primitives:
  `bunx shadcn@latest init --base base-ui` (CLI v4 supports `--base base-ui`;
  confirm the prompt picks Base UI, not Radix).
- Point `components.json` aliases at the library's `src` paths and set
  `tailwind.css` to `src/styles/globals.css`, `iconLibrary: lucide`.
- Add a starter set of components: `bunx shadcn@latest add button input ...`.
- Re-export everything from `src/index.ts` so components are the package's
  primary exports.

## Step 4 — Vite library mode build

- Add `vite-plugin-dts` for `.d.ts` emission: `bun add -D vite-plugin-dts`.
- Configure `build.lib` in `vite.config.ts`:
  - `entry: src/index.ts`, `formats: ["es"]`.
  - `rollupOptions.external`: `react`, `react-dom`, `react/jsx-runtime` (peer deps).
  - Emit CSS as a separate `style.css` asset.
- `package.json`:
  - `"exports"` map: `"."` → built JS + types; `"./styles.css"` → built CSS.
  - `"peerDependencies"`: `react`, `react-dom` (move out of `dependencies`).
  - `"files"`: `["dist", "skills"]` so skills ship with the package.
  - `"sideEffects"`: `["**/*.css"]`.
  - `"build": "vite build"` script.

## Step 5 — Storybook

- Init: `bunx storybook@latest init` (selects the `@storybook/react-vite` builder).
- Ensure Storybook's Vite config loads Tailwind (`globals.css` import in
  `.storybook/preview.ts`).
- Colocate stories: `src/components/ui/<component>.stories.tsx`.
- Use Storybook as the dev surface (`bun run storybook`) and as living docs
  (autodocs from component types/JSDoc).

## Step 6 — Agent skills via TanStack Intent

`@tanstack/intent` ships agent skills as package artifacts that stay versioned
with the library.

- Author skills as `skills/<skill-name>/SKILL.md` (e.g. usage conventions,
  theming, component composition rules — mirror the `react-style-guide` and
  `shadcn` skill content for consumers).
- Scaffold/validate with the CLI:
  - `bunx @tanstack/intent@latest scaffold` — interactive skill authoring.
  - `bunx @tanstack/intent@latest validate` — enforce format before publish.
  - `bunx @tanstack/intent@latest stale` — flag outdated skill references in CI.
- Declare the allowlist in `package.json#intent.skills` so consumers can
  discover and load them.
- Consumers run `bunx @tanstack/intent@latest list` / `install` to pull skill
  guidance into their `CLAUDE.md` / `AGENTS.md`.
- Confirm `skills/` is in `package.json#files` (Step 4) so it publishes.

## Step 7 — Publish wiring

- Set the package `name` (scoped, e.g. `@royportas/design-system`), `version`,
  and `publishConfig.access` if scoped-public.
- Add a `prepublishOnly` / release script: `bun run build` then
  `bunx @tanstack/intent@latest validate`.
- Verify the tarball with `bun pm pack` (inspect that `dist` + `skills` are
  included and demo files are not).

---

## Open questions / confirm during build

- Exact shadcn Base UI flag value (`--base base-ui`) — verify against the
  installed shadcn CLI version at init time.
- Storybook major version and whether it needs a separate Tailwind v4 setup.
- Final package name / scope and registry (npm public vs. private).
