import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3 className={styles.title}>WindowsUpdateBlog</h3>
            <p className={styles.description}>
              Your trusted source not affiliated with Microsoft for the latest updates on Windows, Edge, and Office.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Categories</h4>
              <ul>
                <li><Link href="/category/windows-11">Windows 11</Link></li>
                <li><Link href="/category/microsoft-edge">Microsoft Edge</Link></li>
                <li><Link href="/category/office-365">Office 365</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} WindowsUpdateBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
