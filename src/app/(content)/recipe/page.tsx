import GeneratedRecipeContent from "@/components/GeneratedRecipeContent";
import { Select } from "@/components/Select";

// const recipe = {
//   recipeName: "Cheese Omelette",
//   ingredients: ["Eggs", "Cheese"],
//   additionalIngredients: [
//     "Salt",
//     "Pepper",
//     "Chopped vegetables (e.g., bell peppers)",
//   ],
//   steps: [
//     "Step 1: Crack the eggs into a bowl and beat them.",
//     "Step 2: Heat a non-stick skillet over medium heat.",
//     "Step 3: Pour the beaten eggs into the skillet.",
//     "Step 4: Let the eggs cook undisturbed until the edges start to set.",
//     "Step 5: Add your choice of additional ingredients, such as cheese, salt, pepper, and chopped vegetables.",
//     "Step 6: Carefully fold the omelette over the ingredients to create a half-moon shape.",
//     "Step 7: Continue cooking until the omelette is fully set but still moist inside.",
//     "Step 8: Slide the omelette onto a plate, and it's ready to serve!",
//   ],
// };
const Recipe = async () => {
  return (
    <div className="my-20 min-h-screen">
      <div className="mt-5 flex flex-col gap-4 font-medium lg:flex-row lg:justify-center">
        <Select />
      </div>
      <GeneratedRecipeContent />
    </div>
  );
};

export default Recipe;
