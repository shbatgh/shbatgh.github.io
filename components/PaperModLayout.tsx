import { QuartzComponentProps } from "./types"
import style from "./styles/papermod.scss"
import { GlobalMenu } from "./GlobalMenu"
import { ToggleTheme } from "./ToggleTheme"

export function PaperModLayout(props: QuartzComponentProps) {
  const { fileData, children, displayClass } = props
  const title = fileData.frontmatter?.title || fileData.title

  return (
    <div class={`paper-container ${displayClass ?? ""}`}>
      <header>
        <div class="header-inner">
          <a class="site-title" href="/">
            My Digital Garden
          </a>
          <div class="nav-right">
            <GlobalMenu {...props} />
            <ToggleTheme {...props} />
          </div>
        </div>
      </header>
      <main>
        {fileData.slug === "index" ? (
          <div class="home-content">{children}</div>
        ) : (
          <article>
            <h1 class="post-title">{title}</h1>
            {fileData.dates && (
              <div class="post-meta">
                {fileData.dates.created && (
                  <span>
                    Created: {new Date(fileData.dates.created).toLocaleDateString()}
                  </span>
                )}
                {fileData.dates.modified && fileData.dates.modified !== fileData.dates.created && (
                  <span>
                    {" · "}
                    Modified: {new Date(fileData.dates.modified).toLocaleDateString()}
                  </span>
                )}
                {fileData.tags && fileData.tags.length > 0 && (
                  <div class="tags">
                    {fileData.tags.map((tag) => (
                      <a href={`/tags/${tag}`} class="tag">
                        #{tag}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div class="content">{children}</div>
          </article>
        )}
      </main>
      <footer>
        <div>
          © {new Date().getFullYear()} My Digital Garden · Built with
          <a href="https://quartz.jzhao.xyz/" target="_blank" rel="noopener noreferrer">
            Quartz
          </a>
          {" "}with PaperMod styling
        </div>
      </footer>
    </div>
  )
}