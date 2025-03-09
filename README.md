# AI Research Blog

A personal blog for AI research summaries and explanations, inspired by [Lillian Weng's blog](https://lilianweng.github.io/).

## Setup Instructions

### Prerequisites
- [Hugo Extended](https://gohugo.io/getting-started/installing/) (v0.80.0 or later)
- Git

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ai-research-blog.git
   cd ai-research-blog
   ```

2. Initialize and update the PaperMod theme submodule:
   ```bash
   git submodule init
   git submodule update
   ```

3. Start the Hugo development server:
   ```bash
   hugo server -D
   ```

4. View your site at http://localhost:1313/

### Creating New Content

To create a new blog post:
```bash
hugo new posts/my-new-post.md
```

To create a new page:
```bash
hugo new page/about.md
```

### Building for Production

```bash
hugo --minify
```

The static files will be generated in the `public/` directory.

## Deployment

This site can be easily deployed to GitHub Pages, Netlify, or Vercel.

### GitHub Pages Deployment

1. Create a repository named `yourusername.github.io`
2. Push the contents of the `public/` directory to this repository
3. Enable GitHub Pages in the repository settings

## License

This project is licensed under the MIT License - see the LICENSE file for details.