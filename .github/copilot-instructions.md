# Copilot instructions for learntocloud/learn-to-cloud

Purpose: quick reference for Copilot sessions — how to build/preview, the repo's high-level architecture, and conventions to follow when editing docs/components.

---

Build / dev / test / lint

- Local dev site (live): npm start
  - Runs: docusaurus start --host 0.0.0.0
  - Visit http://localhost:3000 (or as printed by Docusaurus)
- Build static site: npm run build
  - Output: ./build/
- Preview built site: npm run serve
- Other helpful scripts:
  - npm run typecheck — runs tsc type-check only
  - npm run clear — clears Docusaurus cache
- Tests: no test runner or test scripts configured in package.json
- Lint: no linter scripts found in package.json (no eslint/prettier scripts configured)

Node / tooling

- Node >= 16.14 (see package.json "engines")
- Uses Docusaurus v3 (React + TypeScript for site components)

---

High-level architecture (big picture)

- Static website built with Docusaurus:
  - Site config: docusaurus.config.js
  - Sidebars/navigation: sidebars.js
  - Docs content: /docs/ (organized under phase0..phase5)
  - Internationalization: /i18n/* (per-language plugin output and translations)
  - React components (site UI): /src/components/* (TSX + module CSS)
  - Static assets: /static/* (images, favicon, etc.)
  - Site build output: /build (generated)
- CI/CD:
  - Azure Static Web Apps deployment via .github/workflows/* (check the azure-static-web-apps workflow)
  - CodeQL scanning enabled via .github/workflows/codeql-code-scanning.yml
- Dockerfile present for containerized inspection or deploy workflows

---

Key conventions (repo-specific patterns)

- Docs organized by learning "phase": docs/phase0, phase1, ... phase5. Add new lessons under the appropriate phase and update sidebars.js when structure changes.
- MDX/Markdown for docs: use .md / .mdx files in docs/; follow existing frontmatter patterns (title, sidebar_label when needed).
- i18n: localized content lives under i18n/{lang}/docusaurus-plugin-content-docs/current/. Keep keys and file paths aligned with the default English docs when adding translations. Use `npm run write-translations` if adding/updating translation placeholders.
- Components: UI logic in src/components; use .module.css for scoped styles and keep markup in TSX files. TypeScript is used for components — run npm run typecheck after changes.
- Static assets: add images to static/img and reference them by absolute path (/img/...) in docs/components to avoid path mistakes.
- Deployment: CI workflow deploys the Docusaurus build to Azure Static Web Apps. For PR previews, rely on the existing workflow unless adding explicit preview steps.

---

Docs to consult when editing this repo

- README.md — general project description and contributing note (open an issue before a PR)
- .github/workflows/* — CI/CD and security scans (see azure and codeql workflows)
- docusaurus.config.js and sidebars.js — site-wide configuration and docs navigation

---

If you're a Copilot session working on this repo, prioritize: running `npm start` for live preview, `npm run build` to validate output, and `npm run typecheck` after TypeScript changes. There are no tests or lint commands to run by default.

