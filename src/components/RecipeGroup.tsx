"use client";
import { RecipeContext } from "@/context/RecipeContext";
import { useContext } from "react";
import { Select } from "./Select";
import AppDescription from "./AppDescription";
import GeneratedRecipeContent from "./GeneratedRecipeContent";

const RecipeGroup = () => {
  //@ts-ignore
  const { setRecipe, recipe } = useContext(RecipeContext);

  return (
    <>
      <div className="mt-5">
        <Select setRecipe={setRecipe} recipe={recipe} />
        {!recipe && <AppDescription />}
      </div>
      {recipe && <GeneratedRecipeContent recipe={recipe} />}
    </>
  );
};

export default RecipeGroup;
