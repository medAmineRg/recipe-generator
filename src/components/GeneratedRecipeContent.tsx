import Image from "next/image";
import React from "react";
import { recipeType } from "@/app/types/Types";

const GeneratedRecipeContent = ({ recipe }: { recipe: recipeType }) => {
  return (
    <div className="px-5 mt-10 flex flex-col justify-center items-center">
      <div className="lg:flex lg:justify-center w-[95%] lg:w-[70%] gap-5 mt-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-[312px] h-[312px] lg:w-[412px] lg:h-[412px]">
            <Image
              src={"/omelette.png"}
              alt="Recipe Image"
              fill
              className="rounded-md"
            />
          </div>
          <div className="mt-8 lg:mt-0 flex flex-col justify-between items-center">
            <h1 className="text-3xl font-medium text-center lg:text-left">
              {recipe.recipeName}
            </h1>
            <div className="flex justify-around lg:justify-between gap-4 mt-2">
              <h3 className="font-medium">
                <span className="text-slate-600">Creator: </span>Med Amine
              </h3>
              <h3 className="font-medium">
                <span className="text-slate-600">Date: </span>2023-11-03
              </h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-10 lg:hidden">
          <div className="w-14 h-[2px] bg-slate-200"></div>
          <div className="w-10 h-10 border-2 border-slate-200 rotate-45"></div>
          <div className="w-14 h-[2px] bg-slate-200"></div>
        </div>

        {/* ingredients + preparation */}
        <div className="">
          <div className="lg:flex gap-8">
            <div className="p-4 bg-gray-50 mt-10 shadow-sm lg:mt-0">
              <h3 className="text-xl font-medium">Ingredients</h3>
              <div className="ml-2 mt-2">
                {recipe.ingredients.map((ingredient) => (
                  <li className="text-gray-700 font-medium" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </div>
            </div>
            <div className="p-4 mt-10 lg:bg-gray-50 shadow-sm lg:mt-0">
              <h3 className="text-xl font-medium">Additional Ingredients</h3>
              <div className="ml-2 mt-2">
                {recipe.additionalIngredients.map((ingredient) => (
                  <li className="text-gray-700 font-medium" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 mt-10 lg:mt-5 shadow-sm lg:bg-white">
            <h3 className="text-xl font-medium">Preparation</h3>
            <div className="mt-2">
              {recipe.steps.map((step, i) => (
                <h1 className="text-gray-700 font-medium mb-2" key={i}>
                  {step}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedRecipeContent;
