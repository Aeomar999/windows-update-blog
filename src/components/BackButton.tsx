"use client";

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

interface BackButtonProps {
  label?: string;
  href?: string;
}

export default function BackButton({ label = "Back", href }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button onClick={handleBack} className={styles.button}>
      <span className={styles.icon}>←</span>
      {label}
    </button>
  );
}
