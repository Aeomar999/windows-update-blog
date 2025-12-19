import { getRecentArticles } from '@/lib/data';
import FilteredFeed from '@/components/FilteredFeed';
import NewsletterSignup from '@/components/NewsletterSignup';
import styles from './page.module.css';

export default function Home() {
  const recentArticles = getRecentArticles();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>All Microsoft Updates. One Place.</h1>
            <p className={styles.subtitle}>
              The latest news, security patches, and feature updates across Windows, Cloud, AI, and Developer tools.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <FilteredFeed initialArticles={recentArticles} />
      </div>

      <NewsletterSignup />
    </>
  );
}
