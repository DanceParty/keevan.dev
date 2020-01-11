import * as React from "react"
import classnames from "classnames"
import { Link as GatsbyLink } from "gatsby"
import Title from "../title/title"
import Paragraph from "../paragraph/paragraph"
import { TitleTags } from "../../types/typography"

import styles from "./card.module.css"

interface CardProps {
  children?: React.ReactNode
  title: string
  subtitle?: string
  url?: string
}

const Card = (props: CardProps) => {
  const cardClasses = classnames(styles["card"], {
    [styles["cardLink"]]: props.url,
  })
  // node.frontmatter.slug
  return props.url ? (
    <GatsbyLink className={styles["link"]} to={props.url}>
      <div className={cardClasses}>
        <Title tag={TitleTags.H1}>{props.title}</Title>
        <Title tag={TitleTags.H4}>{props.subtitle}</Title>
        <Paragraph>{props.children}</Paragraph>
      </div>
    </GatsbyLink>
  ) : (
    <div className={styles["card"]}>
      <Title tag={TitleTags.H1}>{props.title}</Title>
      <Title tag={TitleTags.H4}>{props.subtitle}</Title>
      <Paragraph>{props.children}</Paragraph>
    </div>
  )
}

export default Card
