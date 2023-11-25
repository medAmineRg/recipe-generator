import GeneratedRecipeContent from "@/components/GeneratedRecipeContent";
import { Select } from "@/components/Select";

const Recipe = async () => {
  return (
    <div className="my-10 min-h-[70vh]">
      <div className="mt-5 flex flex-col gap-4 font-medium lg:flex-row lg:justify-center">
        <Select />
      </div>
      <GeneratedRecipeContent />
    </div>
  );
};

export default Recipe;
