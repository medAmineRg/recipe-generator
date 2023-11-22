"use client";

import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { recipeType } from "@/app/types/Types";

// Define types for your context data
export interface RecipeContextProps {
  recipe: recipeType | undefined;
  setRecipe: React.Dispatch<React.SetStateAction<recipeType | undefined>>;
}

export const RecipeContext = createContext<RecipeContextProps | undefined>(
  undefined,
);

export const RecipeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [recipe, setRecipe] = useState<recipeType | undefined>(undefined);

  const contextValue = useMemo(() => {
    return { recipe, setRecipe };
  }, [recipe]);

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};
