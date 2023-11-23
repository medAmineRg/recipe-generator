"use client";
import { recipeType } from "@/app/types/Types";
import Item from "@/components/Item";
import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

const Collection = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const result = await axiosInstance.get("/collection", {
          withCredentials: true,
        });
        setRecipes(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(getCollections());
  }, []);
  console.log(recipes);

  return (
    <div className="mt-10 p-5">
      <div className="grid place-items-center gap-10 md:grid-cols-2  lg:grid-cols-3">
        {recipes?.map((recipe: recipeType) => (
          <Item
            key={recipe.id}
            imgURL={recipe.imgURL}
            recipeName={recipe.recipeName}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
