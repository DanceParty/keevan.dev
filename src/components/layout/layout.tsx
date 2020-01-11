/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import classnames from "classnames"

import Header from "../header/header"
import styles from "./layout.module.css"

interface LayoutProps {
  children?: React.ReactNode
  center?: boolean
}

const Layout = ({ children, center }: LayoutProps) => {
  const containerClassname = classnames(styles["container"], {
    [styles["center"]]: center,
  })
  const mainClassname = classnames(styles["main"], {
    [styles["center"]]: center,
  })
  return (
    <>
      <Header />
      <div className={containerClassname}>
        <main className={mainClassname}>{children}</main>
      </div>
    </>
  )
}

export default Layout
