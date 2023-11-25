import Image from "next/image";
import Link from "next/link";
import React from "react";

const Item = ({
  imgURL,
  recipeName,
  id,
}: {
  imgURL: string;
  recipeName: string;
  id: string;
}) => {
  return (
    <div className="rounded-lg shadow-md lg:w-[330px]">
      <Link href={`/recipe/${id}`}>
        <div className="rounded-lg px-4 py-6 hover:cursor-pointer">
          <Image
            width={412}
            height={412}
            className="rounded-t-lg"
            src={imgURL}
            alt={recipeName}
          />
          <div className="flex items-center justify-between py-2">
            <h5 className="text-md flex-1 font-medium">{recipeName}</h5>
            <p className=" text-right text-sm font-medium">Date: 2023-11-06</p>
          </div>
          <div className="">
            <button className="w-full rounded-md bg-slate-100 p-2 text-black hover:bg-slate-200">
              See the recipe
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
