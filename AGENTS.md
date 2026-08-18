# Agent Instructions

Guidance for Claude Code when working in this repository.

This repo vendors shared standards skills from `/Users/xuser/notes/tkodev/software-skills`
via symlinks at `.claude/skills/` and `.agents/skills/` (accessibility, components, data,
decisions, git, nextjs, performance, process, seo, testing, vscode, writing). See those
skill folders for the standards themselves — they aren't restated here.

## What this repo is

A Next.js (App Router) implementation of [tko.dev](https://tko.dev/), Tony Ko's personal
portfolio website. The site is a polished, cinematic portfolio that presents Tony's career
as a Staff Software Engineer — covering professional work, clients, employment history,
photography shots, and personal design disciplines (industrial design, architecture).

Specs live in `docs/prd/` (see `docs/prd/PRD.md`); application code lives in `src/app/`, with
shared components in `src/components/`, data in `src/constants/`, state in `src/stores/`,
and CSS tokens in `src/themes/`.

For developer-facing setup (scripts, directory tree, route map), see [`README.md`](./README.md).

## Repository layout

```
.
├── CLAUDE.md              # This file
├── docs/
│   └── prd/
│       ├── PRD.md             # Top-level product requirements document
│       └── pages/             # One spec per route
│           ├── home.md                # /
│           ├── archive.md             # /archive
│           ├── profile.md             # /profile
│           ├── shots.md               # /shots
│           └── works/
│               ├── index.md           # /works
│               └── project.md         # /works/[projectIdPath]
└── src/
    ├── app/               # Next.js App Router pages
    │   ├── layout.tsx     # Root layout (providers, fonts, metadata)
    │   ├── page.tsx       # / — home
    │   ├── loading.tsx    # Next.js streaming loading UI
    │   ├── archive/       # /archive
    │   ├── loading/       # /loading (lifecycle loading screen route)
    │   ├── profile/       # /profile
    │   ├── shots/         # /shots
    │   └── works/         # /works and /works/[projectIdPath]
    ├── components/
    │   ├── atoms/         # Primitive UI elements
    │   ├── molecules/     # Compound components
    │   ├── organisms/     # Page-section compositions
    │   ├── sections/      # Layout shells (header, footer, main, overlay, base)
    │   └── templates/     # Full-page layout wrappers
    ├── constants/         # Static data (clients, jobs, projects, profiles, shots, media)
    ├── fonts/             # next/font loader modules
    ├── hooks/             # React hooks (audio, filter, theme)
    ├── providers/         # Context providers (BGM, lifecycle, theme)
    ├── stores/            # Zustand stores (bgm, lifecycle)
    ├── themes/            # CSS token files imported in root layout
    ├── types/             # TypeScript types for domain models
    └── utils/             # Utility functions (date, string, theme, timer)
```

`docs/prd/PRD.md` is the top-level document. Each file in `docs/prd/pages/` fully describes one
route. The file tree under `docs/prd/pages/` mirrors the final URL structure.

## How the information architecture works

The site is a **cinematic personal portfolio** with a lifecycle-driven intro experience:

- `/` — home intro (animated welcome, entry point to the portfolio).
- `/profile` — career overview: bio, employment history, client logo cloud.
- `/works` — filterable project gallery (featured and all projects).
- `/works/[projectIdPath]` — individual project deep-dive (frames, media, team, skills).
- `/shots` — photography / creative shot gallery.
- `/archive` — archived / legacy projects and older work.
- `/loading` — lifecycle loading screen shown during the initial site experience.

The site has a single persistent `Layout` (header + footer + overlay) wrapping all pages.
There are no shared sub-nav layouts; each page is self-contained within that shell.

## Working conventions

### Data management

All site content is stored as typed constants in `src/constants/`:

- `client.ts` — `clientEntries` and `clientIds`: companies/clients Tony has worked with.
- `job.ts` — `jobEntries`: chronological employment history with skills.
- `project.ts` — `projectEntries` and `projectIds`: portfolio projects with media, frames,
  team members, skills, and featured flag.
- `profile.ts` — `profileEntries`: collaborators referenced in projects.
- `shots.ts` — shot gallery entries.
- `media.ts` — shared media entries.
- `theme.ts` — Tailwind theme constants (screens, colors, typography, utilities, animations).
- `date.ts` — timezone constants (`appTimeZone`).

When adding or updating content, edit the relevant constant file. Do **not** create
additional data sources or fetch from external APIs unless explicitly asked.

Dates are always stored via `fromZonedTime(isoString, appTimeZone)` from `date-fns-tz`.
Never use `new Date()` directly for project/job dates.

### Component conventions

Components follow an **Atomic Design hierarchy**:

- `atoms/` — primitives with no dependencies on other components (Button, Icon, Logo,
  Frame, Media, Video, Hypertext, etc.). Use CVA for variants.
- `molecules/` — composites of atoms (Nav, Filter, Section, Dialog, Table).
- `organisms/` — full page-section implementations (`section-home`, `section-projects`,
  `section-project`, `section-profile`, `section-jobs`, `section-clients`, etc.).
- `sections/` — layout shells (`Base`, `Header`, `Footer`, `Main`, `Overlay`).
- `templates/` — full-page wrappers (`Layout`).

Rules:
- Use CVA (`class-variance-authority`) for all visual variant management — never ad-hoc
  `className` overrides at the call site.
- Use `cn()` + `cva()` from `src/utils/theme.ts` (clsx + tailwind-merge) for all
  className composition.
- Expose `asChild` via Radix `Slot` when a component needs to delegate rendering to its
  child (e.g. `<Button asChild><Link …>`).
- Keep layout utilities (`w-full`, `mt-4`, etc.) at the call site via `className`;
  keep visual styles inside the CVA definition.
- New primitives go in `atoms/`; compositions stay in `molecules/` or `organisms/`.

### Theming

- `next-themes` handles light/dark/system detection. `ThemeProvider` is in
  `src/providers/theme.tsx`. Always set `defaultTheme="system"` and `enableSystem`.
- Add `suppressHydrationWarning` to `<html>` and `<body>` to avoid hydration mismatches.
- Theme-aware components must `useEffect` + `useState(mounted)` and return a placeholder
  until mounted — otherwise icons and states will SSR incorrectly.
- CSS token files are imported in `src/app/layout.tsx` in order:
  `theme.css` → `theme-colors.css` → `theme-utils.css`.
- The Tailwind theme config is exported from `src/themes/theme.ts` and consumed by
  `next.config.ts` / postcss.

### Semantic colour tokens

- Never use raw hex values or non-semantic Tailwind color utilities in components.
  Use semantic tokens: `text-foreground`, `bg-background`, `bg-primary`,
  `text-primary-foreground`, `text-muted-foreground`, `bg-card`, `bg-accent`, etc.
- Pair every background token with its matching foreground:
  `bg-primary → text-primary-foreground`, `bg-card → text-card-foreground`.
- Dark-mode overrides are handled via CSS custom properties — components do not need
  per-component dark overrides if semantic tokens are used correctly.

### Global state

Two Zustand stores manage sitewide UI state:

**`stores/lifecycle.ts`** — `useLifecycleState`:
- Tracks the site's lifecycle phase: `initial → intro → ready → loading → error`.
- `LifecycleProvider` (`providers/lifecycle.tsx`) drives the intro animation sequence.
- Do not add new lifecycle phases without updating `LifecycleProvider` and `section-loading`.

**`stores/bgm.ts`** — `useBgmStore`:
- Tracks background music state: `bgmConfirm`, `bgmState` (`playing/paused/stopped`),
  and raw audio data (buffered, time, duration, volume, etc.).
- `BgmProvider` (`providers/bgm.tsx`) manages the audio element.
- BGM consent (`bgmConfirm`) must be set to `true` before audio can play — never
  auto-play without user confirmation.

Keep `next-themes` as the single source of truth for theme — do not duplicate theme
state in Zustand.

Use `pnpm` (not npm or yarn) for all package operations in this repo.

### Fonts

Two fonts are loaded via `next/font/local` and applied on `<body>`:

- **Alliance No.2** (`--font-alliance-no2`) — used for display headings and branded text.
- **Geist Sans** (`--font-geist-sans`) — used for body text (`font-geist-sans` Tailwind
  class is the default body font).

Additional font modules exist (`alliance-no1`, `carbon`, `industry`, `inter`) but may
not be active. Only activate via the root layout font variable if required.

### Page transitions and motion

- `next-transition-router` handles page-level transitions. Do not use `next/link` where
  the router's `<Link>` is expected — check existing usage before adding navigation.
- `motion` (Framer Motion) is used for component-level animations. Use existing
  animation keyframes defined in `src/themes/theme.ts` (`fade-in`, `fade-out`,
  `slide-down`, `slide-up`, `accordion-*`) before defining new ones.
- Custom cursor is implemented via `react-animated-cursor` in the `Cursor` atom.

### Adding a new page

1. Decide where it belongs in the IA. Works-related pages go under `/works`; standalone
   pages are siblings of `/profile`, `/shots`, `/archive`.
2. Create `src/app/<path>/page.tsx` following the existing page structure (import the
   relevant organism section, wrap in `<Main>`).
3. Create `docs/prd/pages/<path>.md` following the existing section structure.
4. Add the route to the Route map table in `docs/prd/PRD.md` §2.
5. Update the header nav in `src/components/sections/header.tsx` if the page should
   appear in global navigation.

### Removing or renaming a page

- Remove the `app/` directory, the `docs/prd/pages/` file, and any nav references.
- Use Grep to find all references to the route before deleting.

## Things to avoid

- Don't let the implementation drift from the PRD. When behaviour or IA changes, update
  both the relevant `docs/prd/pages/*.md` spec and the matching `src/app/` code in the same
  change.
- Don't use raw `new Date()` for project/job dates — always use `fromZonedTime` with
  `appTimeZone`.
- Don't add data to component files. All content lives in `src/constants/`.
- Don't auto-play BGM. Always require `bgmConfirm` to be set before playing.
- Don't use non-semantic colour values in JSX (`text-teal-500`, raw hex `#fff`). Use
  semantic tokens only.
- Don't create new Zustand stores for ephemeral UI state that belongs in local `useState`.
- Don't touch settings or hooks without being asked.

## Git workflow

- Feature work happens on the branch specified in the session brief.
- Create new commits rather than amending. Use HEREDOC commit messages.
- Never force-push or skip hooks without explicit permission.
- Do not open a pull request unless explicitly asked.
- Do not sign commits or PRs as Claude, and do not include `claude.ai/code` session
  links, `Co-Authored-By: Claude` trailers, or any other "Generated with Claude Code"
  markers in commit messages or PR bodies.

### Conventional commits

- Use [Conventional Commits](https://www.conventionalcommits.org/) for every commit subject:
  `<type>(<optional scope>): <imperative summary>`
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
  `ci`, `chore`, `revert`.
- Pick a scope matching the page or area (`home`, `works`, `profile`, `shots`, `archive`,
  `prd`, `constants`, `theme`, `bgm`, `lifecycle`, etc.) when obvious; omit when global.
- Keep the subject under ~72 characters, lowercase, no trailing period; explain the *why*
  in the body if the diff alone doesn't.
- Use `!` (e.g. `feat(works)!: …`) and a `BREAKING CHANGE:` footer for changes that
  move URLs, rename routes, or alter documented behavior.

### Branch naming

- Branches follow `<type>/<short-kebab-summary>` using the same type vocabulary as
  commits — e.g. `feat/works-filter`, `fix/bgm-consent`, `docs/prd-profile`,
  `refactor/lifecycle-intro`.
- Session-managed Claude branches keep the `claude/<slug>` prefix given in the session
  brief; treat the slug as the conventional summary and don't rename it.
- Keep slugs short (≤40 chars), lowercase, hyphen-separated, referencing the affected
  area rather than a ticket number.
