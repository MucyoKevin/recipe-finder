import React from 'react';

interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  if (!ingredients || ingredients.length === 0) {
    return <div className="text-gray-500">No ingredients found.</div>;
  }

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-secondary mb-4">Ingredients</h2>
      <ul className="list-disc list-inside space-y-1">
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="text-lg text-gray-800">
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList; 