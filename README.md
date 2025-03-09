# My Digital Garden with Hugo PaperMod and Obsidian Support

This repository contains a Hugo site configured with the PaperMod theme and additional features to support Obsidian markdown notes and a graph view.

## Setup Instructions

1. Clone this repository
2. Update `config.yml` with your own information
3. Start adding content

## Adding Content

### Manual Method

Create new posts using Hugo's CLI:

```bash
hugo new posts/my-new-post/index.md
```

### From Obsidian Vault

Use the included Python script to import notes from your Obsidian vault:

```bash
# Install required dependencies
pip install python-frontmatter

# Run the conversion script
python scripts/obsidian_to_hugo.py /path/to/obsidian/vault /path/to/hugo/site
```

## Deploying Your Site

Build your site with:

```bash
hugo
```

This will generate your static site in the `public` directory, which you can then deploy to GitHub Pages, Netlify, or any other hosting provider.

## Features

- Clean, minimalist design with PaperMod theme
- Knowledge graph visualization of your notes and their connections
- Support for Obsidian-specific markdown:
  - WikiLinks (`[[Page Name]]`)
  - Callouts (`> [!NOTE] Title`)
  - Embedded images

## Customization

- Modify `assets/css/extended/obsidian.css` to change the appearance of Obsidian elements
- Adjust the graph visualization in `layouts/page/graph.html`
- Update the Obsidian compatibility script in `assets/js/obsidian-support.js`