import * as React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styles from "./blog-post.module.css"

export default function BlogPost(props: any) {
  const post = props.data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Helmet title={post.frontmatter.title} />
      <div>
        <h1 className={styles["title"]}>{post.frontmatter.title}</h1>
      </div>
      {post.frontmatter.description ? (
        <div className={styles["descriptionWrapper"]}>
          <p
            className={styles["description"]}
            dangerouslySetInnerHTML={{ __html: post.frontmatter.description }}
          ></p>
        </div>
      ) : null}
      <div
        className={styles["content"]}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <footer style={{ textAlign: "center", marginTop: "4em" }}>
        <hr />
        Thank you for reading. Feel free to follow me on{" "}
        <a href="https://twitter.com/DanceParty_">Twitter</a> 🧟‍♂️
      </footer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
