import * as React from "react"
import classnames from "classnames"
import { Link as GatsbyLink } from "gatsby"

import styles from "./link.module.css"

interface LinkProps {
  children?: React.ReactNode
  to: string
  underline?: boolean
  className?: string
  hover?: boolean
}

const Link = (props: LinkProps) => {
  const LinkClassname = classnames(styles["link"], props.className, {
    [styles["underline"]]: props.underline,
    [styles["noHover"]]: props.hover === false,
  })
  return (
    <GatsbyLink className={LinkClassname} to={props.to}>
      {props.children}
    </GatsbyLink>
  )
}

Link.defaultProps = {
  underline: true,
  hover: true,
}

export default Link
