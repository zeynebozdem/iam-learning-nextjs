import Link from 'next/link'
import styles from './navigation.module.css'
function Navigation() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a className={styles.link}>Ana Sayfa</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>Hakkımda</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
