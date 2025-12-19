"use client";

import { useCommunity } from '@/context/CommunityContext';
import CreatePostForm from '@/components/community/CreatePostForm';
import PostCard from '@/components/community/PostCard';
import BackButton from '@/components/BackButton';
import styles from './page.module.css';

export default function CommunityPage() {
  const { posts, isLoading } = useCommunity();

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <BackButton />
      </div>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Community Discussions</h1>
        <p className={styles.subtitle}>
          Share issues, discover fixes, and discuss new features with the community.
        </p>
      </header>

      <div className={styles.layout}>
        <div className={styles.mainContent}>
          <CreatePostForm />
          
          <h2 className={styles.sectionTitle}>Recent Discussions</h2>
          {isLoading ? (
             <p className="text-muted">Loading discussions...</p>
          ) : posts.length > 0 ? (
            posts.map(post => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-muted">No posts yet. Start the conversation!</p>
          )}
        </div>
        
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Community Guidelines</h3>
            <ul>
              <li>Be respectful and helpful.</li>
              <li>Search before posting clearly duplicate issues.</li>
              <li>No spam or self-promotion.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
