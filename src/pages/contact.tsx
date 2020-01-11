import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Title from "../components/title/title"
import { TitleTags } from "../types/typography"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Title tag={TitleTags.H2} center>
        This page is a work in progress.
      </Title>
    </Layout>
  )
}

export default Contact
