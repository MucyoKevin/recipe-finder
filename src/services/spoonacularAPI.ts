import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
});

export const searchRecipes = async (query: string, filters: Record<string, any> = {}) => {
  const response = await api.get('/complexSearch', {
    params: {
      apiKey: API_KEY,
      query,
      number: 12,
      addRecipeInformation: true,
      ...filters,
    },
  });
  return response.data;
};

export const getRecipeDetails = async (id: string | number) => {
  const response = await api.get(`/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return response.data;
}; 