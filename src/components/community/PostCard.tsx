"use client";

import { useState } from 'react';
import { Post, useCommunity } from '@/context/CommunityContext';
import styles from './CommunityStyles.module.css';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { toggleLike, addComment } = useCommunity();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    addComment(post.id, newComment);
    setNewComment('');
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.authorInfo}>
          <span className={styles.author}>{post.author}</span>
          <span className={styles.meta}>{formatDate(post.date)}</span>
        </div>
        <span className={styles.categoryBadge}>{post.category}</span>
      </header>
      
      <h3 className={styles.title}>{post.title}</h3>
      <div className={styles.content}>{post.content}</div>
      
      <div className={styles.actions}>
        <button 
          className={`${styles.actionButton} ${post.likedByMe ? styles.activeAction : ''}`}
          onClick={() => toggleLike(post.id)}
        >
          {post.likedByMe ? '♥' : '♡'} {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
        </button>
        <button 
          className={styles.actionButton}
          onClick={() => setShowComments(!showComments)}
        >
          💬 {post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}
        </button>
      </div>

      {showComments && (
        <div className={styles.commentsSection}>
          <div className={styles.commentList}>
            {post.comments.map(comment => (
              <div key={comment.id} className={styles.comment}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentAuthor}>{comment.author}</span>
                  <span className={styles.commentDate}>{formatDate(comment.date)}</span>
                </div>
                <div className={styles.commentContent}>{comment.content}</div>
              </div>
            ))}
            {post.comments.length === 0 && (
              <p className="text-muted" style={{fontSize: '0.9rem'}}>No comments yet. Be the first!</p>
            )}
          </div>
          
          <form className={styles.commentInput} onSubmit={handleCommentSubmit}>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit" className={styles.commentButton}>Post</button>
          </form>
        </div>
      )}
    </article>
  );
}
