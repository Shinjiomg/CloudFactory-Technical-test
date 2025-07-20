import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBoxProps {
  initialValue?: string;
  onSearch: (search: string) => void;
  placeholder?: string;
  className?: string;
  debounceMs?: number;
  showButton?: boolean;
  buttonText?: string;
}

export function SearchBox({ 
  initialValue = "", 
  onSearch, 
  placeholder = "Search...",
  className = "",
  debounceMs = 300,
  showButton = true,
  buttonText = "Search"
}: SearchBoxProps) {
  const [searchValue, setSearchValue] = useState(initialValue);

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchValue);
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [searchValue, onSearch, debounceMs]);

  // Reset value when initialValue changes
  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center bg-[#1C2126] px-2 sm:px-2.5 py-2 sm:py-2.5 rounded-lg shadow-lg ${className}`}>
      <Search className="text-gray-400 mr-2 sm:mr-3" aria-hidden="true" />
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        variant="hero"
        className="flex-1"
        aria-label={placeholder}
      />
      {showButton && (
        <Button 
          type="submit"
          className="text-white transition-colors duration-200 rounded-lg text-sm sm:text-base px-3 sm:px-4 ml-2"
          style={{
            backgroundColor: '#1A80E5'
          }}
        >
          {buttonText}
        </Button>
      )}
    </form>
  );
} 