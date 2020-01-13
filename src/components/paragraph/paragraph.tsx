import * as React from "react"
import classnames from "classnames"

import styles from "./paragraph.module.css"

interface ParagraphProps {
  center?: boolean
  children?: React.ReactNode
}

const Paragraph = (props: ParagraphProps) => {
  const paragraphClassname = classnames({
    [styles["center"]]: props.center,
  })
  return <p className={paragraphClassname}>{props.children}</p>
}

export default Paragraph
