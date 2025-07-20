import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";

interface HeaderProps {
  onSearch?: (search: string) => void;
  logoUrl?: string;
  avatarUrl?: string;
  userName?: string;
}

export function Header({ 
  onSearch, 
  logoUrl = "/task1/logo.png",
  avatarUrl,
  userName = "User"
}: HeaderProps) {
  const [headerSearchValue, setHeaderSearchValue] = useState("");

  const handleHeaderSearch = useCallback((search: string) => {
    console.log("Header search:", search);
    onSearch?.(search);
  }, [onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeaderSearchValue(value);
    handleHeaderSearch(value);
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-background border-b border-white">
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src={logoUrl} 
          alt="Wortionary Logo" 
          className="w-4 h-4" 
        />
        <h1 className="text-white font-semibold text-base sm:text-lg">Wortionary</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <div className="relative">
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9EABB8] text-sm" 
            aria-hidden="true" 
          />
          <Input
            type="text"
            value={headerSearchValue}
            onChange={handleSearchChange}
            placeholder="Search"
            variant="header"
            className="pl-11 pr-4 w-32 sm:w-40 text-sm transition-all duration-200 focus:w-40 sm:focus:w-52"
            aria-label="Search"
          />
        </div>
        <Avatar className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:opacity-80 transition-opacity">
          {avatarUrl && <AvatarImage src={avatarUrl} alt={`${userName} avatar`} />}
          <AvatarFallback className="bg-gray-700 text-gray-300 text-sm font-medium">
            {userName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
} 