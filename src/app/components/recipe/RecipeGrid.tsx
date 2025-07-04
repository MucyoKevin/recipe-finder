import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: any[];
  loading?: boolean;
  hasSearched?: boolean;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, loading = false, hasSearched = false }) => {
  if (loading) {
    return <div className="loading">Loading recipes...</div>;
  }
  if (!recipes || recipes.length === 0) {
    return (
      <div className="no-results text-gray-500 text-lg font-medium my-8">
        {hasSearched ? 'No recipes found.' : 'Search for any recipe'}
      </div>
    );
  }
  return (
    <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid; 