"use client";

import { useState } from 'react';
import { useCommunity } from '@/context/CommunityContext';
import styles from './CommunityStyles.module.css';

const CATEGORIES = [
  'Windows 11', 'Windows 10', 'Microsoft Edge', 'Office 365', 
  'Azure', 'Xbox', 'Security', 'Other'
];

export default function CreatePostForm() {
  const { addPost } = useCommunity();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setIsSubmitting(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    addPost(title, content, category);
    
    // Reset form
    setTitle('');
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Start a Discussion</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <select 
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <input 
            className={styles.input}
            type="text" 
            placeholder="Title (e.g., Issue with KB5035942)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <textarea 
            className={styles.textarea}
            placeholder="Describe your issue or topic..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Post Discussion'}
        </button>
      </form>
    </div>
  );
}
