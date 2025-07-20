import { useCallback } from "react";
import { SearchBox } from "./SearchBox";

interface HeroSectionProps {
  onSearch?: (search: string) => void;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

export function HeroSection({ 
  onSearch,
  backgroundImage = "/task1/hero-bg.png",
  title = "Search for words, phrases and meanings",
  subtitle
}: HeroSectionProps) {
  const handleSearch = useCallback((search: string) => {
    console.log("Hero search:", search);
    onSearch?.(search);
  }, [onSearch]);

  return (
    <section className="relative max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img 
        src={backgroundImage} 
        alt="Hero background" 
        className="w-full h-48 sm:h-64 md:h-96 object-cover" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white mb-4 sm:mb-6 leading-tight text-center">
          <div>Search for words, phrases and</div>
          <div>meanings</div>
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-sm md:text-base mb-6 max-w-2xl text-center">
            {subtitle}
          </p>
        )}
        <SearchBox 
          initialValue="" 
          onSearch={handleSearch}
          placeholder="Type to search..."
          className="w-full max-w-sm sm:max-w-lg"
        />
      </div>
    </section>
  );
} 