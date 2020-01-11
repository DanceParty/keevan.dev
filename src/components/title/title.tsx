import * as React from "react"
import classnames from "classnames"
import { TitleTags, Spacing } from "../../types/typography"

import styles from "./title.module.css"

interface TitleProps {
  tag: TitleTags
  marginBottom?: Spacing
  children?: React.ReactNode
  className?: string
  center?: boolean
}

const Title = (props: TitleProps) => {
  const titleClassnames = classnames(styles["title"], props.className, {
    [styles["h1"]]: props.tag === TitleTags.H1,
    [styles["h4"]]: props.tag === TitleTags.H4,

    [styles["marginBottomNone"]]: props.marginBottom === Spacing.NONE,
    [styles["marginBottomSmall"]]: props.marginBottom === Spacing.SMALL,
    [styles["marginBottomMedium"]]: props.marginBottom === Spacing.MEDIUM,

    [styles["center"]]: props.center,
  })
  return <props.tag className={titleClassnames}>{props.children}</props.tag>
}

Title.defaultProps = {
  tag: TitleTags.H1,
  marginBottom: Spacing.MEDIUM,
}

export default Title
