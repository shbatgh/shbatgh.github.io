# My Blog

This is a simple, clean blog built with Jekyll and GitHub Pages, inspired by Lilian Weng's blog.

## Features

- Responsive design
- Support for math equations using MathJax
- Code syntax highlighting
- Pagination for blog posts
- RSS feed
- Easy customization

## Getting Started

### Installation

1. Clone this repository
2. Install dependencies:

```bash
gem install bundler
bundle install
```

3. Run the development server:

```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

### Creating a New Blog Post

Add a new markdown file in the `_posts` directory with the naming convention `YYYY-MM-DD-title.md`:

```
---
layout: post
title:  "Your Post Title"
date:   YYYY-MM-DD HH:MM:SS
categories: [category1, category2]
---

Your post content goes here. You can use Markdown formatting.
```

## Customization

- Edit `_config.yml` to update your site details
- Modify the CSS in `assets/css/main.css` to customize the appearance
- Update the layouts in the `_layouts` directory
- Edit the includes in the `_includes` directory

## Deployment

This blog is designed to be easily deployed to GitHub Pages:

1. Create a GitHub repository named `yourusername.github.io`
2. Push your code to the repository
3. Your site will be available at `https://yourusername.github.io`

## License

This project is open source and available under the [MIT License](LICENSE).