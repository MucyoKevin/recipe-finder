'use client';

import React, { useState, useCallback } from 'react';
import SearchBar from '../app/components/common/SearchBar';
import RecipeGrid from '../app/components/recipe/RecipeGrid';
// import FilterPanel from '../app/components/recipe/FilterPanel'; // To be implemented
import { searchRecipes } from '../services/spoonacularAPI';

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearch = useCallback(async (query: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchRecipes(query, filters);
      setRecipes(data.results);
    } catch (err) {
      setError('Failed to search recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [filters]);

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center">
      <SearchBar onSearch={handleSearch} />
      {/* <FilterPanel filters={filters} setFilters={setFilters} /> */}
      {error && <div className="error text-secondary font-semibold my-2">{error}</div>}
      <RecipeGrid recipes={recipes} loading={loading} />
    </div>
  );
};

export default Home; 