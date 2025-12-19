import Link from 'next/link';
import { Article } from '@/lib/data';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{article.category}</span>
        <time dateTime={article.date}>{article.date}</time>
      </div>
      <h3 className={styles.title}>
        <Link href={`/blog/${article.slug}`}>
          {article.title}
        </Link>
      </h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <div className={styles.footer}>
        <Link href={`/blog/${article.slug}`} className={styles.readMore}>
          Read full update <span>→</span>
        </Link>
      </div>
    </article>
  );
}
