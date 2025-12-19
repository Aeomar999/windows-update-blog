import { getArticlesByCategory, categories } from '@/lib/data';
import ArticleCard from '@/components/ArticleCard';
import { notFound } from 'next/navigation';
import styles from '../../page.module.css'; // Reuse grid styles

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
  const articles = getArticlesByCategory(category);
  const categoryData = categories.find(c => c.slug === category);

  if (!categoryData) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className={styles.title}>{categoryData.name} Updates</h1>
        <p className={styles.subtitle}>{categoryData.description}</p>
      </div>

      {articles.length > 0 ? (
        <div className={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-muted" style={{ textAlign: 'center' }}>No updates found for this category.</p>
      )}
    </div>
  );
}
