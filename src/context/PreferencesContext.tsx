"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { categories } from '@/lib/data';

interface PreferencesContextType {
  selectedCategories: string[]; // List of category slugs
  toggleCategory: (slug: string) => void;
  selectAll: () => void;
  clearAll: () => void;
  isLoading: boolean;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('updateHub_preferences');
    if (saved) {
      try {
        setSelectedCategories(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse preferences', e);
      }
    } else {
        // Default to all if nothing saved? Or none? Let's default to none so they can customize.
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('updateHub_preferences', JSON.stringify(selectedCategories));
    }
  }, [selectedCategories, isLoading]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev => 
      prev.includes(slug)
        ? prev.filter(c => c !== slug)
        : [...prev, slug]
    );
  };

  const selectAll = () => {
    setSelectedCategories(categories.map(c => c.slug));
  };

  const clearAll = () => {
    setSelectedCategories([]);
  };

  return (
    <PreferencesContext.Provider value={{ selectedCategories, toggleCategory, selectAll, clearAll, isLoading }}>
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
