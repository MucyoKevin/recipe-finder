'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getRecipeDetails } from '../services/spoonacularAPI';
// import IngredientsList from '../app/components/recipe/IngredientsList';
// import InstructionsList from '../app/components/recipe/InstructionsList';
// import NutritionInfo from '../app/components/recipe/NutritionInfo';

interface RecipeDetailsProps {
  id?: string;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ id }) => {
  const router = useRouter();
  const recipeId = id || (router.query.id as string);
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!recipeId) return;
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeDetails(recipeId);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [recipeId]);

  if (loading) return <div className="loading text-secondary font-semibold">Loading recipe...</div>;
  if (!recipe) return <div className="error text-secondary font-semibold">Recipe not found</div>;

  return (
    <div className="recipe-details min-h-screen bg-primary flex flex-col items-center p-6">
      <div className="recipe-header flex flex-col md:flex-row items-center w-full max-w-3xl bg-white rounded-lg shadow p-6 mb-6">
        <img src={recipe.image} alt={recipe.title} className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 border-4 border-secondary" />
        <div className="recipe-meta flex-1">
          <h1 className="text-3xl font-bold text-secondary mb-2">{recipe.title}</h1>
          <p className="text-lg text-gray-700 mb-2">Ready in {recipe.readyInMinutes} minutes | Serves {recipe.servings}</p>
        </div>
      </div>
      <div className="recipe-content w-full max-w-3xl bg-white rounded-lg shadow p-6">
        {/* <IngredientsList ingredients={recipe.extendedIngredients} /> */}
        {/* <InstructionsList instructions={recipe.analyzedInstructions} /> */}
        {/* <NutritionInfo nutrition={recipe.nutrition} /> */}
      </div>
    </div>
  );
};

export default RecipeDetails; 