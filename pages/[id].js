import Head from '../components/head'
import Main from "../components/main"
import { getAllPostsByCategory, getAllPostIds, getPostData } from "../lib/posts"
import styles from "../styles/[id].module.css"

export async function getStaticProps({ params }) {
  const allCategoriesWithPostsData = getAllPostsByCategory()
  const postData = await getPostData(params.id)
  return {
    props: {
      allCategoriesWithPostsData,
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ allCategoriesWithPostsData, postData }) {
  return (
    <div>
      <Head>
        <title>keevan dance</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Main data={allCategoriesWithPostsData}>
        <h1>{postData.title}</h1>
        <em>last updated: {postData.updatedAt}</em>
        { postData.bannerImage ? (
          <img className={styles["banner-image"]} src={`images/${postData.bannerImage}`} alt={postData.bannerImage} />
        ) : null }
        <div className={styles["post-content"]} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Main>
    </div>
  )
}