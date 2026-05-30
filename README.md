# shbatgh.github.io

Personal website for Sam Boccara, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed with GitHub Pages.

## Local development

Recommended Docker workflow:

```bash
docker compose pull
docker compose up
```

Then open <http://localhost:8080>.

Alternative Ruby workflow:

```bash
bundle install
bundle exec jekyll clean
bundle exec jekyll build --trace
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Site content

- About: `_pages/about.md`
- CV: `_data/cv.yml` and `_pages/cv.md`
- Projects: `_projects/*.md`
- Publications: `_bibliography/papers.bib`
- Blog: `_posts/YYYY-MM-DD-title.md`

The site is intentionally clean: sample al-folio posts, projects, publications, and media assets have been removed.

## Deployment

The included GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Jekyll site and publishes `_site` to the `gh-pages` branch. In GitHub repository settings, enable Actions write permissions and configure Pages to serve from the `gh-pages` branch.
