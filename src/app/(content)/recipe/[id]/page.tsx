"use client";
import GeneratedRecipeContent from "@/components/GeneratedRecipeContent";
import { axiosInstance } from "@/utils/axiosInstance";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const RecipeDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [recipe, setRecipe] = useState();
  const router = useRouter();

  useEffect(() => {
    const getData = async (id: string) => {
      try {
        const res = await axiosInstance.get(`/recipe/${id}`);
        setRecipe(res.data);
      } catch (error) {
        toast.dismiss();
        toast.error("Recipe not Found");
        router.push("/collection");
      }
    };
    getData(id);
  }, []);
  return <GeneratedRecipeContent recipe={recipe} />;
};

export default RecipeDetail;
