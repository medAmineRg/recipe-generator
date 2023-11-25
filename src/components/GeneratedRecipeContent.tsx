"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import AppDescription from "@/components/AppDescription";
import { RecipeContext, RecipeContextProps } from "@/context/RecipeContext";
import Spinner from "./Spinner";
import { recipeType } from "@/app/types/Types";

const GeneratedRecipeContent = ({
  fetchedRecipe,
}: {
  fetchedRecipe?: recipeType;
}) => {
  //@ts-ignore
  let { recipe, setRecipe }: recipeType = useContext<
    RecipeContextProps | undefined
  >(RecipeContext);

  useEffect(() => {
    if (fetchedRecipe) {
      setRecipe(fetchedRecipe);
    }
  }, []);

  if (recipe?.isLoading) return <Spinner />;

  return recipe !== undefined ? (
    <div className="mt-10 flex flex-col items-center justify-center px-5">
      <div className="mt-5 w-[95%] gap-5 lg:flex lg:w-[70%] lg:justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-[312px] w-[312px] shadow-xl lg:h-[412px] lg:w-[412px]">
            <Image
              src={recipe.imgURL}
              alt="Recipe Image"
              fill
              className="rounded-md"
            />
          </div>
          <div className="mt-8 flex flex-col items-center justify-between lg:mt-0">
            <h1 className="text-center text-3xl font-medium lg:text-left">
              {recipe.recipeName}
            </h1>
            <div className="mt-2 flex justify-around gap-4 lg:justify-between">
              <h3 className="">
                <span className="font-semibold text-slate-200">Creator:</span>{" "}
                Med Amine
              </h3>
              <h3 className="">
                <span className="font-semibold text-slate-200">Date:</span>{" "}
                2023-11-03
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 lg:hidden">
          <div className="h-[2px] w-14 bg-slate-200"></div>
          <div className="h-10 w-10 rotate-45 border-2 border-slate-200"></div>
          <div className="h-[2px] w-14 bg-slate-200"></div>
        </div>

        {/* ingredients + preparation */}
        <div className="">
          <div className="gap-8 lg:flex">
            <div className="mt-10 rounded-lg border p-4 shadow-sm lg:mt-0">
              <h3 className="text-xl font-medium text-blue-400">Ingredients</h3>
              <div className="ml-2 mt-2">
                {recipe.ingredients.map((ingredient) => (
                  <li className="font-medium text-white" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </div>
            </div>
            <div className="mt-10 h-max rounded-lg border p-4 shadow-sm lg:mt-0">
              <h3 className="text-xl font-medium text-blue-400">
                Additional Ingredients
              </h3>
              <div className="ml-2 mt-2">
                {recipe.additionalIngredients.map((ingredient) => (
                  <li className="font-medium text-white" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 rounded-lg bg-gray-50 p-4 shadow-sm lg:mt-5 lg:bg-white">
            <h3 className="text-xl font-medium text-blue-600">Preparation</h3>
            <div className="mt-2">
              {recipe.steps.map((step, i) => (
                <h1 className="mb-2 font-medium text-black" key={i}>
                  {step}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <AppDescription />
  );
};

export default GeneratedRecipeContent;
