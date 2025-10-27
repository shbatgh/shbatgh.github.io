import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Portfolio - Computational Biology & Software Development",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "shbatgh.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Roboto",
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        code: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f8f9fa",
          gray: "#e9ecef",
          darkgray: "#6c757d",
          dark: "#212529",
          secondary: "#6c757d",
          tertiary: "#adb5bd",
          highlight: "rgba(42, 157, 143, 0.1)",
          link: "#2a9d8f",
        },
        darkMode: {
          light: "#292a2d",
          lightgray: "#3b3d42",
          gray: "#4a4b50",
          darkgray: "#a9a9b3",
          dark: "#ddd",
          secondary: "#a9a9b3",
          tertiary: "#868e96",
          highlight: "rgba(139, 213, 202, 0.1)",
          link: "#8bd5ca",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config