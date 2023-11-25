"use client";

import { axiosInstance } from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Item from "./Item";
import { recipeType } from "@/app/types/Types";

const CollectionItems = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    getCollections();
    setLoading(false);
  }, []);
  if (loading) return <Spinner />;
  return (
    <>
      {recipes?.map((recipe: recipeType) => (
        <Item
          id={recipe.id}
          key={recipe.id}
          imgURL={recipe.imgURL}
          recipeName={recipe.recipeName}
        />
      ))}
    </>
  );
};

export default CollectionItems;
