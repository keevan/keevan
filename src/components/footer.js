import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Kevin Pham</span>
      <span class="socials">
        <a href="https://github.com/keevan" title="View me on GitHub">
          {" "}
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/GitHub-Black.png"
            width={32}
            height={32}
            quality={95}
            alt="Made using Gatsby"
          />
        </a>
        <a href="https://www.gatsbyjs.com" title="Made using Gatsby">
          {" "}
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/Gatsby-Black.png"
            width={32}
            height={32}
            quality={95}
            alt="Made using Gatsby"
          />
        </a>
      </span>
    </footer>
  )
}

export default Footer
