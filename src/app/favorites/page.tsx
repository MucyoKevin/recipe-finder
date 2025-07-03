import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import RecipeGrid from '../components/recipe/RecipeGrid';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites min-h-screen bg-primary flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-secondary mb-6">My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite recipes yet. Start exploring!</p>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}
    </div>
  );
} 