import FeatureItem from "@/components/FeatureItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="my-20 flex items-center justify-between gap-10 rounded-2xl  border-slate-700">
        <div className="flex flex-1 flex-col">
          <div className="rounded-xl">
            <b className="text-xl lg:text-2xl">
              <span className="text-blue-500">{`"Cooking Without Thinking", `}</span>
              {`is designed for individuals who want to simplify their cooking experience,
            avoid decision fatigue, and prioritize their health while enjoying delicious
            meals without the stress of choice overload.`}
            </b>
          </div>
          <Link
            href={"/recipe"}
            className="rounded-2xl border border-blue-500 bg-blue-500 p-2 text-center font-bold text-white hover:bg-white hover:text-black md:w-1/3"
          >
            Try it
          </Link>
        </div>
        <div className="hidden flex-1 rounded-lg md:block">
          <Image
            src={"/close-up-anthropomorphic-robot-cooking_23-2150865941.jpg"}
            alt="bot making food"
            className="rounded-lg object-contain"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="my-20 grid place-items-center gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
          width={100}
          height={100}
        />
        <FeatureItem
          img="/avoid-decision.png"
          heading="Avoid Decision Paralysis :"
          paragraph={`Say goodbye to overwhelming choices. Our app narrows it down to one perfect recipe, ensuring you enjoy your cooking experience.`}
          width={100}
          height={100}
        />
        <FeatureItem
          img="/enhance.png"
          heading="Enhance Your Dish :"
          paragraph={`Discover suggested additional ingredients that complement your selection, elevating the flavor and variety of your meal.`}
          width={100}
          height={100}
        />
        <FeatureItem
          img="/step-by-step.png"
          heading="Guided Cooking :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
          width={100}
          height={100}
        />
        <FeatureItem
          img="/save.png"
          heading="Saving :"
          paragraph={`Save and organize your favorite recipes easily. Access them anytime, anywhere. Simplify your cooking experience with this user-friendly app!"`}
          width={100}
          height={100}
          className={"lg:col-start-3"}
        />
      </div>
    </div>
  );
};

export default Home;
