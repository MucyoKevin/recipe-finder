import React from 'react';
import Link from 'next/link';
import { useFavorites } from '../../../context/FavoritesContext';

interface RecipeCardProps {
  recipe: {
    id: number;
    image: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    [key: string]: any;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe);
    }
  };

  return (
    <div className="recipe-card bg-primary rounded-lg shadow-md overflow-hidden flex flex-col relative transition-transform hover:scale-105 border border-secondary">
      <Link href={`/recipe/${recipe.id}`} className="flex-1 flex flex-col">
        <img src={recipe.image} alt={recipe.title} className="recipe-image w-full h-48 object-cover" />
        <div className="recipe-info p-4 flex-1 flex flex-col justify-between">
          <h3 className="recipe-title text-lg font-semibold text-secondary mb-2">{recipe.title}</h3>
          <p className="recipe-time text-sm text-gray-600">Ready in {recipe.readyInMinutes} minutes</p>
          <p className="recipe-servings text-sm text-gray-600">Serves {recipe.servings}</p>
        </div>
      </Link>
      <button 
        onClick={handleFavoriteClick}
        className={`favorite-btn absolute top-3 right-3 text-2xl transition-colors ${isFavorite ? 'text-secondary' : 'text-gray-400 hover:text-secondary'}`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default RecipeCard; 