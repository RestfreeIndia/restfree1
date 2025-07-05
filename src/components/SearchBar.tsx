'use client'

import { Search, MapPin, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    console.log(`Searching for: ${searchQuery}`);
    
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      console.log(`Search completed for: ${searchQuery}`);
    }, 2000);
  };

  const handleLocationSearch = () => {
    console.log("Finding nearby locations...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found:", position.coords);
      },
      (error) => {
        console.log("Location access denied");
      }
    );
  };

  return (
    <div className="relative mb-8 animate-fade-in">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search 
            size={28} 
            className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
              isSearching ? 'animate-spin text-green-500' : ''
            }`} 
          />
          <Input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-16 pr-5 py-6 text-xl border-gray-200 rounded-3xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-xl focus:shadow-2xl"
          />
          <Button
            onClick={handleSearch}
            disabled={isSearching}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-2xl px-7 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>
        
        <Button
          onClick={handleLocationSearch}
          variant="outline"
          className="px-5 py-5 rounded-2xl border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <MapPin size={28} />
        </Button>
        
        <Button
          variant="outline"
          className="px-5 py-5 rounded-2xl border-gray-200 hover:border-green-500 hover:text-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <Filter size={28} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
