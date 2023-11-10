import Link from "next/link";
import React from "react";

const AppDescription = () => {
  return (
    <div className="p-5 lg:flex lg:justify-center my-10 ">
      <div className="rounded-md shadow-md p-5 lg:w-1/2 bg-white">
        <p className="text-sm">
          <span className="text-blue-500 font-bold text-lg">{`"Cooking Without Thinking,"`}</span>
          {` is your cooking guide to overcome the paradox of choice in the kitchen. This app is your ultimate kitchen companion for those moments when you open your pantry or refrigerator, see a few ingredients, and wonder, "What can I cook with these?". It simplifies the decision-making process by generating a single, delicious recipe based on your ingredients, along with suggested additional ingredients to make your meal truly unforgettable. With clear step-by-step instructions, you can effortlessly prepare a delicious dish, all without the stress of too many choices.`}
        </p>

        <Link
          href={"/about"}
          className="text-xs font-semibold text-blue-500 hover:underline">
          Click for more information about the application.
        </Link>
        <h3 className="text-xl font-medium text-red-600">Note!</h3>
        <p className="text-sm">
          It generates not one, not two, but up to <b>three</b> healthy and
          delicious meals per day, all within our budget-friendly approach,
          because we care about your health and our wallet lol! 😄🥦💰
        </p>
        <p className="text-sm font-bold text-blue-600">
          To start using it, click in the select, add an ingredient then click
          tap or enter then add another one. <b>(max ingredient number is 5)</b>
        </p>
      </div>
    </div>
  );
};

export default AppDescription;
