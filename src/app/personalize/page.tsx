import CategorySelector from '@/components/CategorySelector';
import styles from './page.module.css';

export const metadata = {
  title: 'Personalize Your Feed - WindowsUpdateBlog',
  description: 'Select the Microsoft products and services you want to follow.',
};

export default function PersonalizePage() {
  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <header className={styles.header}>
        <h1 className={styles.title}>Personalize Your Feed</h1>
        <p className={styles.subtitle}>
          Select the products, services, and categories you are interested in. 
          Your "My Feed" on the home page will only show updates relevant to your selection.
        </p>
      </header>
      
      <CategorySelector />
    </div>
  );
}
