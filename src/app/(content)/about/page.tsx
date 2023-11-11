import FeatureItem from "@/components/FeatureItem";
import Item from "@/components/Item";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-10 flex items-center justify-between gap-10 rounded-2xl  border-slate-700 p-5">
        <div className="flex flex-1 flex-col">
          <div className="rounded-xl p-2">
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
      <div className="mt-20 grid place-items-center gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
        />
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
        />
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
        />
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
        />
        <FeatureItem
          img="/generate-recipe.png"
          heading="Ingredient-Based Recipe Generation :"
          paragraph={`Input up to five ingredients, and "Cooking Without Thinking" will
              present you with a single, thoughtfully curated recipe using your
              ingredients.`}
        />
        {/* <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2 text-sm">
            <h1 className="text-xl font-bold text-blue-500">Key Features: </h1>
            <li>
              
              {`Input up to five ingredients, and "Cooking Without Thinking" will present you with a single, thoughtfully curated recipe using your ingredients.`}
            </li>
            <li>
              <b className="">Avoid Decision Paralysis:</b>
              {`Say goodbye to overwhelming choices. Our app narrows it down to one perfect recipe, ensuring you enjoy your cooking experience.`}
            </li>
            <li>
              <b className="">Enhance Your Dish:</b>
              {`Discover suggested additional ingredients that complement your selection, elevating the flavor and variety of your meal.`}
            </li>
            <li>
              <b className="">Guided Cooking:</b>
              {`Follow easy-to-understand, step-by-step instructions that cater to both novice and experienced cooks.`}
            </li>
            <li>
              <b className="">Save :</b>
              {`Save your favorite recipes for later.`}
            </li>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
