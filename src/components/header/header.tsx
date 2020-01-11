import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Title from "../title/title"
import Link from "../link/link"
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
        <Title className={styles["title"]}>
          <Link to="/" underline={false} hover={false}>
            {showTitle
              ? data.site.siteMetadata.title
              : data.site.siteMetadata.titleSecondary}
          </Link>
        </Title>
        <ul className={styles["menu"]}>
          <li className={styles["menuItem"]}>
            <Link className={styles["menuItemLink"]} to="/" underline={false}>
              blog
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link
              className={styles["menuItemLink"]}
              to="/uses"
              underline={false}
            >
              uses
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link
              className={styles["menuItemLink"]}
              to="/about"
              underline={false}
            >
              about
            </Link>
          </li>
          <li className={styles["menuItem"]}>
            <Link
              className={styles["menuItemLink"]}
              to="/contact"
              underline={false}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
