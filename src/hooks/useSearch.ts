import { useState, useCallback, useRef } from 'react';

interface UseSearchOptions {
  debounceMs?: number;
  onSearch?: (query: string) => void;
  initialValue?: string;
}

export function useSearch(options: UseSearchOptions = {}) {
  const { 
    debounceMs = 300, 
    onSearch, 
    initialValue = "" 
  } = options;
  const [searchValue, setSearchValue] = useState(initialValue);
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleSearch = useCallback((query: string) => {
    setIsSearching(true);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout for debounced search
    timeoutRef.current = setTimeout(() => {
      onSearch?.(query);
      setIsSearching(false);
    }, debounceMs);
  }, [debounceMs, onSearch]);

  const updateSearch = useCallback((value: string) => {
    setSearchValue(value);
    handleSearch(value);
  }, [handleSearch]);

  const clearSearch = useCallback(() => {
    setSearchValue("");
    onSearch?.("");
  }, [onSearch]);

  // Cleanup timeout on unmount
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return {
    searchValue,
    isSearching,
    updateSearch,
    clearSearch,
    cleanup
  };
} 