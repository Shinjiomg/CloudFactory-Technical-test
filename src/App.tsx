import { useState, useCallback } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TagList } from "./components/TagList";

interface Tag {
  id: string;
  name: string;
}

function App() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleHeaderSearch = useCallback((search: string) => {
    console.log("Header search:", search);
    // Here we can implement a quick search or suggestions
  }, []);

  const handleHeroSearch = useCallback((search: string) => {
    console.log("Hero search:", search);
    setSearchResults([search]);
    // Here we can implement the main search
  }, []);

  const handleTagClick = useCallback((tag: string) => {
    console.log("Tag clicked:", tag);
    setSearchResults([tag]);
  }, []);

  const trendingTags: Tag[] = [
    { id: "1", name: "NFT" },
    { id: "2", name: "Metaverse" },
    { id: "3", name: "Sustainable" },
    { id: "4", name: "Sonder" },
    { id: "5", name: "FOMO" },
    { id: "6", name: "Ghosting" }
  ];

  const forYouTags: Tag[] = [
    { id: "7", name: "NFT" },
    { id: "8", name: "Metaverse" },
    { id: "9", name: "Sustainable" },
    { id: "10", name: "Sonder" },
    { id: "11", name: "FOMO" },
    { id: "12", name: "Ghosting" }
  ];

  return (
    <div className="dark min-h-screen bg-background text-white">
      <Header onSearch={handleHeaderSearch} />
      <main className="px-4 sm:px-6 lg:px-8">
        <HeroSection onSearch={handleHeroSearch} />
        <TagList 
          title="Trending" 
          tags={trendingTags.map(tag => tag.name)} 
          onTagClick={handleTagClick} 
        />
        <TagList 
          title="For you" 
          tags={forYouTags.map(tag => tag.name)} 
          onTagClick={handleTagClick} 
        />
      </main>
    </div>
  );
}

export default App;
