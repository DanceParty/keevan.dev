import Head from '../components/head'
import Main from "../components/main"
import { getAllPostsByCategory } from "../lib/posts"

export async function getStaticProps() {
  const allCategoriesWithPostsData = getAllPostsByCategory()
  return {
    props: {
      allCategoriesWithPostsData
    }
  }
}

export default function AboutMe({ allCategoriesWithPostsData }) {
  return (
    <div>
      <Head>
        <title>keevan dance</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Main data={allCategoriesWithPostsData}>
        <h1>about me</h1>
        <a href="https://twitter.com/DanceParty_">twitter</a>
        <br />
        <a href="https://www.instagram.com/__danceparty">instagram</a>
        <br />
        <a href="https://github.com/DanceParty">github</a>
        <br />
        <a href="mailto:keevandance+personalsite@gmail.com">email</a>
        <p>Keevan (danceparty) is a software engineer, wannabe gamer, and dad to one of the most hyper dogs of all time, Samba (below).</p>
        
        <img src="images/samba.jpg" alt="cute dog" />

        <p>I spend most of my days programming for GitHub's billing team where I am often writing code in Rails or TypeScript and constantly trying to learn how to be a better contributor.</p>

        <p>When I am not coding for work, sometimes I will find myself coding the occasional side project for fun. Recently, I have worked on this website (yay!) as well as a discord bot that posts the daily New York Times mini-crossword puzzle to our friend-group's personal Discord channel.</p>

        <p>Aside from that, I spend most of my free time doing one of: <ul><li>Reading</li><li>Gaming</li><li>Listening to music</li><li>Travelling</li><li>Hanging out with friends or family</li></ul></p>
      </Main>
    </div>
  )
}