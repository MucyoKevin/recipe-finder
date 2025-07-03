import RecipeDetails from '../../../pages/RecipeDetails';

export default function RecipeDetailsPage({ params }: { params: { id: string } }) {
  return <RecipeDetails id={params.id} />;
} 