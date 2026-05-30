# AGENTS.md

Guidance for coding agents working on this repository.

## Project overview

This is Sam Boccara's personal website, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and intended to deploy to GitHub Pages at:

```text
https://shbatgh.github.io
```

The site is intentionally clean and minimal. Preserve simplicity and correctness over adding optional al-folio features.

## Current site sections

Keep the primary navigation focused on:

- About
- CV
- Projects
- Publications
- Blog

Do not add extra sections such as News, Teaching, Books, Repositories, Profiles, or Plugins unless explicitly requested.

## Current content priorities

- Keep the site concise and technical. Prefer short, dense explanations that sound human-written over polished marketing copy.
- Genomics / single-cell / perturbation-modeling content comes from Sam's work in the **Wei Li Lab at the University of Maryland Institute for Health Computing**, started November 2025 and continuing full-time through summer 2026.
- For Wei Li Lab work, safe framing includes: research prototypes, benchmarks, LoRA/PEFT adaptation, optimal transport, flow matching, single-cell perturbation prediction, MERFISH + microscopy representation learning, and careful evaluation.
- Do not claim state-of-the-art results, solved perturbation prediction, robust biological causality, or authorship of external base models such as scGPT or the original pertTF package unless explicitly verified.
- For Perturb-Multimodal, keep the pairing semantics precise: MERFISH rows and microscopy crops are exact same-cell pairs; scRNA-seq is related distributional data, not one-to-one image ground truth.
- BioVision should be framed as a 4D microscopy analysis pipeline for segmentation, tracking, mesh reconstruction, and quantitative cell-behavior analysis; mention the Regeneron ISEF 2025 finalist status and Columbia Kalderon Lab collaboration only when relevant.
- The Kalshi/Polymarket project should be described as an arbitrage monitor / detector / alert-driven workflow with user-gated execution. Do not publish credentials, balances, P&L, private live opportunities, or investment-advice language.

## Writing style

- Avoid common AI or startup tropes: "unlock," "revolutionize," "cutting-edge platform," "transformative," "seamless," "game-changing," and similar filler.
- Use concrete nouns, implementation details, datasets, metrics, and caveats.
- Prefer "implemented," "benchmarked," "explored," "adapted," and "prototyped" over inflated claims.
- Keep descriptions brief unless a page specifically needs a deeper technical explanation.

## Important paths

- Site config: `_config.yml`
- About page: `_pages/about.md`
- CV page: `_pages/cv.md`
- CV data: `_data/cv.yml`
- Social links: `_data/socials.yml`
- Projects: `_projects/*.md`
- Publications: `_bibliography/papers.bib`
- Blog posts: `_posts/YYYY-MM-DD-title.md`
- Static images: `assets/img/`
- PDFs: `assets/pdf/`
- Source context folder: `context/` (private/local source material; ignored and excluded from the built site)
- GitHub Pages deploy workflow: `.github/workflows/deploy.yml`

## Local development

This repo uses Ruby through `rbenv`. The intended local Ruby version is recorded in `.ruby-version` and should be Ruby 3.3.5.

Before running Jekyll in a new shell, ensure rbenv is active:

```bash
export PATH="/Users/sam/.rbenv/shims:$PATH"
ruby -v
which ruby
bundle -v
```

Expected Ruby path should be under:

```text
/Users/sam/.rbenv/shims/
```

Install dependencies:

```bash
bundle install
```

Build:

```bash
bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build --trace
```

Serve locally:

```bash
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

Docker is not required for this repo.

## Deployment model

This is a root GitHub Pages site. The correct URL settings in `_config.yml` are:

```yml
url: https://shbatgh.github.io
baseurl: ""
```

The GitHub Actions workflow builds the site and deploys `_site` to the `gh-pages` branch. Do not modify deployment behavior unless asked.

## Content rules

- Prefer editing Markdown/YAML/BibTeX content over theme internals.
- Do not publish the raw `context/` folder, private local paths, unpublished dataset artifacts, credentials, or collaborator-sensitive details.
- Keep al-folio's upstream structure intact where possible.
- Avoid custom layouts, includes, Sass, or plugin changes unless required for a concrete bug or explicitly requested.
- Do not reintroduce al-folio demo/sample posts, demo projects, Einstein sample data, sample media, or extra upstream workflows.
- Keep placeholder content obvious and minimal if real content is not yet available.

## Git rules

- Do not push to GitHub without explicit user permission.
- Do not force-push.
- Do not delete git history.
- This repo was intentionally rebuilt in-place on top of the existing `shbatgh.github.io` repository.
- A local backup branch/tag may exist for pre-al-folio state; do not remove backup refs unless asked.

## Validation before handoff

At minimum, run:

```bash
bundle exec jekyll clean
JEKYLL_ENV=production bundle exec jekyll build --trace
```

If editing content, also manually check the generated pages or local server for:

- homepage renders
- nav links work
- CV page renders
- projects page handles empty or populated `_projects/`
- publications page handles empty or populated `_bibliography/papers.bib`
- blog page handles empty or populated `_posts/`
