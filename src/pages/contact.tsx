import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Title from "../components/title/title"
import Link from "../components/link/link"
import { TitleTags, Spacing } from "../types/typography"
import Paragraph from "../components/paragraph/paragraph"

const Contact = () => {
  const onClickEmail = () => {
    window.open("mailto:keevandance@gmail.com")
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <Title tag={TitleTags.H2} center marginBottom={Spacing.LARGE}>
        Contact me at any of the below...
      </Title>
      <Paragraph center>
        <Link to="https://twitter.com/DanceParty_">Twitter</Link>
      </Paragraph>
      <Paragraph center>
        <Link to="https://github.com/DanceParty">Github</Link>
      </Paragraph>
      <Paragraph center>
        <Link to="/contact" onClick={onClickEmail}>
          keevandance@gmail.com
        </Link>
      </Paragraph>
    </Layout>
  )
}

export default Contact
