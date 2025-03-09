import { FullSlug, resolveRelative } from "../../util/path"
import { QuartzComponentProps } from "../types"
import { JSResourceToScriptElement } from "../../util/resources"

import { PaperModLayout } from "../../../components/PaperModLayout"

interface LayoutProps extends QuartzComponentProps {
  displayClass?: string
}

export function Layout(props: LayoutProps) {
  const { fileData, children } = props

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={fileData.frontmatter?.title || "Quartz"} />
        <title>{fileData.frontmatter?.title || "Quartz"}</title>
        {props.externalResources.css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" />
        ))}
        {props.externalResources.js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
      <body data-slug={fileData.slug}>
        <PaperModLayout {...props} />
        {props.externalResources.js
          .filter((resource) => resource.loadTime === "afterDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </body>
    </html>
  )
}

export default Layout