"use client";

import { useState } from 'react';
import { usePreferences } from '@/context/PreferencesContext';
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/lib/data';
import styles from './FilteredFeed.module.css';
import Link from 'next/link';

interface FilteredFeedProps {
  initialArticles: Article[];
}

export default function FilteredFeed({ initialArticles }: FilteredFeedProps) {
  const { selectedCategories, isLoading } = usePreferences();
  const [view, setView] = useState<'all' | 'my'>('all');

  const filteredArticles = view === 'my' 
    ? initialArticles.filter(article => selectedCategories.includes(article.slug) || 
      // Also match by category name if needed, but slug is safer if we mapped correcty. 
      // Actually data.ts has category: 'Name', but selectedCategories stores slugs.
      // Need to map article category name to slug or use slug in article.
      // Let's check data.ts Structure. Article has `category: string` (Name).
      // We need to map it. Or update data.ts to include categorySlug.
      // For now, let's assume we can match or pass categorized data.
      true // Conceptual placeholder, logic below
    )
    : initialArticles;

  // Real filtering logic
  // We need to find the slug for the article category. 
  // Ideally Article should have categorySlug.
  // I will update data.ts later to include categorySlug or look it up here.
  // Let's do a lookupmap.
  
  // Actually, let's look at the data.ts again in memory or assumption.
  // Article: category: 'Windows 11'. Category: name: 'Windows 11', slug: 'windows-11'.
  
  // Better approach: Pass categories to this component or import them to map.
  
  return (
    <div>
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${view === 'all' ? styles.active : ''}`}
          onClick={() => setView('all')}
        >
          All Updates
        </button>
        <button 
          className={`${styles.tab} ${view === 'my' ? styles.active : ''}`}
          onClick={() => setView('my')}
        >
          My Feed {selectedCategories.length > 0 && `(${selectedCategories.length})`}
        </button>
      </div>

      {view === 'my' && selectedCategories.length === 0 && !isLoading && (
        <div className={styles.emptyState}>
          <p>You haven't selected any interests yet.</p>
          <Link href="/personalize" className={styles.personalizeLink}>
            Personalize your feed
          </Link>
        </div>
      )}

      <div className={styles.grid}>
        {(view === 'all' ? initialArticles : filterArticles(initialArticles, selectedCategories)).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
       {view === 'my' && filterArticles(initialArticles, selectedCategories).length === 0 && selectedCategories.length > 0 && (
          <p className="text-muted" style={{textAlign: 'center', marginTop: '2rem'}}>No recent updates for your selected categories.</p>
       )}
    </div>
  );
}

// Helper to filter 
import { categories } from '@/lib/data';

function filterArticles(articles: Article[], selectedSlugs: string[]) {
  if (selectedSlugs.length === 0) return [];
  
  // Map category Name to Slug
  const nameToSlug = categories.reduce((acc, cat) => {
    acc[cat.name] = cat.slug;
    return acc;
  }, {} as Record<string, string>);

  return articles.filter(article => {
    const slug = nameToSlug[article.category];
    return selectedSlugs.includes(slug);
  });
}
