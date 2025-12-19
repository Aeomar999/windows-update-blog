import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>❖</span>
          WindowsUpdateBlog
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navLink}>Latest</Link></li>
            <li><Link href="/personalize" className={styles.navLink}>Personalize</Link></li>
            <li><Link href="/community" className={styles.navLink}>Community</Link></li>
            <li><Link href="/category/windows-11" className={styles.navLink}>Windows 11</Link></li>
            <li><Link href="/category/microsoft-edge" className={styles.navLink}>Edge</Link></li>
            <li><Link href="/category/office-365" className={styles.navLink}>Office 365</Link></li>
            <li><Link href="/category/security" className={styles.navLink}>Security</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
