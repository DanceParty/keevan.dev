import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./header.module.css"

const Header = () => {
  const [showTitle, setShowTitle] = React.useState<boolean>(true)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          titleSecondary
        }
      }
    }
  `)
  return (
    <header
      onMouseEnter={() => setShowTitle(false)}
      onMouseLeave={() => setShowTitle(true)}
      className={styles["header"]}
    >
      <div className={styles["wrapper"]}>
        <h1 className={styles["title"]}>
          <Link className={styles["link"]} to="/">
            {showTitle
              ? data.site.siteMetadata.title
              : data.site.siteMetadata.titleSecondary}
          </Link>
        </h1>
        <ul className={styles["menu"]}>
          <li className={styles["menuItem"]}>
            <Link className={styles["menuItemLink"]} to="/">
              blog
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link className={styles["menuItemLink"]} to="/">
              uses
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link className={styles["menuItemLink"]} to="/">
              contact
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link className={styles["menuItemLink"]} to="/">
              about
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
