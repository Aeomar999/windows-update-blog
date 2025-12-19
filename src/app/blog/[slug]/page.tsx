import { getArticleBySlug, articles } from '@/lib/data';
import { notFound } from 'next/navigation';
import localStyles from '../page.module.css';

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className={`container ${localStyles.articleContainer}`}>
      <header className={localStyles.header}>
        <div className={localStyles.meta}>
          <span className={localStyles.category}>{article.category}</span>
          <span>•</span>
          <time>{article.date}</time>
          <span>•</span>
          <span>{article.author}</span>
        </div>
        <h1 className={localStyles.title}>{article.title}</h1>
      </header>
      
      <div 
        className={localStyles.content}
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />

      <div className={localStyles.tags}>
        {article.tags.map(tag => (
          <span key={tag} className={localStyles.tag}>#{tag}</span>
        ))}
      </div>
    </article>
  );
}
