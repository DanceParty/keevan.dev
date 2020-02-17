import * as React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Title from "../components/title/title"
import Paragraph from "../components/paragraph/paragraph"
import Link from "../components/link/link"
import { TitleTags } from "../types/typography"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Title tag={TitleTags.H2} center>
        Hi, I'm Keevan!
      </Title>
      <Title tag={TitleTags.H2} center>
        안녕하세요! 나는 키븐이에요~
      </Title>
      <Paragraph>
        I'm married to my lovely wife Jeehyae and we live in Seattle with our
        beautiful dog Samba 🐕. We have only lived here one year, but we love it
        so far and plan to stay a while!
      </Paragraph>
      <Paragraph>
        I'm currently a Software Engineer on{" "}
        <Link to="https://appcenter.ms/">App Center</Link>
        which is a product at Microsoft. Before this, Jeehyae and I lived in
        Chicago, IL and I worked for Allstate on their
        <Link to="https://www.allstate.com/landingpages/virtual-assist.htm">
          Virtual Assist
        </Link>{" "}
        product. Prior to that was when I started my career out of university in
        Phoenix, AZ at a company called CORE Construction.
      </Paragraph>
      <Paragraph>
        I grew up and spent my entire pre-university life in the amazing{" "}
        <Link to="https://www.yumaaz.gov">Yuma, AZ</Link> which is a tiny city
        on the border of both Mexico and California. After graduating high
        school, I moved to Flagstaff, AZ where I studied Computer Science at the
        Northern Arizona University.
      </Paragraph>
      <Paragraph>
        Outside of programming, I will generally being spending my time rock
        climbing,{" "}
        <Link to="https://www.goodreads.com/user/show/70427812-keevan-dance">
          reading
        </Link>
        , <Link to="aligulac.com/players/17110-Keevan/">playing Starcraft</Link>
        , or running!
      </Paragraph>
    </Layout>
  )
}

export default About
