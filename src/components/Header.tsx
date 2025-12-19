"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>❖</span>
          WindowsUpdateBlog
        </Link>
        
        <button 
          className={`${styles.mobileToggle} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.isOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`} onClick={closeMenu}>Latest</Link></li>
            <li><Link href="/personalize" className={`${styles.navLink} ${pathname === '/personalize' ? styles.active : ''}`} onClick={closeMenu}>Personalize</Link></li>
            <li><Link href="/community" className={`${styles.navLink} ${pathname === '/community' ? styles.active : ''}`} onClick={closeMenu}>Community</Link></li>
            <li><Link href="/category/windows-11" className={`${styles.navLink} ${pathname?.includes('windows-11') ? styles.active : ''}`} onClick={closeMenu}>Windows 11</Link></li>
            <li><Link href="/category/microsoft-edge" className={`${styles.navLink} ${pathname?.includes('microsoft-edge') ? styles.active : ''}`} onClick={closeMenu}>Edge</Link></li>
            <li><Link href="/category/office-365" className={`${styles.navLink} ${pathname?.includes('office-365') ? styles.active : ''}`} onClick={closeMenu}>Office 365</Link></li>
            <li><Link href="/category/security" className={`${styles.navLink} ${pathname?.includes('security') ? styles.active : ''}`} onClick={closeMenu}>Security</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
