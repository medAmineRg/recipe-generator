import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen p-5">
      <div className="mt-10 flex items-center justify-between gap-10">
        <div className="flex flex-1 flex-col gap-10">
          <div className="rounded-xl p-2">
            <b className="text-xl lg:text-2xl">
              {`"Cooking Without Thinking" is designed for individuals who want to simplify their cooking experience,
            avoid decision fatigue, and prioritize their health while enjoying delicious
            meals without the stress of choice overload.`}
            </b>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h1 className="font-bold">Key Features: </h1>
            <li>
              <b className="">Ingredient-Based Recipe Generation:</b>
              {` Input up to five ingredients, and "Cooking Without Thinking" will present you with a single, thoughtfully curated recipe using your ingredients.`}
            </li>
            <li>
              <b className="">Avoid Decision Paralysis:</b>
              {` Say goodbye to overwhelming choices. Our app narrows it down to one perfect recipe, ensuring you enjoy your cooking experience.`}
            </li>
            <li>
              <b className="">Enhance Your Dish:</b>
              {` Discover suggested additional ingredients that complement your selection, elevating the flavor and variety of your meal.`}
            </li>
            <li>
              <b className="">Guided Cooking:</b>
              {` Follow easy-to-understand, step-by-step instructions that cater to both novice and experienced cooks.`}
            </li>
            <li>
              <b className="">Save :</b>
              {` Save your favorite recipes for later.`}
            </li>
          </div>
        </div>
        <div className="hidden flex-1 rounded-lg lg:block">
          <Image
            src={"/close-up-anthropomorphic-robot-cooking_23-2150865941.jpg"}
            alt="bot making food"
            className="rounded-lg object-contain"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
