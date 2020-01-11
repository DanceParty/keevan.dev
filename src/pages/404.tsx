import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Title from "../components/title/title"
import Image from "../components/image/image"
import YungLeanGif from "../assets/yunglean.gif"
import { TitleTags } from "../types/typography"

const NotFoundPage = () => (
  <Layout center={true}>
    <SEO title="404: Not found" />
    <Title tag={TitleTags.H1}>🐬 PAGE NOT FOUND 🐬</Title>
    <Image src={YungLeanGif} alt="yung lean shaking finger" />
  </Layout>
)

export default NotFoundPage
