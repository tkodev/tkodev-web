# PRD — tko.dev

Product requirements for [tko.dev](https://tko.dev/), Tony Ko's personal portfolio website.

---

## 1. Product overview

### 1.1 Purpose

tko.dev is a **cinematic personal portfolio** for Tony Ko — a Staff Software Engineer
with 25+ years of experience spanning web, mobile, browser extensions, embedded systems,
industrial design, and architecture. The site communicates Tony's breadth and depth to
prospective clients, employers, and collaborators, while expressing his personal aesthetic
through an immersive, design-forward experience.

### 1.2 Audience

- **Prospective employers and clients** — evaluating Tony's technical capabilities,
  project history, and leadership track record.
- **Collaborators and peers** — exploring shared work and referenced team members.
- **Design community** — engaging with the visual quality of the portfolio itself.

### 1.3 Tone and aesthetic

- **Cinematic and intentional.** Transitions, animations, and the BGM system create an
  immersive first impression. The intro lifecycle is part of the product experience.
- **Precise and confident.** Copy is terse and factual. Descriptions are written in the
  first person, past tense, reflecting real outcomes — not aspirational marketing language.
- **Dark-mode-forward.** The site is designed light/dark-aware with semantic tokens, but
  the default aesthetic leans dark. Every page must look polished in both modes.

---

## 2. Information architecture

### 2.1 Route map

| Route                       | Page               | Nav label  | Notes                              |
|-----------------------------|--------------------|------------|------------------------------------|
| `/`                         | Home               | —          | Intro / animated entry point       |
| `/profile`                  | Profile            | Profile    | Bio, employment, clients           |
| `/works`                    | Works              | Works      | Filterable project gallery         |
| `/works/[projectIdPath]`    | Project Detail     | —          | Individual project deep-dive       |
| `/shots`                    | Shots              | Shots      | Photography / creative gallery     |
| `/archive`                  | Archive            | Archive    | Legacy / older work                |
| `/contact`                  | Contact            | Contact    | Outreach links (social, resume)    |
| `/loading`                  | Loading Screen     | —          | Lifecycle intro animation route    |

### 2.2 Navigation

The global `Header` component contains the primary nav. Nav items link to:
`/profile`, `/works`, `/shots`, `/contact`.

The `/` home page and `/loading` screen are not in the nav. The `/works/[projectIdPath]`
detail page is accessed only from `/works`.

### 2.3 Layout shell

All pages share one persistent `Layout` wrapper:

```
Layout
├── Base          # Background visual layer (animated bg)
├── Header        # Global nav + logo + theme toggle + BGM control
├── {page}        # Page-specific content wrapped in <Main>
├── Footer        # Copyright, links
└── Overlay       # Lifecycle overlay (loading/intro state)
```

There are no shared sub-nav layouts. Each page is self-contained within the shell.

---

## 3. Lifecycle and BGM system

### 3.1 Lifecycle states

The site has a five-state lifecycle managed by `useLifecycleState` (Zustand):

| State     | Description                                                   |
|-----------|---------------------------------------------------------------|
| `initial` | App has mounted; before intro begins                          |
| `intro`   | Intro animation is playing (`/loading` screen active)         |
| `ready`   | Intro complete; site is fully interactive                     |
| `loading` | A page transition or data load is in progress                 |
| `error`   | An unrecoverable error has occurred                           |

The `LifecycleProvider` drives state transitions. `SectionLoading` and the `Overlay`
component render based on lifecycle state.

### 3.2 BGM system

Background music enhances the cinematic experience. Rules:

- BGM must never auto-play. `bgmConfirm` must be set to `true` by explicit user action
  before any audio plays.
- The `BgmProvider` manages the audio element. The `Header` exposes the BGM control.
- BGM state: `playing`, `paused`, `stopped`. Default: `paused`.
- Current track: `an-empty-bus-justin-marshall-elias-main-version-36442-03-56.mp3`
  (served from `/audio/`).

---

## 4. Design system

### 4.1 Fonts

| Variable              | Font family      | Usage                          |
|-----------------------|------------------|--------------------------------|
| `--font-alliance-no2` | Alliance No.2    | Display headings, brand text   |
| `--font-geist-sans`   | Geist Sans       | Body text (default)            |

### 4.2 Breakpoints

| Token | Value  |
|-------|--------|
| `xs`  | 480px  |
| `sm`  | 640px  |
| `md`  | 768px  |
| `lg`  | 1024px |
| `xl`  | 1280px |
| `2xl` | 1440px |
| `3xl` | 1536px |
| `4xl` | 1920px |

### 4.3 Semantic colour tokens

All components must use semantic tokens — never raw hex or brand-named Tailwind utilities.

| Token                      | Usage                        |
|----------------------------|------------------------------|
| `bg-background`            | Page background              |
| `text-foreground`          | Primary text                 |
| `bg-primary`               | Primary action background    |
| `text-primary-foreground`  | Text on primary              |
| `bg-secondary`             | Secondary elements           |
| `text-secondary-foreground`| Text on secondary            |
| `bg-muted`                 | Muted / subdued backgrounds  |
| `text-muted-foreground`    | Muted / caption text         |
| `bg-card`                  | Card surfaces                |
| `text-card-foreground`     | Text on card                 |
| `bg-accent`                | Accent highlights            |
| `text-accent-foreground`   | Text on accent               |

### 4.4 Typography scale

| Class | Size  | Usage             |
|-------|-------|-------------------|
| `h1`  | 72px  | Hero headings     |
| `h2`  | 56px  | Section headings  |
| `h3`  | 32px  | Sub-section heads |
| `h4`  | 28px  | Card titles       |
| `h5`  | 24px  | Labels            |
| `h6`  | 20px  | Small labels      |
| `lg`  | 18px  | Lead body text    |
| `base`| 16px  | Body text         |
| `sm`  | 14px  | Captions, meta    |

### 4.5 Animation tokens

Defined in `src/themes/theme.ts` and available as Tailwind animation utilities:

| Token          | Duration | Easing   | Usage                          |
|----------------|----------|----------|--------------------------------|
| `fade-in`      | 1.5s     | ease-out | Section entrance               |
| `fade-out`     | 1.5s     | ease-out | Section exit                   |
| `slide-down`   | 1.5s     | ease-out | Header / nav slide-in          |
| `slide-up`     | 1.5s     | ease-out | Content slide-in from bottom   |
| `accordion-down` | 0.2s  | ease-out | Accordion expand               |
| `accordion-up` | 0.2s     | ease-out | Accordion collapse             |

---

## 5. Data model

### 5.1 Projects (`src/constants/project.ts`)

Each `ProjectEntry` has:

| Field        | Type            | Description                                      |
|--------------|-----------------|--------------------------------------------------|
| `id`         | `ProjectId`     | Unique camelCase identifier                      |
| `roles`      | `string[]`      | `'development'` and/or `'design'`                |
| `media`      | `MediaEntry[]`  | Gallery images/videos                            |
| `frames`     | `FrameEntry[]`  | Device-framed screenshots (desktop/mobile)       |
| `title`      | `string`        | Display title                                    |
| `intro`      | `string`        | One-paragraph summary (used in cards)            |
| `desc`       | `string`        | Full markdown description (used in detail view)  |
| `clientId`   | `ClientId`      | Client/employer reference                        |
| `profileIds` | `ProfileId[]`   | Collaborators on the project                     |
| `startDate`  | `Date`          | `fromZonedTime(isoString, appTimeZone)`          |
| `endDate`    | `Date?`         | Undefined if ongoing                             |
| `skills`     | `string[]`      | Tech/skill tags                                  |
| `isFeatured` | `boolean?`      | Show in featured/highlighted view                |

The `projectIds` array controls display order in the works gallery.

### 5.2 Clients (`src/constants/client.ts`)

Each `ClientEntry` has: `id`, `name`, `href`, `baseSrc`, `lightSrc`, `darkSrc`
(logo image paths for neutral/light/dark themes).

The `clientIds` array controls display order in the client logo cloud.

### 5.3 Jobs (`src/constants/job.ts`)

Each `JobEntry` has: `id`, `companyId`, `companyName`, `title`, `location`,
`startDate`, `endDate?`, `skills[]`.

Jobs are listed chronologically (newest first) in the profile page.

### 5.4 Profiles (`src/constants/profile.ts`)

Each `ProfileEntry` has: `id`, `name`, `title`, `linkedin`, `github`, `email`, `phone`.
Profiles represent collaborators credited on projects.

---

## 6. Page-level requirements index

- [Home](pages/home.md) — `/`
- [Profile](pages/profile.md) — `/profile`
- [Works](pages/works/index.md) — `/works`
- [Project Detail](pages/works/project.md) — `/works/[projectIdPath]`
- [Shots](pages/shots.md) — `/shots`
- [Archive](pages/archive.md) — `/archive`
- [Contact](pages/contact.md) — `/contact`

---

## 7. Non-functional requirements

- **Performance**: The site targets fast LCP on desktop and mobile. Images are served
  via `next/image` with explicit width/height. Videos autoplay muted for frame previews.
- **Accessibility**: Semantic HTML, keyboard navigation, and appropriate `alt` text on
  all media entries are required. AODA/WCAG 2.0 AA is the baseline.
- **SEO**: Root layout exports full `Metadata` (title, description, Open Graph, Twitter
  card) targeting `tko.dev`. Per-page metadata should override where relevant.
- **Theming**: All pages must render correctly in `light`, `dark`, and `system` modes.
  `suppressHydrationWarning` is set on `<html>` and `<body>`.
- **Package manager**: `pnpm` only. Node ≥ 24 required.
