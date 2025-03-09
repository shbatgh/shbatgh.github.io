import { QuartzComponentProps } from "./types"

export function GlobalMenu(props: QuartzComponentProps) {
  return (
    <nav class="main-menu">
      <ul>
        <li>
          <a href="/tags">Tags</a>
        </li>
        <li>
          <a href="/graph">Graph View</a>
        </li>
        <li>
          <a href="/archive">Archive</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </nav>
  )
}