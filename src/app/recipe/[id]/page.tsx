import RecipeDetails from '../../../pages/RecipeDetails';

export default async function RecipeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RecipeDetails id={id} />;
} 