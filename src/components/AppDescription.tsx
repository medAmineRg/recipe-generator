import Link from "next/link";
import React from "react";

const AppDescription = () => {
  return (
    <div className="my-10 lg:flex lg:justify-center ">
      <div className="rounded-md border p-5 shadow-md lg:w-1/2">
        {/* <p className="text-sm">
          <span className="text-blue-500 font-bold text-lg">{`"Cooking Without Thinking,"`}</span>
          {` is your cooking guide to overcome the paradox of choice in the kitchen. This app is your ultimate kitchen companion for those moments when you open your pantry or refrigerator, see a few ingredients, and wonder, "What can I cook with these?". It simplifies the decision-making process by generating a single, delicious recipe based on your ingredients, along with suggested additional ingredients to make your meal truly unforgettable. With clear step-by-step instructions, you can effortlessly prepare a delicious dish, all without the stress of too many choices.`}
        </p> */}
        <h3 className="text-xl font-semibold text-red-600">Note!</h3>
        <p className="my-5 text-sm">
          To start using it, click in the select, add an ingredient then click
          tap or enter then add another one.{" "}
          <span className="text-blue-400">(max ingredient number is 10)</span>
        </p>
        <p className="text-sm">
          It generates not one, not two, but up to <b>three</b> healthy and
          delicious meals per day, all within our budget-friendly approach,
          because we care about your health and our wallet lol! 😄🥦💰
        </p>
        <Link href={"/"} className="text-xs text-blue-400 hover:underline">
          Click for more information about the application.
        </Link>
      </div>
    </div>
  );
};

export default AppDescription;
