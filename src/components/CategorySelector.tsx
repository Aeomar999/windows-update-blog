"use client";

import { usePreferences } from '@/context/PreferencesContext';
import { categories, Category } from '@/lib/data';
import styles from './CategorySelector.module.css';

export default function CategorySelector() {
  const { selectedCategories, toggleCategory, selectAll, clearAll } = usePreferences();

  // Group categories
  const groupedCategories = categories.reduce((acc, category) => {
    const group = category.group || 'Other';
    if (!acc[group]) acc[group] = [];
    acc[group].push(category);
    return acc;
  }, {} as Record<string, Category[]>);

  const groups = Object.keys(groupedCategories).sort();

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <button onClick={selectAll} className={styles.button}>Select All</button>
        <button onClick={clearAll} className={styles.button}>Clear All</button>
      </div>

      <div className={styles.groups}>
        {groups.map(group => (
          <div key={group}>
            <h3 className={styles.groupTitle}>{group}</h3>
            <div className={styles.grid}>
              {groupedCategories[group].map((category) => {
                const isSelected = selectedCategories.includes(category.slug);
                return (
                  <div 
                    key={category.id} 
                    className={`${styles.card} ${isSelected ? styles.selected : ''}`}
                    onClick={() => toggleCategory(category.slug)}
                  >
                    <div className={styles.checkbox}>
                      {isSelected && '✓'}
                    </div>
                    <div className={styles.name}>{category.name}</div>
                    <div className={styles.description}>{category.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
