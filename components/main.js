import Link from "next/link"
import styles from "../styles/main.module.css"
import Navigation from "./navigation"

export default function Main({ data, children }) {
  return (
    <main>
      <h1 className={styles["title"]}>
        <Link href="/">
          <a className={styles["text-decoration-none"]}>danceparty</a>
        </Link>
      </h1>
      <hr />
      <div className={[styles["flex"], styles["flex-row"]].join(" ")}>
        <Navigation data={data} />

        <div id="page-content">
          {children}
        </div>
      </div>
    </main>
  )
}