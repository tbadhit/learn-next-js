import Link from "next/link";
import styles from "./Header.module.css";

export default function index() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/Blog">Blog</Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
