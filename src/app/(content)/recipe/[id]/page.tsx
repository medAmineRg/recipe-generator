import GeneratedRecipeContent from "@/components/GeneratedRecipeContent";
import { axiosInstance } from "@/utils/axiosInstance";
import { cookies } from "next/headers";

async function getData(id: string) {
  const session = cookies().get("next-auth.session-token");

  const res = await axiosInstance.get(`/recipe/${id}`, {
    headers: {
      Cookie: `${session?.name}=${session?.value};`,
    },
  });
  return res.data;
}

const RecipeDetail = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const recipe = await getData(id);
  if (!recipe) return <p>Recipe not found</p>;
  return <GeneratedRecipeContent fetchedRecipe={recipe} />;
};

export default RecipeDetail;
