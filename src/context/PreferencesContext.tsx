"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { categories } from '@/lib/data';

interface PreferencesContextType {
  selectedCategories: string[];
  theme: 'light' | 'dark';
  toggleCategory: (slug: string) => void;
  toggleTheme: () => void;
  selectAll: () => void;
  clearAll: () => void;
  isLoading: boolean;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    // Categories
    const savedCats = localStorage.getItem('updateHub_preferences');
    if (savedCats) {
      try {
        setSelectedCategories(JSON.parse(savedCats));
      } catch (e) {
        console.error('Failed to parse preferences', e);
      }
    }

    // Theme (Default to Light if not set)
    const savedTheme = localStorage.getItem('updateHub_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
       // Ensure default light mode matches DOM
       document.documentElement.classList.remove('dark');
    }

    setIsLoading(false);
  }, []);

  // Save Categories
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('updateHub_preferences', JSON.stringify(selectedCategories));
    }
  }, [selectedCategories, isLoading]);

  // Save Theme & Update DOM
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('updateHub_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, isLoading]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev => 
      prev.includes(slug)
        ? prev.filter(c => c !== slug)
        : [...prev, slug]
    );
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const selectAll = () => {
    setSelectedCategories(categories.map(c => c.slug));
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };

  return (
    <PreferencesContext.Provider value={{ 
      selectedCategories, 
      theme, 
      toggleCategory, 
      toggleTheme, 
      selectAll, 
      clearAll, 
      isLoading 
    }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
