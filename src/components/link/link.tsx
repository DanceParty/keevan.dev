import * as React from "react"
import classnames from "classnames"
import { Link as GatsbyLink } from "gatsby"

import styles from "./link.module.css"

interface LinkProps {
  children?: React.ReactNode
  onClick?: () => void
  to: string
  underline?: boolean
  className?: string
  hover?: boolean
}

const Link = (props: LinkProps) => {
  const linkClassnames = classnames(styles["link"], props.className, {
    [styles["underline"]]: props.underline,
    [styles["noHover"]]: props.hover === false,
  })
  const isExternal = props.to.includes("https://")
  return isExternal ? (
    <a className={linkClassnames} href={props.to}>
      {props.children}
    </a>
  ) : (
    <GatsbyLink
      onClick={props.onClick}
      className={linkClassnames}
      to={props.to}
    >
      {props.children}
    </GatsbyLink>
  )
}

Link.defaultProps = {
  underline: true,
  hover: true,
}

export default Link
