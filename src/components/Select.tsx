"use client";
import { RecipeContext } from "@/context/RecipeContext";
import { axiosInstance } from "@/utils/axiosInstance";
import { KeyboardEventHandler, useContext, useState } from "react";
import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

async function createRecipe(value: string[]) {
  const data = {
    ingredients: value,
  };
  const response = await axiosInstance.post(
    "/generate-recipe",

    JSON.stringify(data),
  );
  return response.data;
}

export const Select = () => {
  // @ts-ignore
  const { setRecipe } = useContext(RecipeContext);

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (value.length > 9) return alert("Hey 10 ingredients is the max!");
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  const handleSubmit = async () => {
    const ingredients = value.map((val) => val.value);
    const recipe = await createRecipe(ingredients);
    setRecipe(recipe);
  };

  return (
    <>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => setValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder="Type an ingredient and press enter"
        value={value}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: "transparent",
            fontSize: "12px",
            color: "white",
          }),
        }}
        className="min-w-[300px] text-white"
      />
      <button
        disabled={!value.length}
        onClick={handleSubmit}
        className="border-sltate-100 rounded-md border bg-slate-100  p-2  text-black hover:cursor-pointer hover:bg-slate-200"
      >
        Generate a recipe
      </button>
    </>
  );
};
