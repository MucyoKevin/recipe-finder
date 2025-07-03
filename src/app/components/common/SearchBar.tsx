import React, { useState, useEffect } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search recipes..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="search-bar w-full flex justify-center my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="search-input w-full max-w-md px-4 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-secondary bg-primary text-secondary placeholder-secondary shadow"
      />
    </div>
  );
};

export default SearchBar; 