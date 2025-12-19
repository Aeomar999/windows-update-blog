"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  likes: number;
  comments: Comment[];
  likedByMe?: boolean; // simplistic local toggle
}

interface CommunityContextType {
  posts: Post[];
  addPost: (title: string, content: string, category: string) => void;
  addComment: (postId: string, content: string) => void;
  toggleLike: (postId: string) => void;
  isLoading: boolean;
}

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

// Initial seed data
const SEED_POSTS: Post[] = [
  {
    id: '1',
    title: 'Windows 11 KB5035942 fails to install',
    content: 'Has anyone else had trouble installing the latest update? It hangs at 98% for me.',
    author: 'AlexDoe',
    date: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
    category: 'Windows 11',
    likes: 12,
    comments: [
      { id: 'c1', author: 'TechSupport', content: 'Try running the update troubleshooter.', date: new Date().toISOString() }
    ],
    likedByMe: false,
  },
  {
    id: '2',
    title: 'New Edge vertical tabs are amazing',
    content: 'Just switched to vertical tabs and I can never go back. Great for productivity!',
    author: 'SarahSmith',
    date: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
    category: 'Microsoft Edge',
    likes: 45,
    comments: [],
    likedByMe: false,
  }
];

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('updateHub_community_posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse community posts', e);
        setPosts(SEED_POSTS);
      }
    } else {
      setPosts(SEED_POSTS);
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('updateHub_community_posts', JSON.stringify(posts));
    }
  }, [posts, isLoading]);

  const addPost = (title: string, content: string, category: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      category,
      author: 'You', // Mock user
      date: new Date().toISOString(),
      likes: 0,
      comments: [],
      likedByMe: false,
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const addComment = (postId: string, content: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id !== postId) return post;
      const newComment: Comment = {
        id: Date.now().toString(),
        author: 'You',
        content,
        date: new Date().toISOString(),
      };
      return { ...post, comments: [...post.comments, newComment] };
    }));
  };

  const toggleLike = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id !== postId) return post;
      const isLiked = !post.likedByMe;
      return {
        ...post,
        likedByMe: isLiked,
        likes: isLiked ? post.likes + 1 : post.likes - 1
      };
    }));
  };

  return (
    <CommunityContext.Provider value={{ posts, addPost, addComment, toggleLike, isLoading }}>
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (context === undefined) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
}
