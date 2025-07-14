import { use } from 'react';
import RecipeDetails from '../../../pages/RecipeDetails';

export default async function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use (params);
  return <RecipeDetails id={id} />;
} 