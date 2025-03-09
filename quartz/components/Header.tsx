// This is a simplified example - you'll need to properly implement this
import { QuartzComponentConstructor } from "./types"

function Header() {
  return (
    <header class="quartz-header">
      <div class="navbar">
        <div class="title">My Digital Garden</div>
        <nav>
          <a href="/">Home</a>
          <a href="/posts">Blog</a>
          <a href="/notes">Notes</a>
          <a href="/notes/graph">Graph</a>
        </nav>
      </div>
    </header>
  )
}

export default (() => Header) as QuartzComponentConstructor