import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Card from "../components/card/card"

const IndexPage = (props: any) => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(({ node }: any) => {
        return (
          <Card
            title={node.frontmatter.title}
            subtitle={`written by Keevan on ${node.frontmatter.date}`}
            url={node.frontmatter.slug}
          >
            {node.frontmatter.excerpt}
          </Card>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            excerpt
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
