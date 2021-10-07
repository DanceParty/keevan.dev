import Head from '../components/head'
import Main from "../components/main"
import { getAllPostsByCategory, getAllPostIds, getPostData } from "../lib/posts"


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
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Main>
    </div>
  )
}