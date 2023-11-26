"use client";
import GeneratedRecipeContent from "@/components/GeneratedRecipeContent";
import { Select } from "@/components/Select";
import { RecipeContext } from "@/context/RecipeContext";
import { useContext } from "react";
import AppDescription from "@/components/AppDescription";

const Recipe = () => {
  // @ts-ignore
  const { setRecipe, recipe } = useContext(RecipeContext);

  return (
    <div className="my-10 min-h-[80vh]">
      <div className="mt-5 flex flex-col gap-4 font-medium lg:flex-row lg:justify-center">
        <Select setRecipe={setRecipe} recipe={recipe} />
        {!recipe && <AppDescription />}
      </div>
      <GeneratedRecipeContent recipe={recipe} />
    </div>
  );
};

export default Recipe;
