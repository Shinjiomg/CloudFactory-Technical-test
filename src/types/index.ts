// Common types used across the application

export interface SearchHandler {
  (search: string): void;
}

export interface TagClickHandler {
  (tag: string): void;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme and styling types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
}

// Search related types
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'word' | 'phrase' | 'meaning';
  tags: string[];
}

// Tag related types
export interface Tag {
  id: string;
  name: string;
  category: string;
  count?: number;
} 