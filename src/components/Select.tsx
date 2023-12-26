"use client";
import { axiosInstance } from "@/utils/axiosInstance";
import React, { KeyboardEventHandler, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "sonner";
import { recipeType } from "@/app/types/Types";

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
    "/recipe",

    JSON.stringify(data),
  );
  return response.data;
}

export const Select = ({
  setRecipe,
  recipe,
}: {
  setRecipe: any;
  recipe: recipeType;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);
  const [submited, setSubmited] = useState(false);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (value.length > 9) return toast.info("Hey 10 ingredients is the max!");
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
    setSubmited(() => true);
    setRecipe((prev: recipeType) => ({ ...prev, isLoading: true }));
    const ingredients = value.map((val) => val.value);
    const generatedRecipe = await createRecipe(ingredients);
    setRecipe(() => ({ ...generatedRecipe, isLoading: false }));
    setSubmited(() => false);
  };

  return (
    <div className="items-center justify-center gap-2 md:flex">
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
            background: "white",
            fontSize: "12px",
          }),
        }}
        className="min-w-[300px] max-w-lg"
      />
      <button
        disabled={submited || !value.length}
        onClick={handleSubmit}
        className={`${
          (submited || !value.length) && "hover:cursor-not-allowed "
        } border-sltate-100 mt-2 rounded-md border bg-slate-100 p-2 text-sm text-black hover:cursor-pointer hover:bg-slate-200 md:mt-0`}
      >
        Generate a recipe
      </button>
    </div>
  );
};
