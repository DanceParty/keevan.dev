import Link from "next/link"
import styles from "../styles/navigation.module.css"

export default function Navigation({ data }) {
  return (
    <nav className={styles["nav"]}>
      <section>
        <ul>
          <li><a href="/about-me">about me</a></li>
        </ul>
      </section>

      {data.map(({categoryName, posts}) => {
        return (
          <section>
            <h2>{categoryName}</h2>
            <ul>
              {posts.map(post => {
                return (
                  <li><Link href={`/${post.id}`}>{post.title}</Link></li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </nav>
  )
}