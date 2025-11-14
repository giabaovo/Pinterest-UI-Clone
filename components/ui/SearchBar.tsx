'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const recentSearches = [
  'anime girl',
  'landscape',
  'cute animals',
  'aesthetic',
  'wallpaper',
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    console.log('Searching for:', searchQuery);
    setQuery(searchQuery);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setIsFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder="Tìm kiếm"
          className={`w-full pl-12 pr-12 py-3 rounded-full transition-all ${
            isFocused
              ? 'bg-white ring-2 ring-blue-500'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Tìm kiếm gần đây
            </h3>
            <div className="space-y-1">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{search}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
