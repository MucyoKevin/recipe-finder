'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface Recipe {
  id: number;
  [key: string]: any;
}

type FavoritesState = Recipe[];

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Recipe }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'LOAD_FAVORITES'; payload: Recipe[] };

const FavoritesContext = createContext<{
  favorites: FavoritesState;
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (recipeId: number) => void;
} | undefined>(undefined);

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    case 'REMOVE_FAVORITE':
      return state.filter(recipe => recipe.id !== action.payload);
    case 'LOAD_FAVORITES':
      return action.payload;
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      dispatch({ type: 'LOAD_FAVORITES', payload: JSON.parse(savedFavorites) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe: Recipe) => {
    dispatch({ type: 'ADD_FAVORITE', payload: recipe });
  };

  const removeFavorite = (recipeId: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: recipeId });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 