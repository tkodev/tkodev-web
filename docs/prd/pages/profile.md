# Page spec — Profile (`/profile`)

## Purpose

Presents Tony Ko's professional identity in full: bio, career timeline, and the
breadth of clients he has served. Primary destination for recruiters and potential
clients.

## Primary audience

Recruiters, hiring managers, prospective clients evaluating Tony for contract or
full-time engagement.

## Key messages

- Staff-level engineer with 25+ years of experience across web, mobile, extensions,
  and embedded systems.
- Track record with top North American brands: Aeroplan, Air Miles, Loblaws,
  Peoples Group, Toyota, and more.
- Combines technical leadership with design background (OCAD University, interior
  architecture, industrial design).

## Content sections

### Profile / Bio (`SectionProfile`)

- Avatar / headshot.
- Name: Tony Ko.
- Title: Staff Software Engineer.
- Contact: `tony@tko.dev`, LinkedIn, GitHub.
- Resume download: `/files/tony-ko-resume-2026.pdf`.
- Short bio drawn from the `profileEntries.tony` data and the `pagedata.description`
  in `src/app/layout.tsx`.

### Employment history (`SectionJobs`)

Sourced from `src/constants/job.ts`. Display in reverse-chronological order:

| Title                     | Company                             | Period                   |
|---------------------------|-------------------------------------|--------------------------|
| Senior Software Engineer  | Badal.io (current, ongoing)         | Dec 2024 – present       |
| Staff Software Engineer   | Badal.io                            | May 2023 – Nov 2024      |
| Staff Software Engineer   | Quantum Mob                         | Nov 2022 – May 2023      |
| Senior Software Engineer  | Quantum Mob                         | Nov 2021 – Oct 2022      |
| Software Engineer II      | Quantum Mob                         | Nov 2020 – Oct 2021      |
| Software Engineer I       | Quantum Mob                         | Nov 2019 – Oct 2020      |
| Intermediate FE Developer | Brandfire Marketing Group Inc.      | Apr 2017 – Nov 2019      |
| Interior Designer         | Ko's Interior Design & Construction | Jul 2013 – Sep 2016      |

Each entry shows company, title, location, date range, and skill tags.

### Client logo cloud (`SectionClients`)

Sourced from `src/constants/client.ts`, ordered by `clientIds`. Logos are
theme-aware (`baseSrc` / `lightSrc` / `darkSrc`). Display the 15 client logos in
the defined order.

## CTAs

- Download resume: `/files/tony-ko-resume-2026.pdf`.
- Contact: `tony@tko.dev`.
- LinkedIn: `https://www.linkedin.com/in/tkodev`.

## Functional requirements

- All data sourced from `src/constants/` — no hardcoded copy in the component.
- Resume link must open the PDF in a new tab.
- Client logos must switch between light/dark variants based on active theme.
- Employment dates are rendered via `date-fns` relative formatting where appropriate.

## Acceptance criteria

- [ ] All job entries render from `jobEntries` in reverse-chronological order.
- [ ] All client logos from `clientIds` render with correct light/dark variants.
- [ ] Resume PDF link opens in a new tab.
- [ ] Page is responsive across xs–4xl breakpoints.
- [ ] Page renders correctly in light and dark modes.
